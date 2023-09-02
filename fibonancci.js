function fibonacci(n) {
    // Check that the number is positive.
    if (n < 1) {
      throw new Error("n must be positive");
    }
  
    // Create an empty array to store the numbers in the Fibonacci sequence.
    const numbers = [];
  
    // Initialize the first two numbers in the sequence.
    numbers.push(0);
    numbers.push(1);
  
    // Iterate until we reach the number n.
    for (let i = 2; i <= n; i++) {
      // Add the previous two numbers to get the next number.
      numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
  
    return numbers;
  }
  
  // Get the desired final number from the user.
  const n = Number(prompt("Enter the final number: "));
  
  // Print the Fibonacci sequence up to the number n.
  for (const number of fibonacci(n)) {
    console.log(number);
  }
  