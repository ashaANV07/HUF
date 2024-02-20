import React, { useState, useRef } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  Button,
  ToggleButtonGroup,
  MenuItem,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
// import profile from "../../../assets/img/profile.PNG";
import myStyle from "../../assets/scss/_themes-vars.module.scss";
import Webcam from "react-webcam";
import VisibilityIcon from "@mui/icons-material/Visibility";

const UploadImage = (data, setData) => {
  const [cameraType, setCameraType] = useState("upload");
  const [openCamera, setOpenCamera] = useState(false);
  const [camaraImage, setCamaraImage] = useState(false);

  const webcamRef = useRef(null);

  const handleCameraTypeChange = (type) => {
    setCameraType(type);
  };

  const handleCamera = () => {
    setOpenCamera(!openCamera);
  };

  const capture = () => {
    setCamaraImage(webcamRef.current.getScreenshot());
    setData({
      ...data,
      Camera_capture_data: webcamRef.current.getScreenshot().split(",")[1],
    });
    setOpenCamera(false);
  };

  const handleReTake = () => {
    setCamaraImage("");
    setData({ ...data, Camera_capture_data: "" });
    setOpenCamera(true);
  };

  return (
    <>
      <Grid container display="flex" justifyContent="center">
        <Grid container>
          <Grid item xs={12} md={12} align="center">
            <Typography variant="subtitle1">
              Select camera caputure OR upload image:
            </Typography>
            <Grid
              container
              spacing={1}
              display="flex"
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Grid item xs={6} sm={6} md={5}>
                <input
                  type="radio"
                  className="btn-check"
                  name="cameraType"
                  id="cameraCapture"
                  checked={cameraType === "capture"}
                  onChange={() => handleCameraTypeChange("capture")}
                />
                <label
                  style={{
                    border: "1px solid #dee2e6",
                    backgroundColor:
                      cameraType === "capture" ? myStyle.active : "",
                    color:
                      cameraType === "capture" ? myStyle.secondaryMain : "",
                  }}
                  className="btn btn-md w-100"
                  htmlFor="cameraCapture"
                >
                  Camera Caputure
                </label>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
                <input
                  type="radio"
                  className="btn-check"
                  name="cameraType"
                  id="uploadImage"
                  checked={cameraType === "upload"}
                  onChange={() => handleCameraTypeChange("upload")}
                />
                <label
                  style={{
                    border: "1px solid #dee2e6",
                    backgroundColor:
                      cameraType === "upload" ? myStyle.active : "",
                    color: cameraType === "upload" ? myStyle.secondaryMain : "",
                  }}
                  className="btn btn-md w-100"
                  htmlFor="uploadImage"
                >
                  Upload Image
                </label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {cameraType === "upload" ? (
          <Grid container>
            <Grid item xs={12} md={12} sx={{ pt: 4, ml: 2 }}>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ pb: 2, fontWeight: "bold" }}
              >
                Upload Image
              </Typography>
              <Box
                sx={{
                  height: 300,
                  width: 525,
                  maxHeight: { xs: 233, md: 300 },
                  maxWidth: { xs: 315, md: 525 },
                  padding: 3,
                  borderRadius: "2%",
                  boxShadow:
                    "0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <>
                  <Typography variant="subtitle2" sx={{ mt: 0 }}>
                    <b>Note :</b> Please write recieved Email OTP on a piece of
                    paper and upload selfie with that paper in order to complete
                    in person Verification.
                  </Typography>

                  {/* <Box
                    alignItems="center"
                    component="img"
                    sx={{
                      height: 233,
                      width: 450,
                      maxHeight: { xs: 130, md: 200 },
                      maxWidth: { xs: 250, md: 450 },
                      mt: 2,
                    }}
                    alt="The house from the offer."
                    src={profile}
                  /> */}
                </>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid
                container
                spacing={2}
                display="flex"
                sx={{ pt: 1.4, px: 2 }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ maxWidth: { md: "100%", xs: "96%" } }}
                >
                  <div className="input-group">
                    <input
                      style={{ color: "#b5b5b5" }}
                      type="file"
                      className="form-control"
                      name="aadhar_back"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
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
                      <VisibilityIcon size="small" style={{ height: "20px" }} />
                    </button>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5.8}
                  sx={{ maxWidth: { md: "100%", xs: "96%" } }}
                >
                  <Button
                    fullWidth
                    style={{
                      color: "#0E3935",
                      border: "1px solid #dee2e6",
                      backgroundColor: "#DAE7E6",
                    }}
                    variant="contained"
                    size="small"
                  >
                    Send to my mobile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid
            sx={{ pt: 4 }}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ pb: 2, fontWeight: "bold" }}
            >
              Capture Image
            </Typography>
            <Box
              sx={{
                height: 300,
                width: 525,
                maxHeight: { xs: 233, md: 300 },
                maxWidth: { xs: 315, md: 525 },
                padding: 2,
                borderRadius: "2%",
                backgroundColor: "#f8f8f8",
                boxShadow:
                  "0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              {openCamera ? (
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  height={"100%"}
                  screenshotFormat="image/jpeg"
                  width={"75%"}
                />
              ) : camaraImage ? (
                <img src={camaraImage} alt="" width={"76%"} height={"100%"} />
              ) : (
                <>
                  <Typography variant="subtitle2" sx={{ mt: 0 }}>
                    <b>Note :</b> Please write recieved Email OTP on a piece of
                    paper and upload selfie with that paper in order to complete
                    in person Verification.
                  </Typography>

                  {/* <Box
                    alignItems="center"
                    component="img"
                    sx={{
                      height: 233,
                      width: 450,
                      maxHeight: { xs: 130, md: 200 },
                      maxWidth: { xs: 250, md: 450 },
                      mt: 2,
                    }}
                    alt="The house from the offer."
                    src={profile}
                  /> */}
                </>
              )}
            </Box>
            <Button
              sx={{
                mr: 2,
                mt: 1.5,
                color: "#0E3935",
                border: "1px solid #dee2e6",
                backgroundColor: "#DAE7E6",
                "&:hover": {
                  background: "#DAE7E6",
                },
              }}
              variant="contained"
              // color="secondary"
              onClick={handleCamera}
              size="small"
            >
              {openCamera ? "Turn Off Camera" : "Turn On Camera"}
            </Button>
            <Button
              sx={{
                mr: 2,
                mt: 1.5,
                color: "#0E3935",
                border: "1px solid #dee2e6",
                backgroundColor: "#DAE7E6",
                "&:hover": {
                  background: "#DAE7E6",
                },
              }}
              variant="contained"
              // color="secondary"
              onClick={capture}
              size="small"
              disabled={!openCamera}
            >
              Capture
            </Button>
            <Button
              sx={{
                mt: 1.5,
                color: "#0E3935",
                border: "1px solid #dee2e6",
                backgroundColor: "#DAE7E6",
                "&:hover": {
                  background: "#DAE7E6",
                },
              }}
              variant="contained"
              // color="secondary"
              onClick={handleReTake}
              size="small"
              disabled={!camaraImage}
            >
              ReTake
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default UploadImage;
