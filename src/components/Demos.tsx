import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Demos.css';

const Demos = () => {
  const { t } = useTranslation();

  const demoImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  ];

  // Cast the translated items to an array of objects
  const demos = t('demos.items', { returnObjects: true }) as Array<{title: string, description: string}>;

  return (
    <section id="demos" className="demos-page">
      <div className="container">
        <div className="demos-header">
          <h2 className="demos-title">
            <span className="text-gradient">{t('demos.title')}</span>
          </h2>
          <p className="demos-subtitle">{t('demos.subtitle')}</p>
        </div>
        
        <div className="demos-list">
          {Array.isArray(demos) && demos.map((demo, index) => (
            <a href="#" key={index} className="demo-card glass-panel animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="demo-img-wrapper">
                <img src={demoImages[index]} alt={demo.title} className="demo-img" />
              </div>
              <div className="demo-content">
                <h3 className="demo-card-title">{demo.title}</h3>
                <p className="demo-desc">{demo.description}</p>
                <span className="demo-link-text">
                  View Demo <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
