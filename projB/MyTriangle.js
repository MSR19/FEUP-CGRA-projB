/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			-0.7, 0, 0.7,	//1
			-0.75, 0, 0,	//2
			0, 0, 0,	//3
			-0.7, 0, 0.7,	//4
			-0.75, 0, 0,	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			3, 4, 5,
			2, 1, 0
		];

		this.normals = [
		0,1,0,
		0,1,0,
		0,1,0,
		0,-1,0,
		0,-1,0,
		0,-1,0

		];

		this.texCoords = [
		1, 1,
		0, 1,
		0, 0,
		1, 1,
		1, 0,
		0, 0,
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

