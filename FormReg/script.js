const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

// ACA ES DONDE VA EL QUEARY DEL MENU DESPEGABLE
    const Iconomenu = document.querySelector('#Icono-menu'),
            menu = document.querySelector('#menu'); 

    Iconomenu.addEventListener('click', (e)=>{

        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');

        const rutaActual = e.target.getAttribute('src');

        if(rutaActual == 'rayita.png'){
            e.target.setAttribute('src','rayitablanca.png');
        }else{
            e.target.setAttribute('src','rayita.png');
        }

    });

    const precioItem = document.querySelector(".precio-item");

    // Get the price
    const price = precioItem.value;
    
    // Set the price
    precioItem.value = "49.000";
    /*Rastrear pedido*/
    // Obtener el número de pedido del formulario
const orderNumber = document.querySelector("input[name='orderNumber']").value;

//HCAPTCHA



// Obtenga la clave pública de Hcaptcha


// Obtén el widget hCaptcha.
const hCaptcha = document.querySelector('.h-captcha');

// Cuando el usuario hace clic en el botón de inicio de sesión, valida el desafío hCaptcha.
document.querySelector('.login-button').onclick = function() {
  hCaptcha.validate();
};

// Cuando el desafío hCaptcha se valida, envía el formulario de inicio de sesión.
hCaptcha.onvalidated = function() {
  document.querySelector('.login-form').submit();
};

//
////////////////////

function redirectToGoogle() {
    window.location.href = "https://www.google.com";
  }
  
  const button = document.querySelector("input[type='submit']");
  button.addEventListener("click", redirectToGoogle);
  

////////////////////////////



    

