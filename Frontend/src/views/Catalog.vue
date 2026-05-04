<template>
  <div class="min-h-screen bg-background pb-24">
    <!-- Header -->
    <div class="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
      <div class="p-4 space-y-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-foreground lobster-font">Click Store</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa3c474ad0894486f9566ed74bbf42ce1%2Fd433de2adcc546cba35b820dd75dccac?format=webp&width=800&height=1200"
            alt="Logo"
            class="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <!-- Search Bar -->
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

      <!-- Category Slider -->
      <div class="relative px-4 pb-4 bg-card">
        <div class="flex items-center gap-2">
          <button
            @click="scrollCategories('left')"
            class="flex-shrink-0 p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ChevronLeft class="w-5 h-5 text-primary" />
          </button>

          <div
            ref="scrollRef"
            class="flex-1 overflow-x-auto scrollbar-hide flex gap-2 scroll-smooth"
          >
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

          <button
            @click="scrollCategories('right')"
            class="flex-shrink-0 p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ChevronRight class="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="p-4">
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
        <p class="text-muted-foreground">Нет такого продукта</p>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex gap-3 shadow-lg">
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
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Search, ChevronLeft, ChevronRight, ShoppingCart, LayoutGrid } from 'lucide-vue-next'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Наушники',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    category: 'Аудио',
  },
  {
    id: 2,
    name: 'Колонка',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    category: 'Аудио',
  },
  {
    id: 3,
    name: 'Умные часы',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    category: 'Электроника',
  },
  {
    id: 4,
    name: 'Линза для камеры',
    price: 3000,
    image: 'https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?w=300&h=300&fit=crop',
    category: 'Фотография',
  },
  {
    id: 5,
    name: 'Механическая клавиатура',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop',
    category: '"Электроника"',
  },
  {
    id: 6,
    name: 'USB-C порт',
    price: 500,
    image: 'https://images.unsplash.com/photo-1616578781650-cd818fa41e57?w=300&h=300&fit=crop',
    category: 'Утилита',
  },
  {
    id: 7,
    name: 'Камера',
    price: 12500,
    image: 'https://plus.unsplash.com/premium_photo-1667538961167-2f0ab7a5046e?w=300&h=300&fit=crop',
    category: 'Фотография',
  },
  {
    id: 8,
    name: 'Роутер',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=300&h=300&fit=crop',
    category: 'Электроника',
  },
]

const CATEGORIES = [
  'Все',
  'Электроника',
  'Аудио',
  'Утилита',
  'Фотография',
]

const searchQuery = ref('')
const selectedCategory = ref('Все')
const scrollRef = ref<HTMLDivElement | null>(null)

const filteredProducts = computed(() => {
  return PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    const matchesCategory =
      selectedCategory.value === 'Все' || product.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const scrollCategories = (direction: 'left' | 'right') => {
  if (scrollRef.value) {
    const scrollAmount = 150
    scrollRef.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
</style>
