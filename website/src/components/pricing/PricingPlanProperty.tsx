import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'

interface Props {
    description?: string

    className?: string
}

export const PricingPlanProperty: React.FunctionComponent<Props> = ({ description, className = '', children }) => {
    return (
        <div className={`pricing-plan-property ${className} d-flex justify-content-between pb-1`}>
            <div>{children}</div>
            {description && (
                <OverlayTrigger
                    placement="auto"
                    overlay={description ? <Tooltip id="tooltip">{description}</Tooltip> : <span />}
                >
                    <span className="ml-2 pricing-plan-property__help">
                        <QuestionMarkCircleOutlineIcon />
                    </span>
                </OverlayTrigger>
            )}
        </div>
    )
}
