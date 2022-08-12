import Layout from "../Common/Layout";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import MarkunreadSharpIcon from "@mui/icons-material/MarkunreadSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import { GOOGLE_RECAPCHA_SITE_KEY } from "../../utils/config";
import { postContactForm } from "../../api/apiContactUs";
import { Container } from "@mui/material";
import WarningAmberSharpIcon from "@mui/icons-material/WarningAmberSharp";
import { AxiosError } from "axios";

type IConatctFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  quereAbout: string;
};

const ContactUs = () => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isVarified, setIsVarified] = useState<boolean>(false);

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "too short")
      .max(120, "too long")
      .required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string()
      .min(10, "too short")
      .max(250, "too long")
      .required("Message is required"),
    phone: Yup.number()
      .min(11, "must be 11 digit")
      // .max(11, "must be 11 digit")
      .required("Phone is required"),
  });

  const getFormData = (object: IConatctFormValues): FormData =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key as keyof object]);
      return formData;
    }, new FormData());

  const handleSubmit = (values: IConatctFormValues) => {
    postContactForm(values)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setSuccess(data.message);
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      })
      .catch((err) => {
        // console.log(err);
        // setError(err.response.data.message);
        setError("Something went wrong");
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  return (
    <Layout title="Contact Us">
      <Container maxWidth="lg">
        <div className="flex flex-col items-center justify-center w-full mx-auto mt-20 ">
          <p className="text-xl md:text-xl font-kawshan text-[#b8cc08]">
            contact us
          </p>
          <p className="p-2 text-2xl font-bold text-gray-800 md:text-3xl font-skModernistBold">
            DROP US A MESSAGE
          </p>
        </div>
        <div className="flex flex-row w-full lg:mx-8">
          <div className="flex flex-col items-center justify-start w-1/3 h-40 p-4 m-2 bg-slate-100 ">
            <div className="flex flex-col items-center justify-center w-full h-1/3">
              <LocalPhoneSharpIcon
                fontSize="large"
                sx={{
                  color: "#b8cc08",
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-2/3">
              <p className="w-full text-xs break-words md:text-center md:text-base">
                +880 1711 111 111
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-1/3 h-40 p-4 m-2 bg-slate-100 ">
            <div className="flex flex-col items-center justify-center w-full h-1/3">
              <MarkunreadSharpIcon
                fontSize="large"
                sx={{
                  color: "#b8cc08",
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-2/3">
              <p className="w-full text-xs break-words md:text-center md:text-base ">
                goldenbough@info.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-1/3 h-40 p-4 m-2 bg-slate-100 ">
            <div className="flex flex-col items-center justify-center w-full h-1/3">
              <HomeSharpIcon
                fontSize="large"
                sx={{
                  color: "#b8cc08",
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-2/3">
              <p className="text-xs break-word md:text-center md:text-base">
                khulna bangladesh
              </p>
            </div>
          </div>
        </div>
        {/* form div */}
        <div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              phone: "",
              quereAbout: "blue",
            }}
            onSubmit={(
              values: IConatctFormValues,
              { setSubmitting, resetForm }
            ) => {
              handleSubmit(values);
              resetForm();
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              setValues,
              isSubmitting,
              touched,
              errors,
              setFieldValue,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => {
              return (
                <div className="w-full h-full p-5 ">
                  <div
                    id="contact"
                    className="px-8 py-4 bg-white rounded-tr rounded-br"
                  >
                    {success && (
                      <div
                        className="my-4 text-green-800 bg-green-100 alert"
                        role="alert"
                      >
                        {success}
                      </div>
                    )}
                    {error && (
                      <div
                        className="my-4 text-red-700 bg-red-100 alert "
                        role="alert"
                      >
                        {error}
                      </div>
                    )}
                    {/* full name and email */}
                    <div className="flex-col flex-wrap justify-between block w-full mb-6 md:flex md:flex-row">
                      {/* full name */}
                      <div className="w-full pr-4 my-4 md:w-1/2">
                        <div className="flex flex-col ">
                          <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            className="flex items-center w-full h-12 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              console.log(values.name);
                              setValues({ ...values, name: e.target.value });
                            }}
                            onBlur={handleBlur}
                          />
                          {touched.name && errors.name ? (
                            <div className="flex flex-row items-center justify-start mt-1 text-sm text-red-500">
                              <WarningAmberSharpIcon
                                fontSize="inherit"
                                className="mr-1"
                              />
                              <span>{errors.name}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      {/* email */}
                      <div className="w-full pr-4 my-4 md:w-1/2">
                        <div className="flex flex-col">
                          <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            className="flex items-center w-full h-12 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setValues({ ...values, email: e.target.value })
                            }
                            onBlur={handleBlur}
                          />

                          {touched.email && errors.email ? (
                            <div className="flex flex-row items-center justify-start mt-1 text-sm text-red-500">
                              <WarningAmberSharpIcon
                                fontSize="inherit"
                                className="mr-1"
                              />
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {/* phone Number and genaral quere selection */}

                    <div className="flex-col flex-wrap justify-between block w-full mb-6 md:flex md:flex-row">
                      <div className="w-full pr-4 my-4 md:w-1/2">
                        <div className="flex flex-col ">
                          {/* <label
                            htmlFor="full_name"
                            className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                          >
                            Full Name
                          </label> */}
                          <input
                            required
                            id="phone"
                            name="phone"
                            type="number"
                            className="flex items-center w-full h-12 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                            placeholder="Enter your phone number"
                            value={values.phone}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setValues({
                                ...values,
                                phone: e.target.value,
                              })
                            }
                            onBlur={handleBlur}
                          />
                          {touched.phone && errors.phone ? (
                            <div className="flex flex-row items-center justify-start mt-1 text-sm text-red-500">
                              <WarningAmberSharpIcon
                                fontSize="inherit"
                                className="mr-1"
                              />
                              {errors.phone}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full pr-4 my-4 md:w-1/2">
                        <div className="flex flex-col">
                          <select
                            required
                            id="genaral_quere"
                            name="quereAbout"
                            value={values.quereAbout}
                            placeholder="select one"
                            className="flex items-center w-full h-12 pl-3 text-sm font-normal border border-gray-300 rounded form-select focus:outline-none focus:border focus:border-indigo-700"
                            onChange={(e) => {
                              setValues({
                                ...values,
                                quereAbout: e.target.value,
                              });
                              console.log(e.target.value);
                            }}
                          >
                            <option value="genarel_quere">Genarel Quere</option>
                            <option value="business">Bussiness</option>
                            <option value="career_opportunities">
                              Career Opportunity
                            </option>
                          </select>

                          {/* {touched.email && errors.email ? (
                            <div className="text-sm text-red-500">
                              {errors.email}
                            </div>
                          ) : null} */}
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <div className="flex flex-col">
                        <label
                          className="mb-2 text-sm font-semibold text-gray-800"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          placeholder=""
                          name="message"
                          className="px-3 py-2 mb-4 text-sm border border-gray-300 rounded outline-none resize-none focus:border focus:border-indigo-700"
                          rows={8}
                          id="message"
                          defaultValue={""}
                          value={values.message}
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) =>
                            setValues({ ...values, message: e.target.value })
                          }
                          onBlur={handleBlur}
                        />
                        {touched.message && errors.message ? (
                          <div className="flex flex-row items-center justify-start mt-1 text-sm text-red-500">
                            <WarningAmberSharpIcon
                              fontSize="inherit"
                              className="mr-1"
                            />
                            {errors.message}
                          </div>
                        ) : null}
                      </div>
                      <ReCAPTCHA
                        sitekey={GOOGLE_RECAPCHA_SITE_KEY}
                        onChange={(value) => {
                          // console.log("captcha changed", value);
                          setIsVarified(true);
                        }}
                        onExpired={() => {
                          console.log("captcha expired");
                          setIsVarified(false);
                        }}
                      />
                      {isVarified ? (
                        <button
                          type="submit"
                          className="px-8 py-3 mt-3 text-sm leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600"
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </button>
                      ) : (
                        <button className="mt-3 btn btn-primary" disabled>
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }}
          </Formik>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;

/* 


*/
