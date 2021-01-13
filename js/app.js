'use strict';
const creaturesArray = [];
const keywordArray = [];

function HornedCreature(name, url, alt, keyword, horns) {
  this.name = name;
  this.src = url;
  this.alt = alt;
  this.keyword = keyword;
  this.horns = horns;
  creaturesArray.push(this);
}

HornedCreature.prototype.display = function () {
  const $templateCopy = $('section:first-child').clone();
  const $h2 = $templateCopy.find('h2');
  $h2.text(this.name);
  const $img = $templateCopy.find('img');
  $img.attr('src', this.src);
  $img.attr('alt', this.alt);
  $img.attr('class', this.keyword);
  const $p = $templateCopy.find('p');
  $p.text(this.alt);
  $templateCopy.find('h3').text(this.keyword);
  $('main').append($templateCopy);
};

$.ajax('/data/page-1.json').then(hornedList => {
  console.log(hornedList);
  hornedList.forEach((horned) => {
    new HornedCreature(horned.title, horned.image_url, horned.description, horned.keyword, horned.horns);
  });
  creaturesArray.forEach(horned => {
    horned.display();
  });

  creaturesArray.forEach((object) => {
    let isThere = false;
    keywordArray.forEach((keyword2, index) => {
      let x = keywordArray[index];
      if (x === object.keyword) {
        isThere = true;
      }
    });
    if (isThere === false) {
      const $optionClone = $('option:first-child').clone();
      $optionClone.attr('value', `${object.keyword}`);
      // $optionClone.attr('value', 'narwhal');
      $optionClone.text(`${object.keyword}`);
      // $optionClone.text('SOMETHING');
      $('select').append($optionClone);
      keywordArray.push(object.keyword);

    }
  });
  console.log(keywordArray);

});

$('select').on('change', (event) => {

  let something = event.target;
  console.log(something.value);
  $('section').hide();
  // currently only checking descriptions; need to figure out how to check class/title
  $(`section:contains(${something.value})`).show();


});




