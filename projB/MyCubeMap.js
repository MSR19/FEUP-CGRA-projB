/**
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
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

        this.night = false;

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(1, 1, 1, 1.0);
        this.materialTop.setDiffuse(1, 1, 1, 1.0);
        this.materialTop.setSpecular(1, 1, 1, 1.0);
        this.materialTop.setShininess(10.0);
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBotton = new CGFappearance(this.scene);
        this.materialBotton.setAmbient(1, 1, 1, 1.0);
        this.materialBotton.setDiffuse(1, 1, 1, 1.0);
        this.materialBotton.setSpecular(1, 1, 1, 1.0);
        this.materialBotton.setShininess(10.0);
        this.materialBotton.setTextureWrap('REPEAT', 'REPEAT');

        this.materialLeft = new CGFappearance(this.scene);
        this.materialLeft.setAmbient(1, 1, 1, 1.0);
        this.materialLeft.setDiffuse(1, 1, 1, 1.0);
        this.materialLeft.setSpecular(1, 1, 1, 1.0);
        this.materialLeft.setShininess(10.0);
        this.materialLeft.setTextureWrap('REPEAT', 'REPEAT');

        this.materialFront = new CGFappearance(this.scene);
        this.materialFront.setAmbient(1, 1, 1, 1.0);
        this.materialFront.setDiffuse(1, 1, 1, 1.0);
        this.materialFront.setSpecular(1, 1, 1, 1.0);
        this.materialFront.setShininess(10.0);
        this.materialFront.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBack = new CGFappearance(this.scene);
        this.materialBack.setAmbient(1, 1, 1, 1.0);
        this.materialBack.setDiffuse(1, 1, 1, 1.0);
        this.materialBack.setSpecular(1, 1, 1, 1.0);
        this.materialBack.setShininess(10.0);
        this.materialBack.setTextureWrap('REPEAT', 'REPEAT');

        this.materialRight = new CGFappearance(this.scene);
        this.materialRight.setAmbient(1, 1, 1, 1.0);
        this.materialRight.setDiffuse(1, 1, 1, 1.0);
        this.materialRight.setSpecular(1, 1, 1, 1.0);
        this.materialRight.setShininess(10.0);
        this.materialRight.setTextureWrap('REPEAT', 'REPEAT');


        this.textureTop = new CGFtexture(this.scene, 'Images/hills_up.png');

        this.textureBotton = new CGFtexture(this.scene, 'Images/hills_dn.png');

        this.textureLeft = new CGFtexture(this.scene, 'Images/hills_lf.png');

        this.textureFront = new CGFtexture(this.scene, 'Images/hills_ft.png');

        this.textureBack = new CGFtexture(this.scene, 'Images/hills_bk.png');

        this.textureRight = new CGFtexture(this.scene, 'Images/hills_rt.png');


        this.textureNightTop = new CGFtexture(this.scene, 'Images/starfield_up.png');
        

        this.textureNightBotton = new CGFtexture(this.scene, 'Images/starfield_dn.png');
        

        this.textureNightLeft = new CGFtexture(this.scene, 'Images/starfield_lf.png');
        

        this.textureNightFront = new CGFtexture(this.scene, 'Images/starfield_ft.png');
        

        this.textureNightBack = new CGFtexture(this.scene, 'Images/starfield_bk.png');
        

        this.textureNightRight = new CGFtexture(this.scene, 'Images/starfield_rt.png');
        
    }

    display() {

        if (this.night) {
            this.materialTop.setTexture(this.textureNightTop);
            this.materialBotton.setTexture(this.textureNightBotton);
            this.materialLeft.setTexture(this.textureNightLeft);
            this.materialFront.setTexture(this.textureNightFront);
            this.materialBack.setTexture(this.textureNightBack);
            this.materialRight.setTexture(this.textureNightRight);
        }
        else {
            this.materialTop.setTexture(this.textureTop);
            this.materialBotton.setTexture(this.textureBotton);
            this.materialLeft.setTexture(this.textureLeft);
            this.materialFront.setTexture(this.textureFront);
            this.materialBack.setTexture(this.textureBack);
            this.materialRight.setTexture(this.textureRight);

        }

        this.scene.pushMatrix();

        this.scene.scale(500, 500, 500);
        //Front QUAD
        this.materialFront.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quadFront.display();
        this.scene.popMatrix();

        //Back QUAD
        this.materialBack.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(-1, 1, -1);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quadBack.display();
        this.scene.popMatrix();

        //Left QUAD
        this.materialLeft.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.quadLeft.display();
        this.scene.popMatrix();

        //Right QUAD
        this.materialRight.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quadRight.display();
        this.scene.popMatrix();

        //Top QUAD
        this.materialTop.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.quadTop.display();
        this.scene.popMatrix();

        //Button QUAD
        this.materialBotton.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quadButton.display();
        this.scene.popMatrix();

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
    
    nightMode() {
        this.night = true;
    }

    lightMode() {
        this.night = false;
    }
}

