function increase_button() {
    let previous_value = document.getElementById("counterValue").textContent;
    let upadated_value = parseInt(previous_value) + 1;
    document.getElementById("counterValue").textContent = upadated_value;
    document.getElementById("counterValue").style.color = "green";
}

function reset_button() {
    let previous_value = document.getElementById("counterValue").textContent;
    let upadated_value = parseInt(previous_value) + 1;
    document.getElementById("counterValue").textContent = 0;
    document.getElementById("counterValue").style.color = "black";
}

function decrease_button() {
    let previous_value = document.getElementById("counterValue").textContent;
    let upadated_value = parseInt(previous_value) - 1;
    document.getElementById("counterValue").textContent = upadated_value;
    document.getElementById("counterValue").style.color = "red";
}