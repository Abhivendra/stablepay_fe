// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import CardStatsHorizontalWithDetails from 'src/@core/components/card-statistics/card-stats-horizontal-with-details'
import { CardStatsHorizontalWithDetailsProps } from 'src/@core/components/card-statistics/types'

// ** Custom Table Components Imports
import TableHeader from './TableHeader'
import { Button, List, ListItem } from '@mui/material'
import moment from 'moment';

const UserList = ({ apiData }: any) => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [remittanceTrail, setRemittanceTrail] = useState([{
    time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    message: "1.3 M KES received from customer"
  }])

  const [processData, setProcessData] = useState([
    {
      "id": 1,
      "sender": "Micheal",
      "senderAmount": "1.3M KES",
      "receiver": "Nuryanti",
      "receiverAmount": "160M IDR",
      "status": "INITIATEDFROMCUSTOMER"
    }
  ])

  const handleOnRamp = () => {
    setProcessData((prev: any) => {
      prev[0].status = "ONRAMP";

      return prev;
    });
    setRemittanceTrail((prev: any) => {
      return [...prev, {
        time: moment().format('MMMM Do YYYY, h:mm:ss a'),
        message: "1.3 M KES converted to 10000 USDT"
      }];
    });

    setTimeout(() => {
      setRemittanceTrail((prev: any) => {
        return [...prev, {
          time: moment().format('MMMM Do YYYY, h:mm:ss a'),
          message: "On Ramp partner sent 9950 USDT (deducted 0.45% fee)"
        }];
      });
    }, 5000)

  }
  const handleTransfer = () => {
    setProcessData((prev: any) => {
      prev[0].status = "TRANSFERRED";

      return prev;
    });
    setRemittanceTrail((prev: any) => {

      return [...prev, {
        time: moment().format('MMMM Do YYYY, h:mm:ss a'),
        message: "Transferred  9750 USDT (deducted 2% fee) from Kenya treasury wallet"
      }];
    })
  }
  const handleOffRamp = () => {
    setProcessData((prev: any) => {
      prev[0].status = "DONE";

      return prev;
    });
    setRemittanceTrail((prev: any) => {
      return [...prev, {
        time: moment().format('MMMM Do YYYY, h:mm:ss a'),
        message: "Received 9750 USDT in Indonesia treasury wallet"
      }];
    })
    setTimeout(() => {
      setRemittanceTrail((prev: any) => {
        return [...prev, {
          time: moment().format('MMMM Do YYYY, h:mm:ss a'),
          message: "Transferred 9750 USDT to Off Ramp partner"
        }];
      })
    }, 5000)
    setTimeout(() => {
      setRemittanceTrail((prev: any) => {
        return [...prev, {
          time: moment().format('MMMM Do YYYY, h:mm:ss a'),
          message: "Off Ramp partner transferred 9700 equivalent in IDR to recipient(deducted 0.45% fee)"
        }];
      });
    }, 5000)

  }

  const columns: GridColDef[] = [
    {
      flex: 0.1,
      minWidth: 250,
      field: 'sender',
      headerName: 'Sender',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography
                noWrap
                component={Link}
                href='/apps/user/view/account'
                sx={{
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {row?.sender}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 120,
      headerName: 'Sender Amount',
      field: 'senderAmount',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.senderAmount}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 120,
      headerName: 'Receiver',
      field: 'receiver',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.receiver}
          </Typography>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 190,
      field: 'receiverAmount',
      headerName: 'Receiver Amount',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ color: 'text.secondary' }}>
            {row.receiverAmount}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => {
        if (row?.status == "INITIATEDFROMCUSTOMER") {
          return <Button onClick={handleOnRamp}>On Ramp</Button>
        } else if (row?.status == "ONRAMP") {
          return <Button onClick={handleTransfer}>Tranfer</Button>
        } else if (row?.status == "TRANSFERRED") {
          return <Button onClick={handleOffRamp}>Off Ramp</Button>
        } else if (row?.status == "DONE") {
          return (
            <Typography noWrap sx={{ color: 'text.secondary' }}>
              {"Done"}
            </Typography>
          )
        }

        return (<></>)
      }
    }
  ]

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        {apiData && (
          <Grid container spacing={6}>
            {apiData.statsHorizontalWithDetails.map((item: CardStatsHorizontalWithDetailsProps, index: number) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <CardStatsHorizontalWithDetails {...item} />
                </Grid>
              )
            })}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={processData}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            hideFooterPagination={true}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
          {remittanceTrail?.map((value, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <Typography noWrap sx={{ color: "#141516" }}>
                {`${value?.time} : `}
              </Typography>
              <Typography noWrap sx={{ color: 'text.secondary' }}>
                {` ${value?.message}`}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}

export default UserList
