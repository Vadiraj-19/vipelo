import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProductCard from "./components/ProductCard.jsx";
import heroImg from "./assets/hero.png";
import tap1 from "./assets/tap1.png";
import tap2 from "./assets/tap2.png";
import tap3 from "./assets/tap3.png";
import tap4 from "./assets/tap4.png";
import tap5 from "./assets/tap5.png";
import tap6 from "./assets/tap6.png";


//     img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
//     title: "Cuba Prime Basin",
//     subtitle: "Matte white elegance",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
//     title: "Cosmo Vanity",
//     subtitle: "Oak + stone textures",
//   },


const products = [
  { img: tap1, title: "Cubix Pillar Cock", subtitle: "Mirror‑finish brilliance" },
  { img: tap2, title: "Victoria Tub", subtitle: "Freestanding luxury" },
  { img: tap3, title: "Silver Detail Faucet", subtitle: "High‑definition texture" },
  { img: tap4, title: "Matte Black Mixer", subtitle: "Midnight matte elegance" },
  { img: tap5, title: "Modelle Basin Faucet", subtitle: "Polished chrome clarity" },
  { img: tap6, title: "Signature Bath", subtitle: "Ceramic & brass harmony" },
];
export default function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      


    <section id="home" className="relative h-screen flex items-center">
  {/* Background image */}
  <img
    src={heroImg}
    alt="Luxury VIPELO Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-white text-center md:text-left">
    <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
      The Story of a Life Well Crafted
    </p>

    <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
      Welcome to <span className="text-emerald-300">VIPELO</span>
      <br className="hidden sm:block" /> Luxury Kitchen & Bath
    </h1>

    <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0 text-white/80">
      A portfolio of contemporary fixtures where engineering meets artistry.  
      Discover curated pieces that elevate every room.
    </p>

    {/* Buttons */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center md:justify-start">
      <a
        href="#products"
        className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-emerald-300 hover:text-black transition"
      >
        Explore Products
      </a>
      <a
        href="#about"
        className="w-full sm:w-auto px-6 py-3 border border-white/50 text-white rounded-lg hover:bg-white hover:text-black transition"
      >
        About Us
      </a>
    </div>
  </div>
</section>

  

      {/* HERO */}

      

      {/* CURATED PRODUCTS */}
      <section id="products" className="py-28 bg-gradient-to-b from-neutral-100 to-neutral-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading + Catalog Link */}
    <div className="flex items-end justify-between mb-14">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-wide">
          Curated Products
        </h2>
        <p className="mt-2 text-lg text-gray-600 font-light">
          A portfolio of contemporary fixtures where engineering meets artistry
        </p>
      </div>
      <a
        href="#contact"
        className="text-emerald-600 hover:text-emerald-800 font-medium underline"
      >
        Request a Catalog
      </a>
    </div>

    {/* Product Grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  </div>
</section>


      {/* BRAND STORY / ABOUT */}
      <section id="about" className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white py-28">
  <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
        About VIPELO
      </h2>
      <p className="text-lg text-white/80 leading-relaxed max-w-xl">
        We believe extraordinary homes are built on timeless craft. 
        Our partners and makers bring decades of heritage to every 
        faucet, basin and fitting—designed to perform and built to last.
      </p>
      <ul className="mt-8 space-y-4 text-white/80">
        <li className="flex items-start gap-3">
          <span className="text-emerald-400 text-lg">✔</span>
          Precision engineered valves & finishes
        </li>
        <li className="flex items-start gap-3">
          <span className="text-emerald-400 text-lg">✔</span>
          Thoughtful ergonomics and water efficiency
        </li>
        <li className="flex items-start gap-3">
          <span className="text-emerald-400 text-lg">✔</span>
          Coordinated hardware across rooms
        </li>
      </ul>
    </div>

    {/* Right Image */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury kitchen and bath"
        />
      </div>
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink">
            Contact Us
          </h2>
          <p className="text-ink/70 mt-2">
            Tell us about your project and we’ll get back within 1 business day.
          </p>
          <form className="mt-8 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="border rounded-md px-3 py-3"
                placeholder="First name"
              />
              <input
                className="border rounded-md px-3 py-3"
                placeholder="Last name"
              />
            </div>
            <input
              className="border rounded-md px-3 py-3"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="border rounded-md px-3 py-3"
              rows="5"
              placeholder="Project details"
            ></textarea>
            <button className="self-start bg-ink text-white px-5 py-3 rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
