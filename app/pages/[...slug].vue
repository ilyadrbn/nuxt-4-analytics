<script lang="ts" setup>
const { proxy } = useScriptGoogleAnalytics();
function handleGoogleAnalytics(): void {
    proxy.gtag('event', 'click_button', {
        id: 123456,
    });
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
