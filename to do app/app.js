var list = document.getElementById("list");
var count = 0
function AddItem(){
    var todo = document.getElementById("todo-item");
    var li = document.createElement('li')
    if(todo.value!=="")
    {
        count++
    var litext = document.createTextNode(todo.value)
    li.appendChild(litext)

    var del = document.createElement("i")
    
    del.setAttribute("class","fas fa-trash")

    del.setAttribute("onclick","delItem(this)")
    if(count==1)
    {
        var delAll= document.createElement("i")
        delAll.setAttribute("class","fas fa-eraser")
        delAll.setAttribute("onclick","delAll()")
        delAll.setAttribute("id","erase")
        list.appendChild(delAll)
    }
  

    
li.appendChild(del)

    list.appendChild(li)
    todo.value =""
    

    }
    else{
        alert("ERROR :Fieldset is empty")
    }


   
    
 
}
    
function delItem(e)
{
    e.parentNode.remove()
    count--
    if(count==0)
    {
        var eraser = document.getElementById("erase")
        eraser.remove()
        
    }
}
function delAll()
{
list.innerHTML=""
count=0;
var eraser = document.getElementById("erase")
        eraser.remove()

}
