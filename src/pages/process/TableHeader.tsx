import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const TableHeader = () => {

  const [connectedToWallet, setConnectedToWallet] = useState<boolean>(false);
  const [defaultAccount, setDefaultAccount] = useState<string>('');

  console.log(defaultAccount);

  useEffect(() => {
    const adminWallet = window.localStorage.getItem('admin-wallet');

    if (adminWallet) {
      setDefaultAccount(adminWallet);
      setConnectedToWallet(true);
    }
  }, []);

  const accountChangeHandler = (newAccount: string) => {
    setDefaultAccount(newAccount);
    setConnectedToWallet(true);
    window.localStorage.setItem("admin-wallet", newAccount);
  }


  const conectWallet = () => {
    if (connectedToWallet) {
      return;
    }
    const initializeProvider = async () => {
      if ((window as any).ethereum) {
        (window as any).ethereum.request({ method: 'eth_requestAccounts' }).then((result: any) => {
          accountChangeHandler(result[0]);
        })
      } else {
        console.log("Please install a wallet...");
      }
    };
    initializeProvider();
  }

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
