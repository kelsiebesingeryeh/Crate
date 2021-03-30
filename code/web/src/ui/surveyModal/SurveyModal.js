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
                backgroundColor: white,
            }}>
              <Grid>
                <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                  <H3 font="secondary">{props.title}</H3>

                  <p style={{ marginTop: '1em', color: grey2 }}>Choose two items that fit your style.</p>
                </GridCell>
              </Grid>
              <Grid justifyCenter alignCenter>
                {props.items.map((item, i)  => (
                      <Card 
                        key={i}
                        style={{ 
                          margin: "1%",
                          width: "30%", 
                          backgroundColor: "#FAA", 
                          zIndex: 4 }}>
                            <img 
                              src={`${ APP_URL }/images/crate.png`} 
                              alt={`a box`} 
                              style={{ width: '100%' }}/>
                      </Card>
                    ))            
                  }
                </Grid>
                <Grid>
                  <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                    <Button theme="secondary" type="button" onClick={props.nextPage}>
                      Next Page
                    </Button>
                  </GridCell>
                </Grid>
            </div>
        </div>
    )
}

export default SurveyModal
