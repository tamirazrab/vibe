/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const File =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M4.93635 3.64999C4.82942 3.64999 4.72962 3.69182 4.65819 3.76193C4.58723 3.83158 4.54999 3.92303 4.54999 4.01538V16.2846C4.54999 16.377 4.58723 16.4684 4.65819 16.5381C4.72962 16.6082 4.82942 16.65 4.93635 16.65H15.1636C15.2706 16.65 15.3704 16.6082 15.4418 16.5381C15.5127 16.4684 15.55 16.377 15.55 16.2846V8.79168L10.3116 3.64999H4.93635ZM3.60745 2.69143C3.96224 2.34319 4.44052 2.14999 4.93635 2.14999H10.6182C10.8147 2.14999 11.0033 2.22711 11.1435 2.36475L16.8254 7.94167C16.969 8.0827 17.05 8.27558 17.05 8.47692V16.2846C17.05 16.7839 16.8478 17.2598 16.4925 17.6086C16.1377 17.9568 15.6595 18.15 15.1636 18.15H4.93635C4.44052 18.15 3.96224 17.9568 3.60745 17.6086C3.25219 17.2598 3.04999 16.7839 3.04999 16.2846V4.01538C3.04999 3.51609 3.25219 3.04014 3.60745 2.69143Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M10.6182 2.14999C11.0324 2.14999 11.3682 2.48578 11.3682 2.89999V7.72692H16.3C16.7143 7.72692 17.05 8.0627 17.05 8.47692C17.05 8.89113 16.7143 9.22692 16.3 9.22692H10.6182C10.204 9.22692 9.86823 8.89113 9.86823 8.47692V2.89999C9.86823 2.48578 10.204 2.14999 10.6182 2.14999Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
File.displayName = 'File';
File.propTypes = {
  size: PropTypes.string
}
export default File;
/* tslint:enable */
/* eslint-enable */
