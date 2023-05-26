let startTag = document.querySelector(".starter .start")

class LeftRight{
	 
	
	constructor(){
		this.leftTag = document.querySelector(".left")
		this.rightTag = document.querySelector(".right")
		this.resultatTag = document.querySelector(".resultat")
		this.idInterval;

		this.update()
	}
	start(){
	}
	update(){
	  let left = Math.round(Math.random()*8) + 1;
	  let right = Math.round(Math.random()*8) + 1;
	  
	  this.resultatTag.innerText = ""

	  this.leftTag.innerText = left;
	  this.rightTag.innerText = right;

	  this.showResultat(left*right);
	}
	repeter(){
		startTag.innerText = ""
		let self = this;
		self.idInterval = setInterval(function(){self.update();}, 6000)
		startTag.innerText = "Pause"
	}
	showResultat(valeur){
		let self = this;
		setTimeout(function(){
			self.resultatTag.innerText = valeur;
		}, 5000)
	}
	effacerIntervale(){
		clearInterval(this.idInterval)
	}
}

let objet1 = new LeftRight();

startTag.addEventListener("click", function(){
	if(startTag.innerText !== "Pause"){
		objet1.repeter();	
	}else{
		startTag.innerText = "";
		objet1.effacerIntervale();
		startTag.innerText = "Lancer"
	}
})
