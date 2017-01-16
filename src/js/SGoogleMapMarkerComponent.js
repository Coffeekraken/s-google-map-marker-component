import SGoogleMapComponentBase from 'coffeekraken-s-google-map-component-base'
import __whenAttribute from 'coffeekraken-sugar/js/dom/whenAttribute'

/**
 * @name 			Google Map Marker
 * Display a simple google map with a simple marker
 * @styleguide  	Components / Google Map
 * @example 		html
 * <s-google-map center="{lat: -25.363, lng: 131.044}" scrollwheel="false">
 * 	<s-google-map-marker position="{lat: -25.363, lng: 131.044}"></s-google-map-marker>
 * </s-google-map>
 * @see 			https://github.com/Coffeekraken/s-google-map-marker-component
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */

export default class SGoogleMapMarkerComponent extends SGoogleMapComponentBase {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {};
	}

	/**
	 * Mount dependencies
	 * @definition 		SWebComponent.mountDependencies
	 */
	static get mountDependencies() {
		return [function() {
			return __whenAttribute(this.parentNode, 'inited');
		}];
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
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
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 */
	componentWillReceiveProps(nextProps, previousProps) {
		if ( ! this._marker) return;
		this._marker.setOptions(nextProps);
	}

	/**
	 * Render the component
	 * Here goes the code that reflect the this.props state on the actual html element
	 * @definition 		SWebComponent.render
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
	 * @return 	{Map} 	The google map instance
	 */
	get map() {
		return this.parentNode.map;
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
