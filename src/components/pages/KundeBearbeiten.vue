<template>
  <v-container fluid>
    <!-- Header with background and title -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-toolbar color="deep-purple" dark flat>
          <v-toolbar-title class="white--text">Kunden Bearbeiten</v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>

    <!-- Main content -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-4 shadow-6" elevation="10">
          <!-- Customer Table -->
          <v-data-table
            :headers="tableHeaders"
            :items="kunden"
            item-value="email"
            class="elevation-2"
          >
            <template v-slot:[`item.nachname`]="{ item }">
              <span>{{ item.nachname }} {{ item.vorname }}</span>
            </template>

            <template v-slot:[`item.email`]="{ item }">
              <span>{{ item.email }}</span>
            </template>

            <template v-slot:[`item.telefonnummer`]="{ item }">
              <span>{{ item.telefonnummer }}</span>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-btn
                color="blue"
                icon
                @click="openEditDialog(item)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Success message -->
    <v-snackbar v-model="successMessageVisible" timeout="3000" color="success">
      {{ successMessage }}
      <v-btn
        color="pink"
        text
        @click="successMessageVisible = false"
      >
        Schließen
      </v-btn>
    </v-snackbar>

    <!-- Edit Customer Dialog -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Kunden bearbeiten</v-card-title>
        <v-card-text>
          <v-text-field
            label="Nachname"
            v-model="editKunde.nachname"
          />
          <v-text-field
            label="Vorname"
            v-model="editKunde.vorname"
          />
          <v-text-field
            label="Email"
            v-model="editKunde.email"
          />
          <v-text-field
            label="Telefonnummer"
            v-model="editKunde.telefonnummer"
          />
          <v-text-field
            label="Strasse Nr."
            v-model="editKunde.strasse_nr"
          />
          <v-text-field
            label="PLZ"
            v-model="editKunde.plz"
          />
          <v-text-field
            label="Ort"
            v-model="editKunde.ort"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text @click="editDialog = false">Abbrechen</v-btn>
          <v-btn color="green" text @click="saveEditedKunde">Speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kunden: [],
      editDialog: false,
      editKunde: {}, // Store the customer to be edited
      tableHeaders: [
        { text: 'Name', align: 'start', key: 'nachname', sortable: false },
        { text: 'Email', align: 'start', key: 'email', sortable: false },
        { text: 'Telefonnummer', align: 'start', key: 'telefonnummer', sortable: false },
        { text: 'Aktionen', align: 'end', key: 'actions', sortable: false },
      ],
      successMessageVisible: false,
      successMessage: "Die Änderungen wurden erfolgreich gespeichert!"
    };
  },
  methods: {
    fetchKunden() {
      axios.get('http://localhost:8000/api/kunden')
        .then(response => {
          this.kunden = response.data;
        })
        .catch(error => {
          console.error('Error fetching customers:', error);
        });
    },

    openEditDialog(kunde) {
      this.editKunde = { ...kunde }; // Copy data to avoid mutation during edit
      this.editDialog = true; // Open dialog
    },

    saveEditedKunde() {
      axios.put(`http://localhost:8000/api/kunden/${this.editKunde.id}`, this.editKunde)
        .then(() => {
          // Update the customer in the list
          const index = this.kunden.findIndex(k => k.id === this.editKunde.id);
          if (index !== -1) {
            this.kunden.splice(index, 1, this.editKunde); // Replace the old customer with the updated one
          }
          this.editDialog = false; // Close the dialog
          
          // Display success message
          this.successMessageVisible = true; // Show success message
        })
        .catch(error => {
          console.error('Error saving edited customer:', error);
        });
    }
  },
  mounted() {
    this.fetchKunden();
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 8px;
}

.v-btn {
  margin-left: 8px;
}

.v-toolbar {
  border-radius: 12px;
}

.v-toolbar-title {
  font-size: 24px; /* Optional: Adjust font size as needed */
}
</style>
