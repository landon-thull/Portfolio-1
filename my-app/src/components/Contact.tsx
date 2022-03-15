import { useState } from "react";
import emailjs, { init } from "emailjs-com";
import { Box, Input, Button, Typography, useMediaQuery } from "@mui/material";
import Header from "./Header";
import Particles from "react-tsparticles";

import "../contact.css";

init("AjjZZsi3UM9dVtkDv");

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_udpmfst";
      const templateId = "template_daccss2";
      const userId = "AjjZZsi3UM9dVtkDv";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

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

  const isMobile = useMediaQuery("(max-width:916px)");

  return (
    <div className="content">
      <Header />
      <Particles id="hero-particles" options={particlesConfig} />
      <div id="contact">
        <Box
          marginBottom={isMobile ? "5em" : "7.5em"}
          sx={{
            bgcolor: "rgba(0, 0, 0, .75)",
            textAlign: "center",
            padding: "1rem",
            borderRadius: "15px",
            boxShadow: "0 0 10px",
          }}
        >
          <Typography
            className="title"
            variant={isMobile ? "h4" : "h3"}
            component="h2"
            color="#f5f9e9"
            fontWeight="400"
          >
            Contact Me
          </Typography>
        </Box>
        <Box className="form">
          <Input
            className="input small"
            type="text"
            placeholder=" Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className="input small"
            type="email"
            placeholder=" Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="input"
            minRows={5}
            multiline
            placeholder=" Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Input>
          <Button
            className="submit"
            sx={{
              color: "#f5f9e9",
              marginTop: "25px",
              bgcolor: "rgba(0, 0, 0, .75)",
              borderRadius: "15px",
              boxShadow: "0 0 10px black",
            }}
            onClick={submit}
          >
            {emailSent ? "Sent!" : "SEND MESSAGE"}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
