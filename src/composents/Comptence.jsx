"use client";

import { Box, Typography, Grid, Card, CardContent, Chip, Stack } from "@mui/material";
import { Code, Storage, GitHub, Build } from "@mui/icons-material";

const skills = [
  {
    category: "Développement Backend",
    icon: <Code sx={{ fontSize: 40, color: "#1976d2" }} />,
    items: ["Node.js", "Express", "NestJS", "PHP/Laravel"],
  },
  {
    category: "Développement Frontend",
    icon: <Code sx={{ fontSize: 40, color: "#2e7d32" }} />,
    items: ["Vue.js", "Quasar", "Next.js (React)", "Material UI (MUI)"],
  },
  {
    category: "Bases de données",
    icon: <Storage sx={{ fontSize: 40, color: "#f57c00" }} />,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Gestion de versions",
    icon: <GitHub sx={{ fontSize: 40, color: "#000" }} />,
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    category: "Outils",
    icon: <Build sx={{ fontSize: 40, color: "#9c27b0" }} />,
    items: ["VS Code", "Postman"],
  },
];

export const Competence = () => {
  return (
    <Box sx={{ py: 8, px: 2,  bgcolor: "grey.50"  }} id="competences">
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
         Compétences
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                {skill.icon}
                <Typography variant="h6" sx={{ mt: 1, mb: 2, fontWeight: "bold" }}>
                  {skill.category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
                  {skill.items.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      variant="outlined"
                      sx={{ borderRadius: "8px" }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
