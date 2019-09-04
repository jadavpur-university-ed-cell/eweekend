import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SocialIcon from '../components/SocialIcon'
import { social } from '../constants'
import { SocialBand, SocialLink } from './SocialHero.css'

const actions = [

    {
        name: 'Check us out on Facebook',
        link: social.facebook,
        key: 'fb'
    },
    {
        name: 'Twitter',
        link: social.twitter,
        key: 'twitter'
    },
    {
        name: 'Blog',
        link: social.medium,
        key: 'medium'
    },
    {
        name: 'GitHub',
        link: social.github,
        key: 'github'
    }
]

export default class SocialHero extends PureComponent {
    static propTypes = {
        light: PropTypes.bool,
        items: PropTypes.array
    }

    render() {
        const { light, items } = this.props

        return (
            <SocialBand {...this.props}>
                {actions.map(action => {
                    if (items && !items.includes(action.key)) return null

                    return (
                        <SocialLink
                            key={action.name}
                            href={action.link}
                            important={action.important ? true : null}
                            rel="noopener noreferrer"
                            target="_blank"
                            light={light}
                        >
                            <SocialIcon icon={action.key} />
                            {action.name}
                        </SocialLink>
                    )
                })}
            </SocialBand>
        )
    }
}
