<template>
  <div>
    <header>
      <nav
        class="navbar navbar-expand-sm px-3 sticky-top navlink-dark"
        style="background-color: #70c0c0"
      >
        <NuxtLink
          to="/"
          class="navbar-brand me-4"
        >
          Eternalia World
        </NuxtLink>
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink
              to="/stories"
              class="nav-link nav-dark"
            >
              ストーリー
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/tips"
              class="nav-link nav-dark"
            >
              設定集
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/languages"
              class="nav-link nav-dark"
            >
              辞書
            </NuxtLink>
          </li>
        </ul>
        <div class="humburger-button">
          <NavigationHumberger />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .humburger-button {
    margin: 0 0 0 auto;
    display: none;

    @include mq(lrg) {
      display: block;
    }
  }
</style>
