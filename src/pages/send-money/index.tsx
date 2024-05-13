import { Box, Card, CardContent, Grid, IconButton, LinearProgress, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react'
import RecipientPage from './recipient';
import AmountPage from './amount';
import ReviewPage from './review';
import PayPage from './pay';
import StepperWrapper from 'src/@core/styles/mui/stepper';
import { Icon } from '@iconify/react';


const steps = [{
  title: "RECIPIENT"
},
{
  title: "AMOUNT"
},
{
  title: "REVIEW"
},
{
  title: "PAY"
}];

const recipients = [
  {
    img: "",
    name: "Sandeep Vijay",
    accountID: "456789876545678"
  },
  {
    img: "",
    name: "John Doe",
    accountID: "456789876987654"
  }
]
const LandingPage = (props: any) => {
  return (
    <Box>
      <Typography sx={{
        color: '#141516',
        fontSize: 32,
        fontWeight: '600',
      }}>Who are you sending</Typography>
      <Typography sx={{
        mb: 5,
        color: '#141516',
        fontSize: 32,
        fontWeight: '600',
      }}>money to?</Typography>
      <Card sx={{ mb: 8, width: "80%" }}>
        <CardContent>
          <Grid flexDirection={'row'} container>
            <Grid item xs={1}>
              <Icon icon='tabler:user-plus' fontSize={20} />
            </Grid>
            <Grid item xs={7}>
              <Typography>Add recipient</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={() => props.setActiveStep(1)}>
                <Icon icon='tabler:arrow-right' fontSize={20} />
              </IconButton>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
          </Box>
        </CardContent>
      </Card>

      <Typography sx={{
        mb: 5, color: 'black',
        fontSize: 18,
        fontWeight: '700',
      }}>Past recipient</Typography>

      {
        recipients.map((recipient, index) => (
          <Card key={index} sx={{ width: "80%", mb: 2 }}>
            <CardContent>
              <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} flexDirection={'row'} rowGap={2} container>
                <Grid item xs={1}>
                  <Icon icon='tabler:user-circle' fontSize={20} />
                </Grid>
                <Grid item xs={7}>
                  <Typography>{recipient.name}</Typography>
                  <Typography>Account no- {recipient.accountID}</Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton>
                    <Icon icon='tabler:arrow-right' fontSize={20} />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      }
    </Box>
  )
}
const SendMoney = () => {
  const [activeStep, setActiveStep] = useState(0);


  const StepContent = (props: any) => {
    let component = null;
    switch (props.tab) {
      case 0:
        return component = <LandingPage setActiveStep={setActiveStep} />;
      case 1:
        return component = <RecipientPage setActiveStep={setActiveStep} />;
      case 2:
        return component = <AmountPage setActiveStep={setActiveStep} />;
      case 3:
        return component = <ReviewPage setActiveStep={setActiveStep} />;
      case 4:
        return component = <PayPage />;
    }

    return component;
  };


  return (
    <>
      <Typography sx={{ mb: 3, color: "#141516", fontSize: "18px", fontWeight: "700", display: 'flex', alignItems: "center" }}>My Account
        <IconButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M7.45752 3.89985L12.8909 9.33319C13.5325 9.97485 13.5325 11.0249 12.8909 11.6665L7.45752 17.0999" stroke="#141516" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </IconButton>
        <Typography sx={{ color: "#141516", fontSize: "18px", fontWeight: "700" }}>Send Money</Typography>
      </Typography>
      <Card sx={{ width: '80%', background: 'white', boxShadow: "0px 0px 8px #EEF1F9", borderRadius: "24px" }} >
        <Box sx={{ p: 10 }}>
          <Typography sx={{ mb: 5, fontSize: "24px", color: "#141516", fontWeight: 700 }} variant='h4'>Account Verification</Typography>

          {/* Stepper */}
          <Box sx={{ mb: 8, width: '90%', background: 'white' }}>
            <StepperWrapper sx={{ mb: 11.5 }}>
              <Stepper
                activeStep={activeStep}
                sx={{ justifyContent: 'space-between', color: "black" }}
                connector={<Icon fontSize='1.5rem' icon='tabler:chevron-right' />}
              >
                {steps.map((step, index) => {
                  return (
                    <Step key={index} onClick={() => setActiveStep(index + 1)}>
                      <StepLabel sx={{ color: "black" }}>
                        <Typography>{step.title}</Typography>
                      </StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            </StepperWrapper>
            <Box>
              <LinearProgress variant="determinate" value={(activeStep / (steps.length)) * 100} />
            </Box>
          </Box>

          {/* Tabs */}
          <Box sx={{ p: 5 }}>
            <StepContent tab={activeStep} />
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default SendMoney;
