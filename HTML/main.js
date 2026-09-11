const myPromise = new Promise((resolve, reject) => {
    {
      const order = false; // Change to false to test reject
      if (order) {
        resolve("Order success!");
      } else {
        reject("Order failure");
      }
    }
  });
  
  myPromise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
        });
console.log(123);

console.log("ashutosh");

// function createOrder(orderID) {
//   return new promise((resolve, reject)  => {
//     setTimeout(() => {
//       console.log(`Step 2: Payment processed for ${orderId}`);
//       reject("Payment ID: 456");
//     }, 1000);
//     });
//   }

// function deliverOrder(paymentId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Step 3: Order delivered using ${paymentId}`);
//       resolve("Delivery confirmed");
//     }, 1000);
//   });
// }

// // Chaining the promises
// createOrder()
// .them(orderId => processPayment(orderId))
// // .them(paymentId => deliverOrder(paymentId))
// .the