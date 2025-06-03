import { Box, Container, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction="row" justifyContent="space-between" >
        <Typography variant="h5" component="h1" width={600}>
          <Box component="span" color="primary.main">Tele</Box>medicine
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
