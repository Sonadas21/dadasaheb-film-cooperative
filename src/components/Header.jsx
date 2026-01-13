import { useState, useEffect } from 'react';
import './Header.css';

const committees = [
    { id: 1, name: 'Executive Committee', desc: 'Overall governance and strategic direction' },
    { id: 2, name: 'Finance and Audit Committee', desc: 'Financial planning, budgeting, and audits' },
    { id: 3, name: 'Production and Content Committee', desc: 'Project development and quality control' },
    { id: 4, name: 'Marketing and Public Relations Committee', desc: 'Marketing strategies and public relations' },
    { id: 5, name: 'Membership and Outreach Committee', desc: 'Member recruitment and engagement' },
    { id: 6, name: 'Legal Affairs and Compliance Committee', desc: 'Legal issues and compliance' },
    { id: 7, name: 'Diversity, Equity, and Inclusion Committee', desc: 'Inclusive practices and representation' },
    { id: 8, name: 'Education and Training Committee', desc: 'Workshops, seminars, and training' },
    { id: 9, name: 'Technology and Innovation Committee', desc: 'New technologies and practices' },
    { id: 10, name: 'Events and Festivals Committee', desc: 'Events, screenings, and festivals' },
    { id: 11, name: 'Sustainability and Environmental Practices Committee', desc: 'Eco-friendly practices' },
    { id: 12, name: 'Community Engagement Committee', desc: 'Community relationships' },
    { id: 13, name: 'Grants and Funding Committee', desc: 'Funding opportunities and grants' },
    { id: 14, name: 'Regional Development Committee', desc: 'Regional needs and opportunities' },
];

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'membership', label: 'Membership' },
    { id: 'governing-body', label: 'Governing Body' },
    { id: 'byelaws', label: 'Byelaws' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCommitteesOpen, setIsCommitteesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <a href="#hero" className="header-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                    <img src="/logo.jpeg" alt="Dadasaheb Film Cooperative Society" className="logo-image" />
                    <div className="logo-text">
                        <span className="logo-title">Dadasaheb</span>
                        <span className="logo-subtitle">Film Cooperative Society</span>
                    </div>
                </a>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.id} className="nav-item">
                                <a
                                    href={`#${link.id}`}
                                    className="nav-link"
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                        {/* Committees Dropdown */}
                        <li
                            className={`nav-item nav-dropdown ${isCommitteesOpen ? 'dropdown-open' : ''}`}
                            onMouseEnter={() => setIsCommitteesOpen(true)}
                            onMouseLeave={() => setIsCommitteesOpen(false)}
                        >
                            <button
                                className="nav-link dropdown-trigger"
                                onClick={() => setIsCommitteesOpen(!isCommitteesOpen)}
                            >
                                Committees
                                <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                                </svg>
                            </button>

                            <div className="dropdown-menu">
                                <div className="dropdown-header">
                                    <span className="dropdown-title">Our Committees</span>
                                    <span className="dropdown-divider"></span>
                                </div>
                                <div className="dropdown-grid">
                                    {committees.map((committee) => (
                                        <div key={committee.id} className="dropdown-item">
                                            <span className="dropdown-item-number">{String(committee.id).padStart(2, '0')}</span>
                                            <div className="dropdown-item-content">
                                                <span className="dropdown-item-name">{committee.name}</span>
                                                <span className="dropdown-item-desc">{committee.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                </button>
            </div>
        </header>
    );
}
