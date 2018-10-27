# `react-for-electron-only`

React component for rendering component for Electron based clients only.
`<ForElectronOnly>` would render children in case when react application runs in [Electron](https://electronjs.org/) Desktop client, else would render nothing(null) .

## Use Cases

### Trivial Case

Considering any isomorphic app which is distributed on ElectronJS and also over Web with same react codebase, say for eg. slack (which renders same UI on electron desktop client and web), there are use cases when you want to render particular DOM node/components on Electron Only and not on browser or vice versa.

### Exclusive Functionality

There are set of APIs from electron that would give native UI feel eg, [`dialog`](https://electronjs.org/docs/api/dialog) module.
For instance, one may have folder/file path as input text on browser while on electron one may use `dialog.showOpenDialog` functionality via a button.
Use of such APIs also eliminate some validation errors.

## Install

```
$ npm install electron-only --save
```

or

```
yarn add electron-only
```

## Example

1.  `<ForElectronOnly>`

        import ForElectronOnly from 'electron-only';

        ...
        render(){
            return (
                <ForElectronOnly>
                    <div className="electron-ui">
                        This will only get rendered on Electron
                    </div>
                </ForElectronOnly>
            )
        }
        ...

    This is render `div.electron-ui` on electron and nothing on normal browsers.

2.  `<ForElectronOnly>` with `fallbackComponent` option

        import ForElectronOnly from 'electron-only';

        ...
        render(){
            return (
                <ForElectronOnly
                fallbackComponent={<div className="browser-ui"> This will only get rendered in Browser </div>}>
                    <div className="electron-ui">
                        This will only get rendered on Electron
                    </div>
                </ForElectronOnly>
            )
        }
        ...

    This is render `div.electron-ui` on electron and `div.browser-ui` on browser.

3.  `ForNonElectronOnly` (supports fallbackComponent prop)

        import {ForNonElectronOnly} from 'electron-only';

        ...
        render(){
            return (
                <ForNonElectronOnly
                fallbackComponent={<div className="electron-ui"> This will only get rendered in Electron </div>}>
                    <div className="browser-ui">
                        This will only get rendered on Browser
                    </div>
                </ForNonElectronOnly>
            )
        }
        ...

    `ForNonElectronOnly` is exactly opposite of `ForElectronOnly`, ie,
    it will render `div.electron-ui` on electron and `div.browser-ui` on browser.

## APIs

### `ForElectronOnly` Component

#### Import mechanism

    import ForElectronOnly from 'electron-only'

#### Properties

| prop               | type   | description                               | default value |
| ------------------ | ------ | ----------------------------------------- | ------------- |
| children (default) | `node` | Component to be render for electron       | `null`        |
| fallbackComponent  | `node` | Component/Node to be rendered for browser | `null`        |

### `ForNonElectronOnly` Component

#### Import mechanism

    import {ForNonElectronOnly} from 'electron-only'

#### Properties

| prop               | type   | description                                | default value |
| ------------------ | ------ | ------------------------------------------ | ------------- |
| children (default) | `node` | Component to be render for browser         | `null`        |
| fallbackComponent  | `node` | Component/Node to be rendered for electron | `null`        |

### `isElectron` function

#### Import mechanism

    import {isElectron} from 'electron-only'
    //or import ElectronOnly from 'electron-only';
    // and then ElectronOnly.isElectron function can be used

#### Return values

| value | description                         | comment                                   |
| ----- | ----------------------------------- | ----------------------------------------- |
| true  | if code is executed on Electron     |                                           |
| false | if code is not executed on Electron | implies both browser and server execution |

## License

MIT License

refer `LICENSE` file in this repository.
