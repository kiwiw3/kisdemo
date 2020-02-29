(function (lib, img, cjs) {
var ss={};


var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1056,
	height: 636,
	fps: 24,
	color: "#006699",
	manifest: [
	{src:"sounds/1.mp3",id:"1.mp3"},
	{src:"sounds/2.mp3",id:"2.mp3"},
	{src:"sounds/3.mp3",id:"3.mp3"},
	{src:"sounds/4.mp3",id:"4.mp3"},
	{src:"sounds/5.mp3",id:"5.mp3"},
	{src:"sounds/6.mp3",id:"6.mp3"},
	{src:"sounds/7.mp3",id:"7.mp3"},
	{src:"sounds/8.mp3",id:"8.mp3"},
	{src:"sounds/9.mp3",id:"9.mp3"},
	{src:"sounds/10.mp3",id:"10.mp3"},
	{src:"sounds/s1.mp3",id:"s1.mp3"},
	{src:"sounds/s2.mp3",id:"s2.mp3"},
	{src:"sounds/s3.mp3",id:"s3.mp3"},
	{src:"sounds/s4.mp3",id:"s4.mp3"},
	{src:"sounds/s5.mp3",id:"s5.mp3"},
	{src:"sounds/s6.mp3",id:"s6.mp3"},
	{src:"sounds/s7.mp3",id:"s7.mp3"},
	{src:"sounds/s8.mp3",id:"s8.mp3"}
	]
};




lib.initSpriteSheets = function(basePath) {
	var arr = [["organ_atlas_",{"images": ["images/organ_atlas_.png"], "frames": [[969,0,654,299],[327,621,52,49],[316,672,52,49],[262,673,52,49],[273,621,52,49],[219,621,52,50],[208,680,52,51],[80,621,78,179],[0,621,78,179],[453,572,169,128],[424,672,22,40],[0,0,967,419],[624,595,22,40],[160,621,57,57],[601,470,89,88],[0,421,451,198],[453,421,146,149],[969,301,404,377],[601,421,176,47],[160,740,24,24],[160,680,46,58],[624,560,40,33],[448,621,3,197],[370,672,52,49],[381,621,52,49]]}]];
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
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["organ_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.曲谱背景 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,451,198);


(lib.曲谱 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,451,198);


(lib.kbtnbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-1,-1);

	this.instance_1 = new lib.Bitmap17();
	this.instance_1.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,78,179);


(lib.eye = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-20.2,-5.3);

	// 图层 1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-23.1,-29.2);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,-29.2,46,58);


(lib.clight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-28.4,-28.3);

	this.instance_1 = new lib.Bitmap22();
	this.instance_1.setTransform(-43,-42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-28.3,57,57);


(lib.butterfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-10.5,-12);

	this.instance_1 = new lib.Bitmap20();
	this.instance_1.setTransform(-10.5,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(3));

	// 图层 2
	this.instance_2 = new lib.Bitmap18();
	this.instance_2.setTransform(-84.3,-63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-63.8,169,128);


(lib.电池 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(-88,-23.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88,-23.2,176,47);


(lib.小灯 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap28();
	this.instance.setTransform(-12,-12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.皇冠 = function() {
	this.initialize();

	// 图层 4
	this.l2_mc = new lib.小灯();
	this.l2_mc.setTransform(417,29.2);

	this.l1_mc = new lib.小灯();
	this.l1_mc.setTransform(327.1,17.8);

	this.l0_mc = new lib.小灯();
	this.l0_mc.setTransform(237.9,29.2);

	// 图层 5
	this.instance = new lib.Bitmap1();

	// 图层 2
	this.qp_mc = new lib.曲谱();
	this.qp_mc.setTransform(102,85.7);

	// 图层 3
	this.bg_mc = new lib.曲谱背景();
	this.bg_mc.setTransform(103,92.7);

	this.addChild(this.bg_mc,this.qp_mc,this.instance,this.l0_mc,this.l1_mc,this.l2_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,654,299);


(lib.Kbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-25.8,121.8);

	this.instance_1 = new lib.Bitmap9();
	this.instance_1.setTransform(-25.8,121.8);

	this.instance_2 = new lib.Bitmap10();
	this.instance_2.setTransform(-25.8,121.8);

	this.instance_3 = new lib.Bitmap11();
	this.instance_3.setTransform(-25.8,121.8);

	this.instance_4 = new lib.Bitmap12();
	this.instance_4.setTransform(-25.8,121.8);

	this.instance_5 = new lib.Bitmap13();
	this.instance_5.setTransform(-25.8,121.8);

	this.instance_6 = new lib.Bitmap14();
	this.instance_6.setTransform(-25.8,121.8);

	this.instance_7 = new lib.Bitmap15();
	this.instance_7.setTransform(-25.8,121.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	// 图层 1
	this.bg_mc = new lib.kbtnbg();
	this.bg_mc.setTransform(0,88.9,1,1,0,0,0,37.9,88.9);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-1,78,179);


// stage content:
(lib.organ = function() {
	//this.initialize();

	// 图层 1
	this.d0_mc = new lib.电池();
	this.d0_mc.setTransform(200.3,357);

	this.d1_mc = new lib.电池();
	this.d1_mc.setTransform(195.7,415.8,1,1,180);

	this.instance = new lib.eye();
	this.instance.setTransform(228,276.8,1.18,1.18);

	this.instance_1 = new lib.eye();
	this.instance_1.setTransform(161.3,277.4,1.18,1.18);

	// 图层 3
	this.instance_2 = new lib.Bitmap25();
	this.instance_2.setTransform(0,176.8);

	// 花
	this.s_mc = new lib.clight();
	this.s_mc.setTransform(879.8,314);

	this.instance_3 = new lib.Bitmap24();
	this.instance_3.setTransform(804.1,235.1);

	// 皇冠
	this.crown_mc = new lib.皇冠();
	this.crown_mc.setTransform(573.4,146.5,1,1,0,0,0,327,146.5);

	// 蝴蝶
	this.l3_mc = new lib.butterfly();
	this.l3_mc.setTransform(696.7,406.6,0.48,0.528,45);

	this.l7_mc = new lib.butterfly();
	this.l7_mc.setTransform(993,382.8,0.48,0.528,-45);

	this.l6_mc = new lib.butterfly();
	this.l6_mc.setTransform(930.2,447,0.481,0.528,-16,0,0,4.6,-14.2);

	this.l5_mc = new lib.butterfly();
	this.l5_mc.setTransform(808.7,419.7,0.481,0.528,44);

	this.l4_mc = new lib.butterfly();
	this.l4_mc.setTransform(737.1,337.6,0.481,0.528,31.2);

	this.l2_mc = new lib.butterfly();
	this.l2_mc.setTransform(587.4,433.2,0.481,0.528,44);

	this.l1_mc = new lib.butterfly();
	this.l1_mc.setTransform(526.8,348.5,0.481,0.528,44);

	this.l0_mc = new lib.butterfly();
	this.l0_mc.setTransform(456.7,411.9,0.481,0.528,44);

	// 外壳
	this.instance_4 = new lib.Bitmap2();
	this.instance_4.setTransform(85.5,214.9);

	// 音键
	this.k7_mc = new lib.Kbtn();
	this.k7_mc.setTransform(866.5,444.5);

	this.k6_mc = new lib.Kbtn();
	this.k6_mc.setTransform(789.2,444.5);

	this.k5_mc = new lib.Kbtn();
	this.k5_mc.setTransform(712.2,444.5);

	this.k4_mc = new lib.Kbtn();
	this.k4_mc.setTransform(635.1,444.5);

	this.k3_mc = new lib.Kbtn();
	this.k3_mc.setTransform(558.1,444.5);

	this.k2_mc = new lib.Kbtn();
	this.k2_mc.setTransform(481,444.5);

	this.k1_mc = new lib.Kbtn();
	this.k1_mc.setTransform(404,444.5);

	this.k0_mc = new lib.Kbtn();
	this.k0_mc.setTransform(326.9,444.5);

	// 背壳
	this.instance_5 = new lib.Bitmap7();
	this.instance_5.setTransform(278.1,433.1,216.667,1);

	this.addChild(this.instance_5,this.k0_mc,this.k1_mc,this.k2_mc,this.k3_mc,this.k4_mc,this.k5_mc,this.k6_mc,this.k7_mc,this.instance_4,this.l0_mc,this.l1_mc,this.l2_mc,this.l4_mc,this.l5_mc,this.l6_mc,this.l7_mc,this.l3_mc,this.crown_mc,this.instance_3,this.s_mc,this.instance_2,this.instance_1,this.instance,this.d1_mc,this.d0_mc);
}).prototype = p = new kisgame.KISContainer();p.k_ctor= lib.organ;
p.nominalBounds = new cjs.Rectangle(528,318,1052.5,633.9);

})(organlib = organlib || {}, organimages = organimages || {}, kisgame = kisgame || {});var organlib, organimages, kisgame;;