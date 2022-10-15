export class Animation {
    constructor() {
        if (config.department == 'INTERIOR') {
            this.play = () => {
                $(".glitch-img").mgGlitch({
                    destroy: false,
                    scale: false, // set 'false' to stop scaling
                    zIndexStart: 8, // because of absolute position, set z-index base value
                });
            }
            this.pause = () => {
                $(".glitch-img").mgGlitch({
                    destroy: true,
                    scale: false, // set 'false' to stop scaling
                    zIndexStart: 8, // because of absolute position, set z-index base value
                });
            }
        }
        else if (config.department == 'DEFENSE') {
            this.play = () => {
                particlesJS.load('container', '../../assets/configs/particlesjs-config.json', function () {
                    console.log('callback - particles.js config loaded');
                });
            }
            this.pause = () => {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window["pJSDom"] = [];
            }
        }
    }
}