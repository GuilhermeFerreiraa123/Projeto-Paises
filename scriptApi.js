const countriesList = document.getElementById('countries-list');

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    data.forEach(country => {
      // Para cada país, vamos criar um novo item de lista (li)
      const listItem = document.createElement('li');
      // Colocamos o nome do país dentro do item da lista
      listItem.textContent = country.name.common;
      // Adicionamos o item de lista dentro da nossa lista no HTML
      countriesList.appendChild(listItem);
    });
  })
  .catch(error => console.log('Erro ao buscar os países:', error));  // Se acontecer algum erro