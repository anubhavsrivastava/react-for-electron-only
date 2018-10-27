import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isElectron from './isElectron';

class ForElectronOnly extends PureComponent {
	render() {
		const { children, fallbackComponent } = this.props;
		if (isElectron()) {
			return children;
		} else {
			return fallbackComponent;
		}
	}
}

ForElectronOnly.propTypes = {
	fallbackComponent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

ForElectronOnly.defaultProps = {
	fallbackComponent: null,
	children: null
};

ForElectronOnly.isElectron = isElectron;

class ForNonElectronOnly extends PureComponent {
	render() {
		const { children, fallbackComponent } = this.props;
		return <ForElectronOnly fallbackComponent={children}> {fallbackComponent}</ForElectronOnly>;
	}
}

ForNonElectronOnly.propTypes = ForElectronOnly.propTypes;
ForNonElectronOnly.defaultProps = ForElectronOnly.defaultProps;

export { isElectron, ForNonElectronOnly };
export default ForElectronOnly;
