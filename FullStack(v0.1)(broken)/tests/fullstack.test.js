import { describe, it, expect } from 'vitest'

const BACKEND_URL = 'http://localhost:3001'

describe('API тесты магазина', () => {
  
  // Тест 1: Проверка GET /api/products
  it('должен возвращать список товаров', async () => {
    const response = await fetch(`${BACKEND_URL}/api/products`)
    expect(response.status).toBe(200)
    
    const products = await response.json()
    expect(Array.isArray(products)).toBe(true)
    expect(products.length).toBeGreaterThan(0)
    
    const firstProduct = products[0]
    expect(firstProduct).toHaveProperty('id')
    expect(firstProduct).toHaveProperty('name')
    expect(firstProduct).toHaveProperty('price')
  })

  // Тест 2: Проверка GET /api/products/1
  it('должен возвращать товар с id=1', async () => {
    const response = await fetch(`${BACKEND_URL}/api/products/1`)
    expect(response.status).toBe(200)
    
    const product = await response.json()
    expect(product).toHaveProperty('id', 1)
    expect(product).toHaveProperty('name')
    expect(product).toHaveProperty('price')
  })

  // Тест 3: Проверка POST /api/orders
  it('должен создавать новый заказ', async () => {
    const newOrder = {
      user_name: 'Тестовый Пользователь',
      address: 'г. Тест, ул. Тестовая, д. 1',
      items: [
        {
          product_id: 1,
          name: 'Ноутбук',
          price: 52999,
          quantity: 1
        }
      ],
      total: 52999
    }
    
    const response = await fetch(`${BACKEND_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    })
    
    expect(response.status).toBe(201)
    const result = await response.json()
    expect(result).toHaveProperty('success', true)
    expect(result).toHaveProperty('order_id')
    expect(result).toHaveProperty('message', 'Заказ успешно оформлен')
  })
})