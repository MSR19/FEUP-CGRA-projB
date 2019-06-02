/**
 * Mywindow
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MydoorWall extends CGFobject {
    constructor(scene, coords) {
        super(scene);
        this.init(scene);

        this.scene = scene;
    }

    init(scene) {
        this.door = new Mydoor(scene);
        this.quad1 = new MyQuad(scene);
        this.quad2 = new MyQuad(scene);
        this.quad3 = new MyQuad(scene);
        this.texturewall = new CGFtexture(this.scene, 'images/woodwall.jpg');
        this.materialwall = new CGFappearance(this.scene);
        this.materialwall.setAmbient(1, 1, 1, 1.0);
        this.materialwall.setDiffuse(1, 1, 1, 1.0);
        this.materialwall.setSpecular(1, 1, 1, 1.0);
        this.materialwall.setShininess(10.0);
        this.materialwall.setTexture(this.texturewall);
        this.materialwall.setTextureWrap('REPEAT', 'REPEAT');

        this.texCoords = [
            0, 1,
            0.35, 0.25,
            0, 0,
            0.35, 0
        ];

        this.texcoord = [
            0, 1,
            2.2, 1,
            0, 0,
            2.2, 0
        ];
    }

    display() {
        this.materialwall.apply();
        this.scene.pushMatrix();
        this.scene.scale(10, 5, 1);
        this.scene.translate(-0.5, 0.5, 0);
        this.quad1.updateTexCoords(this.texcoord);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(2, 1, 1);
        this.scene.translate(0.5, 4.5, 0);
        this.quad2.updateTexCoords(this.texCoords);
        this.quad2.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.scale(5, 5, 1);
        this.scene.translate(0.9, 0.5, 0);
        this.quad3.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.door.display();
        this.scene.popMatrix();



    }

    enableNormalViz() {
        this.door.enableNormalViz();
        this.quad1.enableNormalViz();
        this.quad2.enableNormalViz();
        this.quad3.enableNormalViz();
    }
    
    disableNormalViz() {
        this.door.disableNormalViz();
        this.quad1.disableNormalViz();
        this.quad2.disableNormalViz();
        this.quad3.disableNormalViz();
    }   
}

