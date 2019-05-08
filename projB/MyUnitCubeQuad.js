/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

	init(scene) {
		this.quadFront = new MyQuad(scene);
        this.quadBack = new MyQuad(scene);
        this.quadLeft = new MyQuad(scene);
        this.quadRight = new MyQuad(scene);
        this.quadTop = new MyQuad(scene);
        this.quadButton = new MyQuad(scene);

        this.textureTop = new CGFtexture(this.scene, 'images/mineTop.png');
        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(1, 1, 1, 1.0);
        this.materialTop.setDiffuse(1, 1, 1, 1.0);
        this.materialTop.setSpecular(1, 1, 1, 1.0);
        this.materialTop.setShininess(10.0);
        this.materialTop.setTexture(this.textureTop);
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.textureBotton = new CGFtexture(this.scene, 'images/mineBottom.png');
        this.materialBotton = new CGFappearance(this.scene);
        this.materialBotton.setAmbient(1, 1, 1, 1.0);
        this.materialBotton.setDiffuse(1, 1, 1, 1.0);
        this.materialBotton.setSpecular(1, 1, 1, 1.0);
        this.materialBotton.setShininess(10.0);
        this.materialBotton.setTexture(this.textureBotton);
        this.materialBotton.setTextureWrap('REPEAT', 'REPEAT');

        this.textureSide = new CGFtexture(this.scene, 'images/mineSide.png');
        this.materialSide = new CGFappearance(this.scene);
        this.materialSide.setAmbient(1, 1, 1, 1.0);
        this.materialSide.setDiffuse(1, 1, 1, 1.0);
        this.materialSide.setSpecular(1, 1, 1, 1.0);
        this.materialSide.setShininess(10.0);
        this.materialSide.setTexture(this.textureSide);
        this.materialSide.setTextureWrap('REPEAT', 'REPEAT');
    }

	display () {
        //Sides    
        this.materialSide.apply();
       
        //Front QUAD
            this.scene.pushMatrix();
            this.scene.translate(0,0,0.5);
            if (this.scene.texturaFiltering)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.quadFront.display(); 
            this.scene.popMatrix();

        //Back QUAD
            this.scene.pushMatrix();
            this.scene.translate(0,0,-0.5);
            this.scene.rotate(Math.PI,0,1,0);
            if (this.scene.texturaFiltering)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.quadBack.display();
            this.scene.popMatrix();

        //Left QUAD
            this.scene.pushMatrix();
            this.scene.translate(-0.5,0,0);
            this.scene.rotate(-Math.PI/2,0,1,0);
            if (this.scene.texturaFiltering)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.quadLeft.display();
            this.scene.popMatrix();

        //Right QUAD
            this.scene.pushMatrix();
            this.scene.translate(0.5,0,0);
            this.scene.rotate(Math.PI/2,0,1,0);
            if (this.scene.texturaFiltering)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.quadRight.display();
            this.scene.popMatrix();

        //Top QUAD
            this.materialTop.apply();
            this.scene.pushMatrix();
            this.scene.translate(0,0.5,0);
            this.scene.rotate(-Math.PI/2,1,0,0);
            if (this.scene.texturaFiltering)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.quadTop.display();
            this.scene.popMatrix();

        //Button QUAD
            this.materialBotton.apply();
            this.scene.pushMatrix();
            this.scene.translate(0,-0.5,0);
            this.scene.rotate(Math.PI/2,1,0,0);
            if (this.scene.texturaFiltering)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.quadButton.display();
            this.scene.popMatrix();

    }
    
    enableNormalViz() {
        this.quadFront.enableNormalViz();
        this.quadBack.enableNormalViz();
        this.quadLeft.enableNormalViz();
        this.quadRight.enableNormalViz();
        this.quadTop.enableNormalViz();
        this.quadButton.enableNormalViz();
    }
    
    disableNormalViz() {
        this.quadFront.disableNormalViz();
        this.quadBack.disableNormalViz();
        this.quadLeft.disableNormalViz();
        this.quadRight.disableNormalViz();
        this.quadTop.disableNormalViz();
        this.quadButton.disableNormalViz();
    }
        
    redifeMaterials (newMaterial) {
        this.materialBotton = newMaterial;
        this.materialSide = newMaterial;
        this.materialTop = newMaterial;
    }

}

