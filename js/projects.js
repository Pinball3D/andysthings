function isEven(number) {
	if(number % 2 == 0) {
		return false;
	} else {
		return true;
	}
}


$.getJSON('https://raw.githubusercontent.com/Pinball3D/andysthings/main/registy.json', function(data){
  console.log(data);
  var i = 0;
  console.log(data.length, i < data.length)
  while (i < data.length) {
    dat = data[i];
	var a = document.createElement("a");
	a.href=dat.url;
	var li = document.createElement("li");
	li.id="item";
	var img = document.createElement("img");
	img.src=dat.img;
	img.id="img";
	li.appendChild(img);
	var title = document.createElement("div");
	title.id="title";
	title.textContent=dat.name;
	li.appendChild(title);
	var desc = document.createElement("div");
	desc.id="desc";
	desc.textContent=dat.desc;
	li.appendChild(desc);
	a.appendChild(li);
	document.querySelector("#grid").appendChild(a);
    i++;
  }
});