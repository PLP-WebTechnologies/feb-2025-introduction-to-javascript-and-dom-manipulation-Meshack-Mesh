function changeContent() {
  const text = document.getElementById("text");
  text.textContent = "The paragraph content has been updated!";
  text.style.color = "#fff";
  text.style.backgroundColor = "#008080";
  text.style.padding = "10px";
  text.style.borderRadius = "8px";
}

function toggleElement() {
  const existing = document.getElementById("new-element");
  if (existing) {
    existing.remove();
  } else {
    const newEl = document.createElement("div");
    newEl.id = "new-element";
    newEl.textContent = "This is a toggled message!";
    newEl.style.marginTop = "10px";
    newEl.style.color = "blue";
    document.body.appendChild(newEl);
  }
}

function changeBackground() {
  const colors = ["#f8f9fa", "#e0f7fa", "#fce4ec", "#fff3e0", "#f3e5f5"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (name) {
    greeting.textContent = `Hello, ${name}! 👋`;
    greeting.style.fontWeight = "bold";
  } else {
    greeting.textContent = "Please enter your name.";
    greeting.style.color = "red";
  }
}

function addItem() {
  const input = document.getElementById("itemInput");
  const itemText = input.value.trim();
  const list = document.getElementById("itemList");

  if (itemText) {
    const li = document.createElement("li");
    li.textContent = itemText;
    list.appendChild(li);
    input.value = ""; // Clear input after adding
  } else {
    alert("Please enter a valid item.");
  }
}
