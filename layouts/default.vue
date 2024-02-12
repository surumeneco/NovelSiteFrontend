<template>
  <div
    class="d-flex flex-column justify-content-between"
    style="height: 100vh"
  >
    <div class="upper-contents">
      <NavigationHeader />
      <div
        class="d-flex flex-row justify-content-center"
        style="margin: 8px 8px 16px"
      >
        <div class="row justify-content-center layout-bodies">
          <div
            class="col-auto"
            style="margin: 0px; padding: 0px"
          >
            <div class="layout-sidemenu">
              <NavigationSideMenu />
            </div>
          </div>
          <div class="col-auto layout-contents">
            <div class="layout-contents-box">
              <slot />
              <ScrollTopButton />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lower-contents">
      <NavigationFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  // 中央部分
  .layout-bodies {
    width: 100%;

    @include mq(lrg) {
    }

    @include mq(mid) {
    }
  }

  // サイドメニュー部分
  .layout-sidemenu {
    background-color: #444444;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #474747;
    padding: 8px 16px;
    margin: 0px 16px;
    width: 300px;

    @include mq(lrg) {
      display: none;
    }
  }

  // メインコンテンツ部分
  .layout-contents {
    margin: 0px 16px;
    padding: 0px;
    width: 800px;

    @include mq(mid) {
      width: 100%;
    }
  }
  .layout-contents-box {
    padding: 8px 16px;
    background-color: #444444;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #474747;
  }
</style>
