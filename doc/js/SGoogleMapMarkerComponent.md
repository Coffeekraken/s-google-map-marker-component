# SGoogleMapMarkerComponent  extends SGoogleMapComponentBase
Provide a nice webcomponent wrapper around the google map marker api.

#### Example
```html
	<s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
	<s-google-map-marker api-key="..." position="{lat: -25.363, lng: 131.044}">
	</s-google-map-marker>
</s-google-map>
```
See more : [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript/)

Author : Olivier Bossel <olivier.bossel@gmail.com>



## Examples

Here's some usage examples.

### Google Map Marker

Display a simple google map with a simple marker

#### Example
```html
	<s-google-map center="{lat: -25.363, lng: 131.044}" scrollwheel="false">
	<s-google-map-marker position="{lat: -25.363, lng: 131.044}"></s-google-map-marker>
</s-google-map>
```
See more : [https://github.com/Coffeekraken/s-google-map-marker-component/tree/release/0.0.1](https://github.com/Coffeekraken/s-google-map-marker-component/tree/release/0.0.1)

Author : Olivier Bossel <olivier.bossel@gmail.com>




## Properties


### map

Access the google map instance

Type : **{ Google.Map }**


### marker

Access the google map marker instance

Type : **{ Google.Map.Marker }**