<template>
    <ul class="nav justify-content-center bg-secondary my-1 rounded">
        <li class="nav-item bg-transparent">
            <router-link class="nav-link text-dark" to="/"><i class="bi bi-house-door-fill h4"></i>Home</router-link>
        </li>
        <li class="nav-item bg-transparent">
            <router-link class="nav-link  bg-transparent text-dark h4" to="/cart"><i class="bi bi-cart4 bg-transparent text-dark h4"></i>({{ data.countCartItems }})</router-link>
        </li>
    </ul>
</template>

<script setup>
    import { useCartStore } from '@/stores/useCartStore';
        const data = useCartStore();
</script>

<style>

</style>