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

                  <p style={{ marginTop: '1em', color: grey2 }}>Choose two items that fit your style.</p>
                </GridCell>
              </Grid>
              <Grid justifyCenter alignCenter style={{maxHeight: "70%"}}>
                {props.items.map((item, i)  => (
                      <Card 
                        key={i}
                        styleTag={item.styleTag}
                        onClick={()=>{console.log(item.styleTag)}}
                        style={{ 
                          margin: "1%",
                          width: "30%",
                          height: "12rem",
                          maxWidth: "12rem",
                          // backgroundColor: "#FAA", 
                          zIndex: 4, 
                          backgroundImage: `url(${item.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover" }}>
                            {/* <img 
                              src={item.image} 
                              alt={item.styleTag} 
                              style={{ width: '100%' }}/> */}
                      </Card>
                    ))            
                  }
                </Grid>
                <Grid>
                  <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                    <Button theme="primary" type="button" onClick={props.prevPage}>
                      ← Back
                    </Button>
                    <Button theme="secondary" type="button" onClick={props.nextPage}>
                      Next →
                    </Button>
                  </GridCell>
                </Grid>
            </div>
        </div>
    )
}

export default SurveyModal
