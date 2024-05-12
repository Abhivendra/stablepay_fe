// ** MUI Imports
import { Button, IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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
    display: "flex",
    zIndex: 1,
    width: "100%",
    height: "80%",
    borderRadius: "25px"
  }))

  const RequestMoneyIllustration = styled('img')(({ }) => ({
    display: "flex",
    zIndex: 1,
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
            <CardContent>
              <Grid container spacing={6} sx={{ background: "#FFF" }}>
                <Grid item xs={6}>
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
          <Box sx={{ ml: 20, position: "absolute", top: "125%" }}>
            <Typography sx={{
              color: 'white',
              fontSize: 32,
              fontFamily: 'Figtree',
              fontWeight: '600',
            }}>Send</Typography>
            <Typography sx={{
              color: 'white',
              fontSize: 32,
              fontFamily: 'Figtree',
              fontWeight: '600',
            }}>Money</Typography>
          </Box>
          <Button LinkComponent={Link} href='/send-money' sx={{ ml: 15, position: "absolute", top: "170%", color: 'white' }}>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="vuesax/linear/arrow-left">
                <g id="arrow-left">
                  <path id="Vector" d="M24.5003 44.9168C13.2245 44.9168 4.08366 35.776 4.08366 24.5002C4.08366 13.2243 13.2245 4.0835 24.5003 4.0835C35.7761 4.0835 44.917 13.2243 44.917 24.5002C44.917 35.776 35.7761 44.9168 24.5003 44.9168Z" fill="white" fill-opacity="0.3" />
                  <path id="Vector_2" d="M17.3545 24.5H29.6045" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <g id="Vector_3">
                    <path d="M25.5205 18.375L31.6455 24.5L25.5205 30.625" fill="white" fill-opacity="0.3" />
                    <path d="M25.5205 18.375L31.6455 24.5L25.5205 30.625" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </g>
              </g>
            </svg>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <RequestMoneyIllustration alt='card-illustration' src={`/images/pages/request-money.png`} />
          <Box sx={{ ml: 20, position: "absolute", top: "125%" }}>
            <Typography sx={{
              color: 'white',
              fontSize: 32,
              fontFamily: 'Figtree',
              fontWeight: '600',
            }}>Request</Typography>
            <Typography sx={{
              color: 'white',
              fontSize: 32,
              fontFamily: 'Figtree',
              fontWeight: '600',
            }}>Money</Typography>

            <Box sx={{ p: 3, width: "135px", background: 'rgba(255, 255, 255, 0.60)', borderRadius: 40, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', position: "absolute", top: "210%" }}>
              <Typography sx={{ color: '#141516', fontSize: 18, fontFamily: 'Figtree', fontWeight: '600' }}>Coming Soon</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography sx={{ mb: 5, color: "#141516", fontFamily: "Plus Jakarta Sans", fontSize: "18px", fontStyle: "normal", fontWeight: 700, lineHeight: '150%' }}>Past Transactions</Typography>
      <Box sx={{ p: 5, height: "108px", width: "80%", borderRadius: "24px", background: "#FFF", boxShadow: "0px 0px 8px 0px #EEF1F9" }}></Box>
    </>
  )
}

export default Home
