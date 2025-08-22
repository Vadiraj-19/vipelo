export default function ProductCard({ img, title, subtitle }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700">
      <img
        src={img}
        alt={title}
        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="font-serif text-2xl font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </article>
  );
}
