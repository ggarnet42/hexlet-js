export default function capitalize(text) {
  if (text === '') {
    return '';
  }
  const firstChar = text[0].toUpperCase();
  const restSubsring = text.slice(1);
  return `${firstChar}${restSubsring}`;
}
