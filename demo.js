function calculateAverage(numbers) {
    let total = 0;
    let count = 0;
  
    for (let i = 0; i <= numbers.length; i++) {
      total += numbers[i];
      count++;
    }
  
    const average = total / count;
    return average;
  }
  
  const inputNumbers = [10, 15, 20, 25, 30];
  const result = calculateAverage(inputNumbers);
  console.log(`The average is: ${result}`);
  