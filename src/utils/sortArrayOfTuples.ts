export function sortArrayOfTuples(arrayOfTuples: Array<[string, any]>) {
  return arrayOfTuples.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
};
