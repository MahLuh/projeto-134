object = []
modelStatus = ""
function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
    webcan = createCapture(VIDEO)
    webcan.hide()
    
}
function draw(){
    image(webcan, 0, 0, 400, 400)
    if (status != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status")
            textSize(12)
            fill("white")
            document.getElementById("status").innerHTML = "status: objeto detectado"
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + ": " + percent + "%", objects[i].x, objects[i].y)
            noFill()
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
        
    }
}
function modelLoaded(){
   console.log("modelo inicializado")
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "detectando objeto"
}