const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling inside the promise
    console.error('Error:', error);
    // Missing response to the client
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    const success = Math.random() < 0.5; 
    setTimeout(() => {
      if(success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 100);
  });
}