const template = document.createElement('template');
template.innerHTML = `
    <style>
    @import "css/components/clock.css";
    </style>
    <div class='clock'>
    <span id="timer"></span>
    <span id="type"></span>
    </div>
`;

class Clock extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.countDownDate = moment(config.date, "YYYY-MM-DD");

        this.type = this.getAttribute("type")
    }
    connectedCallback() {
        setInterval(() => {
            this.getTime();
        }, 1000);
    }

    getTime() {
        const timeLeft = moment.duration(this.countDownDate.diff(moment().utc()));
        let time;
        let type;

        switch (this.type) {
            case 'seconds':
                time = timeLeft.seconds();
                type = 'S';
                break;
            case 'minutes':
                time = timeLeft.minutes();
                type = 'M';
                break;
            case 'hours':
                time = timeLeft.hours();
                type = 'H';
                break;
            case 'days':
                time = Math.floor(timeLeft.asDays());
                type = 'D';
                break;
            default:
                time = "incorrect type";
                break;
        }

        this.shadowRoot.getElementById("timer").innerHTML = time;
        this.shadowRoot.getElementById("type").innerHTML = type;
    }
}

customElements.define("clock-item", Clock);