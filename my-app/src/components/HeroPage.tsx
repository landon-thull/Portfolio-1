import React from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";

const headerData = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

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
      color: "#0B3854",
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

  function mapper(props: { label: string; path: string }) {
    return (
      <Button
        variant="text"
        size="large"
        key={props.label}
        sx={{
          color: "#F5F9E9",
          padding: "0.25em 2.5em",
        }}
      >
        <Link className="link" to={props.path}>
          {props.label}
        </Link>
      </Button>
    );
  }

  return (
    <Container
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Particles id="hero-particles" options={particlesConfig} />
      </Box>
      <Box
        position={isMobile ? "relative" : "absolute"}
        sx={{
          bgcolor: "rgba(0, 0, 0, .75)",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "15px",
          boxShadow: "0 0 10px",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          color="#F5F9E9"
          sx={{
            fontWeight: "800",
          }}
        >
          LANDON THULL
        </Typography>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          component="h2"
          color="#F5F9E9"
          sx={{
            fontWeight: "100",
          }}
        >
          Front-End Web Developer
        </Typography>
      </Box>
      <Box
        className="hero-header"
        marginTop={isMobile ? "5em" : "30em"}
        flexDirection={isMobile ? "column" : "row"}
        sx={{
          bgcolor: "rgba(0, 0, 0, .75)",
          display: "flex",
          borderRadius: "15px",
          boxShadow: "0 0 10px",
        }}
      >
        {headerData.map(mapper)}
      </Box>
    </Container>
  );
}
