function searchList()
{
    var result = document.getElementById("result");
    var val = document.getElementById("userinput");

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {

        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200)
            {
                result.innerHTML = req.responseText
            } 
            else
            {
                console.log("There seems to be an error!")
            }
        }
    }
    req.open("GET",`http://localhost/info2180-lab4/superheroes.php?query=${val.value}`,false)

    req.send();
}

window.onload = function() {
    console.log("Page successfully loaded");
    var  but = document.getElementById("searchBtn");
    but.addEventListener("click", searchList);
  
};