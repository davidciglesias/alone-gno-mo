import { Box, Paper } from "@mui/material";

import theme from "config/theme";

interface Props {
  children: JSX.Element;
}

const MAX_WIDTH = 1000;

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
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            maxWidth: MAX_WIDTH,
            margin: "auto",
          }}
        >
          {children}
        </Paper>
      </Box>
    </main>
  );
}
