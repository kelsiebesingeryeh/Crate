// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { getProducts, nextPage, previousPage, clearSurvey, toggleSelection, retakeSurvey } from './api/actions'
import { create } from '../subscription/api/actions';
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user';
import { styleToString } from '../../setup/helpers'


// UI Imports
import SurveyModal from '../../ui/surveyModal/SurveyModal'

//App Imports
import { APP_URL } from "../../setup/config/env";

class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           isLoading: false,
           selectCount: 0
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
            isLoading: true,
            selectCount: 0
          })
          this.props.nextPage(this.props.survey.page)
        }

        handlePrev = () => {
          this.setState({
            isLoading: true,
            selectCount: 1
          })
          this.props.previousPage(this.props.survey.page)
          console.log("Is this connected?")
        }

        genDesc = (selected) => {
          const sorted = Object.keys(selected).sort((a, b) => selected[b] - selected[a])
          if (sorted.length > 1) {
            return `${styleToString(sorted[0])} and ${styleToString(sorted[1])}`
          } else {
            return styleToString(sorted[0])
          }
        }

        getResults = () => {
          const results = Object.values(this.props.survey.products).flat()
          const selected = results.reduce((acc, prod) =>
            {
              if(prod.selected && prod.styleTag in acc) {
                acc[prod.styleTag]++
              } else if(prod.selected) {
                acc[prod.styleTag] = 1
              }
              return acc
            }, {})

          return this.genDesc(selected)
        }

        toggleSelection = (id) => {
          this.props.toggleSelection(id, this.props.survey.products)
          this.setState(prevState=> ({
            selectCount: prevState.selectCount + 1
          }))
        }

        exitSurvey = () => {
          confirm('Are you sure you want to exit the survey? Progress will be lost.')
          this.props.clearSurvey()
          this.props.history.push(crateRoutes.list.path)
        }

        retakeSurvey = () => {
          this.setState({
            selectCount: 0
          })
          this.props.retakeSurvey(this.props.survey.products)
          this.props.history.push(crateRoutes.survey.path)
        }

        completeSubscription = () => {

          this.props.create({
            style: this.getResults(),
            crateId: this.props.survey.crateId
          })
          //send getResults() to server
          //if 200 code re-route
          //if not handle error? or we can figure that out tomorrow

          this.props.clearSurvey()
          this.props.history.push(userRoutes.subscriptions.path)
        }

        render() {
          const { page, products } = this.props.survey
          return (
            <>
              {Array.isArray(products[page]) ?
                <SurveyModal title="Style Survey"
                  details="Choose the images that fits your style"
                  nextPage={this.handleNext}
                  prevPage={this.handlePrev}
                  exitSurvey={this.exitSurvey}
                  page={page}
                  pageCount={Object.keys(products).length + 1}
                  items={products[page]}
                  selectCount={this.state.selectCount}
                  toggleSelection={this.toggleSelection}
                />
              : <SurveyModal
                  title="Results Page"
                  details="Here are your results!"
                  completeSubscription={this.completeSubscription}
                  retakeSurvey={this.retakeSurvey}
                  exitSurvey={this.exitSurvey}
                  results={this.getResults()}
                />
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

  export default connect(surveyState, { nextPage, previousPage, getProducts, clearSurvey, toggleSelection, retakeSurvey, create })(withRouter(Survey))

  // grouped by category (watches, belts, top, bottoms, etc...)
  // what needs to get passed in as items -
