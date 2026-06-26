import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Globe, Database, Cpu, Check, ShieldCheck, Download, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';
import './ProductPacs.css';

const ProductPacs = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const features = [
    { title: t('pacs.obj1_title'), desc: t('pacs.obj1_desc'), icon: <Globe size={32} /> },
    { title: t('pacs.obj2_title'), desc: t('pacs.obj2_desc'), icon: <Database size={32} /> },
    { title: t('pacs.obj3_title'), desc: t('pacs.obj3_desc'), icon: <Cpu size={32} />, isSoon: true },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mediaImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1576091160550-2108b34ce351?auto=format&fit=crop&w=2400&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev === mediaImages.length - 1 ? 0 : prev + 1;
        if (carouselRef.current) {
          carouselRef.current.scrollTo({
            left: next * carouselRef.current.offsetWidth,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [mediaImages.length]);

  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const newSlide = Math.round(scrollLeft / width);
    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="product-page">
      {/* Product Hero */}
      <section className="product-hero-centered">
        <div className="hero-glow-orb"></div>
        <div className="container text-center">
          <div className="hero-centered-content animate-fade-in">
            <span className="product-badge">MED CLOUD</span>
            <h1 className="product-title-huge">
              <span className="text-gradient">{t('pacs.title')}</span>
            </h1>
            <p className="product-hero-desc-centered">
              {t('pacs.description')}
            </p>
            <div className="product-actions-centered">
              <a href="#/contact" className="btn btn-primary btn-large">
                {t('pacs.view_demo')} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Showcase: Carousel */}
      <section className="product-media-showcase bg-secondary">
        <div className="media-carousel-container">
          <div 
            className="media-carousel" 
            ref={carouselRef}
            onScroll={handleCarouselScroll}
          >
            {mediaImages.map((src, idx) => (
              <img key={idx} src={src} alt={`Dashboard ${idx + 1}`} />
            ))}
          </div>
          <div className="carousel-dots">
            {mediaImages.map((_, idx) => (
              <button 
                key={idx} 
                className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlide(idx);
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({
                      left: idx * carouselRef.current.offsetWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Objectives & Scope */}
      <section className="product-objectives-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              <span className="text-gradient">{t('pacs.objectives_title')}</span>
            </h2>
            <p className="section-subtitle">
              {t('pacs.objectives_intro')}
            </p>
          </div>

          <div className="objectives-grid">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms`, height: '100%' }}>
                <div className="objective-card glass-panel">
                  <div className="objective-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div className="objective-content">
                    <h3 className="objective-title">
                      {feature.title}
                      {feature.isSoon && <span className="soon-badge">{t('pacs.soon_badge')}</span>}
                    </h3>
                    <p className="objective-desc">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pacs-pricing-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="product-badge">{t('pacs_pricing.intro_title')}</span>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem' }}>
              {t('pacs_pricing.title')}
            </h2>
            <p className="section-subtitle">
              {t('pacs_pricing.intro_desc')}
            </p>
          </div>

          <div className="pricing-intro-list">
            <div className="pricing-intro-step">
              <div className="step-number text-gradient">1</div>
              <div className="step-content">
                <h4 className="step-title">{t('pacs_pricing.intro_aws_title')}</h4>
                <p className="step-desc">{t('pacs_pricing.intro_aws_desc')}</p>
              </div>
            </div>
            <div className="pricing-intro-step">
              <div className="step-number text-gradient">2</div>
              <div className="step-content">
                <h4 className="step-title">{t('pacs_pricing.intro_cost_title')}</h4>
                <p className="step-desc">{t('pacs_pricing.intro_cost_desc')}</p>
              </div>
            </div>
            <div className="pricing-intro-step">
              <div className="step-number text-gradient">3</div>
              <div className="step-content">
                <h4 className="step-title">{t('pacs_pricing.intro_lock_title')}</h4>
                <p className="step-desc">{t('pacs_pricing.intro_lock_desc')}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl mb-xl">
            <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem' }}>{t('pacs_pricing.plans_title')}</h2>
            <p className="section-subtitle" style={{ fontSize: '1.25rem' }}>{t('pacs_pricing.plans_subtitle')}</p>
          </div>

          <div className="pricing-table-container">
            <table className="pricing-table">
              <colgroup>
                <col className="col-features" />
                <col className="col-plan" />
                <col className="col-plan highlighted-col" />
                <col className="col-plan" />
              </colgroup>
              <thead>
                <tr>
                  <th className="feature-col-header"></th>
                  <th className="plan-col-header">
                    <h3 className="table-plan-title">{t('pacs_pricing.plan1_title')}</h3>
                    <div className="table-plan-price-wrapper">
                      <span className="table-plan-price">{t('pacs_pricing.plan1_price')}</span>
                      <span className="table-plan-period">/ mes</span>
                    </div>
                    <p className="table-plan-desc">{t('pacs_pricing.plan1_desc')}</p>
                  </th>
                  <th className="plan-col-header highlighted-col-header">
                    <div className="table-popular-badge">Recomendado</div>
                    <h3 className="table-plan-title">{t('pacs_pricing.plan2_title')}</h3>
                    <div className="table-plan-price-wrapper">
                      <span className="table-plan-price">{t('pacs_pricing.plan2_price')}</span>
                      <span className="table-plan-period">/ mes</span>
                    </div>
                    <p className="table-plan-desc">{t('pacs_pricing.plan2_desc')}</p>
                  </th>
                  <th className="plan-col-header">
                    <h3 className="table-plan-title">{t('pacs_pricing.plan3_title')}</h3>
                    <div className="table-plan-price-wrapper">
                      <span className="table-plan-price">{t('pacs_pricing.plan3_price')}</span>
                      <span className="table-plan-period">/ mes</span>
                    </div>
                    <p className="table-plan-desc">{t('pacs_pricing.plan3_desc')}</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Modalities */}
                <tr>
                  <td className="feature-label">{(t('pacs_pricing.table_features', { returnObjects: true }) as string[])[0]}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan1_f1')}</td>
                  <td className="plan-cell highlighted-cell">{t('pacs_pricing.plan2_f1')}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan3_f1')}</td>
                </tr>
                {/* Patient Portal */}
                <tr>
                  <td className="feature-label">{(t('pacs_pricing.table_features', { returnObjects: true }) as string[])[1]}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan1_f2')}</td>
                  <td className="plan-cell highlighted-cell">{t('pacs_pricing.plan2_f2')}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan3_f2')}</td>
                </tr>
                {/* Web Viewer */}
                <tr>
                  <td className="feature-label">{(t('pacs_pricing.table_features', { returnObjects: true }) as string[])[2]}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan1_f3')}</td>
                  <td className="plan-cell highlighted-cell">{t('pacs_pricing.plan2_f3')}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan3_f3')}</td>
                </tr>
                {/* Support */}
                <tr>
                  <td className="feature-label">{(t('pacs_pricing.table_features', { returnObjects: true }) as string[])[3]}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan1_f4')}</td>
                  <td className="plan-cell highlighted-cell">{t('pacs_pricing.plan2_f4')}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan3_f4')}</td>
                </tr>
                {/* Local Sync */}
                <tr>
                  <td className="feature-label">{(t('pacs_pricing.table_features', { returnObjects: true }) as string[])[4]}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan1_f5')}</td>
                  <td className="plan-cell highlighted-cell">{t('pacs_pricing.plan2_f5')}</td>
                  <td className="plan-cell">{t('pacs_pricing.plan3_f5')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="pacs-benefits-section bg-secondary">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title text-gradient">{t('pacs_pricing.benefits_title')}</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item glass-panel">
              <div className="benefit-icon-wrapper"><Check size={24} /></div>
              <div>
                <h4 className="benefit-title">{t('pacs_pricing.benefit1_title')}</h4>
                <p className="benefit-desc">{t('pacs_pricing.benefit1_desc')}</p>
              </div>
            </div>
            <div className="benefit-item glass-panel">
              <div className="benefit-icon-wrapper"><Check size={24} /></div>
              <div>
                <h4 className="benefit-title">{t('pacs_pricing.benefit2_title')}</h4>
                <p className="benefit-desc">{t('pacs_pricing.benefit2_desc')}</p>
              </div>
            </div>
            <div className="benefit-item glass-panel">
              <div className="benefit-icon-wrapper"><Check size={24} /></div>
              <div>
                <h4 className="benefit-title">{t('pacs_pricing.benefit3_title')}</h4>
                <p className="benefit-desc">{t('pacs_pricing.benefit3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Portal */}
      <section className="pacs-portal-section">
        <div className="container">
          <div className="portal-layout">
            <div className="portal-content">
              <h2 className="section-title text-gradient">{t('pacs_pricing.portal_title')}</h2>
              <p className="portal-desc lead-text">{t('pacs_pricing.portal_desc')}</p>
              
              <div className="portal-feature">
                <div className="portal-feature-icon"><Smartphone size={24} /></div>
                <div className="portal-feature-text">
                  <h4 className="portal-feature-title">{t('pacs_pricing.portal_f1_title')}</h4>
                  <p>{t('pacs_pricing.portal_f1_desc')}</p>
                </div>
              </div>
              
              <div className="portal-feature">
                <div className="portal-feature-icon"><Download size={24} /></div>
                <div className="portal-feature-text">
                  <h4 className="portal-feature-title">{t('pacs_pricing.portal_f2_title')}</h4>
                  <p>{t('pacs_pricing.portal_f2_desc')}</p>
                </div>
              </div>
            </div>
            <div className="portal-image-col">
               <div className="portal-image-placeholder glass-panel">
                  <ShieldCheck size={64} className="text-gradient" style={{ opacity: 0.5 }} />
                  <p className="mt-md" style={{ color: 'var(--text-secondary)' }}>Secure Patient Portal Demo</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pacs-faq-section bg-secondary">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title text-gradient">{t('pacs_pricing.faq_title')}</h2>
          </div>
          <div className="faq-container">
            {[1, 2, 3].map((num, idx) => (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h4>{t(`pacs_pricing.faq${num}_q`)}</h4>
                  {openFaq === idx ? <ChevronUp size={20} className="faq-icon" /> : <ChevronDown size={20} className="faq-icon" />}
                </div>
                <div className="faq-answer">
                  <p>{t(`pacs_pricing.faq${num}_a`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="container text-center">
          <h2 className="massive-title text-gradient mb-md">
            {t('cta.title')}
          </h2>
          <p className="lead-text mb-lg">
            {t('cta.subtitle')}
          </p>
          <a href="#/contact" className="btn btn-primary btn-large">
            {t('cta.button')} <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductPacs;
