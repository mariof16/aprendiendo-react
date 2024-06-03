import { Box } from '@mui/material';
import { NavButton } from '../routes/NavButton';
import { CardLogin,InputMail,LogoLogin, TypographyBienvenido ,TypographyNeoTools,InputPassword, ForgotPassword, LoginButton} from './ComponentesLogin';

export function Login() {
  return (
    <>
      <NavButton text="Home" href="/home" />
      <CardLogin>
        <Box sx={{ padding: "7px" }}>
          <LogoLogin />
          <Box sx={{ marginTop: '20px' }}>
            <TypographyBienvenido/>
            <TypographyNeoTools/>
          </Box>
        </Box>
        <Box sx={{marginTop:"20px"}}>
          <InputMail/>
          <InputPassword/>
        </Box>
        <ForgotPassword/>
        <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
          <LoginButton/>
        </Box>
      </CardLogin>
    </>
  );
}
