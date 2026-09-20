

addEventListener("load", init);

function init() {

    let canvas = document.getElementById("pixelart_canvas");
    let ctx = canvas.getContext("2d");                                                      // TODO if you want. learn render good

    placeImage(ctx, "/assets/visual/dark_desk.png", 65, 100, 200, 200, 0);
    placeImage(ctx, "assets/visual/sword_no_bg.png", canvas.width / 2 - 100, canvas.height / 2 - 200, 200, 400, 180);
    placeImage(ctx, "assets/visual/grief_alpha.png", canvas.width - 250, canvas.height - 270, 250, 250, 0)

    ctx.font = "40px bouba";
}

function placeImage(ctx, src, x, y, w, h, rot) {
    let img = new Image();
    img.src = src;

    img.addEventListener("load", () =>{
        if (rot !== 0) {
            img.style.transform = "rotate(" + toString(rot) + "deg)";
        }
        ctx.drawImage(img, x, y, w, h);

    })
}