// ** MUI Imports
import { Button, Checkbox, FormControlLabel } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import CustomTextField from 'src/@core/components/mui/text-field'

const AccountDetails = (props: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { }
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    console.log(data);
  }


  return (
    <>
      {/* Form */}
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='companyName'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='Company Name*'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder=''
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='companyRegNumber'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    value={value}
                    onBlur={onBlur}
                    label='Company Registration Number*'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    type='text'
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Box sx={{ mb: 8 }}>
              <Controller
                name='phoneNumber'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='Phone Number*'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder=''
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='dateOfInc'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    value={value}
                    onBlur={onBlur}
                    label='Date Of Incorporation*'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    type='text'
                  />
                )}
              />
            </Box>
          </Grid>

          {/* Address */}
          <Grid sx={{ mt: 8 }} item xs={6}>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='address1'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='Address Line 1'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder=''
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='country'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    value={value}
                    onBlur={onBlur}
                    label='country*'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    type='text'
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='postalCode'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    value={value}
                    onBlur={onBlur}
                    label='Postal Code*'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    type='text'
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid sx={{ mt: 8 }} item xs={6} >
            <Box sx={{ mb: 8 }}>
              <Controller
                name='address2'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='Address Line 2'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder=''
                  />
                )}
              />
            </Box>
            <Box sx={{ mb: 8 }}>
              <Controller
                name='city'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    value={value}
                    onBlur={onBlur}
                    label='City*'
                    onChange={onChange}
                    id='auth-login-v2-password'
                    type='text'
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mb: 8 }}>
          <FormControlLabel
            label='Please agree to our terms and conditions to continue'
            control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
          />
        </Box>
        <Grid container sx={{ mb: 8, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='outlined' sx={{ mb: 4, color: "#141516", fontWeight: 600 }}>
            Back
          </Button>
          <Button onClick={() => props?.setTabIndex(2)} variant='outlined' sx={{ mb: 4, ml: 5, background: "#141516", color: "white", fontWeight: 600 }}>
            Continue
          </Button>
        </Grid>
      </form>
    </>
  )
}

export default AccountDetails;
