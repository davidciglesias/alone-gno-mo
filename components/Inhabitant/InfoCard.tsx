import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import Face3Icon from "@mui/icons-material/Face3";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import { Card, CardContent, Grid, Stack } from "@mui/material";

import Image from "next/image";

import { InhabitantVM } from "api/inhabitants";
import ColorComponent from "components/ColorComponent";
import LabelItem from "components/LabelItem";
import theme from "config/theme";
import loadingImage from "public/alone-gno-mo.png";

interface Props {
  inhabitant: InhabitantVM;
}

export default function InfoCard({ inhabitant }: Props) {
  const { thumbnail, name, age, weight, height, hairColor } = inhabitant;

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent
        sx={{
          "&:last-child": { paddingX: 0, paddingY: 1 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Stack direction="column" gap={1}>
          <LabelItem
            gridArea="full-name"
            label="Full name"
            icon={<BadgeIcon />}
          >
            <div>{name}</div>
          </LabelItem>
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
            gap={1}
            sx={{ paddingX: 1 }}
            gridTemplateAreas={`
							"age		    weight"
							"height	    hair-color"`}
          >
            <LabelItem gridArea="age" label="Age" icon={<CakeIcon />}>
              <div>{age}</div>
            </LabelItem>
            <LabelItem
              gridArea="weight"
              label="Weight (kg)"
              icon={<ScaleIcon />}
            >
              <div>{weight}</div>
            </LabelItem>
            <LabelItem
              gridArea="height"
              label="Height (cm)"
              icon={<HeightIcon />}
            >
              <div>{height}</div>
            </LabelItem>
            <LabelItem
              gridArea="hair-color"
              label="Hair Color"
              icon={<Face3Icon />}
            >
              <ColorComponent textColor={hairColor} />
            </LabelItem>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
