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
        <v-btn v-for="item, i in titleSettings" :key="i" style="min-width: 1.5em; width: 2em;  margin: 0.5em;" elevation="0" @click="item.action()">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>

      <div style="margin-top: 1em;">
        <center><h3>Entries</h3></center>
        <div style="display: flex;">
          <v-text-field class="entryBox" label="Address" placeholder="127.0.0.1" outlined />
          <v-text-field class="entryBox" label="Host" placeholder="example.com" outlined />
          <v-text-field class="entryBox" label="Comment" placeholder="my demo rewrite" outlined />
          <v-btn text style="transform: translatey(17.5%); min-width: 1.5em; width: 2em;"><v-icon>mdi-delete</v-icon></v-btn>
        </div>
        <center>
          <v-btn class="entryButton" elevation="0" color="primary"><v-icon>mdi-plus</v-icon>New</v-btn>
          <v-btn class="entryButton" elevation="0" color="primary"><v-icon>mdi-file-outline</v-icon>Import from File</v-btn>
        </center>
      </div>

    </div>

    <deleteGroup   :name="selected.name" :active="showDelete" @cancel="showDelete = false;" @delete="deleteGroup" />
    <editGroupName :name="selected.name" :active="showEdit"   @cancel="showEdit = false;"   @rename="editGroupName" />

  </div>
</template>

<style>
.v-input__slot {
  min-height: 0px !important;
}
.v-label {
  top: 50% !important;
  transform: translateY(-50%);
}
</style>

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
  min-height: 1em;
}
.entryButton {
  text-transform: none;
}
</style>

<script>
export default {
  data() {
    return {
      showDelete: false,
      showEdit: false,

      selected: {},
      groups: [
        { name:"test" }
      ],
      titleSettings: [
        { icon: "mdi-pencil", action: () => { this.showEdit = true; } },
        { icon: "mdi-lock-open" },
        { icon: "mdi-delete", action: () => { this.showDelete = true; } }
      ]
    }
  },
  methods: {
    addGroup() {
      this.groups.push({ name: "untitled group" })
    },
    selectGroup(group) {
      this.selected = group;
    },
    deleteGroup(group=this.selected) {
      this.groups.splice(this.groups.indexOf(group), 1);
      this.selected = this.groups[0] || {};
      this.showDelete = false;
    },
    editGroupName(name) {
      const selectedIndex = this.groups.indexOf(this.selected);
      this.groups[selectedIndex].name = name;
      this.selected = this.groups[selectedIndex];
      this.showEdit = false;
    }
  },
  mounted() {
    this.selected = this.groups[0] || {}
  }
}
</script>