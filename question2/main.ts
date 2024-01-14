export function findOutlier(integers: number[]): number {
  let outlier: number = 0;
  let evens: number[] = [];
  let odds: number[] = [];

  for (let i = 0; i < integers.length; i++) {
    const element = integers[i];
    
    if (element % 2 == 0) {
      evens.push(element);
    } else{
      odds.push(element);
    }

    if (evens.length == 1) {
      outlier = evens[0];
    } else {
      outlier = odds[0];
    }
  }

  return outlier;
}
