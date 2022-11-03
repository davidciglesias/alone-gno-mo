import { mapInhabitantsAMToVM } from "./inhabitants";

interface MapInhabitantsAMToVMData {
  input: Parameters<typeof mapInhabitantsAMToVM>[number];
  output: ReturnType<typeof mapInhabitantsAMToVM>;
}

const mapInhabitantsAMToVMData: MapInhabitantsAMToVMData[] = [
  {
    input: {
      Brastlewark: [],
    },
    output: [],
  },
  {
    input: {
      Brastlewark: [
        {
          id: "1",
          age: 123,
          friends: [],
          hair_color: "Pink",
          height: 123.21,
          name: "Gnomelia Albricia",
          professions: ["Carpenter", "Mason"],
          thumbnail:
            "https://www.publicdomainpictures.net/pictures/30000/t2/hugo-strikes-again.jpg",
          weight: 42.15,
        },
      ],
    },
    output: [
      {
        id: "1",
        age: 123,
        friends: [],
        hairColor: "Pink",
        height: 123,
        name: "Gnomelia Albricia",
        professions: ["Carpenter", "Mason"],
        thumbnail:
          "https://www.publicdomainpictures.net/pictures/30000/t2/hugo-strikes-again.jpg",
        weight: 42,
      },
    ],
  },
];

test.each(mapInhabitantsAMToVMData)(
  "expects mapping $input returns $output",
  ({ input, output }) => {
    expect(mapInhabitantsAMToVM(input)).toEqual(output);
  },
);
