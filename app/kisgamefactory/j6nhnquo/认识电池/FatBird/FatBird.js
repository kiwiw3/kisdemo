(function (lib, img, cjs) {
var ss={};


var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 263,
	height: 298,
	fps: 30,
	color: "#006699",
	manifest: []
};




lib.initSpriteSheets = function(basePath) {
	var arr = [["FatBird_atlas_",{"images": ["images/FatBird_atlas_.png"], "frames": [[410,495,34,18],[47,475,43,37],[92,477,35,31],[0,314,71,104],[138,424,56,49],[470,401,32,104],[418,0,94,148],[73,314,63,109],[172,256,84,97],[258,369,48,24],[228,401,120,47],[392,150,117,102],[103,425,33,50],[228,355,28,43],[392,86,21,15],[258,256,71,111],[329,495,33,20],[0,420,45,113],[283,450,44,46],[331,256,35,63],[350,401,58,92],[138,355,88,67],[410,401,58,92],[47,425,54,48],[242,86,148,84],[233,450,48,44],[0,0,240,240],[242,0,174,84],[331,323,171,37],[378,254,126,67],[242,172,134,82],[0,242,170,70],[331,362,170,37],[138,475,28,41],[364,495,44,14],[138,314,25,25],[196,450,35,70],[233,496,36,14]]}]];
	var l = arr.length;
	for(var i = 0; i < l; i++) {
		var im = arr[i][1];
		var jl = im.images.length;
		for (var j = 0; j < jl; j++) {
			im.images[j] = basePath+'/'+im.images[j];
		}
		ss[arr[i][0]]=new kisgame.SpriteSheet(im);
	}
};


(lib.Bitmap1 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["FatBird_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.飞翅膀 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AfterBreak
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-35,-8.5);

	this.instance_1 = new lib.Bitmap19();
	this.instance_1.setTransform(-20,-8.6);

	this.instance_2 = new lib.Bitmap20();
	this.instance_2.setTransform(-23.2,-11.7);

	this.instance_3 = new lib.Bitmap21();
	this.instance_3.setTransform(-23.6,-64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-8.5,63,109);


(lib.背面 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap28();
	this.instance.setTransform(39.7,132.9,1,1,0,0,180);

	this.instance_1 = new lib.Bitmap28();
	this.instance_1.setTransform(202.3,132.9);

	this.instance_2 = new lib.Bitmap10();
	this.instance_2.setTransform(84.8,9.2);

	this.instance_3 = new lib.Bitmap27();
	this.instance_3.setTransform(123.8,203.7);

	this.instance_4 = new lib.Bitmap11();
	this.instance_4.setTransform(88.6,206.5);

	// 图层 2
	this.instance_5 = new lib.Bitmap42();
	this.instance_5.setTransform(35.5,246.4);

	this.instance_6 = new lib.Bitmap40();
	this.instance_6.setTransform(0.9,42.4);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,9.2,252.6,274.2);


(lib.翅膀飞 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AfterBreak
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(16.1,-19.4,1,1,0,0,180);

	this.instance_1 = new lib.Bitmap32();
	this.instance_1.setTransform(-13.5,-15.5);

	this.instance_2 = new lib.Bitmap33();
	this.instance_2.setTransform(-4.1,-22);

	this.instance_3 = new lib.Bitmap34();
	this.instance_3.setTransform(-13.5,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-19.4,32,104);


(lib.毛飘动 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap35();
	this.instance.setTransform(0,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.82,scaleY:0.91,rotation:-7.2,x:-5.4,y:-42.8},0).wait(2).to({scaleX:0.83,scaleY:1,rotation:0,skewX:-2.2,x:-1.8,y:-47.6},0).wait(2).to({scaleX:0.91,scaleY:0.8,skewX:9.2,x:6.1,y:-37.7},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-47.6,54,48);


(lib.毛0 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(0,-48.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-48.9,56,49);


(lib.尾巴飘动 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(48.3,-24.2,1,1,107);

	this.instance_1 = new lib.Bitmap11();
	this.instance_1.setTransform(19.7,35.1,1,1,-124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:-124,x:19.7,y:35.1}},{t:this.instance,p:{rotation:107,x:48.3,y:-24.2}}]}).to({state:[{t:this.instance_1,p:{rotation:-139,x:26.6,y:29}},{t:this.instance,p:{rotation:97.1,x:42.3,y:-32}}]},3).to({state:[{t:this.instance_1,p:{rotation:178.4,x:35.2,y:5}},{t:this.instance,p:{rotation:148.3,x:56.5,y:14.9}}]},3).to({state:[{t:this.instance_1,p:{rotation:-130.8,x:23,y:32.5}},{t:this.instance,p:{rotation:118.3,x:53.3,y:-14.3}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-35.1,48.2,70.2);


(lib.眼珠 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-12.6,-12.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-12.6,25,25);


(lib.眼睛闭 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-19.1,8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.1,8,36,14);


(lib.嘴正1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-23.7,-22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.7,-22,48,44);


(lib.脚趾_正面 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-17.2,-9.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-9.2,34,18);


(lib.眼睛向下 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.眼珠("synched",0);
	this.instance.setTransform(-4.7,22.8,1,1,90);

	// 图层 2
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(-18.5,-29.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-29.7,35,70);


(lib.眼睛2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.眼珠("synched",0);
	this.instance.setTransform(1.1,8.2,1,1,165);

	// 图层 2
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(-18.5,-30.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-30.4,35,70);


(lib.眼睛1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(-13.9,-32.9);

	this.instance_1 = new lib.眼珠("synched",0);
	this.instance_1.setTransform(-3.1,8.9,1,1,-15);

	// 图层 2
	this.instance_2 = new lib.Bitmap30();
	this.instance_2.setTransform(-18.5,-23.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-32.9,35,72.7);


(lib.眼睛向右 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.眼珠("synched",0);
	this.instance.setTransform(3.1,8.2,1,1,165);

	// 图层 2
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(-18.5,-30);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-30,37,70);


(lib.眼睛正 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.眼珠("synched",0);
	this.instance.setTransform(0.1,8.2,1,1,90);

	// 图层 1
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(-18.5,-30);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-30,35,70);


(lib.眨眼 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.眼睛正("synched",0);
	this.instance.setTransform(0,-5.2);

	this.instance_1 = new lib.眼睛向右("synched",0);
	this.instance_1.setTransform(0,-5.2,1,0.676);

	this.instance_2 = new lib.眼睛闭("synched",0);
	this.instance_2.setTransform(0,-5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-35.3,35,70);


(lib.进食 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(126.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:121.1,y:40.4},0).wait(2).to({scaleX:0.66,scaleY:0.94,rotation:-45,x:94.3,y:154.5},0).wait(4).to({scaleX:1,scaleY:1,rotation:0,x:121.1,y:40.4},0).to({_off:true},2).wait(1));

	// 图层 2
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(170.7,269,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(81,267.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},10).wait(1));

	// AfterBreak
	this.instance_3 = new lib.Bitmap15();
	this.instance_3.setTransform(-0.1,137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({y:144.1},0).wait(2).to({y:149.6},0).wait(4).to({y:144.1},0).to({_off:true},2).wait(1));

	// 图层 7
	this.instance_4 = new lib.Bitmap15();
	this.instance_4.setTransform(256.2,137.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({y:144.1},0).wait(2).to({y:149.6},0).wait(4).to({y:144.1},0).to({_off:true},2).wait(1));

	// 图层 6
	this.instance_5 = new lib.Bitmap4();
	this.instance_5.setTransform(106.1,152.5);

	this.instance_6 = new lib.Bitmap3();
	this.instance_6.setTransform(105.4,245.7,1,0.717);

	this.instance_7 = new lib.嘴正1("synched",0);
	this.instance_7.setTransform(129.1,183.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:106.1,y:152.5}}]}).to({state:[{t:this.instance_5,p:{x:105.3,y:161.1}}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},4).to({state:[]},2).wait(1));

	// 图层 3
	this.instance_8 = new lib.眼睛向右("synched",0);
	this.instance_8.setTransform(167,115.3);

	this.instance_9 = new lib.眼睛向右("synched",0);
	this.instance_9.setTransform(89,115.3);

	this.instance_10 = new lib.眼睛正("synched",0);
	this.instance_10.setTransform(170.9,131.8);

	this.instance_11 = new lib.眼睛正("synched",0);
	this.instance_11.setTransform(86.6,131.8);

	this.instance_12 = new lib.眼睛向下("synched",0);
	this.instance_12.setTransform(86.9,223.7,1,0.666,0,0,180);

	this.instance_13 = new lib.眼睛向下("synched",0);
	this.instance_13.setTransform(166.1,223.7,1,0.666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},2).to({state:[{t:this.instance_13},{t:this.instance_12}]},2).to({state:[{t:this.instance_11},{t:this.instance_10}]},4).to({state:[]},2).wait(1));

	// 图层 4
	this.instance_14 = new lib.Bitmap39();
	this.instance_14.setTransform(53,191.1);

	this.instance_15 = new lib.Bitmap40();
	this.instance_15.setTransform(8.6,35.6);

	this.instance_16 = new lib.Bitmap45();
	this.instance_16.setTransform(45.8,205.6);

	this.instance_17 = new lib.Bitmap46();
	this.instance_17.setTransform(44.7,238.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).to({state:[{t:this.instance_15},{t:this.instance_16}]},2).to({state:[{t:this.instance_15},{t:this.instance_17}]},2).to({state:[{t:this.instance_15},{t:this.instance_16}]},4).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,256.3,287);


(lib.斜站 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(74.4,100.4);

	// 图层 3
	this.instance_1 = new lib.Bitmap11();
	this.instance_1.setTransform(243,18.2,1.561,1.046,0,39.7,-140.3);

	this.instance_2 = new lib.Bitmap24();
	this.instance_2.setTransform(232.2,120.5);

	this.instance_3 = new lib.眼睛2("synched",0);
	this.instance_3.setTransform(258,79.9,0.679,0.706,-13.3,0,0,0.1,0.1);

	this.instance_4 = new lib.眼睛2("synched",0);
	this.instance_4.setTransform(201.3,85,1,1,0,0,0,0.1,0);

	// 图层 5
	this.instance_5 = new lib.Bitmap44();
	this.instance_5.setTransform(124.8,164.3);

	this.instance_6 = new lib.Bitmap40();
	this.instance_6.setTransform(32.8,6.5);

	this.instance_7 = new lib.Bitmap10();
	this.instance_7.setTransform(20.2,194.1,0.604,0.63,-89);

	this.instance_8 = new lib.Bitmap13();
	this.instance_8.setTransform(29.1,146.4,0.614,0.545,0,-34,146);

	// 图层 4
	this.instance_9 = new lib.Bitmap2();
	this.instance_9.setTransform(225.4,219.2,1,1,0,0,180);

	this.instance_10 = new lib.Bitmap2();
	this.instance_10.setTransform(177,242.4,1,1,0,0,180);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,-16.7,274.8,283.1);


(lib.展翅 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.脚趾_正面("synched",0);
	this.instance.setTransform(153.5,278.2,1,1,0,0,180);

	this.instance_1 = new lib.脚趾_正面("synched",0);
	this.instance_1.setTransform(98.2,277.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},9).wait(1));

	// AfterBreak
	this.instance_2 = new lib.翅膀飞("synched",0);
	this.instance_2.setTransform(17.5,165.8,1,1,0,0,180,0,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},9).wait(1));

	// 图层 7
	this.instance_3 = new lib.翅膀飞("synched",0);
	this.instance_3.setTransform(238.6,165.8,1,1,0,0,0,0,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},9).wait(1));

	// 图层 3
	this.instance_4 = new lib.嘴正1("synched",0);
	this.instance_4.setTransform(126.7,165.8);

	this.instance_5 = new lib.毛0("synched",0);
	this.instance_5.setTransform(154.6,24.5,1,1,0,0,0,27.9,-24.5);

	this.instance_6 = new lib.眼睛正("synched",0);
	this.instance_6.setTransform(167,115.3);

	this.instance_7 = new lib.眼睛正("synched",0);
	this.instance_7.setTransform(89,115.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},9).wait(1));

	// 图层 4
	this.instance_8 = new lib.Bitmap39();
	this.instance_8.setTransform(53,191.1);

	this.instance_9 = new lib.Bitmap40();
	this.instance_9.setTransform(8.6,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0,253.2,287);


(lib.平飞 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.飞翅膀("synched",0);
	this.instance.setTransform(146.7,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(1));

	// 图层 3
	this.instance_1 = new lib.毛飘动("synched",0);
	this.instance_1.setTransform(70.7,23.8,1,1,0,0,0,26.8,-23.8);

	this.instance_2 = new lib.尾巴飘动("synched",0);
	this.instance_2.setTransform(269.9,105.5,1,1,0,0,0,24.1,0);

	this.instance_3 = new lib.Bitmap5();
	this.instance_3.setTransform(4.1,149.8);

	this.instance_4 = new lib.眼睛1("synched",0);
	this.instance_4.setTransform(53.4,90.2,1,1,8.3,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},20).wait(1));

	// 图层 6
	this.instance_5 = new lib.Bitmap41();
	this.instance_5.setTransform(53.3,161.2);

	this.instance_6 = new lib.Bitmap40();
	this.instance_6.setTransform(11.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},20).wait(1));

	// 图层 5
	this.instance_7 = new lib.Bitmap2();
	this.instance_7.setTransform(204.8,207.4,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,0,290,245.4);


(lib.正站说话 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(126.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:0.47,scaleY:0.83,y:8.4},0).wait(2).to({scaleX:0.33,scaleY:1.07,y:-3.4},0).wait(2).to({scaleX:0.33,scaleY:0.89,skewY:180,x:130,y:5.2},0).wait(2).to({scaleX:0.45,scaleY:1.07,skewY:0,x:126.7,y:-3.4},0).wait(3).to({scaleX:1,scaleY:1,y:0},0).wait(3));

	// 图层 2
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(170.7,269,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(81,267.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(30));

	// AfterBreak
	this.instance_3 = new lib.Bitmap15();
	this.instance_3.setTransform(1.5,128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// 图层 7
	this.instance_4 = new lib.Bitmap15();
	this.instance_4.setTransform(254.6,128.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// 图层 5
	this.instance_5 = new lib.Bitmap4();
	this.instance_5.setTransform(102.9,143.8);

	this.instance_6 = new lib.Bitmap3();
	this.instance_6.setTransform(104.5,142.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(4).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(2));

	// 图层 3
	this.instance_7 = new lib.眨眼("synched",0,false);
	this.instance_7.setTransform(89,119.1,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.眨眼("synched",0,false);
	this.instance_8.setTransform(167,119.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(30));

	// 图层 4
	this.instance_9 = new lib.Bitmap39();
	this.instance_9.setTransform(53,191.1);

	this.instance_10 = new lib.Bitmap40();
	this.instance_10.setTransform(8.6,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0,253.2,287);


(lib.正站1 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(170.7,269,1,1,0,0,180);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(81,267.9);

	// AfterBreak
	this.instance_2 = new lib.Bitmap15();
	this.instance_2.setTransform(254.9,129.6,1,1,0,0,180);

	// 图层 4
	this.instance_3 = new lib.Bitmap15();
	this.instance_3.setTransform(1,133.2);

	// 图层 5
	this.instance_4 = new lib.Bitmap13();
	this.instance_4.setTransform(122.1,0);

	this.instance_5 = new lib.Bitmap3();
	this.instance_5.setTransform(107.1,146.3);

	this.instance_6 = new lib.眼睛向右("synched",0);
	this.instance_6.setTransform(167,115.3);

	this.instance_7 = new lib.眼睛向右("synched",0);
	this.instance_7.setTransform(89,115.3);

	// 图层 6
	this.instance_8 = new lib.Bitmap39();
	this.instance_8.setTransform(53,191.1);

	this.instance_9 = new lib.Bitmap40();
	this.instance_9.setTransform(8.6,35.6);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,253.9,287);


(lib.正站 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(126.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:0.47,scaleY:0.83,y:8.4},0).wait(2).to({scaleX:0.33,scaleY:1.07,y:-3.4},0).wait(2).to({scaleX:0.33,scaleY:0.89,skewY:180,x:130,y:5.2},0).wait(2).to({scaleX:0.45,scaleY:1.07,skewY:0,x:126.7,y:-3.4},0).wait(3).to({scaleX:1,scaleY:1,y:0},0).wait(3));

	// 图层 2
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(170.7,269,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(81,267.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(30));

	// AfterBreak
	this.instance_3 = new lib.Bitmap15();
	this.instance_3.setTransform(1.5,128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// 图层 7
	this.instance_4 = new lib.Bitmap15();
	this.instance_4.setTransform(254.6,128.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// 图层 3
	this.instance_5 = new lib.眨眼("synched",0,false);
	this.instance_5.setTransform(89,119.1,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.Bitmap4();
	this.instance_6.setTransform(102.9,143.8);

	this.instance_7 = new lib.眨眼("synched",0,false);
	this.instance_7.setTransform(167,119.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(30));

	// 图层 4
	this.instance_8 = new lib.Bitmap39();
	this.instance_8.setTransform(53,191.1);

	this.instance_9 = new lib.Bitmap40();
	this.instance_9.setTransform(8.6,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0,253.2,287);


(lib.正侧跳 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AfterBreak
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-53.1,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:37,x:-26.3,y:-65.1},0).wait(4).to({rotation:0,x:-53.1,y:-44.4},0).wait(4).to({y:-27.4},0).wait(1));

	// 图层 2
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(-168.1,7.5,1,1,0,-122,58);

	this.instance_2 = new lib.Bitmap11();
	this.instance_2.setTransform(-125.2,57.4,1,1,0,109,-71);

	this.instance_3 = new lib.Bitmap10();
	this.instance_3.setTransform(87,-77.6,1.342,1.039,0,-148.9,-165);

	this.instance_4 = new lib.Bitmap22();
	this.instance_4.setTransform(107.4,-8.9);

	this.instance_5 = new lib.眼睛1("synched",0);
	this.instance_5.setTransform(78.3,-40.8,1,1,0,-8.3,171.7,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{y:-40.8}},{t:this.instance_4,p:{y:-8.9}},{t:this.instance_3,p:{skewX:-148.9,skewY:-165,x:87,y:-77.6}},{t:this.instance_2,p:{y:57.4}},{t:this.instance_1,p:{y:7.5}}]}).to({state:[{t:this.instance_5,p:{y:-51.8}},{t:this.instance_4,p:{y:-19.9}},{t:this.instance_3,p:{skewX:-133.9,skewY:-150,x:85.5,y:-88.8}},{t:this.instance_2,p:{y:46.4}},{t:this.instance_1,p:{y:-3.5}}]},3).to({state:[{t:this.instance_5,p:{y:-57.8}},{t:this.instance_4,p:{y:-25.9}},{t:this.instance_3,p:{skewX:-148.9,skewY:-165,x:87,y:-94.6}},{t:this.instance_2,p:{y:40.4}},{t:this.instance_1,p:{y:-9.5}}]},4).to({state:[{t:this.instance_5,p:{y:-40.8}},{t:this.instance_4,p:{y:-8.9}},{t:this.instance_3,p:{skewX:-133.9,skewY:-150,x:85.3,y:-76.1}},{t:this.instance_2,p:{y:57.4}},{t:this.instance_1,p:{y:7.5}}]},4).wait(1));

	// 图层 3
	this.instance_6 = new lib.Bitmap43();
	this.instance_6.setTransform(-18.6,52.3);

	this.instance_7 = new lib.Bitmap40();
	this.instance_7.setTransform(-119.6,-120.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{y:-120.7}},{t:this.instance_6,p:{y:52.3}}]}).to({state:[{t:this.instance_7,p:{y:-131.7}},{t:this.instance_6,p:{y:41.3}}]},3).to({state:[{t:this.instance_7,p:{y:-137.7}},{t:this.instance_6,p:{y:35.3}}]},4).to({state:[{t:this.instance_7,p:{y:-120.7}},{t:this.instance_6,p:{y:52.3}}]},4).wait(1));

	// 图层 4
	this.instance_8 = new lib.Bitmap2();
	this.instance_8.setTransform(19.4,108,1,1,0,-6.5,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({y:95},0).wait(4).to({y:84},0).wait(4).to({y:108},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.1,-125.5,308.5,262.8);


(lib.正侧站 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(98.9,103.6);

	// 图层 3
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(-16.1,138.5,1,1,0,-122,58);

	this.instance_2 = new lib.Bitmap11();
	this.instance_2.setTransform(26.8,188.4,1,1,0,109,-71);

	this.instance_3 = new lib.Bitmap10();
	this.instance_3.setTransform(239,53.3,1.342,1.039,0,-148.9,-165);

	this.instance_4 = new lib.Bitmap22();
	this.instance_4.setTransform(259.4,122);

	this.instance_5 = new lib.眼睛1("synched",0);
	this.instance_5.setTransform(230.3,90.2,1,1,0,-8.3,171.7,0.1,0.1);

	// 图层 5
	this.instance_6 = new lib.Bitmap43();
	this.instance_6.setTransform(133.4,183.2);

	this.instance_7 = new lib.Bitmap40();
	this.instance_7.setTransform(32.4,10.2);

	// 图层 4
	this.instance_8 = new lib.Bitmap2();
	this.instance_8.setTransform(171.4,238.9,1,1,0,-6.5,173.5);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,5.5,308.5,262.8);


(lib.赞 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(126.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:0.47,scaleY:0.83,y:8.4},0).wait(2).to({scaleX:0.33,scaleY:1.07,y:-3.4},0).wait(2).to({scaleX:0.33,scaleY:0.89,skewY:180,x:130,y:5.2},0).wait(2).to({scaleX:0.45,scaleY:1.07,skewY:0,x:126.7,y:-3.4},0).wait(3).to({scaleX:1,scaleY:1,y:0},0).to({_off:true},2).wait(1));

	// 图层 2
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(170.7,269,1,1,0,0,180);

	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(81,267.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},29).wait(1));

	// 图层 8
	this.instance_3 = new lib.Bitmap16();
	this.instance_3.setTransform(162.4,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},29).wait(1));

	// AfterBreak
	this.instance_4 = new lib.Bitmap3();
	this.instance_4.setTransform(107.1,146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},29).wait(1));

	// 图层 3
	this.instance_5 = new lib.Bitmap15();
	this.instance_5.setTransform(1,133.2);

	this.instance_6 = new lib.Bitmap6();
	this.instance_6.setTransform(143.8,112);

	this.instance_7 = new lib.眼睛正("synched",0);
	this.instance_7.setTransform(89,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},29).wait(1));

	// 图层 4
	this.instance_8 = new lib.Bitmap39();
	this.instance_8.setTransform(53,191.1);

	this.instance_9 = new lib.Bitmap40();
	this.instance_9.setTransform(8.6,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).to({state:[]},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,255.4,287);


(lib.转身 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AfterBreak
	this.instance = new lib.正站1("synched",0);
	this.instance.setTransform(123.8,80.6,1,1,0,0,0,128.3,144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({x:116.2,y:109.2},2).wait(2).to({startPosition:0},0).to({x:123.8,y:80.6},2).to({_off:true},1).wait(16));

	// AfterBreak
	this.instance_1 = new lib.斜站("synched",0);
	this.instance_1.setTransform(-33.6,-19.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:-7.8},2).wait(2).to({startPosition:0},0).to({y:-41},2).to({_off:true},1).wait(7).to({_off:false,skewY:180,x:263.8,y:-19.9},0).to({y:-7.8},2).wait(2).to({startPosition:0},0).to({y:-41},2).to({_off:true},1).wait(9));

	// AfterBreak
	this.instance_2 = new lib.正侧站("synched",0);
	this.instance_2.setTransform(-35.9,-21.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:-9.2},2).wait(2).to({startPosition:0},0).to({y:-37.7},2).to({_off:true},1).wait(21).to({_off:false,skewY:180,x:266.1,y:-21.4},0).to({y:-9.2},2).wait(2).to({startPosition:0},0).to({y:-37.7},2).to({_off:true},1).wait(2));

	// AfterBreak
	this.instance_3 = new lib.背面("synched",0);
	this.instance_3.setTransform(127.8,119.4,1,1,0,0,0,134.4,164.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:103.6},1).to({y:87.9},1).to({_off:true},1).wait(35).to({_off:false,y:119.4},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-36.2,252.6,274.2);


(lib.转右 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AfterBreak
	this.instance = new lib.正站1("synched",0);
	this.instance.setTransform(116.2,109.2,1,1,0,0,0,128.3,144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({x:112.8,y:80.6},2).to({_off:true},1).wait(8));

	// AfterBreak
	this.instance_1 = new lib.斜站("synched",0);
	this.instance_1.setTransform(-37.9,-19.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:-7.8},2).wait(2).to({startPosition:0},0).to({y:-41},2).to({_off:true},1).wait(1));

	// AfterBreak
	this.instance_2 = new lib.正侧站("synched",0);
	this.instance_2.setTransform(-40.2,-21.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-34.8,253.9,287);


(lib.FatBirdMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{jump:195,good:0,stand:29,fly:61,fly2:70,turn:90,down:130,speak:140,turnright:171,turntojump:184});

	// timeline functions:
	this.frame_28 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_60 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_69 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_89 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_129 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_139 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_170 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_183 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		this.stop();
	}
	this.frame_208 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(32).call(this.frame_60).wait(9).call(this.frame_69).wait(20).call(this.frame_89).wait(40).call(this.frame_129).wait(10).call(this.frame_139).wait(31).call(this.frame_170).wait(13).call(this.frame_183).wait(25).call(this.frame_208).wait(1));

	// AfterBreak
	this.instance = new lib.赞("synched",0);
	this.instance.setTransform(-129.7,-140.8);

	this.instance_1 = new lib.正站("synched",0,false);
	this.instance_1.setTransform(-129.7,-140.8);

	this.instance_2 = new lib.展翅("synched",0,false);
	this.instance_2.setTransform(-129.7,-140.8);

	this.instance_3 = new lib.平飞("synched",0,false);
	this.instance_3.setTransform(-135.8,-114.1);

	this.instance_4 = new lib.转身("synched",0,false);
	this.instance_4.setTransform(0.2,0.1,1,1,0,0,0,115.3,105.2);

	this.instance_5 = new lib.进食("synched",0,false);
	this.instance_5.setTransform(-14.3,-35.4,1,1,0,0,0,115.3,105.2);

	this.instance_6 = new lib.正站说话("synched",0,false);
	this.instance_6.setTransform(-129.7,-140.8);

	this.instance_7 = new lib.转右("synched",0,false);
	this.instance_7.setTransform(0.2,0.1,1,1,0,0,0,115.3,105.2);

	this.instance_8 = new lib.正侧跳();
	this.instance_8.setTransform(-1.2,10.5,1,1,0,0,0,0,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},32).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_5}]},40).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_7}]},31).to({state:[{t:this.instance_7}]},13).to({state:[{t:this.instance_8}]},11).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.7,-140.8,255.4,287);


// stage content:



(lib.FatBird = function() {
	//this.initialize();

	// 图层 1
	this.bird_mc = new lib.FatBirdMC();
	this.bird_mc.setTransform(226.1,144.8,1,1,0,0,0,93.9,0);

	this.addChild(this.bird_mc);
}).prototype = p = new kisgame.KISContainer();p.k_ctor= lib.FatBird;
p.nominalBounds = new cjs.Rectangle(134.9,153,255.4,287);

})(FatBirdlib = FatBirdlib || {}, FatBirdimages = FatBirdimages || {}, kisgame = kisgame || {});var FatBirdlib, FatBirdimages, kisgame;;