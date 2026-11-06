// Speichert einen Beitrag als blog/<slug>/index.mdx
// Geht nur lokal, auf Vercel ist das Dateisystem schreibgeschützt
const fs = require("fs")
const path = require("path")

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST erlaubt." })
  }
  if (process.env.VERCEL) {
    return res.status(501).json({
      error: "Auf Vercel nicht möglich: Gatsby erzeugt die Seiten beim Build, zur Laufzeit kann keine MDX-Datei gespeichert werden. Lokal mit «npm run develop» funktioniert das Formular.",
    })
  }

  const title = String(req.body?.title ?? "").trim().slice(0, 100)
  const body = String(req.body?.body ?? "").trim().slice(0, 5000)
  if (!title || !body) {
    return res.status(400).json({ error: "Titel und Text sind Pflicht." })
  }

  const slug =
    title.toLowerCase().normalize("NFKD").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") ||
    `beitrag-${Date.now()}`
  const dir = path.join(process.cwd(), "blog", slug)
  if (fs.existsSync(dir)) {
    return res.status(409).json({ error: `Den Beitrag «${slug}» gibt es schon.` })
  }

  // { } < > würde MDX als Code lesen, darum als HTML-Entities speichern
  const safeBody = body.replace(/[{}<>]/g, (c) => `&#${c.charCodeAt(0)};`)
  const date = new Date().toISOString().slice(0, 10)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(
    path.join(dir, "index.mdx"),
    `---\ntitle: ${JSON.stringify(title)}\ndate: "${date}"\nslug: "${slug}"\n---\n\n${safeBody}\n`
  )
  return res.status(201).json({ slug })
}
