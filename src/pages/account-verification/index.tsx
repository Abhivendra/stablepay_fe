// ** MUI Imports
import { Button, Divider, IconButton, Step, StepContent, StepLabel, Stepper } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { useState } from 'react'

// ** Custom Component Import
import AccountDetails from './AccountDetails'
import AccountIdentifyProof from './IdentityProof'
import AccountPreview from './Preview'

const AccountVerification = () => {
  const [showForm, setShowForm] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const CardIllustration = styled('img')(({ }) => ({
    width: "100%",
    height: "80%",
    borderRadius: "25px"
  }));

  const steps = [
    {
      label: 'Add Account Details',
      description: `Your company or organisation details`,
    },
    {
      label: 'Upload Documents',
      description:
        'Submit business or organisation document proof',
    },
    {
      label: 'Verification Status',
      description: `Once verified, your payments will get activated`,
    },
  ];

  const Tabs = (props: any) => {
    let component = null;
    switch (props.tab) {
      case 1:
        return component = <AccountDetails setTabIndex={setTabIndex} />;
      case 2:
        return component = <AccountIdentifyProof setTabIndex={setTabIndex} />;
      case 3:
        return component = <AccountPreview setTabIndex={setTabIndex} />;
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
        <Typography sx={{ color: "#141516", fontSize: "18px", fontWeight: "700" }}>Account Verification</Typography>
      </Typography>
      {showForm ? (
        <Box style={{ width: '80%', background: 'white', boxShadow: '0px 0px 12px #EDF0F6', borderRadius: 24 }} >
          <Box sx={{ p: 10 }}>
            <Typography sx={{ mb: 5, fontSize: "24px", color: "#141516", fontWeight: 700 }} variant='h4'>Account Verification</Typography>

            {/* Stepper */}
            <Typography sx={{ mb: 3, color: "#141516", fontSize: "16px", fontWeight: tabIndex == 1 || tabIndex == 2 || tabIndex == 3 ? "600" : '0', display: 'flex', alignItems: "center" }}>ACCOUNT DETAILS
              <IconButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.45752 3.89985L12.8909 9.33319C13.5325 9.97485 13.5325 11.0249 12.8909 11.6665L7.45752 17.0999" stroke="#141516" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </IconButton>
              <Typography sx={{ color: "#141516", fontSize: "16px", fontWeight: tabIndex == 2 || tabIndex == 3 ? "600" : '0' }}>IDENTITY PROOF</Typography>
              <IconButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.45752 3.89985L12.8909 9.33319C13.5325 9.97485 13.5325 11.0249 12.8909 11.6665L7.45752 17.0999" stroke="#141516" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </IconButton>
              <Typography sx={{ color: "#141516", fontSize: "16px", fontWeight: tabIndex == 3 ? "600" : '0' }}>REVIEW</Typography>
            </Typography>
            <Tabs tab={tabIndex} />
          </Box>
        </Box>
      ) :
        (
          <>
            <Box sx={{ mb: 8, background: '#FFF', width: "80%", boxShadow: "0px 0px 8px 0px #EEF1F9" }}>
              <Box sx={{ height: "100%", }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Card >
                      <CardHeader></CardHeader>
                      <CardContent>
                        <Grid container spacing={6} >
                          <Grid item xs={6} >
                            <Typography sx={{ mb: 8, color: "#141516", fontSize: "32px", fontStyle: "normal", fontWeight: 600, lineHeight: '150%' }}>Verify your account to
                              activate payments.</Typography>
                            <Grid container spacing={2} sx={{ padding: 5 }}>
                              <Grid item xs={6}>
                                <Box sx={{ background: "#F8F8FF", padding: "16px 20px", borderRadius: "83px", display: 'inline-flex', alignItems: "center", justifyContent: "center" }}>
                                  <Typography sx={{ color: "#9696C1", fontSize: "14px", fontWeight: "700px" }}>
                                    Safe and Secure
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} >
                                <Box sx={{ background: "#F8F8FF", padding: "16px 20px", borderRadius: "83px", display: 'inline-flex', alignItems: "center", justifyContent: "center" }}>
                                  <Typography sx={{ color: "#9696C1", fontSize: "14px", fontWeight: "600px" }}>
                                    250+ verified so far
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <CardIllustration alt='card-illustration' src={`/images/pages/Rectangle 4888.png`} />
                          </Grid>
                        </Grid>
                      </CardContent>
                      <Divider sx={{ color: "rgba(0, 0, 0, 0.15)" }} />
                      <Box sx={{ p: 10 }}>
                        <Typography sx={{ mt: 5, color: "#141516", fontSize: "24px", fontWeight: 700, }}>Just 3 steps process </Typography>
                        <Typography sx={{ mb: 5, color: "#141516", fontSize: "24px", fontWeight: 700, }}> and your are ready!</Typography>
                        <Stepper orientation='vertical'>
                          {steps.map((step, index) => (
                            <Step key={step.label + index}>
                              <StepLabel
                              >
                                {step.label}
                              </StepLabel>
                              <Typography sx={{ ml: 10 }}> {step.description}</Typography>
                              <StepContent>
                              </StepContent>
                            </Step>
                          ))}
                        </Stepper>
                        <Button
                          variant='contained'
                          onClick={() => setShowForm(true)}
                          sx={{ mt: 5, mr: 1, ml: 8, background: "#141516", color: 'white' }}
                        >
                          Verify Now
                        </Button>
                      </Box>

                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </>
        )
      }

    </>
  )
};

export default AccountVerification;
