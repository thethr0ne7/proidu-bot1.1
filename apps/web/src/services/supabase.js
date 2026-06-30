// Конфигурация Supabase
// ВАЖНО: Замените на ваши реальные ключи из Supabase Dashboard
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

/**
 * Вызов Edge Function search
 * @param {import('../types/index.js').SearchParams} params
 * @returns {Promise<import('../types/index.js').SearchResult[]>}
 */
export async function searchPrograms(params) {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
}

/**
 * Вызов Edge Function route
 * @param {import('../types/index.js').SearchParams} params
 * @returns {Promise<any>}
 */
export async function buildRoute(params) {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Route error:', error);
    throw error;
  }
}