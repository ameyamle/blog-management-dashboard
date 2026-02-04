import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="card p-8 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Dashboard
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Manage your content with confidence.
            </h1>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              Create, publish, and organize blog posts with a clean workflow
              designed for busy teams.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/80 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
            >
              View Posts
            </Link>
            <Link
              href="/blogs/create"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-200/40 transition hover:bg-blue-700"
            >
              Create Post
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Fast Publishing",
            description:
              "Draft, review, and publish with consistent templates and smart defaults.",
          },
          {
            title: "Clean Organization",
            description:
              "Use categories, tags, and status to keep the library tidy and searchable.",
          },
          {
            title: "Team Friendly",
            description:
              "Clear layouts make collaboration easier for editors and authors.",
          },
        ].map((item) => (
          <div key={item.title} className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
