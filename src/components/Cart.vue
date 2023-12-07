<template>
    <div class="row my-3">
        <div class="col-12">
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">name</th>
      <th scope="col">quantity</th>
      <th scope="col">price</th>
      <th scope="col">subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in data.cartItems" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td><img :src="item.image" class="img-fluid" width="60" height="60" alt=""></td>
      <td>{{ item.name }}</td>
      <td>
        <button class="btn btn-sm bg-transparent"  @click="data.decrementQ(item)">
          <i class="bi bi-dash-circle  text-secondary"></i>
        </button>
        {{ item.quantity }}
        <button class="btn btn-sm bg-transparent" @click="data.incrementQ(item)">
          <i class="bi bi-plus-circle text-secondary"></i>
        </button>
      </td>
      <td>{{ item.price }}</td>
      <td>{{ item.price * item.quantity }}</td>
      <td>
        <div class="btn btn-danger btn-sm" @click="data.removeItem(item)">
            <i class="bi bi-cart-dash"></i>
        </div>
      </td>
    </tr>
    <tr>
      <th class="text-center" colspan="3">
        Total:
      </th>
      <td class="text-center" colspan="3">
        <span class="badge badge bg-info">
          {{ data.cartItems.reduce((accumilate, current) => accumilate += current.price*current.quantity, 0) }}$
        </span>
      </td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
</template>
<script setup>
    import { useCartStore } from "@/stores/useCartStore";

    const data = useCartStore()
</script>

<style>

</style>