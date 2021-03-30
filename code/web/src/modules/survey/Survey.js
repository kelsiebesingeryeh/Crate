// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import crateRoutes from "../../setup/routes/crate";

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from "../../ui/typography";
import  SurveyModal from '../../ui/surveyModal'
import  Button  from '../../ui/button/Button'
import Card from "../../ui/card/Card";

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
           page: 0,
           products: null,
        //    results: [],
        //    history: null 
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
          <H3 font='secondary'>Style Survey</H3>
          <Grid>
            <GridCell>
              <Card style={{ width: "30%", backgroundColor: white }}>
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
        </SurveyModal>;
    }
    // this.props.history.push(userRoutes.subscriptions.path)
}

export default Survey

