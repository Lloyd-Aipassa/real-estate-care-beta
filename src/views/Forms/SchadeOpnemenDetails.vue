<template>
  <main class="main">
    <h1 class="title">Filled out inspection:</h1>
    <v-card width="600" height="550" class="main-card">
      <div v-if="Schade" class="details-data">
        <h1>Location: &nbsp;&nbsp;{{ Schade.Locatie }}</h1>
        <h1> New damage:&nbsp;&nbsp; {{ Schade.NieuweSchade }}</h1>
        <h1> Type of damage:&nbsp;&nbsp; {{ Schade.SoortSchade }}</h1>
        <h1> Date:&nbsp;&nbsp; {{ Schade.Datum }}</h1>
        <h1> Need fixing now:&nbsp;&nbsp; {{ Schade.AcuteActieVereist }}</h1>
        <h1> Description:&nbsp;&nbsp;{{ Schade.Omschrijving }}</h1>
      </div>
      <div>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn color="#00AAA2" text-color="#fff" v-bind="props" class="text">
              Edit inpection
            </v-btn>
          </template>
          <v-card class="form">
            <v-form @submit="onSubnit">
              <v-text-field label="Add Location" required v-model="Schade.Locatie"> </v-text-field>
              <label>"Pick Date"
                <input placeholder="Pick Date" type="date" v-model="Schade.Datum"> <br>
              </label>
              <v-checkbox v-model="Schade.NieuweSchade" label="Nieuwe schade" value="Ja"></v-checkbox>
              <v-select v-model="Schade.SoortSchade" :items="items" :rules="[v => !!v || 'Item is required']"
                label="Soort schade" required>
              </v-select>
              <v-checkbox v-model="Schade.AcuteActieVereist" label="Acute actie vereist" value="Ja"></v-checkbox>
              <v-textarea v-model="Schade.Omschrijving" name="Omschrijving" label="Outlined textarea"></v-textarea>
              <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input>
              <input type="submit" value="Submit">
            </v-form>
            <v-card-actions>
              <v-btn color="#00AAA2" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
  </main>
</template>

<script>

export default {
  props: ['id'],
  components: {
  },
  data() {
    return {
      dialog: false,
      Schade: {
        Datum: '',
        Locatie: '',
        NieuweSchade: 'nee',
        AcuteActieVereist: 'nee',
        SoortSchade: '',
        Omschrijving: '',
        items: [
          'moedwillig',
          'slijtage',
          'geweld',
          'normaal gebruik',
          'calamiteit',
          'anders'
        ],
      }

    }
  },

  mounted() {
    fetch('http://localhost:3000/SchadeOpnemen/' + this.id)
      .then((res) => res.json())
      .then(data => this.Schade = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
button.text{
  margin-top: 20px;
  color: #fff;
}
.form {
  width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #F0F0F1;
}

h1.title {
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  color: #00AAA2;
}

.main {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.main-card {
  padding: 50px;
}

.details-data h1 {
  margin: 10px 0;
}
</style>