import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Specialist = async () => {
  const res = await fetch("http://localhost:3000/api/v1/specialties",{
    next: {revalidate:30}
  })
  const specialties = await res.json();
  console.log(specialties);
  
  return (
    <Container sx={{ margin: "40px 0px", textAlign: "center" }}>
      <Box>
        <Box textAlign="start">
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment Across Specialties
          </Typography>
          <Typography color="primary.secondary" component="p" fontWeight={300} fontSize={18}>
            
            Experience Doctor Across All Specialties
          </Typography>
        </Box>
      </Box>
    </Container>
   
  );
};

export default Specialist;
