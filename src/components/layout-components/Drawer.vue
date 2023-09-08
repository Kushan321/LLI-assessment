<template>
  <v-card height="100%" class="drawer-wrap">
    <!-- <v-btn @click.stop="drawer = !drawer" color="primary" style="z-index: 10;">click me</v-btn> -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      :permanent="$vuetify.breakpoint.mdAndUp"
      left
    >
      <template v-slot:prepend>
        <!-- Hooper Slider -->
        <Hooper
          :slidesToShow="1"
          :loop="false"
          :auto-play="true"
          :centerMode="true"
          :interval="8000"
        >
          <Slide>
            <!-- Content for Slide 1 -->
            <div class="slide-content">
              <img src="../../assets/images/bike1.png" />
            </div>
          </Slide>

          <Slide>
            <div class="slide-content">
              <img src="../../assets/images/bike1.png" />
            </div>
          </Slide>

          <Slide>
            <div class="slide-content">
              <img src="../../assets/images/bike1.png" />
            </div>
          </Slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </Hooper>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <div v-for="item in items" :key="item.title">
          <v-list-item @click="toggleSubitems(item)" :to="item.to || null" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action v-if="item.subitems">
              <v-icon>
                {{ item.expanded ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </v-list-item-action>
          </v-list-item>

          <!-- Display subitems if they exist and item is expanded -->
          <v-list v-if="item.subitems && item.expanded">
            <div v-for="subitem in item.subitems" :key="subitem.title">
              <v-list-item
                :to="subitem.to"
                link
                @click="closeDrawerAndNavigate(item)"
              >
                <v-list-item-action>
                  <v-icon>mdi-circle-small</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ subitem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css"; // Import Hooper's CSS
export default {
  name: "DraWer",
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      drawer: null,

      items: [
        {
          title: "Dashboard",
          icon: "mdi-home-city",
          to: "/dashboard",
          subitems: null,
          expanded: false,
        },
        {
          title: "Booking Management",
          icon: "mdi-calendar-badge",
          subitems: [
            { title: "Profile", to: "/profile" },
            { title: "Settings", to: "/settings" },
          ],
          expanded: false,
        },
        {
          title: "Vehicle Management",
          icon: " mdi-rv-truck",
          subitems: [
            { title: "Vehicles[+QR code]", to: "/vehicle-management/vehicles" },
            { title: "Add Vehicles", to: "/vehicle-management/add-vehicles" },
            { title: "Locations & Fees", to: "/vehicle-management/fees" },
            {
              title: "Instepction Templates",
              to: "/vehicle-management/insteption",
            },
            {
              title: "Extra Accessories",
              to: "/vehicle-management/extra-accessories",
            },
          ],
          expanded: true,
        },
        {
          title: "Maintenance / Repairs",
          icon: "mdi-wrench-clock",
          subitems: [
            { title: "Engine", to: "/engine" },
            { title: "Paint", to: "/paint" },
          ],
          expanded: false,
        },
        {
          title: "Inventory Management",
          icon: "mdi-home-battery-outline",
          subitems: [
            { title: "Engine", to: "/engine" },
            { title: "Paint", to: "/paint" },
          ],
          expanded: false,
        },
        {
          title: "Expenses Management",
          icon: "mdi-currency-usd",
          subitems: [
            { title: "Engine", to: "/engine" },
            { title: "Paint", to: "/paint" },
          ],
          expanded: false,
        },
        {
          title: "Event Management",
          icon: "mdi-calendar-star",
          subitems: [
            { title: "Engine", to: "/engine" },
            { title: "Paint", to: "/paint" },
          ],
          expanded: false,
        },
        {
          title: "Customer Management",
          icon: "mdi-face-agent",
          subitems: [
            { title: "Engine", to: "/engine" },
            { title: "Paint", to: "/paint" },
          ],
          expanded: false,
        },
        {
          title: "User Management",
          icon: "mdi-account-key",
          subitems: [
            { title: "Engine", to: "/engine" },
            { title: "Paint", to: "/paint" },
          ],
          expanded: false,
        },
        {
          title: "Settings",
          icon: "mdi-cog",
          expanded: false,
        },
      ],
    };
  },

  methods: {
    toggleSubitems(item) {
      if (item.subitems) {
        item.expanded = !item.expanded;
      }
    },
    toggle() {
      this.drawer = !this.drawer;
    },
    closeDrawerAndNavigate(item) {
      this.drawer = false;

      if (item.to) {
        this.$router.push(item.to);
      }
    },
  },
};
</script>

<style lang="scss">
.drawer-wrap {
  position: relative;
  @media (max-width: 958.98px) {
    position: absolute;
    width: 100%;
  }
  .v-navigation-drawer {
    width: 100% !important;
    .v-list-item.v-list-item--active {
      background: linear-gradient(to right, yellow, orange);
      border-radius: 10px;
    }
    .hooper {
      .hooper-list {
        .hooper-track {
          padding-left: 0px !important;
          .hooper-slide {
            .slide-content {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
}
</style>
