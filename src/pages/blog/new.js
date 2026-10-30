import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const NewPostPage = () => {
  const [status, setStatus] = React.useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: form.title.value, body: form.body.value }),
    })
    const json = await res.json()
    setStatus({ ok: res.ok, ...json })
    if (res.ok) form.reset()
  }

  return (
    <Layout pageTitle="Neuer Beitrag">
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Titel</label><br />
          <input id="title" name="title" required maxLength={100} style={{ width: '100%' }} />
        </p>
        <p>
          <label htmlFor="body">Text</label><br />
          <textarea id="body" name="body" required rows={8} maxLength={5000} style={{ width: '100%' }} />
        </p>
        <button type="submit">Beitrag anlegen</button>
      </form>
      {status && (
        <p role="status">
          {status.ok
            ? <>Gespeichert als <code>blog/{status.slug}/index.mdx</code>. Die Liste zeigt ihn sofort, die <Link to={`/blog/${status.slug}`}>Detailseite</Link> erst nach dem nächsten Build bzw. Neustart von <code>npm run develop</code>.</>
            : status.error}
        </p>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="Neuer Beitrag" />

export default NewPostPage
