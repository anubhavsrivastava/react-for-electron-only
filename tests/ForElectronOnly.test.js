import ElectronOnly from '../src/index';
import React from 'react';

describe('check ElectronOnly render dom to be correct', () => {
	test('does not renders for normal browser', () => {
		Object.defineProperty(window.navigator, 'userAgent', { value: 'browser', configurable: true });
		const wrapper = shallow(
			<ElectronOnly>
				<div className="content">Content exclusively for Electron</div>
			</ElectronOnly>
		);
		expect(wrapper.find('div.content').length).toEqual(0);
		expect(wrapper.children().length).toEqual(0);
	});

	test('should render for electron', () => {
		Object.defineProperty(window.navigator, 'userAgent', { value: 'Electron', configurable: true });
		const wrapper = shallow(
			<ElectronOnly>
				<div className="content">Content exclusively for Electron</div>
			</ElectronOnly>
		);
		expect(wrapper.find('div.content').length).toEqual(1);
		expect(wrapper.children().length).toEqual(1);
	});

	test('should render for browser with default fallbackComponent prop', () => {
		Object.defineProperty(window.navigator, 'userAgent', { value: 'browser', configurable: true });
		const wrapper = shallow(
			<ElectronOnly fallbackComponent={<div className="browser-content">Content exclusively for Browser</div>}>
				<div className="content">Content exclusively for Electron</div>
			</ElectronOnly>
		);
		expect(wrapper.find('div.content').length).toEqual(0);
		expect(wrapper.find('div.browser-content').length).toEqual(1);
		expect(wrapper.children().length).toEqual(1);
	});
});
