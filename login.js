function store(){
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(name.value.length == 0){
        alert('Please fill in email');
        
    }else if(pw.value.length == 0){
        alert('Please fill in password');
        
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
        
    }else if(pw.value.length > 10){
        alert('Max of 8');
        
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
        
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
        
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
        
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);

        document.getElementById('register').classList.toggle('hide');
        document.getElementById('login').classList.toggle('hide');
        alert('tu cuenta fue creada');

    }
}

//checking
function check(){
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");
    console.log(userName.value,"name");
    console.log(userPw.value,"user");
    console.log(window.pathname);
    // window.location.href = '/login.html'
    if(userName.value == storedName && userPw.value == storedPw){
        console.log(window.pathname);
        // window.location.replace='http://127.0.0.1:5500/index.html'
        window.location.pathname='/index.html'
    }else{
        alert('Error on login');
    }
}
