#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler3,vTextureCoord);
	vec4 alterimetri = texture2D(uSampler2, vec2(1.0 - filter.r,1.0 - filter.r));
		
	
	gl_FragColor = color* 0.5 + alterimetri * 0.5;
}