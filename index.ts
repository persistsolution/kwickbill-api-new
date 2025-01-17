require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import userRoutes from '@routes/userRoutes';
import categoryRoute from  './src/routers/billsoftadmin/selling-product/category-route';
import subCategoryRoute from './src/routers/billsoftadmin/selling-product/subcategory-route';
import employeeRoute from './src/routers/billsoftadmin/employee/employee-route';
import productRoute from './src/routers/billsoftadmin/selling-product/product-route';
import franchiseRoute from './src/routers/billsoftadmin/franchise/franchise-route';
const app = express();
const port = process.env.PORT || 3002;
const HOST = process.env.HOST || '0.0.0.0';


app.use(cors());
app.use(bodyParser.json());
app.use(categoryRoute);
app.use(subCategoryRoute);
app.use(employeeRoute);
app.use(productRoute);
app.use(franchiseRoute);

// Enable CORS for specific origin
app.use(cors({
  origin: 'http://13.234.213.24:5173', // Allow requests from this origin
 }));

 app.get("/", (req, res) => {
  res.send("Welcome to Kwickbill Testing");
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server running at 13.235.243.151:${port}`);
});
