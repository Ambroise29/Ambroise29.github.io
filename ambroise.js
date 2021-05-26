$(document).ready(function()
{
    valid=true;
    $('#vb').click(function()
    {
     if($('#pwd1').val()==""){
       $('#pwd1').css('border','solid 2px red');
       $('#pwd1').focus();
       $('.ed').text('VEILLEZ REMPLIR VOTRE NOM');
        $('.ed').css('color','red');
       valid=false;
       
       }
   
     
      if($('#pwd2').val()==""){
       $('#pwd2').css('border','solid 2px red');
       $('#pwd2').focus();
       $('.edd').text('VEILLEZ REMPLIR VOTRE PRENOM');
       $('.edd').css('color','red');
       valid=false;
       
       }
 
     return valid;

    }); 
    
          
});
