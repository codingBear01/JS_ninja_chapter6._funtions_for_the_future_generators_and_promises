function* Gen(val) {
  val = yield val * 2;
  yield val;
}

let generator = Gen(2);
let a1 = generator.next(3).value;
let a2 = generator.next(4).value;

console.log(a1);
console.log(a2);

console.log(Gen(2));
