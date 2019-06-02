/**
 * Mywindow
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Mydoor extends CGFobject {
    constructor(scene, coords) {
        super(scene);
        this.init(scene);
        
        this.scene = scene;
    }

    init(scene) {
        this.texturedoor = new CGFtexture(this.scene, 'images/door.jpg');
        this.materialdoor = new CGFappearance(this.scene);
        this.materialdoor.setAmbient(1, 1, 1, 1.0);
        this.materialdoor.setDiffuse(1, 1, 1, 1.0);
        this.materialdoor.setSpecular(1, 1, 1, 1.0);
        this.materialdoor.setShininess(10.0);
        this.materialdoor.setTexture(this.texturedoor);
        this.materialdoor.setTextureWrap('REPEAT', 'REPEAT');
        this.door = new MyQuad(scene);
    }

    display() {
        this.materialdoor.apply();
        this.scene.pushMatrix();
        this.scene.scale(2, 4, 1);
        this.scene.translate(0.5, 0.5, 0);
        this.door.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.door.enableNormalViz();
    }
    
    disableNormalViz() {
        this.door.disableNormalViz();
    }   
}

