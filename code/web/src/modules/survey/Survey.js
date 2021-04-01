// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { getProducts, nextPage, previousPage } from './api/actions'
import { create } from '../subscription/api/actions';
import userRoutes from '../../setup/routes/user'

// UI Imports
import SurveyModal from '../../ui/surveyModal/SurveyModal'

//App Imports
import { APP_URL } from "../../setup/config/env";

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
        }
      }

        // tell survey which product images to render
        // track which products are selected
        // how many can they choose?
        // button: text changes when on last page
        // when survey is submitted, results are displayed
        // on results page, retake quiz or complete subscription

        handleNext = () => {
          this.setState({
            isLoading: true
          })
          this.props.nextPage(this.props.survey.page)
        }

        handlePrev = () => {
          this.setState({
            isLoading: true
          })
          this.props.previousPage(this.props.survey.page)
        }

        completeSubscription = () => {
          console.log('this is not done')
          // post subscription with results, userID, crateID
          // reset survey store to initial state
          // this.props.create()
          this.props.history.push(userRoutes.subscriptions.path)
        }

        genDesc = (selected) => {
          const sorted = Object.keys(selected).sort((a, b) => selected[b] - selected[a])
          if (sorted.length > 1) {
            return `${sorted[0]} and ${sorted[1]}`
          } else {
            return sorted[0]
          }
        }

        getResults = () => {
          const results = Object.values(this.props.survey).flat()
          const selected = results.reduce((acc, prod) =>
            {
              if(prod.selected && prod.styletag in acc) {
                acc[prod.styletag]++
              } else if(prod.selected) {
                acc[prod.styletag] = 1
              }
              return acc
            }, {})

          return this.genDesc(selected)
        }

        render() {
          const { page, products } = this.props.survey
          return (
            <>
            {products[page] ?
              <SurveyModal title="Style Survey"
                details="Choose the images that fits your style"
                nextPage={this.handleNext}
                prevPage={this.handlePrev}
                page={page}
                pageCount={products.length}
                items={products[page].products}/>
            : <SurveyModal title="Results Page"
                details="Here are your results!"
                completeSubscription={this.completeSubscription}
                results={"Edgy and Classy"}/>
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

  export default connect(surveyState, { nextPage, previousPage, getProducts, clearSurvey })(withRouter(Survey))

  // grouped by category (watches, belts, top, bottoms, etc...)
  // what needs to get passed in as items -
