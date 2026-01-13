import './Section.css';

export default function Section({
    id,
    title,
    subtitle,
    children,
    variant = 'dark',
    className = ''
}) {
    return (
        <section id={id} className={`section section-${variant} ${className}`}>
            <div className="container">
                <div className="section-header">
                    <div className="section-ornament-top">
                        <span className="ornament-wing"></span>
                        <span className="ornament-center">✦</span>
                        <span className="ornament-wing"></span>
                    </div>

                    <h2 className="section-title">{title}</h2>

                    {subtitle && (
                        <p className="section-subtitle">{subtitle}</p>
                    )}

                    <div className="section-ornament-bottom">
                        <span className="ornament-dash"></span>
                        <span className="ornament-diamond">◆</span>
                        <span className="ornament-dash"></span>
                    </div>
                </div>

                <div className="section-content">
                    {children}
                </div>
            </div>
        </section>
    );
}

// Card component for subsections
export function Card({ title, children, icon }) {
    return (
        <div className="card">
            {icon && <div className="card-icon">{icon}</div>}
            {title && <h4 className="card-title">{title}</h4>}
            <div className="card-content">{children}</div>
        </div>
    );
}

// Info List component
export function InfoList({ items }) {
    return (
        <ul className="styled-list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

// Definition component for key-value pairs
export function Definition({ term, description }) {
    return (
        <div className="definition">
            <dt className="definition-term">{term}</dt>
            <dd className="definition-desc">{description}</dd>
        </div>
    );
}

// Subsection with visible title
export function Subsection({ title, children }) {
    return (
        <div className="subsection">
            <h3 className="subsection-title">{title}</h3>
            <div className="subsection-content">{children}</div>
        </div>
    );
}
