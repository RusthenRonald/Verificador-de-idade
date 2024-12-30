function verificar(){
var ano_atual=new Date().getFullYear()
var nasc = document.getElementById('txtano')
var res = document.getElementById('res')
var fsex = document.getElementsByName('fsex')
//validação
if (nasc.value.length==0 || Number(nasc.value)>ano_atual){
    window.alert('Dados inválidos!')
}
else{
    var idade = ano_atual-Number(nasc.value)
    var genero=''
    if (fsex[0].checked){
        genero='Homem'
    }
    else{
        genero='Mulher'
    }
    res.style.textAlign='center'
    res.innerHTML=`Identificado ${genero} com idade ${idade}`
}
}