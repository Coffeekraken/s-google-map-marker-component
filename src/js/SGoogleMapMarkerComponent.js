import SGoogleMapComponentBase from 'coffeekraken-s-google-map-component-base'
import __whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute'

/**
 * @class 	SGoogleMapMarkerComponent 	SGoogleMapComponentBase
 * Provide a nice webcomponent wrapper around the google map marker api.
 * @example 	html
 * <s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
 * 	<s-google-map-marker api-key="..." position="{lat: -25.363, lng: 131.044}">
 * 	</s-google-map-marker>
 * </s-google-map>
 * @see 	https://www.npmjs.com/package/google-maps
 * @see 	https://developers.google.com/maps/documentation/javascript/
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */


/**
 * @name 			Google Map Marker
 * Display a simple google map with a simple marker
 * @styleguide  	Components / Google Map
 * @example 		html
 * <s-google-map center="{lat: -25.363, lng: 131.044}" scrollwheel="false">
 * 	<s-google-map-marker position="{lat: -25.363, lng: 131.044}"></s-google-map-marker>
 * </s-google-map>
 * @see 			https://github.com/Coffeekraken/s-google-map-marker-component/tree/release/{version}
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SGoogleMapMarkerComponent extends SGoogleMapComponentBase {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {};
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
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 * @protected
	 */
	static get physicalProps() {
		return [];
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
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 * @protected
	 */
	componentUnmount() {
		super.componentUnmount();
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
		this._marker = new this._google.maps.Marker(this.props);
		this._marker.setMap(this.map);
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

// // STemplate integration
// sTemplateIntegrator.registerComponentIntegration(SGoogleMapMarkerComponent, (component) => {
// 	if (component._mapElm) {
// 		sTemplateIntegrator.ignore(component._mapElm);
// 	}
// 	if (component._placeholder) {
// 		sTemplateIntegrator.ignore(component._placeholder);
// 	}
// });
