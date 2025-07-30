const MARKS_LENGTH = 7;

export const marks = Array.from({ length: MARKS_LENGTH }, (_, i) => {
  const value = Math.round(1 + i * ((100 - 1) / 6));
  return {
    value,
  };
});
