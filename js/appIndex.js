var user=document.getElementById('user');
var pass=document.getElementById('pass');
var Radio=document.getElementsByName('Acceso');
var RadioUser=Radio[0];
var RadioAdmin=Radio[1];
var LabelUser=document.getElementById('RadioUserL');
var LabelAdmin=document.getElementById('RadioAdminL');

function inicio(){
    if(user.value=="Ivan"&&pass.value=="war"&&RadioUser.checked){
       window.location='app/MenuUser.html';
    }else if(user.value=="Ivan"&&pass.value=="war"&&RadioAdmin.checked){
        window.location='app/MenuAdmin.html';
    }
    if(user.value!="Ivan"){
        user.className="Error";
    }else{
        user.className="";
    }
    if(pass.value!="war"){
        pass.className="Error";
    }else{
        pass.className="";
    }
    if(!RadioUser.checked&&!RadioAdmin.checked){
        LabelUser.className="ErrorLabel";   
        LabelAdmin.className="ErrorLabel";
    }else{
        LabelUser.className="LabelUsado";
        LabelAdmin.className="";
    }
}