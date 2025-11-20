<script lang="ts" setup>
function handleGoogleAnalytics(): void {
    console.log('Google analytics');
}
</script>

<template>
    <div>
        <h1>{{ $route.params.slug }}</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <button
            @click="handleGoogleAnalytics"
            type="button">
            Google analytics
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
