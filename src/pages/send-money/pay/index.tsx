import React from 'react'
import { Avatar, Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import Icon from 'src/@core/components/icon';

const paymentTypes = [
  {
    type: "Wallet",
    data: [
      {
        icon: "tabler:chevron-down",
        title: "mPesa"
      }
    ]
  },
  {
    type: "Cards",
    data: [
      {
        icon: "tabler:chevron-down",
        title: "Debit Card"
      },
      {
        icon: "tabler:chevron-down",
        title: "Credit Card"
      }
    ]
  },
  {
    type: "Net Banking",
    data: [
      {
        icon: "tabler:chevron-down",
        title: "HSBC Bank"
      },
      {
        icon: "tabler:chevron-down",
        title: "CITI Bank"
      }
    ]
  }
]
const PayPage = () => {
  return (
    <Box>
      <Typography sx={{
        color: '#141516',
        fontSize: 32,
        fontWeight: '600',
      }}>Choose your Payment </Typography>
      <Typography sx={{
        mb: 5,
        color: '#141516',
        fontSize: 32,
        fontWeight: '600',
      }}>method</Typography>

      <Box sx={{ p: 8, width: "90%", background: 'white', boxShadow: '0px 0px 8px #EEF1F9' }}>
        <Box>
          {
            paymentTypes.map((paymentType) => (
              <>
                <Typography sx={{
                  mb: 2,
                  mt: 8,
                  color: 'black',
                  fontSize: 24,
                  fontWeight: '600',
                }}>{paymentType.type}</Typography>
                {
                  paymentType.data.map((item, index) => (
                    <Grid flexDirection={'row'} key={index} container>
                      <Grid item xs={2} sx={{ mt: 5, display: 'flex', alignItems: "center", justifyContent: "start" }}>
                        <Avatar alt="Remy Sharp" src={item.icon} />
                      </Grid>
                      <Grid item xs={8} sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "start" }}>
                        <Typography sx={{
                          color: 'black',
                          fontSize: 18,

                          fontWeight: '600',
                        }}>{item.title}</Typography>
                      </Grid>
                      <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
                        <IconButton onClick={() => console.log("chevron-down")}>
                          <Icon icon="tabler:arrow-right" fontSize={18} />
                        </IconButton>
                      </Grid>
                      <Divider sx={{ color: "#E9EBF2 solid", mt: 1, mb: 1 }} />
                    </Grid>
                  ))
                }

              </>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default PayPage;
