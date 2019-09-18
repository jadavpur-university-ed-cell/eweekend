import React, { PureComponent } from 'react'
import ContentRow from '../../components/ContentRow'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import ModalForm from '../../components/Form/FormModal'
import DataGraphic from './DataGraphic'
import Features from './Features'
import { Contact } from './index.css'
import { intro } from '../../data/pages/protocol'
import forms from '../../data/forms'

export default class ProjectIntro extends PureComponent {
    state = {
        showModal: false,
        modal: ''
    }

    toggleModal = modal => {
        this.setState({
            modal,
            showModal: !this.state.showModal
        })
    }

    handleButtonClick = () => {
        this.toggleModal(this.props.form)
    }

    render() {
        return (
            <>
                {/* <ContentRow>
                    <DataGraphic />
                    <Features features={intro.features} />
                </ContentRow> */}

                <ContentRow narrow center>
                    <Contact>
                        {this.props.contentText} <br />
                        {this.props.theme=="white"?(<Button white center onClick={this.handleButtonClick}>{this.props.buttonText}</Button>):(<Button center onClick={this.handleButtonClick}>{this.props.buttonText}</Button>)}
                    </Contact>
                </ContentRow>

                {this.state.showModal && this.state.modal && (
                    <Modal
                        title={forms[this.state.modal].title}
                        description={forms[this.state.modal].description}
                        toggle={this.toggleModal}
                    >
                        <ModalForm modal={this.state.modal} />
                    </Modal>
                )}
            </>
        )
    }
}
