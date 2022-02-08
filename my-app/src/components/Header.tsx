import React from "react";
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
    href: "#home",
    id: 1,
  },
  {
    label: "About",
    href: "#about",
    id: 2,
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    id: 3,
  },
  {
    label: "Contact",
    href: "#contact",
    id: 4,
  },
];

export default function Header() {
  const isMobile = useMediaQuery("(max-width:916px)");
  const [isOpen, setIsOpen] = React.useState(false);

  function desktopMapper(props: { label: string; href: string; id: number }) {
    return (
      <Button
        variant="text"
        href={props.href}
        size="large"
        key={props.id}
        sx={{
          color: "#F5F9E9",
          margin: "0 2vw",
          padding: "8px 2vw",
        }}
      >
        {props.label}
      </Button>
    );
  }

  function mobileMapper(props: { label: string; href: string; id: number }) {
    return (
      <Box
        sx={{
          flexDirection: "column",
        }}
      >
        <Button
          href={props.href}
          key={props.id}
          sx={{
            padding: "0.75rem",
            color: "#F5F9E9",
            width: "100%",
          }}
        >
          {props.label}
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
            position="static"
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
            position="static"
            sx={{
              bgcolor: "#0B3854",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              whiteSpace: "nowrap",
            }}
          >
            {displayDesktop()}
            <Box marginRight={2}>
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
