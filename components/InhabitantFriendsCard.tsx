import BadgeIcon from "@mui/icons-material/Badge";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Stack,
} from "@mui/material";

import theme from "config/theme";

import LabelItem from "./LabelItem";

interface Props {
  name: string;
  friends: string[];
}

function getFriendsLabel(friendsCount: number) {
  // TODO adapt using i18next quantity
  if (friendsCount === 0) return "No friends ☹️";
  if (friendsCount > 1) return `${friendsCount} friends`;
  return "1 friend";
}

export default function InhabitantFriendsCard({ name, friends }: Props) {
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
            label={getFriendsLabel(friends.length)}
            icon={<Diversity2Icon />}
          >
            <List sx={{ padding: 0 }}>
              {friends.map((friend) => (
                <ListItem
                  key={friend}
                  sx={{ padding: 0, justifyContent: "center" }}
                >
                  {friend}
                </ListItem>
              ))}
            </List>
          </LabelItem>
        </Stack>
      </CardContent>
    </Card>
  );
}
