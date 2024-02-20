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
  Dialog,
  DialogContent
} from "@mui/material";
import { Formik } from "formik";
import Header from "../pages/Header";
import CustomStepper from "../pages/CustomStepper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import { APIContext } from "../../context/APIstate";
import React from "react";
import { array } from "yup";
import UploadImage from "./UploadImage";

const Signature = () => {
  const [numDetails, setNumDetails] = useState([1]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };  

  const { classes } = useContext(APIContext);
  const initialValues = {
    Huf_residency: "yes",
    karta_residency: "yes",
    Huf_politically: "yes",
    Karta_politically: "yes",
    gender: "male",
  };

  const handleAddDetails = () => {
    if (numDetails.length < 3) {
      setNumDetails([...numDetails, numDetails[numDetails.length - 1] + 1]);
      // setNumDetails((prevel) => [...prevel, numDetails[numDetails.length - 1] + 1])
    }
  };
  return (
    <>
      <Header />
      <CustomStepper />
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={12} md={10}>
          <Card sx={{ boxShadow: 4, borderRadius: "4px" }}>
            <Box
              maxHeight="65vh"
              overflow="auto"
              className={classes.customScrollbar}
            >
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
                        Signature Upload
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
                          <Grid container>
                            <Grid item xs={12} md={6}>
                              <Grid container spacing={1}>
                                <Grid item xs={12} md={12}>
                                  <Typography variant="subtitle1">
                                    Upload signature proof of karta
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={7}>
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
                                        e.target.style.backgroundColor =
                                          "#f8f9fa";
                                        e.target.style.color = "#585858";
                                        e.target.style.borderColor = "#dee2e6";
                                      }}
                                      onMouseOut={(e) => {
                                        e.target.style.backgroundColor =
                                          "#f8f9fa";
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
                              <Grid container spacing={2} sx={{ py: 2 }}>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="subtitle2">
                                    HUF's Tax residency other than india?
                                  </Typography>
                                  <Grid container spacing={1} sx={{ pt: 1 }}>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradiohufyes"
                                        name="Huf_residency"
                                        value="yes"
                                        checked={values.Huf_residency === "yes"}
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.Huf_residency === "yes"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.Huf_residency === "yes"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradiohufyes"
                                      >
                                        Yes
                                      </label>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradiohuf"
                                        name="Huf_residency"
                                        value="no"
                                        checked={values.Huf_residency === "no"}
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.Huf_residency === "no"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.Huf_residency === "no"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradiohuf"
                                      >
                                        No
                                      </label>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="subtitle2">
                                    Karta's Tax residency other than india?
                                  </Typography>
                                  <Grid container spacing={1} sx={{ pt: 1 }}>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradiokartayes"
                                        name="karta_residency"
                                        value="yes"
                                        checked={
                                          values.karta_residency === "yes"
                                        }
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.karta_residency === "yes"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.karta_residency === "yes"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradiokartayes"
                                      >
                                        Yes
                                      </label>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradio"
                                        name="karta_residency"
                                        value="no"
                                        checked={
                                          values.karta_residency === "no"
                                        }
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.karta_residency === "no"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.karta_residency === "no"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradio"
                                      >
                                        No
                                      </label>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Grid container spacing={1}>
                                <Grid item xs={12} md={12}>
                                  <Typography variant="subtitle1">
                                    Upload signature proof of HUF
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} md={7}>
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
                                        e.target.style.backgroundColor =
                                          "#f8f9fa";
                                        e.target.style.color = "#585858";
                                        e.target.style.borderColor = "#dee2e6";
                                      }}
                                      onMouseOut={(e) => {
                                        e.target.style.backgroundColor =
                                          "#f8f9fa";
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
                              <Grid container spacing={0.8} sx={{ py: 2 }}>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="subtitle2">
                                    Wheather HUF is politically Exposed /
                                    Related to politically exposed person?
                                  </Typography>
                                  <Grid container spacing={1} sx={{ pt: 1 }}>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradio_yes"
                                        name="Huf_politically"
                                        value="yes"
                                        checked={
                                          values.Huf_politically === "yes"
                                        }
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.Huf_politically === "yes"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.Huf_politically === "yes"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradio_yes"
                                      >
                                        Yes
                                      </label>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradio_no"
                                        name="Huf_politically"
                                        value="no"
                                        checked={
                                          values.Huf_politically === "no"
                                        }
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.Huf_politically === "no"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.Huf_politically === "no"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradio_no"
                                      >
                                        No
                                      </label>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="subtitle2">
                                    Wheather Karta is politically Exposed/
                                    Related to politically exposed person?
                                  </Typography>
                                  <Grid container spacing={1} sx={{ pt: 1 }}>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradio_karta_yes"
                                        name="Karta_politically"
                                        value="yes"
                                        checked={
                                          values.Karta_politically === "yes"
                                        }
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.Karta_politically === "yes"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.Karta_politically === "yes"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradio_karta_yes"
                                      >
                                        Yes
                                      </label>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={4}>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        id="btnradio_karta_no"
                                        name="Karta_politically"
                                        value="no"
                                        checked={
                                          values.Karta_politically === "no"
                                        }
                                        onChange={handleChange}
                                      />
                                      <label
                                        style={{
                                          border: "1px solid #dee2e6",
                                          backgroundColor:
                                            values.Karta_politically === "no"
                                              ? "#DAE7E6"
                                              : "",
                                          color:
                                            values.Karta_politically === "no"
                                              ? "#0E3935"
                                              : "",
                                        }}
                                        className="btn btn-md w-100"
                                        htmlFor="btnradio_karta_no"
                                      >
                                        No
                                      </label>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Grid container>
                                <Grid
                                  item
                                  md={12}
                                  xs={12}
                                  textAlign="center"
                                  sx={{ my: 4 }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      textDecoration: "underline",
                                      fontSize: 20,
                                      fontWeight: 550,
                                    }}
                                  >
                                    Details of our HUF and all of its
                                    co-parceners are as mentioned below:
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Grid container>
                                <Grid item xs={12} md={2.2}>
                                  <Button
                                    fullWidth
                                    size="small"
                                    startIcon={<AddIcon />}
                                    onClick={handleAddDetails}
                                    variant="contained"
                                    style={{
                                      padding: "4px 0",
                                      color: "#0E3935",
                                      border: "1px solid #dee2e6",
                                      backgroundColor: "#DAE7E6",
                                    }}
                                  >
                                    Add More Details
                                  </Button>
                                </Grid>
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <Grid container sx={{ pt: 3 }}>
                                  <Grid item xs={12} md={12}>
                                    <Grid container spacing={2}>
                                      <Grid item xs={12} md={3}>
                                        <Typography variant="subtitle1">
                                          Name of family Member
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          InputProps={{
                                            style: { fontSize: 16 },
                                          }}
                                          placeholder="Parth Ashokbhai Golakiya"
                                          size="small"
                                          name="father_name"
                                          // values={values.father_name}
                                        />
                                      </Grid>
                                      <Grid item xs={6} md={2}>
                                        <Typography variant="subtitle1">
                                          Date of Birth
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          size="small"
                                          name="dob"
                                          type="date"
                                          className={classes.input}
                                          // value={values.dob}
                                          // onBlur={handleBlur}
                                          // onChange={handleChange}
                                          InputProps={{
                                            style: { fontSize: 16 },
                                          }}
                                        />
                                      </Grid>
                                      <Grid item xs={6} sm={6} md={1.5}>
                                        <Typography variant="subtitle1">
                                          Gender
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          size="small"
                                          name="gender"
                                          value={values.gender}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          select
                                          SelectProps={{
                                            style: { fontSize: 16 },
                                          }}
                                        >
                                          <MenuItem
                                            sx={{ fontSize: 16 }}
                                            value="male"
                                          >
                                            Male
                                          </MenuItem>
                                          <MenuItem
                                            sx={{ fontSize: 16 }}
                                            value="female"
                                          >
                                            Female
                                          </MenuItem>
                                          <MenuItem
                                            sx={{ fontSize: 16 }}
                                            value="Other"
                                          >
                                            Other
                                          </MenuItem>
                                        </TextField>
                                      </Grid>
                                      <Grid item xs={12} md={2.5}>
                                        <Typography variant="subtitle1">
                                          Relationship with karta
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          InputProps={{
                                            style: { fontSize: 16 },
                                          }}
                                          placeholder="HUF"
                                          size="small"
                                          name="father_name"
                                          // values={values.father_name}
                                        />
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={12} md={12} sx={{ pt: 2 }}>
                                    <Grid container spacing={2}>
                                      <Grid item xs={12} md={3}>
                                        <Typography variant="subtitle1">
                                          Name of family Member
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          InputProps={{
                                            style: { fontSize: 16 },
                                          }}
                                          placeholder="Parth Ashokbhai Golakiya"
                                          size="small"
                                          name="father_name"
                                          // values={values.father_name}
                                        />
                                      </Grid>
                                      <Grid item xs={6} md={2}>
                                        <Typography variant="subtitle1">
                                          Date of Birth
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          size="small"
                                          name="dob"
                                          type="date"
                                          className={classes.input}
                                          InputProps={{
                                            style: { fontSize: 16 },
                                          }}
                                        />
                                      </Grid>
                                      <Grid item xs={6} sm={6} md={1.5}>
                                        <Typography variant="subtitle1">
                                          Gender
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          size="small"
                                          name="gender"
                                          value={values.gender}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          select
                                          SelectProps={{
                                            style: { fontSize: 16 },
                                          }}
                                        >
                                          <MenuItem
                                            sx={{ fontSize: 16 }}
                                            value="male"
                                          >
                                            Male
                                          </MenuItem>
                                          <MenuItem
                                            sx={{ fontSize: 16 }}
                                            value="female"
                                          >
                                            Female
                                          </MenuItem>
                                          <MenuItem
                                            sx={{ fontSize: 16 }}
                                            value="Other"
                                          >
                                            Other
                                          </MenuItem>
                                        </TextField>
                                      </Grid>
                                      <Grid item xs={12} md={2.5}>
                                        <Typography variant="subtitle1">
                                          Relationship with karta
                                        </Typography>
                                        <TextField
                                          fullWidth
                                          InputProps={{
                                            style: { fontSize: 16 },
                                          }}
                                          placeholder="Karta"
                                          size="small"
                                          name="father_name"
                                          // values={values.father_name}
                                        />
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item xs={12} md={12} sx={{ pt: 2 }}>
                                    {numDetails.map((_, index) => (
                                      <Grid
                                        container
                                        spacing={2}
                                        key={index}
                                        sx={{ pt: 1 }}
                                      >
                                        <Grid item xs={12} md={3}>
                                          <Typography variant="subtitle1">
                                            Name of family Member
                                          </Typography>
                                          <TextField
                                            fullWidth
                                            InputProps={{
                                              style: { fontSize: 16 },
                                            }}
                                            placeholder="Parth Ashokbhai Golakiya"
                                            size="small"
                                            name={`member_name_${index}`}
                                            // values={values.father_name}
                                          />
                                        </Grid>
                                        <Grid item xs={6} md={2}>
                                          <Typography variant="subtitle1">
                                            Date of Birth
                                          </Typography>
                                          <TextField
                                            fullWidth
                                            size="small"
                                            name="dob"
                                            type="date"
                                            className={classes.input}
                                            InputProps={{
                                              style: { fontSize: 16 },
                                            }}
                                          />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={1.5}>
                                          <Typography variant="subtitle1">
                                            Gender
                                          </Typography>
                                          <TextField
                                            fullWidth
                                            size="small"
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            select
                                            SelectProps={{
                                              style: { fontSize: 16 },
                                            }}
                                          >
                                            <MenuItem
                                              sx={{ fontSize: 16 }}
                                              value="male"
                                            >
                                              Male
                                            </MenuItem>
                                            <MenuItem
                                              sx={{ fontSize: 16 }}
                                              value="female"
                                            >
                                              Female
                                            </MenuItem>
                                            <MenuItem
                                              sx={{ fontSize: 16 }}
                                              value="Other"
                                            >
                                              Other
                                            </MenuItem>
                                          </TextField>
                                        </Grid>
                                        <Grid item xs={12} md={2.5}>
                                          <Typography variant="subtitle1">
                                            Relationship with karta
                                          </Typography>
                                          <TextField
                                            fullWidth
                                            InputProps={{
                                              style: { fontSize: 16 },
                                            }}
                                            placeholder="Karta"
                                            size="small"
                                            name="father_name"
                                            // values={values.father_name}
                                          />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                          <Typography variant="subtitle1">
                                            Upload Signature proof of karta
                                          </Typography>
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
                                                e.target.style.backgroundColor =
                                                  "#f8f9fa";
                                                e.target.style.color =
                                                  "#585858";
                                                e.target.style.borderColor =
                                                  "#dee2e6";
                                              }}
                                              onMouseOut={(e) => {
                                                e.target.style.backgroundColor =
                                                  "#f8f9fa";
                                                e.target.style.color =
                                                  "#585858";
                                                e.target.style.borderColor =
                                                  "#dee2e6";
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
                                    ))}
                                  </Grid>
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
                              <UploadImage />
                            </DialogContent>
                          </Dialog>
                        </form>
                      )
                    )}
                  </Formik>
                </Grid>
              </Grid>
              <Grid container sx={{ p: 2 }}>
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

export default Signature;
