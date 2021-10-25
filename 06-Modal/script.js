'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}; 

for (let i = 0; i < btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click', openModal);//scurire e opacizzare lo schermo dopo aver cliccato


btnCloseModal.addEventListener('click', closeModal); //per chiudere dopo averlo aperto
overlay.addEventListener('click', closeModal); //per chiuderlo con qualsiasi cllick
   
//7.81
document.addEventListener('keydown', function (e) {   //per generare su console il tasto che viene cliccato
    console.log(e.key); //se vogliamo che escano tutti i codici mettiamo (e) invece se vogliamo che esca il nome del tasto (e.key)
    if (e.key === 'Escape') { //cliccando il tasto esci chiude il testo nascosto
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});