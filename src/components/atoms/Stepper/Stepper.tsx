import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormHandler from "../../common/FormHandler";
import { IEventAPIAcceptor } from "../../../interfaces/Event";
import EventDetails from "../../templates/CreateEventTemplates/EventDetails/EventDetails";
import TicketsAndRegistration from "../../templates/CreateEventTemplates/TicketsAndRegistration/TicketsAndRegistration";
import SettingAndPublish from "../../templates/CreateEventTemplates/SettingAndPublish/SettingAndPublish";

const steps = ["Event Details", "Tickets/Registration", "Settings & Publish"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <FormHandler<IEventAPIAcceptor>
      initial={{
        title: "",
        description: "",
        date: new Date(),
        location: "",
        organizerId: "",
        status: "draft",
        image: "",
        capacity: 100,
        isPublic: true,
        price: 0,
        tags: [],
      }}
      process={(data) => {
        console.log("Submitted", data);
      }}
      render={({ submitHandler, inputHandler, formData }) => {
        return (
          <Box sx={{ width: "100%" }}>
            <Stepper
              activeStep={activeStep}
              sx={{
                maxWidth: {
                  lg: "60%",
                  md: "80%",
                  sm: "90%",
                },
                marginInline: "auto",
              }}
            >
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <form onSubmit={submitHandler}>
                <Box sx={{ mt: 2, mb: 1 }}>
                  {activeStep + 1 === 1 && (
                    <EventDetails
                      formData={formData}
                      inputHandler={inputHandler as ()=>void}
                    />
                  )}
                  {activeStep + 1 === 2 && <TicketsAndRegistration />}
                  {activeStep + 1 === 3 && <SettingAndPublish />}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}
                  <Box>
                    {activeStep === steps.length - 1 ? (
                      <Button type="submit">Finish</Button>
                    ) : (
                      <Button onClick={handleNext}>Next</Button>
                    )}
                  </Box>
                </Box>
              </form>
            )}
          </Box>
        );
      }}
    />
  );
}
