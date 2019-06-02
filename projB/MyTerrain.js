/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

	init(scene) {
        this.plane = new Plane(scene, 32);

        this.appearanceBW = new CGFappearance(this.scene);
		this.appearanceBW.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearanceBW.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearanceBW.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearanceBW.setShininess(120);

		this.BW = new CGFtexture(this.scene, "images/terrain.jpg");
		this.appearanceBW.setTexture(this.BW);
        this.appearanceBW.setTextureWrap('REPEAT', 'REPEAT');
        
        this.altimetry = new CGFtexture(this.scene, "images/altimetry.png");
        
        this.height = new CGFtexture(this.scene, "images/heightmap.jpg");

        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        
        this.shader.setUniformsValues({uSampler2: 1, uSampler3: 2});
    }

	display () {
        this.scene.pushMatrix();
        this.appearanceBW.apply();   
        this.altimetry.bind(1);
        this.height.bind(2);
        
        this.scene.setActiveShader(this.shader);

        
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
		this.plane.display();
        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.setDefaultAppearance();
    }
    
    enableNormalViz() {
        this.plane.enableNormalViz();
    }
    
    disableNormalViz() {
        this.plane.disableNormalViz();
    }
     
}

