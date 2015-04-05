/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Load needed modules

var { Hotkey } = require("sdk/hotkeys");
var data = require("sdk/self").data;

//
// Create a hotkey, Cmd-Shift-Opt-S (Ctl-Shift-Alt-S),
// which focuses and scrolls to the revision comment
// on the current day.
//

var saveHotKey = Hotkey({
  combo: "accel-alt-shift-s",
  onPress: function() {
    var promptDialog = require("sdk/panel").Panel({
      contentURL: data.url("prompt-dialog.html"),
      contentScriptFile: data.url("prompt-dialog.js"),
      width: 500,
      height: 300
    });
    promptDialog.show();
    /*
    require("sdk/tabs").activeTab.attach({
      contentScript:  'var elem = document.getElementById("page-comment");' +
                      'if (elem != null) {' +
                      '  elem.scrollIntoView();' +
                      '  elem = document.getElementById("id_comment");' +
                      '  elem.focus();' +
                      '}'
    });
    */
  }
});
