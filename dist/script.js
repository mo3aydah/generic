var run = function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var inputField = document.getElementById("name");
    var downloadCardButton = document.getElementById("downloadCard");
    var positionX = document.getElementById("position_x");
    var positionY = document.getElementById("position_y");
    var fontSize = document.getElementById("font_size");
    var fontColor = document.getElementById("text_color");
    var imageObj = new Image();
    imageObj.src = "assets/images/card-image.jpg";
    imageObj.onload = function () {
        canvas.width = imageObj.width;
        canvas.height = imageObj.height;
        context.drawImage(imageObj, 0, 0);
        positionX.max = canvas.width;
        fontSize.max = canvas.width;
        positionY.max = canvas.height;
        positionX.value = canvas.width / 2;
        fontSize.value = Math.round(canvas.height / 10);
        positionY.value = parseInt(fontSize.value) + 100;
        redrawCanvas();
    };
    function DownloadCanvasAsImage() {
        var downloadLink = document.createElement("a");
        downloadLink.setAttribute("download", "jcdc-2023-adha-card.png");
        canvas.toBlob(function (blob) {
            var url = URL.createObjectURL(blob);
            downloadLink.setAttribute("href", url);
            downloadLink.click();
        });
    }
    function redrawCanvas() {
        alert('redraw');
        var text = inputField.value;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 0, 0);
        context.textAlign = "center";
        context.font = "".concat(fontSize.value, "px Arial");
        context.fillStyle = fontColor.value;
        context.fillText(text, positionX.value, positionY.value);
    }
    document.addEventListener("DOMContentLoaded", redrawCanvas);
    fontSize.addEventListener("input", redrawCanvas);
    fontColor.addEventListener("input", redrawCanvas);
    positionX.addEventListener("input", redrawCanvas);
    positionY.addEventListener("input", redrawCanvas);
    inputField.addEventListener("input", redrawCanvas);
    downloadCardButton.addEventListener("click", DownloadCanvasAsImage);
};
document.addEventListener("DOMContentLoaded", function () {
    alert('dom loaded');
    run();
});
