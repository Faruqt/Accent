import React from 'react';

function Loading(Component) {

  return function Loadng({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data!!
        This may take some time :)
      </p>
    );
  };
}
export default Loading;
