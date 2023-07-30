import React, { useState } from "react";
import Navbar from "./Home";
import Footer from "./Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Iphone 11 Pro",
    price: 249,
    image: "./public/Iphone12.jpg",
    category: "iPhone",
  },
  {
    id: 2,
    name: "Iphone 12 Pro",
    price: 299,
    image: "./public/Iphone12.jpg",
    category: "iPhone",
  },
  {
    id: 3,
    name: "Iphone 13 Pro",
    price: 349,
    image: "./public/Iphone12.jpg",
    category: "iPhone",
  },
  {
    id: 4,
    name: "Samsung Galaxy S3",
    price: 249,
    image: "./public/Samsung.jpg",
    category: "Samsung",
  },
  {
    id: 5,
    name: "Samsung Galaxy S1",
    price: 149,
    image: "./public/Samsung.jpg",
    category: "Samsung",
  },
  {
    id: 6,
    name: "Samsung Galaxy S2",
    price: 199,
    image: "./public/Samsung.jpg",
    category: "Samsung",
  },
  {
    id: 7,
    name: "Ipad Mini",
    price: 149,
    image: "./public/IpadAir.jpg",
    category: "iPad",
  },
  {
    id: 8,
    name: "Ipad Pro",
    price: 299,
    image: "./public/IpadAir.jpg",
    category: "iPad",
  },
  {
    id: 9,
    name: "Ipad Air",
    price: 199,
    image: "./public/IpadAir.jpg",
    category: "iPad",
  },
  {
    id: 10,
    name: "Nokia 3310",
    price: 1000,
    image: "./public/Nokia3310.jpg",
    category: "Nokia",
  },
];

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleCategoryInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    // Ajouter ou supprimer la catégorie de la liste des catégories sélectionnées
    if (isChecked) {
      setSelectedCategory((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategory((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    }
  };

  React.useEffect(() => {
    // Filtrer les produits en fonction des catégories sélectionnées
    const filtered = products.filter((product) => {
      if (selectedCategory.length === 0 || selectedCategory.includes("all")) {
        return true; // Afficher tous les produits si toutes les catégories sont sélectionnées ou si la catégorie "all" est sélectionnée
      }
      return selectedCategory.includes(product.category);
    });
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  const styleDiv = {
    border: "gray solid 1px",
  };
  const background = {
    backgroundColor: "#ACADAF",
    minHeight: "100vh",
  };
  const StyleImage = {
    width: "100%",
    height: "auto",
  };

  return (
    <div style={background}>
      <Navbar />
      <div className="container">
        <div className="text-center" style={styleDiv}>
          <label className="mx-5">
            <input
              type="checkbox"
              value="iPhone"
              onChange={handleCategoryInputChange}
            />
            <h5>iPhone</h5>
          </label>
          <label className="mx-5">
            <input
              type="checkbox"
              value="Samsung"
              onChange={handleCategoryInputChange}
            />
            <h5>Samsung</h5>
          </label>
          <label className="mx-5">
            <input
              type="checkbox"
              value="iPad"
              onChange={handleCategoryInputChange}
            />
            <h5>iPad</h5>
          </label>
          <label className="mx-5">
            <input
              type="checkbox"
              value="Nokia"
              onChange={handleCategoryInputChange}
            />
            <h5>Nokia</h5>
          </label>
          <label className="mx-5">
            <input
              type="checkbox"
              value="all"
              onChange={handleCategoryInputChange}
            />
            <h5>All</h5>
          </label>
        </div>
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={StyleImage}
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="text-center">
                    <button className="btn btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
