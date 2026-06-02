# AR Checker

Одностраничное приложение: **Vue CLI 5** + **Vue 3** + **Tailwind CSS 3**.

## Команды

```bash
npm install
npm run serve   # dev-сервер http://localhost:8080
npm run build   # production-сборка в dist/
npm run lint    # ESLint
```

## Структура

- `src/App.vue` — единственная страница (тестовая заглушка)
- `src/assets/tailwind.css` — директивы Tailwind и `@layer components` (`.container`, `.btn`)
- `tailwind.config.js` — токены и отключение встроенного `container` (см. правила проекта)
