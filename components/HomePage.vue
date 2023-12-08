<template>
    <div class="dark:bg-neutral-800">
        <div class="flex flex-col items-center justify-center gap-6 mb-6">
            <div class="flex items-center w-3/4 info-content p-5 rounded-lg green scale-up">
                <img class="w-1/6 mr-5" src="../assets/image/undraw_weather_app_re_kcb1.svg" title="Eolienne">
                <div class="grow">
                    <div class="font-bold text-xl mb-2">Événements climatiques extrêmes</div>
                    <p class="text-base">Les événements météorologiques extrêmes, tels que les tempêtes, les
                        incendies
                        de forêt, les inondations et les vagues de chaleur, continuent d'attirer l'attention en raison de
                        leur
                        fréquence et de leur intensité croissantes. Ces phénomènes sont souvent liés aux changements
                        climatiques.
                    </p>
                </div>
            </div>

            <div class="flex items-center w-3/4 info-content p-5 rounded-lg green scale-up">
                <div class="grow">
                    <div class="font-bold text-xl mb-2">Accords internationaux</div>
                    <p class="ext-base">Les négociations et les accords internationaux sur le climat, comme la
                        COP26 (Conférence des Parties de la Convention-cadre des Nations unies sur les changements
                        climatiques),
                        ont été des événements marquants, avec un accent particulier sur les engagements des nations pour
                        réduire les émissions de gaz à effet de serre.
                    </p>
                </div>
                <img class="w-1/6 mr-5" src="../assets/image/undraw_business_deal_re_up4u.svg" title="Eolienne">
            </div>

            <div class="flex items-center w-3/4 info-content p-5 rounded-lg green scale-up">
                <img class="w-1/6 mr-5" src="../assets/image/undraw_wind_turbine_x-2-k4.svg" title="Eolienne">
                <div class="grow">
                    <div class="font-bold text-xl mb-2">Transition énergétique</div>
                    <p class="text-base">De nombreux pays ont intensifié leurs efforts pour passer à des sources
                        d'énergie renouvelable et réduire leur dépendance aux combustibles fossiles. Les
                        discussions sur la transition énergétique sont devenues une priorité mondiale pour atténuer le
                        changement climatique.
                    </p>
                </div>
            </div>

            <div class="flex items-center w-3/4 info-content p-5 rounded-lg green scale-up">
                <div class="grow">
                    <div class="font-bold text-xl mb-2">Rapports scientifiques</div>
                    <p class="text-base">Des rapports scientifiques continuent de souligner l'urgence d'agir face
                        au changement climatique. Les dernières évaluations du Groupe d'experts intergouvernemental sur
                        l'évolution du climat (GIEC) fournissent des informations cruciales sur l'état actuel du climat et
                        les
                        impacts futurs possibles.
                    </p>
                </div>
                <img class="w-1/6 mr-5" src="../assets/image/undraw_scientist_ft0o.svg" title="Eolienne">
            </div>
            <div class="flex items-center w-3/4 info-content p-5 rounded-lg green scale-up">
                <img class="w-1/6 mr-5" src="../assets/image/undraw_my_current_location_re_whmt.svg" title="Eolienne">
                <div class="grow">
                    <div class="font-bold text-xl mb-2">Initiatives locales</div>
                    <p class="text-base">Au niveau local, de nombreuses communautés, entreprises et gouvernements
                        prennent des mesures pour s'adapter aux changements climatiques et mettre en œuvre des pratiques
                        plus
                        durables.
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-4">
            <p class="text-3xl">Est-ce que vous avez bien lu ?</p>
            <button
                class="w-1/6 h-14 scale-up focus:outline-none text-white green green-btn font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Testons
                cela !</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style>
body {
    color: #FFFAFF;
}

.green {
    background-color: #507255;
}

.green-btn:hover {
    background-color: #38523c;
}

.info-content {
    box-shadow: 0px 0px 10px #000;
}

.scale-up {
    transition: transform 330ms ease-in-out;
}

.scale-up:hover {
    transform: scale(1.05);
}

</style>