
const h = 100;
const w = 150;
const fps = 5;
let array = new Array(w * h).fill(0);

// background burning effect created by creating an x by x array and colouring the cells of that array
let canvas = document.getElementById('myCanvas');
let context = document.getElementById('myCanvas').getContext('2d');
requestAnimationFrame(background);
function background() {
    for (let i = 0; i < w; i++)
        array[i + w] = Math.random() * 255;

    for (let y = h; y > 1; y--)
        for (let x = 0; x < w; x++) {
            let i = y * w + x;
            array[i] = Math.floor((                
                array[(y - 1) * w + (x - 1 + w) % w] +
                array[(y - 1) * w + (x + w) % w] +     
                array[(y - 1) * w + (x + 1 + w) % w] +
                array[(y - 2) * w + (x + w) % w]
            ) / 4.04);
        }

    for (let i = w * 4; i < w * h; i++) {
        context.beginPath();
        context.rect((i % w) * 10, (h - Math.floor(i / w)) * 10, 10, 10);
        context.fillStyle = 'rgb(' + array[i] + ',0,0)';
        context.fill();
    }

    // limit fps
    setTimeout(() => {
        requestAnimationFrame(background);
    }, 1000 / fps);
        

}