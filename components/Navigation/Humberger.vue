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
      <div class="scroll-stopper" />
      <div class="drawer__nav__warper">
        <div
          class="drawer__nav__inner"
          @click.stop=""
        >
          <NavigationSideMenu />
        </div>
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
    // document.body.style.overflow = refs.value.isActive ? 'hidden' : '';
  };
</script>

<style scoped lang="scss">
  .drawer__button {
    position: relative;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 2px solid #2f2f2f;
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
      height: 2px;
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
      border: 2px solid #bfbfbf;
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
    display: flex;
    overscroll-behavior: contain;
    overflow-y: scroll;
    -ms-overflow-style: none; // スクロールバー非表示（IE・Edge）
    scrollbar-width: none; // スクロールバー非表示（Firefox）
    &::-webkit-scrollbar {
      // スクロールバー非表示（Chrome・Safari）
      display: none;
    }
    &.active {
      opacity: 1;
      visibility: visible;
      .drawer__nav__warper {
        transform: translateX(0);
      }
    }
  }
  .drawer__nav__warper {
    position: relative;
    background-color: #3f3f3f;
    margin: 0 0 0 auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow: hidden;
  }
  .drawer__nav__inner {
    width: 400px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 4rem 8px 8px;
  }
  .scroll-stopper {
    width: 100px;
    height: calc(100vh + 1px);
    background-color: transparent;
  }
</style>
