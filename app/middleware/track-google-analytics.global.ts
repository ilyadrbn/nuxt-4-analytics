export default defineNuxtRouteMiddleware((to, from) => {
    if (!import.meta.client || !from.name) return;
    const { proxy } = useScriptGoogleAnalytics();
    proxy.dataLayer.push({
        event: 'page_middleware_dl',
        page_from: from.path,
        page_to: to.path,
    });
    proxy.gtag('event', 'page_middleware_gtag', {
        page_from: from.path,
        page_to: to.path,
    });
});
