import React, {useContext}  from "react";
import PropTypes from 'prop-types';
import { StyledErrorBox } from "./ErrorBox.styled";
import { modalOpenContext } from "../../Context";
import { StyledButton } from "../Button/Button.styled";

export const ErrorBox = ({message}) => {
    const {setModalOpen} = useContext(modalOpenContext);

    return (
        <StyledErrorBox>
            <div>
                {message}
            </div>
            <StyledButton onClick={() => setModalOpen(false)}>
                Okay
            </StyledButton>
        </StyledErrorBox>
    );
};

ErrorBox.propTypes = {
    message : PropTypes.string.isRequired
}