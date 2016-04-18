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

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
})

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    return React.createElement("div", null, 
      list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageURL, alt: "{this.props.header}"}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement(Badge, {title: this.props.title, number: this.props.number})
      )
    )
  }
})
