 function  handleImageClick(c){
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
     modal.style.display = "block";
     modalImg.src = c.src;
     captionText.innerHTML = c.alt;
 }