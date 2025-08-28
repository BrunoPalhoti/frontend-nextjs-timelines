import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { Profile } from "../type/Profile";
import { AnimatedBorder, containerSx, avatarSx, buttonSx } from "../styles/timelineHeaderStyles";
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from "@mui/material";

export function TimelineHeader({ profile }: { profile: Profile }) {
  const router = useRouter();
  return (
  <Box sx={{ width: '100%', maxWidth: 900, px: 4, mb: 3 }}>
    <Box sx={containerSx} width="100%">
      <Box sx={{ position: "relative", display: "inline-flex", mr: { sm: 3 }, mb: { xs: 1.5, sm: 0 }, alignSelf: { xs: "center", sm: "auto" } }}>
        <Avatar src={profile.avatar} alt={profile.name} sx={avatarSx} />
        <AnimatedBorder />
      </Box>
      <Box
        flex={1}
        minWidth={0}
        sx={{ mr: { sm: 3 }, textAlign: { xs: "center", sm: "left" }, color: "#fff", mb: { xs: 1.5, sm: 0 } }}
      >
        <Typography variant="h6" fontWeight={700}>
          {profile.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', sm: 'flex-start' }, mb: { xs: 0.5, sm: 0 } }}>
          <EmailIcon sx={{ fontSize: 20, opacity: 0.75 }} />
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            {profile.email}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <AccountCircleIcon sx={{ fontSize: 20, opacity: 0.75 }} />
          <Typography variant="body2" sx={{ opacity: 0.75 }}>
            {profile.profileType}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: { xs: 1, sm: 0 } }}>
        <Button variant="contained" sx={buttonSx} onClick={() => router.push("/profile")}>Editar perfil</Button>
      </Box>
    </Box>
  </Box>
  );
}
