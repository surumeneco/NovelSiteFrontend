<template>
  <div>
    <div
      class="d-flex flex-column justify-content-between"
      style="height: 100vh"
    >
      <div>
        <NavigationHeader />
        <div
          class="d-flex flex-row justify-content-center"
          style="margin: 8px 8px 16px"
        >
          <div class="row justify-content-center">
            <div class="col-auto">
              <NavigationSideMenu />
            </div>
            <div class="col-auto contents-container">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavigationFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
