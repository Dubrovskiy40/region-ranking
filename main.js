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

//МКД1
const inpMKD1_1 = document.getElementById('inpMKD-1_1');
const inpMKD1_2 = document.getElementById('inpMKD-1_2');
const btnMKD1 = document.getElementById('btnMKD-1');
const mkd1Result = document.querySelector('.mkd1_result');
btnMKD1.addEventListener('click', getResult);

function getBaseLog(x, y) {
    let log = Math.log(x) / Math.log(y);
    return log;
}

//Получение нормализованного значения
function gettingNormalizedValue(value) {
    let normalizedValue = (value - standardizationZ[5].mkd1Middle) / standardizationZ[5].mkd1SKO;
    return normalizedValue;
}

//Шкалирвоание нормализованного значения
function normalizedScalingValue(value) {
    let scalingValue = ((value - dataScaling[5].mkd1Min) / (dataScaling[5].mkd1Max - dataScaling[5].mkd1Min)) * 100;
    console.log('scalingValue', scalingValue);
    return scalingValue;
}

function getRender(log, norm, scal) {
    mkd1Result.innerHTML = `
        <div>
            <h3 class="subTitle">Результат по индикатору МКД1</h3>
            <span class="result">Итоговое значение в баллах: ${scal}</span>
        </div>
    `
}

function getResult() {
    let resultLog = getBaseLog(inpMKD1_1.value, inpMKD1_2.value);
    let resultNormalizedValue = gettingNormalizedValue(resultLog);
    let resultScalingValue = normalizedScalingValue(resultNormalizedValue);
    getRender(resultLog, resultNormalizedValue, resultScalingValue);
}

//МКД2
const inpMKD2_1 = document.getElementById('inpMKD-2_1');
const inpMKD2_2 = document.getElementById('inpMKD-2_2');
const btnMKD2 = document.getElementById('btnMKD-2');
const mkd2Result = document.querySelector('.mkd2_result');
btnMKD2.addEventListener('click', getResult);
