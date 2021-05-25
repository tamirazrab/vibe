/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Show =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M14.1176 5.83908C12.8643 5.05635 11.4319 4.50553 9.97041 4.52918C8.50891 4.50553 7.07654 5.05635 5.82346 5.83911C4.56124 6.62759 3.42984 7.68258 2.55885 8.74485L2.55885 8.74485L2.55686 8.74729C2.36883 8.97859 2.03906 9.43301 2.03906 9.99895C2.03906 10.5649 2.36883 11.0193 2.55686 11.2506L2.55686 11.2506L2.55871 11.2529C3.41048 12.2923 4.53011 13.3478 5.7911 14.1425C7.04329 14.9316 8.48556 15.4948 9.97041 15.4708C11.4553 15.4948 12.8977 14.9317 14.1501 14.1426C15.4114 13.3479 16.5315 12.2925 17.3838 11.2531L17.3859 11.2506L17.4054 11.2267L17.4054 11.2267C17.4846 11.1295 17.6104 10.9754 17.7138 10.8049C17.8251 10.6213 17.9609 10.3405 17.9609 9.99895C17.9609 9.65745 17.8251 9.37655 17.7138 9.19303C17.6104 9.02248 17.4847 8.86839 17.4054 8.77123L17.4054 8.77121L17.3859 8.74729L17.3859 8.74728L17.3836 8.74452C16.5118 7.68243 15.38 6.62751 14.1176 5.83908ZM3.57017 9.91628C3.60219 9.85199 3.65278 9.77726 3.71983 9.69465C4.50341 8.73925 5.51496 7.80043 6.61815 7.1113C7.72696 6.41866 8.87788 6.009 9.9564 6.02916C9.96574 6.02933 9.97509 6.02933 9.98443 6.02916C11.0629 6.009 12.2139 6.41865 13.323 7.11133C14.4264 7.80049 15.4385 8.73937 16.2231 9.69493L16.2231 9.69495C16.3193 9.81326 16.3838 9.89256 16.4313 9.97088C16.4378 9.98162 16.4431 9.99096 16.4474 9.99895C16.4431 10.0069 16.4378 10.0163 16.4313 10.027C16.3838 10.1053 16.3193 10.1846 16.2231 10.303L16.2231 10.303L16.223 10.3031C15.4555 11.2388 14.4534 12.1786 13.3505 12.8734C12.2423 13.5717 11.0831 13.9913 9.9844 13.9708C9.97508 13.9707 9.96575 13.9707 9.95643 13.9708C8.85777 13.9913 7.69873 13.5717 6.59085 12.8735C5.4883 12.1787 4.48674 11.2389 3.71991 10.3033C3.65281 10.2207 3.6022 10.1459 3.57017 10.0816C3.54522 10.0315 3.54023 10.0051 3.53927 9.99895C3.54023 9.99278 3.54522 9.96639 3.57017 9.91628ZM10.8071 10C10.8071 10.4422 10.4476 10.804 9.99998 10.804C9.55237 10.804 9.1929 10.4422 9.1929 10C9.1929 9.55783 9.55237 9.19599 9.99998 9.19599C10.4476 9.19599 10.8071 9.55783 10.8071 10ZM12.3071 10C12.3071 11.2725 11.2741 12.304 9.99998 12.304C8.72582 12.304 7.6929 11.2725 7.6929 10C7.6929 8.72753 8.72582 7.69599 9.99998 7.69599C11.2741 7.69599 12.3071 8.72753 12.3071 10Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Show.displayName = 'Show';
Show.propTypes = {
  size: PropTypes.string
}
export default Show;
/* tslint:enable */
/* eslint-enable */
