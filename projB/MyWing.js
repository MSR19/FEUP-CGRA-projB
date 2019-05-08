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
    }

	init(scene) {
        this.triangle1 = new MyTriangle (this.scene);
        this.triangle2 = new MyTriangle (this.scene);
        this.triangle3 = new MyTriangle (this.scene);
        this.triangle4 = new MyTriangle (this.scene);
        this.triangle5 = new MyTriangle (this.scene);
    }

	display () {     
        this.scene.pushMatrix();
        this.scene.scale(2, 1, 0.75);
        this.triangle1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(2, 1, 0.75);
        this.scene.rotate(-Math.PI, 0, 1, 0);
        this.scene.translate(0.70, 0, -0.70);
        this.triangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.1, 0, 0.52);
        this.scene.scale(2, 1, 0.5);
        this.triangle3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(0, 0, 0);
        this.scene.scale(0.7, 1, 1.2);
        this.triangle4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.85, 0, 0.75);
        this.scene.scale(1, 1, 0.35);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.triangle5.display();
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

}

