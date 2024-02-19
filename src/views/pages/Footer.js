import React from "react";
import { Grid, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <Stack direction="row" sx={{ p: 3 }}>
      <Grid container>
        <Grid item xs={12} md={9} sx={{ mt: 1 }}>
          <>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "10px", color: "#817E7E" }}
            >
              SEBI Registration: NSE & BSE - INZ000175534, DP: IN-DP-252-2016,
              Membership: NSE & BSE, DP of CDSL
              <br />
              Member ID: NSE-14275, BSE-6405, DP ID: 71700, ARN Code: ARN-112087
              <br />
              Disclaimer: ‘Investments in securities market are subject to
              market risks, read all the related documents carefully before
              investing.’
              <br />
              We are only a distributor for Mutual Fund, IPO, Insurance, Bonds &
              Loans. “The securities are quoted as an example and not as a
              recommendation”.{`${currentYear} © Arhamshare Pvt.Ltd.`}
            </Typography>
          </>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          alignItems="end"
          justifyContent="end"
        >
          <Typography
            variant="subtitle2"
            component={Link}
            href="https://www.anvtech.co"
            target="_blank"
            underline="hover"
            sx={{ color: "#817E7E" }}
          >
            Powered By Anv-Tech
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
