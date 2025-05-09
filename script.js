$(function () {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const items = document.querySelectorAll("#sortable li img");
  const order = Array.from(items).map(img => img.alt);
  console.log("Submitted order:", order);

  const correctOrder = ["Image 1", "Image 2", "Image 3"];
  const feedbackDiv = document.getElementById("feedback");

  if (JSON.stringify(order) === JSON.stringify(correctOrder)) {
    feedbackDiv.innerText = "✅ This is the correct order!";
    feedbackDiv.style.color = "green";
  } else {
    feedbackDiv.innerText = "❌ That’s not quite right. Try again.";
    feedbackDiv.style.color = "red";
  }
});
