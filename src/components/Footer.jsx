export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-semibold tracking-widest text-sm mb-3">VIPELO</h3>
          <p className="text-white/70 text-sm">
            Contemporary kitchen & bath fixtures crafted with precision.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a className="hover:text-white" href="#">Brochures</a></li>
            <li><a className="hover:text-white" href="#">Design Files</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 rounded-md text-ink" />
            <button className="bg-white text-ink px-4 py-2 rounded-md font-medium">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-white/60 text-xs py-6 border-t border-white/10">
        © {new Date().getFullYear()} VIPELO — All rights reserved.
      </div>
    </footer>
  );
}
