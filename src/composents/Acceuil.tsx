"use client";

import { Typography, Box, Button, Container } from "@mui/material";
import Image from "next/image";

export const SectionPresentation = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        mt: 10,
        py: 8,
        px: { xs: 2, md: 6 },
        bgcolor: "linear-gradient(135deg, #F5FBFF 0%, #E8F7F8 100%)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        gap: 6,
      }}
    >
      {/* --- Colonne gauche : Texte --- */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
          👋 Bonjour, je suis
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#008080" }}
        >
          SOLOFONDRASERA Charlys
        </Typography>
        <Typography variant="h6" gutterBottom>
          Développeur Web Full Stack Javascript
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 500 }}>
          Étudiant en 4ème année d'Informatique, passionné par le développement
          web avec Javascript. Je conçois des applications modernes, performantes
          et intuitives.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button variant="contained" size="large">
             Me Contacter
          </Button>
          <Button variant="outlined" size="large" color="primary">
            Voir mes projets
          </Button>
        </Box>
      </Box>

      {/* --- Colonne droite : Image --- */}
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <Image
          src="/about_code_section.avif" // ✅ dans public/
          alt="Présentation"
          width={500}
          height={400}
          style={{
            borderRadius: "16px",
            objectFit: "cover",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        />
      </Box>
    </Box>
  );
};
