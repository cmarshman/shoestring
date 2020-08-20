import React, { useState, useEffect } from "react";
import NavBarSettings from "../components/NavBarSettings";
import "../pages/design/signup.css";
import EditSettings from "../components/EditSettings";
import $ from "jquery";
import httpClient from "../httpClient";

function Settings() {
  useEffect(() => {
    $('a[href^="#"]').on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
      }
    });
  });

  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  return (
    <>
      {currentUserObj !== null ? (
        <div>
          <NavBarSettings />
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-11" id="tile">
              <article className="tile is-child notification">
                <div className="columns">
                  <div className="column is-one-third">
                    <div className="menu sticky">
                      <br />
                      <br />
                      <p className="menu-label">
                        <b>Quick Links</b>
                      </p>
                      <ul className="menu-list">
                        <li>
                          <a href="#personal-information">
                            Personal Information
                          </a>
                        </li>
                        <li>
                          <a href="#edit-password">Password</a>
                        </li>
                        <li>
                          <a href="#edit-photo">Photo</a>
                        </li>
                        <li>
                          <a href="#edit-bank-informaion">Bank Information</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="editSettings">
                    <EditSettings />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default Settings;
