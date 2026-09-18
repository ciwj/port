

addEventListener("load", init);

function init() {

    let canvas = document.getElementById("pixelart_canvas");
    let ctx = canvas.getContext("2d");                                                      // TODO if you want. learn render good

    let head_shoulders = new Image(20,20);
    head_shoulders.src = "assets/visual/dark_desk.png";


    ctx.font = "40px bouba";

    ctx.drawImage(head_shoulders, 50, 50);

    console.log("please");
}