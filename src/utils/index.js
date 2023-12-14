export const initialItems = new Array(29_999_999).fill(0).map((_, idx) => {
  return {
    id: idx,
    isSelected: idx === 29_999_998,
  };
});
