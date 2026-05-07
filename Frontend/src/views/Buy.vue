<template>
  <div class="min-h-screen bg-background pb-24">
    <!-- Header -->
    <div class="sticky top-0 z-40 bg-card border-b border-border shadow-sm p-4">
      <div class="flex items-center gap-3">
        <RouterLink
          to="/cart"
          class="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft class="w-5 h-5 text-foreground" />
        </RouterLink>
        <h1 class="text-2xl font-bold text-foreground">Оплата</h1>
      </div>
    </div>

    <!-- Информация для доставки -->
    <div v-if="!isConfirmed" class="p-4 space-y-6">
      <div class="bg-card border border-border rounded-lg p-6 space-y-4">
        <h2 class="text-xl font-bold text-foreground">Информация для доставки</h2>

        <!-- Ввод ФИО -->
        <div class="space-y-2">
          <label class="block font-semibold text-foreground">ФИО:</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Илидар Ильич Ильичевский"
            class="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            @blur="validateName"
          />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
        </div>

        <!-- Ввод телефона -->
        <div class="space-y-2">
          <label class="block font-semibold text-foreground">Номер телефона:</label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="8 (800) 555-3535"
            class="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            @blur="validatePhone"
          />
          <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
        </div>

        <!-- Ввод адреса почты -->
        <div class="space-y-2">
          <label class="block font-semibold text-foreground">Адрес почтового отделения:</label>
          <textarea
            v-model="form.address"
            placeholder="123456, г. Москва, ул. Ленина, д. 15, кв. 45"
            class="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows="3"
            @blur="validateAddress"
          />
          <p v-if="errors.address" class="text-red-500 text-sm">{{ errors.address }}</p>
        </div>

        <!-- Заказ -->
        <div class="border-t border-border pt-4">
          <h3 class="font-semibold text-foreground mb-2">Конечная сумма:</h3>
          <div class="space-y-1 text-sm mb-3">
            <div class="border-t border-border pt-2 flex justify-between font-bold text-foreground">
              <span class="text-primary">{{ total}} руб</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Секция подтверждения -->
    <div v-else class="p-4">
      <div class="bg-card border border-border rounded-lg p-8 text-center space-y-6">
        <div class="flex justify-center">
          <div class="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle class="w-12 h-12 text-green-500" />
          </div>
        </div>

        <div class="space-y-2">
          <h2 class="text-3xl font-bold text-foreground">Заказ принят!</h2>
          <p class="text-muted-foreground">Спасибо за вашу покупку!</p>
        </div>

        <div class="bg-secondary rounded-lg p-4 text-left space-y-4">
          <div class="space-y-2">
            <p class="text-base font-semibold text-muted-foreground">ФИО:</p>
            <p class="text-lg font-semibold text-foreground">{{ form.name }}</p>
          </div>
          <div class="space-y-2">
            <p class="text-base font-semibold text-muted-foreground">Номер телефона:</p>
            <p class="text-lg font-semibold text-foreground">{{ form.phone }}</p>
          </div>
          <div class="space-y-2">
            <p class="text-base font-semibold text-muted-foreground">Адрес почтового отделения:</p>
            <p class="text-lg font-semibold text-foreground">{{ form.address }}</p>
          </div>
          <div class="border-t border-border pt-4 mt-2 space-y-2">
            <p class="text-lg font-semibold text-muted-foreground">Конечная сумма:</p>
            <p class="text-white text-3xl font-bold text-primary">{{ total }} руб</p>
          </div>
        </div>

        <p class="text-sm text-muted-foreground">
          На вашу почту был выслан чек для оплаты
        </p>
      </div>
    </div>

    <!-- Кнопки внизу экрана -->
    <div class="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex gap-3 shadow-lg">
      <RouterLink
        to="/cart"
        class="flex-1 px-4 py-2 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
      >
        <ArrowLeft class="w-5 h-5" />
        Назад
      </RouterLink>
      <button
        v-if="!isConfirmed"
        @click="submitOrder"
        :disabled="!isFormValid"
        class="flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Подтвердить заказ
      </button>
      <RouterLink
        v-else
        to="/"
        class="flex-1 px-4 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center"
      >
        Продолжить покупку
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft, CheckCircle } from 'lucide-vue-next'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

const form = ref({
  name: '',
  phone: '',
  address: ''
})

const errors = ref({
  name: '',
  phone: '',
  address: ''
})

const isConfirmed = ref(false)
const cartItems = ref<CartItem[]>([])

onMounted(() => {
  const saved = localStorage.getItem('cart')
  if (saved) {
    cartItems.value = JSON.parse(saved)
  }
})

const validateName = () => {
  const name = form.value.name.trim()
  if (!name) {
    errors.value.name = 'Укажите своё полное ФИО'
  } else if (name.length < 3) {
    errors.value.name = 'Имя должно состоять как минимум из трёх символов'
  } else {
    errors.value.name = ''
  }
}

const validatePhone = () => {
  const phone = form.value.phone.trim()
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  if (!phone) {
    errors.value.phone = 'Укажите номер телефона'
  } else if (!phoneRegex.test(phone)) {
    errors.value.phone = 'Укажите номер телефона с +'
  } else {
    errors.value.phone = ''
  }
}

const validateAddress = () => {
  const address = form.value.address.trim()
  if (!address) {
    errors.value.address = 'Укажите адрес своего почтового отделения'
  } else if (address.length < 10) {
    errors.value.address = 'Адресс должен содержать как минимум 3 символа'
  } else {
    errors.value.address = ''
  }
}

const isFormValid = computed(() => {
  return (
    form.value.name.trim() &&
    form.value.phone.trim() &&
    form.value.address.trim() &&
    !errors.value.name &&
    !errors.value.phone &&
    !errors.value.address
  )
})

const total = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
})

const submitOrder = () => {
  validateName()
  validatePhone()
  validateAddress()

  if (isFormValid.value) {
    isConfirmed.value = true
  }
}
</script>

<style scoped>

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
