/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Objects connected to MyInterface
        this.axiom = "X"; //
        this.ruleF = "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lightning = new MyLightning(this);

        this.doGenerate = function () {
            this.lightning.generate(
                this.axiom,
                {
                    "F": [this.ruleF],
                    "X": [this.ruleX]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        this.doGenerate();
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse (this);
        this.cubeMap = new MyCubeMap (this);
        this.terrain = new MyTerrain(this);
        this.bird = new MyBird(this, 0, 4, 0, 0, 0);


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayPlane = false;
        this.displayMap = false;
        this.displayHouse = false;
        this.displayTerrain = false;
        this.scaleFactor = 1;
        this.speedFactor = 0.1;

        //plane material 
        this.materialPlane = new CGFappearance(this);
		this.materialPlane.setAmbient(1, 1, 1, 1);
		this.materialPlane.setDiffuse(1, 1, 1, 1);
		this.materialPlane.setSpecular(1, 1, 1, 1);
        this.materialPlane.setShininess(120);
        
        this.texturePlane = new CGFtexture(this, "images/mineTop.png");
		this.materialPlane.setTexture(this.texturePlane);
        this.materialPlane.setTextureWrap('REPEAT', 'REPEAT');
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t){
        this.checkKeys(t);
        if (this.lightning.animation) {
            this.lightning.update(t);
        }

    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        
        this.bird.display(this.scaleFactor);
        // ---- BEGIN Primitive drawing section
        this.lightning.display(); 

        if (this.displayMap)
            this.cubeMap.display();

        if (this.displayPlane) {
            this.materialPlane.apply();
            this.pushMatrix();
            this.rotate(-0.5*Math.PI, 1, 0, 0);
            this.scale(500, 500, 1);
            this.plane.display();
            this.popMatrix();
        }

        if (this.displayHouse) {
            this.pushMatrix();
            this.translate(8, 0, 0);
            this.house.display();
            this.popMatrix();
        }

        if (this.displayTerrain)
            this.terrain.display();
        
        this.bird.display(this.scaleFactor);
        
        // ---- END Primitive drawing section
    }


    checkKeys(t) {
        var text = "Keys pressed: "; var keysPressed = false;
        // Check for key codes e.g. in ​https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            this.bird.accelerate(0.1 * this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            this.bird.accelerate(-0.1 * this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            this.bird.turn(0.2 * this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            this.bird.turn(-0.2 * this.speedFactor);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.bird.reset();
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            this.lightning.animation = true;
            this.lightning.startAnimation(t);
        }
        if (keysPressed) console.log(text);
    }
}