// fetching the values from index.html file login modal

const email = document.getElementById('inputEmail4');
const password = document.getElementById('password');

// validation of input fields in login modal

form1.addEventListener('submit',(e) => {
    let message = []
    
    if(email.value === null || email.value === " ")
    {
            message.push('Please enter an email address!')
    }
    if(password.value == null || password.value == "")
    {
        message.push('Enter a strong Password')
    }
    if(message.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }


})

// Display login input data to another window

function display() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=1400,height=900')
    message = "<ul><li><b>Email: </b>" + document.form1.inputEmail4.value;
    message += "<li><b>Password: </b>" + document.form1.password.value + "</ul>";
    DispWin.document.write(message);
  }

// fetching the values from index.html file sign Up modal

const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const password1 = document.getElementById('pswd');
const cpassword = document.getElementById('cpswd');

// validation of input fields in Sign Up modal

form2.addEventListener('submit',(e) => {
    let message = []
    
    if(name1.value === null || name1.value === " ")
    {
        message.push('Please enter a Name')
    }
    if(email1.value == null || email1.value == "")
    {
        message.push('Enter valid Email')
    }
    if(password1.value == null || password1.value == "")
    {
        message.push('Enter a strong Password')
    }
    if(cpassword.value == null || cpassword.value == "")
    {
        message.push('Enter a strong Password')
    }
    if(message.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }


})

// Display sign Up input data to another window

function display1() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=1400,height=900')
    message = "<ul><li><b>Name: </b>" + document.form2.name.value;
    message += "<li><b>Email: </b>" + document.form2.email.value;
    message += "<li><b>Password: </b>" + document.form2.pswd.value;
    message += "<li><b>Confirm Password: </b>" + document.form2.cpswd.value + "</ul>";
    DispWin.document.write(message);
  }


  




 