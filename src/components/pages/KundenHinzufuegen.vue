<template>
  <v-container fluid>
    <!-- Header -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-toolbar color="deep-purple accent-4" dark flat>
          <v-toolbar-title class="white--text">Neuen Kunden Hinzufügen</v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>

    <!-- Customer Form -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="spacious-card">
          <v-card-title class="headline">Kundendaten Formular</v-card-title>

          <v-form @submit.prevent="createKunde">
            <v-card-text>
              <!-- Name and Family Name in One Row -->
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newKunde.nachname"
                    label="Nachname"
                    outlined
                    dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newKunde.vorname"
                    label="Vorname"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>

              <!-- Email and Phone Number in One Row -->
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newKunde.email"
                    label="E-Mail"
                    outlined
                    dense
                    type="email"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newKunde.telefonnummer"
                    label="Telefonnummer"
                    outlined
                    dense
                    type="tel"
                  />
                </v-col>
              </v-row>

              <!-- Street, PLZ, and Ort in One Row -->
              <v-row dense>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="newKunde.strasse_nr"
                    label="Straße und Nr."
                    outlined
                    dense
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="newKunde.plz"
                    label="PLZ"
                    outlined
                    dense
                    type="number"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="newKunde.ort"
                    label="Ort"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
            </v-card-text>

            <!-- Submit Button -->
            <v-card-actions>
              <v-btn
                type="submit"
                color="primary"
                block
                class="mt-2 spacious-btn light-background"
              >
                Kunde hinzufügen
              </v-btn>
            </v-card-actions>
          </v-form>

          <!-- Success or Error Message after submission -->
          <v-alert
            v-if="formStatus"
            :type="formStatus.type"
            dismissible
            class="mt-4"
          >
            {{ formStatus.message }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newKunde: {
        nachname: "",
        vorname: "",
        email: "",
        telefonnummer: "",
        strasse_nr: "",
        plz: "",
        ort: "",
      },
      formStatus: null, // For showing status messages after form submission
    };
  },
  methods: {
    createKunde() {
      // Perform API call to create a new customer
      axios
        .post("http://localhost:8000/api/kunden", this.newKunde)
        .then(() => {
          // Successfully added new customer, reset the form
          this.newKunde = {
            nachname: "",
            vorname: "",
            email: "",
            telefonnummer: "",
            strasse_nr: "",
            plz: "",
            ort: "",
          };
          this.formStatus = {
            type: "success",
            message: "Kunde erfolgreich hinzugefügt!",
          };
        })
        .catch((error) => {
          this.formStatus = {
            type: "error",
            message: error.response
              ? error.response.data.message || "Es gab ein Problem beim Hinzufügen des Kunden."
              : "Unbekannter Fehler.",
          };
        });
    },
  },
};
</script>

<style scoped>
.v-toolbar {
  border-radius: 12px;
}

.spacious-card {
  border-radius: 12px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  padding: 16px;
}

/* Light background for the button */
.light-background {
  background-color: rgba(3, 155, 229, 0.1); /* Light blue background */
  color: #0277bd; /* Primary text color */
  border-radius: 25px; /* Rounded button */
  transition: transform 0.2s ease, background-color 0.3s;
}

/* Hover effect */
.light-background:hover {
  background-color: rgba(3, 155, 229, 0.2); /* Slightly darker background on hover */
  transform: translateY(-2px); /* Slight lift effect */
}

.v-text-field {
  margin-bottom: 12px;
}
</style>
