/**
 * Created by wangxuan on 2017/6/25.
 */

function CircleText(option) {
    this._init(option);
}

CircleText.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.text = option.text || 'canvas';
        this.innerStyle = option.innerStyle || 'red';
        this.outerStyle = option.outerStyle || 'blue'

        //创建文字和圆形的一个组 作为圆心
        this.group = new Konva.Group({
            //设置组的x，y坐标后，所有的内部元素按照组内的新坐标系定位
            x:this.x,
            y:this.y
        });

        var innerCircle = new Konva.Circle({
            x:0,
            y:0,
            radius: this.innerRadius,
            fill:this.innerStyle,
            opacity:.8
        });
        this.group.add(innerCircle);

        var outerRing = new Konva.Ring({
            x:0,
            y:0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerStyle,
            opacity:.3
        });
        this.group.add(outerRing);

        var text = new Konva.Text({
            x: 0 -this.outerRadius,
            y: -8,
            width: this.outerRadius*2,
            fill:'#fff',
            fontSize: 17,
            text: this.text,
            align: 'center',
            fontStyle:'bold'
        });
        this.group.add(text);
    },
    addToGroupOrLayer: function (arg) {
        arg.add(this.group);
    }
}

