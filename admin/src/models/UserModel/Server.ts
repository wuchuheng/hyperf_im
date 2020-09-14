export function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test');
    }, 4000)
  });
}
