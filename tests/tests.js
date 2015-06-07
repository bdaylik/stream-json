"use strict";


var unit = require("heya-unit");

require("./test_classic");
require("./test_alternative");
require("./test_parser");
require("./test_streamer");
require("./test_packer");
require("./test_filter");
require("./test_escaped");
require("./test_source");
require("./test_emitter");
require("./test_assembler");
require("./test_array");
require("./test_filtered_array");
require("./test_filter_objects");


unit.run();
