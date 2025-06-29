import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.BUN_SUPABASE_URL!;
const supabaseKey = process.env.BUN_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;