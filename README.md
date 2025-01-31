# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: improper handling of promise rejections within asynchronous route handlers.  The bug results in the server silently failing to respond to client requests when an asynchronous operation throws an error.

The `bug.js` file contains the flawed code.  The `bugSolution.js` demonstrates the corrected implementation with proper error handling.

## Bug

The bug lies in the `someAsyncOperation` function and how errors are managed in the main route handler.  The `.catch()` block logs the error, but crucially, it fails to send a response to the client, leading to a poor user experience and potential server instability.

## Solution

The solution involves ensuring that a response is sent to the client, regardless of whether the asynchronous operation succeeds or fails.  This is achieved by sending an error response within the `.catch()` block.  More robust error handling would also involve more sophisticated error reporting and potentially centralized error logging.