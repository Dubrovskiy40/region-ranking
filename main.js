//Для шкалирования от 0 до 100
const dataScaling = [
    {
        strat1Min: -2.4537,
        stran1Max: 1.1513
    },
    {
        strat2Min: -0.7926,
        stran2Max: 1.1377
    },
    {
        strat3Min: -2.0126,
        stran3Max: 1.3774
    },
    {
        roads1Min: -1.6868,
        roads1Max: 0.4852
    },
    {
        roads2Min: -3.5414,
        roads2Max: 0.3978
    },
    {
        mkd1Min: -1.6541,
        mkd1Max: 1.3677
    },
    {
        mkd2Min: -1.9916,
        mkd2Max: 1.1112
    },
    {
        mkd3Min: -1.2340,
        mkd3Max: 0.6699
    },
    {
        mkd4Min: -2.0994,
        mkd4Max: 0.6614
    },
    {
        gmu1Min: -1.4717,
        gmu1Max: 1.4094
    },
    {
        gmu2Min: -1.0111,
        gmu2Max: 1.2029
    },
    {
        gmu3Min: -1.4995,
        gmu3Max: 0.8739
    },
    {
        org1Min: -0.5696,
        org1Max: 2.1761
    },
    {
        org2Min: -0.5816,
        org2Max: 2.1522
    },
    {
        org3Min: -0.5613,
        org3Max: 0.5930
    },
];

const standardizationZ = [
    {
        strat1Middle: 0.56,
        stran1SKO: 0.23
    },
    {
        strat2Middle: 0.3,
        stran2SKO: 1.29
    },
    {
        strat3Middle: 0.07,
        stran3SKO: 0.03
    },
    {
        roads1Middle: 0.95,
        roads1SKO: 0.11
    },
    {
        roads2Middle: 0.9,
        roads2SKO: 0.25
    },
    {
        mkd1Middle: 0.47,
        mkd1SKO: 0.3
    },
    {
        mkd2Middle: 0.73,
        mkd2SKO: 0.14
    },
    {
        mkd3Middle: 0.91,
        mkd3SKO: 0.13
    },
    {
        mkd4Middle: 0.67,
        mkd4SKO: 0.35
    },
    {
        gmu1Middle: 0.29,
        gmu1SKO: 0.20
    },
    {
        gmu2Middle: 0.48,
        gmu2SKO: 0.47
    },
    {
        gmu3Middle: 0.83,
        gmu3SKO: 0.17
    },
    {
        org1Middle: 0.13,
        org1SKO: 0.22
    },
    {
        org2Middle: 0.87,
        org2SKO: 1.49
    },
    {
        org3Middle: 0.02,
        org3SKO: 0.18
    },
];

//СТРАТ1
const inpSTRAT1_1 = document.getElementById('inpSTRAT-1_1');
const inpSTRAT1_2 = document.getElementById('inpSTRAT-1_2');
const btnSTRAT1 = document.getElementById('btnSTRAT-1');
const strat1Result = document.querySelector('.strat1_result');


//СТРАТ2
const inpSTRAT2_1 = document.getElementById('inpSTRAT-2_1');
const btnSTRAT2 = document.getElementById('btnSTRAT-2');
const strat2Result = document.querySelector('.strat2_result');

//СТРАТ3
const inpSTRAT3_1 = document.getElementById('inpSTRAT-3_1');
const inpSTRAT3_2 = document.getElementById('inpSTRAT-3_2');
const inpSTRAT3_3 = document.getElementById('inpSTRAT-3_3');
const inpSTRAT3_4 = document.getElementById('inpSTRAT-3_4');
const btnSTRAT3= document.getElementById('btnSTRAT-3');
const strat3Result = document.querySelector('.strat3_result');

//ДОРОГИ1
const inpROADS1_1 = document.getElementById('inpROADS-1_1');
const inpROADS1_2 = document.getElementById('inpROADS-1_2');
const btnROADS1 = document.getElementById('btnROADS-1');
const roads1Result = document.querySelector('.roads1_result');

//ДОРОГИ2
const inpROADS2_1 = document.getElementById('inpROADS-2_1');
const inpROADS2_2 = document.getElementById('inpROADS-2_2');
const btnROADS2 = document.getElementById('btnROADS-2');
const roads2Result = document.querySelector('.roads2_result');


//Расчёт
function getBaseLog(x, y) {
    let log = Math.log(x) / Math.log(y);
    return log;
}
    //Получение нормализованного значения
function gettingNormalizedValue(value, value1, value2) {
    let normalizedValue = (value - value1) / value2;
    return normalizedValue;
}
    //Шкалирвоание нормализованного значения
function normalizedScalingValue(value, value1, value2) {
    let scalingValue = ((value - value1) / (value2 - value1)) * 100;
    return scalingValue.toFixed(2);
}

function getRender(name, tag, scal) {
    tag.innerHTML = `
        <div>
            <h3 class="subTitle">Результат по индикатору ${name}</h3>
            <span class="result">Итоговое значение в баллах: ${scal}</span>
        </div>
    `
}

//МКД1
const inpMKD1_1 = document.getElementById('inpMKD-1_1');
const inpMKD1_2 = document.getElementById('inpMKD-1_2');
const btnMKD1 = document.getElementById('btnMKD-1');
const mkd1Result = document.querySelector('.mkd1_result');
btnMKD1.addEventListener('click', getResultMkd1);

function getResultMkd1() {
    let resultLog = getBaseLog(inpMKD1_1.value, inpMKD1_2.value);
    let normalizedValue1 = standardizationZ[5].mkd1Middle;
    let normalizedValue2 = standardizationZ[5].mkd1SKO;
    let resultNormalizedValue = gettingNormalizedValue(resultLog, normalizedValue1, normalizedValue2);
    let scalingValue1 = dataScaling[5].mkd1Min;
    let scalingValue2 = dataScaling[5].mkd1Max;
    let resultScalingValue = normalizedScalingValue(resultNormalizedValue, scalingValue1, scalingValue2);
    getRender('МКД1', mkd1Result, resultScalingValue);
}

//МКД2
const inpMKD2_1 = document.getElementById('inpMKD-2_1');
const inpMKD2_2 = document.getElementById('inpMKD-2_2');
const btnMKD2 = document.getElementById('btnMKD-2');
const mkd2Result = document.querySelector('.mkd2_result');
btnMKD2.addEventListener('click', getResultMkd2);

function getResultMkd2() {
    let resultLog = getBaseLog(inpMKD2_1.value, inpMKD2_2.value);
    let normalizedValue1 = standardizationZ[6].mkd2Middle;
    let normalizedValue2 = standardizationZ[6].mkd2SKO;
    let resultNormalizedValue = gettingNormalizedValue(resultLog, normalizedValue1, normalizedValue2);
    let scalingValue1 = dataScaling[6].mkd2Min;
    let scalingValue2 = dataScaling[6].mkd2Max;
    let resultScalingValue = normalizedScalingValue(resultNormalizedValue, scalingValue1, scalingValue2);
    getRender('МКД2', mkd2Result, resultScalingValue);
}

//МКД3
const inpMKD3_1 = document.getElementById('inpMKD-3_1');
const inpMKD3_2 = document.getElementById('inpMKD-3_2');
const btnMKD3 = document.getElementById('btnMKD-3');
const mkd3Result = document.querySelector('.mkd3_result');
btnMKD3.addEventListener('click', getResultMkd3);

function getResultMkd3() {
    let resultLog = getBaseLog(inpMKD3_1.value, (Number(inpMKD3_2.value) + Number(inpMKD3_1.value)));
    console.log('resultLog',resultLog)
    let normalizedValue1 = standardizationZ[7].mkd3Middle;
    let normalizedValue2 = standardizationZ[7].mkd3SKO;
    let resultNormalizedValue = gettingNormalizedValue(resultLog, normalizedValue1, normalizedValue2);
    let scalingValue1 = dataScaling[7].mkd3Min;
    let scalingValue2 = dataScaling[7].mkd3Max;
    let resultScalingValue = normalizedScalingValue(resultNormalizedValue, scalingValue1, scalingValue2);
    getRender('МКД3', mkd3Result, resultScalingValue);
}

//МКД4
const inpMKD4_1 = document.getElementById('inpMKD-4_1');
const inpMKD4_2 = document.getElementById('inpMKD-4_2');
const btnMKD4 = document.getElementById('btnMKD-4');
const mkd4Result = document.querySelector('.mkd4_result');
btnMKD4.addEventListener('click', getResultMkd4);

function getResultMkd4() {
    let resultLog = getBaseLog(inpMKD4_1.value, inpMKD4_2.value);
    let normalizedValue1 = standardizationZ[8].mkd4Middle;
    let normalizedValue2 = standardizationZ[8].mkd4SKO;
    let resultNormalizedValue = gettingNormalizedValue(resultLog, normalizedValue1, normalizedValue2);
    let scalingValue1 = dataScaling[8].mkd4Min;
    let scalingValue2 = dataScaling[8].mkd4Max;
    let resultScalingValue = normalizedScalingValue(resultNormalizedValue, scalingValue1, scalingValue2);
    getRender('МКД4', mkd4Result, resultScalingValue);
}

//ГМУ1
const inpGMU1_1 = document.getElementById('inpGMU-1_1');
const inpGMU1_2 = document.getElementById('inpGMU-1_2');
const btnGMU1 = document.getElementById('btnGMU-1');
const gmu1Result = document.querySelector('.gmu1_result');

//ГМУ2
const inpGMU2_1 = document.getElementById('inpGMU-2_1');
const inpGMU2_2 = document.getElementById('inpGMU-2_2');
const btnGMU2 = document.getElementById('btnGMU-2');
const gmu2Result = document.querySelector('.gmu2_result');

//ГМУ3
const inpGMU3_1 = document.getElementById('inpGMU-3_1');
const inpGMU3_2 = document.getElementById('inpGMU-3_2');
const btnGMU3 = document.getElementById('btnGMU-3');
const gmu3Result = document.querySelector('.gmu3_result');

//РЦЭ1
const inpRCES1_1 = document.getElementById('inpRCES-1_1');
const inpRCES1_2 = document.getElementById('inpRCES-1_2');
const btnRCES1 = document.getElementById('btnRCES-1');
const rces1Result = document.querySelector('.rces1_result');

//РЦЭ2
const inpRCES2_1 = document.getElementById('inpRCES-2_1');
const inpRCES2_2 = document.getElementById('inpRCES-2_2');
const btnRCES2 = document.getElementById('btnRCES-2');
const rces2Result = document.querySelector('.rces2_result');

//РЦЭ3
const inpRCES3_1 = document.getElementById('inpRCES-3_1');
const inpRCES3_2 = document.getElementById('inpRCES-3_2');
const btnRCES3 = document.getElementById('btnRCES-3');
const rces3Result = document.querySelector('.rces3_result');



// const inputs = document.getElementsByTagName('input');
//
// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('change', getChangeInp)
// }
//
// function getChangeInp(event) {
//     console.log(event.target.value)
// }
//
//
// const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
//
// buttons.forEach(btn => {
//     btn.addEventListener('click', getResult);
// })
