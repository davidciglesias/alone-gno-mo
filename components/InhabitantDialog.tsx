import { Dialog } from "@mui/material";

import { InhabitantVM } from "api/inhabitants";

import InhabitantInfoCard from "./InhabitantInfoCard";

interface Props {
  inhabitant: InhabitantVM;
  onDialogClose: () => void;
}

export default function InhabitantDialog({ onDialogClose, inhabitant }: Props) {
  return (
    <Dialog
      open={true}
      onClose={onDialogClose}
      sx={{ "& .MuiPaper-root": { borderRadius: "20px" } }}
    >
      <InhabitantInfoCard inhabitant={inhabitant} />
    </Dialog>
  );
}
