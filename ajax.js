function getData() {
    var http = new XMLHttpRequest();
    http.open("GET","https://jsonplaceholder.typicode.com/users", true);
    http.send();
  http.onreadystatechange = function() {
    if(this.readyState = 4 && this.status == 200){
    var result = http.responseText;
    var resultmod = JSON.parse(result);
    document.getElementById("collector-text").innerHTML = result ;
    }else{
        alert("there is problem with your internet connetction");
    }
    alert("data is fetched successfully!");
  };
    
    
}
