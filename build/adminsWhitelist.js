"use strict";
exports.__esModule = true;
// The users defined in this list will be allowed to create
// an admin account on the server.
// They'll need to confirm their email address before being
// able to log in.
var adminsWhitelist = new Set([
    'fm.de.jouvencel@gmail.com',
    'fm.de.jouvencel+1@gmail.com',
    'fm.de.jouvencel+2@gmail.com',
    'fm.de.jouvencel+3@gmail.com',
    'fm.de.jouvencel+4@gmail.com',
    'giulia@tracking.exposed',
    'mcurmei@berkeley.edu',
    'haupt@mit.edu',
    'marc.faddoul@berkeley.edu',
]);
exports["default"] = adminsWhitelist;
