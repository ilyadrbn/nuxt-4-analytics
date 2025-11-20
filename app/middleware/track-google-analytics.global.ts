export default defineNuxtRouteMiddleware((to, from) => {
    if (!import.meta.client || !from.name) return;
    const { proxy } = useScriptGoogleAnalytics();
    proxy.gtag('event', 'page_middleware_ga4', {
        page_from: from.path,
        page_to: to.path,
    });
});
