import { toast } from "react-toastify";

export interface InhabitantAM {
  id: string;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: string[];
  friends: string[];
}

export interface InhabitantVM {
  id: string;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hairColor: string;
  professions: string[];
  friends: string[];
}

export interface InhabitantsAM {
  Brastlewark: InhabitantAM[];
}

export function mapInhabitantsAMToVM({
  Brastlewark,
}: InhabitantsAM): InhabitantVM[] {
  return Brastlewark.map(
    ({
      id,
      name,
      thumbnail,
      age,
      weight,
      height,
      hair_color,
      professions,
      friends,
    }) => ({
      id,
      name,
      thumbnail,
      age,
      weight: Math.round(weight),
      height: Math.round(height),
      hairColor: hair_color,
      professions,
      friends,
    }),
  );
}

export default async function getInhabitants() {
  const response = await window.fetch(
    "https://raw.githubusercontent.com/davidciglesias/alone-gno-mo/main/data/brastlewark.json",
  );

  const data = await response.json();

  if (response.ok) {
    return Promise.resolve(mapInhabitantsAMToVM(data as InhabitantsAM));
  } else {
    // TODO Add external logging to understand why this fetch failed
    toast.error(
      "Sorry, the inhabitants must be at the tabern. Please try again later!",
      { icon: "😥" },
    );
    return [];
  }
}
