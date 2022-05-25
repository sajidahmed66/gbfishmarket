import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
} from "../../../../api/apiAdminProducts";

import ProductCard from "../../components/ProductCard";

export interface IProduct {
  id: number;
  title: string;
  subtitle: string;
  long_description: string;
  short_description: string;
  image_name: string;
  image_link: string;
  show_on_home: boolean;
  created_at?: Date;
  updated_at?: Date;
}

/* grid layout that has 5 column  */
const AllProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refrase, setRefrase] = useState({});

  const handleDelete = (id: number) => {
    deleteProduct(id)
      .then((res) => res.data)
      .then((data) => {
        console.log("api returned", data.message);
        setRefrase({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect((): void => {
    setLoading(true);
    getAllProducts()
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
        setLoading(false);
        console.log(data);
      });
  }, [refrase]);
  return (
    <Container
      maxWidth="lg"
      className="p-4 border-2 border-gray-300 rounded-lg "
    >
      <Grid container spacing={2}>
        {products.map((item, index) => {
          // console.log(item.id, item.show_on_home);
          // const [product, setProduct] = useState<IProduct>({} as IProduct);
          return (
            <ProductCard
              item={item}
              deleteProduct={(id: number) => {
                handleDelete(id);
              }}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default AllProducts;
