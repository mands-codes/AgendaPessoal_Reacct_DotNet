const formataData = (dataNascimento)=>{
    var novaData =  dataNascimento.replaceAll("-", "").substring(0,8);
    var ano = novaData.substring(0,4);
    var mes = novaData.substring(4,6);
    var dia = novaData.substring(6,8);
    var dataEditada = dia + "/" + mes + "/" + ano;
    return dataEditada;
}
 const formataDataEdit = (dataNascimento) =>{
    var novaData =  dataNascimento.substring(0,10);
    return novaData;
 }

export {formataData, formataDataEdit};