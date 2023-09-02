def fibonacci(n):
    # Check that the number is positive.
    if n < 1:
      raise ValueError("n must be positive")
    
    # Create an empty list to store the numbers in the Fibonacci sequence.
    numbers = []
    # Add the first two numbers in the sequence.
    numbers.append(0)
    numbers.append(1)
    
    # Iterate until we reach the number n.
    for i in range(2, n + 1):
      # Add the previous two numbers to get the next number.
      numbers.append(numbers[i - 1] + numbers[i - 2])

    return numbers

if __name__ == "__main__":
# Get the desired final number from the user.
  n = int(input("Enter the final number: "))

  # Print the Fibonacci sequence up to the number n.
  for i in fibonacci(n):
    print(i)
