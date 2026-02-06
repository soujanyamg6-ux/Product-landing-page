function placeOrder() {
    const email = document.getElementById("emailBox").value;

    if (email === "") {
        alert("Please enter your email");
    } else {
        alert("Thank you! Order placed successfully.");
    }
}
