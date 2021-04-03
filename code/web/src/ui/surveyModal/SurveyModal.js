import React from "react";
import PropTypes from "prop-types";

//UI Component
import { grey, grey2, white } from '../common/colors';
import { H3 } from "../../ui/typography";
import Card from "../../ui/card/Card";
import { Grid, GridCell } from '../../ui/grid';
import Button  from '../../ui/button/Button';


//App Imports
import { APP_URL } from "../../setup/config/env";

//Component
const SurveyModal = (props) => {
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
                margin: '5% auto',
                height: '80%',
                width: '60%',
                maxWidth: '40rem',
                backgroundColor: white,
            }}>
              <Grid>
                <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                  <H3 font="secondary">{props.title}</H3>

                  <p style={{ marginTop: '1em', color: grey2 }}>{props.details}</p>

                  {props.page <= props.pageCount &&
                  <p style={{ marginTop: '1em', color: grey2 }}>Page {props.page}/{props.pageCount-1}</p>}
                </GridCell>
              </Grid>
              <Grid justifyCenter alignCenter style={{maxHeight: "70%"}}>
                {props.items ? props.items.map((item, i)  => (
                      <Card
                        key={item.id}
                        id={item.id}
                        styleTag={item.styleTag}
                        onClick={() => props.toggleSelection(item.id)}
                        style={{
                          margin: "1%",
                          width: "30%",
                          height: "12rem",
                          maxWidth: "12rem",
                          zIndex: 4,
                          backgroundImage: `url(${item.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover" }}>
                            <img
                              src={`${ APP_URL }/images/selected-mark.png`}
                              alt={item.styleTag}
                              style={{ 
                                width: '100%',
                                display: item.selected ? 'block' : 'none'  }}/>
                      </Card>
                    ))
                  :
                  <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                    <p>You Are...</p>
                    <H3 font="secondary">{props.results}</H3>
                  </GridCell>
                  }
                </Grid>
                <Grid>
                  {props.pageCount > props.page ?
                  <GridCell style={{ padding: '1em', textAlign: 'center' }}>
                    <Button 
                      theme="primary" 
                      type="button" 
                      disabled={props.page>1?false:true}
                      onClick={props.prevPage}>
                      ← Back
                    </Button>
                    <Button 
                      theme="secondary" 
                      type="button" 
                      disabled={props.selectCount>0?false:true}
                      onClick={props.nextPage}>
                      Next →
                    </Button>
                  </GridCell>
                  : <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                    <Button 
                      theme="primary" 
                      type="button" 
                      onClick={props.retakeSurvey}>
                      Retake Survey
                    </Button>
                    <Button 
                      theme="secondary" 
                      type="button" 
                      onClick={props.completeSubscription}>
                      + Subscription
                    </Button>
                  </GridCell>
                }
                </Grid>
                <GridCell style={{ padding: '0em', textAlign: 'center' }}>
                  <Button 
                    theme="none" 
                    type="button" 
                    onClick={props.exitSurvey}>
                    exit
                  </Button>
                </GridCell>
            </div>
        </div>
    )
}

export default SurveyModal
