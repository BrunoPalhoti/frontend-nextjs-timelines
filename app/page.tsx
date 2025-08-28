"use client"
import { Box, Typography, Button, useTheme, Container } from '@mui/material';
import { useAuth } from './context/AuthContext';
import Image from 'next/image';

export default function Home() {

  const theme = useTheme();
  const { token } = useAuth();
  return (
    <Container maxWidth="md" sx={{
      minHeight: { xs: '100vh', sm: 'auto' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: { xs: 0, sm: 0 },
    }}>
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: '90vh', sm: '100vh' },
        bgcolor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: { xs: 'center', sm: 'flex-start' },
        pt: { xs: 0, sm: 6 },
        pb: { xs: 4, sm: 0 },
        px: { xs: 2, sm: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          mb: { xs: 2, sm: 2 },
          color: theme.palette.primary.main,
          textShadow: 'none',
          fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
          textAlign: 'center',
        }}
      >
        Bem-vindo à Timeline!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.25rem' },
          color: theme.palette.text.secondary,
          mb: { xs: 2.5, sm: 4 },
          textAlign: 'center',
          maxWidth: 520,
          fontWeight: 600,
        }}
      >
        Aqui você acompanha os posts mais recentes, interage com outros usuários e compartilha novidades.
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: 320, sm: 520 },
          mb: { xs: 3, sm: 4 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/time 1.png"
          alt="Time 1 interagindo na timeline"
          width={520}
          height={340}
          style={{
            width: '100%',
            borderRadius: 22,
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            objectFit: 'cover',
            border: '2px solid #e0e0e0',
          }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mb: { xs: 0, sm: 5 },
          fontWeight: 600,
          fontSize: { xs: '1.1rem', sm: '1.2rem' },
          borderRadius: 2,
          px: { xs: 3, sm: 4 },
          py: { xs: 1.2, sm: 1.4 },
          color: '#fff',
          boxShadow: { xs: '0 2px 8px rgba(0,0,0,0.10)', sm: '0 4px 24px rgba(0,0,0,0.10)' },
        }}
        onClick={() => window.location.href = token ? '/timeline' : '/login'}
      >
        Ir para Timeline
      </Button>
    </Box>
    </Container>
  );
}