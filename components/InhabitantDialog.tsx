import {
  Card,
  CardContent,
  Dialog,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import Image from "next/image";

import { InhabitantVM } from "api/inhabitants";
import loadingImage from "public/alone-gno-mo.png";

interface Props {
  inhabitant: InhabitantVM;
  onDialogClose: () => void;
}

function LabelItem({ gridArea, label, children }: any) {
  return (
    <Grid item gridArea={gridArea} direction="column">
      <Typography variant="h6">{label}</Typography>
      {children}
    </Grid>
  );
}

export default function InhabitantDialog({ onDialogClose, inhabitant }: Props) {
  const {
    thumbnail,
    name,
    age,
    weight,
    height,
    hairColor,
    professions,
    friends,
  } = inhabitant;
  return (
    <Dialog
      open={true}
      onClose={onDialogClose}
      sx={{ "& .MuiPaper-root": { borderRadius: "20px" } }}
    >
      <Card sx={{ width: "100%" }}>
        <CardContent sx={{ padding: 0 }}>
          <Stack direction="column" gap={2}>
            <Image
              src={thumbnail}
              blurDataURL={loadingImage.blurDataURL}
              alt={name}
              placeholder="blur"
              height={256}
              width={512}
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
            <Grid
              container
              display="grid"
              justifyContent="stretch"
              justifyItems="center"
              textAlign="center"
              alignItems="center"
              gap={2}
              sx={{ padding: 2 }}
              gridTemplateAreas={`
							"full-name    full-name"
							"age		    weight"
							"height	    hair-color"`}
            >
              <LabelItem gridArea="full-name" label="Full name">
                {name}
              </LabelItem>
              <LabelItem gridArea="age" label="Age">
                {age}
              </LabelItem>
              <LabelItem gridArea="weight" label="Weight">
                {weight}
              </LabelItem>
              <LabelItem gridArea="height" label="Height">
                {height}
              </LabelItem>
              <LabelItem gridArea="hair-color" label="Hair Color">
                {hairColor}
              </LabelItem>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Dialog>
  );
}
