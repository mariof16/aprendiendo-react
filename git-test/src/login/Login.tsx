import { Box,InputAdornment,IconButton} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavButton } from '../routes/NavButton.tsx';
import { useState } from 'react';
import { CardLogin,InputMail,BoxByNeock ,TypographyBienvenido,TypographyNeoTools,InputPassword, ForgotPassword, LoginButton} from './ComponentesLogin.styles.tsx';

/*Poner la logica del login, mandar los datos del correo y la contraseña en el body, hacer el fetch y guardar la respuesta en el local storage (El access token)*/

export const Login: React.FC = () => {
  
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    try{
      const response = await fetch(import.meta.env.VITE_ENDPOINT_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),
      })
      const data = await response.json();
      localStorage.setItem('accessToken', data.access_token);
    }catch(error){
      console.log("Error", error);
    }
   
  }
  return (
    <>
      <NavButton text="Home" href="/home" />
      <CardLogin>
        <Box sx={{ padding: "7px" }}>
          <Box
             component="img"
             src="../../public/logologin.png"
             sx={{
              width: "20%",
              margin: 'auto',
              display: 'block',
             }
            }
          />
          <Box sx={{ marginTop: '20px' }}>
            <TypographyBienvenido
                variant="h5"
            >
            Bienvenid@
            </TypographyBienvenido>
            <TypographyNeoTools>
              neoTOOLS{' '}
              <BoxByNeock component="span">
                by neoCK
              </BoxByNeock>
            </TypographyNeoTools >
          </Box>
        </Box>
        <Box sx={{marginTop:"20px"}}>
          <InputMail
            variant="outlined"
            label="Email"
            value={user}
            onChange={handleUser}
            placeholder="email@ejemplo.es"
            InputLabelProps={{ shrink: true }}
          />
          <InputPassword
            type="password"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={handlePassword}
            label="Contraseña"
            placeholder="************"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton >
                    <VisibilityIcon sx={{ width: "1.5vw", height: "1.5vw" }}/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <ForgotPassword
          variant="h4"
        >
          ¿Has olvidado tu contraseña?
        </ForgotPassword>
        <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
          <LoginButton 
            size="large"
            color="primary"
            variant="contained"
            onClick={handleLogin}
          > 
            INICIAR SESIÓN
          </LoginButton>
        </Box>
      </CardLogin>
    </>
  );
}
