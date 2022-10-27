export interface IRobot {
    name: string;
    img: string;
    speed: number;
    resistance: number;
    creationDate: string;
}

export class Robot {
    id: number;
    static createId() {
        return Math.round(Math.random() * 1000);
    }
    constructor(
        public name: string,
        public img: string,
        public speed: number,
        public resistance: number,
        public creationDate: string
    ) {
        this.id = Robot.createId();
    }
}
