import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { IProduct } from "../nestedComponents/Products/AllProducts";
import { BASE_URL } from "../../../utils/config";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../../api/apiAdminProducts";

interface IProps {
  item: IProduct;
  deleteProduct(id: number): void;
}
const ProductCard = ({ item, deleteProduct }: IProps) => {
  const navigation = useNavigate();
  const [product, setProduct] = useState<IProduct>(item);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFeatured = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoading(true);
    console.log(product.show_on_home);
    const getFormData = (object: IProduct): FormData =>
      Object.keys(object).reduce((formData, key) => {
        formData.append(key, object[key as keyof object]);
        return formData;
      }, new FormData());

    updateProduct(
      getFormData({ ...product, show_on_home: e.target.checked }),
      product.id
    )
      .then((res) => res.data)
      .then((data) => {
        console.log("api returned", data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    console.log("handlefeatured is called ");
  };

  return (
    <Grid key={product.id} item xs={12} md={6} lg={4}>
      <Paper>
        <div className="card">
          <div className="card-header">{product.title}</div>
          <div className="card-body">
            <img
              src={`${BASE_URL}/${product.image_link}`}
              alt=""
              className="w-full h-48"
            />
            {product.subtitle}
          </div>
          <div className="items-center justify-around card-footer">
            <button
              className="btn btn-link btn-sm"
              onClick={() => {
                navigation(`details/${product.id}`);
              }}
            >
              View details
            </button>
            <button
              className="btn btn-light-primary btn-sm"
              onClick={() => {
                navigation(`edit/${product.id}`);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-link btn-outline-danger btn-sm"
              onClick={() => {
                deleteProduct(product.id);
              }}
            >
              Delete
            </button>
            <label className="flex flex-row items-center justify-between">
              <span className="ml-2 mr-2">Featured</span>
              <input
                type="checkbox"
                checked={product.show_on_home}
                className="border-indigo-500 form-checkbox "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(item.id, e.target.checked);
                  setProduct({ ...product, show_on_home: e.target.checked });
                  // console.log(product);
                  handleFeatured(e);
                }}
              />
            </label>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
