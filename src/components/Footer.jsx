import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const baseUrl = import.meta.env.BASE_URL;

    const quickLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Objectives', href: '#objectives' },
        { label: 'Membership', href: '#membership' },
        { label: 'Governing Body', href: '#governing-body' },
        { label: 'Byelaws', href: '#byelaws' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-film-strip"></div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Logo & About */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src={`${baseUrl}logo.jpeg`} alt="Dadasaheb Film Cooperative Society" />
                                <div className="footer-logo-text">
                                    <span className="brand-name">Dadasaheb Cinema</span>
                                    <span className="brand-tagline">Entertainment Cooperative</span>
                                </div>
                            </div>
                            <p className="footer-about">
                                A Multi State Cooperative Society dedicated to the promotion, preservation,
                                and development of Indian cinema, media, art, and culture.
                            </p>
                            <div className="footer-seal">
                                <span>Registered Under</span>
                                <span>Cooperative Society Act of India</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-nav">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Documents */}
                        <div className="footer-documents">
                            <h4 className="footer-title">Documents</h4>
                            <ul className="footer-nav">
                                <li>
                                    <a href={`${baseUrl}pdfs/registration_certificate.pdf`} target="_blank" rel="noopener noreferrer">
                                        Registration Certificate
                                    </a>
                                </li>
                                <li>
                                    <a href={`${baseUrl}pdfs/members_list.pdf`} target="_blank" rel="noopener noreferrer">
                                        Members List
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-contact">
                            <h4 className="footer-title">Contact</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <svg viewBox="0 0 24 24" width="18" height="18">
                                        <path fill="currentColor" d="M12,2C8.13,2 5,5.13 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.13 15.87,2 12,2M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5Z" />
                                    </svg>
                                    <span>6, Puja Casa, 28th Road,<br />5th Floor Turner Road,<br />Bandra, West Mumbai - 400050,<br />Maharashtra</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Dadasaheb Cinema and Entertainment Multi State Cooperative Society Limited.
                            All Rights Reserved.
                        </p>
                        <div className="footer-ornament">
                            <span className="ornament-line"></span>
                            <span className="ornament-reel">◎</span>
                            <span className="ornament-line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
