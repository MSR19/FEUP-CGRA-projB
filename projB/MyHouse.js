/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.init(scene);
        
        this.scene = scene;

    }
    init(scene) {
        this.pyramid = new MyPyramid(scene, 4, 1);
        this.cube = new MyUnitCubeQuad(scene);
        this.prism1 = new MyPrism(scene, 6, 1);
        this.prism2 = new MyPrism(scene, 6, 1);
        this.prism3 = new MyPrism(scene, 6, 1);
        this.prism4 = new MyPrism(scene, 6, 1);

        this.textureMarble = new CGFtexture(scene, 'Images/marmore.jpg');
        this.materialMarble = new CGFappearance(scene);
        this.materialMarble.setAmbient(1, 1, 1, 1.0);
        this.materialMarble.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.materialMarble.setSpecular(1, 1, 1, 1.0);
        this.materialMarble.setShininess(10.0);
        this.materialMarble.setTexture(this.textureMarble);
        this.materialMarble.setTextureWrap('REPEAT','REPEAT');

        this.materialRoof = new CGFappearance(scene);
        this.materialRoof.setAmbient(1, 1, 1, 1.0);
        this.materialRoof.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.materialRoof.setSpecular(1, 1, 1, 1.0);

        this.textureWall = new CGFtexture(scene, 'Images/woodwall.jpg');
        this.materialWall = new CGFappearance(scene);
        this.materialWall.setAmbient(1, 1, 1, 1.0);
        this.materialWall.setDiffuse(1, 1, 1, 1.0);
        this.materialWall.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.materialWall.setShininess(10.0);
        this.materialWall.setTexture(this.textureWall);
        this.materialWall.setTextureWrap('REPEAT','REPEAT');
        this.cube.redifeMaterials(this.materialWall);
    }

    Display() {
        this.materialRoof.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.scale(3, 3, 3);
        this.pyramid.display();
        this.scene.popMatrix();


        
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(2.2, 2, 2.2);
        this.cube.display();
        this.scene.popMatrix();

        this.materialMarble.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.2, 2, 0.2);
        this.scene.translate(8.5, 0, 8.5);
        this.prism1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2, 2, 0.2);
        this.scene.translate(8.5, 0, -8.5);
        this.prism2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2, 2, 0.2);
        this.scene.translate(-8.5, 0, 8.5);
        this.prism3.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.scale(0.2, 2, 0.2);
        this.scene.translate(-8.5, 0, -8.5);
        this.prism4.display();
        this.scene.popMatrix();


    }

    enableNormalViz() {
        this.pyramid.enableNormalViz();
        this.cube.enableNormalViz();
        this.prism1.enableNormalViz();
        this.prism2.enableNormalViz();
        this.prism3.enableNormalViz();
        this.prism4.enableNormalViz();
    }
    disableNormalViz() {
        this.pyramid.disableNormalViz();
        this.cube.disableNormalViz();
        this.prism1.disableNormalViz();
        this.prism2.disableNormalViz();
        this.prism3.disableNormalViz();
        this.prism4.disableNormalViz();
    } 
}