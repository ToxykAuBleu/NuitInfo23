
// Récupère les articles du site ecologie.gouv.fr et renvoie
// un Object contenant les articles entre start et end.
async function makeRequest(start = 0, end) {
    try {
        if (start < 0) {
            throw new Error("Paramètre start négatif.");
        }

        // Récupération des données RSS.
        const response = await fetch('https://www.ecologie.gouv.fr/rss_actualites.xml');
        if (!response.ok) {
            throw new Error('La requête a échoué.');
        }

        // Conversion de reposne en XMLDocument.
        const parser = new DOMParser();
        const data = await response.text();
        const xml = parser.parseFromString(data, "application/xml");

        // Conversion de xml en Object.
        let result = {};
        const articles = xml.getElementsByTagName("item");
        if (end > articles.length) {
            throw new Error("Paramètre end supérieur au nombre d'article");
        }

        for (let i = start; i < end; i++) {
            const article = articles[i];
            
            result[i] = {
                title: article.getElementsByTagName("title")[0].textContent,
                link: article.getElementsByTagName("link")[0].textContent,
                date: article.getElementsByTagName("pubDate")[0].textContent,
            };
        }
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default makeRequest;