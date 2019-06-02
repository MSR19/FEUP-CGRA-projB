/**
 * Mybetterhouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBetterHouse extends CGFobject {
    constructor(scene) {
        super(scene);

        this.init(scene);

        this.scene = scene;

    }
    init(scene) {
        this.roof = new MyRoof(scene, 4, 1);
        this.atras = new MyQuad(scene);
        this.side1 = new MyQuad(scene);
        this.side2 = new MyQuad(scene);
        this.frente = new MydoorWall(scene);
        this.texturewall = new CGFtexture(this.scene, 'images/woodwall.jpg');
        this.materialwall = new CGFappearance(this.scene);
        this.materialwall.setAmbient(1, 1, 1, 1.0);
        this.materialwall.setDiffuse(1, 1, 1, 1.0);
        this.materialwall.setSpecular(1, 1, 1, 1.0);
        this.materialwall.setShininess(10.0);
        this.materialwall.setTexture(this.texturewall);
        this.materialwall.setTextureWrap('REPEAT', 'REPEAT');


        this.textureroof = new CGFtexture(this.scene, 'images/roof.jpg');
        this.materialroof = new CGFappearance(this.scene);
        this.materialroof.setAmbient(1, 1, 1, 1.0);
        this.materialroof.setDiffuse(1, 1, 1, 1.0);
        this.materialroof.setSpecular(1, 1, 1, 1.0);
        this.materialroof.setShininess(10.0);
        this.materialroof.setTexture(this.textureroof);
        this.materialroof.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.materialwall.apply();
        this.scene.pushMatrix();
        this.scene.translate(-10, 2.5, -5);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.scale(10, 5, 1);
        this.side1.display(); 
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(7, 2.5, -5);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(10, 5, 1);
        this.side2.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-1.5, 2.5, -10);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(17, 5, 1);
        this.atras.display();
        this.scene.popMatrix();


        this.materialroof.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 5, -5);
        this.scene.scale(18, 4, 11);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.roof.display();
        this.scene.popMatrix();


        this.frente.display();
    }

    enableNormalViz() {
        this.roof.enableNormalViz();
        this.atras.enableNormalViz();
        this.side1.enableNormalViz();
        this.side2.enableNormalViz();
        this.frente.enableNormalViz();
    }
    
    disableNormalViz() {
        this.roof.disableNormalViz();
        this.atras.disableNormalViz();
        this.side1.disableNormalViz();
        this.side2.disableNormalViz();
        this.frente.disableNormalViz();
    }   
}