<template>
  <div class="header">
    <nav class="navbar">
      <div class="container">
        <div>
          <router-link class="navbar-brand" to="/">
            <img src="../assets/games.jpg" alt="Games-img-logo" />
          </router-link>
        </div>
        <div class="col-md-4">
          <form @submit.prevent="onSubmit">
            <div class="input-group">
              <input
                id="search-input"
                class="form-control"
                placeholder="Search"
                type="text"
                v-model="searchQ"
              />
              <span class="input-group-append i1-wrapper">
                <button class="btn btn-outline" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </span>
              <div class="dropdown">
                <span class="input-group-append">
                  <div class="input-group-text bg-transparent i2-wrapper">
                    <i class="fa fa-ellipsis-v"></i>
                  </div>
                </span>
                <div class="dropdown-content">
                  <router-link to="#">Login</router-link>
                  <router-link to="#">Signup</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { router } from '../main';
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      searchQ: '',
    };
  },
  methods: {
    ...mapActions(['fetchGames']),
    ...mapMutations(['setSearchQuery']),
    onSubmit() {
      if (router.currentRoute.path === '/details') {
        router.push('/');
      }
      const searchQ = this.searchQ;
      this.setSearchQuery(searchQ);
      this.fetchGames();
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #f1f1f1;
  min-width: 8rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.dropdown-content a {
  display: block;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
}
.dropdown-content a:hover {
  background: #ddd;
}
form {
  width: 100%;
}
.header {
  padding: 1.5rem 0 1rem;
  background: #fff;
}
.i2-wrapper {
  border: 0;
}
input#search-input {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.input-group-append {
  cursor: pointer;
  border: 0;
}
button {
  height: 100%;
}
i {
  font-size: 1.1rem;
  color: var(--primary-color);
}
.input-group-text {
  height: 100%;
}

.navbar-brand img {
  width: 4rem;
  height: 4rem;
}
</style>
