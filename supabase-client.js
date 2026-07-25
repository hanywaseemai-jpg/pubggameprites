// ==========================================================================
// PULSE — Supabase client initialization
// Loaded via CDN (no build step / npm needed for a plain HTML/CSS/JS site)
// ==========================================================================

const SUPABASE_URL = 'https://jifmdblddcqzlrkbaacv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7u2mEODiehfD0JIKKH7hUA_0AoQ5V_u';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Fetch all games from the `games` table.
 * Returns an array of rows matching the schema in supabase-schema.sql.
 * On error, logs and returns an empty array so the UI can fall back gracefully.
 */
async function fetchGames() {
  const { data, error } = await supabaseClient
    .from('games')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[PULSE] Supabase fetchGames error:', error.message);
    return [];
  }
  return data || [];
}
