(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[204],{"./packages/components/src/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_3:()=>CONNECTED_NAMESPACE,cT:()=>COMPONENT_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G8:()=>ContextSystemProvider,eb:()=>useComponentsContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useComponentsContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_2___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>hasConnectNamespace,Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/heading/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>heading_component});__webpack_require__("./node_modules/react/index.js");var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/text/hook.ts"),font_size=__webpack_require__("./packages/components/src/utils/font-size.ts"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedHeading(props,forwardedRef){const headerProps=function useHeading(props){const{as:asProp,level=2,color=colors_values.D.gray[900],isBlock=!0,weight=config_values.Z.fontWeightHeading,...otherProps}=(0,use_context_system.y)(props,"Heading"),as=asProp||`h${level}`,a11yProps={};return"string"==typeof as&&"h"!==as[0]&&(a11yProps.role="heading",a11yProps["aria-level"]="string"==typeof level?parseInt(level):level),{...(0,hook.Z)({color,isBlock,weight,size:(0,font_size.gZ)(level),...otherProps}),...a11yProps,as}}(props);return(0,jsx_runtime.jsx)(component.Z,{...headerProps,ref:forwardedRef})}UnconnectedHeading.displayName="UnconnectedHeading";const Heading=(0,context_connect.Iq)(UnconnectedHeading,"Heading"),heading_component=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:'`Heading` renders headings and titles using the library\'s typography system.\n\n```jsx\nimport { __experimentalHeading as Heading } from "@wordpress/components";\n\nfunction Example() {\n  return <Heading>Code is Poetry</Heading>;\n}\n```',displayName:"Heading",props:{children:{defaultValue:null,description:"The children elements.\n\nNote: text truncation will be attempted only if the `children` are either\nof type `string` or `number`. In any other scenarios, the component will\nnot attempt to truncate the text, and will pass through the `children`.",name:"children",required:!0,type:{name:"ReactNode"}},display:{defaultValue:null,description:"Adjusts the CSS display.",name:"display",required:!1,type:{name:"Display"}},letterSpacing:{defaultValue:null,description:"Adjusts letter-spacing of the text.",name:"letterSpacing",required:!1,type:{name:"LetterSpacing<string | number>"}},align:{defaultValue:null,description:"Adjusts the text alignment.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"end"'},{value:'"start"'},{value:'"initial"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"match-parent"'}]}},ellipsis:{defaultValue:{value:"'…'"},description:"The ellipsis string when truncating the text by the `limit` prop's value.",name:"ellipsis",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:{value:"'auto'"},description:"Determines where to truncate.  For example, we can truncate text right in\nthe middle. To do this, we need to set `ellipsizeMode` to `middle` and a\ntext `limit`.\n\n* `auto`: Trims content at the end automatically without a `limit`.\n* `head`: Trims content at the beginning. Requires a `limit`.\n* `middle`: Trims content in the middle. Requires a `limit`.\n* `tail`: Trims content at the end. Requires a `limit`.",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"none"'},{value:'"auto"'},{value:'"middle"'},{value:'"tail"'}]}},limit:{defaultValue:{value:"0"},description:"Determines the max number of characters to be displayed before the rest\nof the text gets truncated. Requires `ellipsizeMode` to assume values\ndifferent from `auto` and `none`.",name:"limit",required:!1,type:{name:"number"}},numberOfLines:{defaultValue:{value:"0"},description:"Clamps the text content to the specified `numberOfLines`, adding an\nellipsis at the end. Note: this feature ignores the value of the\n`ellipsis` prop and always displays the default `…` ellipsis.",name:"numberOfLines",required:!1,type:{name:"number"}},adjustLineHeightForInnerControls:{defaultValue:null,description:"Automatically calculate the appropriate line-height value for contents that render text and Control elements (e.g. `TextInput`).",name:"adjustLineHeightForInnerControls",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'}]}},isDestructive:{defaultValue:{value:"false"},description:"Renders a destructive color.",name:"isDestructive",required:!1,type:{name:"boolean"}},highlightEscape:{defaultValue:{value:"false"},description:"Escape characters in `highlightWords` which are meaningful in regular expressions.",name:"highlightEscape",required:!1,type:{name:"boolean"}},highlightCaseSensitive:{defaultValue:{value:"false"},description:"Determines if `highlightWords` should be case sensitive.",name:"highlightCaseSensitive",required:!1,type:{name:"boolean"}},highlightSanitize:{defaultValue:null,description:"Array of search words. String search terms are automatically cast to RegExps unless `highlightEscape` is true.",name:"highlightSanitize",required:!1,type:{name:"(text: string) => string"}},lineHeight:{defaultValue:null,description:"Adjusts all text line-height based on the typography system.",name:"lineHeight",required:!1,type:{name:"LineHeight<string | number>"}},optimizeReadabilityFor:{defaultValue:null,description:"The `Text` color can be adapted to a background color for optimal readability. `optimizeReadabilityFor` can accept CSS variables, in addition to standard CSS color values (e.g. Hex, RGB, HSL, etc...).",name:"optimizeReadabilityFor",required:!1,type:{name:"Color"}},truncate:{defaultValue:{value:"false"},description:"Enables text truncation. When `truncate` is set, we are able to truncate the long text in a variety of ways. Note: text truncation won't work if the `isBlock` property is set to `true`",name:"truncate",required:!1,type:{name:"boolean"}},upperCase:{defaultValue:{value:"false"},description:"Uppercases the text content.",name:"upperCase",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Adjusts style variation of the text.",name:"variant",required:!1,type:{name:'"muted"'}},highlightWords:{defaultValue:null,description:"Letters or words within `Text` can be highlighted using `highlightWords`.",name:"highlightWords",required:!1,type:{name:"string[]"}},level:{defaultValue:{value:"2"},description:"Passing any of the heading levels to `level` will both render the correct\ntypographic text size as well as the semantic element corresponding to\nthe level (`h1` for `1` for example).",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:'"1"'},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},isBlock:{defaultValue:{value:"true"},description:"Sets `Heading` to have `display: block`. Note: text truncation only works\nwhen `isBlock` is `false`.",name:"isBlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"'#1e1e1e'"},description:"Adjusts the text color.",name:"color",required:!1,type:{name:"Color"}},weight:{defaultValue:{value:"'600'"},description:"Adjusts font-weight of the text.",name:"weight",required:!1,type:{name:"FontWeight | TextWeight"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/heading/component.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"packages/components/src/heading/component.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{"use strict";module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./node_modules/memize/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function memize(fn,options){var head,tail,size=0;function memoized(){var args,i,node=head,len=arguments.length;searchCache:for(;node;){if(node.args.length===arguments.length){for(i=0;i<len;i++)if(node.args[i]!==arguments[i]){node=node.next;continue searchCache}return node!==head&&(node===tail&&(tail=node.prev),node.prev.next=node.next,node.next&&(node.next.prev=node.prev),node.next=head,node.prev=null,head.prev=node,head=node),node.val}node=node.next}for(args=new Array(len),i=0;i<len;i++)args[i]=arguments[i];return node={args,val:fn.apply(null,args)},head?(head.prev=node,node.next=head):tail=node,size===options.maxSize?(tail=tail.prev).next=null:size++,head=node,node.val}return options=options||{},memoized.clear=function(){head=null,tail=null,size=0},memoized}__webpack_require__.d(__webpack_exports__,{Z:()=>memize})},"./packages/components/src/heading/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/heading/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components (Experimental)/Heading",argTypes:{as:{control:{type:"text"}},color:{control:{type:"color"}},display:{control:{type:"text"}},letterSpacing:{control:{type:"text"}},lineHeight:{control:{type:"text"}},optimizeReadabilityFor:{control:{type:"color"}},variant:{control:{type:"select"},options:[void 0,"muted"]},weight:{control:{type:"text"}}},parameters:{sourceLink:"packages/components/src/heading",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Default=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props});Default.displayName="Default",Default.args={children:"Heading"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => <Heading {...props} />",...Default.parameters?.docs?.source}}}}}]);