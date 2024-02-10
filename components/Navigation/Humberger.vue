<template>
  <div>
    <button
      class="drawer__button"
      :class="{
        active: refs.isActive
      }"
      @click="humburger_onClick"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav
      class="drawer__nav"
      :class="{
        active: refs.isActive
      }"
      @click="humburger_onClick"
    >
      <div
        class="drawer__nav__inner"
        @click.stop=""
      >
        <NavigationSideMenu />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  class Valiable {
    isActive: boolean = false;
  }

  const refs = ref<Valiable>(new Valiable());

  const humburger_onClick = function () {
    refs.value.isActive = !refs.value.isActive;
  };
</script>

<style scoped lang="scss">
  .drawer__button {
    position: relative;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 3px solid #2f2f2f;
    border-radius: 15px;
    cursor: pointer;
    z-index: 999; /* メニューを開いている時もクリックできるよう設定 */
    /* ハンバーガーボタン内の線 */
    span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2rem;
      height: 3px;
      border-radius: 3px;
      background-color: #2f2f2f;
      transform: translateX(-50%);
      &:first-child {
        transform: translate(-50%, calc(-50% - 0.6rem));
        transition: transform 0.3s ease;
      }
      &:nth-child(2) {
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
      }
      &:last-child {
        transform: translate(-50%, calc(-50% + 0.6rem));
        transition: transform 0.3s ease;
      }
    }
    &.active {
      border: 3px solid #bfbfbf;
      span {
        background-color: #bfbfbf;
        &:first-child {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
  }

  .drawer__nav {
    position: fixed; /* 追従ヘッダーなどでも表示できるよう設定しておく */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    transition: opacity 0.3s ease;
    opacity: 0;
    visibility: hidden;
    &.active {
      opacity: 1;
      visibility: visible;
      .drawer__nav__inner {
        transform: translateX(0);
      }
    }
  }
  .drawer__nav__inner {
    position: relative;
    width: 80%;
    height: 100%;
    background-color: #3f3f3f;
    padding: 4rem 1.5rem 1rem;
    margin: 0 0 0 auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
</style>
