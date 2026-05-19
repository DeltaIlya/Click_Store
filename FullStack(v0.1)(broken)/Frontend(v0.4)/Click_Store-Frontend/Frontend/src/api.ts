// const API_BASE_URL = 'http://localhost:3001/api';
const API_BASE_URL = 'https://loose-dingos-find.loca.lt/api';

export const api = {
  async getProducts() {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) {
      throw new Error('Ошибка загрузки товаров')
    }
    return response.json()
  },

  async getProductById(id: number) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    if (!response.ok) {
      throw new Error('Товар не найден')
    }
    return response.json()
  },

  async createOrder(orderData: {
    user_name: string
    address: string
    items: Array<{
      product_id: number
      name: string
      price: number
      quantity: number
    }>
    total: number
  }) {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Ошибка при создании заказа')
    }
    return response.json()
  }
}