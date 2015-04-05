/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var commentBox = document.getElementById("dialog-comment");

// Listen for the "show" event to be sent from the main add-on code;
// when we get that, the panel is opening. Focus the edit box for
// convenience.

self.port.on("show", function onShow() {
  commentBox.focus();
});
