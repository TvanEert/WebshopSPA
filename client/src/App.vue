<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="">featured</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Categories" right>
          <b-dropdown-item href="#">Cat1</b-dropdown-item>
          <b-dropdown-item href="#">Cat2</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="">Account</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
