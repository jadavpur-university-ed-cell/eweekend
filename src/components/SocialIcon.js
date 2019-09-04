import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ButtonTwitter } from '../assets/buttons/twitter.svg'
import { ReactComponent as ButtonMedium } from '../assets/buttons/medium.svg'
import { ReactComponent as ButtonGithub } from '../assets/buttons/github.svg'
import { ReactComponent as ButtonLinkedin } from '../assets/buttons/linkedin.svg'
import { ReactComponent as ButtonYouTube } from '../assets/buttons/youtube.svg'
import { ReactComponent as ButtonFacebook } from '../assets/buttons/facebook.svg'

export default class SocialIcon extends PureComponent {
    static propTypes = {
        icon: PropTypes.string
    }

    render() {
        switch (this.props.icon) {
            case 'medium':
                return <ButtonMedium />
            case 'twitter':
                return <ButtonTwitter />
            case 'github':
                return <ButtonGithub />
            case 'linkedin':
                return <ButtonLinkedin />
            case 'youtube':
                return <ButtonYouTube />
            case 'fb':
                return <ButtonFacebook />
            default:
                return null
        }
    }
}
