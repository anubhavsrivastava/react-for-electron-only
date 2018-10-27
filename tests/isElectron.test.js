import isElectron from '../src/isElectron';

describe('check isElectron detection to be correct', () => {
	it('default test result should be false', () => {
		window.process = {};
		Object.defineProperty(window.navigator, 'userAgent', { value: '', configurable: true });
		const actual = isElectron();
		expect(actual).toEqual(false);
	});

	it('should be true for Renderer process', () => {
		window.process = { versions: {}, type: 'renderer' };
		const actual = isElectron();
		expect(actual).toEqual(true);
	});

	it('should be true for Main process', () => {
		window.process = { type: 'fake', versions: { electron: '1.0.0' } };
		const actual = isElectron();
		expect(actual).toEqual(true);
	});

	it('should be true user agent when the `nodeIntegration` option is set to true', () => {
		window.process = {};
		Object.defineProperty(window.navigator, 'userAgent', { value: window.navigator.userAgent + ' Electron', configurable: true });
		const actual = isElectron();
		expect(actual).toEqual(true);
	});
});
