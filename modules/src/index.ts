import foods from "./foods";
import { choice, remove } from "./helpers";

function main() {
  const fruit = choice(foods);
  console.log(`I'd like one ${fruit}, please`);
  console.log(`Here you go: ${fruit}`);
  remove(foods, fruit);
  console.log(
    `That was our last one. We do have ${foods.length} other fruits.`
  );
}

main();
