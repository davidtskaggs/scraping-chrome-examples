var t = document.querySelectorAll("img");
var output = {};
for (var iii = 0; iii < t.length; ++iii) {
  if (t[iii].getAttribute('data-src') !== null) {
    output[ iii ] = t[iii].getAttribute('data-src');
  }

} 
console.table(output);

var t = document.querySelectorAll("a");
var output = {};
for (var iii = 0; iii < t.length; ++iii) {
output[ iii ] = t[iii].getAttribute('href');
} console.table(output);
