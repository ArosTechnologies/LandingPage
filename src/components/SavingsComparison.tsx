import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SavingsComparison.css';

const pricingData = [
  { estudios: 150, aros: 190, competencia: 274, ahorro: 84 },
  { estudios: 300, aros: 195, competencia: 549, ahorro: 354 },
  { estudios: 600, aros: 205, competencia: 1098, ahorro: 893 },
  { estudios: 1000, aros: 225, competencia: 1830, ahorro: 1605 },
  { estudios: 1500, aros: 380, competencia: 2745, ahorro: 2365 },
  { estudios: 3000, aros: 920, competencia: 5490, ahorro: 4570 }
];

export default function SavingsComparison() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(3); // Default to 1000 studies

  const currentData = pricingData[selectedIndex];
  
  // Calculate max value for the bar chart scaling (max competition value across all data or current data)
  // We scale based on the current data's competition price so the top bar is always 100%
  const maxCost = currentData.competencia;
  
  // Calculate widths
  const compWidth = 100; // Always 100%
  const arosWidth = Math.max((currentData.aros / maxCost) * 100, 2); // Minimum 2% width so it's visible

  return (
    <div className="savings-comparison-container">
      <div className="savings-comparison-header">
        <h3 className="savings-comparison-title text-gradient">{t('pacs_pricing.chart_title')}</h3>
        <p className="savings-comparison-subtitle">{t('pacs_pricing.chart_subtitle')}</p>
      </div>

      <div className="savings-comparison-card">
        
        {/* Volume Selector */}
        <div className="volume-selector-container">
          <div className="volume-selector-label">
            {t('pacs_pricing.chart_xaxis')}
          </div>
          <div className="volume-pills">
            {pricingData.map((data, idx) => (
              <button
                key={idx}
                className={`volume-pill ${selectedIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedIndex(idx)}
                onMouseEnter={() => setSelectedIndex(idx)}
                aria-label={`Select ${data.estudios} studies`}
              >
                {data.estudios}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Bars */}
        <div className="comparison-bars-container">
          
          {/* Competition Bar */}
          <div className="bar-row bar-comp">
            <div className="bar-header">
              <div>
                <span className="bar-title">{t('pacs_pricing.chart_comp').replace(':', '')}</span>
                <span className="bar-desc">($1.83 / {t('pacs_pricing.calc_study') || "estudio"})</span>
              </div>
              <span className="bar-price">${currentData.competencia.toLocaleString()}</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${compWidth}%` }}></div>
            </div>
          </div>

          {/* AROS Bar */}
          <div className="bar-row bar-aros">
            <div className="bar-header">
              <div>
                <span className="bar-title">AROS PACS</span>
                <span className="bar-desc">({t('pacs_pricing.calc_aros_desc') || "Suscripción + AWS"})</span>
              </div>
              <span className="bar-price">${currentData.aros.toLocaleString()}</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${arosWidth}%` }}></div>
            </div>
          </div>

        </div>

        {/* Hero Savings */}
        <div className="savings-hero">
          <div className="savings-hero-label">{t('pacs_pricing.chart_saving').replace(':', '')}</div>
          <div className="savings-hero-amount">+${currentData.ahorro.toLocaleString()}</div>
          <div className="savings-hero-desc">{t('pacs_pricing.per_month')}</div>
        </div>

      </div>
    </div>
  );
}
