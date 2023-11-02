import React from "react";
import { Admin, Resource } from "react-admin";
import AdminPanel from "./component/AdminPanel";
import {
  listCategory,
  editCategory,
  createCategory,
} from "./component/Category";

import { listProduct, editProduct, CreateProduct } from "./component/Products";
import { listBrand, editBrand, CreateBrand } from "./component/Brands";

import dataProvider from "./component/customDataProvider";

const App = () => (
  <Admin dashboard={AdminPanel} dataProvider={dataProvider}>
    <Resource
      name="categories"
      list={listCategory}
      edit={editCategory}
      create={createCategory}
    />
    <Resource
      name="products"
      list={listProduct}
      edit={editProduct}
      create={CreateProduct}
    />
        <Resource
      name="brands"
      list={listBrand}
      edit={editBrand}
      create={CreateBrand}
    />
  </Admin>
);

export default App;
