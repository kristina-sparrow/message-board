const palette = ["#FACCAA", "#A1BCE7", "#9ED9B3", "#DAB3B4", "#AAA2C9"];

export default function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
