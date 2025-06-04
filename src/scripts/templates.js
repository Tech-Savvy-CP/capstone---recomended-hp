export function generatePhoneTemplate({id, image, name, price, ram, storage, kamera, baterai, chipset, display}){
    // Helper function untuk clean up text
    const cleanSpec = (spec) => {
        if (!spec || spec === 'N/A') return 'N/A';
        
        // Clean up common messy patterns
        let cleaned = spec.toString()
            .replace(/\([^)]*\)/g, '') // Remove parentheses content
            .replace(/[,;]\s*$/, '') // Remove trailing comma/semicolon
            .replace(/\s+/g, ' ') // Normalize spaces
            .trim();
        
        // Keep only first meaningful part
        if (cleaned.includes(',')) {
            cleaned = cleaned.split(',')[0].trim();
        }
        
        return cleaned || 'N/A';
    };
    
    // Format RAM berdasarkan struktur JSON yang benar
    const formatRAM = (ramText) => {
        if (!ramText) return 'N/A';
        
        // Format: "64GB 4GB RAM, 128GB 6GB RAM" -> ambil RAM yang terbesar
        const ramMatches = ramText.match(/(\d+)GB\s+RAM/gi);
        if (ramMatches && ramMatches.length > 0) {
            // Ambil nilai RAM terbesar
            const ramValues = ramMatches.map(match => {
                const value = match.match(/(\d+)GB/i);
                return value ? parseInt(value[1]) : 0;
            });
            const maxRam = Math.max(...ramValues);
            return `${maxRam}GB RAM`;
        }
        
        // Fallback untuk format lain
        const singleRamMatch = ramText.match(/(\d+)GB.*RAM/i);
        return singleRamMatch ? `${singleRamMatch[1]}GB RAM` : cleanSpec(ramText);
    };
    
    // Format Storage berdasarkan struktur JSON yang benar
    const formatStorage = (storageText) => {
        if (!storageText) return 'N/A';
        
        // Format: "64GB 4GB RAM, 128GB 6GB RAM" -> ambil storage yang terbesar
        const storageMatches = storageText.match(/(\d+)GB(?!\s+RAM)/gi);
        if (storageMatches && storageMatches.length > 0) {
            // Ambil nilai storage terbesar
            const storageValues = storageMatches.map(match => {
                const value = match.match(/(\d+)/);
                return value ? parseInt(value[1]) : 0;
            });
            const maxStorage = Math.max(...storageValues);
            return `${maxStorage}GB`;
        }
        
        // Fallback
        const singleStorageMatch = storageText.match(/(\d+)GB/i);
        return singleStorageMatch ? `${singleStorageMatch[1]}GB` : cleanSpec(storageText);
    };
    
    const formatCamera = (cameraText) => {
        if (!cameraText) return 'N/A';
        const match = cameraText.match(/(\d+)\s*MP/i);
        return match ? `${match[1]}MP` : cleanSpec(cameraText);
    };
    
    const formatBattery = (batteryText) => {
        if (!batteryText) return 'N/A';
        const match = batteryText.match(/(\d+)\s*mAh/i);
        return match ? `${match[1]}mAh` : cleanSpec(batteryText);
    };
    
    const formatDisplay = (displayText) => {
        if (!displayText) return 'N/A';
        const sizeMatch = displayText.match(/(\d+\.?\d*)\s*inch/i);
        return sizeMatch ? `${sizeMatch[1]}"` : cleanSpec(displayText);
    };
    
    const formatChipset = (chipsetText) => {
        if (!chipsetText) return 'N/A';
        
        let cleaned = chipsetText.toString();
        
        // Ekstrak nama chipset yang lebih user-friendly
        if (cleaned.includes('Helio')) {
            const helioMatch = cleaned.match(/Helio\s+([A-Z]\d+)/i);
            if (helioMatch) return `Helio ${helioMatch[1]}`;
        }
        
        if (cleaned.includes('Snapdragon')) {
            const snapMatch = cleaned.match(/Snapdragon\s+(\d+[\w\s]*)/i);
            if (snapMatch) return `Snapdragon ${snapMatch[1].trim()}`;
        }
        
        if (cleaned.includes('Dimensity')) {
            const dimMatch = cleaned.match(/Dimensity\s+(\d+[\w\s]*)/i);
            if (dimMatch) return `Dimensity ${dimMatch[1].trim()}`;
        }
        
        if (cleaned.includes('Exynos')) {
            const exyMatch = cleaned.match(/Exynos\s+(\d+[\w\s]*)/i);
            if (exyMatch) return `Exynos ${exyMatch[1].trim()}`;
        }
        
        if (cleaned.includes('Unisoc')) {
            const unisocMatch = cleaned.match (/Unisoc\s+([A-Z\d\s]+)/i);
            if (unisocMatch) return `Unisoc ${unisocMatch[1].trim()}`;
        }
        
        // Jika tidak ada match khusus, ambil bagian yang relevan
        cleaned = cleaned
            .replace(/\([^)]*\)/g, '') // hapus kurung
            .replace(/\d+\s*nm.*$/i, '') // hapus teknologi nm
            .replace(/octa.*$/i, '') // hapus info octa-core
            .trim();
        
        // Limit panjang untuk UI
        if (cleaned.length > 20) {
            cleaned = cleaned.substring(0, 20) + '...';
        }
        
        return cleaned || 'N/A';
    };

    return`
        <div class="col-lg-3 mt-3">
            <div class="card text-center border-5 shadow-lg phone-card" style="border-color: #F6EBDA; cursor: pointer; transition: all 0.3s ease;" data-phone-model="${name}" data-phone-id="${id}">
                <div class="card-body" style="padding: 1.5rem;">
                    <img src="${image}" class="rounded-3 img-fluid" alt="" style="max-height: 200px; object-fit: contain;">
                    
                    <div class="mt-3">
                        <h5 style="font-size: 1.1rem; font-weight: 700; color: #2c3e50; margin-bottom: 0.5rem;">
                            <b>${name}</b>
                        </h5>
                    </div>
                    
                    <div class="mt-2 mb-3">
                        <h5 style="color: #e74c3c; font-weight: 800; font-size: 1.3rem;">
                            <b>${price}</b>
                        </h5>
                    </div>
                    
                    <!-- Specs Grid -->
                    <div class="specs-grid" style="
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 0.8rem;
                        margin: 1rem 0;
                        text-align: left;
                    ">
                        <!-- Processor -->
                        <div class="spec-item" style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.5rem;
                            background: #f8f9fa;
                            border-radius: 8px;
                            grid-column: 1 / -1;
                        ">
                            <i class="fa fa-microchip" style="color: #FF902A; font-size: 16px; min-width: 20px;"></i>
                            <span style="font-size: 0.85rem; color: #34495e; font-weight: 500;">
                                ${formatChipset(chipset)}
                            </span>
                        </div>
                        
                        <!-- RAM -->
                        <div class="spec-item" style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.5rem;
                            background: #f8f9fa;
                            border-radius: 8px;
                        ">
                            <i class="fa fa-memory" style="color: #3498db; font-size: 16px; min-width: 20px;"></i>
                            <span style="font-size: 0.85rem; color: #34495e; font-weight: 500;">
                                ${formatRAM(ram)}
                            </span>
                        </div>
                        
                        <!-- Storage -->
                        <div class="spec-item" style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.5rem;
                            background: #f8f9fa;
                            border-radius: 8px;
                        ">
                            <i class="fa fa-hdd-o" style="color: #f39c12; font-size: 16px; min-width: 20px;"></i>
                            <span style="font-size: 0.85rem; color: #34495e; font-weight: 500;">
                                ${formatStorage(storage)}
                            </span>
                        </div>
                        
                        <!-- Camera -->
                        <div class="spec-item" style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.5rem;
                            background: #f8f9fa;
                            border-radius: 8px;
                        ">
                            <i class="fa fa-camera" style="color: #9b59b6; font-size: 16px; min-width: 20px;"></i>
                            <span style="font-size: 0.85rem; color: #34495e; font-weight: 500;">
                                ${formatCamera(kamera)}
                            </span>
                        </div>
                        
                        <!-- Battery -->
                        <div class="spec-item" style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.5rem;
                            background: #f8f9fa;
                            border-radius: 8px;
                        ">
                            <i class="fa fa-battery-full" style="color: #27ae60; font-size: 16px; min-width: 20px;"></i>
                            <span style="font-size: 0.85rem; color: #34495e; font-weight: 500;">
                                ${formatBattery(baterai)}
                            </span>
                        </div>
                        
                        <!-- Display -->
                        <div class="spec-item" style="
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            padding: 0.5rem;
                            background: #f8f9fa;
                            border-radius: 8px;
                        ">
                            <i class="fa fa-tv" style="color: #e67e22; font-size: 16px; min-width: 20px;"></i>
                            <span style="font-size: 0.85rem; color: #34495e; font-weight: 500;">
                                ${formatDisplay(display)}
                            </span>
                        </div>
                    </div>
                    
                    <div class="mt-3" style="padding-top: 0.5rem; border-top: 1px solid #ecf0f1;">
                        <small class="text-muted" style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 0.5rem;
                            font-weight: 500;
                        ">
                            👆 Klik untuk lihat review
                        </small>
                    </div>
                </div>
            </div>
        </div>
    `
};

export function generateCommentTemplate({coment, nama}){
    return `
         <div class="review-section" style="
           background: linear-gradient(135deg, #ffffff, #f8f9fa);
           border-left: 4px solid #FF902A;
           margin: 1rem 0;
           padding: 1.5rem;
           border-radius: 12px;
           box-shadow: 0 4px 15px rgba(0,0,0,0.08);
           animation: slideInFromBottom 0.5s ease-out;
           transition: all 0.3s ease;
         ">
            <p style="
              margin-bottom: 1rem;
              font-size: 1rem;
              line-height: 1.6;
              color: #2c3e50;
              font-style: italic;
            ">"${coment}"</p>
            <p style="
              margin: 0;
              font-weight: 600;
              color: #FF902A;
              font-size: 0.9rem;
              text-align: right;
            ">— ${nama}</p>
        </div>
        <style>
          @keyframes slideInFromBottom {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .review-section:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 144, 42, 0.15);
          }
        </style>
    `;
}