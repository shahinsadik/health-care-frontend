import { Box, Button, Container, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-100px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comes From
        </Typography>
        <Typography
          color="primary.main"
          variant="h3"
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{ width: "50%" }}
        >
          Empower your well-being with expert guidance, personalized health
          plans, and real-time support—all from the comfort of your home. Take
          control of your health journey today.
        </Typography>
        <Button>Make Appointment</Button>
        <Button variant="outlined" sx={{ marginLeft: "5px" }}>
          Contact Us
        </Button>
      </Box>
      <Box>Right</Box>
    </Container>
  );
};

export default HeroSection;
