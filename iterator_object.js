function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
}

const weaponsIterator = WeaponGenerator();

const result1 = weaponsIterator.next();
if (typeof result1 === 'object' && result1.value === 'Katana' && !result1.done)
  console.log('Katana received!');

const result2 = weaponsIterator.next();
if (
  typeof result2 === 'object' &&
  result2.value === 'Wakizashi' &&
  !result2.done
)
  console.log('Wakizashi received!');

const result3 = weaponsIterator.next();
if (typeof result3 === 'object' && result3.value === undefined && result3.done)
  console.log('There are no more results!');
