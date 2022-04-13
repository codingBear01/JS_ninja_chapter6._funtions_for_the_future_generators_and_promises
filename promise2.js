console.log('At code start'); // 1

const ninjaDelayedPromise = new Promise((resolve, reject) => {
  console.log('ninjaDelayedPromise executor'); // 2
  setTimeout(() => {
    console.log('Resolving ninjaDelayedPromise'); // 6
    resolve('Hattori');
  }, 500);
});

if (ninjaDelayedPromise !== null)
  console.log('After creating ninjaDelayedPromise'); // 3

ninjaDelayedPromise.then((ninja) => {
  if (ninja === 'Hattori')
    console.log('ninjaDelayedPromise resolve handled with Hattori');
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
  console.log('ninjaImmediatePromise executor. Immediate resolve.'); // 7
  resolve('Yoshi');
});

ninjaImmediatePromise.then((ninja) => {
  if (ninja === 'Yoshi')
    console.log('ninjaImmediatePromise resolve handled with Yoshi'); // 5
});

console.log('At code end'); // 4
