import { IndexFlatL2 } from "faiss-node";

export function handler(event: any) {
  const dimension = 2;
  const index = new IndexFlatL2(dimension);

  console.log(index.getDimension()); // 2
  console.log(index.isTrained()); // true
  console.log(index.ntotal()); // 0

  // inserting data into index.
  index.add([1, 0]);
  index.add([1, 2]);
  index.add([1, 3]);
  index.add([1, 1]);

  console.log(index.ntotal()); // 4

  return index.ntotal();
}
