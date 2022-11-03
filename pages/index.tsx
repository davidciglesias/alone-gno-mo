import { Button, Stack, Typography } from "@mui/material";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brastlewark Social Network</title>
        <meta name="description" content="Gnomore lonely time!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
          <Button variant="contained">Log in</Button>
        </Stack>
      </main>
    </>
  );
}
