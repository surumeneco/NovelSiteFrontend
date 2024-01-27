<template>
  <div>
    <footer class="mt-auto">
      <nav style="background-color: #407070">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-auto align-self-start">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NuxtLink
                    to="#"
                    class="nav-link nav-light"
                  >
                    このサイトについて
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="col-sm-auto">
              <ul style="list-style: none; margin-top: 8px">
                <li class="nav-item">
                  <NuxtLink
                    to="https://twitter.com/surumeneco"
                    target="blank"
                    class="nav-link nav-light bi bi-twitter"
                  >
                    Twitter
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    to="https://www.youtube.com/channel/UC4MZXlEX1Zv7zGgikajwM1g"
                    target="blank"
                    class="nav-link nav-light bi bi-youtube"
                  >
                    YouTube
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    to="http://surumeneco.starfree.jp/"
                    target="blank"
                    class="nav-link nav-light bi bi-house-fill"
                  >
                    Blog
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-auto">
              <ul style="list-style: none">
                <li class="nav-item">
                  <span class="nav-link nav-light">
                    &copy;2024 - surumeneco</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
