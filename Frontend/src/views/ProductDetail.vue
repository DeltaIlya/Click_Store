<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
    <div class="bg-card w-full sm:w-96 sm:rounded-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto flex flex-col">
      
        <div 
          class="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between transition-all duration-300"
        >
          <button @click="goBack" class="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft class="w-5 h-5 text-foreground" />
          </button>
          <div class="w-10" />
        </div>

      <div v-if="product" class="flex-1 p-4 space-y-6 product-scroll">
        <div class="w-full rounded-lg overflow-hidden bg-secondary h-64 flex items-center justify-center">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
        </div>

        <!-- Информация продукта -->
      <div class="flex items-start justify-between">
        <h1 class="text-2xl font-bold text-foreground">
          {{ product.name }}
        </h1>
      </div>
      <div class="flex items-baseline gap-2 pt-2">
        <span class="text-3xl font-bold text-primary">
          {{ product.price }} руб.
        </span>
      </div>

        <!-- Описание -->
        <div class="space-y-2">
          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ product.description }} 
          </p>
          <div style="margin-bottom: 2rem;"></div>
        </div>

        <!-- Количество для заказа -->
        <div class="space-y-3">
          <label class="block font-semibold text-foreground">
            Количество:
          </label>
          <div class="flex items-center gap-4 bg-secondary p-2 rounded-lg w-fit">
            <button
              @click="quantity = Math.max(1, quantity - 1)"
              class="p-1 hover:bg-background rounded transition-colors"
            >
              <Minus class="w-5 h-5 text-foreground" />
            </button>
            <span class="w-8 text-center font-semibold text-foreground">
              {{ quantity }}
            </span>
            <button
              @click="quantity = quantity + 1"
              class="p-1 hover:bg-background rounded transition-colors"
            >
              <Plus class="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <!-- Ошибка -->
      <div v-else class="flex-1 p-4 text-center text-muted-foreground">
        Товара не существует. Как ты сюда попал?
      </div>

      <!-- Кнопки снизу экрана -->
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
          class="w-full px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors text-center block transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <LayoutGrid class="w-5 h-5" />
          Обратно в каталог
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { ArrowLeft, ShoppingCart, Minus, Plus, LayoutGrid} from 'lucide-vue-next'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Наушники',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    category: 'Аудио',
    description: 'Premium-наушники с активным шумоподавлением погружают вас в музыку без отвлекающих факторов. Эргономичный дизайн и 30 часов автономной работы делают их идеальным спутником в поездках.'
  },
  {
    id: 2,
    name: 'Колонка',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    category: 'Аудио',
    description: 'Влагозащищённая портативная колонка с мощным 360-градусным звуком заполнит музыкой любую комнату или пляж. Лёгкий корпус и Bluetooth 5.3 обеспечивают стабильное соединение до 20 метров.'
  },
  {
    id: 3,
    name: 'Умные часы',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    category: 'Электроника',
    description: 'Отслеживайте шаги, пульс, сон и уровень кислорода в крови с помощью интеллектуальных умных часов. Встроенный GPS и 7-дневный запас батареи помогают оставаться активным без постоянной подзарядки.'
  },
  {
    id: 4,
    name: 'Линза для камеры',
    price: 3000,
    image: 'https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?w=300&h=300&fit=crop',
    category: 'Фотография',
    description: 'Профессиональный объектив с фиксированным фокусным расстоянием 50 мм позволяет создавать портреты с красивым размытием фона. Многослойное просветляющее покрытие минимизирует блики и засветы даже при ярком солнце.'
  },
  {
    id: 5,
    name: 'Механическая клавиатура',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop',
    category: 'Электроника',
    description: 'Компактная механическая клавиатура с тактильными переключателями и RGB-подсветкой ускоряет набор текста и делает каждое нажатие приятным. Прочный алюминиевый корпус и сменные колпачки клавиш позволяют полностью кастомизировать внешний вид.'
  },
  {
    id: 6,
    name: 'USB-С порт',
    price: 500,
    image: 'https://images.unsplash.com/photo-1616578781650-cd818fa41e57?w=300&h=300&fit=crop',
    category: 'Утилита',
    description: 'Ультракомпактный USB-C хаб превращает один порт ноутбука в четыре: HDMI, USB 3.0, SD-кардридер и USB-C с поддержкой Power Delivery. Идеальное решение для работы с внешним монитором и флешками одновременно.'
  },
  {
    id: 7,
    name: 'Камера',
    price: 12500,
    image: 'https://plus.unsplash.com/premium_photo-1667538961167-2f0ab7a5046e?w=300&h=300&fit=crop',
    category: 'Фотография',
    description: 'Водонепроницаемая экшн-камера снимает 4K-видео при 60 кадрах в секунду и делает 20-мегапиксельные фото даже на глубине до 10 метров. Стабилизация изображения и поворотный экран позволяют создавать плавный контент на ходу.'
  },
  {
    id: 8,
    name: 'Роутер',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=300&h=300&fit=crop',
    category: 'Электроника',
    description: 'Двухдиапазонный Wi-Fi 6 роутер обеспечивает стабильную скорость до 3000 Мбит/с и покрывает квартиру до 150 кв. метров. Четыре внешние антенны и технология MU-MIMO раздают интернет на 30+ устройств без задержек.'
  },
]

const router = useRouter()
const route = useRoute()
const quantity = ref(1)
const isScrolled = ref(false)
const isTitleVisible = ref(true)

const product = computed<Product | null>(() => {
  const id = parseInt(route.params.id as string)
  const found = PRODUCTS.find(p => p.id === id)
  return found || null
})

const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement
  isScrolled.value = target.scrollTop > 50
  
  // Текст исчезает, когда проскроллили больше 100px
  isTitleVisible.value = target.scrollTop < 100
}

onMounted(() => {
  const scrollContainer = document.querySelector('.product-scroll')
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  const scrollContainer = document.querySelector('.product-scroll')
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', handleScroll)
  }
})

const goBack = () => {
  router.back()
}

const addToCart = () => {
  // Проверка на существование product
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
.product-scroll {
  max-height: calc(100vh - 140px);  
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>