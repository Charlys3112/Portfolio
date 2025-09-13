"use client";

import { Box, Typography, Grid, Stack } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export const SectionContact = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        px: 3,
        bgcolor: "#1e1e2f", // fond sombre
        bgcolor: "#E7E8E9", 
      }}
      id="contact"
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 6 }}
      >
        📩 Contact
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        {/* --- Email --- */}
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Email sx={{ fontSize: 40, color: "primary.main" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Email
              </Typography>
              <Typography color="text.secondary">
                solofondraseracharlys31@gmail.com
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* --- Téléphones --- */}
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Phone sx={{ fontSize: 40, color: "success.main" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Téléphone
              </Typography>
              <Typography color="text.secondary">+261 34 83 231 37</Typography>
              <Typography color="text.secondary">+261 33 35 535 59</Typography>
            </Box>
          </Stack>
        </Grid>

        {/* --- Localisation --- */}
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <LocationOn sx={{ fontSize: 40, color: "error.main" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Localisation
              </Typography>
              <Typography color="text.secondary">
                Andrainjato Fianarantsoa, Madagascar
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 6,  }}>
        &copy; {new Date().getFullYear()} SOLOFONDRASERA Charlys. Tous droits réservés.
      </Typography>
    </Box>
  );
};
