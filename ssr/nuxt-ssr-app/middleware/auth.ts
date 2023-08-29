export default defineNuxtRouteMiddleware((to, from) => {
    return from.path === '/terms';
})
