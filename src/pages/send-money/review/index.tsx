import React from 'react'
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import Icon from 'src/@core/components/icon';

const ReviewPage = (props: any) => {
  return (
    <Box>
      <Typography sx={{
        color: '#141516',
        fontSize: 32,
        fontWeight: '600',
      }}>Confirm your payment  </Typography>
      <Typography sx={{
        mb: 5,
        color: '#141516',
        fontSize: 32,
        fontWeight: '600',
      }}>details</Typography>

      <Box sx={{ p: 10, width: "90%", background: 'white', boxShadow: '0px 0px 8px #EEF1F9' }}>
        <Box>
          <Typography sx={{
            color: 'black',
            fontSize: 24,
            fontWeight: '600',
          }}> Transfer Details </Typography>
          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
              }}>You Send</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 24,
                fontWeight: '700',
              }}>1,620,000</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                ml: 2,
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}>KES</Typography>
              <IconButton onClick={() => console.log("chevron-down")}>
                <Icon icon='tabler:chevron-down' fontSize={20} />
              </IconButton>
            </Grid>
          </Grid>

          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Total Fees Deducted</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>48,598 KES</Typography>
            </Grid>
          </Grid>

          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Total amount we’ll convert</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>1,070,608 INR</Typography>
            </Grid>
          </Grid>

          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
              }}>Recipient Gets</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 18,
                fontWeight: '600',
              }}>160M IDR</Typography>
            </Grid>

          </Grid>

        </Box>
        <Divider sx={{ color: "rgba(0, 0, 0, 0.15)", mt: 8, mb: 8 }} />
        <Box>
          <Typography sx={{
            color: 'black',
            fontSize: 24,
            fontWeight: '600',
          }}> Recipient Details </Typography>
          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Account holder name</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Apollo Hospitals</Typography>
            </Grid>
          </Grid>

          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Account No</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>9876123456</Typography>
            </Grid>
          </Grid>

          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Email ID</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>billing@apollohospitals.com</Typography>
            </Grid>
          </Grid>

          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>Bank Name</Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'rgba(20 21 22 0.60)',
                fontSize: 18,
                fontWeight: '400',
              }}>HDFC Bank</Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container sx={{ mt: 30, width: "100%", display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => props?.setActiveStep(2)} variant='outlined' sx={{ mb: 4, color: "#141516", fontWeight: 600 }}>
            Back
          </Button>
          <Button onClick={() => props?.setActiveStep(4)} variant='outlined' sx={{ mb: 4, ml: 5, background: "#141516", color: "white", fontWeight: 600 }}>
            Continue
          </Button>
        </Grid>
      </Box>
    </Box>
  )
}

export default ReviewPage;
