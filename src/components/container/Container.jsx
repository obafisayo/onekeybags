// import React from "react";
import PropTypes from "prop-types"

function Container({ classname, children }) {
     return (
          <div className={`${classname} container `}>
               {children}
          </div>
     );
}

Container.propTypes = {
     classname: PropTypes.string,
     children: PropTypes.node.isRequired
}

export default Container
