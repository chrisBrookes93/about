import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { PricingPlan, Features } from '../components/pricing/PricingPlan'
import { PricingPlanProperty } from '../components/pricing/PricingPlanProperty'

/*
TODO(sqs): need to communicate:

- all deployment options are allowed
- unlimited users of code host integrations
 */

const DESCRIPTION =
    'Sourcegraph is always free for public and open source code. Start using it for private code with a paid plan.'

/** The Starter feature set. */
const STARTER_FEATURES: Features = {
    codeSearch: true,
    codeIntelligence: true,
    codeChangeManagementCampaigns: false,
    codeHostIntegration: true,
    api: true,
    singleSignOn: true,
    selfHosted: true,
    userAndAdminRoles: false,
    multipleCodeHosts: false,
    repositoryPermissions: false,
    optimizedRepositoryUpdates: false,
    privateExtensions: false,
    deploymentMetricsAndMonitoring: false,
    backupRestore: false,
    customBranding: false,
    guestUsers: false,
    onlineTraining: false,
    customContractLegalBillingTerms: false,
}

/** The Team feature set. */
const TEAM_FEATURES: Features = { ...STARTER_FEATURES, userAndAdminRoles: true }

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="bg-white text-dark">
            <Helmet>
                <title>Sourcegraph - Pricing</title>
                <meta name="twitter:title" content="Sourcegraph - Pricing" />
                <meta property="og:title" content="Sourcegraph - Pricing" />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta name="description" content={DESCRIPTION} />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <div className="pricing-page">
                <ContentSection color="primary" className="hero-section text-center py-5">
                    <h2>Universal Code Search scales with your team</h2>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-3">
                        <div className="col-6 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Free"
                                price={<div className="text-center">$0/mo</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty
                                            description={
                                                <>
                                                    <br />
                                                    <br />
                                                </>
                                            }
                                        >
                                            Up to 10 users
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">Community support</PricingPlanProperty>
                                    </>
                                }
                                features={STARTER_FEATURES}
                                buttonLabel="Deploy"
                                buttonClassName="btn-outline-primary"
                                buttonHref="https://docs.sourcegraph.com#quickstart-guide"
                            />
                        </div>
                        <div className="col-6 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Team"
                                price={<div className="text-center">Starts at $150/mo</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty
                                            description={
                                                <>
                                                    Add up to 200 users. Packs start at $325/mo for 25 additional users.
                                                </>
                                            }
                                        >
                                            25 users included
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-2 pt-1">Email support</PricingPlanProperty>
                                    </>
                                }
                                features={TEAM_FEATURES}
                                buttonLabel="Buy now"
                                buttonClassName="btn-success"
                                buttonHref="TODO"
                            />
                        </div>
                        <div className="col-6 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Enterprise"
                                price={<div className="text-center">Custom pricing</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty
                                            description={
                                                <>
                                                    Scales to 100,000+ users
                                                    <br />
                                                    <br />
                                                </>
                                            }
                                        >
                                            Custom user pricing
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">
                                            SLA, 24/7, and dedicated support
                                        </PricingPlanProperty>
                                    </>
                                }
                                features={{
                                    ...TEAM_FEATURES,
                                    codeChangeManagementCampaigns: true,
                                    multipleCodeHosts: true,
                                    repositoryPermissions: true,
                                    optimizedRepositoryUpdates: true,
                                    privateExtensions: true,
                                    deploymentMetricsAndMonitoring: true,
                                    backupRestore: true,
                                    customBranding: true,
                                    guestUsers: true,
                                    onlineTraining: true,
                                    customContractLegalBillingTerms: true,
                                }}
                                buttonLabel="Get a demo"
                                buttonClassName="btn-outline-primary"
                                buttonHref="http://about.sourcegraph.com/contact/request-demo/?form_submission_source=pricing-enterprise-plus TODO"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection color="purple" className="hero-section text-center py-5">
                <h2>Try Sourcegraph Business free for 30 days</h2>
                <Link
                    className="btn btn-lg btn-outline-light mt-3 font-weight-normal"
                    to="/contact/request-demo/?form_submission_source=pricing-free-trial-banner"
                >
                    Free trial
                </Link>
            </ContentSection>
            <ContentSection color="white" className="hero-section text-center py-5">
                <h2>Frequently asked questions</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium scelerisque ligula. Morbi
                    euismod elementum elit, accumsan posuere elit mattis nec. Nam a ante luctus, porta lorem non, mollis
                    mi. Proin cursus tortor a mi commodo, id porttitor nibh lobortis. Suspendisse at placerat mi, vitae
                    gravida quam. In ac nisi tellus. Curabitur varius eu magna in varius. Etiam posuere dui at arcu
                    interdum malesuada. Suspendisse varius lectus eget nibh efficitur, vel viverra nulla aliquam.
                </p>

                <p>
                    Vestibulum consectetur imperdiet faucibus. Curabitur vel hendrerit nibh, vitae placerat purus. Fusce
                    blandit urna feugiat finibus egestas. Fusce ac scelerisque mi. Fusce id libero id nulla facilisis
                    rutrum. Fusce lobortis felis vitae nunc dapibus laoreet. Fusce vulputate sed orci sagittis dapibus.
                </p>

                <p>
                    Proin placerat maximus scelerisque. Etiam convallis hendrerit luctus. Sed sit amet dapibus ipsum.
                    Suspendisse ac libero venenatis nisl luctus maximus. Donec elit tortor, maximus at nibh vitae,
                    vulputate condimentum massa. Ut vehicula consectetur fermentum. Proin rutrum nulla eu mauris rhoncus
                    vulputate. Integer urna purus, tincidunt sed odio id, lobortis vestibulum sapien. In hac habitasse
                    platea dictumst.
                </p>

                <p>
                    Mauris a cursus elit. Phasellus tincidunt libero lacus. Nunc sit amet massa arcu. Praesent ultricies
                    varius neque nec feugiat. Pellentesque convallis est non lobortis accumsan. Morbi mauris diam,
                    suscipit blandit rhoncus tempus, consectetur et lacus. Curabitur tristique turpis sed odio pharetra
                    consectetur. Suspendisse non luctus elit, porttitor dapibus ligula.
                </p>

                <p>
                    Donec ultrices odio sit amet dictum ullamcorper. Maecenas aliquam lorem finibus nulla facilisis, in
                    sodales ex auctor. Etiam malesuada mi ut suscipit sagittis. Praesent nec mollis tellus. Nam vitae
                    maximus augue. Mauris rhoncus tempor mi, nec faucibus lorem molestie eget. Aenean iaculis in ipsum a
                    mollis. Nam vel nulla nec est sodales lobortis non quis nulla. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos. Quisque egestas consectetur turpis, et
                    eleifend tortor efficitur non. Nullam id sollicitudin justo.
                </p>
            </ContentSection>
            <ContentSection color="primary" className="hero-section text-center py-5">
                <h2>More questions?</h2>
                <Link
                    className="btn btn-lg btn-outline-light mt-3 font-weight-normal"
                    to="/contact/sales/?form_submission_source=pricing-contact-sales-banner"
                >
                    Contact sales
                </Link>
            </ContentSection>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
