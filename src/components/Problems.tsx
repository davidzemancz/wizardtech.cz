import { motion } from 'framer-motion';
import { CalendarClock, Bus, Cog } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

const icons = [CalendarClock, Bus, Cog];

export function Problems() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problems" className="py-24 md:py-32 bg-offwhite" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag={t.problems.sectionTag} headline={t.problems.headline} />

        <div className="grid md:grid-cols-3 gap-8">
          {t.problems.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-glow/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-medium text-accent mb-2">
                  {item.solution}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {item.problem}
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
