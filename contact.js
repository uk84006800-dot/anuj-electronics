function CALLVALUE() {
    event.preventDefault();
    const userName = document.getElementById("UNAME").value;
    const userPhone = document.getElementById("PNO").value;
    const userEmail = document.getElementById("EMAIL").value;
    const userAddress = document.getElementById("ADD").value;
    const userProduct = document.getElementById("PRO").value;
    let message = "Thankyou-" + userName + "-To Contact Us.";
    document.getElementById("message").innerHTML = message;
    console.log(message);
    let userData = {
        name: userName,
        phone: userPhone,
        email: userEmail,
        address: userAddress,
        product: userProduct
    };
    console.log("saved  user Data:", userData);
    localStorage.setItem("userContactData", JSON.stringify(userData));
    alert("data saved successfully!");
} 