# Summary

1. Async functions

    Put keyword `async` before a function. Async functions always return a *promise*.
    
2. Await

    `await` keyword works *only inside* `async` funtions. The function execution pauses at the line `await` and resumes when the promise settles.
    
    ```
    async function f() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
    
      let result = await promise; // wait till the promise resolves
    
      alert(result); // "done!"
    }
    
    f();
    ```


