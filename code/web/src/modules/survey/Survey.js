// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import crateRoutes from "../../setup/routes/crate";

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from "../../ui/typography";
import SurveyModal from '../../ui/surveyModal/SurveyModal'
import Button  from '../../ui/button/Button'
import Card from "../../ui/card/Card";
import { white } from "../../ui/common/colors";

//App Imports
import { APP_URL } from "../../setup/config/env";

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
           page: 0,
           products: null,
          }
        }
        
        nextPage = () => {
          this.setState(prevState => {
            return {
              page: prevState.page + 1  
            }
          })
        }
        
        render() {
          return (
            // product display
            <SurveyModal title="Style Survey" nextPage={this.nextPage} items={[1, 2, 3, 4, 5, 6]}/>
          )
    }
    // this.props.history.push(userRoutes.subscriptions.path)
  }
  
  export default Survey
  
  
  //    results: [],
  //    history: null 