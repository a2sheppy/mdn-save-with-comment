/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//
// Create a hotkey, Cmd-Shift-Opt-S (Ctl-Shift-Alt-S),
// which focuses and scrolls to the revision comment
// on the current day.
//

var { Hotkey } = require("sdk/hotkeys");

var saveHotKey = Hotkey({
  combo: "accel-alt-shift-s",
  onPress: function() {
    require("sdk/tabs").activeTab.attach({
      contentScript:  'var elem = document.getElementById("page-comment");' +
                      'if (elem != null) {' +
                      ' elem.scrollIntoView();' +
                      ' elem = document.getElementById("id_comment");' +
                      ' elem.focus();' +
                      '}'
    });
  }
});
