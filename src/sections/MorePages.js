import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import artJson from '../data/pages/art'
import faqJson from '../data/pages/faq'
import protocolJson from '../data/pages/protocol'
import communityJson from '../data/pages/community'
import developersJson from '../data/pages/developers'
import { colors } from '../styles'
import OceanJeyllyfish from '@oceanprotocol/art/jellyfish/jellyfish-grid.svg'
import OceanMantaray from '@oceanprotocol/art/mantaray/mantaray-grid.svg'
import OceanSquid from '@oceanprotocol/art/squid/squid-grid.svg'
import {
    StyledSection,
    StyledPage,
    StyledTitle,
    LearnMore
} from './MorePages.css'
import { ReactComponent as Arrow } from '../assets/misc/arrow.svg'

const content = [
    {
        title: protocolJson.title,
        link: '/event/whitecollar',
        backgroundImage: OceanJeyllyfish
    },
    {
        title: communityJson.title,
        link: '/event/bplan',
        backgroundColor: colors.white,
        backgroundImage: OceanMantaray,
        light: true
    },
    {
        title: developersJson.title,
        link: '/event/technokraft',
        backgroundColor: colors.darkPurple,
        backgroundImage: OceanSquid
    }
]

export default class MorePages extends PureComponent {
    static propTypes = {
        links: PropTypes.array
    }

    static defaultProps = {
        links: ['/event/whitecollar', '/event/bplan', '/event/technokraft']
    }

    render() {
        const { links } = this.props

        return (
            <StyledSection id="more">
                {content.map(item => {
                    // eslint-disable-next-line
                    if (links && !links.includes(item.link)) return

                    return (
                        <StyledPage
                            key={item.link}
                            backgroundColor={item.backgroundColor}
                            backgroundImage={item.backgroundImage}
                            light={item.light}
                        >
                            <NavLink to={item.link}>
                                <StyledTitle left white={!item.light}>
                                    {item.title}
                                </StyledTitle>
                                <LearnMore>
                                    See more <Arrow />
                                </LearnMore>
                            </NavLink>
                        </StyledPage>
                    )
                })}
            </StyledSection>
        )
    }
}
