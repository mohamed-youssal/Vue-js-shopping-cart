<template>
    <div class="col-lg-4 col-sm-12 my-2">
        <div class="card border-dark bg-light">
            <img class="card-img-top" :src="product.image" height="200" alt="">
            <div class="card-body">
                <h4 class="card-title d-flex justify-content-center">{{ product.name }}</h4>
                <p class="card-text d-flex justify-content-center">
                    
                    <span class="badge badge bg-secondary">Price: {{ product.price }} $</span> 
                </p>
            </div>
            <div class="card-footer d-flex justify-content-center text-bg-primary">
                <div class="btn btn-secondary text-bg-primary h-100 w-100" @click="data.addToCart(product)">
                    add to cart<i class="bi bi-cart-plus bg-transparent h5 mx-2"></i>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore"

    const data =useCartStore();
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
})
</script>

<style>

</style>