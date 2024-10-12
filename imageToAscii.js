var getPixels = require("get-pixels");
var ndarray = require("ndarray");
const sharp = require('sharp');

sharp('pic.jpeg') //Replace pic.jpeg with your image
  .resize(process.stdout.columns, process.stdout.rows, { fit: 'fill' })
  .toFile('newPic.jpeg', (err, info) => { //You can rename he output pic, but you will also need to update line 11
    if (err) {
      console.error(err);
    } else {
      getPixels('newPic.jpeg', function (err, pixels) {
        if (err) {
          console.error(err);
        } else {
          colorArray = ndarrayTo4d(pixels.data);
          printArray = coloredBoxes(colorArray);
          finalArray = logArray(printArray, pixels.shape[0], pixels.shape[1]);
          for (i = 0; i < finalArray.length; i++) {
            console.log(finalArray[i].join(''))
          }
        }
      })
    }
  })

function ndarrayTo4d(array) {
  var endArray = new Array(); // Return array

  for (let i = 0; i < array.length; i = i + 4) {
    endArray.push([array[i] + 1, array[i + 1] + 1, array[i + 2] + 1, array[i + 3] + 1])
  }

  return endArray;
}

function coloredBoxes(colors) {
  var endArray = new Array();

  for (let i = 0; i < colors.length; i++) {
    endArray.push('\x1b[38;2;' + colors[i][0] + ';' + colors[i][1] + ';' + colors[i][2] + 'm' + '█' + '\x1b[0m');
  }

  return endArray;
}

function logArray(inArray, width, height) {
  var c = 0;
  const arr = [];
  for (let i = 0; i < height; i++) {
    arr[i] = [];
    for (let j = 0; j < width; j++) {
      arr[i][j] = inArray[c];
      c++
    }
  }
  return arr;
}
