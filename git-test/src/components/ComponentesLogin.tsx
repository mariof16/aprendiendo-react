import { Card, Box,Typography,TextField,InputAdornment,IconButton,Button} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import colors from "../styles/colors.theme"
import React from "react";

export const CardLogin = ({ children }: { children: React.ReactNode }) => {
    return (
        <Card sx={{
            width: "35%",
            margin: "auto",
            padding: "2rem",
            backgroundColor: colors.background.default,
        }}>
             {children}
        </Card>
    );
};

export const LogoLogin = () => (
    <Box
        component="img"
        src="../../public/logologin.png"
        alt="User Photo"
        sx={{
          width: "20%",
          height: "20%",
          mb: "2vw",
          display: 'block',
          margin: 'auto',
        }}
    />
);

export const TypographyBienvenido = () => (
    <Typography
        variant="h4"
        style={{
            fontFamily: 'Lato',
            fontSize: '2.8vw',
            fontWeight: 400,
            lineHeight: '4.8vw',
            letterSpacing: '0.14000000059604645vw',
            textAlign: 'center',
            color: colors.text.primary,
        }}
    >
        Bienvenid@ a
    </Typography>
)

export const TypographyNeoTools = () => (
    <Typography
              variant="h4"
              style={{
                fontFamily: 'Lato',
                fontSize: '2.8vw',
                fontWeight: 700,
                lineHeight: '1vw',
                letterSpacing: '0.14000000059604645px',
                textAlign: 'center',
                color: colors.yellow,
              }}
            >
              neoTOOLS{' '}
              <BoxByNeock />
    </Typography>
)

const BoxByNeock = () => (
    <Box
      component="span"
      style={{
        fontFamily: 'Lato',
        fontSize: '2vw',
        fontWeight: 700,
        lineHeight: '39%',
        letterSpacing: '0.14000000059604645%',
        textAlign: 'center',
        color: colors.grey[500],
      }}
    >
      by neoCK
    </Box>
  )
export const InputMail = () => (
    <TextField
      sx={{
        mt:"2vh",
        mb: "5vh",
        width: "34.3vw",
        height: "8vh", 
        "& .MuiInputBase-input": {
          fontSize: "1.5vw"
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Arial", // Cambia la fuente del label
          fontSize: "1.2vw" // Cambia el tamaño de la fuente del label
        }
      }}
      variant="outlined"
      label="Email"
      placeholder="email@ejemplo.es"
      InputLabelProps={{ shrink: true }}
    />
  );
  
  export const InputPassword = () => (
    <TextField
      type="password"
      variant="outlined"
      size="medium"
      fullWidth
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
      sx={{
        mb: "5vh",
        width: "34.3vw",
        height: "8vh",
        "& .MuiInputBase-input": {
          fontSize: "1.5vw"
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Arial",
          fontSize: "1.2vw"
        }
      }}
    />
  );  

export const ForgotPassword = () => (
    <Typography
        variant="h4"
        sx={{
        fontFamily: 'Lato',
        fontSize: '1.3vw', // Escala el tamaño de la fuente
        fontWeight: 400,
        lineHeight: '2vw', // Escala la altura de línea
        letterSpacing: '0.14000000059604645px',
        textAlign: 'center',
        textDecoration: "underline",
        marginTop: "3vh", // Escala el margen superior
        color: colors.primary.main,
        }}
    >
        ¿Has olvidado tu contraseña?
  </Typography>
)

export const LoginButton = () => (
    <Button
      size="large"
      color="primary"
      variant="contained"
      sx={{
        width: "15vw", // Ajusta el ancho del botón
        height: "8vh", // Ajusta la altura del botón
        fontSize: "1vw", // Ajusta el tamaño de la fuente del botón
        marginTop: "3vh" // Ajusta el margen superior del botón
      }}
    >
      INICIAR SESIÓN
    </Button>
  );