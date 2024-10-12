# Image to ASCII
### Converts a colored image into colored ASCII characters

Using NodeJs it grabs the image and breaks it down to individual rgb values. Then it is attached to ASCII blocks to make colorful blocks. Finally it gets printed out in rows according to image size. 

> NOTE
>
> This may not work for all terminals, I personally use Konsole which has the 378x112 size and ASCII support.
> Only PNG & JPEGs are supported
>
> It may not look very good on all terminals as each terminal prints ASCII differently.
> The image provided is 378x112, you may need to find and shirk your own image for this.

## Installation

NPM install [get-pixels](https://www.npmjs.com/package/get-pixels?activeTab=readme) & [ndarry](https://www.npmjs.com/package/ndarray) then run imageToAscii.js
