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


