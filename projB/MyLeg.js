/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeg extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
        this.flex = true;

    }

	init(scene) {
        this.leg = new MyCylinder(this.scene,3);
        this.feet = new MyPrismBase(this.scene,3);
    }

    display() { 
        this.scene.pushMatrix();
        //Para por o log deitado
        this.scene.rotate(Math.PI,0,1,0);

        this.scene.pushMatrix();
        this.scene.scale(0.05, 1.5, 0.05);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.6, 1, 0.4);
        this.scene.translate(-0.5,0,0);
        if (this.flex) {
            this.scene.translate(0,0.1,0);
            this.scene.rotate(-Math.PI/12,0,0,1);
        }
        else {
            this.scene.translate(0,-0.1,0);
            this.scene.rotate(Math.PI/12,0,0,1);
        }
        this.feet.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
    
    enableNormalViz() {
        this.leg.enableNormalViz();
        this.feet.enableNormalViz();
    }
    
    disableNormalViz() {
        this.leg.disableNormalViz();
        this.feet.disableNormalViz();
    }
    
    update(grab) {
        if (grab) {
            this.flex = true;
        }
        else {
            this.flex = false;
        }
    }

    reset() {
        this.angle = -Math.PI / 3;
    }

}