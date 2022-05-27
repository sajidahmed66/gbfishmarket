import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../../../api/apiAdminProducts";
import { BASE_URL } from "../../../../utils/config";
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();
  useEffect((): void => {
    setLoading(true);
    getAllProducts()
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
        setLoading(false);
        console.log(data);
      });
  }, []);
  return (
    <Container
      maxWidth="lg"
      className="p-4 border-2 border-gray-300 rounded-lg "
    >
      <Grid container spacing={2}>
        {products.map((item, index) => (
          <Grid key={item.id} item xs={12} md={6} lg={4}>
            <Paper>
              <div className="card">
                <div className="card-header">{item.title}</div>
                <div className="card-body">
                  <img
                    src={`${BASE_URL}/${item.image_link}`}
                    alt=""
                    className="w-full h-48"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-link btn-sm"
                    onClick={() => {
                      navigation(`details/${item.id}`);
                    }}
                  >
                    View details
                  </button>
                  <button
                    className="btn btn-light-primary btn-sm"
                    onClick={() => {
                      navigation(`edit/${item.id}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProducts;
