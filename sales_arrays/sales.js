"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const Quar1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
const Quar2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
const Quar3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
const Quar4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

let addn1=0;
for( let i=0; i<region1.length; i++)
{
    addn1 = addn1 + region1[i];
}

let addn2=0;

for( let i=0; i<region2.length; i++)
{
    addn2 = addn2 + region2[i];
}

let addn3=0;

for( let i=0; i<region3.length; i++)
{
    addn3 = addn3 + region3[i];
}
let addn4=0;

for( let i=0; i<region4.length; i++)
{
    addn4 = addn4 + region4[i];
}
let addn5=0;

for( let i=0; i<region5.length; i++)
{
    addn5 = addn5 + region5[i];
}

document.write(`
<h3>Sales Of Quarter</h3>

Quar1: ${region1[0] + region2[0] + region3[0] + region4[0] + region5[0]}<br/>
Quar2: ${region1[1] + region2[1] + region3[1] + region4[1] + region5[1]}<br/>
Quar3: ${region1[2] + region2[2] + region3[2] + region4[2] + region5[2]}<br/>
Quar4: ${region1[3] + region2[3] + region3[3] + region4[3] + region5[3]}<br/>

<h3>Sales Of Region</h3>

R1: ${addn1}<br/>
R2: ${addn2}<br/>
R3: ${addn3}<br/>
R4: ${addn4}<br/>
R5: ${addn5}<br/>

<h1> Total Sales</h1>

total sales: ${addn1+addn2+addn3+addn4+addn5}
`)



