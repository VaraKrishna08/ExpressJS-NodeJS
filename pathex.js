const path=require('path');

var p=path.normalize('abc\\def\\xyz\\..\\');
console.log(p);
var p1=path.normalize('abc\\def\\xyz\\..\\ijk\\..\\');
console.log(p1)

var a=path.dirname('C:\\abc\\dv\\k.css')
console.log(a)

var basename=path.basename('C:\\abc\\dv\\k.css')
console.log(basename)

var extname=path.extname('C:\\abc\\dv\\k.html');
console.log(extname)

var relative=path.relative('D:\\abc\\node','E:\\abc\\daa')
console.log(relative)

var resolve=path.resolve('\\daa','\\node','\abc\\daa')
console.log(resolve)