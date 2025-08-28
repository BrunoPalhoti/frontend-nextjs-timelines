import { Typography, Button, Box } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useLogoutRedirect } from '../hooks/useLogoutRedirect';

interface ProfileInfoProps {
  name: string;
  email: string;
  profileType: string;
  onLogout: () => void;
}

export default function ProfileInfo({ name, email, profileType, onLogout }: ProfileInfoProps) {
  const handleLogout = useLogoutRedirect(onLogout);
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", animation: "fadeScaleIn 0.7s cubic-bezier(.4,1.4,.6,1)" }}>
   
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
          color: "#00B877",
          mb: 1,
          textAlign: "center",
          letterSpacing: 1,
          fontSize: { xs: 28, sm: 32, md: 36 },
        }}
      >
        {name}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.2 }}>
        <EmailOutlinedIcon sx={{ color: '#64748b', fontSize: 18, mr: 0.7 }} />
        <Typography
          variant="body2"
          sx={{
            color: "#64748b",
            textAlign: "center",
            fontSize: { xs: 15, sm: 16 },
            fontWeight: 400,
            textDecoration: "none",
          }}
          component="a"
          href={`mailto:${email}`}
        >
          {email}
        </Typography>
      </Box>
 
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            px: 2.5,
            py: 0.7,
            borderRadius: 999,
            bgcolor: "#e0f2fe",
            color: "#0284c7",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textTransform: "uppercase",
            border: "1px solid #bae6fd",
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <PersonOutlineIcon sx={{ fontSize: 18, color: '#0284c7', mr: 0.7 }} />
          {profileType}
        </Box>
      </Box>
      {/* Botão Sair moderno */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          fontWeight: 700,
          borderRadius: 999,
          px: 6,
          py: 1.5,
          fontSize: 18,
          boxShadow: "0 2px 12px rgba(255,77,77,0.10)",
          bgcolor: "#ff4d4d",
          color: "#fff",
          transition: "all 0.25s cubic-bezier(.4,1.4,.6,1)",
          '&:hover': {
            bgcolor: "#d32f2f",
            color: "#fff",
            transform: "scale(1.06)",
            boxShadow: "0 6px 24px rgba(255,77,77,0.18)",
          },
        }}
        onClick={handleLogout}
        disableElevation
      >
        Sair
      </Button>
      <style jsx global>{`
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Box>
  );
}
