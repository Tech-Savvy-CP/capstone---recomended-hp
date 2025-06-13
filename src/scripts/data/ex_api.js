let phone = [
  {
    id: 1,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-214-mockup_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ba177b08cb14691a452d23b9557694d2",
    name: "Model A",
    price: "Rp. 2,6 JT",
    ram: "4GB",
    storage: "128GB",
    kamera: "12MP",
    baterai: "4000 mAh",
  },
  {
    id: 1,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-214-mockup_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ba177b08cb14691a452d23b9557694d2",
    name: "Model B",
    price: "Rp. 3,6 JT",
    ram: "8GB",
    storage: "256GB",
    kamera: "24MP",
    baterai: "5000 mAh",
  },
  {
    id: 1,
    image:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-214-mockup_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ba177b08cb14691a452d23b9557694d2",
    name: "Model C",
    price: "Rp.4,6 JT",
    ram: "12GB",
    storage: "512GB",
    kamera: "50MP",
    baterai: "6000 mAh",
  },
];

let comment = [
  {
    coment:
      "Produk ini luar biasa! Sangat membantu dalam pekerjaan sehari-hari.",
    nama: "(nama)",
  },
  {
    coment:
      "Produk ini luar biasa! Sangat membantu dalam pekerjaan sehari-hari.",
    nama: "(nama)",
  },
  {
    coment:
      "Produk ini luar biasa! Sangat membantu dalam pekerjaan sehari-hari.",
    nama: "(nama)",
  },
];

// Fungsi konversi mata uang ke Rupiah
function convertToRupiah(priceString) {
  if (!priceString) return "Harga tidak tersedia";

  // Exchange rates (approximate)
  const exchangeRates = {
    USD: 15800, // 1 USD = 15,800 IDR
    EUR: 17200, // 1 EUR = 17,200 IDR
    GBP: 20000, // 1 GBP = 20,000 IDR
    SGD: 11700, // 1 SGD = 11,700 IDR
    MYR: 3500, // 1 MYR = 3,500 IDR
  };

  // Cek jika sudah dalam format Rupiah
  if (
    priceString.toLowerCase().includes("rp") ||
    priceString.toLowerCase().includes("idr")
  ) {
    return priceString;
  }

  // Extract currency dan amount
  const currencyMatch = priceString.match(/([€$£])?\s*(\d+(?:[\.,]\d+)?)/);
  const currencyWordMatch = priceString.match(/(USD|EUR|GBP|SGD|MYR)/i);

  if (!currencyMatch) return priceString; // Return original jika tidak bisa parse

  const amount = parseFloat(currencyMatch[2].replace(",", "."));
  let currency = "USD"; // default

  // Deteksi currency dari symbol atau word
  if (currencyMatch[1]) {
    switch (currencyMatch[1]) {
      case "$":
        currency = "USD";
        break;
      case "€":
        currency = "EUR";
        break;
      case "£":
        currency = "GBP";
        break;
    }
  } else if (currencyWordMatch) {
    currency = currencyWordMatch[1].toUpperCase();
  }

  // Convert ke IDR
  const rate = exchangeRates[currency] || exchangeRates.USD;
  const idrAmount = Math.round(amount * rate);

  // Format ke Rupiah
  return `Rp ${idrAmount.toLocaleString("id-ID")}`;
}

const Phones = {
  async getPhone() {
    return [...phone];
  },

  async getPhoneByBrand(brand, maxPrice = 0) {
    try {
      const response = await fetch("phones_specs.json");
      const data = await response.json();

      // Filter HP berdasarkan brand
      const phonesByBrand = data.filter(
        (phone) => phone.phone_brand.toLowerCase() === brand.toLowerCase()
      );

      if (phonesByBrand.length === 0) return [];

      // Ambil HP terbaik berdasarkan kriteria (RAM, price, kamera)
      const bestPhones = phonesByBrand
        .filter(
          (phone) =>
            phone.specs && phone.specs.Memory && phone.specs["Main Camera"]
        )
        .map((phone) => {
          // Extract specs untuk sorting
          const ramText = phone.specs.Memory?.Internal || "0GB";
          const ramMatch = ramText.match(/(\d+)GB.*RAM/i);
          const ram = ramMatch ? parseInt(ramMatch[1]) : 0;

          const cameraText =
            phone.specs["Main Camera"]?.Dual ||
            phone.specs["Main Camera"]?.Triple ||
            "0 MP";
          const cameraMatch = cameraText.match(/(\d+)\s*MP/i);
          const camera = cameraMatch ? parseInt(cameraMatch[1]) : 0;

          const priceText = phone.price || "0";
          const priceMatch = priceText.match(/[\$€]?\s*(\d+)/);
          const price = priceMatch ? parseInt(priceMatch[1]) : 0;

          return {
            ...phone,
            sortScore: ram * 10 + camera + (price > 100 ? 50 : 0), // scoring untuk ranking
            extractedPrice: price,
          };
        })
        .filter((phone) => {
          // Filter berdasarkan harga maksimal (konversi ke rupiah)
          if (maxPrice === 0) return true; // jika 0, tampilkan semua

          const priceInIDR = getPriceInIDR(phone.price, phone.extractedPrice);
          const maxPriceInIDR = maxPrice * 1000000; // konversi juta ke rupiah

          return priceInIDR <= maxPriceInIDR; // HP harus <= harga maksimal
        })
        .sort((a, b) => b.sortScore - a.sortScore) // HP terbaik dulu
        .slice(0, 3) // ambil 3 HP terbaik
        .map((phone) => ({
          id: phone.phone_model,
          image:
            phone.model_image ||
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-214-mockup_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ba177b08cb14691a452d23b9557694d2", // gunakan model_image asli atau fallback ke dummy
          name: phone.phone_model,
          price: convertToRupiah(phone.price),
          ram: phone.specs.Memory?.Internal || "N/A", // kirim data mentah untuk diparse di template
          storage: phone.specs.Memory?.Internal || "N/A", // kirim data mentah untuk diparse di template
          kamera:
            phone.specs["Main Camera"]?.Dual ||
            phone.specs["Main Camera"]?.Triple ||
            "N/A",
          baterai:
            phone.specs.Battery?.["Non-removable Li-Po"] ||
            phone.specs.Battery?.Type ||
            "N/A",
          chipset:
            phone.specs.Platform?.Chipset || phone.specs.Platform?.CPU || "N/A",
          display:
            phone.specs.Display?.Size || phone.specs.Display?.Type || "N/A",
        }));

      return bestPhones;
    } catch (e) {
      console.error("Error fetching phones:", e);
      return [...phone]; // fallback ke data dummy
    }
  },

  async getComment() {
    return [...comment];
  },

  async getCommentByBrand(brand) {
    try {
      const response = await fetch("reviews_yt.json");
      const data = await response.json();
      const commentsByBrand = data.comments[brand];
      if (!commentsByBrand) return [];

      // Gabungkan semua review dari semua model
      const allReviews = Object.values(commentsByBrand).flat();

      // Filter review yang mengandung nama merk dan sentiment positif
      const relevantReviews = allReviews
        .filter((item) => {
          const brandNameInText = item.text
            .toLowerCase()
            .includes(brand.toLowerCase());
          const isPositive = item.sentiment === "positive";
          return brandNameInText && isPositive;
        })
        .sort((a, b) => b.like_count - a.like_count) // Sort berdasarkan like_count tertinggi
        .slice(0, 5) // ambil 5 review paling relevan
        .map((item) => ({
          coment: item.text,
          nama: item.author,
        }));

      // Jika ada review yang sesuai kriteria, return itu
      if (relevantReviews.length > 0) {
        return relevantReviews;
      }

      // Jika tidak ada review yang sesuai kriteria, fallback ke review positif saja
      const positiveReviews = allReviews
        .filter((item) => item.sentiment === "positive")
        .sort((a, b) => b.like_count - a.like_count)
        .slice(0, 5)
        .map((item) => ({
          coment: item.text,
          nama: item.author,
        }));

      return positiveReviews;
    } catch (e) {
      return [];
    }
  },

  async getCommentByPhoneModel(brand, phoneModel) {
    try {
      const response = await fetch("reviews_yt.json");
      const data = await response.json();
      const commentsByBrand = data.comments[brand];
      if (!commentsByBrand) return [];

      // Gabungkan semua review dari semua model
      const allReviews = Object.values(commentsByBrand).flat();

      // Extract model keywords untuk pencarian dengan variasi yang lebih baik
      const modelKeywords = phoneModel
        .toLowerCase()
        .replace(/[^\w\s]/g, "") // hapus karakter khusus
        .replace(/\s+/g, " ") // normalize spasi
        .split(" ")
        .filter((word) => word.length > 1) // ambil kata minimal 2 huruf
        .filter(
          (word) =>
            !["hp", "phone", "smartphone", "android", "ios"].includes(word)
        ); // hapus kata generik

      // Tambahkan variasi keyword (misal: A54 -> A 54, Galaxy -> galaXy)
      const allKeywords = [...modelKeywords];
      modelKeywords.forEach((keyword) => {
        // Tambah variasi dengan spasi untuk series (A54 -> A 54)
        if (/^[a-z]\d+$/i.test(keyword)) {
          allKeywords.push(keyword.charAt(0) + " " + keyword.slice(1));
        }
        // Tambah variasi tanpa spasi
        allKeywords.push(keyword.replace(/\s/g, ""));
      });

      console.log("Searching reviews for model:", phoneModel);
      console.log("Using keywords:", allKeywords);

      // Cari review spesifik untuk model ini dengan scoring
      const modelSpecificReviews = allReviews
        .map((item) => {
          const textLower = item.text.toLowerCase();
          let score = 0;

          // Cek brand name (basic score)
          if (textLower.includes(brand.toLowerCase())) {
            score += 1;
          }

          // Cek model keywords (higher score)
          const matchedKeywords = allKeywords.filter((keyword) =>
            textLower.includes(keyword.toLowerCase())
          );
          score += matchedKeywords.length * 3;

          // Bonus untuk sentiment positif
          if (item.sentiment === "positive") {
            score += 2;
          }

          // Bonus untuk like count tinggi
          if (item.like_count > 10) {
            score += 1;
          }

          return {
            ...item,
            relevanceScore: score,
            matchedKeywords,
          };
        })
        .filter((item) => item.relevanceScore > 0) // hanya yang ada match
        .sort((a, b) => {
          // Sort berdasarkan relevance score dulu, lalu like count
          if (b.relevanceScore !== a.relevanceScore) {
            return b.relevanceScore - a.relevanceScore;
          }
          return b.like_count - a.like_count;
        })
        .slice(0, 5)
        .map((item) => ({
          coment: item.text,
          nama: item.author,
        }));

      console.log(
        "Found",
        modelSpecificReviews.length,
        "specific reviews for",
        phoneModel
      );

      // Jika ada review untuk model spesifik dengan score bagus, return itu
      if (modelSpecificReviews.length > 0) {
        return modelSpecificReviews;
      }

      // Fallback: cari review yang hanya mengandung brand name
      const brandOnlyReviews = allReviews
        .filter((item) => {
          const textLower = item.text.toLowerCase();
          return (
            textLower.includes(brand.toLowerCase()) &&
            item.sentiment === "positive"
          );
        })
        .sort((a, b) => b.like_count - a.like_count)
        .slice(0, 5)
        .map((item) => ({
          coment: item.text,
          nama: item.author,
        }));

      console.log(
        "Fallback to brand reviews:",
        brandOnlyReviews.length,
        "found"
      );
      return brandOnlyReviews;
    } catch (e) {
      console.error("Error in getCommentByPhoneModel:", e);
      return [];
    }
  },

  async getRandomCommentByBrand(brand) {
    try {
      const response = await fetch("reviews_yt.json");
      const data = await response.json();
      const commentsByBrand = data.comments[brand];
      if (!commentsByBrand) return [];
      // Gabungkan semua review, shuffle, ambil 5 random
      const allReviews = Object.values(commentsByBrand).flat();
      const shuffled = allReviews.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 5).map((item) => ({
        coment: item.text,
        nama: item.author,
      }));
    } catch (e) {
      return [];
    }
  },

  async getEcommerceReviewByBrand(brand) {
    try {
      const response = await fetch("reviews_e-commerce.json");
      const data = await response.json();

      // Filter review berdasarkan brand
      const brandReviews = data.filter((review) => {
        if (!review.search_phone_brand || !review.message) return false;
        return review.search_phone_brand.toLowerCase() === brand.toLowerCase();
      });

      if (brandReviews.length === 0) return [];

      // Filter review dengan sentiment positif dan rating tinggi
      const positiveReviews = brandReviews
        .filter((review) => {
          const hasGoodRating = review.rating >= 4;
          const hasPositiveSentiment =
            review.predicted_sentiment === "Positive";
          return (
            hasGoodRating && hasPositiveSentiment && review.cleaned_message
          );
        })
        .sort((a, b) => b.rating - a.rating) // Sort berdasarkan rating tertinggi
        .slice(0, 5) // ambil 5 review terbaik
        .map((review) => ({
          coment: review.message,
          nama: review.user_name || "Pengguna Tokopedia",
        }));

      // Jika tidak ada review positif, ambil review dengan rating tinggi saja
      if (positiveReviews.length === 0) {
        const highRatedReviews = brandReviews
          .filter((review) => review.rating >= 4 && review.message)
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5)
          .map((review) => ({
            coment: review.message,
            nama: review.user_name || "Pengguna Tokopedia",
          }));

        return highRatedReviews;
      }

      return positiveReviews;
    } catch (e) {
      console.error("Error fetching e-commerce reviews:", e);
      return [];
    }
  },

  async getEcommerceReviewByPhoneModel(brand, phoneModel) {
    try {
      const response = await fetch("reviews_e-commerce.json");
      const data = await response.json();

      // Filter berdasarkan brand terlebih dahulu
      const brandReviews = data.filter((review) => {
        if (!review.search_phone_brand || !review.message) return false;
        return review.search_phone_brand.toLowerCase() === brand.toLowerCase();
      });

      if (brandReviews.length === 0) return [];

      // Extract model keywords untuk pencarian yang lebih baik
      const modelKeywords = phoneModel
        .toLowerCase()
        .replace(/[^\w\s]/g, "") // hapus karakter khusus
        .replace(/\s+/g, " ") // normalize spasi
        .split(" ")
        .filter((word) => word.length > 1) // ambil kata minimal 2 huruf
        .filter(
          (word) =>
            !["hp", "phone", "smartphone", "android", "ios"].includes(word)
        ); // hapus kata generik

      // Tambahkan variasi keyword
      const allKeywords = [...modelKeywords];
      modelKeywords.forEach((keyword) => {
        // Tambah variasi dengan spasi untuk series (A54 -> A 54)
        if (/^[a-z]\d+$/i.test(keyword)) {
          allKeywords.push(keyword.charAt(0) + " " + keyword.slice(1));
        }
        // Tambah variasi tanpa spasi
        allKeywords.push(keyword.replace(/\s/g, ""));
      });

      console.log("Searching e-commerce reviews for model:", phoneModel);
      console.log("Using keywords:", allKeywords);

      // Cari review spesifik untuk model dengan scoring
      const modelSpecificReviews = brandReviews
        .map((review) => {
          const messageText = (
            review.message ||
            review.cleaned_message ||
            ""
          ).toLowerCase();
          const productName = (review.product_name || "").toLowerCase();
          let score = 0;

          // Cek model keywords di message dan product name
          const matchedKeywords = allKeywords.filter(
            (keyword) =>
              messageText.includes(keyword.toLowerCase()) ||
              productName.includes(keyword.toLowerCase())
          );
          score += matchedKeywords.length * 3;

          // Bonus untuk rating tinggi
          if (review.rating >= 4) {
            score += 2;
          }

          // Bonus untuk sentiment positif
          if (review.predicted_sentiment === "Positive") {
            score += 2;
          }

          return {
            ...review,
            relevanceScore: score,
            matchedKeywords,
          };
        })
        .filter((review) => review.relevanceScore > 0) // hanya yang ada match
        .sort((a, b) => {
          // Sort berdasarkan relevance score dulu, lalu rating
          if (b.relevanceScore !== a.relevanceScore) {
            return b.relevanceScore - a.relevanceScore;
          }
          return b.rating - a.rating;
        })
        .slice(0, 5)
        .map((review) => ({
          coment: review.message || review.cleaned_message,
          nama: review.user_name || "Pengguna Tokopedia",
        }));

      console.log(
        "Found",
        modelSpecificReviews.length,
        "specific e-commerce reviews for",
        phoneModel
      );

      // Jika ada review untuk model spesifik, return itu
      if (modelSpecificReviews.length > 0) {
        return modelSpecificReviews;
      }

      // Fallback: review brand dengan rating tinggi
      const brandOnlyReviews = brandReviews
        .filter((review) => review.rating >= 4 && review.message)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((review) => ({
          coment: review.message,
          nama: review.user_name || "Pengguna Tokopedia",
        }));

      console.log(
        "Fallback to brand e-commerce reviews:",
        brandOnlyReviews.length,
        "found"
      );
      return brandOnlyReviews;
    } catch (e) {
      console.error("Error in getEcommerceReviewByPhoneModel:", e);
      return [];
    }
  },

  async getRandomEcommerceReviewByBrand(brand) {
    try {
      const response = await fetch("reviews_e-commerce.json");
      const data = await response.json();

      // Filter review berdasarkan brand
      const brandReviews = data.filter((review) => {
        if (!review.search_phone_brand || !review.message) return false;
        return review.search_phone_brand.toLowerCase() === brand.toLowerCase();
      });

      if (brandReviews.length === 0) return [];

      // Filter review yang memiliki message/content
      const validReviews = brandReviews.filter(
        (review) => review.message && review.message.trim().length > 10
      );

      // Shuffle array untuk mendapatkan review random
      const shuffled = validReviews.sort(() => Math.random() - 0.5);

      // Ambil 5 review random
      return shuffled.slice(0, 5).map((review) => ({
        coment: review.message,
        nama: review.user_name || "Pengguna Tokopedia",
      }));
    } catch (e) {
      console.error("Error fetching random e-commerce reviews:", e);
      return [];
    }
  },
};

// Fungsi helper untuk mendapatkan harga dalam IDR
function getPriceInIDR(priceString, extractedPrice) {
  const exchangeRates = {
    USD: 15800,
    EUR: 17200,
    GBP: 20000,
    SGD: 11700,
    MYR: 3500,
  };

  if (!priceString) return 0;

  // Jika sudah Rupiah, extract angkanya
  if (
    priceString.toLowerCase().includes("rp") ||
    priceString.toLowerCase().includes("idr")
  ) {
    const rupiahMatch = priceString.match(/(\d+(?:[\.,]\d+)?)/);
    return rupiahMatch ? parseFloat(rupiahMatch[1].replace(",", "")) : 0;
  }

  // Deteksi currency dan konversi
  let currency = "USD";
  const currencyMatch = priceString.match(/([€$£])/);
  const currencyWordMatch = priceString.match(/(USD|EUR|GBP|SGD|MYR)/i);

  if (currencyMatch) {
    switch (currencyMatch[1]) {
      case "$":
        currency = "USD";
        break;
      case "€":
        currency = "EUR";
        break;
      case "£":
        currency = "GBP";
        break;
    }
  } else if (currencyWordMatch) {
    currency = currencyWordMatch[1].toUpperCase();
  }

  const rate = exchangeRates[currency] || exchangeRates.USD;
  return (extractedPrice || 0) * rate;
}

export default Phones;
