import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
// import { VscDashboard  } from "react-icons/vsc";

export default function Sidebar() {
  const active = () => {
    $(".metismenu-link").toggleClass("active");
  };

  return (
    <>
      <div className="sidebar-mobile-overlay"></div>
      <div
        className="app-sidebar bg-royal sidebar-text-light sidebar-shadow appear-done enter-done fade-in slide-right"
        id="sidebar"
      >
        <div className="app-sidebar__inner">
          <div className="metismenu vertical-nav-menu">
            <ul className="metismenu-container">
              <li className="metismenu-item">
                <Link
                  className="metismenu-link"
                  to="/"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="panel-group"
            id="accordionMenu"
            role="tablist"
            aria-multiselectable="true"
          ></div>

          <div className="panel panel-default metismenu vertical-nav-menu">
            <div
              className="panel-heading metismenu-container"
              role="tab"
              id="headingone"
            >
              <div className="panel-title metismenu-item">
                <a
                  className="collapsed metismenu-link"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordionMenu"
                  href="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                  style={{ fontWeight: "700", fontSize: "medium" }}
                >
                  Explore(E-Store)
                </a>
              </div>
            </div>
            <div
              id="collapseEleven"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingone"
            >
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading1"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Category
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseNine"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-category"
                            className="metismenu-link"
                          >
                            Add/Manage Category
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading2"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Country
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse2"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading2"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-country"
                            className="metismenu-link"
                          >
                            Add/Manage Country
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading3"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Category Banner
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading3"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-category-banner"
                            className="metismenu-link"
                          >
                            Add/Manage Category Banner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading4"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Language
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse4"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading4"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-language"
                            className="metismenu-link"
                          >
                            Add/Manage Language
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading5"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        SubCategory
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse5"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading5"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-subcategory"
                            className="metismenu-link"
                          >
                            Add/Manage SubCategory
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading6"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Banner
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse6"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading6"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-banner"
                            className="metismenu-link"
                          >
                            Add/Manage Banner
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="panel panel-default metismenu vertical-nav-menu">
                  <div
                    className="panel-heading metismenu-container"
                    role="tab"
                    id="heading7"
                  >
                    <div className="panel-title metismenu-item">
                      <a
                        className="collapsed metismenu-link"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordionMenu"
                        href="#collapse7"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style={{ fontWeight: "700", fontSize: "medium" }}
                      >
                        {/* <i class="metismenu-icon fa-brands fa-searchengin"></i> */}
                        Unit
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapse7"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="heading7"
                  >
                    <div className="panel-body">
                      <ul className="metismenu-container">
                        <li className="metismenu-item">
                          <Link
                            to="/add-manage-unit"
                            className="metismenu-link"
                          >
                            Add/Manage Unit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
