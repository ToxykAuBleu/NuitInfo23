async function retreiveData() {
    // On récupère seulement les données de tel date
    // (ici les plus récente: 2022).
    const onlyYear = "2022";

    try {
        // Récupération des données GeoJSON.
        const response = await fetch("https://www.data.gouv.fr/fr/datasets/r/259e1355-baa7-46af-9d84-260dc45d2863");
        if (!response.ok) {
            throw new Error('La requête a échoué.');
        }
        // console.log("Requête réussi !");

        // Conversion de JSON en Object utilisable.
        var result = [];
        var opacitys = [];
        const data = await response.json();
        const regions = data.features;
        for (const region of regions) {
            if (region.properties.annee == onlyYear) {
                let bio = region.properties.production_bioenergies_renouvelable;
                let elec = region.properties.production_electrique_renouvelable;
                let eolienne = region.properties.production_eolienne_renouvelable;
                let gaz = region.properties.production_gaz_renouvelable;
                let hydraulique = region.properties.production_hydraulique_renouvelable;
                let solaire = region.properties.production_solaire_renouvelable;
                let totale = region.properties.production_totale_renouvelable;

                opacitys.push(totale);

                let formatedRegion = {
                    NomRegion: region.properties.nom_insee_region,
                    CodeRegion: region.properties.code_insee_region,
                    Data: {
                        Annee: region.properties.annee,
                        ProdBioEnergie: bio,
                        ProdElec: elec,
                        ProdEolienne: eolienne,
                        ProdGaz: gaz,
                        ProdHydraulique: hydraulique,
                        ProdSolaire: solaire,
                        ProdTotale: totale
                    },
                    Geometry: region.geometry
                };
                result.push(formatedRegion);

            }
        }

        // Calcul des opacités des régions en fonction des totaux récupérés.
        const minOpacity = Math.min(...opacitys);
        const maxOpacity = Math.max(...opacitys);
        for (const region of result) {
            let opacity = ((region.Data.ProdTotale - minOpacity) / (maxOpacity - minOpacity)) * 0.8 + 0.2;
            region.Data.Opacity = opacity;
        }

        return result;

    } catch (error) {
        console.error(error);
    }
}

export default retreiveData;