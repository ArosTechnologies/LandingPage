import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Globe, Database, Cpu, Check, Download, Smartphone, ChevronDown, ChevronUp, X } from 'lucide-react';
import SavingsComparison from './SavingsComparison';
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
    "/assets/pacs/screenshot1.png",
    "/assets/pacs/screenshot2.png",
    "/assets/pacs/screenshot3.png",
    "/assets/pacs/screenshot4.png",
    "/assets/pacs/screenshot5.png",
    "/assets/pacs/screenshot6.png",
    "/assets/pacs/screenshot7.png",
    "/assets/pacs/screenshot8.png",
    "/assets/pacs/screenshot9.png"
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
        {/* Heartbeat Water Ripple Animation */}
        <div className="heartbeat-ripple-container">
          <div className="ripple-grid ripple-1"></div>
          <div className="ripple-grid ripple-2"></div>
        </div>

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
              <a href="#/contact?interest=AROS%20PACS" className="btn btn-primary btn-large">
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
        </div>
      </section>

      <section className="pacs-monthly-plans-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center mb-xl">
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
                      <span className="table-plan-period">{t('pacs_pricing.per_month')}</span>
                    </div>
                    <p className="table-plan-desc">{t('pacs_pricing.plan1_desc')}</p>
                  </th>
                  <th className="plan-col-header highlighted-col-header">
                    <div className="table-popular-badge">{t('pacs_pricing.recommended')}</div>
                    <h3 className="table-plan-title">{t('pacs_pricing.plan2_title')}</h3>
                    <div className="table-plan-price-wrapper">
                      <span className="table-plan-price">{t('pacs_pricing.plan2_price')}</span>
                      <span className="table-plan-period">{t('pacs_pricing.per_month')}</span>
                    </div>
                    <p className="table-plan-desc">{t('pacs_pricing.plan2_desc')}</p>
                  </th>
                  <th className="plan-col-header">
                    <h3 className="table-plan-title">{t('pacs_pricing.plan3_title')}</h3>
                    <div className="table-plan-price-wrapper">
                      <span className="table-plan-price">{t('pacs_pricing.plan3_price')}</span>
                      <span className="table-plan-period">{t('pacs_pricing.per_month')}</span>
                    </div>
                    <p className="table-plan-desc">{t('pacs_pricing.plan3_desc')}</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamically render 12 features */}
                {Array.from({ length: 12 }).map((_, idx) => {
                  const featureName = (t('pacs_pricing.table_features', { returnObjects: true }) as string[])[idx];
                  if (!featureName) return null;
                  
                  const renderCell = (val: string) => {
                    if (val === 'check') return <Check size={20} style={{ color: 'var(--color-primary, #2563eb)' }} />;
                    if (val === 'cross') return <X size={20} style={{ color: 'var(--text-secondary, #6b7280)', opacity: 0.5 }} />;
                    return val;
                  };

                  return (
                    <tr key={idx}>
                      <td className="feature-label">{featureName}</td>
                      <td className="plan-cell">{renderCell(t(`pacs_pricing.plan1_f${idx + 1}`))}</td>
                      <td className="plan-cell highlighted-cell">{renderCell(t(`pacs_pricing.plan2_f${idx + 1}`))}</td>
                      <td className="plan-cell">{renderCell(t(`pacs_pricing.plan3_f${idx + 1}`))}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="pricing-disclaimer" style={{ 
            textAlign: 'center', 
            marginTop: '1.5rem', 
            color: 'var(--text-secondary)', 
            fontSize: '0.85rem' 
          }}>
            {t('pacs_pricing.disclaimer')}
          </div>
        </div>
      </section>

      {/* Savings Chart Section */}
      <section className="savings-chart-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <SavingsComparison />
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
            <div className="portal-image-col" style={{ display: 'flex', justifyContent: 'center' }}>
               <video 
                  src="/assets/pacs/aros_promotional.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ maxWidth: '320px', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
               />
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
          <a href="#/contact?interest=AROS%20PACS" className="btn btn-primary btn-large">
            {t('cta.button')} <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductPacs;
