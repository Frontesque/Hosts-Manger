<template>
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Delete Group?</v-card-title>
        <v-card-text style="margin-top: 1em;">Are you sure that you want to delete the group <b>{{ name }}</b>?</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="active = false">Cancel</v-btn>
          <v-btn text color="primary" @click="active = false">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["name", "active"]
}
</script>