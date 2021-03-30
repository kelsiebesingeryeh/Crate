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
            <SurveyModal>
            {/* product display */}
            <H3 font='secondary'>Style Survey</H3>
            <Grid style={{zIndex: 3}}>
              <GridCell>
                <Card style={{ width: "30%", backgroundColor: "#FFA", zIndex: 4 }}>
                    <img src={`${ APP_URL }/images/crate.png`} alt={`a box`} style={{ width: '100%' }}/>
                </Card>
                {/* individual component */}
                {/* add onClick on the image. src, alt, style, selected - false by default */}
                {/* function that iterates over all products to display clickable images */}
              </GridCell>
            </Grid>
            <Button theme="secondary" type="button" onClick={this.nextPage}>
              Next Page
            </Button>
          </SurveyModal>
          )
    }
    // this.props.history.push(userRoutes.subscriptions.path)
  }
  
  export default Survey
  
  
  //    results: [],
  //    history: null 