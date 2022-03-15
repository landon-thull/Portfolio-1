import { Container } from "@mui/material";
import Header from "./Header";

export default function Contact() {
  return (
    <div className="about">
      <Header />
      <Container
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          color: "#F5F9E9",
        }}
      >
        About Page
      </Container>
    </div>
  );
}
