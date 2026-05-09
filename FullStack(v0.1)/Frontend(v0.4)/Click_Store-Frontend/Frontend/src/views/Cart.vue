<template>
  <div class="min-h-screen bg-background pb-24">
    <!-- Header -->
    <div class="sticky top-0 z-40 bg-card border-b border-border shadow-sm p-4">
      <div class="flex items-center gap-3">
        <RouterLink
          to="/"
          class="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft class="w-5 h-5 text-foreground" />
        </RouterLink>
        <div>
          <h1 class="text-2xl font-bold text-foreground">Ваша корзина</h1>
          <p class="text-sm text-muted-foreground">
            {{ cartItems.length }} товар{{ cartItems.length >= 2 && cartItems.length < 5 ? 'а' : '' }}{{ cartItems.length >= 5? 'ов' : '' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Контейнер с товарами -->
    <div class="scroll-poll pb-32">
      <!-- Предметы корзины -->
      <div v-if="cartItems.length > 0" class="p-4 space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-card border border-border rounded-lg p-4 flex gap-4"
        >
          <!-- Изображение товаров -->
          <div class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Информация товаров -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-semibold text-foreground">{{ item.name }}</h3>
              <p class="text-primary font-bold text-lg mt-1">
                {{ item.price }} руб
              </p>
            </div>

            <!-- Кол-во и удаление -->
            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center gap-2 bg-secondary p-1 rounded-lg">
                <button
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  class="p-1 hover:bg-background rounded transition-colors"
                >
                  <Minus class="w-4 h-4 text-foreground" />
                </button>
                <span class="w-6 text-center font-semibold text-foreground">
                  {{ item.quantity }}
                </span>
                <button
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="p-1 hover:bg-background rounded transition-colors"
                >
                  <Plus class="w-4 h-4 text-foreground" />
                </button>
                <div style="margin-bottom: 1rem;"></div>
              </div>

            </div>
          </div>
        </div>

        <div style="margin-bottom: 1rem;"></div>

        <!-- Конечная сумма -->
        <div class="bg-card border border-border rounded-lg p-4 space-y-3">
          <span>Конечная сумма: </span>
          <span class="text-primary text-lg">{{ total}} руб.</span>       
        </div>
        <div style="margin-bottom: 1rem;"></div>
      </div>

      <!-- Корзина пуста -->
      <div v-else class="flex flex-col items-center justify-center py-12 px-4">
        <div class="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
          <ShoppingCart class="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 class="text-xl font-semibold text-foreground mb-2">
          Ваша корзина пуста
        </h2>
        <p class="text-muted-foreground text-center mb-6">
          Добавьте товаров в свою корзину через меню каталога
        </p>
      </div>
      <!-- Кнопка "Оформить покупку"-->
      <div v-if="cartItems.length > 0">
        <button @click="$router.push('/Buy')" class="translate-4 px-8 py-3 rounded-lg font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all transform hover:scale-105 ">
          Оформить покупку
        </button>
      </div>
    </div>
 
    <div style="margin-bottom: 1rem;"></div>

    <!-- Кнопки внизу экрана-->
    <div class="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex gap-3 shadow-lg">
      <RouterLink
        to="/"
        class="flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        <LayoutGrid class="w-5 h-5" />
        Каталог
      </RouterLink>
      <RouterLink
        to="/cart"
        class="flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
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
import { ShoppingCart, Plus, Minus, ArrowLeft, LayoutGrid } from 'lucide-vue-next'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

const cartItems = ref<CartItem[]>([])

onMounted(() => {
  const saved = localStorage.getItem('cart')
  if (saved) {
    cartItems.value = JSON.parse(saved)
  }
})

//Обновление предметов из корзины
const updateQuantity = (id: number, quantity: number) => {
  if (quantity <= 0) {
    removeItem(id)
  } else {
    const item = cartItems.value.find(item => item.id === id)
    if (item) {
      item.quantity = quantity
      localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }
  }
}

//Удаление предметов из корзины
const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

//Сумма всех товаров в корзине
const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})

</script>

<style scoped>
.scroll-poll {
  max-height: calc(100vh - 150px);  
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.min-h-screen {
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>