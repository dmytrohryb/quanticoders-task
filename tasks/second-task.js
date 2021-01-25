function secondTask(N, x, y)
{
    let isFirstCopy = true;
    let time = 1;
    while (N > 0)
    {
        if(time % x === 0)
        {
            if(isFirstCopy) {
                N--;
                isFirstCopy = false;
                continue;
            }
            else{
                N--;
            }
        }
        if(time % y === 0) N--;
        time++;
    }
    return time;
}

module.exports = secondTask;