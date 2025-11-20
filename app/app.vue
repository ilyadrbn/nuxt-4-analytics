<script setup>
useHead({
    script: [
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-GTLCCYZPCS',
        },
    ],
});

useHead({
    script: [
        {
            innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GTLCCYZPCS');
            `,
        },
    ],
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
