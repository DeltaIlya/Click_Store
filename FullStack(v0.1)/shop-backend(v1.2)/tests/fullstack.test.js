// ✅ Обязательно: импортируем jest для ESM
import { jest } from '@jest/globals';

// Мокаем базу данных ДО импорта контроллеров
const mockQuery = jest.fn();

jest.unstable_mockModule('../db/pool.js', () => ({
  pool: {
    query: mockQuery
  }
}));

// Динамический импорт контроллеров (после мока!)
const { getAllProducts, getProductById } = await import('../controllers/productsController.js');
const { createOrder } = await import('../controllers/ordersController.js');

beforeEach(() => {
  mockQuery.mockReset();
});

// === ТЕСТЫ ТОВАРОВ ===

describe('Products Controller', () => {
  
  describe('getAllProducts', () => {
    it('должен вернуть список товаров', async () => {
      const fakeProducts = [{ id: 1, name: 'Товар' }];
      mockQuery.mockResolvedValue({ rows: fakeProducts });

      const req = {};
      const res = { json: jest.fn() };

      await getAllProducts(req, res);

      expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM "Products" ORDER BY id');
      expect(res.json).toHaveBeenCalledWith(fakeProducts);
    });

    it('должен вернуть ошибку 500 при сбое БД', async () => {
      mockQuery.mockRejectedValue(new Error('DB Error'));
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await getAllProducts(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe('getProductById', () => {
    it('должен вернуть товар, если он найден', async () => {
      const fakeProduct = { id: 1, name: 'Товар' };
      mockQuery.mockResolvedValue({ rows: [fakeProduct] });

      const req = { params: { id: '1' } };
      const res = { json: jest.fn() };

      await getProductById(req, res);

      expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM "Products" WHERE id = $1', ['1']);
      expect(res.json).toHaveBeenCalledWith(fakeProduct);
    });

    it('должен вернуть 404, если товар не найден', async () => {
      mockQuery.mockResolvedValue({ rows: [] });

      const req = { params: { id: '999' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await getProductById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Товар не найден' });
    });
  });
});

// === ТЕСТЫ ЗАКАЗОВ ===

describe('Orders Controller', () => {
  
  describe('createOrder', () => {
    it('должен успешно создать заказ', async () => {
      const orderData = {
        user_name: 'Иван',
        address: 'Москва',
        items: [{ product_id: 1, quantity: 1 }],
        total: 100
      };

      mockQuery.mockResolvedValueOnce({ rows: [{ id: 1 }] }); 
      mockQuery.mockResolvedValueOnce({ rows: [{ id: 555 }] });

      const req = { body: orderData };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await createOrder(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        order_id: 555,
        message: 'Заказ успешно оформлен'
      });
    });

    it('должен вернуть ошибку, если корзина пустая', async () => {
      const req = { body: { user_name: 'Иван', address: 'Мск', items: [], total: 100 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await createOrder(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Корзина не может быть пустой' });
    });

    it('должен вернуть ошибку, если товара нет в базе', async () => {
      const orderData = {
        user_name: 'Иван',
        address: 'Мск',
        items: [{ product_id: 999, quantity: 1 }],
        total: 100
      };

      mockQuery.mockResolvedValueOnce({ rows: [] });

      const req = { body: orderData };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await createOrder(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Товар с id=999 не найден в базе данных' });
    });
  });
});