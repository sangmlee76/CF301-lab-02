'use strict';
const creaturesArray = [];

function HornedCreature(name, url, alt, keyword, horns){
  this.name = name;
  this.src = url;
  this.alt = alt;
  this.keyword = keyword;
  this.horns = horns;
  creaturesArray.push(this);
}

HornedCreature.prototype.display = function(){
  const $templateCopy = $('section:first-child').clone();
  const $h2 = $templateCopy.find('h2');
  $h2.text(this.name);
  const $img = $templateCopy.find('img');
  $img.attr('src', this.src);
  $img.attr('alt', this.alt);
  const $p = $templateCopy.find('p');
  $p.text(this.alt);
  $('main').append($templateCopy);
}

$.ajax('/data/page-1.json').then(hornedList => {
  console.log(hornedList);
  hornedList.forEach((horned) => {
    new HornedCreature(horned.title, horned.image_url, horned.description, horned.keyword, horned.horns);
  });
  creaturesArray.forEach(horned => {
    horned.display();
  });
});
