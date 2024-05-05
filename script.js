'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// First AJAX call : XMLHttpRequest

// const getCountryData = function(country) {
// const request =  new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function() {
//     console.log(this.responseText);

//     const data = JSON.parse(this.responseText)[0];
//     console.log(data);

//     const values = Object.values(data.languages);
//     const language = values[0];

//     const currValues = Object.values(data.currencies);
//     const currency = currValues[0].name;

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${language}</p>
//             <p class="country__row"><span>💰</span>${currency}</p>
//         </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;

// });
// };

// getCountryData('australia');
// getCountryData('china');
// getCountryData('usa');

// CALLBACK HELL
const renderCountry = function (data, className = '') {
  const values = Object.values(data.languages);
  const language = values[0];

  const currValues = Object.values(data.currencies);
  const currency = currValues[0].name;

  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.official}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population} people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency}</p>
            </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/* 
const getCountryDataAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText);

    const data = JSON.parse(this.responseText)[0];
    console.log(data);

    // Render Country 1
    renderCountry(data);

    // Get Neighbour Country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryDataAndNeighbour('usa');
*/

// const request =  new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const request = fetch('https://restcountries.com/v3.1/name/usa');
console.log(request);

const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response => response.json())
  .then(data => renderCountry(data[0]));
};

getCountryData('usa');