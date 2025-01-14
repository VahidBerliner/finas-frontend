<template>
  <v-container fluid>
    <!-- Heading Outside the v-card -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card-title class="headline white--text deep-purple-accent-4-background">
          Kundeninformationen Suchen
        </v-card-title>
      </v-col>
    </v-row>
    
    <!-- Single v-card with both search and table -->
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

          <!-- Customer Table -->
          <v-data-table
            :headers="tableHeaders"
            :items="filteredKunden"
            item-value="email"
            v-if="filteredKunden.length > 0"
            class="elevation-2"
          >
            <!-- Custom Slot for Name Column (First and Last Name) -->
            <template v-slot:[`item.nachname`]="{ item }">
              <span>{{ item.nachname }} {{ item.vorname }}</span>
            </template>

            <!-- Custom Slot for Email Column -->
            <template v-slot:[`item.email`]="{ item }">
              <span>{{ item.email }}</span>
            </template>

            <!-- Custom Slot for Phone Number Column -->
            <template v-slot:[`item.telefonnummer`]="{ item }">
              <span>{{ item.telefonnummer }}</span>
            </template>

            <!-- Custom Slot for Street Number Column -->
            <template v-slot:[`item.strasse_nr`]="{ item }">
              <span>{{ item.strasse_nr }}</span>
            </template>

            <!-- Custom Slot for Postal Code Column -->
            <template v-slot:[`item.plz`]="{ item }">
              <span>{{ item.plz }}</span>
            </template>

            <!-- Custom Slot for City Column -->
            <template v-slot:[`item.ort`]="{ item }">
              <span>{{ item.ort }}</span>
            </template>
          </v-data-table>

          <!-- Alert when no customers are found -->
          <v-alert v-else type="info" class="mt-3" :value="true">
            Keine Kunden gefunden!
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
          this.filteredKunden = this.kunden; // Initial showing all customers
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
  },
  mounted() {
    this.fetchKunden();
  }
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

/* Custom styling for the heading card title */
.deep-purple-accent-4-background {
  background-color: #6A0DAD; /* Deep purple accent-4 background color */
  color: white; /* White text color */
  border-radius: 12px; /* Rounded corners (if needed) */
  padding: 16px; /* Padding if required */
}
</style>
