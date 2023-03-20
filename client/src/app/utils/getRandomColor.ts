const palette = [
  "#EAE4E9",
  "#FFF1E6",
  "#FDE2E4",
  "#FAD2E1",
  "#E2ECE9",
  "#BEE1E6",
  "#F0EFEB",
  "#DFE7FD",
  "#CDDAFD",
];

export default function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
