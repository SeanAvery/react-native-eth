import Promise from 'bluebird';
import gaussian from 'gaussian';

// globals
let volume = 5;
let price = 1;
let price_variance = .2;
let volume_variance = 3;

/*
///////////////////////////////////////////////////////////
SIMULATION LOOP
///////////////////////////////////////////////////////////
*/
function simulationLoop() {
  return Promise.delay(5000)
  .then(() => {
    return calculateMarketParams();
  }).then(() => {
    return shotgun();
  }).then(() => {

  }).catch((error) => {
    console.log('error', error);
    Promise.delay(5000)
    .then(() => {
      return simulationLoop();
    });
  });
}

/*
///////////////////////////////////////////////////////////
CALCULATE BATCH PARAMETERS
///////////////////////////////////////////////////////////
*/

export default function calculateMarketParams() {
  return new Promise((resolve, reject) => {
    Promise.resolve(marketPrice())
    .then(() => {
      return marketPrice();
    }).then(() => {
      return batchVolume();
    }).then(() => {
      resolve(true);
    }).catch((error) => {
      reject(error);
    })
  })
}

export function marketPrice() {
  console.log('hit marketPrice');
  const distribution = gaussian(price, price_variance);
  // Take a random sample using inverse transform sampling method.
  var sample = distribution.ppf(Math.random());

}

export function marketVariance() {
  console.log('hit marketVariance');
}

export function batchVolume() {
  console.log('hit batchVolume');
}

/*
///////////////////////////////////////////////////////////
SHOTGUN: TRADING BATCH
///////////////////////////////////////////////////////////
*/
export function shotgun() {
  for(let i = 0; i < volume; i++) {
    tradingEvent(i);
  }
  return true;
}

export function tradingEvent(i) {
  console.log(`Trade ${i}`);
}

/*
///////////////////////////////////////////////////////////
MATH UTILIITES
///////////////////////////////////////////////////////////
*/
export function bellRandom(mean) {
  conosole.log('calculating normal random');
  return mean;

  return new Promise(resolve, rejct)
}

export function flatRandom(mean) {
  console.log('calculating flat random');
  return mean;
}

simulationLoop();




// instantiate process
// Promise.delay(0)
// .then(() => {
//   runSimulation();
// }).catch((error) => {
//   console.log(error);
// });
//
// function runSimulation() {
//   return Promise.delay(3000)
//   .then(() => {
//     return marketPrice();
//   }).then((price) => {
//     console.log('price', price);
//     console.log('date', new Date());
//     return runSimulation();
//   }).catch((error) => {
//     return Promise.delay(3000)
//     .then(() => { return runSimulation();})
//   })
// }
//
// const marketPrice = () => {
//   return new Promise((resolve, reject) => {
//     Promise.resolve(normalRandom(market_price, 1))
//   })
// }
//
// const normalRandom = () => {
//
// }