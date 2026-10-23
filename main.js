import "./style.css";
import "./footer.js";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);

// Credit goes to Rameez Ahmad Dar