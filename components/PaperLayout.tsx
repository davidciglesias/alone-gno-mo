import { Box, Paper } from "@mui/material";

import theme from "config/theme";

interface Props {
  children: JSX.Element;
}

export default function PaperLayout({ children }: Props) {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexShrink: 0,
          padding: { md: "5rem", xs: "1rem" },
          height: "100%",
          width: "100%",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Paper
          elevation={2}
          sx={{ width: "100%", height: "100%", borderRadius: "1rem" }}
        >
          {children}
        </Paper>
      </Box>
    </main>
  );
}
