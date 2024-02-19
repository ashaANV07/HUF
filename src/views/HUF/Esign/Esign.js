import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  Button,
  Menu,
  MenuItem,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Header from "../../pages/Header";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CustomStepper from "../../pages/CustomStepper";
import { useContext } from "react";
import { APIContext } from "../../../context/APIstate";

const initialValues = {};
const Esign = () => {
  const { classes } = useContext(APIContext);

  return (
    <>
      <Header />
      <CustomStepper />
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={12} md={10}>
          <Card sx={{ boxShadow: 4, borderRadius: "4px" }}>
            <Box maxHeight="65vh" overflow="auto" className={classes.customScrollbar}>
              <Grid
                container
                display="flex"
                justifyContent="center"
                sx={{ py: 2 }}
              >
                <Grid item xs={11} md={10}>
                  <Grid container>
                    <Grid
                      item
                      md={12}
                      xs={12}
                      textAlign="center"
                      sx={{ my: 2 }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textDecoration: "underline",
                          fontSize: 20,
                          fontWeight: 550,
                        }}
                      >
                        E-sign /Manual
                      </Typography>
                    </Grid>
                  </Grid>
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
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  mx: 1,
                                }}
                              >
                                <b>Proceed for eSign</b> (if your mobile number
                                is{" "}
                                <span
                                  style={{ marginLeft: 3, color: "#e53935" }}
                                >
                                  linked
                                </span>{" "}
                                to Aadhar)
                              </Typography>
                              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                                Please download the form and verify the details
                                before proceeding further.
                              </Typography>
                              <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                  <Button
                                    fullWidth
                                    size="small"
                                    style={{
                                      color: "#0E3935",
                                      border: "1px solid #dee2e6",
                                      backgroundColor: "#DAE7E6",
                                    }}
                                    variant="contained"
                                  >
                                    Download PDF
                                  </Button>
                                </Grid>

                                <Grid item xs={12} md={5}>
                                  <Button
                                    fullWidth
                                    size="small"
                                    style={{
                                      color: "#0E3935",
                                      border: "1px solid #dee2e6",
                                      backgroundColor: "#DAE7E6",
                                    }}
                                    variant="contained"
                                  >
                                    Proceed for eSign
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  mx: 1,
                                }}
                              >
                                <b>Proceed Manually</b> (if your mobile number
                                is{" "}
                                <span
                                  style={{ marginLeft: 3, color: "#e53935" }}
                                >
                                  not linked
                                </span>{" "}
                                to Aadhar)
                              </Typography>
                              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                                Please download the form and verify the details
                                before proceeding further.
                              </Typography>
                              <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                  <Button
                                    fullWidth
                                    size="small"
                                    style={{
                                      color: "#0E3935",
                                      border: "1px solid #dee2e6",
                                      backgroundColor: "#DAE7E6",
                                    }}
                                    variant="contained"
                                  >
                                    Download PDF
                                  </Button>
                                </Grid>

                                <Grid item xs={12} md={5}>
                                  <Button
                                    fullWidth
                                    size="small"
                                    style={{
                                      color: "#0E3935",
                                      border: "1px solid #dee2e6",
                                      backgroundColor: "#DAE7E6",
                                    }}
                                    variant="contained"
                                  >
                                    Proceed for Manual
                                  </Button>
                                </Grid>
                              </Grid>
                              <Typography
                                variant="subtitle1"
                                sx={{ ml: 1, mt: 1, color: "GrayText" }}
                              >
                                Note: In order to complete the process, Please
                                download the form below and send it to us
                                through courier.
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Typography variant="subtitle1" sx={{ mx: 2 }}>
                              I/We consent to agree/execute following standing
                              instructions given below:
                            </Typography>
                            <Grid item xs={12} md={6}>
                              <Grid
                                container
                                sx={{
                                  border: 1,
                                  borderRadius: 3,
                                  borderColor: "#bdbdbd",
                                  height: 100,
                                }}
                              >
                                <Grid item xs={12} md={12} sx={{ mx: 1 }}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        //   sx={{ mr: -1, mt: -5 }}
                                        size="small"
                                        disableRipple
                                      />
                                    }
                                    label={
                                      <Typography variant="subtitle1">
                                        I/We would like to share my email-ID
                                        with RTA
                                      </Typography>
                                    }
                                  ></FormControlLabel>
                                </Grid>
                                <Grid item xs={12} md={12} sx={{ mx: 1 }}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        //   sx={{ mr: -1, mt: -5 }}
                                        size="small"
                                        disableRipple
                                      />
                                    }
                                    label={
                                      <Typography variant="subtitle1">
                                        I/We instruct DP to receive each & every
                                        credit in my/our Account
                                      </Typography>
                                    }
                                  ></FormControlLabel>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Grid
                                container
                                sx={{
                                  border: 1,
                                  borderRadius: 3,
                                  borderColor: "#bdbdbd",
                                }}
                              >
                                <Grid item xs={12} md={12} sx={{ mx: 1 }}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        //   sx={{ mr: -1, mt: -5 }}
                                        size="small"
                                        disableRipple
                                      />
                                    }
                                    label={
                                      <Typography variant="subtitle1">
                                        I/We instruct DP to accept all pledge
                                        instructions in my/our Account
                                      </Typography>
                                    }
                                  ></FormControlLabel>
                                </Grid>
                                <Grid item xs={12} md={12} sx={{ mx: 1 }}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        //   sx={{ mr: -1, mt: -5 }}
                                        size="small"
                                        disableRipple
                                      />
                                    }
                                    label={
                                      <Typography variant="subtitle1">
                                        I/We instruct DP to issue Account
                                        Statment As per SEBI regulation
                                      </Typography>
                                    }
                                  ></FormControlLabel>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid container sx={{ pt: 4 }}>
                            <Grid item xs={12} md={12}>
                              <Typography
                                variant="body1"
                                sx={{
                                  textDecoration: "underline",
                                }}
                              >
                                Aadhar consent
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={12} sx={{ pt: 2 }}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{ mr: -1, mt: -9 }}
                                    size="small"
                                    disableRipple
                                  />
                                }
                                label={
                                  <Typography
                                    variant="subtitle1"
                                    align="justify"
                                  >
                                    I hereby consent to use Karta's aadhaar
                                    (UID) for authenticating/e-signing and
                                    completing the account opening process of my
                                    HUF account with Arham share Pvt Ltd under
                                    ekyc subject to policy, procedure, terms and
                                    conditions laid by Arham. Additionally i
                                    consent that i have reviewed the application
                                    and documentation submitted for the opening
                                    of my demat & trading account with Arham. I
                                    have read, understood and agree to the{" "}
                                    <span
                                      style={{
                                        marginLeft: 3,
                                        color: "#008C76",
                                      }}
                                    >
                                      {" "}
                                      terms of use{" "}
                                    </span>{" "}
                                    and other{" "}
                                    <span
                                      style={{
                                        marginLeft: 3,
                                        color: "#008C76",
                                      }}
                                    >
                                      terms and conditions{" "}
                                    </span>
                                    laid out by Arham
                                  </Typography>
                                }
                              ></FormControlLabel>
                            </Grid>
                          </Grid>
                        </form>
                      )
                    )}
                  </Formik>
                </Grid>
              </Grid>
              <Grid container sx={{ px: 2, py: 2 }}>
                <Grid item xs={12} md={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      style={{ backgroundColor: "#008C76", width: "100px" }}
                      startIcon={<KeyboardArrowLeftIcon />}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      size="small"
                      style={{ backgroundColor: "#008C76", width: "100px" }}
                      endIcon={<KeyboardArrowRightIcon />}
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

export default Esign;
