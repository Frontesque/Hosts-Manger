<template>
  <div class="fullHeight" style="display: flex;">
    
    <!--   Group List   -->
    <div id="groups" class="highlight">
      <center><h1>Groups</h1></center>
      <v-btn v-for="item, i in groups" :key="i" class="group" elevation="0" @click="selectGroup(item)">{{ item.name }}</v-btn>
      <v-btn @click="addGroup()" class="group" elevation="0" color="primary"><v-icon>mdi-plus</v-icon>New Group</v-btn>
    </div>

    <!--   Group Settings   -->
    <div id="hostSettings">
      <center><h2>{{ selected.name }}</h2></center>
      <div style="display: flex; flex-align: center; justify-content: center;">
        <v-btn v-for="item, i in titleSettings" :key="i" style="min-width: 1.5em; width: 2em;  margin: 0.5em;" elevation="0">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>

      <div style="margin-top: 1em;">
        <center><h3>Entries</h3></center>
        <div style="display: flex;">
          <v-text-field class="entryBox" label="ip" placeholder="127.0.0.1" outlined />
          <v-text-field class="entryBox" label="host" placeholder="example.com" outlined />
          <v-text-field class="entryBox" label="comment" placeholder="my demo rewrite" outlined />
        </div>
        <center>
          <v-btn class="entryButton" elevation="0" color="primary"><v-icon>mdi-plus</v-icon>New</v-btn>
          <v-btn class="entryButton" elevation="0" color="primary"><v-icon>mdi-file-outline</v-icon>Import from File</v-btn>
        </center>
      </div>

    </div>

  </div>
</template>

<style scoped>
#groups {
  height: 100%;
  width: 20em;
}
.group {
  width: calc(100% - 1em);
  margin: 0.25em 0.5em;
  justify-content: left !important;
  text-transform: none !important;
}

#hostSettings {
  width: 100%;
  padding: 2em;
}

.entryBox {
  margin: 0.5em;
}
.entryButton {
  text-transform: none;
}
</style>

<script>
export default {
  data() {
    return {
      selected: {},
      groups: [
        { name:"test" }
      ],

      titleSettings: [
        { icon: "mdi-pencil" },
        { icon: "mdi-lock-open" },
        { icon: "mdi-delete" }
      ]
    }
  },
  methods: {
    addGroup() {
      this.groups.push({ name: "untitled group" })
    },
    selectGroup(group) {
      this.selected = group;
    }
  },
  mounted() {
    this.selected = this.groups[0] || {}
  }
}
</script>