function setup() {
      createCanvas(400, 300);
      // NN 
      let lat = 56.18; let long = 43.52;
      loadJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,is_day,precipitation,cloud_cover`, gotNNData);
      // PEVEK 69.42  170.19
      lat = 69.42; long = 170.19;
      loadJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,is_day,precipitation,cloud_cover`, gotPevData);
      // derbent  42.04  48.17
      lat = 42.04; long = 48.17;
      loadJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,is_day,precipitation,cloud_cover`, gotDerData);
}

// function draw() {
// }
let tempNN;
let tempPev;
let tempDer;

function gotNNData(dataNN) {
      tempNN = dataNN.current.temperature_2m;
      // console.log(tempNN);
}
function gotPevData(dataPev) {
      tempPev = dataPev.current.temperature_2m;
}
function gotDerData(dataDer) {
      tempDer = dataDer.current.temperature_2m;
}


// console.log(tempNN);
function draw() {
      if ((tempNN) && (tempPev) && (tempDer)) {

            noStroke();

            fill(tempNN*10, 255 , tempNN*10);
            ellipse(200, 150, 200+tempNN*10, 95);
            fill(tempPev*10, 255, tempPev*10);
            ellipse(200, 50, 200+tempPev*10, 95);
            fill(tempDer*10, 255 , tempDer*10);
            ellipse(200, 250, 200+tempDer*10, 95);

            fill(0, 0 , 0);
            text(`Нижний Новгород. температура=${tempNN} градусов`, 70, 150);
            text(`сев. город Певек. температура=${tempPev} градусов`, 70, 50);
            text(`юж. город Дербент. температура=${tempDer} градусов`, 70, 250);
      }
}
