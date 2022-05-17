<template>
  <v-card height="100%">
    <v-navigation-drawer
        absolute
        permanent
        left
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="{name: item.routeName}">{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script src="./sidebar.component.js"/>

<style scoped>

</style>
