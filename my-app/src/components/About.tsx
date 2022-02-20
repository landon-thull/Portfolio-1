import { Container, Box } from "@mui/material";

export default function About() {
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
        color: "#F5F9E9",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "50%",
          textAlign: "center",
        }}
      >
        About Me:
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50%",
          textAlign: "center",
        }}
      >
        My Skills:
      </Box>
    </Container>
  );
}
