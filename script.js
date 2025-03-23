document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let confirmationMessage = `Thank you, ${name}! Your appointment for ${service} on ${date} at ${time} has been confirmed.`;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
});
