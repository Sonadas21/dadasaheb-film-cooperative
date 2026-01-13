import './GoverningBody.css';

const committeePositions = [
    { position: 'President', desc: 'Chief executive officer of the society' },
    { position: 'Vice President', desc: 'Assists and deputizes for the President' },
    { position: 'Secretary', desc: 'Manages administrative affairs' },
    { position: 'Joint Secretary', desc: 'Assists the Secretary in duties' },
    { position: 'Treasurer', desc: 'Oversees financial matters' },
    { position: 'Executive Committee Members', desc: 'Contribute to governance decisions' },
];

export default function GoverningBody() {
    const baseUrl = import.meta.env.BASE_URL;

    const openMembersPdf = () => {
        window.open(`${baseUrl}pdfs/members_list.pdf`, '_blank');
    };

    return (
        <section id="governing-body" className="section section-dark governing-body-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-ornament-top">
                        <span className="ornament-wing"></span>
                        <span className="ornament-center">✦</span>
                        <span className="ornament-wing"></span>
                    </div>

                    <h2 className="section-title">Governing Body</h2>
                    <p className="section-subtitle">
                        The Managing Committee elected/appointed as per byelaws to lead and govern the Society
                    </p>

                    <div className="section-ornament-bottom">
                        <span className="ornament-dash"></span>
                        <span className="ornament-diamond">◆</span>
                        <span className="ornament-dash"></span>
                    </div>
                </div>

                <div className="governing-body-content">
                    {/* Left Side - Committee Positions */}
                    <div className="governing-body-left">
                        <div className="subsection">
                            <h3 className="subsection-title">Composition</h3>
                            <div className="positions-grid">
                                {committeePositions.map((item, index) => (
                                    <div key={index} className="position-card">
                                        <div className="position-number">{String(index + 1).padStart(2, '0')}</div>
                                        <div className="position-info">
                                            <span className="position-title">{item.position}</span>
                                            <span className="position-desc">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="subsection">
                            <h3 className="subsection-title">Tenure</h3>
                            <p className="subsection-text">
                                Term of office shall be as prescribed under the Act or decided by the General Body
                            </p>
                        </div>

                        <div className="subsection">
                            <h3 className="subsection-title">Powers & Responsibilities</h3>
                            <ul className="styled-list">
                                <li>Framing policies and strategic decisions</li>
                                <li>Financial management and approvals</li>
                                <li>Appointment of sub-committees and officials</li>
                                <li>Overall supervision of activities of the Society</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Members PDF */}
                    <div className="governing-body-right">
                        <div className="members-pdf-card" onClick={openMembersPdf}>
                            <div className="pdf-card-header">
                                <svg viewBox="0 0 24 24" width="28" height="28">
                                    <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                                </svg>
                                <span>Members List</span>
                            </div>

                            <div className="pdf-card-body">
                                <img
                                    src={`${baseUrl}member_list.png`}
                                    alt="Members List Preview"
                                    className="pdf-preview-image"
                                />
                            </div>

                            <div className="pdf-card-footer">
                                <span className="view-button">
                                    <svg viewBox="0 0 24 24" width="18" height="18">
                                        <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.89,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z" />
                                    </svg>
                                    Click to View Full Document
                                </span>
                            </div>
                        </div>

                        <div className="info-note">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                            </svg>
                            <p>The complete list of registered members is maintained as per the provisions of the applicable Cooperative / Society Registration Act of India.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
