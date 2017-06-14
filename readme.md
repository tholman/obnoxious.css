## Obnoxious.CSS

Obnoxious CSS is an animation set for the strong of heart, but weak of mind. Check it [out](http://tholman.com/obnoxious).

### How to use

To use, add the obnoxious.css stylesheet to the `<head>` of your document

```html
<head>
  <link rel="stylesheet" href="/path/to/obnoxious.css">
</head>
```
Now, to animate you need to add the class `animated` to your element, with any of the obnoxious.css classes

These are:

- shakeit
- intensifies
- fontalicious
- strobe
- twister

You can see these animations live [here](http://tholman.com/obnoxious).

For example: 
```html
 <h1 class="animated intensifies">OMG!</h1>
```

### How to contribute

- To edit the codebase, you'll need to clone the repository.
- Next, run `npm install`
- then, `gulp watch` to have your edits automatically saved to obnoxious.css

... Please add each new animation to a new file.

### License

The MIT License (MIT)

Copyright (C) 2017 ~ Tim Holman ~ timothy.w.holman@gmail.com
