function addNewTask(){
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    var listItem = document.createElement("li");

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement)
    list.appendChild(listItem)

    if(text.length === 0){
        alert('Tarefa precisa de ter mais de 1 caracter');
        return;
    }

var removeButton = document.createElement("button");
removeButton.innerHTML = ' <i class="fas fa-trash-alt"></i> '; 
removeButton.onclick = function(){
    list.removeChild(listItem);
}


listItem.appendChild(removeButton);
list.appendChild(listItem);

}



