import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-white">
      <main className="w-full max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Ahsan Commerce
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Modern commerce platform for growing businesses. Fast, secure, and
              built with Next.js.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/login"
                className="inline-flex h-12 items-center rounded-xl bg-blue-600 px-6 font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
              >
                Continue to Login
              </Link>
              <a
                href="https://nextjs.org/docs"
                className="inline-flex h-12 items-center rounded-xl border border-zinc-200 bg-white px-6 font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="h-64 w-96 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 w-16 rounded bg-blue-100" />
                  <div className="h-10 w-16 rounded bg-purple-100" />
                  <div className="h-10 w-16 rounded bg-pink-100" />
                  <div className="h-10 w-16 rounded bg-purple-100" />
                  <div className="h-10 w-16 rounded bg-pink-100" />
                  <div className="h-10 w-16 rounded bg-blue-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
