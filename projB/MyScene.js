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
        this.ruleX1 = "F[-X][X]F[-X]+FX";
        this.ruleX2 = "F[X][-X]F[X]-FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lightning = new MyLightning(this);
        this.tree = new MyTree(this);


        this.treeaxiom = "X"; //
        this.treeruleF = "FF"; //
        this.treeruleX = "F[-X][X]F[-X]+FX";
        this.treeruleX1 = "F[-X][X]+X";
        this.treeruleX2 = "F[+X]-X";
        this.treeruleX4 = "F[/X][X]F[\\X]+X";
        this.treeruleX5 = "F[\X][X]/X";
        this.treeruleX6 = "F[/X]\X";
        this.treeruleX7 = "F[^X][X]F[&X]^X";
        this.treeruleX8 = "F[^X]&X";
        this.treeruleX9 = "F[&X]^X";
        this.treeangle = 30.0;
        this.treeiterations = 6;
        this.treescaleFactor = 0.8;

        this.doGenerateLightning = function () {
            this.lightning.generate(
                this.axiom,
                {
                    "F": [this.ruleF],
                    "X": [this.ruleX1, this.ruleX2]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        this.doGenerateTree = function () {
            this.tree.generate(
                this.treeaxiom,
                {
                    "F": [this.treeruleF],
                    "X": [this.treeruleX, this.treeruleX1, this.treeruleX2, this.treeruleX3, this.treeruleX4, this.treeruleX5, this.treeruleX6, this.treeruleX7, this.treeruleX8, this.treeruleX9]
                },
                this.treeangle,
                this.treeiterations,
                this.treescaleFactor
            );
        }

        this.doGenerateTree();
        this.doGenerateLightning();

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyBetterHouse(this);
        this.cubeMap = new MyCubeMap(this);
        this.terrain = new MyTerrain(this);
        this.bird = new MyBird(this, 0, 4, 0, 0, 0);
        this.nest = new MyNest(this, 17, 5, 5);
        this.testLeg = new MyLeg(this);
        this.logs = [];
        this.logs.push(new MyTreeBranch(this, 0, 0));

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayPlane = false;
        this.displayMap = false;
        this.displayHouse = false;
        this.displayTerrain = false;
        this.displayBird = false;
        this.displayLogs = false;
        this.displayNest = false;
        this.displayLighting = false;
        this.displayForest = false;
        this.resetLogs = false;
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

        //lighting material
        this.materialLighting = new CGFappearance(this);
        this.materialLighting.setAmbient(1, 1, 0, 1);
        this.materialLighting.setDiffuse(1, 1, 0, 1);
        this.materialLighting.setSpecular(1, 1, 0, 1);
        this.materialLighting.setShininess(120);
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
    update(t) {
        this.checkSticks();
        this.bird.update(t);
        this.checkKeys(t);
        this.lightning.update(t);
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

        // ---- BEGIN Primitive drawing section

        if (this.displayLighting) {
            this.materialLighting.apply();
            this.pushMatrix();
            this.translate(-25, 37, -25);
            this.scale(0.5, 0.5, 0.5);
            this.lightning.display();
            this.popMatrix();
        }

        if (this.displayForest) {
            this.tree.display();
        }

        if (this.displayMap)
            this.cubeMap.display();

        if (this.displayPlane) {
            this.materialPlane.apply();
            this.pushMatrix();
            this.rotate(-0.5 * Math.PI, 1, 0, 0);
            this.scale(500, 500, 1);
            this.plane.display();
            this.popMatrix();
        }

        if (this.displayHouse) {
            this.pushMatrix();
            this.translate(12, 0, 0);
            this.house.display();
            this.popMatrix();
        }

        if (this.displayTerrain) {
            this.terrain.display();
        }

        if (this.displayBird) {
            this.bird.display(this.scaleFactor);
        }

        if (this.displayLogs) {
            for (var i = 0; i != this.logs.length; i++) {
                this.pushMatrix();
                //Para por o log deitado
                this.rotate(Math.PI / 2, 1, 0, 0);
                this.translate(0, -1, -0.5);
                this.scale(0.5, 1, 0.5);
                this.translate(0, 0, 0.5);
                this.logs[i].display();
                this.popMatrix();

                if (this.resetLogs)
                    this.logs[i].apanhado = false;
            }
        }



        if (this.displayNest) {
            this.nest.display();
        }
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
            if (this.lightning.animation == false) {
                this.doGenerateLightning();
                this.lightning.animation = true;
                this.lightning.startAnimation(t);
            }
        }

        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            this.bird.descent(t);
            keysPressed = true;
        }

        if (keysPressed) console.log(text);
    }

    checkSticks() {

        if (this.bird.descending) {
            if (this.bird.y < 3) {
                if (this.displayLogs) {
                    for (let i = 0; i != this.logs.length; i++) {
                        if (!this.logs[i].apanhado) {
                            if ((Math.abs(this.bird.x - this.logs[i].x) < 1) && (Math.abs(this.bird.z - this.logs[i].z) < 1)) {
                                this.bird.catch = true;
                                this.logs[i].apanhado = true;
                            }
                        }
                    }
                }
                if (this.displayNest) {
                    if (this.bird.catch && (Math.abs(this.bird.x - this.nest.x) < 1) && (Math.abs(this.bird.z - this.nest.z) < 1)) {
                        this.nest.newLog();
                        this.bird.catch = false;
                    }
                }
            }
        }
    }
}