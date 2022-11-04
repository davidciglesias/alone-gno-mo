import { Button, Stack, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import PaperLayout from "components/PaperLayout";

export default function Home() {
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
          src="/alone-gno-mo.png"
          alt="App Logo"
          width={256}
          height={256}
        />
        <Typography variant="h1" textAlign="center">
          Welcome to the Brastlewark social network!
        </Typography>
        <Link href="/list">
          <Button variant="contained">Find people</Button>
        </Link>
      </Stack>
    </PaperLayout>
  );
}
