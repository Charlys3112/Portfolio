"use client";

import { Box, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

type Projet = {
  titre: string;
  description: string;
};

const projets: Projet[] = [
  { titre: "Portfolio", description: "Site perso développé avec Next.js + MUI." },
  { titre: "E-commerce", description: "Application de vente en ligne avec paiement intégré." },
  { titre: "Dashboard", description: "Tableau de bord interactif avec graphiques." },

          
  
];

export const SectionProjets = () => {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: "grey.100" }} id="projets">
      <Container>
        {/* --- Titre --- */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{ mb: 4 }}
        >
          🚀 Mes Projets
        </Typography>

        {/* --- Liste des projets --- */}
        <Stack
          direction={{ xs: "row", }}
          
          sx={{ justifyContent: "center", flexWrap: "wrap" , gap:3,      
    mt:3,}}
        >
          {projets.map((projet, index) => (
            <motion.div
              key={projet.titre}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.3  }}
              style={{ flex: "0 0 auto " }}
            >
              <Card
                sx={{
                  flex: 1,
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    color="primary"
                  >
                    {projet.titre}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {projet.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
