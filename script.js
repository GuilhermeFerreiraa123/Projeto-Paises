fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    const countriesListDiv = document.getElementById('countries-list');
    const template = document.getElementById('country-card-template');

    // Renderiza todos os países
    countries.forEach(country => {
      // Clona o conteúdo do template
      const clone = template.content.cloneNode(true);

      // Preenche os dados do país
      clone.querySelector('img').src = country.flags.png;
      clone.querySelector('img').alt = Bandeira de ${country.name.common};
      clone.querySelector('.card-title').textContent = country.name.common;
      clone.querySelector('.card-text').textContent = Região: ${country.region};

      // Adiciona o clone ao container
      countriesListDiv.appendChild(clone);
    });
  });