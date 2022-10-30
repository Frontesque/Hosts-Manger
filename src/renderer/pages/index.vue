<template>
  <div class="fullHeight" style="display: flex;">
    
    <div id="groups" class="highlight">
      <center><h1>Groups</h1></center>
      <v-btn v-for="item, i in groups" :key="i" class="group" elevation="0" @click="selectGroup(item)">{{ item.name }}</v-btn>
      <v-btn @click="addGroup()" class="group" elevation="0" color="primary"><v-icon>mdi-plus</v-icon>Add Group</v-btn>
    </div>
    <div id="hostSettings">
      <div>
        <center><h2>{{ selected.name }}</h2></center>
        <div style="display: flex; flex-align: center; justify-content: center;">
          <v-btn v-for="item, i in titleSettings" :key="i" style="min-width: 1.5em; width: 2em;  margin: 0.5em;" elevation="0">
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </div>
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
  }
}
</script>