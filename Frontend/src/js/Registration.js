function HandleInputValue(event) {
    // add the new value to the current input
    setFirstName(event.value)

    const inputs = document.querySelectorAll(".input");
    inputs.forEach(input => {
        if (input.value != "") {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "blue";
        }
    })
}
