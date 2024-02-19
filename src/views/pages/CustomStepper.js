import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useMediaQuery } from "@mui/material";
// import mystyle from "../../assets/scss/_themes-vars.module.scss";
import { useLocation } from "react-router";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#008c76",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {    
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#008c76',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 4,
    borderRadius: 5,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#008c76",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#008c76",
    zIndex: 1,
    fontSize: 22,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = [
  "HUF Details",
  "Karta's Details",
  "Treading Preference",
  "Signature Upload",
  "Bank Details",
  "Manual Upload",
];

export default function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    switch (pathname) {
      case '/eKYC/aadhar-details':
        setActiveStep(1);
        break;
      case '/eKYC/individual-details':
        setActiveStep(2);
        break;
      case '/eKYC/bank-details':
        setActiveStep(3);
        break;
      case '/eKYC/signature-upload':
        setActiveStep(4);
        break;
      case '/eKYC/e-sign':
        setActiveStep(5);
        break;
      default:
        break;
    }
  }, [pathname]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stack sx={{ width: "100%", mb: 1 }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector />}
        >
          <Step />
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    m: 1,
                    mt: 1
                  },
                }}
                StepIconComponent={QontoStepIcon}
              >
                {!isMobile ? label : ""}
              </StepLabel>
            </Step>
          ))}
          <Step key="start" disabled />
        </Stepper>
      </Stack>
      {/* {isMobile ? <Typography variant="h6" textAlign='center' sx={{m: 1}}>Hello</Typography> : ""} */}
    </>
  );
}
