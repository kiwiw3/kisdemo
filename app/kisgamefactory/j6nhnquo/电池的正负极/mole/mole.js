(function (lib, img, cjs) {
var ss={};


var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#006699",
	manifest: [
	{src:"sounds/s0.mp3",id:"s0.mp3"},
	{src:"sounds/s1.mp3",id:"s1.mp3"},
	{src:"sounds/s2.mp3",id:"s2.mp3"},
	{src:"sounds/s3.mp3",id:"s3.mp3"},
	{src:"sounds/s4.mp3",id:"s4.mp3"},
	{src:"sounds/s5.mp3",id:"s5.mp3"},
	{src:"sounds/s6.mp3",id:"s6.mp3"},
	{src:"sounds/s7.mp3",id:"s7.mp3"},
	{src:"sounds/s8.mp3",id:"s8.mp3"},
	{src:"sounds/s9.mp3",id:"s9.mp3"},
	{src:"sounds/s10.mp3",id:"s10.mp3"},
	{src:"sounds/e0.mp3",id:"e0.mp3"},
	{src:"sounds/e1.mp3",id:"e1.mp3"},
	{src:"sounds/e2.mp3",id:"e2.mp3"},
	{src:"sounds/e3.mp3",id:"e3.mp3"},
	{src:"sounds/e4.mp3",id:"e4.mp3"},
	{src:"sounds/e5.mp3",id:"e5.mp3"},
	{src:"sounds/enter.wav",id:"enter.wav"}
	]
};




lib.initSpriteSheets = function(basePath) {
	var arr = [["mole_atlas_",{"images": ["images/mole_atlas_.png"], "frames": [[1088,766,306,164],[1335,509,117,39],[1838,670,63,63],[1866,242,63,63],[0,679,324,289],[2024,42,21,9],[1991,0,40,40],[1991,81,27,27],[1986,200,27,27],[2015,200,27,27],[1903,670,27,27],[1047,932,270,98],[2010,754,27,27],[1580,766,27,27],[667,679,419,136],[0,0,1089,677],[1091,558,532,206],[1460,322,473,234],[1866,125,118,115],[1091,0,367,391],[1935,445,99,67],[1935,242,91,109],[1625,558,211,513],[1954,654,74,64],[1515,787,61,21],[1091,538,89,11],[1510,766,68,19],[1091,393,242,143],[1903,699,29,15],[2033,15,13,10],[1954,593,81,59],[1954,514,83,77],[667,911,378,96],[1986,125,59,73],[1182,550,153,4],[1866,0,123,123],[1335,393,114,114],[1935,353,92,90],[1838,558,114,110],[1460,0,404,320],[1991,42,31,37],[326,679,339,274],[2033,0,11,13],[1396,795,117,19],[1903,720,117,32],[1838,754,112,32],[1396,766,112,27],[1952,754,56,49],[667,817,419,92]]}]];
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
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmapb13 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmapb41 = function() {
	this.spriteSheet = ss["mole_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.石锤 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-271.5,-231.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-271.5,-231.5,324,289);


(lib.泪1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap35();
	this.instance.setTransform(-14.2,-7.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.2,-7.4,29,15);


(lib.毛3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap33();
	this.instance.setTransform(-68.4,-9.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-9.4,68,19);


(lib.毛2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap32();
	this.instance.setTransform(-89.1,-10.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.1,-10.8,89,11);


(lib.毛1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap31();
	this.instance.setTransform(-61,-21.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-21.1,61,21);


(lib.加号 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-31.7,-31.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-31.7,63,63);


(lib.减号 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-31.7,-31.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-31.7,63,63);


(lib.牙齿 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap30();
	this.instance.setTransform(-26.1,0,0.708,0.708);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.1,0,52.4,45.3);


(lib.酒窝 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-5.3,-6.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-6.6,11,13);


(lib.光条 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap45();
	this.instance.setTransform(-313.5,-274.5,1.675,1.675);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-313.5,-274.5,676.6,535.9);


(lib.正极动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-151.5,-114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-114.8,306,164);


(lib.眼1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap37();
	this.instance.setTransform(-40.4,-22.4,0.598,0.598);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.4,-22.4,48.4,35.3);


(lib.星星 = function() {
	this.initialize();

	// 图层 8
	this.instance = new lib.Bitmap43();
	this.instance.setTransform(-46,-44.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,-44.6,92,90);


(lib.重新按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层 1
	this.instance = new lib.Bitmap41();
	this.instance.setTransform(-42.2,-42.2,0.689,0.689);

	this.instance_1 = new lib.Bitmap42();
	this.instance_1.setTransform(-40.7,-40.7,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-42.2,84.8,84.8);


(lib.灯 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// 图层 3
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-9.7,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// 图层 2
	this.instance_1 = new lib.Bitmap16();
	this.instance_1.setTransform(-13.5,-13.5);

	this.instance_2 = new lib.Bitmap17();
	this.instance_2.setTransform(-13.5,-13.5);

	this.instance_3 = new lib.Bitmap18();
	this.instance_3.setTransform(-13.5,-13.5);

	this.instance_4 = new lib.Bitmap19();
	this.instance_4.setTransform(-13.5,-13.5);

	this.instance_5 = new lib.Bitmap20();
	this.instance_5.setTransform(-13.5,-13.5);

	this.instance_6 = new lib.Bitmap21();
	this.instance_6.setTransform(-13.5,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).wait(2));

	// 图层 1
	this.instance_7 = new lib.Bitmap15();
	this.instance_7.setTransform(-19.9,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,40,40);


(lib.赞 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.Bitmapb13();
	this.instance.setTransform(126.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:0.47,scaleY:0.83,y:8.4},0).wait(2).to({scaleX:0.33,scaleY:1.07,y:-3.4},0).wait(2).to({scaleX:0.33,scaleY:0.89,skewY:180,x:130,y:5.2},0).wait(2).to({scaleX:0.45,scaleY:1.07,skewY:0,x:126.7,y:-3.4},0).wait(3).to({scaleX:1,scaleY:1,y:0},0).wait(3));

	// 图层 2
	this.instance_1 = new lib.Bitmap47();
	this.instance_1.setTransform(-43.6,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,0,339,287.2);


(lib.眼 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(-29,-28.1,0.49,0.49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-28.1,57.8,56.3);


(lib.鼻子 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap28();
	this.instance.setTransform(-27.6,-18.6,0.558,0.558);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.6,-18.6,55.3,37.4);


(lib.头包 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap46();
	this.instance.setTransform(-15.1,-37.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-37.2,31,37);


(lib.水滴 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap36();
	this.instance.setTransform(-6.6,-4.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-4.9,13,10);


(lib.耳1 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap38();
	this.instance.setTransform(-18.1,-11.5,0.54,0.54);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.1,-11.5,44.8,41.6);


(lib.耳 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap29();
	this.instance.setTransform(-26.1,-31.1,0.572,0.572);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.1,-31.1,52,62.3);


(lib.鼠口 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap34();
	this.instance.setTransform(-74.4,-43.8,0.614,0.614);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.4,-43.8,148.5,87.8);


(lib.鼠脸 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap27();
	this.instance.setTransform(-115.7,-123.1,0.629,0.629);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.7,-123.1,230.9,246);


(lib.负极动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-133.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-28,270,98);


(lib.发光条 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.光条("synched",0);
	this.instance.setTransform(-2.2,-0.9,0.995,0.995,0,0,0,-232.2,165.1);

	this.instance_1 = new lib.光条("synched",0);
	this.instance_1.setTransform(-2.3,-0.9,0.995,0.995,-45.1,0,0,-232.3,165);

	this.instance_2 = new lib.光条("synched",0);
	this.instance_2.setTransform(-2.3,-0.8,0.997,0.997,-90,0,0,-232.3,165);

	this.instance_3 = new lib.光条("synched",0);
	this.instance_3.setTransform(-2.2,-0.9,0.997,0.997,-135.1,0,0,-232.3,165);

	this.instance_4 = new lib.光条("synched",0);
	this.instance_4.setTransform(-2.2,-0.9,0.998,0.998,180,0,0,-232.3,165);

	this.instance_5 = new lib.光条("synched",0);
	this.instance_5.setTransform(-2.2,-1,0.998,0.998,134.9,0,0,-232.2,165);

	this.instance_6 = new lib.光条("synched",0);
	this.instance_6.setTransform(-2.3,-1,1,1,90,0,0,-232.2,165);

	this.instance_7 = new lib.光条("synched",0);
	this.instance_7.setTransform(-2.3,-0.9,1,1,45,0,0,-232.2,165);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-731.7,-729.1,1461.2,1458.9);


(lib.电池 = function() {
	this.initialize();

	// 图层 3
	this.f_mc = new lib.减号();
	this.f_mc.setTransform(-97.5,-0.8,0.444,0.444,0,0,0,-0.3,-0.3);

	this.z_mc = new lib.加号();
	this.z_mc.setTransform(80.5,-0.8,0.444,0.444,0,0,0,-0.3,-0.3);

	// 图层 2
	this.instance = new lib.Bitmap39();
	this.instance.setTransform(-118.6,-30.2,0.629,0.629);

	this.addChild(this.instance,this.z_mc,this.f_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.6,-30.2,237.8,60.4);


(lib.嘴 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.酒窝("synched",0);
	this.instance.setTransform(-59.1,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-60.2,y:4.4},0).wait(5).to({x:-62.3,y:-6.8},0).wait(2));

	// 图层 3
	this.instance_1 = new lib.酒窝("synched",0);
	this.instance_1.setTransform(58,-6.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:60.4,y:4.4},0).wait(5).to({x:61.2,y:-6.8},0).wait(2));

	// 图层 1
	this.instance_2 = new lib.Bitmap6();
	this.instance_2.setTransform(-59.2,-6.6);

	this.instance_3 = new lib.Bitmap7();
	this.instance_3.setTransform(-59.2,-6.6);

	this.instance_4 = new lib.Bitmap8();
	this.instance_4.setTransform(-56.5,0.2);

	this.instance_5 = new lib.Bitmap9();
	this.instance_5.setTransform(-56.5,11);

	this.instance_6 = new lib.Bitmap10();
	this.instance_6.setTransform(-59.2,-6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-12.8,127.9,25.2);


(lib.地鼠哭 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.头包();
	this.instance.setTransform(-1.6,-128.4,1,0.402);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,x:-2.2,y:-90.8},4).wait(1));

	// 耳朵
	this.instance_1 = new lib.耳("synched",0);
	this.instance_1.setTransform(64.8,-122,0.913,0.913,0,0,180);

	this.instance_2 = new lib.耳1("synched",0);
	this.instance_2.setTransform(66.3,-108.7,0.913,0.913,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:-122}}]}).to({state:[{t:this.instance_1,p:{y:-120}}]},1).to({state:[{t:this.instance_2,p:{x:66.3,y:-108.7}}]},1).to({state:[{t:this.instance_2,p:{x:63.3,y:-101.7}}]},1).to({state:[{t:this.instance_2,p:{x:69.6,y:-85.9}}]},1).wait(1));

	// 耳朵
	this.instance_3 = new lib.耳("synched",0);
	this.instance_3.setTransform(-68.4,-122,0.913,0.913);

	this.instance_4 = new lib.耳1("synched",0);
	this.instance_4.setTransform(-68.3,-106.8,0.913,0.913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{y:-122}}]}).to({state:[{t:this.instance_3,p:{y:-115}}]},1).to({state:[{t:this.instance_4,p:{x:-68.3,y:-106.8}}]},1).to({state:[{t:this.instance_4,p:{x:-65.3,y:-99.8}}]},1).to({state:[{t:this.instance_4,p:{x:-71.8,y:-84.1}}]},1).wait(1));

	// 眼
	this.instance_5 = new lib.眼("synched",0);
	this.instance_5.setTransform(40,-59.3,0.913,0.913,0,0,180);

	this.instance_6 = new lib.眼1("synched",0);
	this.instance_6.setTransform(20.2,-27.2,0.913,0.913,0,0,180,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,regY:27.7,scaleX:0.86,scaleY:0.25,x:32.7,y:-35},2).to({_off:true},2).wait(1));

	// 眼
	this.instance_7 = new lib.眼("synched",0);
	this.instance_7.setTransform(-35.7,-59.3,0.913,0.913);

	this.instance_8 = new lib.眼1("synched",0);
	this.instance_8.setTransform(-25.4,-27.2,0.913,0.913,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-0.1,regY:27.7,scaleX:0.86,scaleY:0.25,x:-38,y:-35},2).to({_off:true},2).wait(1));

	// 泪
	this.instance_9 = new lib.泪1("synched",0);
	this.instance_9.setTransform(-52.7,-59.9,0.561,0.158);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,x:-63.9,y:-35.9},2).wait(2).to({x:-57.5,y:-20.8},0).wait(1));

	// 泪
	this.instance_10 = new lib.水滴("synched",0);
	this.instance_10.setTransform(55.6,-63.4,0.561,0.158,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.78,scaleY:0.58,x:58.3,y:-36.4},2).to({scaleX:1,scaleY:1,x:70.5,y:-18.2},2).wait(1));

	// 鼻子
	this.instance_11 = new lib.鼻子("synched",0);
	this.instance_11.setTransform(-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:10},4).wait(1));

	// 牙齿
	this.instance_12 = new lib.牙齿("synched",0);
	this.instance_12.setTransform(-0.1,17.7,1,1,0,0,0,0,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:27.4},4).wait(1));

	// 毛3
	this.instance_13 = new lib.毛3("synched",0);
	this.instance_13.setTransform(14.9,-5.4,1,1,0,20.3,-159.7,0.1,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({skewX:56,skewY:-124,x:18.3,y:-5},4).wait(1));

	// 毛2
	this.instance_14 = new lib.毛2("synched",0);
	this.instance_14.setTransform(20.5,-1.3,1,1,0,20.3,-159.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({skewX:56,skewY:-124,y:1.6},4).wait(1));

	// 毛1
	this.instance_15 = new lib.毛1("synched",0);
	this.instance_15.setTransform(25.2,-4.8,1,1,0,20.3,-159.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({skewX:56,skewY:-124,x:26.3,y:1.5},4).wait(1));

	// 毛3
	this.instance_16 = new lib.毛3("synched",0);
	this.instance_16.setTransform(-16.4,-5.1,1,1,-22,0,0,0,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:-0.1,rotation:-61.5,x:-21.6,y:-2.5},4).wait(1));

	// 毛2
	this.instance_17 = new lib.毛2("synched",0);
	this.instance_17.setTransform(-21.8,-0.9,1,1,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({rotation:-61.5,x:-23,y:4.2},4).wait(1));

	// 毛1
	this.instance_18 = new lib.毛1("synched",0);
	this.instance_18.setTransform(-26.6,-4.2,1,1,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({rotation:-61.5,x:-28.8,y:4.6},4).wait(1));

	// 图层 1
	this.instance_19 = new lib.鼠脸("synched",0);
	this.instance_19.setTransform(1.9,106.8,1,1,0,0,0,0,122.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleY:0.85},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.8,-150.4,230.9,257.5);


(lib.地鼠笑 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 耳朵
	this.instance = new lib.耳("synched",0);
	this.instance.setTransform(64.8,-122,0.913,0.913,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 耳朵
	this.instance_1 = new lib.耳("synched",0);
	this.instance_1.setTransform(-68.4,-122,0.913,0.913);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// 眼
	this.instance_2 = new lib.眼("synched",0);
	this.instance_2.setTransform(40,-59.3,0.913,0.913,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// 眼
	this.instance_3 = new lib.眼("synched",0);
	this.instance_3.setTransform(-35.7,-59.3,0.913,0.913);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.05,y:-59.4},3).wait(3).to({startPosition:0},0).to({scaleY:0.91,y:-59.3},3).wait(11));

	// 鼻子
	this.instance_4 = new lib.鼻子("synched",0);
	this.instance_4.setTransform(-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// 牙齿
	this.instance_5 = new lib.牙齿("synched",0);
	this.instance_5.setTransform(-0.1,17.7,1,1,0,0,0,0,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// 毛3
	this.instance_6 = new lib.毛3("synched",0);
	this.instance_6.setTransform(22.6,0.7,1,1,0,0,180,0,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({startPosition:0},0).to({skewX:8.5,skewY:188.5},3).to({skewX:0.2,skewY:180.2},3).to({regY:-9.2,skewX:6.5,skewY:186.5,y:0.9},3).wait(7));

	// 毛2
	this.instance_7 = new lib.毛2("synched",0);
	this.instance_7.setTransform(29.3,2.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({startPosition:0},0).to({skewX:8,skewY:188},4).to({skewX:1.2,skewY:181.2},2).wait(3).to({skewX:1.2},0).to({skewX:8,skewY:188},2).to({skewX:0,skewY:180},4).wait(3));

	// 毛1
	this.instance_8 = new lib.毛1("synched",0);
	this.instance_8.setTransform(32.4,-2.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:-6.5,skewY:173.5},4).to({skewX:6.5,skewY:186.5},2).wait(7).to({startPosition:0},0).to({skewX:-6.5,skewY:173.5},2).to({skewX:0,skewY:180},4).wait(1));

	// 毛3
	this.instance_9 = new lib.毛3("synched",0);
	this.instance_9.setTransform(-18.7,0.7,1,1,0,0,0,0,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({startPosition:0},0).to({rotation:-8.5},3).to({rotation:-0.2},3).to({regY:-9.3,rotation:-6.5,y:0.8},3).wait(7));

	// 毛2
	this.instance_10 = new lib.毛2("synched",0);
	this.instance_10.setTransform(-25.3,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({startPosition:0},0).to({rotation:-8},4).to({rotation:-1.2},2).wait(3).to({rotation:-1.2},0).to({rotation:-8},2).to({rotation:0},4).wait(3));

	// 毛1
	this.instance_11 = new lib.毛1("synched",0);
	this.instance_11.setTransform(-28.5,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:6.5},4).to({rotation:-6.5},2).wait(7).to({startPosition:0},0).to({rotation:6.5},2).to({rotation:0},4).wait(1));

	// 图层 2
	this.instance_12 = new lib.Bitmap40();
	this.instance_12.setTransform(-74,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},2).wait(16).to({_off:false},0).wait(2));

	// 图层 7
	this.instance_13 = new lib.鼠口("synched",0);
	this.instance_13.setTransform(2.4,16.7,1,0.025);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({scaleY:1,y:33.5},3).to({scaleY:0.84,y:25.9},2).to({scaleY:0.71,y:33.5},2).to({scaleY:1,y:25.1},2).to({y:33.5},2).to({y:29.3},2).to({scaleY:0.03,y:16.7},4).to({_off:true},1).wait(1));

	// 图层 1
	this.instance_14 = new lib.鼠脸("synched",0);
	this.instance_14.setTransform(1.9,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-150.4,232.8,257.5);


(lib.地鼠 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{smile:1,hit:30});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		if (!this.paused && !et.defaultPrevented) {
			this.gotoAndPlay(this.getCurrentLabel());
		} else {
			this.stop();
		}
	}
	this.frame_35 = function() {
		var et = new kisgame.Event("complete", false, true);
		this.dispatchEvent(et);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(6).call(this.frame_35).wait(1));

	// 图层 1
	this.instance = new lib.地鼠笑("synched",0,false);
	this.instance.setTransform(114.5,150.5);

	this.instance_1 = new lib.地鼠哭("synched",0,false);
	this.instance_1.setTransform(114.5,150.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},30).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,232.8,257.5);


(lib.大电池 = function() {
	this.initialize();

	// 图层 4
	this.t_mc = new lib.正极动画();
	this.t_mc.setTransform(-3.5,-234.7,1,1,0,0,0,0,-34.3);

	// 图层 5
	this.b_mc = new lib.负极动画();
	this.b_mc.setTransform(-3.5,225.1,1,1,0,0,0,0,19.2);

	// 图层 2
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(66.1,-116.2,1,1,0,0,180);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-65.5,-116.2);

	this.m_mc = new lib.嘴();
	this.m_mc.setTransform(0,-9.1);

	// 图层 1
	this.f_mc = new lib.减号();
	this.f_mc.setTransform(-0.9,198.5);

	this.z_mc = new lib.加号();
	this.z_mc.setTransform(-0.9,-171);

	// 图层 3
	this.instance_2 = new lib.Bitmap3();
	this.instance_2.setTransform(-109,-268.9);

	this.addChild(this.instance_2,this.z_mc,this.f_mc,this.m_mc,this.instance_1,this.instance,this.b_mc,this.t_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155,-315.2,306,591.1);


(lib.锤打 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// 图层 1
	this.instance = new lib.石锤();
	this.instance.setTransform(143.9,5.4,0.66,0.66,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.7,-226.5,272.7,281);


(lib.洞 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.Bitmap24();
	this.instance.setTransform(-153.1,-29.8,0.575,0.575);

	// 图层 3
	this.rat_mc = new lib.地鼠();
	this.rat_mc.setTransform(-116.7,-181.3);

	// 图层 1
	this.instance_1 = new lib.Bitmap25();
	this.instance_1.setTransform(-135.9,-87,0.575,0.575);

	this.addChild(this.instance_1,this.rat_mc,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-153.1,-181.3,305.9,269.9);


(lib.胜利画面 = function() {
	this.initialize();

	// 图层 7
	this.s2_mc = new lib.星星();
	this.s2_mc.setTransform(193.5,-33.3);

	this.s1_mc = new lib.星星();
	this.s1_mc.setTransform(-11,-143);

	this.s0_mc = new lib.星星();
	this.s0_mc.setTransform(-207.5,-31.1,1,1,0,0,0,-0.1,0.2);

	// 图层 8
	this.instance = new lib.Bitmap44();
	this.instance.setTransform(139.4,-86.6);

	this.instance_1 = new lib.Bitmap44();
	this.instance_1.setTransform(-65.7,-196.6);

	this.instance_2 = new lib.Bitmap44();
	this.instance_2.setTransform(-262,-84.6);

	// 图层 5
	this.bird_mc = new lib.赞();
	this.bird_mc.setTransform(-91,-64,0.7,0.7);

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.839)").s().p("An8BuIgVgFQi+gtABg8QAAg/DSguQDTgtEpAAQEqAADSAtQDUAuAAA/QAAA8i9AtIgXAFQjSAtkqAAQkpAAjTgtg");
	this.shape.setTransform(-3.8,133.8);

	// 图层 2
	this.instance_3 = new lib.Bitmapb41();
	this.instance_3.setTransform(-205.9,150.7);

	// 图层 6
	this.instance_4 = new lib.Bitmap22();
	this.instance_4.setTransform(-205.9,105.7);

	// 图层 3
	this.bg_mc = new lib.发光条();

	this.addChild(this.bg_mc,this.instance_4,this.instance_3,this.shape,this.bird_mc,this.instance_2,this.instance_1,this.instance,this.s0_mc,this.s1_mc,this.s2_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-731.7,-729.1,1461.2,1458.8);


(lib.地鼠机 = function() {
	this.initialize();

	// 图层 3
	this.reset_mc = new lib.重新按钮();
	this.reset_mc.setTransform(903.4,42.2);

	this.d1_mc = new lib.电池();
	this.d1_mc.setTransform(526.9,42.3);

	this.d0_mc = new lib.电池();
	this.d0_mc.setTransform(294.4,41.8);

	// 图层 5
	this.item7_mc = new lib.洞();
	this.item7_mc.setTransform(910.3,422.7,0.751,0.751);

	this.item6_mc = new lib.洞();
	this.item6_mc.setTransform(667.3,422.7,0.751,0.751);

	this.item5_mc = new lib.洞();
	this.item5_mc.setTransform(424.4,422.7,0.751,0.751);

	this.item4_mc = new lib.洞();
	this.item4_mc.setTransform(181.5,422.7,0.751,0.751);

	this.item3_mc = new lib.洞();
	this.item3_mc.setTransform(889.5,260.9,0.661,0.661);

	this.item2_mc = new lib.洞();
	this.item2_mc.setTransform(660.3,260.9,0.661,0.661);

	this.item1_mc = new lib.洞();
	this.item1_mc.setTransform(431.1,260.9,0.661,0.661);

	this.item0_mc = new lib.洞();
	this.item0_mc.setTransform(201.9,260.9,0.661,0.661);

	// 图层 2
	this.l7_mc = new lib.灯();
	this.l7_mc.setTransform(887.1,121.8);

	this.l6_mc = new lib.灯();
	this.l6_mc.setTransform(781.1,121.8);

	this.l5_mc = new lib.灯();
	this.l5_mc.setTransform(675.4,121.8);

	this.l4_mc = new lib.灯();
	this.l4_mc.setTransform(569.7,121.8);

	this.l3_mc = new lib.灯();
	this.l3_mc.setTransform(464,121.8);

	this.l2_mc = new lib.灯();
	this.l2_mc.setTransform(358.3,121.8);

	this.l1_mc = new lib.灯();
	this.l1_mc.setTransform(252.6,121.8);

	this.l0_mc = new lib.灯();
	this.l0_mc.setTransform(146.9,121.8);

	// 图层 11
	this.instance = new lib.Bitmap23();
	this.instance.setTransform(0,-44.3);

	this.addChild(this.instance,this.l0_mc,this.l1_mc,this.l2_mc,this.l3_mc,this.l4_mc,this.l5_mc,this.l6_mc,this.l7_mc,this.item0_mc,this.item1_mc,this.item2_mc,this.item3_mc,this.item4_mc,this.item5_mc,this.item6_mc,this.item7_mc,this.d0_mc,this.d1_mc,this.reset_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-44.3,1089,677);


(lib.打地鼠 = function() {
	this.initialize();

	// chui_mc
	this.chui_mc = new lib.锤打();
	this.chui_mc.setTransform(87.4,260.9,1,1,0,0,0,21.4,0);

	// 电池
	this.d1_mc = new lib.电池();
	this.d1_mc.setTransform(162.7,648.2);

	this.d0_mc = new lib.电池();
	this.d0_mc.setTransform(456.5,648.2);

	// 地鼠机
	this.ji_mc = new lib.地鼠机();
	this.ji_mc.setTransform(490.8,385.2,1,1,0,0,0,446.7,340.8);

	this.addChild(this.ji_mc,this.d0_mc,this.d1_mc,this.chui_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(44,0,1089,678.4);


// stage content:
(lib.mole = function() {
	//this.initialize();

	// 胜利
	this.v_mc = new lib.胜利画面();
	this.v_mc.setTransform(661.2,327.2);

	// 图层 1
	this.bigdc_mc = new lib.大电池();
	this.bigdc_mc.setTransform(633.1,372.5,1,1,0,0,0,-3.6,-12.4);

	// 地鼠机
	this.mole_mc = new lib.打地鼠();
	this.mole_mc.setTransform(48.7,16.5);

	this.addChild(this.mole_mc,this.bigdc_mc,this.v_mc);
}).prototype = p = new kisgame.KISContainer();p.k_ctor= lib.mole;
p.nominalBounds = new cjs.Rectangle(569.4,-42,1461.1,1458.8);

})(molelib = molelib || {}, moleimages = moleimages || {}, kisgame = kisgame || {});var molelib, moleimages, kisgame;;