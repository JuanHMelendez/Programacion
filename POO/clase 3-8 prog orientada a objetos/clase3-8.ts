class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(subirVolumen:number = 1): void {
      if (!this.isOn){ return;
        console.log("el televisor esta apagado");
      }
        this.volume = this.volume + subirVolumen;
      if(this.volume > 100) {
        this.volume = 100
        return console.log("vol max" ,this.volume)
      }else{
        console.log("Vol en" , this.volume);
        
      }
      
    }
    volDown(bajarVolumen: number = 1): void {
      if (!this.isOn){ return 
        console.log("el televisor esta apagado");
      }
        this.volume = this.volume - bajarVolumen;

      if (this.volume < 0 ){
        this.volume = 0; 
        return console.log("vol min", this.volume);
      } else{
        console.log("Bajaste el vol a", this.volume);
      }
      
    }
    channelUp(): void {
      if (!this.isOn){ return 
      console.log("el televisor esta apagado");
      }  
        this.channel ++;

      if (this.channel > 99){
          this.channel = 1;  
      }
      
      console.log("Subir canal", this.channel);
    }

    channelDown(): void {
      if (!this.isOn){ return 
        console.log("el televisor esta apagado");
      }
        this.channel --;
      
      if (this.channel < 1){
          this.channel = 99;  
    }

      console.log("bajar canal", this.channel);
      
    }


    pickChannel(channel: number): void {
      if (!this.isOn) return;
      this.channel = channel;
      console.log("Cambiaste al canal", this.channel);
    }
    
    info(): void {
      if (!this.isOn) {
        console.log("el televisor está apagado");
        return;
      }
    
      const horaActual = new Date().toLocaleTimeString();
    
      console.log("información - canal:", this.channel, "volumen:", this.volume, "hora actual:", horaActual);
    }
  }
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.pickChannel(45);
  tv01.volUp();
  tv01.channelUp();
  tv01.info();
  



  