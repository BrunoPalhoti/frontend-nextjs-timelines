"use client";
import { Box, Typography } from '@mui/material';
import { useProfilePage } from './hooks/useProfilePage';
import ProfileAvatar from './components/ProfileAvatar';
import ProfileInfo from './components/ProfileInfo';

export default function Profile() {
  const { profile, logout, notLoggedComponent } = useProfilePage();

  if (notLoggedComponent) return notLoggedComponent;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e293b 0%, #00B877 100%)",
        position: "relative",
        overflow: "hidden",
        p: { xs: 1, md: 3 },
      }}
    >
     
      <Box
        sx={{
          position: "absolute",
          top: { xs: 40, md: 80 },
          left: { xs: -60, md: 40 },
          width: { xs: 120, md: 180 },
          height: { xs: 120, md: 180 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00D08455, #1e293b22)",
          zIndex: 0,
          filter: "blur(8px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 60 },
          right: { xs: -40, md: 60 },
          width: { xs: 80, md: 140 },
          height: { xs: 80, md: 140 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00996644, #00B87722)",
          zIndex: 0,
          filter: "blur(10px)",
        }}
      />

      <Box
        sx={{
          width: { xs: "100%", sm: 380, md: 480 },
          maxWidth: "96vw",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 2.5, sm: 4, md: 5 },
          borderRadius: { xs: 5, sm: 8 },
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
          background: "linear-gradient(135deg, #fff 80%, #f0fdf4 100%)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          transition: "box-shadow 0.3s",
        }}
      >
        <ProfileAvatar name={profile.name} avatar={profile.avatar} />
        <ProfileInfo
          name={profile.name}
          email={profile.email}
          profileType={profile.profileType}
          onLogout={logout}
        />
      </Box>
    </Box>
  );
}