import React, { Component } from 'react';
import { Alert } from 'patternfly-next-react';
import '@patternfly/patternfly-next-workshop/dist/patternfly.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Work in Progress! TODO: Use the Page layout and vertical nav</h1>
        <div style={{ paddingBottom: 10 }}>
          <Alert>
            I am an Alert with type="
            error
            "
          </Alert>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <Alert type="warning">
            I am an Alert with type="
            warning
            "
          </Alert>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <Alert type="success">
            I am an Alert with type="
            success
            "
          </Alert>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <Alert type="info">
            I am an Alert with type="
            info
            "
          </Alert>
        </div>
      </div>
    );
  }
}

export default App;
