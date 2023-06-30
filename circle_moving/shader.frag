#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleshape1(vec2 position){
    return step(sin(u_time)*0.4,length(position-vec2(sin(u_time)*0.4)));
}
void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;
    float circle = circleshape1(position);

    vec3 color = vec3(0.0);

    color = vec3(circle);

    gl_FragColor = vec4(color,1);

}
