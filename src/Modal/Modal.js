import {StyledModal} from './Modal.styled';
import { AlertBox } from './AlertBox/AlertBox';
import { ErrorBox } from './ErrorBox/ErrorBox';

import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';

import { modalOpenContext } from '../Context';

export const Modal = ({type, message, isOpen}) => {
    const [modalOpen, setModalOpen] = useState(isOpen);

    function TypeSelector(){
        switch(type){
            case 'alert' : return <AlertBox message = {message} />;
            case 'error' : return <ErrorBox message= {message} />;
        }
    }

    if(modalOpen){
        return (
            <StyledModal>
                <modalOpenContext.Provider value = {{setModalOpen}}>
                    <TypeSelector />
                </modalOpenContext.Provider>
            </StyledModal>
        );
    }

    return <></>;
};

Modal.propTypes = {
    type : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired,
    isOpen : PropTypes.bool
}

Modal.defaultProps = {
    isOpen : false
}