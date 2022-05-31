import Layout from "../Common/Layout";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

import { GOOGLE_RECAPCHA_SITE_KEY } from "../../utils/config";
import { postContactForm } from "../../api/apiContactUs";

type IConatctFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
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
        }, 6000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout title="Contact Us">
      <div className="container pt-16 pb-16 mx-auto">
        <div className="lg:flex">
          <div className="py-16 bg-indigo-700 rounded-tl rounded-tr xl:w-2/5 lg:w-2/5 xl:rounded-bl xl:rounded-tr-none">
            <div className="px-8 mx-auto xl:w-5/6 xl:px-0">
              <h1 className="pb-4 text-3xl font-bold text-white xl:text-4xl">
                Get in touch
              </h1>
              <p className="pb-8 text-xl font-normal leading-relaxed text-white lg:pr-4">
                Got a question about us? Are you interested in partnering with
                us? Have some suggestions or just want to say Hi? Just contact
                us. We are here to asset you.
              </p>
              <div className="flex items-center pb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-4 text-base text-white">+880 1711223344</p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-4 text-base text-white">
                  goldenfish@gmail.com
                </p>
              </div>
              <p className="pt-10 text-lg tracking-wide text-white">
                Fullbari mor <br />
                Khulna, Bangladesh
              </p>
              {/* <a href="javascript:void(0)">
                <p className="pt-16 font-bold tracking-wide text-white underline">
                  View Job Openings
                </p>
              </a> */}
            </div>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              phone: "",
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
                <div className="h-full pt-5 pb-5 bg-gray-200 rounded-tr rounded-br xl:w-3/5 lg:w-3/5 xl:pr-5 xl:pl-0">
                  <div
                    id="contact"
                    className="px-8 py-4 bg-white rounded-tr rounded-br"
                  >
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-800">
                      Enter Details
                    </h1>
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
                    <div className="flex-wrap justify-between block w-full mb-6 xl:flex xl:flex-col">
                      {/* full name */}
                      <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                        <div className="flex flex-col">
                          <label
                            htmlFor="full_name"
                            className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                          >
                            Full Name
                          </label>
                          <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                            placeholder=""
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
                            <div className="text-sm text-red-500">
                              {errors.name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      {/* email */}
                      <div className="w-2/4 max-w-xs xl:flex xl:justify-start">
                        <div className="flex flex-col">
                          <label
                            htmlFor="email"
                            className="my-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                          >
                            Email
                          </label>
                          <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                            placeholder=""
                            value={values.email}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setValues({ ...values, email: e.target.value })
                            }
                            onBlur={handleBlur}
                          />

                          {touched.email && errors.email ? (
                            <div className="text-sm text-red-500">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {/* phone Number */}
                    <div className="flex flex-wrap w-full">
                      <div className="w-2/4 max-w-xs">
                        <div className="flex flex-col">
                          <label
                            htmlFor="phone"
                            className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
                          >
                            Phone
                          </label>
                          <input
                            required
                            id="phone"
                            name="phone"
                            type="number"
                            className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                            placeholder=""
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
                            <div className="text-sm text-red-500">
                              {errors.phone}
                            </div>
                          ) : null}
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
                          <div className="text-sm text-red-500">
                            {errors.message}
                          </div>
                        ) : null}
                      </div>
                      <ReCAPTCHA
                        sitekey={GOOGLE_RECAPCHA_SITE_KEY}
                        onChange={(value) => {
                          console.log("captcha changed", value);
                          setIsVarified(true);
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
      </div>
    </Layout>
  );
};

export default ContactUs;
