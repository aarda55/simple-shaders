#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 pixelCoord = gl_FragCoord.xy / u_resolution;
    float borderWidth = 0.4;

    vec2 bottomLeft = step(vec2(borderWidth), pixelCoord);
    vec2 topRight =  step(vec2(borderWidth), 1.0-pixelCoord);
    float square = (bottomLeft.x * bottomLeft.y) * (topRight.x * topRight.y);

    gl_FragColor = vec4(vec3(square), 1.0);

}
