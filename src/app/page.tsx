export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-xl flex-col items-center justify-center gap-6 px-6 py-16 bg-white shadow-sm dark:bg-zinc-950 sm:rounded-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Next.js + MongoDB starter
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          Your app is ready. Add your MongoDB connection string to
          <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            .env.local
          </code>
          as
          <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            MONGODB_URI
          </code>
          to start using MongoDB.
        </p>
        <div className="mt-4 grid w-full gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-1 font-medium text-zinc-900 dark:text-zinc-50">
              Dev commands
            </p>
            <p className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
              npm run dev
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-1 font-medium text-zinc-900 dark:text-zinc-50">
              Mongo helper
            </p>
            <p className="text-xs text-zinc-700 dark:text-zinc-300">
              Use <code className="font-mono text-[11px]">src/lib/mongodb.ts</code> to get a connected client.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
