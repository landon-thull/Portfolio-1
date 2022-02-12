import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Button,
  Box,
  Container,
  Drawer,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

export default function Header() {
  const isMobile = useMediaQuery("(max-width:916px)");
  const [isOpen, setIsOpen] = React.useState(false);

  function desktopMapper(props: { label: string; path: string }) {
    return (
      <Button
        variant="text"
        size="large"
        key={props.label}
        sx={{
          color: "#F5F9E9",
          margin: "0 2vw",
          padding: "8px 2vw",
        }}
      >
        <Link className="link" to={props.path}>
          {props.label}
        </Link>
      </Button>
    );
  }

  function mobileMapper(props: { label: string; path: string }) {
    return (
      <Box
        key={props.label}
        sx={{
          flexDirection: "column",
        }}
      >
        <Button
          sx={{
            padding: "0.75rem",
            color: "#F5F9E9",
            width: "100%",
          }}
        >
          <Link className="link" to={props.path}>
            {props.label}
          </Link>
        </Button>
      </Box>
    );
  }

  function displayDesktop() {
    return (
      <Toolbar key="toolbar">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "Roboto",
            fontWeight: 600,
            color: "#F5F9E9",
            textAlign: "left",
          }}
        >
          Landon Thull
        </Typography>
      </Toolbar>
    );
  }

  return (
    <header>
      <Box>
        {!isMobile ? (
          <AppBar
            position="absolute"
            sx={{
              bgcolor: "#0B3854",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              whiteSpace: "nowrap",
            }}
          >
            {displayDesktop()}
            {<Box paddingRight={2}>{headerData.map(desktopMapper)}</Box>}
          </AppBar>
        ) : (
          <AppBar
            position="absolute"
            sx={{
              bgcolor: "#0B3854",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              whiteSpace: "nowrap",
            }}
          >
            {displayDesktop()}
            <Box marginRight={0}>
              <Button onClick={() => setIsOpen(true)} size="large">
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#F5F9E9",
                  }}
                  fontSize="large"
                />
              </Button>
            </Box>
            <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
              <Container
                sx={{
                  bgcolor: "#0B3854",
                }}
              >
                {headerData.map(mobileMapper)}
              </Container>
            </Drawer>
          </AppBar>
        )}
      </Box>
    </header>
  );
}
