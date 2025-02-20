<script setup lang="ts">

</script>

<template>
  <div class="quick-transfer">
    <div class="users">
      <div class="user">
        <img src="../assets/ceo.png" class="avatar" alt="ceo image" />
        <span class="name">Lavya Bator</span>
        <span class="position">CEO</span>
      </div>
      <div class="user">
        <img src="../assets/randy.png" class="avatar" alt="randy image" />
        <span class="name">Randy Press</span>
        <span class="position">Director</span>
      </div>
      <div class="user">
        <img src="../assets/workman.png" class="avatar" alt="workman image" />
        <span class="name lato-bold">Workman</span>
        <span class="position lato-light">Designer</span>
      </div>
      <button class="next">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    </div>
    <div class="transfer-action">
      <span class="position transfer-message inter-regular">Write amount</span>
      <div class="transfer-input-container">
        <input class="transfer-input inter-regular" type="number" placeholder="Enter Amount" />
        <button class="transfer-button inter-bold" type="submit">
          Send <i class="ri-send-plane-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quick-transfer {
  display: grid;
  grid-template-columns: 24px repeat(3, 1fr) 24px;
  grid-template-rows: 24px repeat(3, 1fr) 24px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #FFFFFF;
  border-radius: 25px;
}

.users {
  grid-area: 2 / 2 / 4 / 5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.user
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 70px;
  aspect-ratio: initial;
}

.position {
  color: #718EBF;
  font-size: 10px;
}

.name
{
  font-size: 14px;
  color: #000000;
}

.next
{
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 4px 4px 18px -2px rgba(231, 228, 232, 0.8);
  cursor: pointer;
  border-radius: 50px;
  border: none;
  justify-self: center;
  align-self: center;
}

.next i {
  color: #718EBF;
  font-size: 24px;
}

.transfer-action {
  grid-area: 4 / 2 / 5 / 5;
  display: grid;
  grid-template-columns: 1fr 16px 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.transfer-message {
  grid-area: 1 / 1 / 2 / 2;
  font-size: 18px;
  align-self: center;
}

.transfer-input-container {
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  background-color: #EDF1F7;
  height: 48px;
  border-radius: 25px;
  align-self: center;
}

.transfer-input {
  grid-area: 1 / 1 / 2 / 2;
  background-color: transparent;
  border: none;
  outline: none;
  color: #718EBF;
  font-size: 16px;
  text-indent: 8px;
  border-radius: 25px;
}

.transfer-input::placeholder {
  color: #718EBF;
}

.transfer-button {
  grid-area: 1 / 2 / 2 / 3;
  background-color: #2D60FF;
  color: #FFFFFF;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.transfer-button i{
  color: #FFFFFF;
  font-size: 16px;
}
</style>