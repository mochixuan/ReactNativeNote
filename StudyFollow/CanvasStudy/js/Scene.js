/**
 * Created by wangxuan on 2017/6/25.
 */

function Scene(options) {
    this.stage = options.stage;

    this.init = options.init || Scene.voidFn;

    this.pre = options.pre || Scene.voidFn;

    this.post = options.post || Scene.voidFn;

    this.layers = options.layers || [new Konva.Layer()];

    this.name = options.name || '';

    this.init();
}

Scene.prototype = {
    constructor: Scene,
    voidFn: function () {},
    CurrentScene:null,
    play: function () {
        var self = this;
        var doPre = function doPre() {
            self.layers.forEach(function (val) {
               self.stage.add(val);
            });
            Scene.currentScene = self;
            self.pre();
        };
        if (Scene.currentScene) {
            Scene.currentScene.post(doPre);
        } else {
            doPre();
        }
    }



}
