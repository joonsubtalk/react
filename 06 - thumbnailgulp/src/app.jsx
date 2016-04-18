var options = {
  thumbnailData: [{
    description: 'Look ma no work! There ain\'t no Angular stuff here kids. This is the real deal between the R vs the A.',
    header: 'React So Cool',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/600px-React.js_logo.svg.png',
    number: 5,
    title: 'Inbox',
  },
  {
    description: 'Angular is another framework for JS devs. Angular is now in version 2.0 and it\'s a fun dev lang. Try it out!',
    header: 'Angular is awesome',
    imageURL: 'http://blog.goyello.com/wp-content/uploads/2015/06/angular-js_600x400.png',
    number: 235,
    title: 'Angular Users',
  }]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.target'));
