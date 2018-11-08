function washFreqency (wfreq){

    // washing frequency
    var washLevel = parseFloat(wfreq) * 20
    console.log(washLevel);
    // calculate the meter point
    var degrees = 180 - washLevel,
        radius = 0.5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // path for triangle
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ type: 'scatter',
        x: [0], y:[0],
        marker: {size: 28, color: '850000'},
        showlegend: false,
        name: 'scrub',
        text: level,
        hoverinfo: 'text+name'},
        {values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
        rotation: 90,
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: 'text',
        textposition: 'inside',
        marker: {colors: ['rgba(14,89,0,.5)',
                            'rgba(14,100,0,.5)',
                            'rgba(14,135,0,.5)',
                            'rgba(102,135,0,.5)',
                            'rgba(121,130,0,.5)',
                            'rgba(132,130,0,.5)',
                            'rgba(151,143,0,.5)',
                            'rgba(244,220,185,1)',
                            'rgba(249,247,244,1)']},
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: 'label',
        hole: .5,
        type: 'pie',
        showlegend: false}
    ];

    var layout = {
        shapes:[{
            type: 'path',
            path: path,
            fillcolor: '850000',
            line: {
                color: '850000'
            }
        }],
        title: 'Belly Button Scrubing Counts',
        height: 1000,
        width: 1000,
        xaxis: {zeroline:false, showticklabels: false,
                showgrid:false, range: [-1,1]},
        yaxis: {zeroline:false, showticklabels: false,
                showgrid: false, range: [-1,1]}
    };
    Plotly.newPlot('gauge', data, layout)
}
