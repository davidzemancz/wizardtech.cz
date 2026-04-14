import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from './Logo';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <Logo size={24} />
            <span className="text-white/40 mx-2">|</span>
            <span className="text-white/60 text-sm">{t.footer.tagline}</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#services" className="text-white/50 text-sm hover:text-white transition-colors">
              {t.nav.services}
            </a>
            <a href="#why-us" className="text-white/50 text-sm hover:text-white transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-white/50 text-sm hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </nav>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/30 text-sm">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
