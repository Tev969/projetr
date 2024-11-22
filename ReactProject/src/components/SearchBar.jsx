import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

function SearchBar() {
  const [inputResult, setInputResult] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    readInputValue(); 
  };

  const readInputValue = () => {
    const value = inputRef.current.value;
    setInputResult(value);
  };

  useEffect(() => {
    if (inputResult === "") return; 

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const foundProduct = json.find((product) =>
          product.title.toLowerCase().includes(inputResult.toLowerCase())
        );
        if (foundProduct) {
          navigate(`/product/${foundProduct.id}`);
        } else {
          console.log("Produit introuvable");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la recherche du produit :", error);
      });
  }, [inputResult, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Chercher un objet"
          type="text"
        />
        <button type="submit">Chercher</button>
      </form>
    </div>
  );
}

export default SearchBar;
