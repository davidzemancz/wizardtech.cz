import { motion } from 'framer-motion';
import { Mail, Phone, Building2, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-offwhite" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag={t.contact.sectionTag} headline={t.contact.headline}>
          <p className="text-slate mt-4 max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </SectionHeader>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-2xl p-10 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate mb-1">{t.contact.info.companyName}</div>
                <div className="text-dark font-semibold">{t.contact.info.ico}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate mb-1">{t.contact.info.addressLabel}</div>
                <div className="text-dark font-semibold">{t.contact.info.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate mb-1">{t.contact.info.emailLabel}</div>
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="text-dark font-semibold hover:text-primary transition-colors"
                >
                  {t.contact.info.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate mb-1">{t.contact.info.phoneLabel}</div>
                <a
                  href={`tel:${t.contact.info.phone.replace(/\s/g, '')}`}
                  className="text-dark font-semibold hover:text-primary transition-colors"
                >
                  {t.contact.info.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
