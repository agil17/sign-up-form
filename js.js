const handleclick = (event) => {
    const pass = document.querySelector("#password");
    const confirm = document.querySelector("#confirm-password");
    const email = document.querySelector("#email");

    ////do if statement and compare password then toggle class for confirm password
    if(pass.value !== confirm.value) {
        alert("Passwords do not match");
        return;
    }
    alert(`A confirmation has been sent to ${email.value}`);
}