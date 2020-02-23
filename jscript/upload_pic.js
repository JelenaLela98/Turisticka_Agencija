function ucitajSliku(){
    var fajl= document.getElementById(File1);
	console.log("aa");
    if (fajl!=null && fajl.files.lenght != 0 && fajl.files[0].type.match(/image.*/))
    {
        var reader = new FileReader()
        reader.readAsDataURL(fajl.files[0]);
        reader.onload = function (e){
            var img = document.getElementById(slika1);
            img.src = e.target.result;
        }
        reader.onerror = function(e){
            alert("Can not load the picture")
        }
    }
    else{
         alert("Choose the picture")

    }
}
