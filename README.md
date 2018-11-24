# clock-division-converter
A calculator for converting common beat divisions into milliseconds

## Developing

A global installation of parcel, typescript and tslint is expected.
Install these first if not already installed, and then install the project
with `npm i -D` and run the local development server with `npm start`.

To build, simply `npm run build`.

## Deploying

On deploying to GH Pages `npm run deploy`, it is necessary to edit the
index.html file to point to the correct `src.<hash>.js`.

By default parcel builds the index.html to point to `/src.<hash>.js`,
but this file is hosted at `...github.io/clock-division-converter` _not_
`...github.io/` (where index.html is hosted). An easy fix is to simply edit the
index.html file to point to `/clock-division-converter/src.<hash>.js`.