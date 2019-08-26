/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let hour = timeString.split(':')[0]
  let minutes = timeString.split(':')[1]
  
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon'
  } else if (hour == 17 && minutes == 0) {
    return 'Good Afternoon'
  } else if (hour >= 17) {
    return 'Good Evening'
  }
    return 'Error, invalid input'
  }

  function displayMessage(textString) {
    document.getElementById('greeting').innerText = textString;
  }
