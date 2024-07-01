// Assurez-vous d'avoir votre clé API
const API_KEY = '13c6aa10-6163-4dad-ad2c-402c28a2d873';

async function submitUrl(url) {
    const endpoint = 'https://urlscan.io/api/v1/scan/';
    const headers = {
        'Content-Type': 'application/json',
        'API-Key': API_KEY
    };

    const body = JSON.stringify({
        url: url,
        public: 'on' // ou 'off' selon que vous voulez rendre le scan public ou privé
    });

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log('Scan submitted:', data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function getScanResult(uuid) {
    const endpoint = `https://urlscan.io/api/v1/result/${uuid}/`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'API-Key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log('Scan result:', data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Scan Results:</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
}

async function scanWebsite() {
    const urlInput = document.getElementById('website_url');
    const urlToScan = urlInput.value;

    if (urlToScan) {
        const scanData = await submitUrl(urlToScan);
        if (scanData && scanData.uuid) {
            // Affiche un message temporaire pendant le scan
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `<p>Scanning in progress, please wait...</p>`;

            // Attendez quelques secondes avant de récupérer les résultats
            setTimeout(async () => {
                const scanResult = await getScanResult(scanData.uuid);
                displayResults(scanResult);
            }, 5000); // Attendez 5 secondes avant de récupérer les résultats
        }
    } else {
        alert('Please enter a URL to scan.');
    }
}
