import CircleIcon from "@mui/icons-material/Circle";

import mapTextToBgColor from "helpers/mapTextToBgColor";

interface Props {
  textColor: string;
}

export default function ColorComponent({ textColor }: Props) {
  const bgColor = mapTextToBgColor(textColor);
  if (bgColor === null) return <span>{textColor}</span>;
  return <CircleIcon htmlColor={bgColor} />;
}
