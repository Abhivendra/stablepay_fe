import { Box, Button, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Icon from 'src/@core/components/icon';

const AmountPage = (props: any) => {
  const {
    formState: { }
  } = useForm({
    mode: 'onBlur',
  })


  return (
    <Box>
      <Typography sx={{
        color: '#141516',
        fontSize: 32,
        fontFamily: 'Figtree',
        fontWeight: '600',
      }}>Enter amount to be </Typography>
      <Typography sx={{
        mb: 5,
        color: '#141516',
        fontSize: 32,
        fontFamily: 'Figtree',
        fontWeight: '600',
      }}>sent</Typography>

      <Card sx={{ mb: 8, width: "80%" }}>
        <CardContent>
          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Figtree',
                fontWeight: '600',

              }}>You Send</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 24,
                fontFamily: 'Figtree',
                fontWeight: '700',
              }}>100</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                ml: 2,
                color: 'black',
                fontSize: 16,
                fontFamily: 'Figtree',
                fontWeight: '600',
              }}>SGD</Typography>
              <IconButton onClick={() => console.log("chevron-down")}>
                <Icon icon='tabler:chevron-down' fontSize={20} />
              </IconButton>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 8, width: "80%" }}>
        <CardContent>
          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{}}>
              <Typography sx={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Figtree',
                fontWeight: '600',

              }}>Amount Deducted</Typography>
              <Typography sx={{
                color: '#537CE7',
                fontSize: 14,
                fontFamily: 'Figtree',
                fontWeight: '600',

              }}>View Full Breakup</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 24,
                fontFamily: 'Figtree',
                fontWeight: '700',
              }}>10</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Figtree',
                fontWeight: '600',
              }}>SGD</Typography>
              <IconButton />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 8, width: "80%" }}>
        <CardContent>
          <Grid flexDirection={'row'} container>
            <Grid item xs={8} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
              <Typography sx={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Figtree',
                fontWeight: '600',

              }}>Recipient Gets</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 24,
                fontFamily: 'Figtree',
                fontWeight: '700',
              }}>90</Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
              <Typography sx={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Figtree',
                fontWeight: '600',
              }}>SGD</Typography>
              <IconButton onClick={() => console.log("chevron-down")}>
                <Icon icon='tabler:chevron-down' fontSize={20} />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container sx={{ mt: 30, width: "80%", display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => props?.setActiveStep(1)} variant='outlined' sx={{ mb: 4, color: "#141516", fontWeight: 600 }}>
          Back
        </Button>
        <Button onClick={() => props?.setActiveStep(3)} variant='outlined' sx={{ mb: 4, ml: 5, background: "#141516", color: "white", fontWeight: 600 }}>
          Continue
        </Button>
      </Grid>

    </Box>
  )
}

export default AmountPage;
