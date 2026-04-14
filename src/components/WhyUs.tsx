import { motion } from 'framer-motion';
import { Truck, Layers, Target } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

const icons = [Truck, Layers, Target];

export function WhyUs() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-offwhite" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag={t.whyUs.sectionTag} headline={t.whyUs.headline} />

        <div className="grid md:grid-cols-3 gap-8">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
