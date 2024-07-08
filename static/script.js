document.getElementById("symptomsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var symptoms = document.getElementById("symptoms").value;
    addMessage("user", symptoms);
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: symptoms }),
    })
    .then(response => response.json())
    .then(data => {
        var prediction = data.prediction;
        addMessage("bot", "Based on your symptoms, it seems like you might have " + prediction + ". Please consult a doctor for confirmation.");
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function addMessage(sender, message) {
    var chatContainer = document.getElementById("chatContainer");
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    if (sender === "user") {
        messageDiv.classList.add("sent");
    } else {
        messageDiv.classList.add("received");
    }
    var messageContent = document.createElement("div");
    messageContent.classList.add("message");
    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);
    chatContainer.appendChild(messageDiv);
}
