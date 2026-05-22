<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex sm:items-center justify-center">
    <div class="bg-card w-full sm:w-96 sm:rounded-2xl rounded-t-2xl max-h-[100vh] overflow-y-auto flex flex-col">
      
      <div class="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between transition-all duration-300">
        <button @click="goBack" class="p-2 hover:bg-secondary rounded-lg transition-colors">
          <ArrowLeft class="w-5 h-5 text-foreground" />
        </button>
        <div class="w-10" />
      </div>

      <div v-if="loading" class="flex-1 p-4 text-center">
        <p class="text-muted-foreground">Загрузка товара...</p>
      </div>
      
      <div v-else-if="error" class="flex-1 p-4 text-center">
        <p class="text-red-500">{{ error }}</p>
      </div>
      
      <div v-else-if="product" class="flex-1 p-4 space-y-6 scroll-poll">
        <div class="w-full rounded-lg overflow-hidden bg-secondary h-64 flex items-center justify-center">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
        </div>

        <div class="flex items-start justify-between">
          <h1 class="text-2xl font-bold text-foreground">{{ product.name }}</h1>
        </div>
        <div class="flex items-baseline gap-2 pt-2">
          <span class="text-3xl font-bold text-primary">{{ product.price }} руб.</span>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-muted-foreground leading-relaxed">{{ product.description }}</p>
        </div>

        <div class="space-y-3">
          <label class="block font-semibold text-foreground">Количество:</label>
          <div class="flex items-center gap-4 bg-secondary p-2 rounded-lg w-fit">
            <button @click="quantity = Math.max(1, quantity - 1)" class="p-1 hover:bg-background rounded transition-colors">
              <Minus class="w-5 h-5 text-foreground" />
            </button>
            <span class="w-8 text-center font-semibold text-foreground">{{ quantity }}</span>
            <button @click="quantity = quantity + 1" class="p-1 hover:bg-background rounded transition-colors">
              <Plus class="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div v-else class="flex-1 p-4 text-center text-muted-foreground">
        Товара не существует
      </div>

      <div class="sticky bottom-0 bg-card border-t border-border p-4 space-y-3">
        <button
          v-if="product"
          @click="addToCart"
          class="w-full px-4 py-2 rounded-lg font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <ShoppingCart class="w-5 h-5" />
          Добавить в корзину
        </button>
        <RouterLink
          to="/"
          class="w-full px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors text-center block flex items-center justify-center gap-2"
        >
          <LayoutGrid class="w-5 h-5" />
          Обратно в каталог
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { ArrowLeft, ShoppingCart, Minus, Plus, LayoutGrid } from 'lucide-vue-next'
import { api } from '@/api'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

const router = useRouter()
const route = useRoute()
const product = ref<Product | null>(null)
const quantity = ref(1)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  const id = parseInt(route.params.id as string)
  try {
    const data = await api.getProductById(id)
    product.value = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image_url,
      category: data.category,
      description: data.description || 'Описание товара временно отсутствует'
    }
  } catch (err: any) {
    error.value = err.message
    console.error('Ошибка загрузки товара:', err)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.back()
}

const addToCart = () => {
  if (!product.value) return
  
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
  const existingItem = cartItems.find((item: any) => item.id === product.value!.id)
  
  if (existingItem) {
    existingItem.quantity += quantity.value
  } else {
    cartItems.push({
      ...product.value,
      quantity: quantity.value
    })
  }
  
  localStorage.setItem('cart', JSON.stringify(cartItems))
  router.push('/cart')
}
</script>

<style scoped>
.scroll-poll {
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
