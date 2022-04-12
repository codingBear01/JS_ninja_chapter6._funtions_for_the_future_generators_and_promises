function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
}

const weaponsIterator = WeaponGenerator();
let item;

while (!(item = weaponsIterator.next()).done) {
  if (item !== null) console.log(item.value);
}
