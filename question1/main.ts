export function isValidWalk(walk: string[]) {
    let x: number = 0;
    let y: number = 0;
    let steps: number = 0;

    for (let i = 0; i < walk.length; i++) {
        const element = walk[i];

        switch (element) {
            case 'n':
                y += 1;
                break;
            case 's':
                y -= 1;
                break;
            case 'w':
                x -= 1;
                break;
            case 'e':
                x += 1;
                break;
        }
        
        steps++;
    }

    if ((x == 0 && y == 0) && steps == 10) {
        return true;
    }

    return false;
}
