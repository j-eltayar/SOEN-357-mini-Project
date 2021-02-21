function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function plusDivs1(n) {
    showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    if (n > x.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex1-1].style.display = "block";
}

function modal(image){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = image;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function modal1(image){
    // Get the modal
    var modal1 = document.getElementById("myModal1");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = image;
    var modalImg = document.getElementById("img02");
    var captionText = document.getElementById("caption1");
    img1.onclick = function(){
        modal1.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close1")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal1.style.display = "none";
    }
}

