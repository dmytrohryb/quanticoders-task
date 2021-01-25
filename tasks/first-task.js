function firstTask(x, y, z, w)
{
    // sorting to max to min
    let arr = [x, y, z];
    for (let i = 0; i < 2; i++)
    {
        for (let j = 0; j < 2; j++)
        {
            if(arr[j] < arr[j + 1])
            {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    x = arr[0];
    y = arr[1];
    z = arr[2];

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