// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart-box'));

// 指定图表的配置项和数据
var option = {
	title: {
        text: '0-20万元年终奖个税和税后收入图',
        left: 'center',
        textStyle: {
        	fontSize: '24'
        }
    },
    xAxis: {
        name: '个税',
        min: 0,
        max: 25,
        splitNumber: 6,
    },
    yAxis: {
        name: '税后收入',
        min: 0,
        max: 25,
        splitNumber: 6,
    },
    series: [{
    	name: '税后收入',
        data: [[0, 0], [3.8, 3.746], [3.8, 3.117667], [13.5, 12.8], [13.5, 12], [20, 20]],
        type: 'line',
        symbol: "none",
        itemStyle: {
        normal: {
            color: "red",
            lineStyle: {
                color: "red"
            }
        }
    },
    },
    {
    	name: '税前收入',
        data: [[0, 0], [3.8, 0.3], [3.8, 0.55], [13.5, 1.5], [13.5, 1.8], [20, 2.6]],
        type: 'line',
        symbol: "none",
        itemStyle: {
        normal: {
            color: "#000",
            lineStyle: {
                color: "#000"
            }
        }
    },
    }]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

(function() {
	$('.roundness').mousedown(function(e) {
		var $box = $('.roundness-box');
		var initX = $box.offset().left, 
		    $this = $(this);
		$(document).mousemove(function(el) {
			var nowX = el.pageX,
			  dis = nowX-initX;
			  console.log(nowX + ',' +　initX)
			  if((nowX > initX + $('.roundness-box').width()) || (nowX < initX + 1)) return;
			$this.css({
				'left': dis + 'px'
			});
			var boxLen = $('.roundness-box').width();
			$('.box-shade').width(boxLen - dis);
			$('.a').width(boxLen - dis)
		});
		$(document).mouseup(function() {
			$(document).unbind('mousemove')
		})
	})
})()
