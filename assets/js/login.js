const input = document.querySelector('input#loginUserName');
const btn = document.querySelector('button#loginBtnSubmit');
const form = document.querySelector('form#loginForm');


const validateInput = ({target}) => {
    /* 
    * Destructuring Assignment JS- tirar um valor primitivo ou uma estrutura de dados dentro de outra estrutura (Mayk Brito - https://youtu.be/ruoHSuTKp-U)
    * ({target}) - desestruturação do objeto,ou seja,do evento,eu so quero o target
    * atraves do target,é possivel acessar o elemento que esta disparando o evento -- target.value conteudo digitado
    */

    if(target.value.length > 2){
        btn.removeAttribute('disabled');
        return;
    } 

    // setAttribute(atributo,valor do atributo)
    btn.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    /* o comportamento padrão de um evento pode ser bloquado atraves do método preventDefault(). Nesse caso,o comportamento padrão do evento submit é enviar recarregar a página. */
    event.preventDefault();

    /* 
    * localStorage - salvar as informações no browser 
    * setItem(chave,valor) - adicionar itens
    */
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
