import {NeonCursor} from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdm.min.js'

NeonCursor({
    el: document.getElementById('app'),
    ShaderPoints: 16,
    CurvePoints: 80,
    CurveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocitytreshold: 10,
    sleepradiusX: 100,
    sleepradiusY: 100,
    sleepTimeCoefx: 0.0025,
    sleepTimeCoey: 0.0025 
})