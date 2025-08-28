# Supabase Sozlash Ko'rsatmalari

## 1. Supabase Hisob Yaratish

1. [supabase.com](https://supabase.com) ga o'ting
2. "Start your project" tugmasini bosing
3. GitHub yoki boshqa platforma orqali ro'yxatdan o'ting
4. Yangi loyiha yarating

## 2. Authentication Sozlash

### Email Authentication Yoqish
1. Supabase Dashboard'da loyihangizga o'ting
2. **Authentication** → **Settings** bo'limiga o'ting
3. **Email Auth** ni yoqing
4. **Confirm email** ni yoqing (email tasdiqlash uchun)

### Email Templates Sozlash
1. **Authentication** → **Email Templates** ga o'ting
2. **Confirm signup** template'ni sozlang:
   - Subject: "Emailingizni tasdiqlang"
   - Content: "Tasdiqlash uchun quyidagi linkka bosing: {{ .ConfirmationURL }}"

## 3. Environment Variables

`.env` faylini yarating va quyidagi ma'lumotlarni kiriting:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Bu ma'lumotlarni qayerdan olish mumkin:
1. Supabase Dashboard'da loyihangizga o'ting
2. **Settings** → **API** bo'limiga o'ting
3. **Project URL** va **anon public** key'ni nusxalang

## 4. Database Sozlash

### Users Table (Avtomatik yaratiladi)
Supabase avtomatik ravishda `auth.users` jadvalini yaratadi. Qo'shimcha ma'lumotlar uchun:

```sql
-- User profiles jadvali yaratish
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) yoqish
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies yaratish
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## 5. Loyihani Ishga Tushirish

```bash
# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev
```

## 6. Test Qilish

1. `/signup` sahifasiga o'ting
2. Ma'lumotlarni to'ldiring
3. Email'ingizga tasdiqlash kodi kelishini tekshiring
4. Email'ni tasdiqlang
5. `/signin` sahifasida tizimga kiring

## 7. Xavfsizlik Sozlamalari

### CORS Sozlash
1. **Settings** → **API** ga o'ting
2. **CORS** bo'limida localhost va production URL'larini qo'shing:
   - `http://localhost:5173` (development)
   - `https://your-domain.com` (production)

### Rate Limiting
1. **Settings** → **API** ga o'ting
2. **Rate Limiting** ni yoqing va sozlang

## 8. Production Deployment

Vercel'da deploy qilishda:
1. Environment variables'ni Vercel'da sozlang
2. Build command: `npm run build`
3. Output directory: `dist`

## Muammolar va Yechimlar

### Email kelmayapti
- Spam papkasini tekshiring
- Supabase email settings'ni tekshiring
- Custom email provider sozlang (SendGrid, Mailgun)

### Authentication xatolari
- Environment variables'ni tekshiring
- Supabase URL va key'ni to'g'ri ekanligini tekshiring
- CORS sozlamalarini tekshiring

### Database xatolari
- RLS policies'ni tekshiring
- Database permissions'ni tekshiring
- SQL queries'ni tekshiring
