import React from "react";
import aboutData from "../data/about.json";
import packageData from "../../package.json";
import { QRCodeCanvas } from "qrcode.react";
import { FaEnvelope, FaMobileAlt, FaWhatsapp } from "react-icons/fa";

const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${aboutData.name}
EMAIL:${aboutData.email}
TEL;TYPE=WORK,VOICE:${aboutData.phone}
URL:${packageData.homepage}
END:VCARD`;

const downloadVCard = () => {
  const blob = new Blob([vCardData], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "contact.vcf";
  link.click();
};

const Contact = () => (
  <section className="contact" id="contact">
    <h2>📞 Contact Me</h2>

    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-info-addr">
          <p>
            <FaEnvelope />
            <a href={`mailto:${aboutData.email}`}>{aboutData.email}</a>
          </p>

          <p>
            <FaMobileAlt />
            <a href={`tel:${aboutData.phone}`}>{aboutData.phone}</a>
          </p>

          <p>
            <FaWhatsapp />
            <a
              href={`https://wa.me/${aboutData.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Chat!
            </a>
          </p>
        </div>
        <button onClick={downloadVCard} className="btn">
          📥 Download Contact Card
        </button>
      </div>

      <div className="contact-actions">
        <div className="qr-code">
          <QRCodeCanvas size={240} value={vCardData} />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
