import { Button, Stack, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import PaperLayout from "components/PaperLayout";

export default function Custom404() {
  return (
    <PaperLayout>
      <Stack
        gap={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Image
          src="/alone-gno-mo-404.png"
          alt="App Logo"
          width={256}
          height={256}
        />
        <Typography variant="h1" textAlign="center">
          It seems that you are lost, my dear sapling!
        </Typography>
        <Link href="/">
          <Button variant="contained" color="info">
            Bring me back home!
          </Button>
        </Link>
      </Stack>
    </PaperLayout>
  );
}
