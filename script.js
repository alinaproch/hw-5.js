
let currentShape = null;

function setShape(shape) {
    const container = document.getElementById('shapeContainer');
    container.innerHTML = '';

    const shapeElement = document.createElement('div');
    shapeElement.className = `shape ${shape}`;
    shapeElement.style.backgroundColor = '#ccc';
    currentShape = shapeElement;
    container.appendChild(shapeElement);
}

function setColor(color) {
    if (currentShape) {
        currentShape.style.backgroundColor = color;
    } else {
        alert('Сначала выберите фигуру!');
    }
}

function addText() {
    const textInput = document.getElementById('textInput').value;
    if (currentShape) {
        if (textInput.trim() === '') {
            alert('Введите текст!');
        } else {
            currentShape.textContent = textInput;
        }
    } else {
        alert('Сначала выберите фигуру!');
    }
}

function clearShape() {
    const container = document.getElementById('shapeContainer');
    container.innerHTML = '';
    currentShape = null;
}