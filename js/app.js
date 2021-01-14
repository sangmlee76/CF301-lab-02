'use strict';

const creaturesArray = [];
let keywordArray = [];
let horned2List = [];
let currentlyDisplayed = [];
let pageNumber = 1;

function HornedCreature(name, url, alt, keyword, horns) {
  this.name = name;
  this.src = url;
  this.alt = alt;
  this.keyword = keyword;
  this.horns = horns;
}

HornedCreature.prototype.display = function () {
  // const $templateCopy = $('section:first-child').clone();
  // const $h2 = $templateCopy.find('h2');
  // $h2.text(this.name);
  // const $img = $templateCopy.find('img');
  // $img.attr('src', this.src);
  // $img.attr('alt', this.alt);
  // $img.attr('class', this.keyword);
  // const $p = $templateCopy.find('p');
  // $p.text(this.alt);
  // $templateCopy.find('h3').text(this.keyword);
  // $('main').append($templateCopy);
  const p2String = $('#second-page').html();
  const rendered = Mustache.render(p2String, this);
  // console.log(rendered);
  $('main').append(rendered);
};

$.ajax('/data/page-1.json').then(hornedList => {
  // console.log(hornedList);
  hornedList.forEach((horned) => {
    creaturesArray.push(new HornedCreature(horned.title, horned.image_url, horned.description, horned.keyword, horned.horns));
  });
  creaturesArray.sort((first, second) => {
    if (second.name < first.name) {
      return 1;
    } else if (first.name < second.name) {
      return -1;
    } else {
      return 0;
    }

  });
  creaturesArray.forEach(horned => {
    currentlyDisplayed.push(horned);
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
      $optionClone.text(`${object.keyword}`);
      $('select').append($optionClone);
      keywordArray.push(object.keyword);

    }
  });

  $('select').on('change', (event) => {

    let something = event.target;
    $('section').remove();
    if (pageNumber === 1) {
      currentlyDisplayed = [];
      creaturesArray.forEach((horned, index) => {
        if (creaturesArray[index].keyword === something.value) {
          currentlyDisplayed.push(creaturesArray[index]);
          const p1String = $('#second-page').html();
          const rendered = Mustache.render(p1String, creaturesArray[index]);
          $('main').append(rendered);
        }
      });
    } else {
      currentlyDisplayed = [];
      horned2List.forEach((horned, index) => {
        if (horned2List[index].keyword === something.value) {
          currentlyDisplayed.push(horned2List[index]);
          const p1String = $('#second-page').html();
          const rendered = Mustache.render(p1String, horned2List[index]);
          $('main').append(rendered);
        }
        // $(`section:contains(${something.value})`).show();
      });
    }
  });
  $('#page').on('click', () => {
    $('section').remove();
    if (pageNumber === 1) {

      $.ajax('/data/page-2.JSON').then(hornedList => {
        currentlyDisplayed = [];
        horned2List = [];
        hornedList.forEach((horned, index) => {
          horned2List.push(new HornedCreature(horned.title, horned.image_url, horned.description, horned.keyword, horned.horns));

          const p2String = $('#second-page').html();
          const rendered = Mustache.render(p2String, horned2List[index]);
          currentlyDisplayed.push(horned2List[index]);
          $('main').append(rendered);
        });

        horned2List.forEach((object) => {
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
            $optionClone.text(`${object.keyword}`);
            $('select').append($optionClone);
            keywordArray.push(object.keyword);
            console.log(object.keyword);
          }
        });
      });
      pageNumber = 2;
    } else {
      currentlyDisplayed = [];
      creaturesArray.forEach(horned => {
        currentlyDisplayed.push(horned);
        horned.display();
      });
      pageNumber = 1;
    }
  });
  $('#sort-by-horns').on('click', () => {
    $.ajax('/data/page-2.JSON').then(hornedList => {
      $('section').remove();
      currentlyDisplayed.sort((first, second) => {
        if (second.horns > first.horns) {
          return 1;
        } else if (first.horns > second.horns) {
          return -1;
        } else {
          return 0;
        }

      });
      currentlyDisplayed.forEach((horned, index) => {
        console.log(horned);
        const p1String = $('#second-page').html();
        const rendered = Mustache.render(p1String, currentlyDisplayed[index]);
        $('main').append(rendered);

      });
    });
  });
  $('#sort-by-title').on('click', () => {
    $.ajax('/data/page-2.JSON').then(hornedList => {

      $('section').remove();
      currentlyDisplayed.sort((one, two) => {
        if (one.name.toLowerCase() > two.name.toLowerCase()) {
          return 1;
        }
        else if (one.name.toLowerCase() < two.name.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });
      currentlyDisplayed.forEach((horned, index) => {
        const p1String = $('#second-page').html();
        const rendered = Mustache.render(p1String, currentlyDisplayed[index]);
        $('main').append(rendered);
      });
    });
  });
});
