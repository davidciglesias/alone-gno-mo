import BadgeIcon from "@mui/icons-material/Badge";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Stack,
} from "@mui/material";

import LabelItem from "components/LabelItem";
import theme from "config/theme";

import getQuantityLabel from "./helpers";

interface Props {
  name: string;
  professions: string[];
}

export default function ProfessionsCard({ name, professions }: Props) {
  return (
    <Card>
      <CardContent
        sx={{
          paddingX: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Stack sx={{ width: "100%", height: "100%" }} gap={2}>
          <LabelItem label="Full name" icon={<BadgeIcon />}>
            <div>{name}</div>
          </LabelItem>
          <Divider variant="fullWidth" />
          <LabelItem
            label={getQuantityLabel("profession", professions.length)}
            icon={<WorkHistoryIcon />}
          >
            <List
              sx={{
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
              }}
            >
              {professions.map((professions) => (
                <ListItem
                  key={professions}
                  sx={{ padding: 0, justifyContent: "center" }}
                >
                  {professions}
                </ListItem>
              ))}
            </List>
          </LabelItem>
        </Stack>
      </CardContent>
    </Card>
  );
}
