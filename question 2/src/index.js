import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { auth } from "./middlewares/auth.js";

import { getProduct, getProducts } from "./controllers/product.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


app.get(
  "/companies/:companyname/categories/:catoryname/products",
  auth,
  getProducts
);

app.get(
  "/products/:productid",
  
  getProduct
);


app.listen(3000, () => {
  console.log("server is started at http://localhost:3000");
});
// "http://20.244.56.144/test/"
// { 
//   "companyName": "Hindustan College of Science & Technology",
//   "clientID": "af9a2575-70a6-41dc-adf9-8b236d168de9",
//   "clientSecret": "QCBhYVOSYPRebSNE",
//   "ownerName": "Bhupesh Jain",
//   "ownerEmail": "bhupeshjain3221@gmail.com",
//   "rollNo": "2100640100028"
// }

// {
//   token_type: "Bearer",
//   access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMDU4NjIwLCJpYXQiOjE3MjIwNTgzMjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFmOWEyNTc1LTcwYTYtNDFkYy1hZGY5LThiMjM2ZDE2OGRlOSIsInN1YiI6ImJodXBlc2hqYWluMzIyMUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJIaW5kdXN0YW4gQ29sbGVnZSBvZiBTY2llbmNlIFx1MDAyNiBUZWNobm9sb2d5IiwiY2xpZW50SUQiOiJhZjlhMjU3NS03MGE2LTQxZGMtYWRmOS04YjIzNmQxNjhkZTkiLCJjbGllbnRTZWNyZXQiOiJRQ0JoWVZPU1lQUmViU05FIiwib3duZXJOYW1lIjoiQmh1cGVzaCBKYWluIiwib3duZXJFbWFpbCI6ImJodXBlc2hqYWluMzIyMUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwNjQwMTAwMDI4In0.IdGtDfwPhrlAFs8SGMPUGgjKLE5gc1fcee_7YCeciWs",
//   expires_in: 1722058620
// }
