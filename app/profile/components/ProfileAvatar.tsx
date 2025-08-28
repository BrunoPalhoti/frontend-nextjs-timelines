import { Avatar, Box } from '@mui/material';

interface ProfileAvatarProps {
  name: string;
  avatar?: string;
}

export default function ProfileAvatar({ name, avatar }: ProfileAvatarProps) {
  return (
    <Box
      sx={{
        position: "relative",
        mb: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeScaleIn 0.7s cubic-bezier(.4,1.4,.6,1)"
      }}
    >
      {/* Glow externo */}
      <Box
        sx={{
          position: "absolute",
          top: -18,
          left: -18,
          width: 166,
          height: 166,
          borderRadius: "50%",
          background: "radial-gradient(circle, #00D08433 0%, #fff0 80%)",
          zIndex: 0,
          filter: "blur(6px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -8,
          left: -8,
          width: 146,
          height: 146,
          borderRadius: "50%",
          border: "3px solid #00B877",
          boxShadow: "0 0 0 4px #fff",
          background: "linear-gradient(135deg, #00D084, #00B877, #009966, #1e293b)",
          animation: "spin 7s linear infinite",
          zIndex: 1,
          opacity: 0.7,
        }}
      />
      <Avatar
        src={avatar || 'https://via.placeholder.com/150'}
        alt={name}
        sx={{
          width: 130,
          height: 130,
          border: "4px solid #fff",
          zIndex: 2,
          boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
          transition: "box-shadow 0.3s",
        }}
      />
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Box>
  );
}
