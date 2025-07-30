const MARKS_LENGTH = 7;

export const marks = Array.from({ length: MARKS_LENGTH }, (_, i) => {
  const value = Math.round(i * (100 / (MARKS_LENGTH - 1)));
  return {
    value,
    label: i === 0 || i === MARKS_LENGTH - 1 ? `${value}` : "",
  };
});
