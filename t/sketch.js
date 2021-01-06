var kinectron;
let myCanvas = null;
let count = 0;

function setup() {
  myCanvas = createCanvas(400, 400);
noStroke();
  kinetron = new Kinectron("533881c5bd67.ngrok.io");
  kinetron.setKinectType("Azure");
  kinetron.makeConnection();
  kinetron.startTrackedBodies(callback);
}


function draw() {
  //background(220);
}

function callback(body) {
  // console.log("test", body)
  
  background(0, 20);
  
  
  // Draw a circle at the location of each joint
  for (let i = 0; i < body.skeleton.joints.length; i++) {
    joint = body.skeleton.joints[i];

    fill(100);

    // Map Kinect joint data to canvas size
    ellipse(
      joint.depthX * myCanvas.width,
      joint.depthY * myCanvas.height,
      15,
      15
    );
  }
}
