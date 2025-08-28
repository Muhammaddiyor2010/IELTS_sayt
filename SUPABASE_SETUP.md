# 🔐 Supabase Authentication Setup

## 1. Supabase Project yarating

1. [Supabase.com](https://supabase.com) ga kiring
2. "Start your project" ni bosing
3. GitHub bilan tizimga kiring
4. "New Project" ni bosing
5. Project nomini kiriting: `ielts-preparation-platform`
6. Database password o'rnating
7. Region tanlang (Yevropa yoki AQSH)
8. "Create new project" ni bosing

## 2. Environment Variables o'rnating

Project yaratilgandan so'ng:

1. **Settings** > **API** ga o'ting
2. **Project URL** ni nusxalang
3. **anon public** key ni nusxalang
4. Loyiha papkasida `.env` fayli yarating:

```bash
# .env fayli
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 3. Authentication sozlamalari

### Email Confirmation
1. **Authentication** > **Settings** ga o'ting
2. **Enable email confirmations** ni yoqing
3. **Confirm email template** ni sozlang

### Email Templates
1. **Authentication** > **Email Templates** ga o'ting
2. **Confirm signup** ni sozlang:

**Subject:**
```
Email manzilingizni tasdiqlang
```

**Body:**
```html
<h2>Xush kelibsiz!</h2>
<p>Email manzilingizni tasdiqlash uchun quyidagi tugmani bosing:</p>
<a href="{{ .ConfirmationURL }}" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">
  Email tasdiqlash
</a>
<p>Yoki quyidagi linkni brauzerda oching:</p>
<p>{{ .ConfirmationURL }}</p>
```

### Password Reset
1. **Password reset** template ni sozlang:

**Subject:**
```
Parolni tiklash
```

**Body:**
```html
<h2>Parolni tiklash</h2>
<p>Parolingizni tiklash uchun quyidagi tugmani bosing:</p>
<a href="{{ .ConfirmationURL }}" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">
  Parolni tiklash
</a>
<p>Yoki quyidagi linkni brauzerda oching:</p>
<p>{{ .ConfirmationURL }}</p>
```

## 4. Site URL sozlang

1. **Authentication** > **Settings** ga o'ting
2. **Site URL** ga quyidagini kiriting:
   - Development: `http://localhost:5173`
   - Production: `https://your-domain.com`

## 5. Redirect URLs

1. **Authentication** > **Settings** ga o'ting
2. **Redirect URLs** ga quyidagilarni qo'shing:
   ```
   http://localhost:5173/auth/callback
   http://localhost:5173/auth/reset-password
   https://your-domain.com/auth/callback
   https://your-domain.com/auth/reset-password
   ```

## 6. Database Tables (ixtiyoriy)

Agar foydalanuvchi ma'lumotlarini saqlash kerak bo'lsa:

```sql
-- Users table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## 7. Test qilish

1. Development server ni ishga tushiring:
   ```bash
   npm run dev
   ```

2. Register sahifasiga o'ting
3. Yangi hisob yarating
4. Email tasdiqlash xabarini tekshiring
5. Email ni tasdiqlang
6. Login qiling

## 8. Xatoliklar

### "Missing Supabase environment variables"
- `.env` fayli to'g'ri yaratilganini tekshiring
- Environment variables to'g'ri nomlanganini tekshiring

### "Invalid API key"
- Supabase project URL va API key to'g'ri nusxalanganini tekshiring

### "Email not confirmed"
- Email tasdiqlash sozlamalari yoqilganini tekshiring
- Email template to'g'ri sozlanganini tekshiring

## 9. Production ga deploy

1. **Vercel** da environment variables qo'shing
2. **Netlify** da environment variables qo'shing
3. **GitHub Pages** da environment variables qo'shing

---

**Eslatma**: `.env` faylini hech qachon GitHub ga commit qilmang!
