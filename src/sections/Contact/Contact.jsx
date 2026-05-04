import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Button/Button';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const Contact = () => {
  const { contact } = PORTFOLIO_DATA;

  const whatsappMsg = encodeURIComponent("Hola Cande! Vi tu portfolio y me gustaría contactarte.");

  return (
    <SectionWrapper id="contact" title="Contacto">
      <div className="contact__container">
        <div className="contact__info">
          <h3 className="contact__subtitle">¡Sigamos en contacto!</h3>
          <p className="contact__text">
            Si tenés alguna consulta sobre mi formación, querés conocer más sobre mis prácticas clínicas o simplemente saludar, no dudes en escribirme por cualquiera de estos medios.
          </p>
          
          <div className="contact__methods">
            <div className="contact__method">
              <div className="method__icon"><FaEnvelope /></div>
              <div className="method__content">
                <h4>Email</h4>
                <p>{contact.email}</p>
              </div>
            </div>
            <div className="contact__method">
              <div className="method__icon"><FaMapMarkerAlt /></div>
              <div className="method__content">
                <h4>Ubicación</h4>
                <p>{contact.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__card">
          <div className="contact__card-header">
            <h3>Consultas Directas</h3>
          </div>
          <div className="contact__card-body">
            <p>Escribime por WhatsApp para una respuesta más rápida.</p>
            <Button 
              href={`https://wa.me/${contact.whatsapp}?text=${whatsappMsg}`} 
              variant="secondary"
            >
              <FaWhatsapp style={{marginRight: '8px'}} /> WhatsApp
            </Button>
            <div className="contact__divider">o envíame un correo</div>
            <Button href={`mailto:${contact.email}`} variant="outline">
              <FaEnvelope style={{marginRight: '8px'}} /> Enviar Email
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
