import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import Face3Icon from "@mui/icons-material/Face3";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import { Card, CardContent, Grid, Stack } from "@mui/material";

import Image from "next/image";

import { InhabitantVM } from "api/inhabitants";
import loadingImage from "public/alone-gno-mo.png";

import ColorComponent from "./ColorComponent";
import LabelItem from "./LabelItem";

interface Props {
  inhabitant: InhabitantVM;
}

export default function InhabitantInfoCard({ inhabitant }: Props) {
  const { thumbnail, name, age, weight, height, hairColor } = inhabitant;

  return (
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
            <LabelItem
              gridArea="full-name"
              label="Full name"
              icon={<BadgeIcon />}
            >
              <div>{name}</div>
            </LabelItem>
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
