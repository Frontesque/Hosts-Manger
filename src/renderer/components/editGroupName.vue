<template>
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="highlight">Edit Name</v-card-title>
        <v-card-text style="margin-top: 1em;">
          
          <v-text-field
            label="Group Name"
            outlined
            v-model="groupName"
          ></v-text-field>
        
        </v-card-text>
        <v-divider />

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancel()">Cancel</v-btn>
          <v-btn text color="primary" @click="confirm()">Rename</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ["name", "active"],
  data() {
    return {
      groupName: new String()
    }
  },
  methods: {
    confirm() {
      this.$emit("rename", this.groupName);
    },
    cancel() {
      this.$emit("cancel")
    }
  },
  watch: {
    name(newVal) {
      this.groupName = newVal;
    }
  }
}
</script>