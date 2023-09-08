<template>
  <div class="vehicles-adding-wrapper">
    <v-form>
      <div class="QRcode-section">
        <v-row no-gutters justify="center">
          <v-col cols="12" sm="3" md="3"
            ><img
              class="thumb"
              src="../../assets/images/qrcode_localhost.png"
            />
            <p class="download">Download QR</p>
          </v-col>
          <v-col cols="12" sm="12" md="9">
            <p class="qr-title">Vehicle QR Code</p>
            <p>
              The system will generate a QR code per each vehicle.You can
              manually change using the change button below.Download the QR code
              and print it. Attach it to the vehicle.
            </p>
            <v-file-input
              dense
              outlined
              accept=""
              label="File input"
              v-model="files"
              @change="addFiles"
            ></v-file-input
          ></v-col>
        </v-row>
      </div>
      <v-row no-gutters justify="center">
        <v-col cols="12" md="12">
          <div class="drop-box-area">
            <p>Vehicle Images</p>
          </div>
          <v-row no-gutters justify="center">
            <v-col cols="12" sm="4">
              <p class="title-text">Vehicle ID:</p>
              <v-text-field
                v-model="formData.vehicle_id"
                label="Vehicle ID"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
              <div
                v-if="$v.formData.vehicle_id.$error"
                style="color: red; margin-top: -20px"
              >
                <div v-if="!$v.formData.vehicle_id.required">
                  Vehicle ID is required.
                </div>
              </div></v-col
            >
            <v-col cols="12" sm="4">
              <p class="title-text">Make:</p>

              <v-text-field
                v-model="formData.make"
                label="Make"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">Model:</p>

              <v-text-field
                v-model="formData.model"
                label="Model"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field
            ></v-col>
            <v-col cols="6" sm="2">
              <div class="selected-color">
                <p class="title-text">Color:</p>
                <div
                  class="color-box"
                  :style="{ backgroundColor: selectedColorDisplay }"
                ></div>
              </div>
            </v-col>
            <v-col cols="6" sm="4">
              <p class="title-text">Color Name</p>
              <v-text-field
                v-model="formData.color"
                label="Color"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
                @input="updateSelectedColor"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="title-text">Year</p>
              <v-text-field
                v-model="formData.year"
                label="Year"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
              <div
                v-if="$v.formData.year.$error"
                style="color: red; margin-top: -20px"
              >
                <div v-if="!$v.formData.year.required">Year is required.</div>
                <div v-if="!$v.formData.year.numeric">
                  Year should be a numeric.
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="title-text">CC / Category</p>
              <v-text-field
                v-model="formData.category"
                label="CC / Category"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5">
              <p class="title-text">STNK Annual Expiry:</p>
              <v-menu
                v-model="STNKAnnualExpiry"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.STNKAnnual"
                    label="STNK Annual Expiry*"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="page-input simple page-input--icon"
                    prepend-icon="mdi-calendar"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.STNKAnnual"
                  @input="STNKAnnualExpiry = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="5">
              <p class="title-text">STNK 5 Year Expiry:</p>
              <v-menu
                v-model="STNK5Expiry"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.STNK5Year"
                    label="STNK Annual Expiry*"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="page-input simple page-input--icon"
                    prepend-icon="mdi-calendar"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.STNK5Year"
                  @input="STNK5Expiry = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="2">
              <p class="title-text">Spare Key</p>
              <v-radio-group v-model="formData.spare_key" row>
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12" sm="6">
              <p class="title-text">Finance Company - Date Commenced</p>
              <v-menu
                v-model="FinanceDateCommenced"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.FinanceDateCommenced"
                    label="Finance Company - Date Commenced"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="page-input simple page-input--icon"
                    prepend-icon="mdi-calendar"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.FinanceDateCommenced"
                  @input="FinanceDateCommenced = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="title-text">Finance Company - Date Finished</p>
              <v-menu
                v-model="FinanceDateFinished"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.FinanceDateFinished"
                    label="Finance Company - Date Finished"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="page-input simple page-input--icon"
                    prepend-icon="mdi-calendar"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.FinanceDateFinished"
                  @input="FinanceDateFinished = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" class="mb-5">
              <!-- STNK Information Section -->
              <v-row
                no-gutters
                justify="center"
                class="stnk-info"
                v-for="(stnk, index) in formData.stnk"
                :key="index"
              >
                <v-col cols="12" sm="4">
                  <p class="title-text">STNK Name:</p>
                  <v-text-field
                    v-model="stnk.name"
                    :label="'STNK Name ' + (index + 1)"
                    class="input-feilds pl-1 pr-1"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <p class="title-text">STNK Image:</p>
                  <v-file-input
                    dense
                    outlined
                    accept="image/*"
                    :label="'STNK Image ' + (index + 1)"
                    v-model="stnk.image"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="2" class="delete-btn-wrap">
                  <v-btn @click="removeSTNK(index)" dark>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <hr />

              <!-- Add Another STNK Button -->
              <v-row no-gutters justify="end" class="stnk-add">
                <v-col cols="auto">
                  <v-btn @click="addSTNK">Add Another STNK</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">Blue Book #</p>
              <v-text-field
                v-model="formData.blue_book"
                label="Blue Book"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">Purchased Source</p>
              <v-text-field
                v-model="formData.purchased_source"
                label="Purchased Source"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">Date Purchased</p>
              <v-menu
                v-model="DatePurchased"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formData.DatePurchased"
                    label="Date Purchased"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    class="page-input simple page-input--icon"
                    prepend-icon="mdi-calendar"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="formData.DatePurchased"
                  @input="DatePurchased = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">Price of Purchase</p>
              <v-text-field
                v-model="formData.purchase_price"
                label="Price of Purchase"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">Place of Purchased</p>
              <v-text-field
                v-model="formData.plase_purchsed"
                label="Place of Purchased"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="title-text">No Range / NIC</p>
              <v-text-field
                v-model="formData.no_range"
                label="No Range / NIC"
                class="input-feilds pl-1 pr-1"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <p class="title-text">Features</p>
              <vue-quill-editor v-model="formData.features" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-alert v-if="submitionStatus == false" type="error" dismissible>
        Please fill in all required fields correctly
      </v-alert>
      <v-alert v-if="submitionStatus == true" type="success" dismissible>
        Saved
      </v-alert>
      <v-row no-gutters justify="end">
        <v-col cols="auto" class="mt-4">
          <v-btn color="success" @click="addVehicle">Add Vehicle</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
import { required, numeric } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],

  components: {
    VueQuillEditor: VueEditor,
  },
  data() {
    return {
      files: [],
      submitionStatus: null,
      STNKAnnualExpiry: false,
      FinanceDateFinished: false,
      FinanceDateCommenced: false,
      DatePurchased: false,
      STNK5Expiry: false,
      selectedColorDisplay: "",
      formData: {
        qr_code: "",
        vehicle_id: "",
        make: "",
        model: "",
        color: "",
        STNKAnnual: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        STNK5Year: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        spare_key: "",
        FinanceDateCommenced: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        FinanceDateFinished: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        stnk: [],
        purchased_source: "",
        blue_book: "",
        DatePurchased: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        purchase_price: "",
        plase_purchsed: "",
        no_range: "",
        features: "",
      },
    };
  },
  validations: {
    formData: {
      vehicle_id: { required },
      year: { required, numeric },
    },
  },
  created() {
    this.addSTNK();
  },
  methods: {
    addVehicle() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        // Form has validation errors, do not submit
        console.log("Please fill in all required fields correctly");
        this.submitionStatus = false;
        return;
      }
      const apiUrl = "https://example.com/api/add-vehicle";

      axios
        .post(apiUrl, this.formData)
        .then((response) => {
          console.log("Vehicle added successfully", response.data);
          this.submitionStatus = true;
          this.formData = {}; // Reassign an empty object
          this.$router.push("/vehicle-management/vehicles");
        })
        .catch((error) => {
          // Handle errors
          console.error("Error adding vehicle", error);
        });
    },
    updateSelectedColor() {
      this.selectedColorDisplay = this.formData.color;
    },
    addFiles() {
      console.warn(this.files);

      let allowedExtension = [".jpg", ".png", ".jpeg", ".svg", ".pdf", ".docs"];
      let hasInvalid = allowedExtension.some(
        (ab) => this.files && this.files.name.endsWith(ab)
      );
      console.log(hasInvalid);
      if (hasInvalid) {
        this.formData.qr_code = this.files.name;
      } else {
        if (this.files) {
          alert("Unsupported File Format");
        }
      }
    },
    addSTNK() {
      const newSTNK = JSON.parse(
        JSON.stringify({
          name: "",
          image: null,
        })
      );

      this.formData.stnk.push(newSTNK);
    },

    removeSTNK(index) {
      this.formData.stnk.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.vehicles-adding-wrapper {
  padding: 0px 20px 20px 0px;
  margin-bottom: 50px;
  .QRcode-section {
    margin-top: 20px;
    .thumb {
      width: 100%;
    }
    .qr-title {
      font-weight: 500;
    }
    .v-file-input {
      max-width: 300px;
    }
    .download {
      color: red;
      text-align: center;
      cursor: pointer;
    }
  }
  .drop-box-area {
    p {
      font-weight: 500;
    }
  }
  .title-text {
    font-weight: 500;
    margin-bottom: 5px;
  }
  .selected-color {
    p {
      font-weight: 500;
    }
    .color-box {
      width: 40px;
      height: 40px;
      border: 1px solid #ccc;
    }
  }
  .stnk-info {
    .delete-btn-wrap {
      display: flex;
      align-items: center;
      .v-btn {
        margin-left: 5px;
        background-color: #f8e6e2;
        @media (max-width: 619.98px) {
          margin-left: 0px;
          margin-bottom: 10px;
        }
        .v-icon {
          color: red;
        }
      }
    }
  }
  .stnk-add {
    margin-top: 5px;
    .v-btn {
      background-color: #f8e6e2;
      color: purple;
    }
  }
}
</style>
