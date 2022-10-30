<template>
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="highlight">Delete Group?</v-card-title>
        <v-card-text style="margin-top: 1em;">Are you sure that you want to delete the group <b class="error--text">{{ name }}</b>?</v-card-text>
        <v-divider />

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancel()">Cancel</v-btn>
          <v-btn text color="primary" @click="confirm()">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["name", "active"],

    methods: {
        confirm() {
            this.$emit("delete");
        },
        cancel() {
            this.$emit("cancel")
        }
    }
}
</script>