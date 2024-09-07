"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Cards = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#D3D3D3",
        padding: { xs: "50px 20px", md: "70px 80px" },
        textAlign: "center",
        backgroundSize: "cover",
          backgroundColor: "#257860",
          backgroundPosition: "center",
          margin: "0px",
      }}
      >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: "white", 
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "2.5rem" },
            marginBottom: "40px",
          }}
        >
          Features
        </Typography>

        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#caebe1", // Dark card background
                borderRadius: "8px",
                color: "black",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100px", // Ensures all cards have the same minimum height
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#257860", marginBottom: "16px" }}
              >
                Easy Resume Input
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", lineHeight: 1.6 }}
              >
                Quickly generate a professional resume by simply entering your career details. 
                AI handles the formatting and design for you.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#caebe1", // Dark card background
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100px", // Ensures all cards have the same minimum height
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#257860", marginBottom: "16px" }}
              >
                Smart Resume Suggestions
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", lineHeight: 1.6 }}
              >
                Get AI-powered recommendations for optimizing your resume with keywords, 
                skill sets, and career highlights to stand out in the job market.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#caebe1", // Dark card background
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "150px", // Ensures all cards have the same minimum height
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#257860", marginBottom: "16px" }}
              >
                Resume Generated in Minutes
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", lineHeight: 1.6 }}
              >
                Create a professional, tailored resume within minutes. Focus on your job hunt 
                with minimal effort on design and formatting.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cards;