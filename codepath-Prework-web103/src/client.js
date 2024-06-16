import { createClient } from '@supabase/supabase-js';

const URL = "https://halaxrddcfmlimpdxnsv.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhbGF4cmRkY2ZtbGltcGR4bnN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1MTIzNTAsImV4cCI6MjAzNDA4ODM1MH0.musjTqoxx88IV740XNkQDwO4oXBX7JMybf0f-rKf0BM";

export const supabase = createClient(URL, API_KEY);

