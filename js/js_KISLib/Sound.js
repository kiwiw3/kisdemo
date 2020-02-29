/**
Sound
*/
function Sound(){
	this.callSuperMethod(Sound.super_p.k_ctor);
	if(!window.Audio){
		MCProxy.prototype.Constructor.apply(this,["bgsound"]);
		this.isAudio=false;
	}else{
		this.MCTarget = new window.Audio();
		this.MCTarget.proxy = this;
		this.isAudio=true;
		this.MCTarget.addEventListener("ended",this.onAudioEvent);
		this.MCTarget.addEventListener("play",this.onAudioEvent);
		this.MCTarget.addEventListener("pause",this.onAudioEvent);
		this.MCTarget.addEventListener("error",this.onAudioEvent);
	}
	if(this.isAudio){
		var obj = this.MCTarget;
		obj.preload=true;
		this.autoplay = obj.autoplay = true;
		obj.loop= false;
	}
};
KISU.extend(Sound,EventDispatcher);
var b = Sound.prototype;
b.onAudioEvent=function(e){
	var se = e.currentTarget.proxy;
	if(se){
		se.playing=false;
		var et = e.type;
		if(et=="ended"){
			et = "complete";
		}else if(et=="play"){
			se.playing=true;
		}else if(et=="error"){
			//为了兼容createjs sound
			et = "failed";
		}
		se.dispatchEvent(new KEvent(et));
	}
}
b.play=function(val){
	var obj = this.MCTarget;
	if(!this.isAudio)
	{
		if(this.parent==null)stage.addChild(this);
		obj.src = val;
	}
	else
	{
		obj.src = val;
		//必须调用，某些手机浏览器不支持自动播放
		obj.play();
		//if(this.parent==null)stage.addChild(this);
	}
	this.url = val;
}
b.setLoop=function(val){
	var obj = this.MCTarget;
	if(!this.isAudio)
	{
		obj.loop="infinite";
	}
	else
	{
		obj.loop = val;
	}
}
b.stop=function(){
	var obj = this.MCTarget;
	if(this.isAudio)
	{
		obj.pause();
	}
	obj.src = "";
}
b.pause=function(){
	var obj = this.MCTarget;
	if(!this.isAudio)
	{ 
	}
	else
	{
		obj.pause();
	}
}

Sound._soundlist = [];
Sound.create=function(){
	var s = new Sound();
	this._soundlist.push(s);
	return s;
}
Sound.play=function(u){
	var s = this.create();
	if(u){
		s.play(u);
	}
	return s;
}
Sound.stop=function(){
	var arr = this._soundlist;
	var l = arr.length;
	for(var i=0;i<l;i++){
		var im = arr[i];
		im.stop();
	}
}
Sound._globalSound = Sound.create();
Sound.globalPlay=function(u){
	this._globalSound.play(u);
}
Sound.globalStop=function(u){
	this._globalSound.stop();
}