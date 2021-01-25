function firstTask(x, y, z, w)
{


    let count = 0;
    let tx, ty;
    for (let i = 0; i <= w / x; i++) // x in w
    {
        tx = x * i;
        for (let j = 0; j <= (w - tx) / y; j++) // y in w - x * i
        {
            ty = y * j;
            let tz = w - (tx + ty);
            if(tz % z === 0) count++;
        }
    }
    return count;
}

module.exports = firstTask;