/**
 * MyRoof
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyRoof extends CGFobject {
    constructor(scene) {
        super(scene);

        this.init(scene);

        this.scene = scene;

    }
    init(scene) {
        this.triangle = new MyHouseTriangle(scene);
        this.quad = new MyQuad(scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0.5);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(-0.5, 0, 0.5);
        this.triangle.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-0.25, 0.25, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(1, 0.705, 1);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.25, 0.25, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(1, 0.705, 1);
        this.quad.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.triangle.enableNormalViz();
        this.quad.enableNormalViz();
    }

    disableNormalViz() {
        this.triangle.disableNormalViz();
        this.quad.disableNormalViz();
    } 

}