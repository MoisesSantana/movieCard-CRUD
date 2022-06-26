import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center font-cursive text-slate-50 text-3xl font-bold sm:text-2xl">
        Not Found
      </h1>

      <Link
        className="bg-gradient-to-b from-cyan-400 to-cyan-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
        to="/"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
