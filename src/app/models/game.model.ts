export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playCard: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation: boolean = false;
    public drawnCard: string = '';

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }

        this.stack = shuffle(this.stack);
    }
}

const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};