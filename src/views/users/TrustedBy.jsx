export default function TrustedBy() {
  const brands = [
    { name: "Grind", color: "from-orange-400 to-pink-500" },
    { name: "TechFix", color: "from-blue-500 to-indigo-600" },
    { name: "Cafe", color: "from-amber-400 to-yellow-500" },
    { name: "FarmFresh", color: "from-green-500 to-emerald-600" },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold text-center mb-8">
        Trusted by Local Shops
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`w-[140px] h-[70px]
                        bg-gradient-to-r ${brand.color}
                        rounded-xl
                        shadow-md
                        flex items-center justify-center
                        text-white text-lg font-bold tracking-wide
                        hover:scale-105 hover:shadow-xl
                        transition-all duration-300`}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </section>
  );
}
