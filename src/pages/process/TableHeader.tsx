import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const TableHeader = ({ conectWallet, connectedToWallet }: any) => {

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'end',
      }}
    >
      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button onClick={conectWallet} variant='contained' sx={{ '& svg': { mr: 2 } }}>
          {connectedToWallet ? 'Wallet Connected' : 'Connect Wallet'}
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
