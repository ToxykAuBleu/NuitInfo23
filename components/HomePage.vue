<template>
    <div class="flex flex-col items-center justify-center gap-6 my-6">
        <div class="flex items-center w-5/6 info-content p-5 rounded-lg">
            <img class="w-1/6 mr-5" src="../assets/image/undraw_weather_app_re_kcb1.svg" title="Eolienne">
            <div class="grow">
                <div class="text-gray-900 font-bold text-xl mb-2">Événements climatiques extrêmes</div>
                <p class="text-gray-700 text-base">Les événements météorologiques extrêmes, tels que les tempêtes, les
                    incendies
                    de forêt, les inondations et les vagues de chaleur, continuent d'attirer l'attention en raison de leur
                    fréquence et de leur intensité croissantes. Ces phénomènes sont souvent liés aux changements
                    climatiques.
                </p>
            </div>
        </div>

        <div class="flex items-center w-5/6 info-content p-5 rounded-lg">
            <div class="grow">
                <div class="text-gray-900 font-bold text-xl mb-2">Accords internationaux</div>
                <p class="text-gray-700 text-base">Les négociations et les accords internationaux sur le climat, comme la
                    COP26 (Conférence des Parties de la Convention-cadre des Nations unies sur les changements climatiques),
                    ont été des événements marquants, avec un accent particulier sur les engagements des nations pour
                    réduire les émissions de gaz à effet de serre.
                </p>
            </div>
            <img class="w-1/6 mr-5" src="../assets/image/undraw_business_deal_re_up4u.svg" title="Eolienne">
        </div>

        <div class="flex items-center w-5/6 info-content p-5 rounded-lg">
            <img class="w-1/6 mr-5" src="../assets/image/undraw_wind_turbine_x-2-k4.svg" title="Eolienne">
            <div class="grow">
                <div class="text-gray-900 font-bold text-xl mb-2">Transition énergétique</div>
                <p class="text-gray-700 text-base">De nombreux pays ont intensifié leurs efforts pour passer à des sources
                    d'énergie renouvelable et réduire leur dépendance aux combustibles fossiles. Les
                    discussions sur la transition énergétique sont devenues une priorité mondiale pour atténuer le
                    changement climatique.
                </p>
            </div>
        </div>

        <div class="flex items-center w-5/6 info-content p-5 rounded-lg">
            <div class="grow">
                <div class="text-gray-900 font-bold text-xl mb-2">Rapports scientifiques</div>
                <p class="text-gray-700 text-base">Des rapports scientifiques continuent de souligner l'urgence d'agir face
                    au changement climatique. Les dernières évaluations du Groupe d'experts intergouvernemental sur
                    l'évolution du climat (GIEC) fournissent des informations cruciales sur l'état actuel du climat et les
                    impacts futurs possibles.
                </p>
            </div>
            <img class="w-1/6 mr-5" src="../assets/image/undraw_scientist_ft0o.svg" title="Eolienne">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-4">
        <p class="text-3xl">Est-ce que vous avez bien lu ?</p>
        <button
            class="w-1/6 h-14 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Testons
            cela !</button>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style>
.info-content {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 0.25);
}</style>