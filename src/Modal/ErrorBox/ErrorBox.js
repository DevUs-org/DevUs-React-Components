import React, {useContext, useEffect}  from "react";
import PropTypes from 'prop-types';
import { StyledErrorBox } from "./ErrorBox.styled";
import { modalOpenContext } from "../../Context";
import { StyledButton } from "../Button/Button.styled";

export const ErrorBox = ({message}) => {
    const {setModalOpen} = useContext(modalOpenContext);

    useEffect(() => {
        document.querySelector('#modal-btn').addEventListener('click', () => setModalOpen(false));
    }, []);

    return (
        <StyledErrorBox>
            <div>
                {message}
            </div>
            <StyledButton>
                Okay
            </StyledButton>
        </StyledErrorBox>
    );
};

ErrorBox.propTypes = {
    message : PropTypes.string.isRequired
}