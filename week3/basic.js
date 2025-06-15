console.log("hello world");



console.log("hello world");

function initializeCode() {

  fetch('population_values.json')
    .then(response => response.json())
    .then(popQuery => {
      return fetch('https://pxdata.stat.fi:443/PxWeb/api/v1/fi/StatFin/vaerak/statfin_vaerak_pxt_11ra.px', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(popQuery)
      });
    })
    .then(response => response.json())
    .then(populationData => {
      fetch('employment_values.json')
        .then(response => response.json())
        .then(empQuery => {
          return fetch('https://pxdata.stat.fi:443/PxWeb/api/v1/fi/StatFin/tyokay/statfin_tyokay_pxt_115b.px', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empQuery)
          });
        })
        .then(response => response.json())
        .then(employmentData => {
          const municipalities = populationData.dimension.Alue.category.label;
          const populations = populationData.value;
          const employments = employmentData.value;
          
          const userData = document.getElementById('user-data');
          let i = 0;
          for (const key in municipalities) {
            const row = document.createElement('tr');
            const percent = (Number(employments[i]) / Number(populations[i])) * 100;
            console.log(municipalities[key], populations[i], employments[i], percent);
            row.innerHTML = `
              <td>${municipalities[key]}</td>
              <td>${populations[i]}</td>
              <td>${employments[i]}</td>
              <td>${percent.toFixed(2)}%</td>
            `;
            if (percent > 45) {
              row.classList.add("highlight");
            }
            if (percent < 25) {
              row.classList.add("lowlight");
            }
            userData.appendChild(row);
            i++;
          }
        });
    })
    .catch(error => {
      console.error('Virhe haettaessa dataa:', error);
    });
};  
window.onload = initializeCode;