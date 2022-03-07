const requests = {
  fetchRandomCharacter: "v1/characters/random",
  fetch6Characters: "/v1/characters/search?origin=6",
  fetch7Characters: "/v1/characters/search?origin=7",
  fetch8Characters: "/v1/characters/search?origin=8",
  fetch9Characters: "/v1/characters/search?origin=9",
  fetch10Characters: "/v1/characters/search?origin=10",
  fetch12Characters: "/v1/characters/search?origin=12",
  fetch13Characters: "/v1/characters/search?origin=13",
  fetch15Characters: "/v1/characters/search?origin=Final%20Fantasy%20XV",
  fetchCharacterSearch: "/v1/characters/search?name=",
};

export const requestArray = [
  {
    id: 1,
    name: "Final Fantasy VI",
    request: "/v1/characters/search?origin=6",
  },
  {
    id: 2,
    name: "Final Fantasy VII",
    request: "/v1/characters/search?origin=7",
  },
  {
    id: 3,
    name: "Final Fantasy VIII",
    request: "/v1/characters/search?origin=8",
  },
  {
    id: 4,
    name: "Final Fantasy IX",
    request: "/v1/characters/search?origin=9",
  },
  {
    id: 5,
    name: "Final Fantasy X",
    request: "/v1/characters/search?origin=10",
  },
  {
    id: 6,
    name: "Final Fantasy XII",
    request: "/v1/characters/search?origin=12",
  },
  {
    id: 7,
    name: "Final Fantasy XIII",
    request: "/v1/characters/search?origin=13",
  },
  {
    id: 8,
    name: "Final Fantasy XV",
    request: "/v1/characters/search?origin=Final%20Fantasy%20XV",
  },
];

export default requests;
