function popula_tabela(){
    var palestras = [{data:"1/2/20",host:"Luiz",theme:"Javascript"},{data:"1/3/20",host:"Joao",theme:"HTML"},{data:"1/4/20",host:"Maria",theme:"CSS"}  ]
    var tab = document.getElementById("tabela");
    console.log(palestras.length)
    for(var i=0;i<palestras.length;i++){
        pal = palestras[i]
        console.log(palestras[i])
        var tr = tab.insertRow(i)
        console.log(tr)
        var td = tr.insertCell(0)
        td.innerHTML=pal["data"]
        var td = tr.insertCell(1)
        td.innerHTML=pal["host"]
        var td = tr.insertCell(2)
        td.innerHTML=pal["theme"]
        
        
    }

}

