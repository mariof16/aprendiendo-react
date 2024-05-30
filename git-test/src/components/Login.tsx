import { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { NavButton } from '../routes/NavButton';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [correct, setCorrect] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    setError('');
    setCorrect('');

    // Validaciones simples
    if (username === '' || password === '') {
      setError('Por favor, introduce nombre de usuario y contraseña.');
    } else if (username !== 'usuario' || password !== 'contraseña') {
      setError('Nombre de usuario o contraseña incorrectos.');
    } else {
      // Aquí iría la lógica para autenticar al usuario
      setCorrect('Login correcto');
      // Redirigir al usuario a la página de inicio
    }
  };

  return (
    <>
      <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>Login</Typography>
      <NavButton text="Home" href="/home" />
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          label="Nombre de usuario"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Typography variant="body2" color="error" style={{ marginBottom: '10px' }}>{error}</Typography>
        <Typography variant="body2" color="green" style={{ marginBottom: '10px' }}>{correct}</Typography>
        <Button variant="contained" color="primary" type="submit">Iniciar sesión</Button>
      </form>
    </>
  );
}
