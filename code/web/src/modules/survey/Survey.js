// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { getProducts, nextPage } from './api/actions'
import crateRoutes from "../../setup/routes/crate";

// UI Imports
import SurveyModal from '../../ui/surveyModal/SurveyModal'

//App Imports
import { APP_URL } from "../../setup/config/env";

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
           products: {
            1: [{styleTag: 1,image: `${APP_URL}/images/crate.png`}, {styleTag: 2, image: `${APP_URL}/images/crate.png`, }, { styleTag: 3, image: `${APP_URL}/images/crate.png`, }, { styleTag: 4, image: `${APP_URL}/images/crate.png`, }, { styleTag: 5, image: `${APP_URL}/images/crate.png`, }, { styleTag: 6, image: `${APP_URL}/images/crate.png`, }],
            2: [{styleTag: 1,image: `${APP_URL}/images/crate.png`}, {styleTag: 2, image: `${APP_URL}/images/crate.png`, }, { styleTag: 3, image: `${APP_URL}/images/crate.png`, }, { styleTag: 4, image: `${APP_URL}/images/crate.png`, }, { styleTag: 5, image: `${APP_URL}/images/crate.png`, }, { styleTag: 6, image: `${APP_URL}/images/crate.png`, }],
            3: [{styleTag: 1,image: `${APP_URL}/images/crate.png`}, {styleTag: 2, image: `${APP_URL}/images/crate.png`, }, { styleTag: 3, image: `${APP_URL}/images/crate.png`, }, { styleTag: 4, image: `${APP_URL}/images/crate.png`, }, { styleTag: 5, image: `${APP_URL}/images/crate.png`, }, { styleTag: 6, image: `${APP_URL}/images/crate.png`, }],
          },
          }
        }

        // tell survey which product images to render
        // track which products are selected
        // how many can they choose?
        // button: text changes when on last page
        // when survey is submitted, results are displayed
        // on results page, retake quiz or complete subscription
        
        handleClick = () => {
          this.setState({
            isLoading: true
          })
          this.props.nextPage(this.props.survey.page)
        }
        
        render() {
          const { page } = this.props.survey
          return (
            <>
            {this.state.products[page] ?
              <SurveyModal title="Style Survey" nextPage={this.handleClick} items={this.state.products[page]}/>
            : <SurveyModal title="Results Page" items={this.state.products[1]}/>
            }
           </>
          )
        }
        // product display
    // this.props.history.push(userRoutes.subscriptions.path)
  }

  function surveyState(state) {
    return {
      survey: state.survey
    }
  }
  
  export default connect(surveyState, { nextPage, getProducts })(withRouter(Survey))
  
  // grouped by category (watches, belts, top, bottoms, etc...)
  // what needs to get passed in as items - 