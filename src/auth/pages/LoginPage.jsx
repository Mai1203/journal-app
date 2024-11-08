import { Link, Link  as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { AuhtLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
  return (
    <AuhtLayout title="Login">
      <form>
        <Grid2 container spacing={2}>
          <Grid2 size={12} sx={{mt:2}}>
            <TextField 
              label="Email"
              type='email'
              autoComplete='curret-password'
              placeholder='correo@ejemplo.com'
              fullWidth
            />
          </Grid2>
          <Grid2 size={12} sx={{mt:2}}>
            <TextField 
              label="Password"
              type='password'
              autoComplete='curret-password'
              placeholder='contraseña'
              fullWidth
            />
          </Grid2>

          
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button variant='contained' fullWidth>
              Login
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button variant='contained' fullWidth>
              <Google />
              <Typography sx={{ ml:1}}>Google</Typography>
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear nueva cuenta
          </Link>
        </Grid2>
      </form>
    </AuhtLayout>
  )
}
