/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPrismBase extends CGFobject {
	constructor(scene, slices) {
		super(scene);
		this.slices = slices;
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [];
		this.normals = [];
		//Counter-clockwise reference of vertices
		this.indices = [];
		this.texCoords = [];
		
		//It needs at lest 3 slices
		if(this.slices < 3)
			this.slices = 3;

		//this.vertices.push(0,0,0);
		//this.normals.push(0,1,0);
		//this.texCoords.push(0.5,0.5);

		//Vertices & Normals
		var ang = 2*Math.PI/this.slices;
		for(var i = 0; i < this.slices; i++) {
			//Vertices
			this.vertices.push(Math.cos(ang*i),0,Math.sin(ang*i));
			//Normals
			this.normals.push(0,1,0);
			//TextCoords
			this.texCoords.push(Math.cos(ang*i)/2 - 0.5,Math.sin(ang*i)/2 - 0.5);
		}

		//Indice
		for(var i = 1; i < this.slices-1; i++) {
			this.indices.push( 0 , (i % (this.slices*2)) , (i+1 % (this.slices*2)));
			this.indices.push( (i+1 % (this.slices*2)) , (i % (this.slices*2)) , 0 );
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
