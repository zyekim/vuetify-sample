<template>
  <v-navigation-drawer
    v-bind="$attrs"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />
    <v-list
      v-for="main in items"
      :key="main.title"
      nav
      link
      dense
    >
      <div v-if="!main.children">
        <v-list-item
          :to="main.to"
        >
          <v-list-item-icon>
            <v-icon>{{ main.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ main.title }}</v-list-item-title>
        </v-list-item>
      </div>

      <v-list-group
        v-else
        no-action
        :prepend-icon="main.icon"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ main.title }}</v-list-item-title>
        </template>
        <v-list-item
          v-for="child in main.children"
          :key="child.title"
          :to="child.to"
        >
          <v-list-item-title>{{ child.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name:'DefaultDrawer',
  data:() => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
      { title: 'Grid', icon: 'mdi-grid',
        children:[
          { title: 'GridSystem',to:'/grid-system' },
          { title: 'GridList', to:'/grid-list' }
        ]
      },
      { title: 'Breakpoints', icon: 'mdi-image',to:'/breakpoints' },
      { title: 'Typography & Colors', icon: 'mdi-image',to:'/typography-color' },
      { title: 'Buttons', icon: 'mdi-image',to:'/buttons' },
      { title: 'Forms', icon: 'mdi-image',to:'/forms' },
      { title: 'Authentication', icon: 'mdi-image',
        children:[
          { title: 'SignIn',to:'/authentication/sign-in' },
          { title: 'SignUp', to:'/authentication/sign-up' }
        ]
      },
      { title: 'Page', icon: 'mdi-reproduction',
        children:[
          { title: 'ProductList',to:'/page/product-list' },
        ]
      },
    ],
  })
}
</script>

<style>

</style>
