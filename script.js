// get filter element
// cria uma variável const que vai receber o que for digitado na area de pesquisa
// Vai procurar na pagina o que está dentro do input localizado no header e colocar na variável criada
const filterElement = document.querySelector('header input')
// get cards elements
// Vai procurar todos os li dentro da classe cards e colocar na variável criada cards (todos os dados estarão em um array)
const cards = document.querySelectorAll('.cards li')
// add input event for the filter element
// vai chamar a função de filtrar cartões toda vez que algo for digitado no area de pesquisa
filterElement.addEventListener('input', filterCards)

// filter function
function filterCards() {
  // if the filter is not empty
  // Se a area de busca não estiver vazia
  if (filterElement.value != '') {
    // for each card of cards
    // Para cada elemento do array criado e recebido pela variável cards
    for (let card of cards) {
      // get card heading (title)
      // Cria uma variável chamada titulo e recebe o valor encontrado no h2 do card (elemento)
      let title = card.querySelector('h2')
      // tranform to lower case
      // Muda todas as letras contidas no H2 para letras minusculas
      title = title.textContent.toLowerCase()
      // transform filter text to lower case
      // cria uma variável filtro de text que vai receber as tudo o que foi digitado na area de pesquisa, só que em letras minúsculas
      let filterText = filterElement.value.toLowerCase()
      // if card title does not include the filter text
      // Verifica se o que foi digitado está contido em algum dos títulos h2
      if (!title.includes(filterText)) {
        // hide the card element
        // Se não estiver, desabilita o cartão
        card.style.display = "none"
      } else {
        // unhide the card element
        // Se estiver, apresenta o cartão
        card.style.display = "block"
      }
    }
    // Senão, ou seja, se o valor contido na area de pesquisa estiver em branco (se nada foi digitado)
  } else{
    // for each card of cards
    // Em cada cartão ca lista de cartões
    for (let card of cards) {
      // unhide the card element
      // Apresenta o cartão, deixa visível
      card.style.display = "block"
    }
  }
}
