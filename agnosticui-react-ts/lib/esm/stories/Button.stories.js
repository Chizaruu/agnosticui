import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';
var actionsData = {
    click: action('click'),
};
export default {
    title: 'AG—React/Button',
    component: Button,
    on: __assign({}, actionsData),
};
export var Primary = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ mode: "primary", onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isBordered: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isRounded: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isRounded: true, isBordered: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isRounded: true, isRaised: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isCircle: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isCircle: true, isBordered: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isBlock: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "primary", onClick: action('click'), isBordered: true, isBlock: true }, { children: "Go" }), void 0)] }, void 0)); };
export var Secondary = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ mode: "secondary", onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isBordered: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isRounded: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isBordered: true, isRounded: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isRaised: true, isRounded: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isCircle: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isCircle: true, isBordered: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isBlock: true, onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ mode: "secondary", isBordered: true, isBlock: true, onClick: action('click') }, { children: "Go" }), void 0)] }, void 0)); };
export var Default = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ onClick: action('click') }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isBordered: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isRounded: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isBordered: true, isRounded: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isRaised: true, isRounded: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isCircle: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isCircle: true, isBordered: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isBlock: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isBordered: true, isBlock: true }, { children: "Go" }), void 0)] }, void 0)); };
export var Sizes = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ onClick: action('click'), size: "small" }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), size: "large" }, { children: "Go" }), void 0)] }, void 0)); };
export var DisabledAll = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ isDisabled: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), mode: "primary", isDisabled: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), mode: "secondary", isDisabled: true }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), mode: "secondary", isDisabled: true, isBordered: true }, { children: "Go" }), void 0)] }, void 0)); };
export var Types = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ onClick: action('click'), type: "reset" }, { children: "Go" }), void 0), _jsx(Button, __assign({ onClick: action('click'), type: "submit" }, { children: "Go" }), void 0)] }, void 0)); };
export var Customizations = function () { return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ onClick: action('click'), css: "my-custom-css-klass" }, { children: "Inspect me to find custom classes" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isBlank: true }, { children: "Blank button" }), void 0), _jsx(Button, __assign({ onClick: action('click'), isSkinned: false }, { children: "Unskinned" }), void 0)] }, void 0)); };
//# sourceMappingURL=Button.stories.js.map