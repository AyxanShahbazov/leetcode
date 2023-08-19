/**
 * @param {number} millis
 */
async function sleep(millis) {

  return new Promise(resolve => {

    setTimeout(() => {
      resolve();
    }, millis);

  });

}

(async () => {

  console.log('Start');

  await sleep(2000);

  console.log('End');

})();

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */