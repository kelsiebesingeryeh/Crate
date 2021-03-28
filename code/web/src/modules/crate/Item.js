// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'
import { create } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  //basic constructor function here
  //we'll inherit some key functions through those props
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  //This is the primary function we'll be modifying: our feature starts here
  //most of the code here can still be used, but we'll need to move it
  //right now it calls the create function, which sends a mutation to the API
  //this means it just adds a subscription
  //instead we should use this function to navigate to our survey
  //when we submit that survey, the code will look very similar to this
  onClickSubscribe = (crateId) => {
    this.setState({
      isLoading: true
    })

    this.props.messageShow('Subscribing, please wait...')

    //when we DO submit the survey and send a mutation to the backend
    //we'll want to include the survey results as well as the crateId
    this.props.create({ crateId })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          //the code below displays a success message
          //and routes the user to /subscriptions
          //no matter how we reorganize this code we need to make sure to preserve this
          //this message and re-route is what confirms for the user that they've
          //added a subscription successfully
          this.props.messageShow('Subscribed successfully.')

          this.props.history.push(userRoutes.subscriptions.path)
        }
      })
      .catch(error => {
        //this message may need to change to indicate that somehting could
        //go wrong with the survey as well
        this.props.messageShow('There was some error subscribing to this crate. Please try again.')
      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  //this render function renders one 'crate' card to go in our list
  render() {
    const { id, name, description } = this.props.crate
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={name} style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
          {/*
            this button is what a user will click to open our survey
            right now it just adds the subscription to their account
            right away
          */}
            <Button
              theme="primary"
              onClick={this.onClickSubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              <Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe
            </Button>
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))
