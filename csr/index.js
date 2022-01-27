
(async ()=>{
    const res = await fetch('http://127.0.0.1:3000/api/encuesta');
    const data = await res.json();
    let confirmados = 0, conSintomas = 0, sinCovid = 0;
    data.data.forEach(e => {
        confirmados += e.casosConfirmados;
        conSintomas += e.casosConSintomas;
        sinCovid += e.casosSinCOVID;
    });
    new Morris.Donut({
        // ID of the element in which to draw the chart.
        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            {label: "Con sístomas", value: conSintomas},
            {label: "Confirmados", value: confirmados},
            {label: "Sin COVID", value: sinCovid}
        ],
        colors:['#EA9928','#F41B0C','#29EF2C'],
        resize: true
      });
})()