import './Hero.css';

export default function Hero() {
    const openPdf = () => {
        window.open('/pdfs/registration_certificate.pdf', '_blank');
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>

            {/* Decorative Film Strip */}
            <div className="film-strip film-strip-top"></div>
            <div className="film-strip film-strip-bottom"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>Multi State Cooperative Society</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="title-line">Dadasaheb Cinema</span>
                        <span className="title-ampersand">&</span>
                        <span className="title-line">Entertainment</span>
                    </h1>

                    <p className="hero-tagline">
                        Promoting Indian Cinema, Media, Art & Culture Through Cooperative Excellence
                    </p>

                    <div className="hero-ornament">
                        <span className="ornament-line"></span>
                        <span className="ornament-diamond">◆</span>
                        <span className="ornament-line"></span>
                    </div>

                    <div className="hero-actions">
                        <a href="#about" className="btn btn-primary">
                            Explore Society
                        </a>
                        <a href="#membership" className="btn btn-outline">
                            Become a Member
                        </a>
                    </div>
                </div>

                <div className="hero-certificate" onClick={openPdf}>
                    <div className="certificate-frame">
                        <div className="certificate-header">
                            <svg className="certificate-icon" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                            </svg>
                            <span>Registration Certificate</span>
                        </div>
                        <div className="certificate-preview">
                            <img
                                src="/certificate.png"
                                alt="Registration Certificate Preview"
                                className="pdf-preview-image"
                            />
                        </div>
                        <div className="certificate-footer">
                            <span className="click-hint">
                                <svg viewBox="0 0 24 24" width="16" height="16">
                                    <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.89,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z" />
                                </svg>
                                Click to view full document
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
