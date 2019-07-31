var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test/recetaMedica.html', 'utf8');

var path =  require ("path") 
const base = path.resolve('test');

console.log(base)
var options = { format: 'letter', 
                orientation: 'landscape' ,
                base: `file:///${base}/`}

 
console.time('test');
pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }

  console.timeEnd('test');
});

