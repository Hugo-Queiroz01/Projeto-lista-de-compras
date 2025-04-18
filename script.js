function addItemToList(nomeItem) {
  const list = document.getElementById('items');

  // Conta os itens pra criar um ID único
  const index = list.children.length + 1;
  const idItem = `item-${index}`;

  // Cria o <li>
  const li = document.createElement('li');
  li.innerHTML = `
    <form action="#" method="get">
      <input type="checkbox" id="${idItem}" name="check" value="check">
      <label for="${idItem}" class="custom-checkbox">${nomeItem}</label>
    </form>
    <div class="container-delete">
      <div class="delete">
        <button class="delete-img" onclick="removeItem(this)">
          <img src="assets/delete.svg" alt="">
        </button>
      </div>
    </div>
  `;

  list.appendChild(li);
}

// Evento disparado quando a página foi totalmente carregada.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-item');
  const input = document.getElementById('newItem');


  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Tira o padrão de carregamento da página

    const valor = input.value.trim(); // trim() remove espaços, tabs e quebras de linha
    if (valor !== '') {
      addItemToList(valor);
      input.value = '';
    }
  });
});

function removeItem(button) {
  const item = button.closest('li'); // closest busca o ancestral li mais próximo do button
  if (item) {
    item.classList.add('fade-out'); // aplica a classe com as animações
    item.addEventListener('transitionend', () => {
      item.remove(); // remove o item da lista 
      removeClass()
    });
  }
}

// variável contendo o alert
const alert = document.getElementById("alert");


// função para esconder o alert apenas se clicar na imagem
function hiddenFather(imagem) {
  const alert = imagem.closest('#alert');
  if (alert) {
    alert.classList.add('none');

  }
}

// função para remover a class none do alert e aparecer na tela
function removeClass(removeItem) {
  alert.classList.remove('none');

}