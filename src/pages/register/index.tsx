// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'

// import Divider from '@mui/material/Divider'

// import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// import InputAdornment from '@mui/material/InputAdornment'

// import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
// import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  width: '90%',

  [theme.breakpoints.down(1540)]: {
    maxHeight: 670
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 610
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 190
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 350
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 550
  }
}))

const LinkStyled = styled(Link)(({ }) => ({
  textDecoration: 'none',
  fontWeight: 20,
  color: `black} !important`
}))

// const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
//   marginTop: theme.spacing(1.5),
//   marginBottom: theme.spacing(1.75),
//   '& .MuiFormControlLabel-label': {
//     color: theme.palette.text.secondary
//   }
// }))

const Register = () => {
  // ** States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: '#FFF', boxShadow: '0px 0px 12px 0px #EDF0F6' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            height: '100%',
            width: '90%',

            // backgroundColor: 'customColors.bodyBg',
            // margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <RegisterIllustration
            alt='register-illustration'
            src={`/images/pages/signup.png`}
          />
          {/* <FooterIllustrationsV2 /> */}
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [0, 0],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 450 }}>
            {/* <svg width={34} viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={theme.palette.primary.main}
                d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
              />
              <path
                fill='#161616'
                opacity={0.06}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
              />
              <path
                fill='#161616'
                opacity={0.06}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={theme.palette.primary.main}
                d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
              />
            </svg>*/}
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 6 }}>
                <b>STABL</b>  Pay
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Create your STABLE PAY account</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <CustomTextField autoFocus fullWidth sx={{ mb: 8 }} label='Mention your Full Name*' placeholder='' />
              <CustomTextField fullWidth label='Enter Username or Email ID*' sx={{ mb: 8 }} placeholder='' />
              <CustomTextField
                sx={{ mb: 8 }}
                fullWidth
                label='Set Your Password*'
                id='auth-login-v2-password'
                type={showPassword ? 'text' : 'password'}
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

              {/* <FormControlLabel
                control={<Checkbox />}
                sx={{ mb: 4, mt: 1.5, '& .MuiFormControlLabel-label': { fontSize: theme.typography.body2.fontSize } }}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'text.secondary' }}>I agree to</Typography>
                    <Typography component={LinkStyled} href='/' onClick={e => e.preventDefault()} sx={{ ml: 1 }}>
                      privacy policy & terms
                    </Typography>
                  </Box>
                }
              /> */}
              <Button fullWidth type='submit' variant='outlined' sx={{ mb: 4 }}>
                <Typography>Sign up</Typography>
              </Button>
              <Typography sx={{ mb: 4, fontWeight: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>or</Typography>
              <Button fullWidth type='submit' variant='outlined' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 8 }}>
                {/* <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton> */}
                {/* <IconButton href='/' component={Link} sx={{ color: 'green' }} onClick={e => e.preventDefault()}> */}
                <Icon color='green' icon='mdi:google' />
                {/* </IconButton> */}
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
