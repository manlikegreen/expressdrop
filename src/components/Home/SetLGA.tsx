"use client";

import React from "react";
import Image from "next/image";
import globe from "@/assets/Home/globe.png";
import * as Yup from "yup";
import { Button } from "../UI/Button";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const LagosLGAs = [
  "Agege",
  "Ajeromi-Ifelodun",
  "Alimosho",
  "Amuwo-Odofin",
  "Apapa",
  "Badagry",
  "Epe",
  "Eti-Osa",
  "Ifako-Ijaiye",
  "Ikeja",
  "Ikorodu",
  "Ibeju-Lekki",
  "Kosofe",
  "Lagos Island",
  "Lagos Mainland",
  "Mushin",
  "Ojo",
  "Oshodi-Isolo",
  "Shomolu",
  "Surulere",
];

const initialValues = {
  lga: "",
  numberOfItems: 1,
};

const validationSchema = Yup.object().shape({
  lga: Yup.string().required("LGA is required"),
  numberOfItems: Yup.number()
    .min(1, "Number of items must be at least 1")
    .required("Number of items is required"),
});

const SetLGA = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#setLGA",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2.5,
        duration: 2,
      }
    );
  }, []);

  return (
    <section id="setLGA" className="bg-zinc-700 pt-4 opacity-0">
      <div className="flex items-center justify-center gap-4">
        <div className="w-3/4 top-1/2 ">
          <div className="max-w-7xl m-4 pt-6 pb-4 grid gap-6 mb-12 bg-[#ffffff33] rounded-xl">
            <div className="pt-6 pb-4 px-6 m-6 bg-[#ffffff4d] rounded-xl">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Grid container spacing={3} alignItems="center">
                      {/* LGA Dropdown */}
                      <Grid item xs={12} md={6} lg={4}>
                        <FormControl
                          fullWidth
                          error={Boolean(touched.lga && errors.lga)}
                        >
                          <InputLabel id="vendorLga-label">LGA</InputLabel>
                          <Field
                            as={Select}
                            labelId="vendorLga-label"
                            id="Lga"
                            name="lga"
                            label="LGA"
                            sx={{
                              height: "56px",
                              color: "black",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "whiteSmoke",
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "whiteSmoke",
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "whiteSmoke",
                                },
                              "& .MuiSvgIcon-root": { color: "white" },
                            }}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  bgcolor: "#333",
                                  "& .MuiMenuItem-root": { color: "white" },
                                  "& .MuiMenuItem-root:hover": {
                                    bgcolor: "whiteSmoke",
                                    color: "#333",
                                  },
                                },
                              },
                            }}
                          >
                            {LagosLGAs.map((lga) => (
                              <MenuItem key={lga} value={lga}>
                                {lga}
                              </MenuItem>
                            ))}
                          </Field>
                          {touched.lga && errors.lga && (
                            <div style={{ color: "red", marginTop: "5px" }}>
                              {errors.lga}
                            </div>
                          )}
                        </FormControl>
                      </Grid>

                      {/* Number of Items Input */}
                      <Grid item xs={12} md={6} lg={4}>
                        <FormControl
                          fullWidth
                          error={Boolean(
                            touched.numberOfItems && errors.numberOfItems
                          )}
                        >
                          <Field
                            as={TextField}
                            name="numberOfItems"
                            label="No. Of Items"
                            type="number"
                            sx={{
                              height: "56px",
                              "& .MuiOutlinedInput-root fieldset": {
                                borderColor: "whiteSmoke",
                              },
                              backgroundColor: "#ffffff4d",
                              input: { color: "black" },
                            }}
                            InputLabelProps={{ style: { color: "black" } }}
                            InputProps={{
                              style: { height: "56px" },
                              inputProps: { min: 1 },
                            }}
                          />
                          {touched.numberOfItems && errors.numberOfItems && (
                            <div style={{ color: "red", marginTop: "5px" }}>
                              {errors.numberOfItems}
                            </div>
                          )}
                        </FormControl>
                      </Grid>

                      {/* Submit Button */}
                      <Grid
                        item
                        xs={12}
                        lg={4}
                        className="items-center justify-center flex"
                      >
                        <Link href="/selectrider">
                          <Button variant="secondary">Driver Details</Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-auto h-auto">
          <Image src={globe} alt="LGA" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default SetLGA;
