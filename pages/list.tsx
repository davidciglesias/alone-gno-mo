import { useEffect, useState } from "react";

import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import { Stack, SxProps, Theme, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import getInhabitants, { InhabitantVM } from "api/inhabitants";

import PaperLayout from "components/PaperLayout";

const ROWS_PER_PAGE = 100;

interface TypedGridColDef extends Omit<GridColDef, "field"> {
  field: keyof InhabitantVM;
}

const typedColumns: TypedGridColDef[] = [
  {
    field: "name",
    headerName: "Full name",
    flex: 1,
    minWidth: 130,
    renderHeader: () => <BadgeIcon />,
  },
  {
    field: "age",
    headerName: "Age",
    renderHeader: () => (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <CakeIcon />
        <Typography variant="body1">(y)</Typography>
      </Stack>
    ),
    headerAlign: "left",
    align: "left",
    width: 80,
  },
  {
    field: "height",
    headerName: "Height (cm)",
    renderHeader: () => (
      <Stack justifyContent="center" alignItems="center">
        <HeightIcon />
        <Typography variant="body1">(cm)</Typography>
      </Stack>
    ),
    headerAlign: "left",
    align: "left",
    width: 80,
  },
  {
    field: "weight",
    headerName: "Weight (kg)",
    renderHeader: () => (
      <Stack justifyContent="center" alignItems="center">
        <ScaleIcon />
        <Typography variant="body1">(kg)</Typography>
      </Stack>
    ),
    headerAlign: "left",
    align: "left",
    width: 80,
  },
];

export default function List() {
  const [inhabitants, setInhabitants] = useState<InhabitantVM[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getInhabitants()
      .then(setInhabitants)
      .finally(() => setIsLoading(false));
  }, []);

  const dataGridSx: SxProps<Theme> = {
    maxWidth: 720,
    width: "100%",
    padding: 2,
    paddingBottom: 0,
    "& .MuiDataGrid-columnHeader": {
      "&:focus, &:focus-within": {
        outline: "none",
      },
    },
    "& .MuiDataGrid-cellContent": {
      whiteSpace: "normal",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      whiteSpace: "normal",
      lineHeight: "initial",
    },
    "& .MuiDataGrid-cell--withRenderer": {
      padding: 0,
    },
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
  };

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
        <DataGrid
          rows={inhabitants}
          columns={typedColumns}
          filterMode="client"
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          disableColumnSelector
          sortingMode="client"
          sx={dataGridSx}
          loading={isLoading}
          disableColumnMenu
        />
      </Stack>
    </PaperLayout>
  );
}
