(function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const canvasSize = 600; // Change this to your desired size
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const canvasFillColor = "#000d36";
    const canvasStrokeColor = "rgba(211, 211, 211, 0.19)";

    const scoreEl = document.getElementById("score");
    const resetEl = document.getElementById("reset");
    const showGridEl = document.getElementById("show-grid");
    const highScoreEl = document.getElementById("high-score");
    const pauseEl = document.getElementById("pause");
    const playEl = document.getElementById("play");




})();