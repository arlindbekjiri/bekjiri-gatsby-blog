# bekjiri-gatsby-blog

Blog nach dem offiziellen [Gatsby-Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/) (M245, Aufgabe 7).

- Live: https://bekjiri-gatsby-blog.vercel.app
- Liste: `/blog/` · Detail: `/blog/<slug>/` · Formular: `/blog/new/`

```bash
npm install
npm run develop   # http://localhost:8000
npm run build
```

Das Formular speichert Beiträge über die Gatsby Function `src/api/posts.js` als MDX-Datei in `blog/`.
Das geht nur lokal; auf Vercel antwortet die Function mit 501, weil die Seiten beim Build entstehen.
