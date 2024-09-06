import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function CatImage() {
  const [catImage, setCatImage] = useState("");

  async function fetchCatImage() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  }

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Random Cat Image</h2>
      <img src={catImage} alt="Random Cat" className={styles.cat_image} />
      <button onClick={fetchCatImage} className={styles.button}>
        Load New Image
      </button>
    </div>
  );
}

export default CatImage;
