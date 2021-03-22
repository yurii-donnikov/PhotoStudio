//- модальное окно под форму регистрации
const registrationIndivid = document.querySelector('.registrationIndivid')
const registrationComp = document.querySelector('.registrationComp')
const close = document.querySelector('.close')
const regContent = document.querySelector('.regContent')

registrationIndivid.onclick = function () {
  regContent.style.display = 'block';
  document.getElementsByTagName('main')[0].style.opacity = 0.5;
  document.getElementsByTagName('footer')[0].style.opacity = 0.5;
  document.getElementsByTagName('header')[0].style.opacity = 0.8;
}
registrationComp.onclick = function () {
  regContent.style.display = 'block';
  document.getElementsByTagName('main')[0].style.opacity = 0.5;
  document.getElementsByTagName('footer')[0].style.opacity = 0.5;
  document.getElementsByTagName('header')[0].style.opacity = 0.8;
}
close.onclick = function () {
  regContent.style.display = 'none';
  document.getElementsByTagName('header')[0].style.opacity = 1;
  document.getElementsByTagName('main')[0].style.opacity = 1;
  document.getElementsByTagName('footer')[0].style.opacity = 1;
}
window.onclick = function (event) {
  if (event.target == regContent) {
    regContent.style.display = 'none'
    document.getElementsByTagName('header')[0].style.opacity = 1;
    document.getElementsByTagName('main')[0].style.opacity = 1;
    document.getElementsByTagName('footer')[0].style.opacity = 1;
  }
}



//- отправда данных пользователя на сервер 
const [button, myTell, myName, txtAfterInp] = ['button', 'myTell', 'myName', 'txtAfterInp']
.map((classNames) => document.getElementsByClassName(classNames))

button[0].onclick = function (event) {
  if (myTell[0].value.length > 4) {
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: myName[0].value,
        numberTel: myTell[0].value
      })
    }).then((response) => console.log(response.status))
    myName[0].value = '';
    myTell[0].value = '+380';
    txtAfterInp[0].innerHTML = '';
    regContent.style.display = 'none';
    document.getElementsByTagName('header')[0].style.opacity = 1;
    document.getElementsByTagName('main')[0].style.opacity = 1;
    document.getElementsByTagName('footer')[0].style.opacity = 1;
  } else {
    txtAfterInp[0].innerHTML = 'enter the correct number'
  }
}
