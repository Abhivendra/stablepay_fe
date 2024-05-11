import { Box, Button, Grid, Typography } from '@mui/material';

const AccountIdentifyProof = (props: any) => {
  return (
    <>
      <Box sx={{ pt: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* <Box sx={{ width: "386px" }}> */}
        <svg width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle id="Ellipse 1513" cx="113.5" cy="113.5" r="113.5" fill="#D9D9D9" />
        </svg>
        {/* </Box> */}


      </Box>
      {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}> */}
      <Typography sx={{
        pt: 5,
        color: 'black',
        fontSize: 18,
        fontFamily: 'Figtree',
        fontWeight: '700',
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>You need to submit you business documents as a proof of identity</Typography>
      <Typography sx={{
        p: 2,
        color: 'black',
        fontSize: 18,
        fontFamily: 'Figtree',
        fontWeight: '700',
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>   as a proof of identity</Typography>

      <Grid sx={{ mb: 8, mt: 40, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='outlined' sx={{ color: "#141516", fontWeight: 600, width: '20%' }}>
          Cancel
        </Button>
        <Button onClick={() => props?.setTabIndex(3)} variant='outlined' sx={{ ml: 5, background: "#141516", color: "white", fontWeight: 600, width: '20%', }}>
          Continue
        </Button>
      </Grid>
    </>
  )
}

export default AccountIdentifyProof;
