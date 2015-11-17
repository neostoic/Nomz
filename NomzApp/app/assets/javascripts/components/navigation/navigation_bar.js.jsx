var NavigationBar = React.createClass({
  render: function () {
    var authComponent;

    // if (window.userIsLoggedIn) {
    //   authComponent = <UserLoggedIn />;
    // } else {
    //   authComponent = <UserLoggedOut />;
    // }


    return (
      <div className="nav-bar">

        <h1 className="nav-bar-header"><a href="#">Nomz</a></h1>

        <figure className="nav-bar-logo">
          <img src="../../../assets/images/nom-noms-logo.png"/>
        </figure>

        <LocationSearch />
      </div>
    );
  }
});
