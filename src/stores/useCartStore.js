// stores/counter.js
import { defineStore } from 'pinia'
import Swal from 'sweetalert2';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [
      {
        id: 0,
        name: 'iphone12',
        image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg',
        price: 439
      },{
        id: 1,
        name: 'oppo',
        image: 'https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg',
        price: 549
      },
      {
        id: 2,
        name: 'samsung',
        image: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg',
        price: 243
      },
      {
        id: 3,
        name: 'Infinix',
        image: 'https://images.pexels.com/photos/5370674/pexels-photo-5370674.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 412
      },
      {
        id: 4,
        name: 'I-tel',
        image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 165
      },
      {
        id: 5,
        name: 'vodafone',
        image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 304
      },
      {
        id: 6,
        name: 'nokia',
        image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 293
      },
      {
        id: 7,
        name: 'Old',
        image: 'https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 210
      },
      {
        id: 8,
        name: 'Huawei',
        image: 'https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&w=800',
        price: 199
      }
    ],
    cartItems: []
  }),
  getters:{
    countCartItems(state){
      return state.cartItems.length;
    },
    
  },
  actions: {
    addToCart(item){
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItems[index].quantity += 1;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else{
        item.quantity = 1;
        this.cartItems.push(item);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been added",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    incrementQ(item){
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItems[index].quantity += 1;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    decrementQ(item){
      let index = this.cartItems.findIndex(product => product.id === item.id)
      if(index !== -1){
        this.cartItems[index].quantity -= 1;
        if(this.cartItems[index].quantity === 0){
          this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    removeItem(item){
      this.cartItems = this.cartItems.filter(product => product.id !== item.id)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  },
})