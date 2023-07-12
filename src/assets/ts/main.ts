import '../css/index.css'
import cardy from '../imgs/cardy.png';

const main = () => {
    console.log('code from here');
}

main();

const run = () =>{ 
    const canvas: any = document.getElementById('myCanvas');
    const context: any = canvas.getContext('2d')!;
    const inputField: any = document.getElementById("name");
    const downloadCardButton: any = document.getElementById("download-btn");
    let positionX: any = document.getElementById("position_x");
    let positionY: any = document.getElementById("position_y");
    let fontSize: any = document.getElementById("font_size");
    let fontColor: any = document.getElementById("text_color");
    
    const imageObj = new Image();
    imageObj.src = cardy.toString();

    imageObj.onload = () => {
        canvas.width = imageObj.width;
        canvas.height = imageObj.height;
        context.drawImage(imageObj, 0, 0);

        positionX.max = canvas.width;
        fontSize.max = canvas.width;
        positionY.max = canvas.height;
        
        positionX.value = canvas.width / 2;
        fontSize.value = Math.round(canvas.height / 10);
        positionY.value = parseInt(fontSize.value) + 100;
        redrawCanvas()
    };

    function DownloadCanvasAsImage() {
        const downloadLink = document.createElement("a");
        downloadLink.setAttribute("download", "jcdc-2023-adha-card.png");

        canvas.toBlob((blob: any ) => {
            const url = URL.createObjectURL(blob);
            downloadLink.setAttribute("href", url);
            downloadLink.click();
        });
    }
   
    function redrawCanvas(){
        console.log('redraw')
        const text = inputField.value;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 0, 0);
        context.textAlign = "center";
        context.font = `${fontSize.value}px Arial`;
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
}

document.addEventListener("DOMContentLoaded", () => {
    //alert('dom loaded')
    run();
});
  