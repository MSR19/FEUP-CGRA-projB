/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyWing extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
        this.outerx = 0;
        this.outerz = 0
        this.outery = 0;
        this.angle = -Math.PI / 3;
    }

	init(scene) {
        this.quad = new MyQuad(this.scene);
        this.triangle4 = new MyTriangle (this.scene);
        this.triangle5 = new MyTriangle (this.scene);
    }

    display() { 
        //animations

        this.scene.pushMatrix()
        this.scene.rotate(this.angle, 0, 0, 1);
        this.scene.translate(1.5, 0, 0);
        this.displayfirstpart();
        this.scene.popMatrix();
        this.scene.pushMatrix()
        this.outery = Math.sin(this.angle) * 2;
        this.outerx = Math.cos(this.angle) * 2;
        this.scene.translate(this.outerx, this.outery, this.outerz);
        this.displayouterpart();
        this.scene.popMatrix();
    }
    
    enableNormalViz() {
        this.triangle1.enableNormalViz();
        this.triangle2.enableNormalViz();
        this.triangle3.enableNormalViz();
        this.triangle4.enableNormalViz();
        this.triangle5.enableNormalViz();
    }
    
    disableNormalViz() {
        this.triangle1.disableNormalViz();
        this.triangle2.disableNormalViz();
        this.triangle3.disableNormalViz();
        this.triangle4.disableNormalViz();
        this.triangle5.disableNormalViz();
    }
    
    update(t) {
        this.angle = Math.sin(t / 500 * Math.PI) - Math.PI *2;
    }

    displayfirstpart() {
  
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0.26);
        this.scene.scale(2, 1, 0.53);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    }

    displayouterpart() {


        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.7, 1, 1.2);
        this.triangle4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.85, 0, 0.75);
        this.scene.scale(1, 1, 0.35);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.triangle5.display();
        this.scene.popMatrix();
    }

    reset() {
        this.angle = -Math.PI / 3;
    }

}