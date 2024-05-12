import { Button, Grid } from '@mui/material';
import ActivityTimeline from '../ActivityTimeline';
import { useRouter } from 'next/router'

const AccountPreview = (props: any) => {
  const router = useRouter()

  const finishHandler = () => {
    window.localStorage.setItem("account-verified", 'true');
    router.replace("/home")
  }

  return (
    <>
      <ActivityTimeline />
      <Grid sx={{ mb: 8, mt: 40, display: 'flex', justifyContent: 'flex-end' }}>

        <Button onClick={() => props?.setTabIndex(1)} variant='outlined' sx={{ color: "#141516", fontWeight: 600, width: '20%' }}>
          Cancel
        </Button>
        <Button onClick={finishHandler} variant='outlined' sx={{ ml: 5, background: "#141516", color: "white", fontWeight: 600, width: '20%', }}>
          Finish
        </Button>
      </Grid>
    </>

  )
}

export default AccountPreview;
