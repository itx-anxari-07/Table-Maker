function generateTable() {
    const numberInput = document.getElementById("number");
    const tableContainer = document.getElementById("tableContainer");
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 1) {
        tableContainer.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    let tableHtml = "<h2>Table of " + number + "</h2>";
    tableHtml += "<table><thead><tr><th>Multiplicand</th><th>Product</th></tr></thead><tbody>";

    for (let i = 1; i <= 10; i++) {
        const product = number * i;
        tableHtml += "<tr><td>" + number + " x " + i + "</td><td>" + product + "</td></tr>";
    }

    tableHtml += "</tbody></table>";
    tableContainer.innerHTML = tableHtml;
}