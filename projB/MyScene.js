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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubemap = new MyCubeMap(this);
        this.quad = new MyQuad(this);
        this.house = new MyHouse(this);
        this.bigHillFormation  = [ new MyVoxeHill(this, 8), new MyVoxeHill(this,5) ];
        this.smallHillFormation = [ new MyVoxeHill(this, 4), new MyVoxeHill(this,3), new MyVoxeHill(this, 2) ];
        this.treeGroupPatch = [ new MyTreeGroupPatch(this, 'Images/madeira.png', 'Images/treetop.png'), new MyTreeGroupPatch(this, 'Images/madeira.png', 'Images/treetop.png'), new MyTreeGroupPatch(this, 'Images/madeira.png', 'Images/treetop.png') ];
        this.treerowpatch = [ new MyTreeRowPatch(this, 'Images/madeira.png', 'Images/treetop.png'), new MyTreeRowPatch(this, 'Images/madeira.png', 'Images/treetop.png'), new MyTreeRowPatch(this, 'Images/madeira.png', 'Images/treetop.png') ];
        this.fire = new MyFireplace(this);
        this.table = new MyTable(this);
        this.betterhouse = new MyBetterHouse(this);

        //Materials
        this.textureFloor = new CGFtexture(this, 'Images/mineTop.png');
        this.materialFloor = new CGFappearance(this);
        this.materialFloor.setAmbient(1, 1, 1, 1.0);
        this.materialFloor.setDiffuse(1, 1, 1, 1.0);
        this.materialFloor.setSpecular(1, 1, 1, 1.0);
        this.materialFloor.setShininess(10.0);
        this.materialFloor.setTexture(this.textureFloor);
        this.materialFloor.setTextureWrap('REPEAT', 'REPEAT');
        

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displayCubemap = true;
        this.displayFloor = true;
        this.displayHouse = false;
        this.displayBigHillFormation = false;
        this.displaySmallHillFormation = false; 
        this.displayTreeGroupPatch = false;
        this.displayTreeRowPatch = false;
        this.displayFire = false;
        this.displayTable = false;
        this.displayBetterHouse = false;
        this.displayNight = false;

        this.displayNoramls = false;
    }
    
    initLights() {
        //if (this.displayNight) {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
        //}
        //else {
        this.lights[1].setPosition(-3,1,3, 1);
        this.lights[1].setDiffuse(1, 0.2, 0.2, 1.0);
        this.lights[1].setConstantAttenuation(1);
        this.lights[1].enable();
        this.lights[1].update();
        this.lights[1].disable();
        //}
        this.lights[2].setPosition(15, 2, 5, 1);
        this.lights[2].setDiffuse(0.2, 0.2, 0.8, 1.0);
        this.lights[2].setConstantAttenuation(0.5);
        this.lights[2].enable();
        this.lights[2].update();
        this.lights[2].disable();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 15, 45), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        if (this.displayNight) {
            this.lights[0].disable();
            this.lights[0].update();
            this.lights[1].enable();
            this.lights[1].update();
            this.lights[2].enable();
            this.lights[2].update();
        }
        else {
            this.lights[2].disable();
            this.lights[2].update();
            this.lights[1].disable();
            this.lights[1].update();
            this.lights[0].enable();
            this.lights[0].update();
        }

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();


        if (this.displayBetterHouse) {
            this.betterhouse.display();
        }
        
        if (this.displayTable) {
            this.pushMatrix();
            this.translate(-1,0,4);
            this.scale(0.25,0.25,0.25);
            this.table.display();
            this.popMatrix();
        }

        // ---- BEGIN Primitive drawing section
        if (this.displayCubemap) {
            if (this.displayNight) { this.cubemap.nightMode(); }
            else { this.cubemap.lightMode(); }
            this.cubemap.display();
        }
        
        if (this.displayFloor) {
            this.quad.updateTexCoords([0, 100,100, 100,0, 0,100, 0]);
            this.materialFloor.apply();
            this.pushMatrix();
            this.rotate(-Math.PI/2,1,0,0);
            this.scale(100,100,0);
            this.quad.display();
            this.popMatrix();
        }

        if (this.displayHouse) {
            this.house.Display();
        }

        if (this.displayBigHillFormation) 
        {
            this.pushMatrix();
            this.translate(-20,0.5,-20);
            this.bigHillFormation[0].display();
            this.translate(6,0,0);
            this.bigHillFormation[1].display();
            this.popMatrix();
        }

        if (this.displaySmallHillFormation) 
        {
            this.pushMatrix();
            this.translate(-20,0.5,15);
            this.smallHillFormation[0].display();
            this.translate(2,0,2);
            this.smallHillFormation[1].display();
            this.translate(2,0,2);
            this.smallHillFormation[2].display();
            this.popMatrix();
        }

        if (this.displayTreeGroupPatch) {
            this.pushMatrix();
            this.translate(25,0,-30);
            this.treeGroupPatch[0].display();
            this.translate(0,0,24);
            this.treeGroupPatch[1].display();
            this.translate(0,0,24);
            this.treeGroupPatch[2].display();
            this.popMatrix();
        }
        if (this.displayTreeRowPatch) {
            this.pushMatrix();
            this.translate(-25,0,40);
            this.treerowpatch[0].display();
            this.translate(50,0,0);
            this.treerowpatch[1].display();
            this.popMatrix();

            this.pushMatrix();
            this.rotate(Math.PI/2,0,1,0);
            this.translate(0,0,-40);
            this.treerowpatch[2].display();
            this.popMatrix();
        }

        if (this.displayFire) 
        {
        this.pushMatrix();
        this.translate(-3,0,3); 
        this.scale(0.5,0.5,0.5);
        this.fire.display();
        this.popMatrix();
        }

        if (this.displayNoramls) {
            if (this.displayTable) this.table.enableNormalViz();
            if (this.displayBetterHouse) this.betterhouse.enableNormalViz();
            if (this.displayCubemap) this.cubemap.enableNormalViz();
            if (this.displayFloor) this.quad.enableNormalViz();
            if (this.displayHouse) this.house.enableNormalViz();
            if (this.displayBigHillFormation) {
                this.bigHillFormation[0].enableNormalViz();
                this.bigHillFormation[1].enableNormalViz();
            }
            if (this.displaySmallHillFormation) {
                this.smallHillFormation[0].enableNormalViz();
                this.smallHillFormation[1].enableNormalViz();
                this.smallHillFormation[2].enableNormalViz();
            }
            if (this.displayTreeGroupPatch) {
                this.treeGroupPatch[0].enableNormalViz();
                this.treeGroupPatch[1].enableNormalViz();
                this.treeGroupPatch[2].enableNormalViz();
            }
            if (this.displayTreeRowPatch) {
                this.treerowpatch[0].enableNormalViz();
                this.treerowpatch[1].enableNormalViz();
                this.treerowpatch[2].enableNormalViz();
            }
            if (this.displayFire) {
                this.fire.enableNormalViz();
            }
        }
        else {
            this.table.disableNormalViz();
            this.betterhouse.disableNormalViz();
            this.cubemap.disableNormalViz();
            this.quad.disableNormalViz();
            this.house.disableNormalViz();
            this.bigHillFormation[0].disableNormalViz();
            this.bigHillFormation[1].disableNormalViz();
            this.smallHillFormation[0].disableNormalViz();
            this.smallHillFormation[1].disableNormalViz();
            this.smallHillFormation[2].disableNormalViz();
            this.treeGroupPatch[0].disableNormalViz();
            this.treeGroupPatch[1].disableNormalViz();
            this.treeGroupPatch[2].disableNormalViz();
            this.treerowpatch[0].disableNormalViz();
            this.treerowpatch[1].disableNormalViz();
            this.treerowpatch[2].disableNormalViz();
            this.fire.disableNormalViz();
        }
        // ---- END Primitive drawing section
    }
}