import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)">
      <Container>
        <Stack direction="row" gap={4} justifyContent="center" py={4}>
          <Typography color="white" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="white" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="white" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="white" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="white" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={instagramIcon} alt="instagram" width={30} height={30} />
          <Image src={twitterIcon} alt="twitter" width={30} height={30} />
          <Image src={linkedinIcon} alt="linkedin" width={30} height={30} />
        </Stack>

        <div className="border-b border-dashed border-white mt-4"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
          color="white"
        >
          <Typography component="p" color="white">
            &copy; {new Date().getFullYear()} Tele-Medicine. All rights
            reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            <Box component="span" color="primary.main">
              Tele
            </Box>
            {"-"}
            Medicine
          </Typography>
           <Typography component="p" color="white">
            privacy & policy! {" "} terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
