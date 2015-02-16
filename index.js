module.exports = function (input, options) {
    options = options || {};
    
    var size    = options.size    = options.size    || 4;
    var lineEnd = options.lineEnd = options.lineEnd || '\n';
        
    var space = (function () {
        var   i = 0
            , r = '';
        
        for (; i < size; i++) {
            r += ' ';
        }
        
        return r;
    })();
    
    return input.split(lineEnd).map(function (string) {
        var offset = 0;
        
        return string.replace(/\t/g, function (x, i) {
            var length = size - (i + offset) % size;
            offset += length - 1;
            return space.substring(0, length);
        });
    }).join(lineEnd);
};