<template>
  <div class="min-h-screen h-screen bg-background flex flex-col">
    <div class="flex-shrink-0 z-40 bg-card border-b border-border shadow-sm">
      <div class="p-4 space-y-4">
        <div class="flex items-center justify-between">
          <h1 class="text-white text-2xl font-bold text-foreground lobster-font">Click Store</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa3c474ad0894486f9566ed74bbf42ce1%2Fd433de2adcc546cba35b820dd75dccac?format=webp&width=800&height=1200"
            alt="Logo"
            class="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <div class="relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Поиск..."
            class="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div class="relative px-4 pb-4 bg-card">
        <div class="flex items-center gap-2">
          <div class="flex-1 overflow-x-auto scrollbar-hide flex gap-2 scroll-smooth">
            <button
              v-for="category in CATEGORIES"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors flex-shrink-0',
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 scroll-poll relative">
      <div class="p-4">
        <div v-if="loading" class="text-center py-12">
          <p class="text-muted-foreground">Загрузка товаров...</p>
        </div>
        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-500">{{ error }}</p>
        </div>
        <div v-else-if="filteredProducts.length > 0" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <RouterLink
            v-for="product in filteredProducts"
            :key="product.id"
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
            class="group cursor-pointer rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow bg-card h-full flex flex-col"
          >
            <div class="relative w-full pt-full overflow-hidden bg-secondary h-32 sm:h-40">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-3 flex-1 flex flex-col justify-between">
              <h3 class="font-semibold text-sm sm:text-base text-foreground truncate">
                {{ product.name }}
              </h3>
              <p class="text-primary font-bold text-base sm:text-lg">
                {{ product.price }} руб
              </p>
            </div>
          </RouterLink>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-muted-foreground">Нет товаров</p>
        </div>
      </div>
    </div>

    <div class="flex-shrink-0 bg-card border-t border-border p-4 flex gap-3 shadow-lg">
      <RouterLink
        to="/"
        class="flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
      >
        <LayoutGrid class="w-5 h-5" />
        Каталог
      </RouterLink>
      <RouterLink
        to="/cart"
        class="flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingCart class="w-5 h-5" />
        Корзина
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Search, ShoppingCart, LayoutGrid } from 'lucide-vue-next'
import { api } from '@/api'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

const products = ref<Product[]>([])
const loading = ref(true)
const error = ref('')

const searchQuery = ref('')
const selectedCategory = ref('Все')

const CATEGORIES = [
  'Все',
  'Электроника',
  'Аудио',
  'Утилита',
  'Фотография',
]

onMounted(async () => {
  try {
    const data = await api.getProducts()
    products.value = data.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image_url,
      category: p.category
    }))
  } catch (err: any) {
    error.value = err.message
    console.error('Ошибка загрузки товаров:', err)
  } finally {
    loading.value = false
  }
})

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesCategory =
      selectedCategory.value === 'Все' || product.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.lobster-font {
  font-family: 'Lobster', cursive;
}

.scroll-poll {
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
}
</style>