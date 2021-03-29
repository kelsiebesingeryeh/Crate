// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userRoutes from "../../setup/routes/user";

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from "../../ui/typography";
import  SurveyModal from '../../ui/surveyModal'
import  Button  from '../../ui/button/Button'

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
           page: 0,
           products: null,
           results: [],
           history: null 
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
        <SurveyModal>
        {/* product display */}
          <Grid>
              <GridCell>
                  {/* individual component */}
                  {/* function that iterates over all products to display clickable images */}
              </GridCell>
          </Grid>  
        <Button theme='secondary' type='button' onClick={this.nextPage}>
            Next Page
        </Button>
        </SurveyModal>
    }
    // this.props.history.push(userRoutes.survey.path)
}

export default Survey

