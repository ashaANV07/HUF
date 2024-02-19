import React from "react";
import { Box, Grid, Tooltip } from "@mui/material";
import arhamLogo from "../../assets/img/arham_logo.png";
import contact from "../../assets/img/contact.png";
import person from "../../assets/img/person.png";
import logout from "../../assets/img/logout.png";

const Header = () => {
  return (
    <Grid
      container
      sx={{ mb: 2, pt: 2 }}
      display="flex"
      justifyContent="center"
    >
      <Grid
        item
        xs={11}
        md={10}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          component="img"
          alt=""
          sx={{
            height: 25,
          }}
          src={person}
        />
        <Box
          component="img"
          height={{ xs: 25, md: 35 }}
          width={{ xs: 170, md: 250 }}
          alt=""
          src={arhamLogo}
        />
        <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }}>
          <Tooltip title="Add">
            <Box
              sx={{
                height: 27,
                mt: -0.5,
              }}
              component="img"
              alt=""
              src={contact}
            />
          </Tooltip>
          <Box
            sx={{
              height: 29,
            }}
            component="img"
            src={logout}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
