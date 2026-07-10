import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import logo from '../../Identity/Logotipos/ISO-HOR-RED.png';
import isotipo from '../../Identity/Isotipos/ISO-CUAD-RED.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoEmptyRef = useRef<HTMLImageElement>(null);
  const logoFilledRef = useRef<HTMLImageElement>(null);
  const [outlineSrc, setOutlineSrc] = useState<string>('');
  const [outlineIsotipoSrc, setOutlineIsotipoSrc] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pre-generate outline once at load time for 120fps smooth clipping scroll performance
  useEffect(() => {
    const generateOutline = (imageSrc: string, setSrc: (src: string) => void) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const thickness = 7; // Thickness of the outline border
        
        canvas.width = img.naturalWidth + thickness * 2;
        canvas.height = img.naturalHeight + thickness * 2;
        
        // Create dilated silhouette
        for (let angle = 0; angle < 360; angle += 15) {
          const rad = (angle * Math.PI) / 180;
          const dx = Math.cos(rad) * thickness;
          const dy = Math.sin(rad) * thickness;
          ctx.drawImage(img, dx + thickness, dy + thickness);
        }
        
        // Paint the outline light gray
        ctx.globalCompositeOperation = 'source-in';
        ctx.fillStyle = '#9ca3af'; // Darker gray-400 equivalent for better visibility
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Subtract the inside of the logo to leave only the outline border
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(img, thickness, thickness);
        
        setSrc(canvas.toDataURL());
      };
    };

    generateOutline(logo, setOutlineSrc);
    generateOutline(isotipo, setOutlineIsotipoSrc);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          
          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${sy * 0.25}px)`;
            bgRef.current.style.opacity = `${Math.max(1 - sy / 700, 0)}`;
          }
          if (containerRef.current) {
            containerRef.current.style.transform = `translateY(${sy * 0.08}px)`;
            containerRef.current.style.opacity = `${Math.max(1 - sy / 450, 0)}`;
          }
          if (logoFilledRef.current) {
            // The bounding box now tightly wraps the image, so we start exactly at 0%
            // We decreased the divisor to 175 to make the logo fill extremely fast before the next section
            const fillPercent = Math.min((sy / 175) * 100, 100);
            logoFilledRef.current.style.clipPath = `inset(${100 - fillPercent}% 0 0 0)`;
            if (logoEmptyRef.current) {
              logoEmptyRef.current.style.clipPath = `inset(0 0 ${fillPercent}% 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentLogo = isMobile ? isotipo : logo;
  const currentOutline = isMobile ? outlineIsotipoSrc : outlineSrc;

  return (
    <section className="hero section">
      <div 
        ref={bgRef}
        className="hero-background"
      >
        <div className="hero-grid"></div>
        
        {/* Scroll-filled Logo Background */}
        <div className="hero-bg-logo">
          <img 
            ref={logoEmptyRef}
            src={currentOutline || currentLogo} 
            alt="AROS Logo Outline" 
            className="bg-logo-img bg-logo-empty"
            style={{
              opacity: currentOutline ? 0.7 : 0,
              clipPath: 'inset(0 0 0% 0)'
            }}
          />
          <img 
            ref={logoFilledRef}
            src={currentLogo} 
            alt="AROS Logo Filled" 
            className="bg-logo-img bg-logo-filled"
            style={{
              clipPath: 'inset(100% 0 0 0)'
            }}
          />
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="container hero-container"
      >
        <div className="hero-content">
          
          <h1 className="hero-title animate-fade-in delay-100">
            {t('hero.title_line1')}<br/>
            {t('hero.title_line2')}<br/>
            <span className="text-accent">{t('hero.title_highlight')}</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in delay-200">
            {t('hero.subtitle')}
          </p>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
