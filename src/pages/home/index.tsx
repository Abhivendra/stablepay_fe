// ** MUI Imports
import { IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import Link from 'next/link'

const Home = () => {
  const CardIllustration = styled('img')(({ }) => ({
    width: "100%",
    height: "80%",
    borderRadius: "25px"
  }))

  const SendMoneyIllustration = styled('img')(({ }) => ({
    width: "100%",
    height: "80%",
    borderRadius: "25px"
  }))

  const RequestMoneyIllustration = styled('img')(({ }) => ({
    width: "100%",
    height: "80%",
    borderRadius: "25px"
  }))

  return (
    <>
      <Typography sx={{ mb: 3, color: "#141516", fontSize: "18px", fontWeight: "700" }}>My Account</Typography>
      <Grid container sx={{ mb: 8, background: '#FBFCFF' }}>
        <Grid item xs={12}>
          <Card sx={{ height: "100%", width: "80%", background: "#FFF", boxShadow: "0px 0px 8px 0px #EEF1F9" }}>
            <CardHeader></CardHeader>
            <CardContent>
              <Grid container spacing={6} sx={{ background: "#FFF" }}>
                <Grid item xs={6} >
                  <Typography sx={{ mb: 8, color: "#141516", fontFamily: "Figtree", fontSize: "32px", fontStyle: "normal", fontWeight: 600, lineHeight: '150%' }}>Verify your account to
                    activate payments.</Typography>
                  <Typography sx={{ color: "#000", fontSize: "18px", fontWeight: "600px" }}>Complete verification
                    <IconButton edge='end' LinkComponent={Link} href='/account-verification' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.5 12H14.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5 9L15.5 12L12.5 15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </IconButton>
                  </Typography>

                </Grid>
                <Grid item xs={6}>
                  <CardIllustration alt='card-illustration' src={`/images/pages/Rectangle 4888.png`} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid spacing={2} container sx={{ mb: 8, background: '#FBFCFF', flexShrink: 0, width: "80%", height: "380px" }}>
        <Grid item xs={6}>
          <SendMoneyIllustration alt='card-illustration' src={`/images/pages/send-money.png`} />
        </Grid>
        <Grid item xs={6}>
          <RequestMoneyIllustration alt='card-illustration' src={`/images/pages/request-money.png`} />
        </Grid>
      </Grid>
      <Typography sx={{ mb: 5, color: "#141516", fontFamily: "Plus Jakarta Sans", fontSize: "18px", fontStyle: "normal", fontWeight: 700, lineHeight: '150%' }}>Past Transactions</Typography>
      <Box sx={{ p: 5, height: "108px", width: "80%", borderRadius: "24px", background: "#FFF", boxShadow: "0px 0px 8px 0px #EEF1F9" }}></Box>
    </>

  )
}

export default Home
