import { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";

import getInhabitants, { InhabitantVM } from "api/inhabitants";
import InhabitantDialog from "components/Inhabitant/InhabitantDialog";
import InhabitantTable from "components/InhabitantTable";
import PaperLayout from "components/PaperLayout";

export default function List() {
  const [inhabitants, setInhabitants] = useState<InhabitantVM[]>([]);
  const [focusInhabitant, setFocusInhabitant] = useState<InhabitantVM | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getInhabitants()
      .then(setInhabitants)
      .finally(() => setIsLoading(false));
  }, []);

  const onDialogClose = () => setFocusInhabitant(null);

  return (
    <PaperLayout>
      <Stack
        gap={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        padding={2}
      >
        <Typography variant="h1">Inhabitants of Brustlewark</Typography>
        <InhabitantTable
          inhabitants={inhabitants}
          isLoading={isLoading}
          setFocusInhabitant={setFocusInhabitant}
        />
        {focusInhabitant !== null && (
          <InhabitantDialog
            onDialogClose={onDialogClose}
            inhabitant={focusInhabitant}
          />
        )}
      </Stack>
    </PaperLayout>
  );
}
