/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySphereTop extends CGFobject {
	constructor(scene) {
		super(scene);
		this.slices = 8;
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [];
		this.normals = [];
		//Counter-clockwise reference of vertices
		this.indices = [];
		this.texCoords = [];
		
		var ang = 2*Math.PI/this.slices;
		for(var i = 0; i < 4; i++) {
			//Vertices
			if (i%2 == 0) {
				this.vertices.push(Math.cos(ang*((i*2)+1)),1,Math.sin(ang*(i*2)));
				this.texCoords.push(Math.cos(ang*((i*2)+1))+1/2,Math.sin(ang*(i*2))+1/2);
			}
			if (i%2 != 0) {
				this.vertices.push(Math.cos(ang*(i*2)),1,Math.sin(ang*((i*2)+1)));
				this.texCoords.push(Math.cos(ang*((i*2)+1))+1/2,Math.sin(ang*(i*2))+1/2);
			}
		}

		this.normals.push(1,0,0);
		this.normals.push(0,0,1);
		this.normals.push(-1,0,0);
		this.normals.push(0,0,-1);

		for(var i = 0; i < this.slices; i++) {
			//Vertices
			this.vertices.push(Math.cos(ang*i),0,Math.sin(ang*i));
			this.normals.push(Math.cos(ang*i),0,Math.sin(ang*i));
			this.texCoords.push(Math.cos(ang*i)+1/2,Math.sin(ang*i)+1/2);
		}

		for (var i = 0; i != 4; i++) {
		
			this.indices.push(5+(i*2), 4+(i*2) ,i);
			
			if (7+(i*2) > 11) {
				this.indices.push(3, 4, 11);
				this.indices.push(4, 3, 0);
			}
			else {
				this.indices.push( (6+(i*2)) , 5+(i*2) , i);
				this.indices.push(i, i+1 , 6+(i*2));
			}
			
		}	
		
		var ang = 2*Math.PI/this.slices;
		for(var i = 0; i < 4; i++) {
			//Vertices
			if (i%2 == 0) {
				this.vertices.push(Math.cos(ang*((i*2)+1)),1,Math.sin(ang*(i*2)));
				this.texCoords.push(Math.cos(ang*((i*2)+1))+1/2,Math.sin(ang*(i*2))+1/2);
			}
			if (i%2 != 0) {
				this.vertices.push(Math.cos(ang*(i*2)),1,Math.sin(ang*((i*2)+1)));
				this.texCoords.push(Math.cos(ang*((i*2)+1))+1/2,Math.sin(ang*(i*2))+1/2);
			}
			this.normals.push(0,1,0);
		}

		this.indices.push(14,13,12);
		this.indices.push(12,15,14);
		this.indices.push(14,15,12);
		this.indices.push(12,13,14);



		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers()
	}
}
