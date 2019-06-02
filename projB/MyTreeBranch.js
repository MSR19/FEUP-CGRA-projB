/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
	constructor(scene, x, z) {
        super(scene);
        this.init(scene);
        this.scene = scene;
        this.x = x;
        this.z = z;
        this.apanhado = false;
    }

	init(scene) {
        this.cilinder = new MyCylinder(this.scene, 20);
        this.baseBotton = new MyPrismBase(this.scene, 20);
        this.baseTop = new MyPrismBase(this.scene, 20);

        this.materialBranch = new CGFappearance(this.scene);
		this.materialBranch.setAmbient(1, 1, 1, 1);
		this.materialBranch.setDiffuse(1, 1, 1, 1);
		this.materialBranch.setSpecular(1, 1, 1, 1);
        this.materialBranch.setShininess(120);
        
        this.textureBrach = new CGFtexture(this.scene, "images/Wood.jpg");
		this.materialBranch.setTexture(this.textureBrach);
        this.materialBranch.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBranchBase = new CGFappearance(this.scene);
		this.materialBranchBase.setAmbient(1, 1, 1, 1);
		this.materialBranchBase.setDiffuse(1, 1, 1, 1);
		this.materialBranchBase.setSpecular(1, 1, 1, 1);
        this.materialBranchBase.setShininess(120);
        
        this.textureBrachBase = new CGFtexture(this.scene, "images/WoodBase.jpg");
		this.materialBranchBase.setTexture(this.textureBrachBase);
        this.materialBranchBase.setTextureWrap('REPEAT', 'REPEAT');


    }

	display () {    
        if (!this.apanhado) { 
        this.scene.pushMatrix();
        this.scene.translate(this.x,0,this.z);
        this.materialBranch.apply();
        this.scene.scale(0.5, 2, 0.5);
        this.cilinder.display();
        this.materialBranchBase.apply();
        this.baseBotton.display();
        this.scene.translate(0,1,0);
        this.baseTop.display();
        this.scene.popMatrix();
        }
    }
    
    enableNormalViz() {
        this.cilinder.enableNormalViz();
    }
    
    disableNormalViz() {
        this.cilinder.disableNormalViz();
    }

}

