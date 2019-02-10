import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class RoutesList extends Component {
  componentDidMount() {
    $(".sidebar-nav ul .has-child .child-menu").hide();
    $(".sidebar-nav ul .has-child > a").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(this)
        .next(".child-menu")
        .slideToggle(300);
    });
  }

  render() {
    return (
      <div className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">Incidents</Link>
          </li>
          <li>
            <Link to="/submit-incident">Submit a report</Link>
          </li>
          <li>
            <Link to="/pages/policestations">Law Enforcement</Link>
          </li>
          {/* <li>
            <Link to="/pages/map">Map</Link>
          </li> */}
          {/* <Link to="/"><span className="material-icons">dashboard</span>Dashboard</Link> */}
          {/* <Link to="/"><span className="material-icons">dashboard</span>Dashboard</Link> */}
          {/* <li className="has-child">
            <a href=""><span className="material-icons">shopping_cart</span>E commerce</a>
            <ul className="child-menu">
              <li><Link to="/ecommerce/dashboard">Dashboard</Link></li>
              <li><Link to="/ecommerce/products">Products</Link></li>
              <li><Link to="/ecommerce/order-review">Order Review</Link></li>
            </ul>
          </li> */}

          {/* <li className="divider" />

          <li className="has-child">
            <a href="">
              <span className="material-icons">folder</span>UI Elements
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/ui-kit/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/ui-kit/appbars">App Bars</Link>
              </li>
              <li>
                <Link to="/ui-kit/ui-components">UI Components</Link>
              </li>
              <li>
                <Link to="/ui-kit/cards">Cards</Link>
              </li>
              <li>
                <Link to="/ui-kit/sliders">Sliders</Link>
              </li>
              <li>
                <Link to="/ui-kit/datepickers">Date pickers</Link>
              </li>
              <li>
                <Link to="/ui-kit/timepickers">Time pickers</Link>
              </li>
              <li>
                <Link to="/ui-kit/dialogs">Dialogs</Link>
              </li>
              <li>
                <Link to="/ui-kit/tabs">Tabs</Link>
              </li>
              <li>
                <Link to="/ui-kit/progress">Progress</Link>
              </li>
              <li>
                <Link to="/ui-kit/popovers">Popovers</Link>
              </li>
              <li>
                <Link to="/ui-kit/lists">Lists</Link>
              </li>
              <li>
                <Link to="/ui-kit/menus">Menus</Link>
              </li>
              <li>
                <Link to="/ui-kit/icons">Icons</Link>
              </li>
              <li>
                <Link to="/ui-kit/gridlists">Grid lists</Link>
              </li>
              <li>
                <Link to="/ui-kit/grids">Grids</Link>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="">
              <span className="material-icons">border_color</span>Forms
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/forms/basic-forms">Basic forms</Link>
              </li>
              <li>
                <Link to="/forms/switches">Switches</Link>
              </li>
              <li>
                <Link to="/forms/form-layouts">Form layouts</Link>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="">
              <span className="material-icons">equalizer</span>Charts
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/charts/line-charts">Line charts</Link>
              </li>
              <li>
                <Link to="/charts/bar-charts">Bar charts</Link>
              </li>
              <li>
                <Link to="/charts/area-charts">Area charts</Link>
              </li>
              <li>
                <Link to="/charts/pie-charts">Pie charts</Link>
              </li>
              <li>
                <Link to="/charts/other-charts">Other charts</Link>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="">
              <span className="material-icons">list</span>Tables
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/table/bootstrap-tables">Bootstrap tables</Link>
              </li>
              <li>
                <Link to="/table/user-tables">User tables</Link>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="">
              <span className="material-icons">content_copy</span>Pages
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/pages/about">About</Link>
              </li>
              <li>
                <Link to="/pages/services">Services</Link>
              </li>
              <li>
                <Link to="/pages/contact">Contact</Link>
              </li>
              <li>
                <Link to="/pages/blog">Blog</Link>
              </li>
              <li>
                <Link to="/pages/pricing-table">Pricing table</Link>
              </li>
              <li>
                <Link to="/pages/faq">FAQ</Link>
              </li>
            </ul>
          </li>

          <li className="divider" />

          <li className="has-child">
            <a href="">
              <span className="material-icons">widgets</span>Other pages
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/other-pages/login">Login</Link>
              </li>
              <li>
                <Link to="/other-pages/register">Register</Link>
              </li>
              <li>
                <Link to="/other-pages/forgot-password">Forgot password</Link>
              </li>
              <li>
                <Link to="/other-pages/mail-confirmation">
                  Mail confirmation
                </Link>
              </li>
              <li>
                <Link to="/other-pages/404">404 page</Link>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <a href="">
              <span className="material-icons">extension</span>Page layout
            </a>
            <ul className="child-menu">
              <li>
                <Link to="/page-layout/default">Layout default</Link>
              </li>
              <li>
                <Link to="/page-layout/banner">Layout with banner</Link>
              </li>
            </ul>
          </li>

          <li className="has-child">
            <a href="">
              <span className="material-icons">more_vert</span>Menu level
            </a>
            <ul className="child-menu">
              <li className="level-two">
                <a href="">Level 2</a>
                <ul className="child-menu">
                  <li>
                    <a href="">Child 1</a>
                  </li>
                  <li>
                    <a href="">Child 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Level 1</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default RoutesList;
