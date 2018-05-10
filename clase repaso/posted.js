
    var post = localStorage.getItem("post");
    post = JSON.parse(post);
    document.getElementById("title").innerHTML = post.title;
    document.getElementById("date").innerHTML = "(" + post.date + ")";
    document.getElementById("text").innerHTML = "<b>"+ post.header +":</b><br>" + post.text;


    function volver(){
        window.location = "./index.html";
    }
