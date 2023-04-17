<template>
    <main class="theme">
        <h1 class="title1" style="text-align:center">Completed inspections</h1>
        <v-divider class="mb-5"></v-divider>
        <div v-for="schade in allSchades" :key="schade._id" class="card">
            <div class="content theme2">
                <router-link :to="{ name: 'CompletedSingle', params: { id: schade._id } }">
                    <h2>{{ schade.Datum }},&nbsp;&nbsp{{ schade.Locatie }}</h2>
                    <v-icon style="color: #00AAA2;" size="25">mdi-checkbox-marked-circle</v-icon>
                </router-link>
            </div>
            <v-icon style="color: red;" size="25" @click="deleteRapport(schade._id)">mdi-delete</v-icon>
        </div>
        <div v-show="allSchades.length == 0">
            <h1 class="loading">
                <img :src="require('@/assets/spinner.svg')" class="spin" width="50" height="50" alt="logo" />
                loading...
            </h1>
        </div>
    </main>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {


    data() {
        return {
            dialog: false,
        }
    },

    computed: mapGetters(['allSchades']),
    created() {
        this.fetchSchades();
    },

    methods: {
        ...mapActions(["deleteRapport", "fetchSchades"]),
    },
}


</script>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    min-height: 86vh;
}

.card {
    width: 600px;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    gap: 5px;
}

.content {
    width: 90%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}



.content a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    text-decoration: none;
    cursor: pointer;

}

.content:hover {
    color: #00AAA2;
}

.content h2 {
    margin: 10px auto;
    text-transform: uppercase;
    font-size: 20px;
}
h1.loading{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 50px;
}

.spin {
  animation: spinnerAnimatie 3s infinite;
}

@keyframes spinnerAnimatie {
  100% {transform: rotate(360deg);}
}

@media screen and (max-width: 600px) {
    .card {
        width: 100%;


    }
}
</style>