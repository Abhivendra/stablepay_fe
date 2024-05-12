// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'


const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const Register = () => {

  // ** Hooks
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8),
            backgroundImage: `url(/images/pages/login.png)`,
          }}
        >
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Typography variant='h3' sx={{ mb: 1.5 }}>
              {`Cross Border Payments`}
            </Typography>
            <Typography variant='h5' sx={{ mb: 1.5 }}>
              {`made simple and seamless`}
            </Typography>
          </Box>
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 6 }}>
                <b>Stabl</b>PAY
                {/* {`Welcome to ${themeConfig.templateName}! 👋🏻`} */}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Create your STABL PAY account
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <CustomTextField autoFocus fullWidth sx={{ mb: 3 }} label='Mention your Full Name*' placeholder='' />
              <CustomTextField fullWidth label='Enter Username or Email ID*' sx={{ mb: 3 }} placeholder='' />
              <CustomTextField
                sx={{ mb: 8 }}
                fullWidth
                label='Set Your Password*'
                id='auth-login-v2-password'
                type={'password'}
                InputProps={{
                  // endAdornment: (
                  //   <InputAdornment position='end'>
                  //     <IconButton
                  //       edge='end'
                  //       onMouseDown={e => e.preventDefault()}
                  //       onClick={() => setShowPassword(!showPassword)}
                  //     >
                  //       <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                  //     </IconButton>
                  //   </InputAdornment>
                  // )
                }}
              />
              <Box sx={{ mb: 8, mt: 1.5, '& .MuiFormControlLabel-label': { fontSize: theme.typography.body2.fontSize } }}>
                <Box sx={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', justifyContent: 'start' }}>
                  <Typography sx={{ color: 'text.secondary' }}>By continuing, you agree to our </Typography>
                  <Typography component={LinkStyled} href='/' onClick={e => e.preventDefault()} sx={{ color: 'text.secondary' }}>
                    Terms & Conditions
                  </Typography>
                  <Typography sx={{ ml: 1, mr: 1, color: 'text.secondary' }} >and</Typography>
                  <Typography component={LinkStyled} href='/' onClick={e => e.preventDefault()} sx={{ mr: 1 }}>
                    Privacy Policy.
                  </Typography>
                </Box>
              </Box>
              <Button fullWidth type='submit' variant='outlined' sx={{ mb: 4 }}>
                <Typography>Sign up</Typography>
              </Button>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                or
              </Divider>
              <Button fullWidth type='submit' variant='outlined' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 8 }}>
                <Icon color='green' icon='mdi:google' />
                <Typography sx={{ ml: 2 }}>Sign up with google account</Typography>
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Already an existing member?</Typography>
                <Typography component={LinkStyled} href='/login'>
                  Log in
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
