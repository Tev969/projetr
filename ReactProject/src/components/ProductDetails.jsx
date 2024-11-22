import { Button , Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du produit :", error);
      });
  }, [id]);

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Link to={'/'} ><Button>Retour</Button></Link> 
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      <p>{product.description}</p>
      <p>Prix : {product.price} $</p>
    </div>
  );
}

export default ProductDetails;
