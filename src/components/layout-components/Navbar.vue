<template>
  <div class="nav-wrap elevation-1">
    <div class="nav-right">
      <div class="profile-pic">
        <img src="../../assets/images/avatar.png" alt="profile image" />
      </div>
      <p class="nav-name">LLI CBR-BALI</p>
      <button class="nav-arrow" @click="showDialog = true">▼</button>
    </div>
    <div class="signout-dialog" v-if="showDialog">
      <p>Are you sure you want to sign out?</p>
      <button class="signout-button" @click="signOut">Sign Out</button>
      <button class="cancel-button" @click="showDialog = false">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showSignOff: false,
      showDialog: false,
    };
  },
  methods: {
    signOut() {
      alert("Signing out...");
      this.showDialog = false; // Close the dialog after signing out
    },
  },
};
</script>

<style lang="scss">
.nav-wrap {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
  padding: 10px 25px;
  border-bottom: 1px solid silver;
  border-left: 1px solid silver;
  .nav-right {
    display: flex;
    align-items: center;
    .profile-pic {
      width: 27px;
      height: 27px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .nav-name {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 0px;
      color: orange;
      margin-left: 10px;
    }
    .nav-arrow {
      margin-left: 10px;
      cursor: pointer;
      border: none;
      background: none;
      font-size: 16px;
    }
  }
  .signout-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
    text-align: center;

    p {
      margin: 0;
    }

    .signout-button {
      margin-top: 10px;
      background-color: black;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }

    .cancel-button {
      margin-top: 10px;
      background-color: #ccc;
      color: black;
      border: none;
      padding: 5px 10px;
      margin-left: 10px;
      cursor: pointer;
      @media (max-width: 619.98px) {
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        display: block;
      }
    }
  }
}
</style>
