var Thumbnail = React.createClass({
  render: function() {
    return <div className="thumbnail">
      <img src={this.props.imageURL} alt="{this.props.header}" />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <Badge title={this.props.title} number={this.props.number}/>
      </div>
    </div>
  }
})
