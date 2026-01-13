import Header from './components/Header';
import Hero from './components/Hero';
import Section, { Card, InfoList, Subsection, Definition } from './components/Section';
import GoverningBody from './components/GoverningBody';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Hero />

                {/* Section 1 & 2: About - Title, Legal Identity & Definitions */}
                <Section
                    id="about"
                    title="About the Society"
                    subtitle="Byelaws of Dadasaheb Film Cooperative Society"
                    variant="light"
                >
                    <div className="cards-grid cards-grid-2">
                        <Card title="Legal Identity">
                            <dl className="definitions">
                                <Definition
                                    term="Name of Organisation"
                                    description="Dadasaheb Cinema and Entertainment Multi State Cooperative Society Limited"
                                />
                                <Definition
                                    term="Registered Under"
                                    description="Applicable Cooperative / Society Registration Act of India"
                                />
                                <Definition
                                    term="Registration Number & Year"
                                    description="As per Registration Certificate"
                                />
                                <Definition
                                    term="Registered Office Address"
                                    description="As stated in official records of the Society"
                                />
                            </dl>
                        </Card>

                        <Card title="Definitions & Interpretation">
                            <p style={{ marginBottom: '1rem', opacity: 0.85, fontSize: '0.9rem' }}>
                                In these byelaws, unless the context otherwise requires:
                            </p>
                            <dl className="definitions">
                                <Definition
                                    term='"Society / Organisation"'
                                    description="Means Dadasaheb Film Cooperative Society"
                                />
                                <Definition
                                    term='"Member"'
                                    description="Means a duly enrolled member of the Society"
                                />
                                <Definition
                                    term='"Governing Body"'
                                    description="Means the Managing Committee elected/appointed as per these byelaws"
                                />
                                <Definition
                                    term='"Act"'
                                    description="Refers to the applicable Registration Act and rules framed thereunder"
                                />
                            </dl>
                        </Card>
                    </div>
                </Section>

                {/* Section 3: Objectives */}
                <Section
                    id="objectives"
                    title="Objectives of the Organisation"
                    subtitle="Our mission to promote Indian cinema and culture"
                    variant="dark"
                >
                    <div className="objectives-grid">
                        <Card title="Promotion & Development">
                            <p>Promotion, preservation, and development of Indian cinema, media, art, and culture</p>
                        </Card>
                        <Card title="Member Welfare">
                            <p>Welfare, recognition, and professional support of members of the film and creative industry</p>
                        </Card>
                        <Card title="Events & Awards">
                            <p>Organising film awards, cultural events, screenings, workshops, seminars, and festivals</p>
                        </Card>
                        <Card title="Education & Training">
                            <p>Encouraging education, training, and innovation in film and allied arts</p>
                        </Card>
                        <Card title="Collaboration">
                            <p>Collaboration with government bodies, institutions, and private organisations</p>
                        </Card>
                        <Card title="Lawful Activities">
                            <p>Any other lawful activity consistent with the vision and objectives of the Society</p>
                        </Card>
                    </div>
                </Section>

                {/* Section 4 & 5: Membership */}
                <Section
                    id="membership"
                    title="Membership"
                    subtitle="Join our community of film and creative professionals"
                    variant="light"
                >
                    <div className="membership-content">
                        <Subsection title="Eligibility">
                            <InfoList items={[
                                "Any individual or professional associated with film, media, art, or allied creative fields",
                                "The applicant must agree to abide by the objectives and byelaws of the Society"
                            ]} />
                        </Subsection>

                        <Subsection title="Types of Membership">
                            <div className="membership-types">
                                <div className="membership-type">
                                    <span className="type-badge">Founder</span>
                                    <span className="type-name">Founder Member</span>
                                </div>
                                <div className="membership-type">
                                    <span className="type-badge">Life</span>
                                    <span className="type-name">Life Member</span>
                                </div>
                                <div className="membership-type">
                                    <span className="type-badge">Ordinary</span>
                                    <span className="type-name">Ordinary Member</span>
                                </div>
                                <div className="membership-type">
                                    <span className="type-badge">Honorary</span>
                                    <span className="type-name">Honorary Member</span>
                                </div>
                            </div>
                        </Subsection>

                        <Subsection title="Admission Process">
                            <div className="process-steps">
                                <div className="process-step">
                                    <span className="step-number">01</span>
                                    <span className="step-text">Submission of a prescribed membership application</span>
                                </div>
                                <div className="process-step">
                                    <span className="step-number">02</span>
                                    <span className="step-text">Scrutiny and approval by the Governing Body</span>
                                </div>
                                <div className="process-step">
                                    <span className="step-number">03</span>
                                    <span className="step-text">Payment of applicable membership fees</span>
                                </div>
                            </div>
                        </Subsection>

                        <Subsection title="Rights of Members">
                            <InfoList items={[
                                "To participate in General Body Meetings",
                                "To vote, where applicable, as per rules of membership",
                                "To avail benefits, facilities, and programs of the Society"
                            ]} />
                        </Subsection>

                        <Subsection title="Duties of Members">
                            <InfoList items={[
                                "To comply with the byelaws, rules, and resolutions of the Society",
                                "To uphold the reputation, dignity, and objectives of the Society"
                            ]} />
                        </Subsection>
                    </div>
                </Section>

                {/* Section 6: Governing Body */}
                <GoverningBody />

                {/* Sections 7-14: Byelaws */}
                <Section
                    id="byelaws"
                    title="Byelaws & Regulations"
                    subtitle="Rules governing the functioning of the Society"
                    variant="light"
                >
                    <div className="byelaws-grid">
                        {/* Section 7: Meetings */}
                        <Card title="Meetings">
                            <Subsection title="General Body Meetings">
                                <InfoList items={[
                                    "An Annual General Meeting (AGM) shall be held once every year",
                                    "Special General Meetings may be convened as required"
                                ]} />
                            </Subsection>
                            <Subsection title="Governing Body Meetings">
                                <InfoList items={[
                                    "Meetings shall be held at intervals decided by the Committee",
                                    "Quorum requirements shall be as per applicable rules"
                                ]} />
                            </Subsection>
                        </Card>

                        {/* Section 8: Finance */}
                        <Card title="Finance & Accounts">
                            <InfoList items={[
                                "Sources of income shall include membership fees, donations, grants, sponsorships, and event revenues",
                                "Funds shall be operated through authorised bank accounts",
                                "Accounts shall be audited annually by a certified auditor",
                                "The financial year shall be as prescribed by law"
                            ]} />
                        </Card>

                        {/* Section 9: Rules */}
                        <Card title="Rules & Regulations">
                            <InfoList items={[
                                "The Governing Body may frame rules and regulations for smooth functioning of the Society",
                                "Such rules shall not be inconsistent with these byelaws"
                            ]} />
                        </Card>

                        {/* Section 10: Amendment */}
                        <Card title="Amendment of Byelaws">
                            <InfoList items={[
                                "Any amendment shall be proposed and approved by the General Body",
                                "Amendments shall require the prescribed majority",
                                "All amendments shall be subject to legal and statutory approval"
                            ]} />
                        </Card>

                        {/* Section 11: Discipline */}
                        <Card title="Discipline & Termination">
                            <InfoList items={[
                                "A member may be suspended or removed for misconduct or violation of byelaws",
                                "Reasonable opportunity shall be given to the member for explanation",
                                "Final decision shall rest with the Governing Body"
                            ]} />
                        </Card>

                        {/* Section 12: Dissolution */}
                        <Card title="Dissolution">
                            <InfoList items={[
                                "Dissolution of the Society shall be carried out as per applicable law",
                                "Assets and liabilities shall be transferred to a similar non-profit organisation",
                                "No profits or assets shall be distributed among members"
                            ]} />
                        </Card>

                        {/* Section 13: Legal Compliance */}
                        <Card title="Legal Compliance">
                            <InfoList items={[
                                "The Society shall function in accordance with the laws of India",
                                "Any disputes shall be subject to the jurisdiction of competent courts"
                            ]} />
                        </Card>

                        {/* Section 14: Declaration */}
                        <Card title="Declaration">
                            <p>
                                We, the undersigned Founder Members, hereby adopt and approve the above byelaws
                                for the functioning of the Society.
                            </p>
                            <p className="declaration-note">
                                This Byelaws document is published for transparency and reference on the official
                                website of Dadasaheb Film Cooperative Society.
                            </p>
                        </Card>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
