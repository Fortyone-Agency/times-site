# Times Website

The bilingual product website for [Times](https://apps.apple.com/jp/app/times-world-clock-timezones/id1048770312?l=en-US&mt=12), a menu-bar world clock and date converter for macOS.

## Pages

- `/` — English product page
- `/ja/` — Japanese product page
- `/privacy/` — English privacy policy
- `/ja/privacy/` — Japanese privacy policy

## Development

```sh
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Production

```sh
npm run check
```

The static site is written to `dist/`. Asset and internal page paths are relative, so the folder can be hosted at a domain root or a nested path such as `/times/`.
