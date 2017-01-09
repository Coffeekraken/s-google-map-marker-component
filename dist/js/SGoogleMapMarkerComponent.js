Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _coffeekrakenSGoogleMapComponentBase = require('coffeekraken-s-google-map-component-base');

var _coffeekrakenSGoogleMapComponentBase2 = _interopRequireDefault(_coffeekrakenSGoogleMapComponentBase);

var _whenAttribute = require('coffeekraken-sugar/js/dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 			s-google-map-marker
 * Display a simple google map with a simple marker
 * @styleguide  	Components / s-google-map-marker
 * @example 		html
 * <s-google-map center="{lat: -25.363, lng: 131.044}">
 * 	<s-google-map-marker position="{lat: -25.363, lng: 131.044}"></s-google-map-marker>
 * </s-google-map>
 */

var SGoogleMapMarkerComponent = function (_SGoogleMapComponentB) {
	_inherits(SGoogleMapMarkerComponent, _SGoogleMapComponentB);

	function SGoogleMapMarkerComponent() {
		_classCallCheck(this, SGoogleMapMarkerComponent);

		return _possibleConstructorReturn(this, (SGoogleMapMarkerComponent.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent)).apply(this, arguments));
	}

	_createClass(SGoogleMapMarkerComponent, [{
		key: 'componentWillMount',


		/**
   * Component will mount
   * @definition 		SWebComponent.componentWillMount
   */
		value: function componentWillMount() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'componentWillMount', this).call(this);
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'componentMount', this).call(this);

			// get the map instance to use for this marker.
			// this is grabed from the parent node that need to be a google-map component
			if (!this.map) {
				throw 'The "' + this._componentNameDash + '" component has to be a direct child of a "SGoogleMapComponent"';
			}

			// add the marker to the map
			// load the map api
			if (!this._marker) {
				this._initMarker();
			} else {
				this._marker.setMap(this.map);
			}
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'componentUnmount', this).call(this);
		}

		/**
   * Component will receive props
   * @definition 		SWebComponent.componentWillReceiveProps
   */

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, previousProps) {
			if (!this._marker) return;
			this._marker.setOptions(nextProps);
		}

		/**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition 		SWebComponent.render
   */

	}, {
		key: 'render',
		value: function render() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'render', this).call(this);
		}

		/**
   * Init the marker
   */

	}, {
		key: '_initMarker',
		value: function _initMarker() {
			this._marker = new this._google.maps.Marker(this.props);
			this._marker.setMap(this.map);
		}

		/**
   * Access the google map instance
   * @return 	{Map} 	The google map instance
   */

	}, {
		key: 'map',
		get: function get() {
			return this.parentNode.map;
		}
	}], [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {};
		}

		/**
   * Mount dependencies
   * @definition 		SWebComponent.mountDependencies
   */

	}, {
		key: 'mountDependencies',
		get: function get() {
			return [function () {
				return (0, _whenAttribute2.default)(this.parentNode, 'inited');
			}];
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SGoogleMapMarkerComponent;
}(_coffeekrakenSGoogleMapComponentBase2.default);

// // STemplate integration
// sTemplateIntegrator.registerComponentIntegration(SGoogleMapMarkerComponent, (component) => {
// 	if (component._mapElm) {
// 		sTemplateIntegrator.ignore(component._mapElm);
// 	}
// 	if (component._placeholder) {
// 		sTemplateIntegrator.ignore(component._placeholder);
// 	}
// });


exports.default = SGoogleMapMarkerComponent;