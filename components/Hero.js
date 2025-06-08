export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-black text-white">
      <h1 className="text-6xl font-extrabold mb-6">Hi, I'm Raja Kumar Nadendla</h1>
      <p className="text-xl max-w-2xl text-gray-400">
        Product Manager • AI Search Strategist • Building Human-Centric AI Products
      </p>
      <div className="mt-8">
        <a href="/projects" className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
          View My Work
        </a>
      </div>
    </section>
  );
}
