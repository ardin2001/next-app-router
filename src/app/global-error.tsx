'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global error hanya berjalan ketika mode build time
    // Good to know:
    // global-error.js is only enabled in production. In development, our error overlay will show instead.
    <html>
      <body>
        <h2>Something went wrong in global error!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}