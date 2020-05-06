let outputImage;

const n = []; 
const imgSize = 512; 

let angle = 0;
let count = 0;

function setup() {
  createCanvas(imgSize, imgSize);
  for (let i = 0; i < imgSize; i++) {
    n[i] = new NoiseLoop(20, -1, 1); 
  }
  generateImage();

}

function generateImage() { 
  const path = "http://localhost:8000/query"; 
  for (let i = 0; i < imgSize; i++) { 
    a[i] = n[i].value(angle); 
  }
  let da = TWO_PI / (24*60); 
  angle += da;

  const data = {
    z: a, 
    truncation: 0.15, 
  };
  httpPost(path, 'json', data, gotImage, gotError);
}

function gotError(error) { 
  console.error(error);
}


function gotImage(result) { 
  outputImage = createImg(result.image, imageReady);
  outputImage.hide();
}

function imageReady() { 
  image(outputImage, 0, 0);
  count++;
  if (angle <= TWO_PI) { 
    setTimeout(generateImage, 100);
  }
}

class NoiseLoop { 
  constructor(diameter, min, max) {
    this.diameter = diameter;
    this.min = min;
    this.max = max;
    this.cx = random(1000);
    this.cy = random(1000);
  }

  value(a) {
    let xoff = map(cos(a), -1, 1, this.cx, this.cx + this.diameter);
    let yoff = map(sin(a), -1, 1, this.cy, this.cy + this.diameter);
    let r = toxi.math.noise.simplexNoise.noise(xoff,yoff); 
    return map(r, -1, 1, this.min, this.max);
  }
}