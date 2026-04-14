import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

const icons = [Search, PenTool, Rocket, TrendingUp];

export function Process() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag={t.process.sectionTag} headline={t.process.headline} />

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {t.process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary-glow flex items-center justify-center mx-auto mb-6 relative z-10 shadow-md">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary-glow uppercase tracking-wider mb-2 block font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
