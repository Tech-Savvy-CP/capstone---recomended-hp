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

const Phones = {
  async getPhone() {
    return [...phone];
  },

  async getComment() {
    return [...comment];
  },
};

export default Phones;
