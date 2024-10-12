# Image to ASCII
### Converts a colored image into colored ASCII characters

Using NodeJs it grabs the image and breaks it down to individual rgb values. Then it is attached to ASCII blocks to make colorful blocks. Finally it gets printed out in rows according to image size. 

> NOTE
>
> This may not work for all terminals!
> Only PNG & JPEGs are supported!
>
> It may not look very good on all terminals as each terminal prints ASCII differently.
> Don't use too big of images, get-pixels does not work with really large images.

## Installation

NPM install [get-pixels](https://www.npmjs.com/package/get-pixels?activeTab=readme), [ndarry](https://www.npmjs.com/package/ndarray), & [sharp](https://www.npmjs.com/package/sharp)
and run imageToAscii.js through node
