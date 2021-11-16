function list(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        if (xhr.readystate==4 && xhr.status==200){
            let lists=JSON.parse(this.responseText);
            setTable(lists);
            console.log(response)
        }
        
    };
    xhr.open("GET","list.json",true);
    xhr.send ()
    

}


//table

function setTable(lists){
    document.getElementById("items").style="none";
    let things=list.item;
    let table="<thead><tr><th>SlNo.</th><th>items</th><th>Quantity</th><th>Notes</th><th>tick the box</th></tr></thead>";
    for (i=0;i<item;i++){
        table +="<tr>";
        table +="<td>"+item[i].SlNo+"</td><td>"+item[i].item +"</td><td>"+item[i].Quantity +"</td><td>"+item[i].notes+"</td><td>"+ "<input type=checkbox>";
        table +="</tr>";
    }
    table += "</table>";
    document.getElementById("list").innerHTML=table;

}
