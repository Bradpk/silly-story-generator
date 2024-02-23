const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they suddenly stopped, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Wilfred the Goblin', 'Big Daddy', 'Father Christmas', 'Adam Sandler', 'Gorton the brave'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House', 'the Shire', 'Tombstone Arizona'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away', 'burst into a ball of flames', 'exploded in a fiery inferno'];

randomize.addEventListener('click', result);
document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    result();
  }
});

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name)

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} + stone`;
    const temperature =  `${Math.round((94 - 32) * 5/9)} + celcius`;
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}