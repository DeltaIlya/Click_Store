import { pool } from '../db/pool.js';

export async function createOrder(req, res) {
  const { user_id, user_name, address, items, total } = req.body;

  if (!user_name || !address || !items || !total) {
    return res.status(400).json({ error: 'Не все обязательные поля заполнены' });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Корзина не может быть пустой' });
  }

  for (const item of items) {
    try {
      const productCheck = await pool.query(
        'SELECT id FROM "Products" WHERE id = $1',
        [item.product_id]
      );
      if (productCheck.rows.length === 0) {
        return res.status(400).json({ 
          error: `Товар с id=${item.product_id} не найден в базе данных` 
        });
      }
    } catch (err) {
      console.error('Ошибка при проверке товара:', err);
      return res.status(500).json({ 
        error: 'Ошибка сервера при проверке товаров' 
      });
    }
  }

  try {
    const result = await pool.query(
      `INSERT INTO "Orders" (user_id, user_name, address, items, total)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id`,
      [user_id || null, user_name, address, JSON.stringify(items), total]
    );

    res.status(201).json({
      success: true,
      order_id: result.rows[0].id,
      message: 'Заказ успешно оформлен'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка сервера при создании заказа' });
  }
}