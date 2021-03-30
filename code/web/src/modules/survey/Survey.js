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

  const object = {
    name: "Classy Watch for Women Two",
    slug: "classy-watch-for-women-two",
    description: "A very classy watch for Women.",
    styleTag: "params.product.styleTag.classy.id",
    image: `${APP_URL}/images/crate.png`,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const results = {
    1: [{ object }, { object }, { object }, { object }, { object }, { object }],
    2: [{ object }, { object }, { object }, { object }, { object }, { object }],
    3: [{ object }, { object }, { object }, { object }, { object }, { object }],
  };

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
           page: 1,
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
        
        nextPage = () => {
          this.setState(prevState => {
            return {
              page: prevState.page + 1  
            }
          })
          console.log(this.state.page)
        }
        
        render() {
          return (
            // product display
            <SurveyModal title="Style Survey" nextPage={this.nextPage} items={this.state.products[this.state.page]}/>
          )
    }
    // this.props.history.push(userRoutes.subscriptions.path)
  }
  
  export default Survey
  
  // grouped by category (watches, belts, top, bottoms, etc...)
  // what needs to get passed in as items - 

  
  
  //    results: [],
  //    history: null 

  // const results = {
  //   1: [{}, {}, {}, {}, {}, {}],
  //   2: [{}, {}, {}, {}, {}, {}],
  //   3: [{}, {}, {}, {}, {}, {}],
  // };