"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Cards = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "#D3D3D3",
        padding: { xs: "50px 20px", md: "70px 80px" },
        textAlign: "center",
        backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "0px",
      }}
      >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: "teal", 
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
                borderRadius: "8px",
                color: "black",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100px",
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WK9T-KpypoHLFzRC8t_7arDoeP7kydsgQA&s')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#257860", marginBottom: "16px" , fontWeight: "bold"}}
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
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100px", 
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WK9T-KpypoHLFzRC8t_7arDoeP7kydsgQA&s')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#257860", marginBottom: "16px", fontWeight: "bold" }}
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
                borderRadius: "8px",
                padding: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "150px",
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WK9T-KpypoHLFzRC8t_7arDoeP7kydsgQA&s')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#257860", marginBottom: "16px",  fontWeight: "bold" }}
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