namespace glCore {
    namespace shader {

        /**
         * @class
         * @memberof PIXI.glCore.shader
         * @param type {String}
         * @return {Number}
         */
        export function mapSize(type: string): number {
            return GLSL_TO_SIZE[type];
        }


        var GLSL_TO_SIZE = {
            'float': 1,
            'vec2': 2,
            'vec3': 3,
            'vec4': 4,

            'int': 1,
            'ivec2': 2,
            'ivec3': 3,
            'ivec4': 4,

            'bool': 1,
            'bvec2': 2,
            'bvec3': 3,
            'bvec4': 4,

            'mat2': 4,
            'mat3': 9,
            'mat4': 16,

            'sampler2D': 1
        };
    }
}
