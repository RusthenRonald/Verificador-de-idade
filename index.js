function verificar(){
var ano_atual=new Date().getFullYear()
var nasc = document.getElementById('txtano')
var res = document.getElementById('res')
var fsex = document.getElementsByName('fsex')
//validação
if (nasc.value.length==0){
    window.alert('Dados inválidos!')
}
else{
    window.alert('Continue')
}
}