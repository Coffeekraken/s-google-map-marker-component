import SGoogleMapComponentBase from 'coffeekraken-s-google-map-component-base'
import __whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute'

/**
 * @name 		SGoogleMapMarkerComponent
 * @extends 	SGoogleMapComponentBase
 * Provide a nice webcomponent wrapper around the google map marker api.
 *
 * @example 	html
 * <s-google-map center="{lat: -25.363, lng: 131.044}">
 * 	<s-google-map-marker position="{lat: -25.363, lng: 131.044}">
 * 	</s-google-map-marker>
 * </s-google-map>
 * @see 	https://www.npmjs.com/package/google-maps
 * @see 	https://developers.google.com/maps/documentation/javascript/
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SGoogleMapMarkerComponent extends SGoogleMapComponentBase {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {

			// set the unmout timeout to 0 to avoid unwanted delays when adding and removing markers
			unmountTimeout : 0,

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
	static get mountDependencies() {
		return [function() {
			return __whenAttribute(this.parentNode, 'inited');
		}];
	}

	/**
	 * Default css
	 * @definition    SWebComponent.defaultCss
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display: inline-block;
				min-width: 1px;
				min-height: 1px;
			}
		`
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 * @protected
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Should accept component props
	 * @definition 		SWebComponent.shouldComponentAcceptProp
	 * @protected
	 */
	shouldComponentAcceptProp(prop) {
		return true;
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();

		// save reference to the parent node to dispatch an event when unmounted
		this._parentNode = this.parentNode;

		// get the map instance to use for this marker.
		// this is grabed from the parent node that need to be a google-map component
		if ( ! this.map) {
			throw `The "${this._componentNameDash}" component has to be a direct child of a "SGoogleMapComponent"`;
		}

		// add the marker to the map
		// load the map api
		if ( ! this._marker) {
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
	componentUnmount() {
		super.componentUnmount();
		// remove the marker from the map
		if (this._marker) {
			this._marker.setMap(null);
		}
		// dispatch an event to notify the new marker
		this.dispatchComponentEvent('remove-google-map-marker', this._marker, this._parentNode);
	}

	/**
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 * @protected
	 */
	componentWillReceiveProps(nextProps, previousProps) {
		if ( ! this._marker) return;
		this._marker.setOptions(nextProps);
	}

	/**
	 * Render the component
	 * Here goes the code that reflect the this.props state on the actual html element
	 * @definition 		SWebComponent.render
	 * @protected
	 */
	render() {
		super.render();
	}

	/**
	 * Init the marker
	 */
	_initMarker() {
		this._marker = new this.google.maps.Marker(this.props);
		this._marker.setMap(this.map);
		// set the component as inited
		// used by the markers to init when the map is ok
		this.setAttribute('inited', true);
	}

	/**
	 * Access the google map instance
	 * @type 	{Google.Map}
	 */
	get map() {
		return this.parentNode.map;
	}

	/**
	 * Access the google map marker instance
	 * @type 	{Google.Map.Marker}
	 */
	get marker() {
		return this._marker;
	}
}
