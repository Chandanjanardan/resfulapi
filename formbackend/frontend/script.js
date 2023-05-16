console.log("hello world")
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    var data = {
      name: name,
      email: email
    };
  
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Data successfully sent to server:", data);
      // You can perform additional actions or show a success message to the user
    })
    .catch(error => {
      console.error("Error sending data to server:", error);
      // You can handle the error and show an error message to the user
    });
  });
  
