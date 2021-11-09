import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import store from "../../store";

function Launcher({ children }) {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          { children }
        </Provider>
      </Suspense>
    </React.StrictMode>
  );
}

Launcher.propTypes = { children: PropTypes.node.isRequired };

export default Launcher;
