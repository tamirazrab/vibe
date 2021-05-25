/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Redo =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M13.3733 4.4844C13.0885 4.76915 13.0885 5.23084 13.3733 5.51559L16.191 8.33333L13.3733 11.1511C13.0885 11.4358 13.0885 11.8975 13.3733 12.1823C13.6581 12.467 14.1197 12.467 14.4045 12.1823L17.7378 8.84893C18.0226 8.56417 18.0226 8.10249 17.7378 7.81773L14.4045 4.4844C14.1197 4.19964 13.6581 4.19964 13.3733 4.4844Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M17.9514 8.33334C17.9514 7.93063 17.6249 7.60417 17.2222 7.60417H7.22223C5.85011 7.60417 4.53418 8.14925 3.56394 9.11949C2.5937 10.0897 2.04862 11.4057 2.04862 12.7778V15C2.04862 15.4027 2.37508 15.7292 2.77779 15.7292C3.1805 15.7292 3.50696 15.4027 3.50696 15V12.7778C3.50696 11.7924 3.89839 10.8474 4.59513 10.1507C5.29188 9.45393 6.23688 9.06251 7.22223 9.06251H17.2222C17.6249 9.06251 17.9514 8.73605 17.9514 8.33334Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Redo.displayName = 'Redo';
Redo.propTypes = {
  size: PropTypes.string
}
export default Redo;
/* tslint:enable */
/* eslint-enable */
