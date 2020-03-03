function myFunction() {
    let username = prompt("Please enter your username", "myUsername");
    let password = prompt ("Please enter your password", "myPassword");
    if (username && password != null) {
        document.getElementById("demo").innerHTML =
            "Username: " + username + '\n' + "Password: " + password;
        console.log("Username: " + username);
        console.log("Password: " + password);
    }
}

