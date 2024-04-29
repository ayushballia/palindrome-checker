

const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
    const textInput = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");
  if (textInput === "") {
    return alert("Please enter a value");
  } else {
    
const normalizedText = textInput.toLowerCase().replace(/[^a-z0-9]/g, "");
const reversedText = normalizedText.split("").reverse().join("");
    if (normalizedText === reversedText) {
      resultElement.textContent = textInput + " is a palindrome";
    } else {
      resultElement.textContent = textInput + " is not a palindrome";
    }
    resultElement.classList.remove("hidden");
  }
});
