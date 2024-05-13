import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomTextField from 'src/@core/components/mui/text-field';


const RecipientPage = (props: any) => {

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
      <Box>
        <Typography sx={{
          color: '#141516',
          fontSize: 32,
          fontWeight: '600',
        }}>Enter bank account </Typography>
        <Typography sx={{
          mb: 5,
          color: '#141516',
          fontSize: 32,
          fontWeight: '600',
        }}>details</Typography>

        {/* Form */}
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6} rowGap={3}>
            <Grid item xs={6}>
              <Box sx={{ mb: 8 }}>
                <Controller
                  name='country'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <FormControl fullWidth>
                      <InputLabel id='role-select'>Select Country</InputLabel>
                      <Select
                        fullWidth
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        id='select-role'
                        label='Select Role'
                        labelId='role-select'
                        inputProps={{ placeholder: 'Select Country' }}
                      >
                        <MenuItem value=''>Select Country</MenuItem>
                        <MenuItem value='INDIA'>INDIA</MenuItem>
                        <MenuItem value='AMERICA'>AMERICA</MenuItem>
                        <MenuItem value='US'>US</MenuItem>
                        <MenuItem value='SINGAPORE'>SINGAPORE</MenuItem>
                        <MenuItem value='AFRICA'>AFRICA</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>

            </Grid>
            <Grid item xs={6} >
              <Box sx={{ mb: 8 }}>
                <Controller
                  name='currency'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <FormControl fullWidth>
                      <InputLabel id='role-select'>Select Currency</InputLabel>
                      <Select
                        fullWidth
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        id='select-role'
                        label='Select Role'
                        labelId='role-select'
                        inputProps={{ placeholder: 'Select Currency' }}
                      >
                        <MenuItem value=''>Select Currency</MenuItem>
                        <MenuItem value='INR'>INR</MenuItem>
                        <MenuItem value='USD'>USD</MenuItem>
                        <MenuItem value='AED'>AED</MenuItem>
                        <MenuItem value='SAR'>SAR</MenuItem>
                        <MenuItem value='DINAR'>DINAR</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <Box sx={{ mb: 8 }}>
                <Controller
                  name='noOfBusiness'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label='Name of the Business or Organisation'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='Apple Studio'
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
                      label='Bank Name'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      type='text'
                      placeholder='HSBC, Seattle Branch'
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 8 }}>
                <Controller
                  name='accountNumber'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label='Account Number'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      type='number'
                      placeholder='345678765432345678'
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 8, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => props?.setActiveStep(0)} variant='outlined' sx={{ mb: 4, color: "#141516", fontWeight: 600 }}>
              Back
            </Button>
            <Button onClick={() => props?.setActiveStep(2)} variant='outlined' sx={{ mb: 4, ml: 5, background: "#141516", color: "white", fontWeight: 600 }}>
              Continue
            </Button>
          </Grid>
        </form>
      </Box>

    </>
  )
}

export default RecipientPage;
