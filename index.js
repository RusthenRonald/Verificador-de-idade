function verificar(){
var ano_atual=new Date().getFullYear()
var nasc = document.getElementById('txtano')
var res = document.getElementById('res')
var fsex = document.getElementsByName('fsex')
var img = document.createElement('img')
img.setAttribute('id','foto')
//validação
if (nasc.value.length==0 || Number(nasc.value)>ano_atual){
    window.alert('Dados inválidos!')
}
else{
    var idade = ano_atual-Number(nasc.value)
    var genero=''
    //se for masculino
    if (fsex[0].checked){
        genero='Homem'
        if (idade>=0 && idade <10){
            //bebe
            img.setAttribute('src','img/bebe h.png')
        }
        else if(idade>=10 && idade <30){
            //jovem
            img.setAttribute('src','img/jovem h.png')
        }
        else if (idade>=30 && idade <50){
            //adulto
            img.setAttribute('src','img/homem_adulto.png')
        }
        else{
            //idoso
            img.setAttribute('src','img/idoso.png')
        }
    }
    //se for feminino
    else{
        genero='Mulher'
        if (idade>=0 && idade <10){
            //bebe
        }
        else if(idade>=10 && idade <30){
            //jovem
        }
        else if (idade>=30 && idade <50){
            //adulto
        }
        else{
            //idoso
        }
    }
    res.style.textAlign='center'
    res.innerHTML=`Identificado ${genero} com idade ${idade}`
}
}