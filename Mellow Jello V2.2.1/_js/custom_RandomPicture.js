var lastNumber = 0;

//Random image script source: https://stackoverflow.com/questions/40110239/switch-from-image-to-random-image-onclick-with-javascript
var myImages1 = new Array();
myImages1.push("_images/llama.jpg");
myImages1.push("_images/koala.jpg");
myImages1.push("_images/meerkat.jpg");
myImages1.push("_images/redpanda.jpg");
myImages1.push("_images/frog.jpg");
myImages1.push("_images/bunny.jpeg");
myImages1.push("_images/dog.jpg");
myImages1.push("_images/cat.jpg");

function getRandomInt(min, max) {

    newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (newNumber == lastNumber) {
        if (newNumber == 0) {
            newNumber += 1;
        }
        else {
            newNumber -= 1;
        }
    }
    lastNumber = newNumber;
    return newNumber;
}

function pickimg2() {
    document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}