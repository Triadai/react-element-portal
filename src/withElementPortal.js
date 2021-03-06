import React from 'react';
import ElementPortal from './ElementPortal';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

const withElementPortal = (portalProps) => (Component) => {
  const WithElementPortal = (props) => (
    <ElementPortal
      {...portalProps}
      component={(mappedProps) => (
        React.createElement(Component, {...props, ...mappedProps})
      )}
    />
  );

  WithElementPortal.displayName = `WithElementPortal(${getDisplayName(Component)})`;
  return WithElementPortal;
};

export default withElementPortal;
