function ClearSearch() {
        document.getElementById('search-bar').value = '';
    }

        // Function to fetch and display JSON data
        function displayData() {
            fetch('travel_recommendations.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    const content = document.getElementById('content');
                    const typed = document.getElementById('search-bar').textContent.toLowerCase();
        
                    content.innerHTML = ''; // Clear previous content
        
                    if (typed.includes("beach" | "beaches" | "Beach" | "Beaches" | "BEACH" | "BEACHES")) {
                        // Display beaches
                        const beachesDiv = document.createElement('div');
                        beachesDiv.classList.add('beaches');
                        beachesDiv.innerHTML = `<h2>Beaches</h2>`;
                        data.beaches.forEach(beach => {
                            const beachDiv = document.createElement('div');
                            beachDiv.classList.add('beach');
                            beachDiv.innerHTML = `
                                <h3>${beach.name}</h3>
                                <img src="${beach.imageUrl}" alt="${beach.name}">
                                <p>${beach.description}</p>
                            `;
                            beachesDiv.appendChild(beachDiv);
                        });
                        content.appendChild(beachesDiv);
                    } else if (typed.includes("temple" | "temples" | "Temple" | "Temples" | "TEMPLE" | "TEMPLES")) {
                        // Display temples
                        const templesDiv = document.createElement('div');
                        templesDiv.classList.add('temples');
                        templesDiv.innerHTML = `<h2>Temples</h2>`;
                        data.temples.forEach(temple => {
                            const templeDiv = document.createElement('div');
                            templeDiv.classList.add('temple');
                            templeDiv.innerHTML = `
                                <h3>${temple.name}</h3>
                                <img src="${temple.imageUrl}" alt="${temple.name}">
                                <p>${temple.description}</p>
                            `;
                            templesDiv.appendChild(templeDiv);
                        });
                        content.appendChild(templesDiv);
                    } else {
                        // Display countries and their cities
                        data.countries.forEach(country => {
                            const countryDiv = document.createElement('div');
                            countryDiv.classList.add('country');
                            countryDiv.innerHTML = `<h2>${country.name}</h2>`;
        
                            country.cities.forEach(city => {
                                const cityDiv = document.createElement('div');
                                cityDiv.classList.add('city');
                                cityDiv.innerHTML = `
                                    <h3>${city.name}</h3>
                                    <img src="${city.imageUrl}" alt="${city.name}">
                                    <p>${city.description}</p>
                                `;
                                countryDiv.appendChild(cityDiv);
                            });
        
                            content.appendChild(countryDiv);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }