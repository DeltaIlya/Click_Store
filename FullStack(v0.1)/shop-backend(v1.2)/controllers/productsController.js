import { pool } from '../db/pool.js';

export async function getAllProducts(req, res) {
  try {
    
    const result = await pool.query('SELECT * FROM "Products" ORDER BY id');
    
    res.json(result.rows);
  } catch (err) {
    
    console.error(err);
   
    res.status(500).json({ error: 'Ошибка сервера при получении товаров' });
  }
}

export async function getProductById(req, res) {
 
  const { id } = req.params;
  
  try {
    
    const result = await pool.query('SELECT * FROM "Products" WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
    
      return res.status(404).json({ error: 'Товар не найден' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка сервера при получении товара' });
  }
}