function todofun(){
    var list = document.createElement("li");
    var text1 = document.getElementById("inItemText").value;
    var text2 = document.createTextNode(text1);
    if(text1.trim() != ""){
        
        list.appendChild(text2);
    document.getElementById("todoList").appendChild(list);
    }
   else{ 
    
    alert("error");
    }
    
    var span = document.createElement("span");
    var x = document.createTextNode("Delete");
    span.className="close";
    span.appendChild(x);
    list.appendChild(span);

    var close = document.getElementsByClassName("close");
     for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

