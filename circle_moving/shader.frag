#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleshape(vec2 position, float radius){
    return step(tan(sin(u_time)), length(position-vec2(sin(cos(u_time)))));
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;
    float circle = circleshape(position, 0.2);

    vec3 color = vec3(0.0);

    color = vec3(circle);

    gl_FragColor = vec4(color,1);
}