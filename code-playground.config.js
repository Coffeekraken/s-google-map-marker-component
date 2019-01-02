module.exports = {
	// server port
	port : 3000,

	// title
	title : 's-google-map-marker-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<h1 class="h3 m-b-small">
					Coffeekraken s-google-map-marker-component
				</h1>
				<p class="p m-b-bigger">
					Provide a simple, declarative and powerful webcomponent wrapper to create google map markers inside an s-google-map component.
				</p>
				<s-google-map api-key="AIzaSyDCD2MPJFbXBkc5hNB5p8v21XcpeIo_5Mw" zoom="2" center="{lat: -25.363, lng: 131.044}">
					<s-google-map-marker api-key="AIzaSyDCD2MPJFbXBkc5hNB5p8v21XcpeIo_5Mw" position="{lat: -25.363, lng: 131.044}"></s-google-map-marker-component>
				</s-google-map>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import 'node_modules/coffeekraken-s-typography-component/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					padding: s-space(big);
				}
				s-google-map {
					@include s-depth(5);
					@include s-ratio(16/9);
					border:5px white solid;
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import SGoogleMapComponent from 'coffeekraken-s-google-map-component'
				import SGoogleMapMarkerComponent from './dist/index'
			`
		}
	}
}
