// Task 2 (Await async function)
async function awaitCall() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json(); 
    console.log(data);
  }


// Task 3 (Error catching & chained async functions)
async function awaitCall() {
    try { 
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json(); 
    console.log(data);
    } catch(err) {
    console.error(err);
  }
}

async function chainedAsyncFunctions() {
    try { 
    await console.log('first') 
    await new Promise(resolve => setTimeout(resolve, 1000));
    await console.log('second') 
    await new Promise(resolve => setTimeout(resolve, 1000));
    await console.log('third') 
    await new Promise(resolve => setTimeout(resolve, 1000));
    } catch(err) {
    console.error(err)
    }
}

// Task 4 (Await concurrent requests) 
const promise1 = new Promise (resolve => resolve('First'))
const promise2 = new Promise (resolve => resolve('Second'))
const promise3 = new Promise (resolve => setTimeout(() => resolve('3'), 1000))

Promise.all([promise1, promise2, promise3]).then(response => console.log(response))