import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useParams } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import FileUpload, { FileUploadProps } from "../../components/FileUpload";
import { getProduct, updateProduct } from "../../../../api/apiAdminProducts";
import { userInfo } from "../../../../utils/auth";
import { IProduct } from "./AllProducts";
import { FormValues } from "./AddProduct";
import { BASE_URL } from "../../../../utils/config";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [file, setFile] = useState<File>();
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect((): void => {
    setIsLoading(true);
    console.log("here");
    id &&
      getProduct(parseInt(id))
        .then((res) => res.data)
        .then((data) => {
          setProduct(data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
  }, []);

  const getFormData = (object: FormValues): FormData =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key as keyof object]);
      return formData;
    }, new FormData());

  const handleProductSubmit = (values: FormValues) => {
    setIsLoading(true);
    const productFile = getFormData(values);
    if (file) productFile.append("file", file);
    id &&
      updateProduct(productFile, parseInt(id))
        .then((res) => res.data)
        .then((data) => {
          setIsLoading(false);
          setProduct(data.product);
          setSuccess(data.message);
          // settimeout to clear the success message
          setTimeout(() => {
            setSuccess("");
          }, 6000);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response.data.message);
          // settimeout to clear the error message
          setTimeout(() => {
            setError("");
          }, 6000);
        });
  };
  const {
    title,
    subtitle,
    long_description,
    short_description,
    show_on_home,
    image_link,
  } = product;

  console.log(
    title,
    subtitle,
    long_description,
    short_description,
    show_on_home,
    image_link
  );

  return (
    <Container maxWidth="lg">
      {success && (
        <div className="my-4 text-green-800 bg-green-100 alert" role="alert">
          {success}
        </div>
      )}
      {error && (
        <div className="my-4 text-red-700 bg-red-100 alert " role="alert">
          {error}
        </div>
      )}
      <Snackbar open={!!success} autoHideDuration={6000}>
        <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
          {success}
        </Alert>
      </Snackbar>
      <Snackbar open={!!error} autoHideDuration={6000}>
        <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      {!isLoading && (
        <Formik
          initialValues={{
            title: title,
            subtitle: subtitle,
            long_description: long_description,
            short_description: short_description,
            image_name: "",
            show_on_home: show_on_home,
          }}
          onSubmit={(
            values: FormValues,
            { setSubmitting, resetForm }: FormikHelpers<FormValues>
          ) => {
            handleProductSubmit(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({
            values,
            setValues,
            isSubmitting,
            touched,
            errors,
            setFieldValue,
            handleSubmit,
          }) => {
            const fileUploadProp: FileUploadProps = {
              accept: "image/*",
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                if (
                  event.target.files !== null &&
                  event.target?.files?.length > 0
                ) {
                  // console.log(event.target.files[0]);
                  // console.log(`Saving ${event.target.value}`);
                  setFieldValue("image_name", event.target.files[0].name);
                  setFile(event.target.files[0]);
                  // console.log(file);
                  // setIsButtonDisable(false);
                }
              },
              onDrop: (event: React.DragEvent<HTMLElement>) => {
                // console.log(`Drop ${event.dataTransfer.files[0].name}`);
                // console.log(event.dataTransfer.files);
                // file = event.dataTransfer.files[0];
                setFile(event.dataTransfer.files[0]);
                // setIsButtonDisable(false);
              },
            };

            return (
              <Box className="w-full p-4 ">
                <Stack spacing={2}>
                  <TextField
                    label="Title"
                    name="title"
                    value={values.title}
                    onChange={(e) =>
                      setValues({ ...values, title: e.target.value })
                    }
                    error={touched.title && !!errors.title}
                    helperText={errors.title}
                  />
                  <TextField
                    label="Subtitle"
                    name="subtitle"
                    value={values.subtitle}
                    onChange={(e) =>
                      setValues({ ...values, subtitle: e.target.value })
                    }
                    error={touched.subtitle && !!errors.subtitle}
                    helperText={errors.subtitle}
                  />
                  <TextField
                    label="Long Description"
                    name="long_description"
                    multiline
                    rows={4}
                    value={values.long_description}
                    onChange={(e) =>
                      setValues({ ...values, long_description: e.target.value })
                    }
                    error={
                      touched.long_description && !!errors.long_description
                    }
                    helperText={errors.long_description}
                  />
                  <TextField
                    label="Short Description"
                    name="short_description"
                    multiline
                    rows={2}
                    value={values.short_description}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        short_description: e.target.value,
                      })
                    }
                    error={
                      touched.short_description && !!errors.short_description
                    }
                    helperText={errors.short_description}
                  />
                  <FormControlLabel
                    label="Show on Home"
                    control={
                      <Checkbox
                        checked={values.show_on_home}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setValues({
                            ...values,
                            show_on_home: e.target.checked,
                          });
                        }}
                      />
                    }
                  />
                  <Box className="flex items-center justify-center w-full border-2 border-black rounded-md">
                    {image_link && (
                      <FileUpload
                        {...fileUploadProp}
                        imageButton
                        height="550px"
                        width="750px"
                        image={{ url: `${BASE_URL}/${image_link}` }}
                      />
                    )}
                  </Box>
                </Stack>
                <Box className="flex items-center justify-start w-full mt-4">
                  <Button
                    className="h-12 py-4 w-28"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            );
          }}
        </Formik>
      )}
    </Container>
  );
};

export default EditProduct;
