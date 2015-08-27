# ngSpin

## Introduction
 This angular module constructs a set of directives for a collection of Ajax Loading Indicator. This project is  currently using [SpinKit](http://tobiasahlin.com/spinkit/) by [@tobiashlin](https://github.com/tobiasahlin)

## Demo
 [Demo](http://themyth92.com/project/ngSpin/example/index.html)

## Setup
1. Denpendancy 

 * [Spinkit](https://github.com/tobiasahlin/SpinKit) 
 * [AngularJS](https://angularjs.org/)
	
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
 <sk-rot-plane></sk-rot-plane>

 <!-- spinkit double bouncing -->
 <sk-d-bounce</sk-d-bounce>
	
 <!-- spinkit wave -->
 <sk-wave></sk-wave>
	
 <!-- spinkit wandering cube -->
 <sk-wand-cube></sk-wand-cube>

 <!-- spinkit pulse -->
 <sk-pulse></sk-pulse>

 <!-- spinkit chasing dot -->
 <sk-chase-dot></sk-chase-dot>

  <!-- spinkit three bounce -->
  <sk-t-bounce></sk-t-bounce>

  <!-- spinkit circle -->
  <sk-circle></sk-circle>
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

5. Spinkit pulse

 Attributes | Type | Default | Description
 -----------|----------|---------|------------
 spin-radius | Number | **20** px | Biggest circle radius
 spin-speed | Number | **1** s | Duration of the circle from its smallest to biggest size. Lower is faster
 spin-color | Hex String | # **333** | Circle lightest color

6. Spinkit chasing dot

 Attributes | Type | Default | Description
 -----------|----------|---------|------------
 spin-radius | Number | **20** px | Radius of the circle that 2 circles spinning arround 
 spin-speed | Number | **2** s | Circle spin speed. Lower is faster
 spin-color | Hex String | # **333** | Each circle color

7. Spinkit three bounce

 Attributes | Type | Default | Description
 -----------|----------|---------|------------
 spin-bound-width | Number | **70** px | Width of bounding box around the circle
 spin-radius | Number | **9** px | Radius of each circle 
 spin-speed | Number | **1.4** s | Duration of each circle between its biggest and smallest size
 spin-color | Hex String | # **333** | Each circle color

8. Spinkit circle

 Attributes | Type | Default | Description
 -----------|----------|---------|------------
 spin-bound-radius | Number | **70** px | Width of bounding box around the circle
 spin-color | Hex String | # **333** | Each circle color. **NOTICE : This value should be modified using CSS style. Find *.sk-spinner-circle .sk-circle:before* selector inside spinkit css style and change background-color style** 

### Example usage
```html
  <!-- spinkit rotating plane-->
  <sk-rot-plane spin-width = '50' spin-height = '50' spin-speed = '1.5' spin-color = 'ffffff'></sk-rot-plane>
```

## License
MIT

## Projects planned to use with this module
 
 * [Connoratherton CSS Loader](https://connoratherton.com/loaders)
 * [Spinkit CSS Loader](http://tobiasahlin.com/spinkit/)
 * [Sam Herbert SVG Loader](http://samherbert.net/svg-loaders/)

## Notice 
This project is currently in progress ...
