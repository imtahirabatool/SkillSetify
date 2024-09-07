"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #333", py: 3 }}
    >
      <Typography variant="body2" sx={{ color: "#A9A9A9" }}>
        &copy; {new Date().getFullYear()} Skillsetify. All rights are reserved.
      </Typography>
    </Box>
  );
}
