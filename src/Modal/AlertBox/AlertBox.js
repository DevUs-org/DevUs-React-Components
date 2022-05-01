import React, {useContext, useEffect} from "react";
import PropTypes from 'prop-types';
import { StyledAlertBox } from "./AlertBox.styled";
import { modalOpenContext } from "../../Context";
import { StyledButton } from "../Button/Button.styled";

export const AlertBox = ({message}) => {
    const {setModalOpen} = useContext(modalOpenContext);

    useEffect(() => {
        document.querySelector('#modal-btn').addEventListener('click', () => setModalOpen(false));
    }, []);

    return (
        <StyledAlertBox>
            <div>
                {message}
            </div>
            <StyledButton>
                Okay
            </StyledButton>
        </StyledAlertBox>
    );
};

AlertBox.propTypes = {
    message : PropTypes.string.isRequired
}