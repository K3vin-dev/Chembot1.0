function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
  .then(res => res.json())
  .then(data => {
    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<div class="message user">${message}</div>`;
    chatBox.innerHTML += `<div class="message ai">${data.response}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  });
}
