/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useState, ReactNode, MouseEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
// import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

// import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
// import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(8),
  width: '90%',
  [theme.breakpoints.down(1540)]: {
    maxHeight: 630
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 360
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
  color: `black !important`
}))

// const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
//   '& .MuiFormControlLabel-label': {
//     color: theme.palette.text.secondary
//   }
// }))

const schema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  username: 'admin@yopmail.com'
}

interface FormData {
  username: string
  password: string
}

const LoginPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()

  // const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    const { username, password } = data;
    const payload = {
      email: username,
      password,
      rememberMe
    }
    auth.login(payload, () => {
      setError('username', {
        type: 'manual',
        message: 'Username or Password is invalid'
      })
    })
  }

  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

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
          }}
        >
          <LoginIllustration alt='login-illustration' src={`/images/pages/login.png`} />
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
            width: '70%',
          }}
        >
          <Box sx={{ width: '100%', }}>
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
            </svg> */}
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 6 }}>
                <b>STABL</b>  Pay
                {/* {`Welcome to ${themeConfig.templateName}! 👋🏻`} */}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Log in to continue
              </Typography>
            </Box>
            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
                Admin: <strong>admin@vuexy.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: 'primary.main' }}>
                Client: <strong>client@vuexy.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 8 }}>
                <Controller
                  name='username'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label='username*'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder=''
                      error={Boolean(errors.username)}
                      {...(errors.username && { helperText: errors.username.message })}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 8 }}>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label='Password*'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      {...(errors.password && { helperText: errors.password.message })}
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
                  )}
                />
              </Box>
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
                <Typography>Log in</Typography>
              </Button>
              <Typography sx={{ mb: 4, fontWeight: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>or</Typography>
              <Button fullWidth type='submit' variant='outlined' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 8 }}>
                <Icon color='green' icon='mdi:google' />
                <Typography sx={{ ml: 2 }}>Log in with google account</Typography>
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                <Typography href='/register' component={LinkStyled}>
                  Sign up
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginPage.guestGuard = true

export default LoginPage
