// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAuth } from 'src/hooks/useAuth'

// ** Configs

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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@yopmail.com'
}

interface FormData {
  email: string
  password: string
}

const LoginPage = () => {

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

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
    const { email, password } = data
    const rememberMe = true;
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

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
            backgroundImage: `url(/images/pages/login.png)`,
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          {/* <LoginIllustration alt='login-illustration' src={`/images/pages/login.png`} /> */}
          {/* <FooterIllustrationsV2 /> */}
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
                Log in to continue
              </Typography>
            </Box>

            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 3 }}>
                <Controller
                  name='email'
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
                      error={Boolean(errors.email)}
                      {...(errors.email && { helperText: errors.email.message })}
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
                      type='password'
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
