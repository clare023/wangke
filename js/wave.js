//吃果实圆圈  pool 检测是否有闲置物体 半径变大 颜色减弱
var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
	for(var i = 0;i < this.num; i++){
		this.alive[i] = false;
	}
}
waveObj.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	//半径增大
	for(var i = 0; i < this.num; i++){
		if(this.alive[i]){
			this.r[i] += deltaTime * 0.04;
			if(this.r[i] > 50){
				this.alive[i] = false;
				break;//停止绘制
			}
			var alpha = 1 - this.r[i] / 50;//[0,1] 反比
			
			//api
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI * 2);//圆圈
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(255,255,255,"+ alpha +")";
			ctx1.stroke();
			//draw
		}
	}
	ctx1.restore();
}
waveObj.prototype.born = function(x,y){
	for(var i = 0; i < this.num; i++){
		if(!this.alive[i]){
			this.alive[i] = true;
			this.r[i] = 10;
			this.x[i] = x;
			this.y[i] = y;
			//born 
			return;//只需要一个
		}
	}
}
