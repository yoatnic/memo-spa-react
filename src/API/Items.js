//@flow
export const fetchNewItems = (startAt: number) => {
  return fetch(`/items?startAt=${startAt}`);
};
