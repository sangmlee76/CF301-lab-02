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

const narwahl = new HornedCreature('UniWhal', 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg', 'A unicorn and a narwhal nuzzling their horns', 'TEST', 1);
narwahl.display(); 

console.log('Test');