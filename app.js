function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    if(!campoPesquisa){
      section.innerHTML =`<h2>Digite o nome do kata desejado</h2><br>
     <table>
        <thead>
            <tr>
                <th>Katas Básicos</th>
                <th>Katas Intermediários</th>
                <th>Katas Avançados</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Heian Shodan</td>
                <td>Enpi</td>
                <td>Tekki Nidan</td>
            </tr>
            <tr>
                <td>Heian Nidan</td>
                <td>Bassai Dai</td>
                <td>Tekki Sandan</td>
            </tr>
            <tr>
                <td>Heian Sandan</td>
                <td>Jion</td>
                <td>Bassai Sho</td>
            </tr>
            <tr>
                <td>Heian Yondan</td>
                <td>Kanku Dai</td>
                <td>Kanku Sho</td>
            </tr>
            <tr>
                <td>Heian Godan</td>
                <td> </td>
                <td>Meikyo</td>
            </tr>
            <tr>
                <td>Tekki Shodan</td>
                <td> </td>
                <td>Chinte</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Gankaku</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Gojushiho Sho</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Hangetsu</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Gojushiho Dai</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Nijushiho</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Ji'in</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Jitte</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Sochin</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Wankan</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td>Unsu</td>
            </tr>
            </tbody>
    </table>`
      return;
    }

    //  campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
  
    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) 
      {
      
       if (dado.titulo.includes(campoPesquisa)||dado.descricao.includes(campoPesquisa))
       {
      // Constrói o HTML para cada item do resultado da pesquisa      
      resultados += `
        <div class="item-resultado">
          <h2><a href=${dado.link} target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p><img src=${dado.imagem}></p>
          <p><iframe width="560" height="315" src="https://www.youtube.com/embed/${dado.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        </div>
      `;
      }
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
      // return
  }   
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }
