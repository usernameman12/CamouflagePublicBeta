self.__uv$config = {
    prefix: 'tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/public/static/uv/uv.handler.js',
    bundle: '/public/static/uv/uv.bundle.js',
    config: '/public/staticuv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
