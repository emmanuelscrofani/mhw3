function Mode(event){
    const image = event.currentTarget;

    //LIGHT MODE
    if(image.src.includes('img/light-mode.png')){
   
        image.src='img/night-mode.png';

        document.querySelector('header').classList.add('head-night');

        const logo = document.querySelector('#logo');
        logo.src='img/kaizen_logo.png';

        const icon1 = document.querySelector('.icon1');
        icon1.src='img/profile.png';        
        
        const icon2 = document.querySelector('.icon2');
        icon2.src='img/search.png';

        const icon3 = document.querySelector('.icon3');
        icon3.src='img/cart.png';
        
        document.querySelector('nav').classList.remove('nav-night');
        
        let links = document.querySelectorAll('.link');
        for(const link of links){
            link.classList.remove('link-night');
            link.classList.add('link-light');
        }

        let submenu = document.querySelectorAll('.sub-menu');
        for(const voice of submenu){
            voice.classList.remove('sub-menu-night');
            voice.classList.add('sub-menu-light');
        }

        let link2 = document.querySelectorAll('.link2');
        for(const link of link2){
            link.classList.remove('link2-night');
            link.classList.add('link2-light');
        }


        const elejs = document.querySelector('#elemento-js');
        elejs.textContent="LIGHT";
        elejs.classList.remove('elejs-n');
        elejs.classList.add('elejs-l');
        
        let accessori1 = document.querySelectorAll('.accessori-performance1');
        for(const accessorio of accessori1){
            accessorio.classList.remove('acc1-night');            
            accessorio.classList.add('acc1-light');
        }

        let accessori2 = document.querySelectorAll('.accessori-performance2');
        for(const accessorio of accessori2){
            accessorio.classList.remove('acc2-night');            
            accessorio.classList.add('acc2-light');
        }

        let intestazioni = document.querySelectorAll('h4');
        for(const intestazione of intestazioni){
            intestazione.classList.remove('h-night');
            intestazione.classList.add('h-light');
        }

        let paragrafi = document.querySelectorAll('p');
        for(const par of paragrafi){
            par.classList.remove('p-night');
            par.classList.add('p-light');
        }

        let buttons = document.querySelectorAll('.add-cart');
        for(const butt of buttons){
            butt.classList.remove('add-cart-night');
            butt.classList.add('add-cart-light');
        }

        document.querySelector('.yt-video').classList.remove('.ytSection-night');
        document.querySelector('.yt-video').classList.add('.ytSection-light');

        document.querySelector('footer').classList.remove('footer-night');
        document.querySelector('footer').classList.add('footer-light');
        
        const apple = document.querySelector('#app_pay');
        apple.src='img/apple_pay.png';

        const visa = document.querySelector('#vs');
        visa.src='img/visa.png';

    }
    //NIGHT MODE
    else{
        image.src='img/light-mode.png';

        document.querySelector('header').classList.add('head-night');

        document.querySelector('nav').classList.add('nav-night');

        
        const logo = document.querySelector('#logo');
        logo.src='img/KAIZEN_White.png';

        
        const icon1 = document.querySelector('.icon1');
        icon1.src='img/profile-night.png';        
        
        const icon2 = document.querySelector('.icon2');
        icon2.src='img/search-night.png';

        const icon3 = document.querySelector('.icon3');
        icon3.src='img/white-cart.png';


        let linkss = document.querySelectorAll('.link');
        for(const link of linkss){
            link.classList.remove('link-light');
            link.classList.add('link-night');
        }

        let submenu = document.querySelectorAll('.sub-menu');
        for(const voice of submenu){
            voice.classList.remove('sub-menu-light');
            voice.classList.add('sub-menu-night');
        }

        let link2 = document.querySelectorAll('.link2');
        for(const link of link2){
            link.classList.remove('link2-light');
            link.classList.add('link2-night');
        }


        let intestazioni = document.querySelectorAll('h4');
        for(const intestazione of intestazioni){
            intestazione.classList.remove('h-light');
            intestazione.classList.add('h-night');
        }

        let paragrafi = document.querySelectorAll('p');
        for(const par of paragrafi){
            par.classList.remove('p-light');
            par.classList.add('p-night');
        }


        let links = document.querySelectorAll('a');
        for(const link of links){
            link.classList.add('a-night');
        }

        let buttons = document.querySelectorAll('.add-cart');
        for(const butt of buttons){
            butt.classList.remove('add-cart-light');
            butt.classList.add('add-cart-night');
        }


        const elejs = document.querySelector('#elemento-js');
        elejs.textContent="NIGHT";
        elejs.classList.remove('elejs-l');
        elejs.classList.add('elejs-n');

    
        let accessori1 = document.querySelectorAll('.accessori-performance1');
        for(const accessorio of accessori1){
            accessorio.classList.remove('acc1-light');            
            accessorio.classList.add('acc1-night');
        }

        let accessori2 = document.querySelectorAll('.accessori-performance2');
        for(const accessorio of accessori2){
            accessorio.classList.remove('acc2-light');            
            accessorio.classList.add('acc2-night');
        }

        document.querySelector('.yt-video').classList.remove('.ytSection-light');
        document.querySelector('.yt-video').classList.add('.ytSection-night');

        document.querySelector('footer').classList.remove('footer-light');
        document.querySelector('footer').classList.add('footer-night');

        const apple = document.querySelector('#app_pay');
        apple.src='img/apple_pay_white.png';

        const visa = document.querySelector('#vs');
        visa.src='img/visa_night.png';

    }

}

const icon = document.querySelector('.dark-mode');
icon.addEventListener('click', Mode);


function scrollNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', scrollNav);


function scrollHeader() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 1);
}

window.addEventListener('scroll', scrollHeader);


const h3 = document.createElement('h3');
h3.id="elemento-js";
const navbar = document.querySelector('nav');
navbar.appendChild(h3);

//modale searchbar

function openModal(event){
    const image = document.querySelector('.icon2');
    document.body.classList.add('no-scroll');
  //  modalView.style.top = window.pageYoffest + '2000px';
    modalView.classList.remove('hidden');

    document.querySelector('header').classList.add('header-none');

}

const open = document.querySelector('.icon2');
open.addEventListener('click', openModal);


//Modale carrello

function openModalCart(event){
    const image = document.querySelector('.icon3');
    document.body.classList.add('no-scroll');
  //  modalView.style.top = window.pageYoffest + '2000px';
    modalView2.classList.remove('hidden');

    document.querySelector('header').classList.add('header-none');

}

const open2 = document.querySelector('.icon3');
open2.addEventListener('click', openModalCart);

const open3 = document.querySelector('#apri-carrello');
open3.addEventListener('click', openModalCart);



//Funzione che apre e chiude il chatbot
function openChatBot(event){
    const chatbot = document.querySelector('#chatbot');
    if (!chatbot.classList.contains('hidden')) {
        chatbot.classList.add('hidden');
    } else {
        chatbot.classList.remove('hidden');
    }
}

const assistenzaLink = document.querySelector('#assistenza');
assistenzaLink.addEventListener('click', openChatBot);

const assistenzaLink2 = document.querySelector('#assistenza2');
assistenzaLink2.addEventListener('click', openChatBot);



//Funzione che adegua il chatbot allo scroll dello schermo

window.addEventListener('scroll', function() {

    const scrollTop = window.scrollY || window.pageYOffset;
    const chatbot = document.querySelector('#chatbot');

    if (scrollTop > 50) { // Puoi regolare il valore 50 a tuo piacimento
        chatbot.classList.add('scrolled');
    } else {
        chatbot.classList.remove('scrolled');
    }
});



function onModalClick(event){
    if(event.target.id === 'modal-content' || event.target.tagName === 'H2' || event.target.id === 'search-submit' || event.target.tagName === 'LABEL' || event.target.tagName === 'INPUT' || event.target.id === 'form'){
        return;
    }

    modalView.classList.add('hidden');
    document.body.classList.remove('no-scroll'); 

    document.querySelector('header').classList.remove('header-none');
    document.querySelector('header').classList.add('header');
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);



function onModalCartClick(event){
    if(event.target.id === 'modal-content2' || event.target.id === 'intestazione-cart' || event.target.id === 'paypal-button-container'){
        return;
    }

    modalView2.classList.add('hidden');
    document.body.classList.remove('no-scroll'); 

    document.querySelector('header').classList.remove('header-none');
    document.querySelector('header').classList.add('header');
}

const modalView2 = document.querySelector('#modal-view2');
modalView2.addEventListener('click', onModalCartClick);


//paypal button js

document.addEventListener("DOMContentLoaded", function() {
    // Creazione del contenitore per il pulsante di pagamento PayPal
    var paypalButtonContainer = document.getElementById("paypal-button-container");

    // Inclusione dello script del SDK di PayPal
    var paypalScript = document.createElement("script");
    paypalScript.src = "https://www.paypal.com/sdk/js?client-id=AcbeYeDAm6lR3mF5tHZ5eXIyDTNUy2I6eTJzHS6g0dFFM7yptFCPipQ1GQQ2QMCP1BgpOc-AqhA0-YeV&currency=EUR";
    document.head.appendChild(paypalScript);

    // Funzione per creare l'ordine PayPal
    function createPayPalOrder(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '88' // Importo dell'ordine
                }
            }]
        });
    }

    // Rendering del pulsante di pagamento PayPal
    paypalScript.onload = function() {
        paypal.Buttons({
            createOrder: createPayPalOrder // Chiamata alla funzione per creare l'ordine
        }).render(paypalButtonContainer);
    };
});


//API YOUTUBE

const ytSection = document.querySelector("#ytSection");

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUTPj4leEbe7nCyiKT48TJMQ&key=AIzaSyD8NbUvWcFCSOrBDZ8k6IKpE1pfX7ZuwhQ')
.then(res => res.json())
.then(data=>{

    ytSection.innerHTML +=
    `<a href="https://www.youtube.com/watch?v=${data.items[0].snippet.resourceId.videoId}" class="yt-video">
            <img src="${data.items[0].snippet.thumbnails.maxres.url}"/>
            <h3>${data.items[0].snippet.title}</h3>
        </a>`;

    console.log(data.items[0]);
})


//Apertura banner
function openBanner(event){
    document.querySelector('#banner').classList.remove('banner-hidden');
}

const buttons = document.querySelectorAll('.add-cart');
buttons.forEach(button => {
    button.addEventListener('click', openBanner);
});

//Chiusura banner
function closeBanner(event){
    document.querySelector('#banner').classList.add('banner-hidden');
}

const close = document.querySelector('.close-btn');
close.addEventListener('click', closeBanner);