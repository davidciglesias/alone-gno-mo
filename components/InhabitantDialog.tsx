import { useState } from "react";

import Diversity3Icon from "@mui/icons-material/Diversity3";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import { Dialog, DialogActions, Stack, Tab, Tabs } from "@mui/material";

import { InhabitantVM } from "api/inhabitants";

import InhabitantFriendsCard from "./InhabitantFriendsCard";
import InhabitantInfoCard from "./InhabitantInfoCard";

interface Props {
  inhabitant: InhabitantVM;
  onDialogClose: () => void;
}

const tabs = ["info", "friends", "professions"] as const;

export default function InhabitantDialog({ onDialogClose, inhabitant }: Props) {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("info");

  const handleChange = (_: any, newIndex: number) => {
    setActiveTab(tabs[newIndex]);
  };

  const { friends, name } = inhabitant;

  return (
    <Dialog
      open={true}
      onClose={onDialogClose}
      sx={{
        maxHeight: "600px",
        minHeight: "95vh",
        maxWidth: "512px",
        minWidth: "90vw",
        "& .MuiCard-root": { borderRadius: 0, overflowY: "auto" },
        "& .MuiDialog-paper": { borderRadius: "20px" },
      }}
    >
      {activeTab === "info" && <InhabitantInfoCard inhabitant={inhabitant} />}
      {activeTab === "friends" && (
        <InhabitantFriendsCard name={name} friends={friends} />
      )}
      <DialogActions
        sx={{
          width: "100%",
        }}
      >
        <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
          <Tabs
            value={tabs.indexOf(activeTab)}
            onChange={handleChange}
            aria-label="icon tabs example"
          >
            <Tab icon={<SensorOccupiedIcon />} aria-label="user info" />
            <Tab icon={<Diversity3Icon />} aria-label="friends" />
          </Tabs>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
