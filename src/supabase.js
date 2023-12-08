import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wxbsndqibidaiwzgrnqb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4YnNuZHFpYmlkYWl3emdybnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Njc3OTEsImV4cCI6MjAxNzM0Mzc5MX0.bEN3Xv7AbvlehorK4qc0gWBvpG-Qi38LGJenjbSF3Mk";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
