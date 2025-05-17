# 🧪 Mock API dengan TypeScript

> **Proyek ini adalah contoh implementasi mock API sederhana menggunakan TypeScript, Express.js, dan Jest untuk pengujian otomatis.**  
> Cocok digunakan sebagai dasar untuk membuat backend mock sebelum integrasi ke API nyata.

---

## 📌 Deskripsi Proyek

Proyek ini menunjukkan bagaimana membuat **mock server API** yang memberikan respons JSON statis. Server dibangun menggunakan:

- **TypeScript** – untuk type safety dan development yang lebih aman
- **Express.js** – untuk RESTful API
- **Jest** – untuk testing unit API
- **ES Modules (ESM)** – mendukung `import/export`
- **`tsx`** – alat modern untuk menjalankan file `.ts` langsung tanpa kompilasi manual

Tidak menggunakan Swagger UI atau tools GUI lainnya.

---

## 🧩 Fitur Utama

✅ Endpoint `/api/users`  
✅ Data mock dari file JSON (`src/mocks/users.json`)  
✅ Controller, route, dan logika terpisah  
✅ Unit test dengan Jest  
✅ Dapat dijalankan langsung via `npm run dev`  
✅ Kompatibel dengan Windows, macOS, Linux  

---


---

## 🔧 Teknologi & Versi Terkini

| Teknologi | Versi |
|----------|-------|
| Node.js | `^20.x` |
| TypeScript | `^5.x` |
| Express | `^4.18.x` |
| Jest | `^29.x` |
| ts-jest | `^29.x` |
| @types/jest | `^29.x` |
| tsx | `^3.x` |
| fs/promises | built-in |

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository (jika sudah ada repo)

```bash
git clone https://github.com/username/mock-api-ts.git 
cd mock-api-ts
npm install
npm run dev
```

### 2. Testing API
```bash
npm test
npm run test:watch
npm run build
npm start
```

### Contoh Respons API
```bash
GET http://localhost:3000/api/users
```

**Output**
```bash
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com"
  }
]
```