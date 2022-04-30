import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { StyledAlertBox } from "./AlertBox.styled";
import { modalOpenContext } from "../../Context";
import { StyledButton } from "../Button/Button.styled";

export const AlertBox = ({message}) => {
    const {setModalOpen} = useContext(modalOpenContext);

    return (
        <StyledAlertBox>
            <div>
                {message}
            </div>
            <StyledButton onClick={() => setModalOpen(false)}>
                Okay
            </StyledButton>
        </StyledAlertBox>
    );
};

AlertBox.propTypes = {
    message : PropTypes.string.isRequired
}