import { Box, Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { NavButton } from '../routes/NavButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import colors from '../styles/colors.theme';
import { CardLogin } from './ComponentesLogin';

export function Login() {
  return (
    <>
      <NavButton text="Home" href="/home" />
      <CardLogin>
        <Box sx={{ padding: "7px" }}>
          <Box
            component="img"
            src="../../public/logologin.png"
            alt="User Photo"
            sx={{
              width: 81,
              height: 80,
              mb: 2,
              display: 'block',
              margin: 'auto',
            }}
          />
          <Box sx={{ marginTop: '20px' }}>
            <Typography
              variant="h4"
              style={{
                fontFamily: 'Lato',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '48px',
                letterSpacing: '0.14000000059604645px',
                textAlign: 'center',
                color: colors.text.primary,
              }}
            >
              Bienvenid@ a
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontFamily: 'Lato',
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '48px',
                letterSpacing: '0.14000000059604645px',
                textAlign: 'center',
                color: colors.yellow,
              }}
            >
              neoTOOLS{' '}
              <Box
                component="span"
                style={{
                  fontFamily: 'Lato',
                  fontSize: '26px',
                  fontWeight: 700,
                  lineHeight: '39px',
                  letterSpacing: '0.14000000059604645px',
                  textAlign: 'center',
                  color: colors.grey[500],
                }}
              >
                by neoCK
              </Box>
            </Typography>
          </Box>
        </Box>
        <Box sx={{marginTop:"20px"}}>
          <TextField
            variant="outlined"
            size="medium"
            fullWidth
            label="Email"
            placeholder="email@ejemplo.es"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="outlined"
            size="medium"
            fullWidth
            label="Contraseña"
            placeholder="************"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <VisibilityIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Typography
              variant="h4"
              style={{
                fontFamily: 'Lato',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.14000000059604645px',
                textAlign: 'center',
                textDecoration:"underline",
                marginTop:"30px",
                color: colors.primary.main,
              }}
            >
              ¿Has olvidado tu contraseña?
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
          <Button
            size="large"
            color="primary"
            disabled={false}
            variant="contained"
            startIcon={null}
            endIcon={null}
          >
            INICIAR SESIÓN
          </Button>
        </Box>
      </CardLogin>
    </>
  );
}

