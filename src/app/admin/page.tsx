import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-zinc-900">You are not signed in</h1>
          <p className="mt-2 text-zinc-600">Please sign in to access the admin area.</p>
          <Link
            href="/login"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-6 font-bold text-white hover:bg-blue-700"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const email = session.user?.email ?? "Unknown";

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">Admin</h1>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
              Signed in as {email}
            </div>
            <SignOutButton />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Overview</h2>
            <p className="mt-2 text-zinc-600">Your dashboard overview goes here.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Orders</h2>
            <p className="mt-2 text-zinc-600">Recent order metrics and insights.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Customers</h2>
            <p className="mt-2 text-zinc-600">Customer engagement and growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
