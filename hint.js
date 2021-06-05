const hintEmail_ = 'hint-email';
const hintEmailText_ = 'hint-email-text';

function accionarHintSectionInbox(type,msg){
    let hintEmail = document.getElementById(hintEmail_);
    let spanText1 = document.getElementById(hintEmailText_);
    let delay = 4500;
    let defaultText = 'hint opened';
    let classSuccess = 'hint-success-e';
    let classError = 'hint-error-e';
    let classAdvice = 'hint-advice-e';
    let hintShow = 'hint-show-e';
    let hintHide = 'hint-hide-e';
    if (msg.length === 0) {
        spanText1.value = defaultText;
    }else{
        spanText1.innerText = msg;
    }
    if (type == 'success'){
        hintEmail.classList.add(classSuccess)
    }
    else if (type == 'error'){
        hintEmail.classList.add(classError)
    }
    else if (type == 'advice'){
        hintEmail.classList.add(classAdvice)
    }
    hintEmail.classList.remove(hintHide)
    hintEmail.classList.add(hintShow)
    setTimeout(function(){
        console.log('hola')
        hintEmail.classList.remove(hintShow)
        hintEmail.classList.add(hintHide)
    },delay)
}

setTimeout(function () {
    accionarHintSectionInbox('success','email enviado con exito');
    setTimeout(function(){
        accionarHintSectionInbox('error', 'error en el servidor');
        setTimeout(function () {
            accionarHintSectionInbox('advice', 'no tiene autorizacion');
        },5000)
    },5000)
},1500)


