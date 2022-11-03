import mapTextToBgColor from "./mapTextToBgColor";

interface MapTextToBgColorData {
  input: Parameters<typeof mapTextToBgColor>[0];
  output: ReturnType<typeof mapTextToBgColor>;
}

const mapTextToBgColorData: MapTextToBgColorData[] = [
  { input: "Pink", output: "#f595cb" },
  { input: "Blue", output: null },
];

test.each(mapTextToBgColorData)(
  "expect $input to map to color $output",
  ({ input, output }) => {
    expect(mapTextToBgColor(input)).toEqual(output);
  },
);
