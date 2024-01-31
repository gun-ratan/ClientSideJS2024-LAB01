var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';


var insertX = ['Donald Trump', 'Jackie Chan', 'Santa'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['Spontaneously cumbusted', 'Rapidly sublimated', 'Evaporated instantly'];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);

    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (document.getElementById('metric').checked) {
        var weight = Math.round(300 * 0.453592) + ' kilograms';
        newStory = newStory.replace('300 pounds', weight);

        var temperature = Math.round((94 - 32) * 5 / 9) + ' Celsius';
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
