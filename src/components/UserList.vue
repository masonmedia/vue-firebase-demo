<template>
  <div class="container-fluid">
    <div
      class="row mt-5 d-flex justify-content-center align-items-start min-vh-100 bg-light p-5">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in Users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.contact }}</td>
              <td>
                <router-link
                  :to="{ name: 'Edit', params: { id: user.id } }"
                  class="btn btn-primary"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteUser(user.id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  data() {
    return {
      Users: [],
    };
  },
  created() {},
  methods: {
    // async addUser() {
    //     if (this.newItem) {
    //         await db.collection("users").add({
    //         name: this.newItem.name,
    //         email: this.newItem.email,
    //         contact: this.newItem.contact
    //         });
    //         }
    //         this.newItem = "";
    //     },
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  firestore: {
    Users: db.collection("users"),
  },
  mounted() {},
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>