// Explicitly rejecting promises

const promise = new Promise((resolve, reject) => {
  reject('Explicitly reject a promise!');
});

promise
  .then(() => fail("Happy path, won't be called!"))
  .catch(() => {
    console.log('Promise was also rejected');
  });

// Exceptions implicitly reject a promise

const promise2 = new Promise((resolve, reject) => {
  undeclaredVariable++;
});

promise2
  .then(() => fail("Happy path, won't be called!"))
  .catch(() => {
    console.log('Promise2 was also rejected');
  });
