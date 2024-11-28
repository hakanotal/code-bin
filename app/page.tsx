export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
      <header className="text-center px-6 py-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-slate-100">CodeBin</span>!
        </h1>
        <p className="text-lg sm:text-2xl font-light mb-8">
          A simple and fast platform to share your code snippets instantly!
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/new"
            className="px-6 py-3 bg-slate-100 text-black font-medium rounded-lg shadow-lg hover:bg-slate-100 transition"
          >
            Create New Snippet
          </a>
        </div>
      </header>
    </div>
  );
}