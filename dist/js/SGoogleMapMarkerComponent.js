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
 * @name 		SGoogleMapMarkerComponent
 * @extends 	SGoogleMapComponentBase
 * Provide a nice webcomponent wrapper around the google map marker api.
 *
 * @styleguide  	Objects / Google Map
 * @example 	html
 * <s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
 * 	<s-google-map-marker api-key="..." position="{lat: -25.363, lng: 131.044}">
 * 	</s-google-map-marker>
 * </s-google-map>
 * @see 	https://www.npmjs.com/package/google-maps
 * @see 	https://developers.google.com/maps/documentation/javascript/
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */

var SGoogleMapMarkerComponent = function (_SGoogleMapComponentB) {
	_inherits(SGoogleMapMarkerComponent, _SGoogleMapComponentB);

	function SGoogleMapMarkerComponent() {
		_classCallCheck(this, SGoogleMapMarkerComponent);

		return _possibleConstructorReturn(this, (SGoogleMapMarkerComponent.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent)).apply(this, arguments));
	}

	_createClass(SGoogleMapMarkerComponent, [{
		key: 'shouldAcceptComponentProp',


		/**
   * Should accept component props
   * @definition 		SWebComponent.shouldAcceptComponentProp
   * @protected
   */
		value: function shouldAcceptComponentProp(prop) {
			return true;
		}

		/**
   * Component will mount
   * @definition 		SWebComponent.componentWillMount
   * @protected
   */

	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'componentWillMount', this).call(this);
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'componentMount', this).call(this);

			// save reference to the parent node to dispatch an event when unmounted
			this._parentNode = this.parentNode;

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

			// dispatch an event to notify the new marker
			this.dispatchComponentEvent('new-google-map-marker', this._marker);
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   * @protected
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			_get(SGoogleMapMarkerComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapMarkerComponent.prototype), 'componentUnmount', this).call(this);
			// dispatch an event to notify the new marker
			this.dispatchComponentEvent('remove-google-map-marker', this._marker, this._parentNode);
		}

		/**
   * Component will receive props
   * @definition 		SWebComponent.componentWillReceiveProps
   * @protected
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
   * @protected
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
			// set the component as inited
			// used by the markers to init when the map is ok
			this.setAttribute('inited', true);
		}

		/**
   * Access the google map instance
   * @type 	{Google.Map}
   */

	}, {
		key: 'map',
		get: function get() {
			return this.parentNode.map;
		}

		/**
   * Access the google map marker instance
   * @type 	{Google.Map.Marker}
   */

	}, {
		key: 'marker',
		get: function get() {
			return this._marker;
		}
	}], [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */
		get: function get() {
			return {

				/**
     * @name 	Google Map Marker API
     * Support all the google map marker API properties
     * @prop
     * @type 	{Google.Map.Marker}
     * @see 	https://developers.google.com/maps/documentation/javascript/3.exp/reference#MarkerOptions 	Google Map Marker Options
     */

			};
		}

		/**
   * Mount dependencies
   * @definition 		SWebComponent.mountDependencies
   * @protected
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
   * @protected
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SGoogleMapMarkerComponent;
}(_coffeekrakenSGoogleMapComponentBase2.default);

exports.default = SGoogleMapMarkerComponent;