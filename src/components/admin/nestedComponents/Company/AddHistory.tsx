import React from "react";
import { Box, Stack } from "@mui/material";
// import * as Yup from "yup";
import { Formik, useFormik } from "formik";

// const schema = Yup.object().shape({
//   name: Yup.string().min(3).max(20).required("Required"),
//   message: Yup.string().min(3).max(2000).required("Required"),
// });

const AddHistory = () => {
  const formik = useFormik({
    initialValues: { name: "", message: "<p>Testing</p>" },
    onSubmit: (values) => {
      console.log("Logging in ", values);
    },
    // validationSchema: schema
  });
  return (
    <Box>
      <Box className="w-full p-4 ">
        <Stack spacing={2}>
            
        </Stack>
      </Box>
    </Box>
  );
};

export default AddHistory;
