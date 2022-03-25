<template>
  <div class="container-fluid">
    <div
      class="
        row
        mt-5
        d-flex
        justify-content-center
        align-items-start
        min-vh-100
        bg-light
        p-5
      "
    >
      <div class="col-md-5">
        <h3 class="text-center">Update {{ user.name }}</h3>
        <form @submit.prevent="onUpdateForm">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="user.name"
              required
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              required
            />
          </div>

          <div class="form-group">
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              v-model="user.contact"
              required
            />
          </div>

          <div class="form-group">
            <button class="btn btn-primary mt-3">Update user</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log("User successfully updated!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>