/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// Write your implementation of greet()

function greet(time) {
  if (time < "12:00") {
    return "Good Morning"
  } else if (time >= "12:00" && time < "17:00") {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(greeting) {
      document.getElementById('greeting').innerText = greeting
}
/* Write your implementation of displayMessage() */
