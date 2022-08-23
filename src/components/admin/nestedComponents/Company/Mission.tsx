import React from "react";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import {
  addCompanyInfo,
  getAllCompanyInfo,
  updateCompanyInfo,
} from "../../../../api/apiAdminCompany";
import { userInfo } from "../../../../utils/auth";
import { ICompany } from "./data";

export type FormValues = {
    mission_title: string;
    mission_description: string;
};

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

const Mission = () => {
  const [loading, setIsLoading] = React.useState<boolean>(false);
  
  const [companyId, setCompanyId] = React.useState<number>(0);
  const [success, setSuccess] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const getFormData = (object: FormValues): FormData =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key as keyof object]);
      return formData;
    }, new FormData());

  React.useEffect(() => {
    setIsLoading(true);
    getAllCompanyInfo()
      .then((res) => res.data)
      .then((res) => {
        formik.setValues({
            mission_title: res.data.mission_title,
            mission_description: res.data.mission_description,
        });
        setCompanyId(res.data.id);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [companyId]);


  const formik = useFormik({
    initialValues: {
        mission_title:  "",
        mission_description: "",
    },
    onSubmit: (values: FormValues, { resetForm }) => {
      const finalValues = getFormData(values);
      const token = userInfo().token as string;
        updateCompanyInfo(finalValues, companyId, token)
          .then((res) => {
            setIsLoading(false);
            setSuccess("Company info updated successfully");
          })
          .catch((err: any) => {
            setIsLoading(false);
            setError(err.response.data.error);
          });
      
    },
    validationSchema: schema,
  });


  return (
    <Box>
      <Box className="w-full p-4 ">
        {!loading&&companyId ? (
        <form onSubmit={formik.handleSubmit}>
          {console.log(formik.values)}
          {console.log(loading)}
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="mission_title"
              name="mission_title"
              label="Mission Title"
              value={formik.values.mission_title}
              onChange={formik.handleChange}
              error={formik.touched.mission_title && Boolean(formik.errors.mission_title)}
              helperText={formik.touched.mission_title && formik.errors.mission_title}
            />
            <TextField
              fullWidth
              id="mission_description"
              name="mission_description"
              label="Mission Description"
              multiline
              rows={4}
              value={formik.values.mission_description}
              onChange={formik.handleChange}
              error={formik.touched.mission_description && Boolean(formik.errors.mission_description)}
              helperText={formik.touched.mission_description && formik.errors.mission_description}
            />
            <Box className="flex items-center justify-start w-full mt-4">
              <Button
                className="h-12 py-4 w-28"
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </form>):(
          <div className="flex flex-col items-center justify-center w-full py-8">
          <CircularProgress />
        </div>
        )}
        
      </Box>
    </Box>
  );
};

export default Mission;
