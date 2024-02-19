import {
  Grid,
  Typography,
  Card,
  TextField,
  MenuItem,
  Checkbox,
  Box,
  FormControlLabel,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../pages/Header";
import { Formik } from "formik";
import PanVerify from "./PanVerify";
import CustomStepper from "../pages/CustomStepper";
import { useContext } from "react";
import { APIContext } from "../../context/APIstate";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const HufDetails = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const { classes } = useContext(APIContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  let initialValues = {
    c_country: "India",
    p_country: "India",
    nationality: "INDIAN",
  };

  return (
    <>
      <Header />
      <CustomStepper />
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={12} md={10}>
          <Card sx={{ boxShadow: 4, borderRadius: "4px" }}>
          <Box maxHeight="65vh" overflow="auto" className={classes.customScrollbar}>
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={11} md={10.5} sx={{ pb: 4 }}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(
                    values,
                    { setErrors, setStatus, setSubmitting, setFieldValue }
                  ) => console.log("PersonalDetailsValue", values)}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    touched,
                    values,
                  }) => (
                    console.log("values", values),
                    (
                      <form noValidate onSubmit={handleSubmit}>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            md={12}
                            textAlign="center"
                            sx={{ my: 2 }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                textDecoration: "underline",
                                // fontSize: 20,
                              }}
                            >
                              HUF Details
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          display="flex"
                          justifyContent="center"
                          columnSpacing={15}
                          rowSpacing={{ md: 2, xs: 1 }}
                        >
                          <Grid item xs={12} md={5}>
                            <Typography variant="subtitle1"> Name </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="Full Name"
                              size="small"
                              name="personal_name"
                              //   values={values.personal_fname}
                            />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <Typography variant="subtitle1">
                              {" "}
                              Date(Commencement of Business){" "}
                            </Typography>
                            <TextField
                              fullWidth
                              size="small"
                              name="dob"
                              type="date"
                              // value={values.dob}
                              // onBlur={handleBlur}
                              // onChange={handleChange}
                              InputProps={{
                                style: { fontSize: 16 },
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <Typography variant="subtitle1">
                              {" "}
                              Status{" "}
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="HUF"
                              size="small"
                              name="personal_name"
                              //   values={values.personal_fname}
                            />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <Typography variant="subtitle1">
                              {" "}
                              Nationality{" "}
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              //   placeholder="HUF"
                              size="small"
                              name="nationality"
                              values={values.nationality}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ sm: 3, md: 6 }}
                          sx={{ paddingTop: 4 }}
                        >
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Correspondence Address
                            </Typography>
                            <Grid container spacing={2}>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Flat/Door/Block No."
                                  size="small"
                                  name="Correspondence_address1"
                                  //   value={values.Correspondence_address1}
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Street/Lan"
                                  size="small"
                                  name="Correspondence_address2"
                                  //   value={values.Correspondence_address2}
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Area/Locality"
                                  size="small"
                                  name="Correspondence_address3"
                                  //   value={values.Correspondence_address3}
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={6} md={8}>
                            <Grid
                              container
                              rowSpacing={{ xs: 1, md: 3 }}
                              columnSpacing={{ sm: 3, md: 6 }}
                            >
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  City
                                </Typography>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="City"
                                  size="small"
                                  name="c_city"
                                  //   value={values.c_city}
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  Pincode
                                </Typography>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Pincode"
                                  size="small"
                                  name="c_pincode"
                                  //   value={values.c_pincode}
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  State
                                </Typography>
                                <TextField
                                  fullWidth
                                  placeholder="State"
                                  size="small"
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                  //   value={values.c_state}
                                  name="c_state"
                                  select
                                  SelectProps={{
                                    style: { fontSize: 16 },
                                    MenuProps: {
                                      style: {
                                        maxHeight: 400,
                                        width: 100,
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="" disabled>
                                    --Select State--
                                  </MenuItem>
                                  {indianStates.map((state, i) => (
                                    <MenuItem
                                      sx={{ fontSize: 16 }}
                                      key={i}
                                      value={state}
                                    >
                                      {state}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  Country
                                </Typography>
                                <TextField
                                  fullWidth
                                  placeholder="Country"
                                  size="small"
                                  name="c_country"
                                  value={values.c_country}
                                  //   onChange={(e) =>
                                  //     handleInputChange(e, values, setFieldValue)
                                  //   }
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                  SelectProps={{ style: { fontSize: 16 } }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Box sx={{ py: 1 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                // sx={{ mr: -1, mt: -0.5, py: 0.5 }}
                                size="small"
                                disableRipple
                              />
                            }
                            label={
                              <Typography sx={{ fontSize: "12px" }}>
                                "Kindly check this box if the Permenant Address
                                is same as Correspondence Address"
                              </Typography>
                            }
                            checked={checked}
                            // onChange={() => handleCheckbox(values, setFieldValue)}
                          />
                        </Box>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ sm: 3, md: 6 }}
                          // sx={{ paddingTop: 5 }}
                        >
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Permenant Address
                            </Typography>
                            <Grid container spacing={2}>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Flat/Door/Block No."
                                  size="small"
                                  name="permanant_address1"
                                  //   value={values.permanant_address1}
                                  disabled={checked}
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Street/Lan"
                                  size="small"
                                  name="permanant_address2"
                                  //   value={values.permanant_address2}
                                  disabled={checked}
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Area/Locality"
                                  size="small"
                                  name="permanant_address3"
                                  //   value={values.permanant_address3}
                                  disabled={checked}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={6} md={8}>
                            <Grid
                              container
                              rowSpacing={{ xs: 1, md: 3 }}
                              columnSpacing={{ sm: 3, md: 6 }}
                            >
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  City
                                </Typography>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="City"
                                  size="small"
                                  name="p_city"
                                  //   value={values.p_city}
                                  disabled={checked}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  Pincode
                                </Typography>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Pincode"
                                  size="small"
                                  name="p_pincode"
                                  //   value={values.p_pincode}
                                  disabled={checked}
                                />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  State
                                </Typography>
                                <TextField
                                  fullWidth
                                  placeholder="State"
                                  size="small"
                                  //   onChange={handleChange}
                                  //   onBlur={handleBlur}
                                  //   value={values.p_state}
                                  name="p_state"
                                  disabled={checked}
                                  select
                                  SelectProps={{
                                    style: { fontSize: 16 },
                                    MenuProps: {
                                      style: {
                                        maxHeight: 400,
                                        width: 100,
                                      },
                                    },
                                  }}
                                >
                                  <MenuItem value="" disabled>
                                    --Select State--
                                  </MenuItem>
                                  {indianStates.map((state, i) => (
                                    <MenuItem
                                      sx={{ fontSize: 16 }}
                                      key={i}
                                      value={state}
                                    >
                                      {state}
                                    </MenuItem>
                                  ))}
                                </TextField>
                                {/* {touched.p_state && errors.p_state && <FormHelperText error>{errors.p_state}</FormHelperText>} */}
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1">
                                  Country
                                </Typography>
                                <TextField
                                  fullWidth
                                  placeholder="Country"
                                  size="small"
                                  name="p_country"
                                  value={values.p_country}
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                  // select
                                  SelectProps={{ style: { fontSize: 16 } }}
                                ></TextField>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Dialog
                          open={open}
                          PaperProps={{
                            sx: {
                              width: "100%",
                              maxWidth: "400px",
                              height: "100%",
                              maxHeight: "265px",
                              boxShadow: 6,
                            },
                          }}
                        >
                          <DialogContent>
                            <PanVerify />
                          </DialogContent>
                        </Dialog>
                      </form>
                    )
                  )}
                </Formik>
              </Grid>
            </Grid>
            <Grid container sx={{ pb: 2, pr: 2 }}>
              <Grid item xs={12} md={12}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{ backgroundColor: "#008C76", width: "100px" }}
                    endIcon={<KeyboardArrowRightIcon />}
                    onClick={handleClickOpen}
                  >
                    Next
                  </Button>
                </Box>
              </Grid>
            </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HufDetails;
