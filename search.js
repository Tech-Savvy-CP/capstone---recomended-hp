document.addEventListener('DOMContentLoaded', function() {
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const priceRadios = document.querySelectorAll('input[name="price"]');
    const resultsContainer = document.querySelector('.search-results');

    // Contoh data produk
    const products = [
        { brand: 'samsung', name: 'Samsung Galaxy S21', price: 8999000 },
        { brand: 'samsung', name: 'Samsung Galaxy A52', price: 4999000 },
        { brand: 'iphone', name: 'iPhone 13', price: 12999000 },
        { brand: 'iphone', name: 'iPhone SE', price: 6999000 },
        { brand: 'xiaomi', name: 'Xiaomi Redmi Note 10', price: 2999000 },
        { brand: 'oppo', name: 'Oppo Reno 6', price: 5999000 },
        { brand: 'vivo', name: 'Vivo V21', price: 4999000 }
    ];

    // Fungsi untuk memfilter produk
    function filterProducts() {
        const selectedBrands = Array.from(brandCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        
        const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
        
        let filteredProducts = products;
        
        // Filter berdasarkan brand
        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }
        
        // Filter berdasarkan harga
        if (selectedPrice) {
            const priceRanges = {
                '2jt': { min: 1000000, max: 3000000 },
                '5jt': { min: 3000000, max: 7000000 },
                '7jt': { min: 5000000, max: 9000000 },
                '10jt': { min: 8000000, max: 12000000 }
            };
            
            const range = priceRanges[selectedPrice];
            filteredProducts = filteredProducts.filter(product => 
                product.price >= range.min && product.price <= range.max
            );
        }
        
        displayResults(filteredProducts);
    }
    
    // Fungsi untuk menampilkan hasil
    function displayResults(products) {
        if (products.length === 0) {
            resultsContainer.innerHTML = '<p>Tidak ada produk yang sesuai dengan filter Anda.</p>';
            return;
        }
        
        let html = '<div class="product-grid">';
        products.forEach(product => {
            const priceFormatted = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(product.price);
            
            html += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>Harga: ${priceFormatted}</p>
                </div>
            `;
        });
        html += '</div>';
        
        resultsContainer.innerHTML = html;
    }
    
    // Event listeners
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    
    priceRadios.forEach(radio => {
        radio.addEventListener('change', filterProducts);
    });
});