# 🚀 GitHub Repository Setup Instructions

## 1. GitHub da yangi repository yarating

1. [GitHub.com](https://github.com) ga kiring
2. O'ng yuqori burchakda "+" tugmasini bosing
3. "New repository" ni tanlang
4. Repository nomini kiriting: `ielts-preparation-platform`
5. Description: `Modern IELTS preparation platform with Vue.js and Tailwind CSS`
6. **Public** ni tanlang
7. **README, .gitignore, va license qo'shmang** (chunki biz allaqachon yaratdik)
8. "Create repository" ni bosing

## 2. Local repository ni GitHub bilan bog'lang

Repository yaratilgandan so'ng, GitHub sizga ko'rsatadigan buyruqlarni terminal da bajaring:

```bash
# Remote repository ni qo'shing (YOUR_USERNAME ni o'zgartiring)
git remote add origin https://github.com/YOUR_USERNAME/ielts-preparation-platform.git

# Branch nomini main ga o'zgartiring (agar kerak bo'lsa)
git branch -M main

# GitHub ga push qiling
git push -u origin main
```

## 3. To'liq buyruqlar

```bash
# 1. Remote qo'shish
git remote add origin https://github.com/YOUR_USERNAME/ielts-preparation-platform.git

# 2. Branch nomini main ga o'zgartirish
git branch -M main

# 3. GitHub ga push qilish
git push -u origin main
```

## 4. Keyingi yangilanishlar uchun

```bash
# O'zgarishlarni qo'shish
git add .

# Commit qilish
git commit -m "Your commit message"

# GitHub ga push qilish
git push
```

## 5. GitHub Pages ga deploy qilish (ixtiyoriy)

1. GitHub repository sahifasiga o'ting
2. "Settings" tab ni bosing
3. Chap panelda "Pages" ni toping
4. "Source" da "Deploy from a branch" ni tanlang
5. Branch: `main`, folder: `/ (root)` ni tanlang
6. "Save" ni bosing

## 6. Vercel ga deploy qilish (tavsiya etiladi)

1. [Vercel.com](https://vercel.com) ga kiring
2. "New Project" ni bosing
3. GitHub repository ni tanlang
4. Framework preset: `Vue.js` ni tanlang
5. "Deploy" ni bosing

## 7. Netlify ga deploy qilish

1. [Netlify.com](https://netlify.com) ga kiring
2. "New site from Git" ni bosing
3. GitHub repository ni tanlang
4. Build command: `npm run build`
5. Publish directory: `dist`
6. "Deploy site" ni bosing

---

**Eslatma**: `YOUR_USERNAME` ni GitHub username ingiz bilan almashtiring!
