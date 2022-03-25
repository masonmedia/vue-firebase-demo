<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center min-vh-100">
      <div class="col-lg-6">
        <h3 class="text-center">Add User</h3>
        <form @submit.prevent="onFormSubmit">
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
            <button class="btn btn-primary btn-block">Add User</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      user: [],
    };
  },
  methods: {
    async onFormSubmit() {
      // event.preventDefault()
      // db.collection('users').add(this.user).then(() => {
      //     alert("User successfully created!");
      //     this.user.name = ''
      //     this.user.email = ''
      //     this.user.phone = ''
      // }).catch((error) => {
      //     console.log(error);
      // });

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "users"), {
        name: this.user.name,
        email: this.user.email,
        contact: this.user.contact,
      });
      console.log("Document written with ID: ", docRef.id);
        this.user.name = '',
        this.user.email = '',
        this.user.contact = ''
    },
  },
  firestore: {
    user: db.collection("users"),
  },
};
</script>