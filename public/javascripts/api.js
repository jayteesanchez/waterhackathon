document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById('myChart').getContext("2d");

    // var data = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [
    //         {
    //             label: "My First dataset",
    //             fillColor: "rgba(220,220,220,0.2)",
    //             strokeColor: "rgba(220,220,220,1)",
    //             pointColor: "rgba(220,220,220,1)",
    //             pointStrokeColor: "#fff",
    //             pointHighlightFill: "#fff",
    //             pointHighlightStroke: "rgba(220,220,220,1)",
    //             data: [65, 59, 80, 81, 56, 55, 40]
    //         },
    //         {
    //             label: "My Second dataset",
    //             fillColor: "rgba(151,187,205,0.2)",
    //             strokeColor: "rgba(151,187,205,1)",
    //             pointColor: "rgba(151,187,205,1)",
    //             pointStrokeColor: "#fff",
    //             pointHighlightFill: "#fff",
    //             pointHighlightStroke: "rgba(151,187,205,1)",
    //             data: [28, 48, 40, 19, 86, 27, 90]
    //         }
    //     ]
    // };

    // var newLineChart = new Chart(ctx).Line(data);

$.ajax({
    method: "GET",
    url: "http://localhost:3000/api/families",
    dataType: "json"
})
    .success(function(data) {
        console.log(data);

        // put API data into chartData

        var chartData = {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: data[0].dailyGallons
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "My Third dataset",
                fillColor: "rgba(110,132,145,0.2)",
                strokeColor: "rgba(110,132,145,1)",
                pointColor: "rgba(110,132,145,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(110,132,145,1)",
                data: [25, 33, 20, 16, 58, 62, 67]
            },
            {
                label: "My Fourth dataset",
                fillColor: "rgba(244,251,255,0.2)",
                strokeColor: "rgba(244,251,255,1)",
                pointColor: "rgba(244,251,255,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(244,251,255,1)",
                data: [83, 16, 1, 29, 64, 84, 50]
            },
            {
                label: "My Fifth dataset",
                fillColor: "rgba(222,208,190,0.2)",
                strokeColor: "rgba(222,208,190,1)",
                pointColor: "rgba(222,208,190,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(222,208,190,1)",
                data: [7, 78, 78, 14, 33, 2, 84]
            }
        ]
    };

        var newLineChart = new Chart(ctx).Line(chartData);
    })
    .fail(function(err) {
        console.log(err);
    })

})

