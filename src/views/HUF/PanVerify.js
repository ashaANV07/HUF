import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import { IconId } from "@tabler/icons-react";
import { useNavigate } from "react-router";

const PanVerify = () => {
  const initalValue = {
    dob_pan_number: "",
    dob: "",
  };

  const validationSchema = Yup.object().shape({
    dob_pan_number: Yup.string()
      .max(10, "Invalid Pan")
      .matches(
        /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
        "Pan Shoud be in ABCDE1234E format"
      )
      .required("Pan number is required"),
    dob: Yup.string()
      .required("Date of birth is required")
      .test("is-adult", "You must be 18 or older", function (value) {
        if (!value) return false;
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();

        const hasPassedBirthday =
          today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

        return age > 18 || (age === 18 && hasPassedBirthday);
      }),
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/huf/karta-details");
  };

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid item md={12} xs={12}>
        <Typography
        align="center"
          variant="subtitle1"
          sx={{
            textDecoration: "underline",
            fontSize: 20,
          }}
        >
          Verify Karta's PAN here!
        </Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        {/* <Box height="300px" overflow="auto"> */}
          <Formik
            initialValues={initalValue}
            validationSchema={validationSchema}
            onSubmit={(values, { setErrors, setStatus, setSubmitting }) =>
              console.log("PanVerify", values)
            }
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form>
                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                      <TextField
                      fullWidth
                        size="small"
                        name="dob_pan_number"
                        placeholder="Enter Pan Number"
                        value={values.dob_pan_number}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        InputProps={{
                          style: { fontSize: 16 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconId />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {touched.dob_pan_number && errors.dob_pan_number && (
                        <FormHelperText error>
                          {errors.dob_pan_number}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                      <TextField
                        size="small"
                        name="dob"
                        type="date"
                        value={values.dob}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        InputProps={{
                          style: { fontSize: 16 },
                        }}
                      />
                      {touched.dob && errors.dob && (
                        <FormHelperText error>{errors.dob}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={12} md={12} align="center">
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      variant="contained"
                      type="submit"
                      style={{ marginTop: 2, backgroundColor: "#008C76" }}
                      onClick={handleClick}
                    >
                      Verify PAN
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default PanVerify;
