var LocationSearch = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return (
      {
        type: "",
        address: "",
      }
    );
  },

  render: function () {
    return (
      <div className="location-search">
        <form onSubmit={this.handleSearchSubmission}>
          <input type="text"
            valueLink={this.linkState("type")}
            placeholder="Location type (restaurant, bar, etc)"
             />

          <input type="text" valueLink={this.linkState("address")} />

        </form>
      </div>
    );
  }
});
