self.__uv$config = {
    prefix: 'uv/service',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv/uv.handler.js',
    bundle: '/uv/uv/uv.bundle.js',
    config: '/uv/uv/uv.config.js',
    sw: '/uv/uv/uv.sw.js',
};