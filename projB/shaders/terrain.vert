attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler3;
varying vec2 vTextureCoord;


void main() {
	
	vTextureCoord = aTextureCoord;
	
	vec4 filter = texture2D(uSampler3,vTextureCoord);
	vec3 offSet = vec3(0,0,filter.r* 10.0);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+ offSet , 1.0);
}

