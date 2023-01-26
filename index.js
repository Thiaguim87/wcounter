var txt = document.getElementById("message");

txt.addEventListener("input", function() {
    var txt = document.getElementById("message").value;
    var caracteres = document.getElementById("caracteres")
    var word = document.getElementById("words")
    if(txt != ""){
        caracteres.innerHTML = "Characters: " + txt.length;
        word.innerHTML = "Words: " + txt.split(' ').length;
    } else{
        caracteres.innerHTML = "Characters: 0";
        word.innerHTML = "Words: 0";
    }
})
