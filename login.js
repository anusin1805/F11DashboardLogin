// 1. Import Supabase from CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 2. Initialize Supabase (Find these in Project Settings -> API)
const supabaseUrl = 'https://fywndbymqvipxqhnunqn.supabase.co/auth/v1/callback'; 
const supabaseAnonKey = '31996b00fcc620ec9f2c6f9d498846ceeada7cd6';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 3. Trigger the OAuth Function
const loginButton = document.getElementById('github-login-button'); // Ensure this matches your HTML button ID

loginButton.addEventListener('click', async (e) => {
  e.preventDefault(); // Prevent default form submission if inside a form

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      // Must match exactly what you add to your Supabase Redirect URLs
      redirectTo: 'https://anusin1805.github.io/YOUR_REPO_NAME/' 
    }
  });

  if (error) {
    console.error('Error logging in:', error.message);
  }
});

