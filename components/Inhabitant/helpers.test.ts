import getQuantityLabel from "./helpers";

interface GetQuantityLabelData {
  input: {
    baseLabel: Parameters<typeof getQuantityLabel>[0];
    quantity: Parameters<typeof getQuantityLabel>[1];
  };
  output: ReturnType<typeof getQuantityLabel>;
}

const getQuantityLabelData: GetQuantityLabelData[] = [
  {
    input: {
      baseLabel: "friend",
      quantity: 1,
    },
    output: "1 friend",
  },
  {
    input: {
      baseLabel: "friend",
      quantity: 0,
    },
    output: "No friends ☹️",
  },
  {
    input: {
      baseLabel: "profession",
      quantity: 2,
    },
    output: "2 professions",
  },
];

test.each(getQuantityLabelData)(
  "expects $input.baseLabel + $input.quantity to result in $output",
  ({ input, output }) => {
    const { baseLabel, quantity } = input;
    expect(getQuantityLabel(baseLabel, quantity)).toEqual(output);
  },
);
