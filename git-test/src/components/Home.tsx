import {useEffect, useState } from 'react';
import { NavButton } from '../routes/NavButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PokemonData } from '../interfaces/pokemon';



export function Home() {
  const [data, setData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_ENDPOINT_URL)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <>
     <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>Home</Typography>
      <NavButton text="Login" href="/login" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Card sx={{ minWidth: 600, bgcolor: 'gray.100', borderRadius: 2, boxShadow: 6, ml: 2, mr: 2, mt: 2, mb: 2 }}>
          <CardHeader title={data ? data.name : ''} />
          <CardMedia sx={{minHeight:500}} component="img" height="194" src={data ? data.sprites.front_default : ''} alt={data ? data.name : ''} />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {data ? data.types.map((typeInfo, index) => (
                `${typeInfo.type.name}${index < data.types.length - 1 ? `, ${typeInfo.type.name}` : ''}`
              )) : ''}
            </Typography>
            <Typography variant="h6" gutterBottom>
              HP: {data ? data.stats.find(statInfo => statInfo.stat.name === 'hp')?.base_stat : ''}
            </Typography>
            <Typography variant="h6" gutterBottom>
              attack: {data ? data.stats.find(statInfo => statInfo.stat.name === 'attack')?.base_stat : ''}
            </Typography>
            <Typography variant="h6" gutterBottom>
              defense: {data ? data.stats.find(statInfo => statInfo.stat.name === 'defense')?.base_stat : ''}
            </Typography>
            <Typography variant="h6" gutterBottom>
              special-attack: {data ? data.stats.find(statInfo => statInfo.stat.name === 'special-attack')?.base_stat : ''}
            </Typography>
            <Typography variant="h6" gutterBottom>
              special-defense: {data ? data.stats.find(statInfo => statInfo.stat.name === 'special-defense')?.base_stat : ''}
            </Typography>
            <Typography variant="h6" gutterBottom>
              speed: {data ? data.stats.find(statInfo => statInfo.stat.name === 'speed')?.base_stat : ''}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

