let cl = console.log;

const SignInForm = document.getElementById("SignInForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

let emailFromDB = 'akshay@gmail.com';
let passFromDb = 'akshay';

// let db = [
//     {email : 'akshay@gamil.com' , password : 'akki123' }
// ]

const onSignInHandler = (eve) => {
    eve.preventDefault();
    //cl(`sign in !!!`)
    let emailval = email.value;
    let passwordval = password.value;
    if(emailval === emailFromDB && passwordval === passFromDb){
        //alert(`Sign In Succsessfully`)
        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Sign In Succsessfully',
            showConfirmButton: false,
            timer: 3000
          })
        signInForm.reset()
        return true;
    }else{
        //alert(`Invalid UserName or Password`)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid UserName or Password',
            timer: 3000
          })
        signInForm.reset()
        return false;
    }
}

SignInForm.addEventListener("submit", onSignInHandler)