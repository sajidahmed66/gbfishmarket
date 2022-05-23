import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../../api/apiAdminProducts";
import { IProduct } from "./AllProducts";
import { Paper } from "@mui/material";
import { BASE_URL } from "../../../../utils/config";

const DetailsProducts = () => {
  let { id } = useParams();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect((): void => {
    if (id) {
      getProduct(parseInt(id))
        .then((res) => res.data)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  }, [id]);

  const {
    title,
    subtitle,
    long_description,
    short_description,
    image_name,
    image_link,
    show_on_home,
  } = product;

  return (
    <Container
      maxWidth="lg"
      className="flex flex-col items-center justify-center"
    >
      {(loading && <div>Loading...</div>) || (
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            {/* image */}
            <Box className="w-full p-4 border-2 border-gray-300 rounded-lg h-72">
              <img
                src={`${BASE_URL}/${image_link}`}
                alt={image_name}
                className="w-full h-full"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            {/* details */}
            <Box className="w-full p-4 border-2 border-gray-300 rounded-lg">
              <Stack spacing={2}>
                <Paper className="p-4">
                  <Typography variant="h4">{title}</Typography>
                </Paper>
                <Paper className="p-4">
                  <Typography variant="h6">{subtitle}</Typography>
                </Paper>
                <Paper className="p-4">
                  <Typography variant="body1">{long_description}</Typography>
                </Paper>
                <Paper className="p-4">
                  <Typography variant="body1">{short_description}</Typography>
                </Paper>
                <Paper className="p-4">
                  <Typography variant="body1">{image_name}</Typography>
                </Paper>
                {/* <Typography variant="body1">{image_link}</Typography> */}
                <Paper className="p-4">
                  <Typography variant="overline">
                    {show_on_home
                      ? "This Product is Featured in discover section"
                      : "This Product is Featured in discover section"}
                  </Typography>
                </Paper>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default DetailsProducts;
