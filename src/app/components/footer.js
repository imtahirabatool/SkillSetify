"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{ mt: 4, textAlign: "center", py: 3 ,marginTop:"-50px",
          backgroundSize: "cover",
          backgroundColor: "#008080",
          backgroundPosition: "center",
      }}
    >
      <Typography variant="body2" sx={{ color: "white" }}>
        &copy; {new Date().getFullYear()} SkillSetify. All rights are reserved.
      </Typography>
    </Box>
  );
}
