// type Product = { key: Type, ... } → define API data shape
// useState<Type | null>(initial) → typed state for nullable data
// useEffect(() => {...}, []) → fetch async data on mount
// setData(result) → TS infers type must match Product | null
// Access typed properties: data.id, data.title, data.images
// TS catches missing/invalid props from API

import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MyComponent = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/product/5");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error Fetchind Data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p key={Math.random()}>ID: {data.id}</p>
          <p key={Math.random()}>Title: {data.title}</p>
          <p key={Math.random()}>Description: {data.description}</p>
          <p key={Math.random()}>Price: {data.price}</p>
          <p key={Math.random()}>DiscountPercentage: {data.discountPercentage}</p>
          <p key={Math.random()}>Rating: {data.rating}</p>
          <p key={Math.random()}>Stock: {data.stock}</p>
          <p key={Math.random()}>Category: {data.category}</p>
          <p key={Math.random()}>Thumbnail: {data.thumbnail}</p>
          {data.images.map((image) => (
            <img src={image} alt="Picture" />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
