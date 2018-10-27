import { ForNonElectronOnly } from '../src/index';
import React from 'react';

describe('check ForNonElectronOnly render dom to be correct', () => {
	test('should render for normal browser', () => {
		Object.defineProperty(window.navigator, 'userAgent', { value: 'browser', configurable: true });
		const wrapper = mount(
			<ForNonElectronOnly>
				<div className="content">Content exclusively for Browser</div>
			</ForNonElectronOnly>
		);
		expect(wrapper.find('div.content').length).toEqual(1);
		expect(wrapper.children().length).toEqual(1);
	});

	test('does not renders for electron', () => {
		Object.defineProperty(window.navigator, 'userAgent', { value: 'Electron', configurable: true });
		const wrapper = shallow(
			<ForNonElectronOnly>
				<div className="content">Content exclusively for Electron</div>
			</ForNonElectronOnly>
		);

		expect(wrapper.find('div.content').length).toEqual(0);
		expect(wrapper.children().children().length).toEqual(0);
	});

	test('should renders for electrong with default fallbackComponent prop', () => {
		Object.defineProperty(window.navigator, 'userAgent', { value: 'Electron', configurable: true });
		const wrapper = shallow(
			<ForNonElectronOnly fallbackComponent={<div className="electron-content">Content exclusively for Browser</div>}>
				<div className="content">Content exclusively for Electron</div>
			</ForNonElectronOnly>
		);
		expect(wrapper.find('div.content').length).toEqual(0);
		expect(wrapper.find('div.electron-content').length).toEqual(1);
		expect(wrapper.children().children().length).toEqual(1);
	});
});
