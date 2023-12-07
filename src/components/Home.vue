<template>
    <div class="row my-4">
        <ProductItem v-for="product in data.products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
    import { useCartStore } from "@/stores/useCartStore";
    import ProductItem from "./ProductItem.vue";

    const data = useCartStore();
</script>

<style>

</style>