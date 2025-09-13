'use client';

import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)",
        color: "#000",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        borderBottom: "1px solid #eee",
        py: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* --- Logo --- */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "primary.main", letterSpacing: 1 }}
        >
          Portfolio
        </Typography>

        {/* --- Menu --- */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {[
            { label: "À propos", href: "#apropos" },
            { label: "Compétences", href: "#competences" },
            { label: "Projets", href: "#projets" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                textTransform: "none",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0%",
                  height: "2px",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
