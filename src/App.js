import React, { useEffect, useRef } from "react";
import "./index.css";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import { Grid, CardHeader, CardContent, Typography } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import useStyles from "./styles";
const App = () => {
  const { speechState } = useSpeechContext();
  const classes = useStyles();
  const main = useRef(null);
  const executeScroll = () => {
    main.current.scrollIntoView();
  };
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
  return (
    <div>
      <Grid
        container
        className={classes.grid}
        spacing={0}
        alignItems="center"
        justify="center"
        styles={{ height: "100vh" }}
      >
        <div>hiiii</div>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
      
    </div>
  );
};
export default App;
