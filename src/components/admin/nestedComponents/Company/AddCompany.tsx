import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

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

const AddCompany = () => {
  const formik = useFormik({
    initialValues: { phone: "", address: "", email: "", short_description: "" },
    onSubmit: (values) => {
      console.log("Logging in ", values);
    },
    validationSchema: schema,
  });
  return (
    <Box>
      <Box className="w-full p-4 ">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Company Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <TextField
              fullWidth
              id="short_description"
              name="short_description"
              label="Company Short Description"
              multiline
              rows={4}
              value={formik.values.short_description}
              onChange={formik.handleChange}
              error={
                formik.touched.short_description &&
                Boolean(formik.errors.short_description)
              }
              helperText={
                formik.touched.short_description &&
                formik.errors.short_description
              }
            />

            <Box className="flex items-center justify-start w-full mt-4">
              <Button
                className="h-12 py-4 w-28"
                type="submit"
                variant="contained"
                // onClick={() => {
                //   handleSubmit();
                // }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AddCompany;
