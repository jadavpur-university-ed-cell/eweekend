import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import serialize from 'form-serialize'
import FormInput from './FormInput'
import FormInputRadioCheckbox from './FormInputRadioCheckbox'
import Button from '../Button'
import forms from '../../data/forms'
import gdpr from '../../data/gdpr'
import { StyledMessage, Gdpr } from './FormModal.css'

export default class ModalForm extends PureComponent {
    static propTypes = {
        modal: PropTypes.string.isRequired
    }

    state = {
        fetching: false,
        sent: false,
        message: ''
    }

    makeRequest = (url, modal) => {
        fetch(url+"&sheetID="+modal).then((err, data) => {
            if(err.status==200 || err.status==302){
                this.setState({
                    fetching: false,
                    sent: true,
                    message: forms[modal].success
                })
            }
            else if (err) {
                this.setState({
                    fetching: false,
                    message: err
                })
            } else if (data.result !== 'success') {
                this.setState({
                    fetching: false,
                    message: data.msg
                })
            } else {
                this.setState({
                    fetching: false,
                    sent: true,
                    message: forms[modal].success
                })
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()

        const form = e.target
        const { modal } = this.props
        const baseUrl = process.env.REACT_APP_FORM_BASEURL
        const data = "?" + serialize(form)
        this.setState(
            {
                fetching: true,
                message: ''
            },
            () => this.makeRequest(baseUrl+data, modal)
        )
    }

    render() {
        const { modal } = this.props
        const { sent, message, fetching } = this.state

        return sent ? (
            <StyledMessage
                success
                dangerouslySetInnerHTML={{
                    __html: message
                }}
            />
        ) : (
            <>
                <form onSubmit={this.onSubmit}>
                    {forms[modal].fields &&
                        Object.entries(forms[modal].fields).map(
                            ([key, value]) =>
                                value.type === 'radio' ||
                                value.type === 'checkbox' ? (
                                    <FormInputRadioCheckbox
                                        key={key}
                                        label={value.label}
                                        name={key}
                                        required={
                                            value.required
                                                ? value.required
                                                : null
                                        }
                                        help={value.help}
                                        options={value.options}
                                        type={value.type}
                                    />
                                ) : (
                                    <FormInput
                                        key={key}
                                        label={value.label}
                                        placeholder={
                                            value.placeholder
                                                ? value.placeholder
                                                : null
                                        }
                                        name={key}
                                        required={
                                            value.required
                                                ? value.required
                                                : null
                                        }
                                        tag={value.tag ? value.tag : null}
                                        type={value.type ? value.type : 'text'}
                                        maxLength={
                                            value.maxLength
                                                ? value.maxLength
                                                : null
                                        }
                                        maxWords={
                                            value.maxWords
                                                ? value.maxWords
                                                : null
                                        }
                                        rows={
                                            value.maxLength || value.maxWords
                                                ? '6'
                                                : null
                                        }
                                        help={value.help}
                                    />
                                )
                        )}

                    <Button primary fetching={fetching} type="submit">
                        {forms[modal].button}
                    </Button>

                    {message && (
                        <StyledMessage
                            dangerouslySetInnerHTML={{
                                __html: message
                            }}
                        />
                    )}

                    <Gdpr
                        dangerouslySetInnerHTML={{ __html: gdpr.forms.modal }}
                    />
                </form>
            </>
        )
    }
}
