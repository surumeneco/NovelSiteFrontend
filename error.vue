<template>
  <div>
    <NuxtLayout>
      <h1>
        {{ error.statusCode }}
      </h1>
      <p>
        {{ error.message }}
      </p>
      <NuxtLink to="/"> ホームに戻る</NuxtLink>
    </NuxtLayout>
  </div>
</template>

<script setup>
  const error = useError();

  useHead({
    title: 'Eternalia World'
  });
</script>
