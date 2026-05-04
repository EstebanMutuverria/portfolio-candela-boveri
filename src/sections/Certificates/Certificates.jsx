import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { CERTIFICATES_LIST } from '../../services/data/certificates.services.data';
import './Certificates.css';

const Certificates = () => {
  return (
    <SectionWrapper id="certificates" title="Certificaciones y Cursos" bgColor="var(--white)">
      <div className="certificates__grid">
        {CERTIFICATES_LIST.map((cert) => (
          <div key={cert.id} className="certificate__card">
            <div className="certificate__image">
              {/* Se asume que las imágenes están en src/assets/certificates */}
              <img src={cert.image} alt={cert.name} onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Certificado'} />
              <div className="certificate__overlay">
                <FaCertificate className="cert-icon" />
              </div>
            </div>
            <div className="certificate__content">
              <h3>{cert.name}</h3>
              <p>{cert.description}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate__link">
                  Ver certificado <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certificates;
