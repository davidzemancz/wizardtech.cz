import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from './Logo';

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#why-us' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className={scrolled ? 'text-dark' : 'text-white'}>
          <Logo size={28} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary-glow ${
                scrolled ? 'text-slate' : 'text-white/80'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-4">
            <button
              onClick={() => setLang('cs')}
              className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                lang === 'cs'
                  ? 'bg-primary text-white'
                  : scrolled
                  ? 'text-slate hover:text-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              CZ
            </button>
            <button
              onClick={() => setLang('en')}
              className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                lang === 'en'
                  ? 'bg-primary text-white'
                  : scrolled
                  ? 'text-slate hover:text-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? 'bg-dark' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? 'bg-dark' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? 'bg-dark' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-dark text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => { setLang('cs'); setMenuOpen(false); }}
                className={`text-sm font-semibold px-3 py-1.5 rounded ${
                  lang === 'cs' ? 'bg-primary text-white' : 'text-slate'
                }`}
              >
                CZ
              </button>
              <button
                onClick={() => { setLang('en'); setMenuOpen(false); }}
                className={`text-sm font-semibold px-3 py-1.5 rounded ${
                  lang === 'en' ? 'bg-primary text-white' : 'text-slate'
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
