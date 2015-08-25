# ngSpin

## Introduction
This angular module constructs a set of directives for a collection of Ajax Loading Indicator. This project is currently using [SpinKit](http://tobiasahlin.com/spinkit/) by [@tobiashlin](https://github.com/tobiasahlin)

## Demo
[Demo](http://themyth92.com/project/ngSpin/example/index.html)

## Setup
1. Denpendancy 
	[AngularJS](https://angularjs.org/)
	
2.  Installation
  [Download and extract](https://github.com/themyth92/ngSpin/archive/master.zip)
 
3.  Include stylesheet
	
	```html
	<link rel = 'stylesheet' href = 'build/spinkit.min.css'>
  ```
 
4. Include scripts

  ```html
  <script type = 'text/javascript' src = 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.js'></script>
  <script type = 'text/javascript' src = 'build/ngSpin.min.js'></script>
  ``` 
   
5. Add `ngSpin` module dependancy

  ```javascript
	angular.module('yourModule', ['ngSpin']);
  ```

## Configuration

### Directive list
```html
	<!-- spinkit rotating plane-->
	<rot-plane></rot-plane>

	<!-- spinkit double bouncing -->
	<d-bounce</d-bounce>
	
	<!-- spinkit wave -->
	<wave></wave>
	
	<!-- spinkit wandering cube -->
	<wand-cube></wand-cube>
```

### Optional attributes 
1. Spinkit rotating plane

Attributes | Type | Default | Description
-----------|----------|---------|------------
spin-width | Number | **30** px | Rectangular width
spin-height | Number | **30** px | Rectangular height
spin-speed | Number | **1.2** s | Spinning speed of the rectangular. Lower is faster
spin-color | Hex String | # **333** | Rectangular color 

2. Spinkit double bounce

Attributes | Type | Default | Description
-----------|----------|---------|------------
spin-radius | Number | **20** px | Longest circle radius
spin-speed | Number | **2** s | Duration of a circle from smallest to biggest size. Lower is faster
spin-color | Hex String | # **333** | Circle lightest color 

3. Spinkit wave

Attributes | Type | Default | Description
-----------|----------|---------|------------
spin-width | Number | **5** px | Each column width
spin-height | Number | **50** px | Each column height
spin-margin | Number | **3** px | Gap between each columns
spin-color | Hex String | # **333** | Column color

4. Spinkit wandering cube

Attributes | Type | Default | Description
-----------|----------|---------|------------
spin-width | Number | **10** px | Each cube width
spin-height | Number | **10** px | Each cube height
spin-color | Hex String | # **333** | Cube color

### Example usage
```html
  <!-- spinkit rotating plane-->
  <rot-plane spin-width = '50' spin-height = '50' spin-speed = '1.5' spin-color = 'ffffff'></rot-plane>
```

## License
MIT
