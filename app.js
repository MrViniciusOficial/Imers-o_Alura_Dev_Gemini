//console.log(dados); // Esta linha foi comentada e não afeta o código

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma Informação Encontrada</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada elemento (dado) da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada resultado, formatando os dados do objeto
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
      </div>
    `;
        }
    }

    if (!resultados) {
        resultados = "<p>Esse curso 📚 não está disponível nesse site. Acesse <a href= https://www.alura.com.br/ target='_blank' title='Realizar uma nova pesquisa'>aqui</a> encontre no site da Alura. </p>";
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }