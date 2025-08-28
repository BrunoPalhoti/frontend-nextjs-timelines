import Box from "@mui/material/Box";
import React from "react";

export const containerSx = {
  width: "100%",
  maxWidth: 900,
  borderRadius: 4,
  px: { xs: 1, sm: 3 },
  pt: { xs: 2, sm: 2 },
  pb: { xs: 2, sm: 2 },
  mt: { xs: 2, sm: 2 },
  mb: { xs: 2, sm: 2 },
  display: "flex",
  alignItems: { xs: "stretch", sm: "center" },
  flexDirection: { xs: "column", sm: "row" },
  background: "linear-gradient(135deg, #00D084 0%, #00B877 100%)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
  position: "relative",
  overflow: "hidden",
};

export const avatarSx = {
  width: { xs: 70, sm: 95 },
  height: { xs: 70, sm: 95 },
  border: "4px solid #fff",
  zIndex: 1,
  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
};

export const borderSx = {
  position: "absolute",
  top: -4,
  left: -4,
  width: "103%",
  height: "103%",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #00D084, #00B877, #009966)",
  animation: "spin 6s linear infinite",
  zIndex: 0,
  opacity: 0.6,
};

export const buttonSx = {
  bgcolor: "#fff",
  color: "#00B877",
  fontWeight: 600,
  borderRadius: 3,
  px: 3.5,
  py: 1.2,
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    bgcolor: "#f0fff8",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  },
};

export function AnimatedBorder() {
  return React.createElement(Box, { sx: borderSx });
}
