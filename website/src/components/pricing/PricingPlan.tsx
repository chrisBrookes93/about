import * as React from 'react'
import { PricingPlanFeature } from './PricingPlanFeature'

/**
 * The features to display for pricing plans.
 */
export interface Features {
    codeSearch: true
    codeIntelligence: true
    codeChangeManagementCampaigns: true
    codeHostIntegration: true
    api: true
    singleSignOn: true

    userAndAdminRoles: boolean

    multipleCodeHosts: boolean
    repositoryPermissions: boolean
    optimizedRepositoryUpdates: boolean
    privateExtensions: boolean
    deploymentMetricsAndMonitoring: boolean
    backupRestore: boolean
    customBranding: boolean
    guestUsers: boolean
    onlineTraining: boolean
    customContractLegalBillingTerms: boolean
}

export interface FeatureInfo {
    label: string
    url?: string
    description: string
}

const FEATURE_INFO: Record<keyof Features, FeatureInfo> = {
    codeSearch: { label: 'Code search', description: '' },
    codeIntelligence: {
        label: 'Code intelligence',
        description: 'Code navigation for 30+ languages, with hovers, definitions, and references across repositories',
    },
    codeChangeManagementCampaigns: {
        label: 'Campaigns',
        description: 'Code change management campaigns help coordinate large-scale changes across many repositories',
    },
    codeHostIntegration: {
        label: 'Code host integrations',
        description:
            'Works with GitHub, GitLab, Bitbucket Server/Cloud, and other popular code hosts (or manually add repositories from any VCS)',
    },
    singleSignOn: { label: 'SSO/SAML', description: '' },
    api: { label: 'Comprehensive API', description: '' },
    userAndAdminRoles: { label: 'User and administrator roles', description: '' },
    multipleCodeHosts: { label: 'Multiple code hosts', description: '' },
    repositoryPermissions: { label: 'Repository permissions', description: '' },
    optimizedRepositoryUpdates: { label: 'Optimized repository updates', description: '' },
    privateExtensions: { label: 'Private extension registry', description: '' },
    deploymentMetricsAndMonitoring: { label: 'Deployment metrics/monitoring', description: '' },
    backupRestore: { label: 'Backup and restore', description: '' },
    customBranding: { label: 'Custom branding', description: '' },
    guestUsers: { label: 'Guest users', description: '' },
    onlineTraining: { label: 'Live online training sessions', description: '' },
    customContractLegalBillingTerms: { label: 'Custom contracts and billing', description: '' },
}

const FEATURE_ORDER: (keyof Features)[] = [
    'codeSearch',
    'codeIntelligence',
    'codeChangeManagementCampaigns',
    'codeHostIntegration',
    'api',
    'singleSignOn',
    'userAndAdminRoles',
    'multipleCodeHosts',
    'repositoryPermissions',
    'optimizedRepositoryUpdates',
    'privateExtensions',
    'deploymentMetricsAndMonitoring',
    'backupRestore',
    'customBranding',
    'guestUsers',
    'onlineTraining',
    'customContractLegalBillingTerms',
]

interface Props {
    className?: string

    name: string
    planProperties: React.ReactFragment
    price: React.ReactFragment
    features: Features

    buttonLabel: string
    buttonOnClick?: () => void
    buttonHref: string
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: React.FunctionComponent<Props> = ({
    className,

    name,
    price,
    planProperties,
    features,

    buttonLabel,
    buttonOnClick,
    buttonHref,
}) => (
    <div className={`pricing-plan card border-0 ${className}`}>
        <h2 className="card-title border-bottom py-2 text-center">{name}</h2>
        <div className="card-body pt-2 d-flex flex-column align-items-center flex-grow-0 text-center">
            <div className="mb-3 pricing-plan__price">{price}</div>
            {planProperties}
        </div>
        <ol className="list-group list-group-flush py-3">
            {FEATURE_ORDER.map(feature => (
                <PricingPlanFeature
                    key={feature}
                    info={FEATURE_INFO[feature]}
                    value={features[feature]}
                    tag="li"
                    className="list-group-item bg-transparent border-0 px-0"
                />
            ))}
        </ol>
        <a
            className="pricing-plan__button btn btn-primary justify-content-center text-center d-inline-flex"
            href={buttonHref}
            onClick={buttonOnClick}
        >
            {buttonLabel}
        </a>
    </div>
)