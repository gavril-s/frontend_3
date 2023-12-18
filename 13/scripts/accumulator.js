document.addEventListener("DOMContentLoaded", function () {
    updateAccumulatorValue();
});

function updateAccumulatorValue() {
    var accumulatorValueElement = document.getElementById("accumulator-value");
    var accumulator = new Accumulator(0);
    accumulatorValueElement.textContent = accumulator.value;

    function addValue() {
        accumulator.read();
        accumulatorValueElement.textContent = accumulator.value;
    }

    window.addValue = addValue; 
}

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        var newValue = parseFloat(prompt("Введите количество:", "0"));
        this.value += newValue;
    };
}
