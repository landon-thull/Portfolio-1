import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import Particles from "react-tsparticles";

const particlesConfig = {
  background: {
    color: {
      value: "#000",
    },
  },
  particles: {
    color: {
      value: "#F5F9E9",
    },
    links: {
      color: "#78C3FB",
      distance: 100,
      enable: true,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      speed: 0.25,
    },
    size: {
      value: 2,
    },
    number: {
      density: {
        enable: true,
        area: 600,
      },
    },
    shape: {
      type: "circle",
    },
  },
};

export default function HeroPage() {
  const isMobile = useMediaQuery("(max-width:916px)");
  return (
    <Container
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box>
        <Particles id="hero-particles" options={particlesConfig} />
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(0, 0, 0, .75)",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "15px",
          boxShadow: "0 0 10px",
        }}
      >
        <Typography
          variant={isMobile ? "h2" : "h1"}
          component="h1"
          color="#F5F9E9"
        >
          LANDON THULL
        </Typography>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h2"
          color="#F5F9E9"
        >
          Front-End Web Developer
        </Typography>
      </Box>
    </Container>
  );
}
