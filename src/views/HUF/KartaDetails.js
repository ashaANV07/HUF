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
import { Formik } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useState } from "react";
import Header from "../pages/Header";
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

const KartaDetails = () => {
  const [checked, setChecked] = useState(false);
  const { classes } = useContext(APIContext);

  const initialValues = {
    personal_fname: "",
    personal_mname: "",
    personal_lname: "",
    father_name: "",
    per_occupation: "",
    designation: "",
    education: "Graducate",
    personal_gender: "male",
    marital_status: "single",
    Correspondence_address1: "",
    Correspondence_address2: "",
    Correspondence_address3: "",
    c_city: "",
    c_state: "Gujarat",
    c_country: "India",
    c_pincode: "",
    permanant_address1: "",
    permanant_address2: "",
    permanant_address3: "",
    p_city: "",
    p_state: "Gujarat",
    p_country: "India",
    p_pincode: "",
    nationality: "indian",
  };

  const handleCheckbox = (values, setFieldValue) => {
    if (!checked) {
      setFieldValue("permanant_address1", values.Correspondence_address1);
      setFieldValue("permanant_address2", values.Correspondence_address2);
      setFieldValue("permanant_address3", values.Correspondence_address3);
      setFieldValue("p_city", values.c_city);
      setFieldValue("p_state", values.c_state);
      setFieldValue("p_country", values.c_country);
      setFieldValue("p_pincode", values.c_pincode);
    } else {
      setFieldValue("permanant_address1", "");
      setFieldValue("permanant_address2", "");
      setFieldValue("permanant_address3", "");
      setFieldValue("p_city", "");
      setFieldValue("p_state", "");
      setFieldValue("p_country", "");
      setFieldValue("p_pincode", "");
    }
    setChecked(!checked);
  };

  const handleInputChange = (e, values, setFieldValue) => {
    if (checked) {
      setFieldValue(
        "permanant_address1",
        e.target.name == "Correspondence_address1"
          ? e.target.value
          : values.Correspondence_address1
      );
      setFieldValue(
        "permanant_address2",
        e.target.name == "Correspondence_address2"
          ? e.target.value
          : values.Correspondence_address2
      );
      setFieldValue(
        "permanant_address3",
        e.target.name == "Correspondence_address3"
          ? e.target.value
          : values.Correspondence_address3
      );
      setFieldValue(
        "p_city",
        e.target.name == "c_city" ? e.target.value : values.c_city
      );
      setFieldValue(
        "p_state",
        e.target.name == "c_state" ? e.target.value : values.c_state
      );
      setFieldValue(
        "p_country",
        e.target.name == "c_country" ? e.target.value : values.c_country
      );
      setFieldValue(
        "p_pincode",
        e.target.name == "c_pincode" ? e.target.value : values.c_pincode
      );
    }
    setFieldValue(e.target.name, e.target.value);
  };
  // const [justify, setJustify] = useState("flex-start");
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
                <Grid container>
                  <Grid item xs={12} md={12} textAlign="center" sx={{ my: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: "underline",
                        // fontSize: 20,ss
                        fontWeight: 550,
                      }}
                    >
                      Karta's Details
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
                          rowSpacing={1}
                          columnSpacing={{ sm: 3, md: 8 }}
                        >
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              First Name
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="First Name"
                              size="small"
                              name="personal_fname"
                              values={values.personal_fname}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Middle Name
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="Middle Name"
                              size="small"
                              name="personal_mname"
                              values={values.personal_mname}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Last Name
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="Last Name"
                              size="small"
                              name="personal_lname"
                              values={values.personal_lname}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Father Name
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="Father Name"
                              size="small"
                              name="father_name"
                              values={values.father_name}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Occupation
                            </Typography>
                            <TextField
                              fullWidth
                              size="small"
                              name="per_occupation"
                              value={values.per_occupation}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              select
                              SelectProps={{ style: { fontSize: 16 } }}
                            >
                              <MenuItem sx={{ fontSize: 16 }} value="Business">
                                Business
                              </MenuItem>
                              <MenuItem sx={{ fontSize: 16 }} value="Housewife">
                                Housewife
                              </MenuItem>
                              <MenuItem sx={{ fontSize: 16 }} value="Private">
                                Private
                              </MenuItem>
                              <MenuItem sx={{ fontSize: 16 }} value="Public">
                                Public
                              </MenuItem>
                              <MenuItem
                                sx={{ fontSize: 16 }}
                                value="Professional"
                              >
                                Professional
                              </MenuItem>
                              <MenuItem sx={{ fontSize: 16 }} value="Retired">
                                Retired
                              </MenuItem>
                              <MenuItem sx={{ fontSize: 16 }} value="Student">
                                Student
                              </MenuItem>
                            </TextField>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Designation
                            </Typography>
                            <TextField
                              fullWidth
                              InputProps={{ style: { fontSize: 16 } }}
                              placeholder="Karta"
                              size="small"
                              name="designation"
                              values={values.designation}
                            />
                            {/* {touched.pan_image && errors.pan_image && (
                              <FormHelperText error>
                                {errors.pan_image}
                              </FormHelperText>
                            )} */}
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Education
                            </Typography>
                            <TextField
                              fullWidth
                              size="small"
                              name="education"
                              value={values.education}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              select
                              SelectProps={{ style: { fontSize: 16 } }}
                            >
                              <MenuItem sx={{ fontSize: 16 }} value="Graducate">
                                Graducate
                              </MenuItem>
                              <MenuItem
                                sx={{ fontSize: 16 }}
                                value="Post Graducate"
                              >
                                Post Graducate
                              </MenuItem>
                              <MenuItem sx={{ fontSize: 16 }} value="Other">
                                Other
                              </MenuItem>
                            </TextField>
                            {/* {touched.aadhar_front && errors.aadhar_front && (
                              <FormHelperText error>
                                {errors.aadhar_front}
                              </FormHelperText>
                            )} */}
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">Gender</Typography>
                            <Grid container spacing={1}>
                              <Grid item xs={6} sm={6} md={4}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  id="btnradiomale"
                                  name="personal_gender"
                                  value="male"
                                  checked={values.personal_gender === "male"}
                                  onChange={handleChange}
                                />
                                <label
                                  style={{
                                    border: "1px solid #dee2e6",
                                    backgroundColor:
                                      values.personal_gender === "male"
                                        ? "#DAE7E6"
                                        : "",
                                    color:
                                      values.personal_gender === "male"
                                        ? "#0E3935"
                                        : "",
                                  }}
                                  className="btn btn-md w-100"
                                  htmlFor="btnradiomale"
                                >
                                  Male
                                </label>
                              </Grid>
                              <Grid item xs={6} sm={6} md={4}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  id="btnradiofemale"
                                  name="personal_gender"
                                  value="female"
                                  checked={values.personal_gender === "female"}
                                  onChange={handleChange}
                                />
                                <label
                                  style={{
                                    border: "1px solid #dee2e6",
                                    backgroundColor:
                                      values.personal_gender === "female"
                                        ? "#DAE7E6"
                                        : "",
                                    color:
                                      values.personal_gender === "female"
                                        ? "#0E3935"
                                        : "",
                                  }}
                                  className="btn btn-md w-100"
                                  htmlFor="btnradiofemale"
                                >
                                  Female
                                </label>
                              </Grid>
                            </Grid>
                            {/* {touched.aadhar_back && errors.aadhar_back && (
                              <FormHelperText error>
                                {errors.aadhar_back}
                              </FormHelperText>
                            )} */}
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Marital Status
                            </Typography>
                            <Grid container spacing={1}>
                              <Grid item xs={6} sm={6} md={4}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  id="btnradiosingle"
                                  name="marital_status"
                                  value="single"
                                  checked={values.marital_status === "single"}
                                  onChange={handleChange}
                                />
                                <label
                                  style={{
                                    border: "1px solid #dee2e6",
                                    backgroundColor:
                                      values.marital_status === "single"
                                        ? "#DAE7E6"
                                        : "",
                                    color:
                                      values.marital_status === "single"
                                        ? "#0E3935"
                                        : "",
                                  }}
                                  className="btn btn-md w-100"
                                  htmlFor="btnradiosingle"
                                >
                                  Single
                                </label>
                              </Grid>
                              <Grid item xs={6} sm={6} md={4}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  id="btnradio"
                                  name="marital_status"
                                  value="married"
                                  checked={values.marital_status === "married"}
                                  onChange={handleChange}
                                />
                                <label
                                  style={{
                                    border: "1px solid #dee2e6",
                                    backgroundColor:
                                      values.marital_status === "married"
                                        ? "#DAE7E6"
                                        : "",
                                    color:
                                      values.marital_status === "married"
                                        ? "#0E3935"
                                        : "",
                                  }}
                                  className="btn btn-md w-100"
                                  htmlFor="btnradio"
                                >
                                  Married
                                </label>
                              </Grid>
                            </Grid>
                            {/* {touched.aadhar_back && errors.aadhar_back && (
                              <FormHelperText error>
                                {errors.aadhar_back}
                              </FormHelperText>
                            )} */}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ sm: 3, md: 8 }}
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
                                  value={values.Correspondence_address1}
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Street/Lan"
                                  size="small"
                                  name="Correspondence_address2"
                                  value={values.Correspondence_address2}
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputProps={{ style: { fontSize: 16 } }}
                                  placeholder="Area/Locality"
                                  size="small"
                                  name="Correspondence_address3"
                                  value={values.Correspondence_address3}
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={6} md={8}>
                            <Grid
                              container
                              rowSpacing={{ xs: 1, md: 3 }}
                              columnSpacing={{ sm: 3, md: 8 }}
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
                                  value={values.c_city}
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
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
                                  value={values.c_pincode}
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
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
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
                                  value={values.c_state}
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
                                  onChange={(e) =>
                                    handleInputChange(e, values, setFieldValue)
                                  }
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
                            onChange={() =>
                              handleCheckbox(values, setFieldValue)
                            }
                          />
                        </Box>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ sm: 3, md: 8 }}
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
                                  value={values.permanant_address1}
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
                                  value={values.permanant_address2}
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
                                  value={values.permanant_address3}
                                  disabled={checked}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={6} md={8}>
                            <Grid
                              container
                              rowSpacing={{ xs: 1, md: 3 }}
                              columnSpacing={{ sm: 3, md: 8 }}
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
                                  value={values.p_city}
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
                                  value={values.p_pincode}
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
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.p_state}
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
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ sm: 3, md: 4 }}
                          sx={{ pt: 1 }}
                        >
                          <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="subtitle1">
                              Nationality
                            </Typography>
                            <Grid container spacing={1}>
                              <Grid item xs={6} sm={6} md={4}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  id="btnradioindian"
                                  name="nationality"
                                  value="indian"
                                  checked={values.nationality === "indian"}
                                  onChange={handleChange}
                                />
                                <label
                                  style={{
                                    border: "1px solid #dee2e6",
                                    backgroundColor:
                                      values.nationality === "indian"
                                        ? "#DAE7E6"
                                        : "",
                                    color:
                                      values.nationality === "indian"
                                        ? "#0E3935"
                                        : "",
                                  }}
                                  className="btn btn-md w-100"
                                  htmlFor="btnradioindian"
                                >
                                  Indian
                                </label>
                              </Grid>
                              <Grid item xs={6} sm={6} md={4}>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  id="btnradioother"
                                  name="nationality"
                                  value="other"
                                  checked={values.nationality === "other"}
                                  onChange={handleChange}
                                />
                                <label
                                  style={{
                                    border: "1px solid #dee2e6",
                                    backgroundColor:
                                      values.nationality === "other"
                                        ? "#DAE7E6"
                                        : "",
                                    color:
                                      values.nationality === "other"
                                        ? "#0E3935"
                                        : "",
                                  }}
                                  className="btn btn-md w-100"
                                  htmlFor="btnradioother"
                                >
                                  Other
                                </label>
                              </Grid>
                            </Grid>
                            {/* {touched.aadhar_back && errors.aadhar_back && (
                              <FormHelperText error>
                                {errors.aadhar_back}
                              </FormHelperText>
                            )} */}
                          </Grid>
                        </Grid>
                      </form>
                    )
                  )}
                </Formik>
              </Grid>
            </Grid>
            <Grid container sx={{ p: 2 }}>
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

export default KartaDetails;
