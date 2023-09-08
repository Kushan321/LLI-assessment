<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="login-wrap">
      <v-col cols="12" sm="6" lg="4">
        <v-card class="elevation-12">
          <!-- Image -->
          <img
            :src="require('../assets/images/cbr-bali.jpg')"
            aspect-ratio="1"
          />

          <v-card-title>
            <div class="login-contents">
              <h3>Welcome to CBR - BALI</h3>
              <p>Please sign into your account</p>
            </div>
          </v-card-title>

          <!-- Form -->
          <v-card-text>
            <v-form @submit.prevent="login">
              <p class="plan-text">Phone Number:</p>
              <v-text-field
                v-model="phoneNumber"
                label="Phone Number"
                class="input-feilds"
                outlined
                dense
                required
              ></v-text-field>
              <div class="forgot-password">
                <p class="password">Password:</p>
                <p class="password-forgot">Forgot Password</p>
              </div>
              <v-text-field
                class="input-feilds"
                v-model="password"
                label="Password"
                outlined
                dense
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                required
              ></v-text-field>

              <v-row>
                <v-col cols="6">
                  <v-checkbox
                    v-model="rememberMe"
                    label="Remember Me"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-btn type="submit" class="sign_in_btn" block> Sign in </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "0000000000",
      password: "Admin@123",
      rememberMe: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        userName: this.phoneNumber,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-wrap {
  height: 100vh;
  .elevation-12 {
    img {
      display: flex;
      width: 120px;
      justify-content: center;
      margin: auto;
      padding: 36px 0px 15px 0px;
    }
    .login-contents {
      margin: auto;
      p,
      h3 {
        text-align: center;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
      }
    }
    .plan-text {
      margin-bottom: 5px;
    }
    .forgot-password {
      display: flex;
      justify-content: space-between;
      p {
        margin-bottom: 5px;
      }
      .password-forgot {
        color: red;
      }
    }
    .sign_in_btn {
      color: black;
      background: linear-gradient(to right, yellow, orange);
      text-transform: none;
    }
  }
}
</style>
