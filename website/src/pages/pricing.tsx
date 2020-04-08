import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { PricingPlan, Features } from '../components/pricing/PricingPlan'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'

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
    codeChangeManagementCampaigns: true,
    codeHostIntegration: true,
    api: true,
    singleSignOn: true,
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
                    <h2>Universal Code Search</h2>
                    <h3>Get started in minutes for free. Scales massively.</h3>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-6">
                        <div className="col-6 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Starter"
                                price="$0"
                                priceInterval="Up to 10 users"
                                priceCaption={
                                    <div className="pricing-plan__price d-flex align-items-center justify-content-center">
                                        <span className="pricing-plan__price-amount mr-2">$10</span>
                                        <span className="pricing-plan__price-interval">11-25 users (one-time fee)</span>
                                    </div>
                                }
                                priceForCampaigns="20 actions"
                                features={STARTER_FEATURES}
                                support="Community support"
                                buttonLabel="Start now"
                                buttonHref="https://docs.sourcegraph.com#quickstart-guide"
                            />
                        </div>
                        <div className="col-6 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Team"
                                price="$150"
                                priceInterval="/ month"
                                priceCaption="Base"
                                priceForUsers="Base includes 25 users, Add up to 200 users (packs start at $325/month for 25 users, or $375/month if paid monthly)"
                                priceForCampaigns="Base includes 100 actions, add up to 5k actions (packs start at 100 actions for $800)"
                                features={TEAM_FEATURES}
                                support="Email support"
                                buttonLabel="Buy now"
                                buttonHref="TODO"
                            />
                        </div>
                        <div className="col-6 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Business"
                                price="Contact us"
                                priceForUsers="Custom"
                                priceForCampaigns="Custom"
                                support="SLA, 24/7, and dedicated support available"
                                features={{
                                    ...TEAM_FEATURES,
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
                                buttonLabel="Contact sales"
                                buttonHref="http://about.sourcegraph.com/contact/request-demo/?form_submission_source=pricing-enterprise-plus TODO"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection color="purple" className="hero-section text-center py-5">
                <h2>Try Sourcegraph Enterprise Plus risk-free for 30 days</h2>
                <Link
                    className="btn btn-lg btn-outline-light mt-3 font-weight-normal"
                    to="/contact/request-demo/?form_submission_source=pricing-free-trial-banner"
                >
                    Free trial
                </Link>
            </ContentSection>
            <ContentSection color="primary" className="hero-section text-center py-5">
                <h2>Questions?</h2>
                <Link
                    className="btn btn-lg btn-outline-light mt-3 font-weight-normal"
                    to="/contact/sales/?form_submission_source=pricing-contact-sales-banner"
                >
                    Contact sales
                </Link>
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-6 mb-0"
                title="Get Sourcegraph now"
                description="Start shipping better software faster with Universal Code Search."
                logomark={false}
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
