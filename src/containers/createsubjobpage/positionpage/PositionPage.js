import React, { useState,useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import JobFit from "./layout/JobFit";
import JobProFile from "./layout/JobProFile";
import CompetencyJob from "./layout/CompetencyJob";
import JobView from "./layout/JobView";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Job Fit", "Job Profile", "Competency"];
}

function getStepContent(stepIndex, childRef) {
  console.log(childRef)
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <JobFit ref={childRef}/>
        </div>
      );
    case 1:
      return (
        <div>
          <JobProFile />
        </div>
      );
    case 2:
      return (
        <div>
          <CompetencyJob />
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function PositionPage() {
  const childRef = useRef();
  console.log(childRef)
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <JobView/>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, childRef)}
            </Typography>
            <div style={{ margin: 20 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
