// shared/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';
import configData from './config.json';

// Prioriza variables de entorno (Vite/Vercel) y usa el config.json como respaldo local
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || configData.supabaseUrl;
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || configData.supabaseAnonKey;

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);
