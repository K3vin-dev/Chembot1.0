function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;

    if (!message) return;

    fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    })
    .then(res => res.json())
    .then(data => {
        const chatBox = document.getElementById("chat-box");

        chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;
        chatBox.innerHTML += `<p><b>Ralph AI:</b> ${data.response}</p>`;

        input.value = "";
    });
}
