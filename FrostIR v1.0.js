// FrostIR v1.0
// Chunk 1/3
// Engine + Universal Sender

var dialog = require("dialog");
var ir = require("ir");
var display = require("display");

var fillScreen = display.fill;
var drawString = display.drawString;

var DELAY = 75;

var brands = [
    {name:"Samsung", protocol:"SAMSUNG", bits:32},
    {name:"Sony", protocol:"SONY", bits:12},
    {name:"LG", protocol:"NEC", bits:32},
    {name:"TCL", protocol:"NEC", bits:32},
    {name:"Hisense", protocol:"NEC", bits:32},
    {name:"Philips", protocol:"RC6", bits:20},
    {name:"Panasonic", protocol:"PANASONIC", bits:48},
    {name:"Sharp", protocol:"SHARP", bits:15}
];

function progress(button, brand, current, total) {

    fillScreen(0);

    drawString("FrostIR v2.0", 4, 4);

    drawString(button, 4, 24);

    drawString("Sending...", 4, 44);

    drawString("(" + current + "/" + total + ")", 4, 64);

    drawString(brand, 4, 84);
}

function sendBrand(code, protocol, bits) {

    if(code == "")
        return;

    ir.transmit(code, protocol, bits);

    delay(DELAY);
}

function sendUniversal(button) {

    for(var i = 0; i < brands.length; i++) {

        progress(
            button,
            brands[i].name,
            i + 1,
            brands.length
        );

        // Brand code lookup
        // Filled in Chunk 2 & 3
        sendButton(button, i);
    }

    fillScreen(0);

    drawString("Done!", 25, 40);

    drawString(brands.length + " brands sent", 6, 60);

    delay(800);
}

while(true){

    var menu = {};

    menu["Power"] = "POWER";

    menu["Volume +"] = "VOLUP";

    menu["Volume -"] = "VOLDOWN";

    menu["Mute"] = "MUTE";

    menu["Channel +"] = "CHUP";

    menu["Channel -"] = "CHDOWN";

    menu["Up"] = "UP";

    menu["Down"] = "DOWN";

    menu["Left"] = "LEFT";

    menu["Right"] = "RIGHT";

    menu["OK"] = "OK";

    menu["Home"] = "HOME";

    menu["Back"] = "BACK";

    menu["Source"] = "SOURCE";

    menu["Play/Pause"] = "PLAY";

    menu["Exit"] = "EXIT";

    var c = dialog.choice(menu);

    if(c == "" || c == "EXIT")
        break;

    sendUniversal(c);

}
// FrostIR v1.0
// Chunk 2/3
// Samsung + Sony Database

function sendButton(button, index) {

    switch(index) {

        // ==========================
        // Samsung
        // ==========================

        case 0:

            switch(button) {

                case "POWER": sendBrand("0xE0E040BF","SAMSUNG",32); break;
                case "VOLUP": sendBrand("0xE0E0E01F","SAMSUNG",32); break;
                case "VOLDOWN": sendBrand("0xE0E0D02F","SAMSUNG",32); break;
                case "MUTE": sendBrand("0xE0E0F00F","SAMSUNG",32); break;
                case "CHUP": sendBrand("0xE0E048B7","SAMSUNG",32); break;
                case "CHDOWN": sendBrand("0xE0E008F7","SAMSUNG",32); break;
                case "UP": sendBrand("0xE0E006F9","SAMSUNG",32); break;
                case "DOWN": sendBrand("0xE0E08679","SAMSUNG",32); break;
                case "LEFT": sendBrand("0xE0E0A659","SAMSUNG",32); break;
                case "RIGHT": sendBrand("0xE0E046B9","SAMSUNG",32); break;
                case "OK": sendBrand("0xE0E016E9","SAMSUNG",32); break;
                case "HOME": sendBrand("0xE0E09E61","SAMSUNG",32); break;
                case "BACK": sendBrand("0xE0E01AE5","SAMSUNG",32); break;
                case "SOURCE": sendBrand("0xE0E0807F","SAMSUNG",32); break;
                case "PLAY": sendBrand("0xE0E0E21D","SAMSUNG",32); break;
            }

            break;

        // ==========================
        // Sony
        // ==========================

        case 1:

            switch(button) {

                case "POWER": sendBrand("0xA90","SONY",12); break;
                case "VOLUP": sendBrand("0x490","SONY",12); break;
                case "VOLDOWN": sendBrand("0xC90","SONY",12); break;
                case "MUTE": sendBrand("0x290","SONY",12); break;
                case "CHUP": sendBrand("0x090","SONY",12); break;
                case "CHDOWN": sendBrand("0x890","SONY",12); break;
                case "UP": sendBrand("0x2F0","SONY",12); break;
                case "DOWN": sendBrand("0xAF0","SONY",12); break;
                case "LEFT": sendBrand("0x2D0","SONY",12); break;
                case "RIGHT": sendBrand("0xCD0","SONY",12); break;
                case "OK": sendBrand("0xA70","SONY",12); break;
                case "HOME": sendBrand("0x070","SONY",12); break;
                case "BACK": sendBrand("0x270","SONY",12); break;
                case "SOURCE": sendBrand("0xA50","SONY",12); break;
                case "PLAY": sendBrand("0x5B0","SONY",12); break;
            }

            break;

        // ==========================
        // LG
        // ==========================

        case 2:
            switch(button) {

                case "POWER": sendBrand("0x20DF10EF","NEC",32); break;
                case "VOLUP": sendBrand("0x20DF40BF","NEC",32); break;
                case "VOLDOWN": sendBrand("0x20DFC03F","NEC",32); break;
                case "MUTE": sendBrand("0x20DF906F","NEC",32); break;
                case "CHUP": sendBrand("0x20DF00FF","NEC",32); break;
                case "CHDOWN": sendBrand("0x20DF807F","NEC",32); break;
                case "SOURCE": sendBrand("0x20DFD02F","NEC",32); break;
                case "HOME": sendBrand("0x20DF3EC1","NEC",32); break;
                case "UP": sendBrand("0x20DF02FD","NEC",32); break;
                case "DOWN": sendBrand("0x20DF827D","NEC",32); break;
                case "LEFT": sendBrand("0x20DFE01F","NEC",32); break;
                case "RIGHT": sendBrand("0x20DF609F","NEC",32); break;
                case "OK": sendBrand("0x20DF22DD","NEC",32); break;
                case "BACK": sendBrand("0x20DF14EB","NEC",32); break;
                case "EXIT": sendBrand("0x20DFDA25","NEC",32); break;
            }

            break;


        // ==========================
        // TCL (Roku)
        // ==========================

        case 3:

            switch(button) {

                case "POWER": sendBrand("0x5743C0BF","NEC",32); break;
                case "VOLUP": sendBrand("0x5743A05F","NEC",32); break;
                case "VOLDOWN": sendBrand("0x5743609F","NEC",32); break;
                case "MUTE": sendBrand("0x574320DF","NEC",32); break;
                case "HOME": sendBrand("0x574340BF","NEC",32); break;
                case "OK": sendBrand("0x574314EB","NEC",32); break;
            }

            break;


        // ==========================
        // TCL (Android)
        // ==========================

        case 4:

            switch(button) {

                case "POWER": sendBrand("0x00BF3CA3","NEC",32); break;
                case "VOLUP": sendBrand("0x00BF48B7","NEC",32); break;
                case "VOLDOWN": sendBrand("0x00BFD827","NEC",32); break;
                case "MUTE": sendBrand("0x00BF08F7","NEC",32); break;
                case "HOME": sendBrand("0x00BF5CA3","NEC",32); break;
                case "OK": sendBrand("0x00BF7887","NEC",32); break;
            }

            break;
        // ==========================
        // Hisense
        // ==========================

        case 5:

            switch(button) {

                case "POWER": sendBrand("0xFB0401FE","NEC",32); break;
                case "VOLUP": sendBrand("0xFB040AF5","NEC",32); break;
                case "VOLDOWN": sendBrand("0xFB040BF4","NEC",32); break;
                case "MUTE": sendBrand("0xFB0409F6","NEC",32); break;
                case "CHUP": sendBrand("0xFB040CF3","NEC",32); break;
                case "CHDOWN": sendBrand("0xFB040DF2","NEC",32); break;
                case "SOURCE": sendBrand("0xFB0405FA","NEC",32); break;
                case "OK": sendBrand("0xFB0415EA","NEC",32); break;
            }

            break;

        // ==========================
        // Panasonic
        // ==========================

        case 6:

            switch(button) {

                case "POWER": sendBrand("0x0200803D202D","PANASONIC",48); break;
                case "VOLUP": sendBrand("0x0200803D0409","PANASONIC",48); break;
                case "VOLDOWN": sendBrand("0x0200803D8489","PANASONIC",48); break;
                case "MUTE": sendBrand("0x0200803D4C41","PANASONIC",48); break;
                case "CHUP": sendBrand("0x0200803D2C21","PANASONIC",48); break;
                case "CHDOWN": sendBrand("0x0200803DAC21","PANASONIC",48); break;
                case "SOURCE": sendBrand("0x0200803DA4A9","PANASONIC",48); break;
            }

            break;


        // ==========================
        // Philips
        // ==========================

        case 7:

            switch(button) {

                case "POWER": sendBrand("0x0C","RC6",20); break;
                case "VOLUP": sendBrand("0x10","RC6",20); break;
                case "VOLDOWN": sendBrand("0x11","RC6",20); break;
                case "MUTE": sendBrand("0x0D","RC6",20); break;
                case "CHUP": sendBrand("0x20","RC6",20); break;
                case "CHDOWN": sendBrand("0x21","RC6",20); break;
                case "0": sendBrand("0x00","RC6",20); break;
                case "1": sendBrand("0x01","RC6",20); break;
                case "2": sendBrand("0x02","RC6",20); break;
                case "3": sendBrand("0x03","RC6",20); break;
                case "4": sendBrand("0x04","RC6",20); break;
                case "5": sendBrand("0x05","RC6",20); break;
                case "6": sendBrand("0x06","RC6",20); break;
                case "7": sendBrand("0x07","RC6",20); break;
                case "8": sendBrand("0x08","RC6",20); break;
                case "9": sendBrand("0x09","RC6",20); break;
            }

            break;


        // ==========================
        // Sharp
        // ==========================

        case 8:

            switch(button) {

                case "POWER": sendBrand("0x010101FE","NEC",32); break;
                case "VOLUP": sendBrand("0x01010AF5","NEC",32); break;
                case "VOLDOWN": sendBrand("0x01010BF4","NEC",32); break;
                case "MUTE": sendBrand("0x010109F6","NEC",32); break;
                case "CHUP": sendBrand("0x01010CF3","NEC",32); break;
                case "CHDOWN": sendBrand("0x01010DF2","NEC",32); break;
                case "SOURCE": sendBrand("0x010105FA","NEC",32); break;
                case "UP": sendBrand("0x010111EE","NEC",32); break;
                case "DOWN": sendBrand("0x010112ED","NEC",32); break;
                case "LEFT": sendBrand("0x010114EB","NEC",32); break;
                case "RIGHT": sendBrand("0x010113EC","NEC",32); break;
                case "OK": sendBrand("0x010115EA","NEC",32); break;
                case "BACK": sendBrand("0x010116E9","NEC",32); break;
                case "POWER_ALT": sendBrand("0x00BF3CA3","NEC",32); break;
            }

            break;
        }

    }
