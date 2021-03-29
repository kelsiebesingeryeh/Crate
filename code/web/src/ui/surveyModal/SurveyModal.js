import React from "react";
import PropTypes from "prop-types";
import { grey, white } from '../common/colors';

//Component
const SurveyModal = () => {
    return (
        <div style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            bottom: 0,
            backgroundColor: grey,
            zIndex: 2
        }}>
            <div style={{
                margin: 'auto',
                height: '80%',
                width: '60%',
                backgroundColor: white
            }}>

            </div>
        </div>
    )
}

export default SurveyModal
