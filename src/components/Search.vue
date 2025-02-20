<script setup lang="ts">

</script>

<template>
  <div class="search-container">
    <div class="search">
      <button class="search-button">
        <i class="ri-search-2-line"></i>
      </button>
      <input type="text" name="search" id="search" class="search-input lato-light" placeholder="Search for something">
    </div>
  </div>
</template>

<style scoped>
.search-container
{
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}
.search {
  width: 255px;
  height: 50px;
  background-color: #E6EFF5;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 48px repeat(4, 1fr);
  grid-template-rows: 50px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.form-control::placeholder {
  color: #718EBF;
}

.search-input {
  grid-area: 1 / 2 / 2 / 6;
  background-color: transparent;
  border: none;
  color: #718EBF;
}
.search-input:focus, .search-button:focus-visible
{
  outline: none;
}
.search-button {
  background-color: transparent;
  border: none;
  grid-area: 1 / 1 / 2 / 2;
  cursor: pointer;
}
.search-button:hover {
  border: none;
}
.search-button:hover i{
  border: none;
  color: #000;
}
.search-button:focus, .search-button:focus-visible {
  outline: none;
}
.search-button i {
  font-size: 20px;
  color: #718EBF;
}
</style>