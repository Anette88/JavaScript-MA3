
var filmInfo = {
    "video" : {
        "id" : 123124123312,
        "name" : "Ecuaciones Diferenciales",
        "url" : "/video/math/edo/123124123312"
      },
     "author" : {
        "data" : [{
        "name_author" : "Alejandro Morales",
        "url" : "/author/alejandro-morales",
      	"type" : "master"
    	}],
		}
}

for (i = 0; i < 5; i++) {

console.log(filmInfo.video.id); // Output: Jason Lengstorf
console.log(filmInfo.video.name); // Output: 21
console.log(filmInfo.video.url); // Output: male

console.log(filmInfo.author.data[0].name_author);
console.log(filmInfo.author.data[0].url);
console.log(filmInfo.author.data[0].type);

}


