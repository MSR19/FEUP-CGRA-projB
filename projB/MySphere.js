/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySphere extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

	init(scene) {
        this.top = new MySphereTop (this.scene);
        this.botton = new MySphereTop(this.scene);
        this.midle = new MyPrism(this.scene,8);
    }

	display () {
            //top
            this.scene.pushMatrix();
            this.scene.translate(0, 0.5, 0);
            this.scene.scale(1, 0.5, 1);
            this.top.display();
            this.scene.popMatrix();
            
            //midle
            this.scene.pushMatrix();
            this.scene.scale(1, 0.5, 1);
            this.midle.display();
            this.scene.popMatrix();

            //botton
            this.scene.pushMatrix();
            this.scene.scale(1, 0.5, 1);
            this.scene.rotate(Math.PI, 1, 0, 0);
            this.botton.display();
            this.scene.popMatrix();
    }
    
    enableNormalViz() {
        this.top.enableNormalViz();
        this.botton.enableNormalViz();
        this.midle.enableNormalViz();
    }
    
    disableNormalViz() {
        this.top.disableNormalViz();
        this.botton.disableNormalViz();
        this.midle.disableNormalViz();
    }
     
    /*
    redifeMaterials (newMaterial) {
        this.materialBotton = newMaterial;
        this.materialSide = newMaterial;
        this.materialTop = newMaterial;
    }
    */
}

