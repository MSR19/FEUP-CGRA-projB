/**
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene, coords) {
        super(scene);
        this.initBuffers();
        this.scene = scene;
        //if (coords != undefined)
            //this.updateTexCoords(coords);
    }

    initBuffers() {
        this.vertices = [
            0 , 0, 0,	//0
            0.5, 0.5, 0,	//1
            1, 0, 0	//2
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            2, 1, 0,
            0, 1, 2
            
        ];

        this.normals = [
            0,0,1,
            0,0,1,
            0,0,1
        ];
		/*
            1, 0, 4,
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

        this.texCoords = [
            1, 0,
            0, 1,
            -1, -1,
           
        ]
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0, 165/255, 0, 1.0);
        this.material.setDiffuse(0, 165/255, 0, 1.0);
        this.material.setSpecular(0, 165/255, 0, 1.0);
        this.material.setShininess(10.0);
    }

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
    updateTexCoords(coords) {
        this.texCoords = [...coords];
        this.updateTexCoordsGLBuffers();
    }

    Display () {
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.scale(3, 2, 2);
        this.display();
        this.scene.popMatrix();
    }
}

