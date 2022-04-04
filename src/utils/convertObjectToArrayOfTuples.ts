export function convertObjectToArrayOfTuples<T>(obj: { [key: string]: T; }): [string, T][] {
  return Object.keys(obj).map((key) => [key, obj[key]]);
};
