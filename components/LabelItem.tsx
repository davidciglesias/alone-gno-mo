import { Grid, Stack, Typography } from "@mui/material";

interface Props {
  gridArea?: string;
  label: string;
  children: JSX.Element;
  icon: JSX.Element;
}

export default function LabelItem({ gridArea, label, children, icon }: Props) {
  return (
    <Grid
      item
      gridArea={gridArea}
      direction="column"
      display="flex"
      gap={1}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        gap={1}
        justifyContent="center"
        alignItems="center"
      >
        {icon}
        <Typography variant="h6">{label}</Typography>
      </Stack>
      {children}
    </Grid>
  );
}
