const mainModel = [];
const pos = {x: null, y: null};


const container = document.querySelector('.container');
const submitButton = document.querySelector('.submit-button');
const block = document.querySelector('.no-display');
const form = document.querySelector('.form');
const joystickFrom = document.querySelector('.joystick');
const upJoystickBtn = document.querySelector('.up');
const rightJoystickBtn = document.querySelector('.right');
const downJoystickBtn = document.querySelector('.down');
const leftJoystickBtn = document.querySelector('.left');





const createField = (column, row) => {
    let html = '';

    for(let i = 0; i < row; i++){
        html += `<div class="row">`;
        mainModel[i] = []
        for(let j = 0; j < column; j++){
            html += `<div class="block"></div>`;
            mainModel[i][j] = null;
        }
        html += `</div>`;
    };
    container.innerHTML = html;
    
};

const getPos = () => {
    return {x: pos.x, y: pos.y};
};

const setPos = (x, y) => {
    pos.x = x;
    pos.y = y;
    render()
};
const up = () => {
    const curPos = getPos();
    const newY = curPos.y - 1;

    if(mainModel[newY] === undefined || mainModel[newY][curPos.x] === undefined) {
        return false;
    }

    setPos(curPos.x, newY);
    render()
};

const right = () => {
    const curPos = getPos();
    const newX = curPos.x + 1;

    if(mainModel[newX] === undefined || mainModel[curPos.y][newX] === undefined) {
        return false
    };

    setPos(newX, curPos.y);
    render()
};

const down = () => {
    const curPos = getPos();
    const newY = curPos.y + 1;

    if(mainModel[newY] === undefined || mainModel[newY][curPos.x] === undefined) {
        return false;
    };

    setPos(curPos.x, newY);
    render()
};

const left = () => {
    const curPos = getPos();
    const newX = curPos.x - 1;

    if(mainModel[newX] === undefined || mainModel[newX][curPos.y] === undefined) {
        return false
    };
    
    setPos(newX, curPos.y);
    render()
};

const render = () => {
    const curPos = getPos();
    const sel = `.container div:nth-child(${curPos.y+1}) div:nth-child(${curPos.x+1})`;

    const cell = document.querySelector(sel);

    const oldActiveCell = document.querySelector('.active-color');
    if(oldActiveCell) {
        oldActiveCell.classList.remove('active-color');
    };
    cell.classList.add('active-color');
};


upJoystickBtn.addEventListener('mousedown', (ev) => {
    up()
});
document.addEventListener('keydown', (ev) => {
    if(ev.code !== 'ArrowUp') {
        return 
    }
   
    up()
});
rightJoystickBtn.addEventListener('mousedown', (ev) => {
    right()
});
document.addEventListener('keydown', (ev) => {
    if(ev.code !== 'ArrowRight') {
        return
    }
    right()
});

downJoystickBtn.addEventListener('mousedown', (ev) => {
    down()
});
document.addEventListener('keydown', (ev) => {
    if(ev.code !== 'ArrowDown') {
        return
    }
    down()
});
leftJoystickBtn.addEventListener('mousedown', (ev) => {
    left()
});
document.addEventListener('keydown', (ev) => {
    if(ev.code !== 'ArrowLeft') {
        return
    }
    left()
});


submitButton.addEventListener('click', () => {
    
    const formData = new FormData(form);
    const column = Number(formData.get('width'));
    const row = Number(formData.get('height'));
    
    

    createField(column, row);
    setPos(2,2);
    console.log(mainModel)
});
