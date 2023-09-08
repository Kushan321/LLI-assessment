<template>
  <v-container class="datatable-wrapper">
    <div class="search-container">
      <v-btn :to="'/vehicle-management/add-vehicles'" class="add-vehicles">
        <v-icon>mdi-plus</v-icon> Add Vehicle</v-btn
      >

      <div class="search-inputs">
        <v-text-field
          v-model="search"
          outlined
          dense
          label="Search"
        ></v-text-field>
        <v-select outlined dense label="Select Status"></v-select>
      </div>
    </div>
    <!--Data table starts Here -->

    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
      :page.sync="page"
      :items-per-page.sync="itemsPerPage"
    >
      <template v-slot:[`item.image`]="{ item }">
        <v-img
          :src="item.photo_first.thumb_url"
          max-width="100"
          max-height="100"
        ></v-img>
      </template>
      <template v-slot:[`item.status_name`]="{ item }">
        <v-chip
          :class="{
            'green-chip': item.status_name === 'Ready to rent',
            'red-chip': item.status_name !== 'Ready to rent',
          }"
          label
        >
          {{ item.status_name }}
        </v-chip>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon @click="openDetailsDialog(item)">mdi-magnify</v-icon>
      </template>
    </v-data-table>
    <!--Data table ends Here -->

    <!--Modal starts Here -->

    <v-dialog v-model="detailsDialog" max-width="600px">
      <v-card>
        <v-card-title>
          Details
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDetailsDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedItem != null">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Vehicle ID:</v-list-item-title>
                <v-list-item-subtitle>{{
                  selectedItem.vehicle_id
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Make:</v-list-item-title>
                <v-list-item-subtitle>{{
                  selectedItem.make
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Model:</v-list-item-title>
                <v-list-item-subtitle>{{
                  selectedItem.model
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Year:</v-list-item-title>
                <v-list-item-subtitle>{{
                  selectedItem.year
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Vehicle Status:</v-list-item-title>
                <v-list-item-subtitle>{{
                  selectedItem.status_name
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- Add more details here as needed -->
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--Modal ends Here -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      detailsDialog: false,
      selectedItem: null,
      search: "",
      headers: [
        { text: "Vehicle ID", value: "vehicle_id" },
        {
          text: "Image",
          value: "image",
          sortable: false,
          align: "center",
          width: "100px",
        },
        { text: "Make", value: "make" },
        { text: "Model", value: "model" },
        { text: "Year", value: "year" },
        { text: "Vehicle Status", value: "status_name" },
        { text: "Actions", value: "actions" },
      ],
      data: [
        {
          vehicle_id: "CBRB0001",
          make: "YAMAHA",
          model: "XMAX ABS",
          year: "2021",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0001",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0001/photos/fHOPZq22PVebdWYtLlf5kC8az0ALtNvpvIN2Spim.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0001/photos/thumb_fHOPZq22PVebdWYtLlf5kC8az0ALtNvpvIN2Spim.jpg",
          },
        },
        {
          vehicle_id: "CBRB0002",
          make: "HONDA",
          model: "ADV CBS",
          year: "2022",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0002",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0002/photos/kzFEpuoXKmS2qr0OVUeGwGzKEMctLRLwgyPH9KoL.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0002/photos/thumb_kzFEpuoXKmS2qr0OVUeGwGzKEMctLRLwgyPH9KoL.jpg",
          },
        },
        {
          vehicle_id: "CBRB0003",
          make: "HONDA",
          model: "ADV CBS",
          year: "2019",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0003",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0003/photos/BQTAUOE6iW51i96DPye3FU4S214Y8Aht9h4x6WG7.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0003/photos/thumb_BQTAUOE6iW51i96DPye3FU4S214Y8Aht9h4x6WG7.jpg",
          },
        },
        {
          vehicle_id: "CBRB0004",
          make: "HONDA",
          model: "SCOOPY",
          year: "2019",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0004",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0004/photos/XlGlRN65knRiK51TpvNWV7lrPL2xcMJM4m20Agoz.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0004/photos/thumb_XlGlRN65knRiK51TpvNWV7lrPL2xcMJM4m20Agoz.jpg",
          },
        },
        {
          vehicle_id: "CBRB0005",
          make: "HONDA",
          model: "PCX ABS",
          year: "2022",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0005",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0005/photos/C0f9X46fPwgGTfprCRU6jA3c7Qse9hT2PO3RxkSY.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0005/photos/thumb_C0f9X46fPwgGTfprCRU6jA3c7Qse9hT2PO3RxkSY.jpg",
          },
        },
        {
          vehicle_id: "CBRB0006",
          make: "YAMAHA",
          model: "XMAX ABS",
          year: "2021",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0006",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0006/photos/iwwXwiBjjuZTYMxA4CoZUt8NigNWlCzIFrtdOw2i.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0006/photos/thumb_iwwXwiBjjuZTYMxA4CoZUt8NigNWlCzIFrtdOw2i.jpg",
          },
        },
        {
          vehicle_id: "CBRB0007",
          make: "HONDA",
          model: "VARIO",
          year: "2009",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0007",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0007/photos/Zbma210gnFOMhPwr4Bw4hJEcaofZM0wpPmQlp0Zp.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0007/photos/thumb_Zbma210gnFOMhPwr4Bw4hJEcaofZM0wpPmQlp0Zp.jpg",
          },
        },
        {
          vehicle_id: "CBRB0008",
          make: "HONDA",
          model: "SCOOPY",
          year: "2023",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0008",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0008/photos/ATP3kO71FBgjvVm0S9SxRi3M4xzT0KkjUw556jrc.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0008/photos/thumb_ATP3kO71FBgjvVm0S9SxRi3M4xzT0KkjUw556jrc.jpg",
          },
        },
        {
          vehicle_id: "CBRB0009",
          make: "YAMAHA",
          model: "NMAX",
          year: "2019",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0009",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0009/photos/NqV5QC7t9KIbiYWdImR5BBkRRTJSDu483CgPWqei.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0009/photos/thumb_NqV5QC7t9KIbiYWdImR5BBkRRTJSDu483CgPWqei.jpg",
          },
        },
        {
          vehicle_id: "CBRB0010",
          make: "HONDA",
          model: "PCX CBS",
          year: "2020",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0010",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0010/photos/GHlCINcnZUP5lnp2R1FxTCyH9ua5aq2cZB7OazcY.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0010/photos/thumb_GHlCINcnZUP5lnp2R1FxTCyH9ua5aq2cZB7OazcY.jpg",
          },
        },
        {
          vehicle_id: "CBRB0011",
          make: "HONDA",
          model: "PCX ABS",
          year: "2020",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0011",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0011/photos/xn6fH8arnY8LwkLhE2d0QMAQ10Ym1ld2MvifQpZh.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0011/photos/thumb_xn6fH8arnY8LwkLhE2d0QMAQ10Ym1ld2MvifQpZh.jpg",
          },
        },
        {
          vehicle_id: "CBRB0013",
          make: "HONDA",
          model: "VARIO",
          year: "2016",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0013",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0013/photos/QPMfybf3OAcsawixDmwWJguoEWzTEcZhnokfDEdS.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0013/photos/thumb_QPMfybf3OAcsawixDmwWJguoEWzTEcZhnokfDEdS.jpg",
          },
        },
        {
          vehicle_id: "CBRB0014",
          make: "HONDA",
          model: "VARIO",
          year: "2021",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0014",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0014/photos/vqhtNpTMHTwZg0KVfMhRxTroCGn9J9QEHjrwHn7a.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0014/photos/thumb_vqhtNpTMHTwZg0KVfMhRxTroCGn9J9QEHjrwHn7a.jpg",
          },
        },
        {
          vehicle_id: "CBRB0015",
          make: "HONDA",
          model: "SCOOPY",
          year: "2017",
          status: 1,
          status_name: "no available",
          photo_first: {
            vehicle_id: "CBRB0015",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0015/photos/l0AhtXqp0lA6g9gIxn5zllODQjlJJgeMFTN0UyyM.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0015/photos/thumb_l0AhtXqp0lA6g9gIxn5zllODQjlJJgeMFTN0UyyM.jpg",
          },
        },
        {
          vehicle_id: "CBRB0016",
          make: "HONDA",
          model: "SCOOPY",
          year: "2015",
          status: 1,
          status_name: "Ready to rent",
          photo_first: {
            vehicle_id: "CBRB0016",
            url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0016/photos/6l8xDvtKkwI6vOMPIKkdm6KS17eA2gXyNRD0AkHB.jpg",
            thumb_url:
              "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0016/photos/thumb_6l8xDvtKkwI6vOMPIKkdm6KS17eA2gXyNRD0AkHB.jpg",
          },
        },
      ],
      page: 1,
      itemsPerPage: 5, // Adjust the number of items per page as needed
    };
  },

  computed: {
    slicedData() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
  },
  methods: {
    openDetailsDialog(item) {
      this.selectedItem = item;
      this.detailsDialog = true;
    },
    // Close the details dialog
    closeDetailsDialog() {
      this.detailsDialog = false;
      this.selectedItem = null;
    },
  },
};
</script>

<style lang="scss">
.datatable-wrapper {
  .search-container {
    .add-vehicles {
      color: #000000;
      margin-bottom: 28px;
      background: linear-gradient(to right, yellow, orange);
      text-transform: none;
      @media (max-width: 619.98px) {
        margin-bottom: 0px;
      }
    }
    display: flex;
    @media (max-width: 619.98px) {
      display: block;
    }
    align-items: center;
    .search-inputs {
      display: flex;
      margin-left: auto;
      align-items: center;
      @media (max-width: 619.98px) {
        display: block;
        margin-top: 30px;
      }
      .v-select {
        margin-left: 10px;
        @media (max-width: 619.98px) {
          margin-left: 0px;
        }
      }
    }
  }
  .green-chip {
    background-color: #dff7e7 !important;
    color: green !important;
  }
  .red-chip {
    background-color: #f8e6e2 !important;
    color: red !important;
  }
}
</style>
