/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

	init(scene) {
        this.body = new MySphere (this.scene);
        this.head = new MySphere (this.scene);
        this.rEye = new MySphereTop (this.scene);
        this.lEye = new MySphereTop (this.scene);
        this.beak = new MyPyramid (this.scene, 3, 3);
        this.rTail = new MyTriangle (this.scene);
        this.lTail = new MyTriangle (this.scene);

        this.textureFeathers = new CGFtexture(this.scene, 'images/feathers.png');
        this.materialFeathers = new CGFappearance(this.scene);
        this.materialFeathers.setAmbient(1, 1, 1, 1.0);
        this.materialFeathers.setDiffuse(1, 1, 1, 1.0);
        this.materialFeathers.setSpecular(1, 1, 1, 1.0);
        this.materialFeathers.setShininess(10.0);
        this.materialFeathers.setTexture(this.textureFeathers);
        this.materialFeathers.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBeak = new CGFappearance(this.scene);
        this.materialBeak.setAmbient(1, 1, 0, 1.0);
        this.materialBeak.setDiffuse(1, 1, 0, 1.0);
        this.materialBeak.setSpecular(1, 1, 0, 1.0);
        this.materialBeak.setShininess(10.0);

       
        this.materialEyes = new CGFappearance(this.scene);
        this.materialEyes.setAmbient(0, 0, 0, 1.0);
        this.materialEyes.setDiffuse(0, 0, 0, 1.0);
        this.materialEyes.setSpecular(0, 0, 0, 1.0);
        this.materialEyes.setShininess(10.0);;
    }

	display () {
        
        this.body.display();
        
        this.scene.pushMatrix();
        this.scene.translate(1.30, 1, 0);
        this.scene.scale(0.75, 0.8, 0.75);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.6, 1.4, -0.5);
        this.scene.scale(0.25, 0.25, 0.25);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.rEye.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(1.6, 1.4, 0.5);
        this.scene.scale(0.25, 0.25, 0.25);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.lEye.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.8, 0.8, 0);
        this.scene.scale(0.5, 0.6, 0.5);
        this.beak.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.scene.scale(3, 1, 1);
        this.scene.rotate(Math.PI/8, 1, 0, 0);
        this.lTail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.scene.scale(3, 1, 1);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.rotate(-Math.PI/8, 1, 0, 0);
        this.rTail.display();
        this.scene.popMatrix();
    }
    
    enableNormalViz() {
        this.body.enableNormalViz();
        this.head.enableNormalViz();
        this.rEye.enableNormalViz();
        this.lEye.enableNormalViz();
        this.rTail.enableNormalViz();
        this.lTail.enableNormalViz();
    }
    
    disableNormalViz() {
        this.body.disableNormalViz();
        this.head.disableNormalViz();
        this.rEye.disableNormalViz();
        this.lEye.disableNormalViz();
        this.rTail.disableNormalViz();
        this.lTail.disableNormalViz();
    }

}

