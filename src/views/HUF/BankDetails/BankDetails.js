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
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Header from "../../pages/Header";
import CustomStepper from "../../pages/CustomStepper";
import { useContext } from "react";
import { APIContext } from "../../../context/APIstate";

const BankDetails = () => {
  const { classes } = useContext(APIContext);
  const initialValues = {
    bank_document: "cheque",
    bank_ac_type: "Saving",
  };
  return (
    <>
    <Header />
    <CustomStepper />
    <Grid container display="flex" justifyContent="center">
      <Grid item xs={12} md={10}>
        <Card sx={{ boxShadow: 4, borderRadius: "4px" }}>
        <Box maxHeight="65vh" overflow="auto" className={classes.customScrollbar}>
          <Grid container display="flex" justifyContent="center" sx={{ py: 2 }}>
            <Grid item xs={11} md={10}>
              <Grid container>
                <Grid item md={12} xs={12} textAlign="center" sx={{ my: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textDecoration: "underline",
                      fontSize: 20,
                      fontWeight: 550,
                    }}
                  >
                    Bank Details
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
                      <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        columnSpacing={15}
                        rowSpacing={{ md: 2, xs: 1 }}
                      >
                        <Grid item xs={12} md={5}>
                          <Typography variant="subtitle1">
                            {" "}
                            Name(As per PAN card){" "}
                          </Typography>
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
                            Bank Account Type
                          </Typography>
                          <TextField
                            fullWidth
                            size="small"
                            name="bank_ac_type"
                            value={values.bank_ac_type}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            select
                            SelectProps={{ style: { fontSize: 16 } }}
                          >
                            <MenuItem sx={{ fontSize: 16 }} value="Saving">
                              Saving
                            </MenuItem>
                            <MenuItem sx={{ fontSize: 16 }} value="Current">
                              Current
                            </MenuItem>
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Typography variant="subtitle1">
                            {" "}
                            Bank Account Number{" "}
                          </Typography>
                          <TextField
                            type="number"
                            fullWidth
                            InputProps={{ style: { fontSize: 16 } }}
                            placeholder="121252525252"
                            size="small"
                            name="personal_name"
                            //   values={values.personal_fname}
                          />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Typography variant="subtitle1">
                            {" "}
                            Bank IFSC code{" "}
                          </Typography>
                          <TextField
                            fullWidth
                            InputProps={{ style: { fontSize: 16 } }}
                            placeholder="BARBSARSUR"
                            size="small"
                            name="nationality"
                            // values={values.nationality}
                          />
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid
                          item
                          md={12}
                          xs={12}
                          textAlign="center"
                          sx={{ mt: 4, mb: 2 }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textDecoration: "underline",
                              fontSize: 20,
                              fontWeight: 550,
                            }}
                          >
                            Manual Upload Bank Proof
                          </Typography>
                        </Grid>
                        <Grid item md={12} xs={12} textAlign="center">
                          <Typography
                            variant="subtitle1"
                            sx={{
                              //   textDecoration: "underline",
                              //   fontSize: 20,
                              color: "GrayText",
                            }}
                          >
                            Note: Kindly upload copy of cancelled cheque OR
                            front page of passbook
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container rowSpacing={2} columnSpacing={15} sx={{py: 3}}>
                        <Grid item xs={12} md={6}>
                          <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                              <Typography variant="subtitle1">
                                {" "}
                                Select document Type!{" "}
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                              <input
                                type="radio"
                                className="btn-check"
                                id="btnradiocheque"
                                name="bank_document"
                                value="cheque"
                                checked={values.bank_document === "cheque"}
                                onChange={handleChange}
                              />
                              <label
                                style={{
                                  border: "1px solid #dee2e6",
                                  backgroundColor:
                                    values.bank_document === "cheque"
                                      ? "#DAE7E6"
                                      : "",
                                  color:
                                    values.bank_document === "cheque"
                                      ? "#0E3935"
                                      : "",
                                }}
                                className="btn btn-md w-100"
                                htmlFor="btnradiocheque"
                              >
                                Cancel Cheque/Passbook
                              </label>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                              <input
                                type="radio"
                                className="btn-check"
                                id="btnradiostatment"
                                name="bank_document"
                                value="statment"
                                checked={values.bank_document === "statment"}
                                onChange={handleChange}
                              />
                              <label
                                style={{
                                  border: "1px solid #dee2e6",
                                  backgroundColor:
                                    values.bank_document === "statment"
                                      ? "#DAE7E6"
                                      : "",
                                  color:
                                    values.bank_document === "statment"
                                      ? "#0E3935"
                                      : "",
                                }}
                                className="btn btn-md w-100"
                                htmlFor="btnradiostatment"
                              >
                                Bank Statment
                              </label>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                              <Typography variant="subtitle1">
                                Upload proof(Copy of cancelled cheque OR
                                Passbook)
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                              <div className="input-group">
                                <input
                                  style={{ color: "#b5b5b5" }}
                                  type="file"
                                  className="form-control"
                                  name="aadhar_back"
                                  id="inputGroupFile04"
                                  aria-describedby="inputGroupFileAddon04"
                                  aria-label="Upload"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <button
                                  style={{
                                    backgroundColor: "#f8f9fa",
                                    borderColor: "#dee2e6",
                                    ":hover": {
                                      backgroundColor: "lightgray",
                                      color: "gray",
                                      borderColor: "gray",
                                    },
                                  }}
                                  className="btn btn-outline-secondary"
                                  type="button"
                                  id="inputGroupFileAddon04"
                                  onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#f8f9fa";
                                    e.target.style.color = "#585858";
                                    e.target.style.borderColor = "#dee2e6";
                                  }}
                                  onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "#f8f9fa";
                                    e.target.style.color = "#585858";
                                    e.target.style.borderColor = "#dee2e6";
                                  }}
                                >
                                  <VisibilityIcon
                                    size="small"
                                    style={{ height: "20px" }}
                                  />
                                </button>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </form>
                  )
                )}
              </Formik>
            </Grid>
          </Grid>
          <Grid container sx={{ px: 2, pb: 2, pt: 10 }}>
            <Grid item xs={12} md={12}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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

export default BankDetails;
