<template>
  <v-container fluid>
    <!-- Customer Info Cards at the top -->
    <v-row v-if="selectedKunde" class="mt-5" justify="center">
      <v-col cols="12" md="5">
        <v-card id="customerCard" class="pa-4 shadow-4 elevation-10">
          <v-card-title class="headline">Kunde Informationen</v-card-title>
          <v-card-text>
            <p><strong>ID:</strong> {{ selectedKunde.id }}</p>
            <p><strong>Nachname:</strong> {{ selectedKunde.nachname }}</p>
            <p><strong>Vorname:</strong> {{ selectedKunde.vorname }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="5">
        <v-card id="contactCard" class="pa-4 shadow-4 elevation-10">
          <v-card-title class="headline">Kontakt und Adresse</v-card-title>
          <v-card-text>
            <p><strong>E-Mail:</strong> {{ selectedKunde.email }}</p>
            <p><strong>Telefonnummer:</strong> {{ selectedKunde.telefonnummer }}</p>
            <p><strong>Straße und Nr.:</strong> {{ selectedKunde.strasse_nr }}</p>
            <p><strong>PLZ:</strong> {{ selectedKunde.plz }}</p>
            <p><strong>Ort:</strong> {{ selectedKunde.ort }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" class="text-center mt-3">
        <v-btn color="primary" @click="closeDetailView">Schließen</v-btn>
      </v-col>
    </v-row>

    <!-- Search Box and Table below the cards -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-4 shadow-6" elevation="10">
          
          <!-- Customer Search Box -->
          <v-text-field
            v-model="searchQuery"
            label="Suchen nach: Nachname, Vorname, Email, Telefon, Adresse, PLZ, Ort"
            append-icon="mdi-magnify"
            @input="searchKunden"
            outlined
            dense
            clearable
            class="search-box mb-5"
          />

          <!-- Note for clicking a row to view customer info -->
          <v-row>
            <v-col>
              <p class="text-center" style="font-size: 14px;">
                Um die Kundendetails zu sehen, klicken Sie auf den Datensatz.
              </p>
            </v-col>
          </v-row>

          <!-- Customer Table -->
          <v-data-table
            :headers="tableHeaders"
            :items="filteredKunden"
            item-value="email"
            v-if="filteredKunden.length > 0"
            class="elevation-2"
          >
            <!-- Custom Slot for all Columns, making them clickable -->
            <template v-slot:[`item`]="{ item }">
              <tr
                @click="viewKundenDetail(item)" 
                class="clickable-row"
                :class="{'hoverable-row': true}"
              >
                <td>{{ item.nachname }} {{ item.vorname }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.telefonnummer }}</td>
                <td>{{ item.strasse_nr }}</td>
                <td>{{ item.plz }}</td>
                <td>{{ item.ort }}</td>
              </tr>
            </template>

          </v-data-table>

          <!-- Alert when no customers are found -->
          <v-alert v-else type="info" class="mt-3" :value="true">
            Keine Kunden gefunden! <!-- Added message for no customer results -->
          </v-alert>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      kunden: [],
      filteredKunden: [],
      selectedKunde: null,
      tableHeaders: [
        { text: 'Name', align: 'start', key: 'nachname', sortable: false },
        { text: 'Email', align: 'start', key: 'email', sortable: false },
        { text: 'Telefonnummer', align: 'start', key: 'telefonnummer', sortable: false },
        { text: 'Strasse Nr.', align: 'start', key: 'strasse_nr', sortable: false },
        { text: 'PLZ', align: 'start', key: 'plz', sortable: false },
        { text: 'Ort', align: 'start', key: 'ort', sortable: false },
      ],
    };
  },
  methods: {
    fetchKunden() {
      axios.get('http://localhost:8000/api/kunden')
        .then(response => {
          this.kunden = response.data;
          this.filteredKunden = this.kunden; // Initially showing all customers
          // Automatically select and display the first customer on load
          if (this.filteredKunden.length > 0) {
            this.viewKundenDetail(this.filteredKunden[0]);
          }
        })
        .catch(error => {
          console.error('Error fetching customers:', error);
        });
    },

    searchKunden() {
      const query = this.searchQuery.toLowerCase().trim();

      if (query === '') {
        this.filteredKunden = this.kunden;
      } else {
        this.filteredKunden = this.kunden.filter(kunde =>
          (String(kunde.nachname).toLowerCase().includes(query) || 
           String(kunde.vorname).toLowerCase().includes(query) || 
           String(kunde.email).toLowerCase().includes(query) || 
           String(kunde.telefonnummer).toLowerCase().includes(query) || 
           String(kunde.strasse_nr).toLowerCase().includes(query) || 
           String(kunde.plz).toLowerCase().includes(query) || 
           String(kunde.ort).toLowerCase().includes(query))
        );
      }
    },

    viewKundenDetail(kunde) {
      this.selectedKunde = kunde; // Show detailed view of selected customer

      // After Vue finishes rendering, scroll to the cards
      this.$nextTick(() => {
        const customerCard = document.getElementById("customerCard");
        const contactCard = document.getElementById("contactCard");

        // Ensure both cards exist
        if (customerCard && contactCard) {
          // First, scroll to the customer card
          customerCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Adding small margin above the cards for better visibility
          setTimeout(() => {
            window.scrollBy(0, -50); // This gives the upper margin of 50px
          }, 300); // Wait a bit for the scrollIntoView to complete

          // Then, scroll to the contact card
          contactCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Adding the same small margin above the contact card
          setTimeout(() => {
            window.scrollBy(0, -50); // Add the margin after the second scroll
          }, 300); // Wait a bit for the second scroll into view
        } else {
          console.error("Error: Cards not found.");
        }
      });
    },

    closeDetailView() {
      this.selectedKunde = null; // Close the customer details view
    },
  },
  mounted() {
    this.fetchKunden(); // Fetch customers when component mounts
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 8px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.4); /* Stronger card shadow */
}

.v-data-table {
  font-size: 14px;
  margin-top: 20px;
}

.v-data-table th {
  background-color: #6200ea;  /* Darker purple header */
  color: #fff;                /* White text for better contrast */
  font-weight: 600; 
  font-size: 16px;
  padding: 12px;
  text-transform: uppercase;
}

.search-box {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px; /* Smooth, rounded corners */
}

.v-text-field {
  margin-bottom: 16px;
}

.v-alert {
  margin-top: 20px;
  font-size: 14px;
  color: #3f51b5;
}

.v-card .v-data-table td,
.v-card .v-data-table th {
  text-align: left;
  font-size: 15px;
  padding: 12px;
}

.elevation-1 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}

.shadow-6 {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.4); /* Stronger card shadow */
}

.mb-5 {
  margin-bottom: 20px;
}

.clickable-row {
  cursor: pointer;
}

.hoverable-row:hover {
  background-color: #f0f0f0; /* Light gray background on hover */
}

.v-chip {
  font-size: 16px;
  padding: 8px;
}

.shadow-4 {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Medium shadow for the cards */
}

p {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}

strong {
  font-weight: bold;
}

.v-btn.primary {
  background-color: #2196f3;
  color: white;
}

.v-btn.primary:hover {
  background-color: #1976d2;
}
</style>
