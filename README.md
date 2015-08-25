# ngSpin

## Introduction
This angular module construct a set of directives for a collection of Ajax Loading Indicator. This project currently using [SpinKit](http://tobiasahlin.com/spinkit/) by  [@tobiashlin](https://github.com/tobiasahlin)

## Demo
[Demo](http://themyth92.com/project/ngSpin/example/index.html)

## Setup
1. Denpendancy 
	[AngularJS](https://angularjs.org/)
	
2.  Installation
    [Download and extract]()
 
3.  Include stylesheet
	
	```html
	<link rel = 'stylesheet' href = 'build/spinkit.min.css'>
    ```
 
4. Include scripts in your app

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

