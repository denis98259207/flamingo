import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';

const TableRowCell = React.forwardRef(
  ({ as, className, children, ...props }, ref) => (
    <UiText
      as={as}
      type={UiText.TYPES.subContent}
      className={cx('Table-RowCell', className)}
      ref={ref}
      {...props}
    >
      {children}
    </UiText>
  ),
);

TableRowCell.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

TableRowCell.defaultProps = {
  as: 'td',
  className: undefined,
  children: undefined,
};

export default TableRowCell;
