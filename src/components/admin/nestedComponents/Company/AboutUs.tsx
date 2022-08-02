import React from "react";
import { Alert, Box, Container, Snackbar, Stack } from "@mui/material";
import { Formik, FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import FileUpload, { FileUploadProps } from "../../components/FileUpload";
import {
  getAllCompanyInfo,
  updateCompanyInfo,
} from "../../../../api/apiAdminCompany";
import { userInfo } from "../../../../utils/auth";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.number().required("Phone Number is required").positive().integer(),
  address: Yup.string()
    .min(3)
    .max(2000)
    .required("Company address is required"),
  short_description: Yup.string().min(3).max(2000),
});

export type FormValues = {
  title: string;
  description: string;
  image_name: string;
};

const AboutUs = () => {
  const [success, setSuccess] = React.useState<string>("");
  const [companyId, setCompanyId] = React.useState<number>(0);
  const [error, setError] = React.useState<string>("");
  const [loading, setIsLoading] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File>();

  const getFormData = (object: FormValues): FormData =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key as keyof object]);
      return formData;
    }, new FormData());

  React.useEffect(() => {
    setIsLoading(true);
    getAllCompanyInfo().then((res) => res.data)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data.id);
        console.log(res);
        if (res.data.id === null) {
          console.log("No data");
        } else {
          setCompanyId(res.data.id);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [companyId]);

  const handleSubmit = (values: FormValues) => {
    setIsLoading(true);
    const token = userInfo().token as string;
    const finalValues = getFormData(values);
    if (file) finalValues.append("image_link", file);
    updateCompanyInfo(finalValues, companyId, token)
      .then((res) => {
        setIsLoading(false);
        setSuccess("Company info updated successfully");
      })
      .catch((err: any) => {
        setIsLoading(false);
        setError(err.response.data.error);
      });
  };

  const formik = useFormik({
    initialValues: { phone: "", address: "", email: "", short_description: "" },
    onSubmit: (values) => {
      console.log("Logging in ", values);
    },
    validationSchema: schema,
  });

  return (
    <Container maxWidth="lg">
      <Box>
        <Box className="w-full p-4 ">
          {success && (
            <div
              className="my-4 text-green-800 bg-green-100 alert"
              role="alert"
            >
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
          <Formik
            initialValues={{
              title: "",
              description: "",
              image_name: "",
            }}
            onSubmit={(
              values: FormValues,
              { setSubmitting, resetForm }: FormikHelpers<FormValues>
            ) => {
              handleSubmit(values);
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
                    setFieldValue("image_link", event.target.files[0].name);
                    setFile(event.target.files[0]);
                  }
                },
                onDrop: (event: React.DragEvent<HTMLElement>) => {
                  setFile(event.dataTransfer.files[0]);
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
                        setValues({
                          ...values,
                          title: e.target.value,
                        })
                      }
                      error={touched.title && !!errors.title}
                      helperText={errors.title}
                    />
                    <TextField
                      label="Description"
                      name="description"
                      multiline
                      rows={8}
                      value={values.description}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          description: e.target.value,
                        })
                      }
                      error={touched.description && !!errors.description}
                      helperText={errors.description}
                    />

                    <Box className="flex items-center justify-center w-full border-2 border-black rounded-md">
                      <FileUpload
                        {...fileUploadProp}
                        imageButton
                        height="100px"
                        width="750px"
                      />
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
        </Box>
      </Box>
    </Container>
  );
};
export default AboutUs;
