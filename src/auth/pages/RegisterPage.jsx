import { Link, Link  as RouterLink } from 'react-router-dom';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { AuhtLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuhtLayout title="Registro - Crear Cuenta">
      <form>
        <Grid2 container spacing={2}>
          <Grid2 size={12} sx={{mt:2}}>
            <TextField 
              label="Nombre Completo"
              type='text'
              autoComplete='off'
              placeholder='Digita tu nombre completo'
              fullWidth
            />
          </Grid2>
          <Grid2 size={12} sx={{mt:2}}>
            <TextField 
              label="Email"
              type='email'
              autoComplete='off'
              placeholder='correo@ejemplo.com'
              fullWidth
            />
          </Grid2>
          <Grid2 size={12} sx={{mt:2}}>
            <TextField 
              label="Password"
              type='password'
              autoComplete='off'
              placeholder='contraseña'
              fullWidth
            />
          </Grid2>


          <Grid2 size={{ xs: 12 }}>
            <Button variant='contained' fullWidth>
              Crear Cuenta
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent='end'>
          <Typography sx={{ ml:1}}>¿Ya tienes una cuenta? </Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Ingresar
          </Link>
        </Grid2>
      </form>
    </AuhtLayout>
  )
}
