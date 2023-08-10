var Televisor = /** @class */ (function () {
    function Televisor(on, vol, chn) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 0; }
        if (chn === void 0) { chn = 0; }
        this.isOn = on;
        this.volume = vol;
        this.channel = chn;
    }
    Televisor.prototype.switchOnOff = function () {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    };
    Televisor.prototype.volUp = function (subirVolumen) {
        if (subirVolumen === void 0) { subirVolumen = 1; }
        if (!this.isOn) {
            return;
            console.log("el televisor esta apagado");
        }
        this.volume = this.volume + subirVolumen;
        if (this.volume > 100) {
            this.volume = 100;
            return console.log("vol max", this.volume);
        }
        else {
            console.log("Vol en", this.volume);
        }
    };
    Televisor.prototype.volDown = function (bajarVolumen) {
        if (bajarVolumen === void 0) { bajarVolumen = 1; }
        if (!this.isOn) {
            return;
            console.log("el televisor esta apagado");
        }
        this.volume = this.volume - bajarVolumen;
        if (this.volume < 0) {
            this.volume = 0;
            return console.log("vol min", this.volume);
        }
        else {
            console.log("Bajaste el vol a", this.volume);
        }
    };
    Televisor.prototype.channelUp = function () {
        if (!this.isOn) {
            return;
            console.log("el televisor esta apagado");
        }
        this.channel++;
        if (this.channel > 99) {
            this.channel = 1;
        }
        console.log("Subir canal", this.channel);
    };
    Televisor.prototype.channelDown = function () {
        if (!this.isOn) {
            return;
            console.log("el televisor esta apagado");
        }
        this.channel--;
        if (this.channel < 1) {
            this.channel = 99;
        }
        console.log("bajar canal", this.channel);
    };
    Televisor.prototype.pickChannel = function (channel) {
        if (!this.isOn)
            return;
        this.channel = channel;
        console.log("Cambiaste al canal", this.channel);
    };
    Televisor.prototype.info = function () {
        if (!this.isOn) {
            console.log("el televisor está apagado");
            return;
        }
        var horaActual = new Date().toLocaleTimeString();
        console.log("información - canal:", this.channel, "volumen:", this.volume, "hora actual:", horaActual);
    };
    return Televisor;
}());
var tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);
tv01.volUp();
tv01.channelUp();
tv01.info();
