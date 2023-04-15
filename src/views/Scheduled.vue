<template >
  <main class="theme">
    <h1 class="title" style="text-align:center">Scheduled inspections</h1>
    <v-divider class="mb-5"></v-divider>
    <div v-for="{ _id, Locatie, Datum, Adress, typeOfInspection, pathForm } in toDo" :key="_id" class="post theme2">
      <div class="content">
        <span>
          <h2>{{ Datum }},<br>{{ Locatie }},&nbsp;&nbsp{{ Adress }}<br>scheduled for: {{ typeOfInspection }}
            <!-- <h2>{{ Datum.sort((a, b)=> b - a) }},<br>{{ Locatie }},&nbsp;&nbsp{{ Adress }}<br>scheduled for: {{ typeOfInspection }} -->
          </h2>
          <v-btn :to="`${pathForm}`" class="ml-2 text-white button" max-width="40%" size="small" variant="flat"
            color="#00AAA2">
            Go to forms </v-btn>
        </span>
        <v-icon class="icon" style="color: red;" size="25" @click="deleteRapport(_id)">mdi-delete</v-icon>
      </div>

    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Scheduled',

  data() {
    return {
      toDo: [],
    }
  },

  methods: {
    getData() {
      let sortedDatum
      fetch('https://kind-tan-goshawk-tux.cyclic.app/scheduled?_sort=Datum&order=desc')
        .then((res) => res.json())
        .then((data) => this.toDo = data.sort((d1, d2) => (d1.Datum < d2.Datum) ? 1 : (d1.Datum > d2.Datum) ? -1 : 0))
        .catch(err => console.log(err.message))
    },

    deleteRapport(id) {
      axios.delete('https://kind-tan-goshawk-tux.cyclic.app/scheduled' + id)
        .then(() => { this.toDo.splice(id, 1) })
        .then(() => {
          this.$router.push({ name: 'Completed' })
        })
        .catch(err => console.log(err.message))

    }
  },

  mounted() {
    this.getData()
  }
}
</script>


<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between !important;
  padding: 10px;

}

.post {
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 150px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  max-width: 600px;
}

.icon {
  align-self: center;
}

.button {
  padding: 0 80px;
  margin-top: 10px;
  margin-left: 0px !important;
}



.post a:hover {
  background: rgba(221, 221, 221, 0.164);
  color: white;
}

.post h2 {

  text-transform: uppercase;
  font-size: 20px;
}
</style>