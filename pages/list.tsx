import { useEffect, useState } from "react";

import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import Face3Icon from "@mui/icons-material/Face3";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import WorkIcon from "@mui/icons-material/Work";
import { Stack, SxProps, Theme, Typography } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridComparatorFn,
  GridEventListener,
  GridFilterItem,
  GridFilterPanel,
  getGridSingleSelectOperators,
} from "@mui/x-data-grid";

import { hairColorOptions, professionOptions } from "api/const";
import getInhabitants, { InhabitantVM } from "api/inhabitants";
import ColorComponent from "components/ColorComponent";
import InhabitantDialog from "components/Inhabitant/InhabitantDialog";
import PaperLayout from "components/PaperLayout";
import theme from "config/theme";

const ROWS_PER_PAGE = 100;

interface TypedGridColDef extends Omit<GridColDef, "field"> {
  field: keyof InhabitantVM;
}

function FilterPanel(props: any) {
  return (
    <GridFilterPanel
      {...props}
      sx={{
        "& .MuiDataGrid-filterForm": {
          flexDirection: "column",
          gap: 2,

          "& .MuiFormControl-root": {
            width: "100%",
          },

          "& .MuiDataGrid-filterFormDeleteIcon": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            "&::before": {
              content: '"Filter"',
              fontWeight: "bold",
            },
            "& svg": {
              fill: theme.palette.error.main,
            },
          },
          "& .MuiAutocomplete-inputRoot input": {
            width: "100%",
          },
        },
      }}
    />
  );
}

const tagsSortComparator: GridComparatorFn<any> = (tags1: any, tags2: any) => {
  return tags1.length - tags2.length;
};

const tagsFilterOperators = getGridSingleSelectOperators()
  .filter((operator) => operator.value === "isAnyOf")
  .map((operator) => {
    const newOperator = { ...operator };
    const newGetApplyFilterFn = (filterItem: GridFilterItem, _: GridColDef) => {
      return (params: GridCellParams): boolean => {
        let isOk = true;
        filterItem?.value?.forEach((fv: any) => {
          isOk = isOk && params.value.includes(fv);
        });
        return isOk;
      };
    };
    newOperator.getApplyFilterFn = newGetApplyFilterFn;
    return newOperator;
  });

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
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    width: 100,
    type: "number",
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
  },
  {
    field: "height",
    headerName: "Height (cm)",
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    width: 110,
    type: "number",
    renderHeader: () => (
      <Stack justifyContent="center" alignItems="center">
        <HeightIcon />
        <Typography variant="body1">(cm)</Typography>
      </Stack>
    ),
  },
  {
    field: "weight",
    headerName: "Weight (kg)",
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    width: 110,
    type: "number",
    renderHeader: () => (
      <Stack justifyContent="center" alignItems="center">
        <ScaleIcon />
        <Typography variant="body1">(kg)</Typography>
      </Stack>
    ),
  },
  {
    field: "hairColor",
    headerName: "Hair Color",
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    width: 110,
    type: "singleSelect",
    valueOptions: hairColorOptions,
    renderHeader: () => <Face3Icon />,
    renderCell: ({ row }) => {
      const { hairColor } = row as InhabitantVM;
      return <ColorComponent textColor={hairColor} />;
    },
  },
  {
    field: "professions",
    headerName: "Professions",
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    width: 110,
    type: "singleSelect",
    valueOptions: professionOptions,
    renderHeader: () => <WorkIcon />,
    sortComparator: tagsSortComparator,
    filterOperators: tagsFilterOperators,
  },
];

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

  const onRowClick: GridEventListener<"rowClick"> = ({ row }) => {
    const inhabitant = row as InhabitantVM;
    setFocusInhabitant(inhabitant);
  };

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
        <DataGrid
          rows={inhabitants}
          columns={typedColumns}
          filterMode="client"
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          disableColumnSelector
          sortingMode="client"
          sx={dataGridSx}
          loading={isLoading}
          onRowClick={onRowClick}
          components={{ FilterPanel }}
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
