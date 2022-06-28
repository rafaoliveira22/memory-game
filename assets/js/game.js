const grid = document.querySelector('div#grid');

const characters = [
    'card-flash',
    'card-flash-reverso',
    'card-god-speed',
    'card-iris',
    'card-jhow',
    'card-nevasca',
    'card-nora',
    'card-savitar',
    'card-zoom',
    'card-cisco'
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
} //createElement()


let firstCard = '';
let secondCard = '';

const checkEndGame = () =>{
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20){
        alert("Parabéns,você ganhou X_X");
    }
}

const checkCards = () =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter == secondCharacter){
  
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
    
        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else{
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
} // checkCards()

const revealCard = ({target}) => {
    /* className.include() -> verifica se ja tem aquela classe inclusa no elemento*/
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

    
} //revealCard()

const createCard = (character) => {
    /* a carta é composta por 3 elementos,sendo esses,3 divs com classes especificas */
    const card = createElement('div', 'card');
    const cardFront = createElement('div', 'card-face card-front');
    const cardBack = createElement('div', 'card-face card-back');

    cardFront.style.backgroundImage = `url(../assets/img/${character}.png)`;

    /* appendChild serve para acrescentar um filho no elemento desejado,no caso,vamo adicionar no card(div pai) os elementos card-front e card-back,(divs filhos) */
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    grid.appendChild(card);

    /* no html é possivel criar atributos nas tags,bsta adicionar "data-",nesse caso vamos criar uma atributo para as cartas,chamado data-character,e cada carta sera identificada por esse atributo,seguida pelo nome do personagem. Ex: <div class="card" data-character="card-flash"> */
    card.setAttribute('data-character', character);

    card.addEventListener('click', revealCard);
    return card;
} //createCard()

const loadGame = () =>{
    // operador spread ... -> esta espalhando os elementos do array characters dentro de outro array(duplicateCharacters)
    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    // o forEach vai percorrer todos os elementos do array
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
} //laodGame()

loadGame();


