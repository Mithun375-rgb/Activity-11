import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olafecvoijvxefpndzby.supabase.co";
const supabaseKey = "sb_publishable_i7xYYzuC2IUuMbEZnJa-Ig_ZolRVVts";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
