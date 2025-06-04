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
          color="text.secondary"
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{ my: 4 }}
        >
          Empower your well-being with expert guidance, personalized health
          plans, and real-time support—all from the comfort of your home. Take
          control of your health journey today.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          justifyContent: "center",
          display: "flex",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", top: "-30px", left: "200px" }}>
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            
            top: "220px",
            left: "150px",
          }}
        >
             <Image
              src={assets.images.doctor3}
              width={240}
              height={240}
              alt="doctor"
            />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "0px",
            zIndex:-1
          }}
        >
             <Image
              src={assets.images.stethoscope}
              width={180}
              height={180}
              alt="doctor"
            />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
