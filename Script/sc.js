window.addEventListener('scroll',()=>{
	let scr = scrollY;
	if(scr >103){
		document.getElementById('cd').style.scale="1";
		document.getElementById('ms').style.scale="1";
	}else{
		document.getElementById('cd').style.scale="0";
     	document.getElementById('ms').style.scale="0";
	next()	
	}
	function next(){
		window.addEventListener('scroll',(svc)=>{
			svc = window.scrollY;
			if (svc >700){
		document.getElementById('service').style.scale="1";
			}else{
		document.getElementById('service').style.scale="0";
		card()
			}
		})
	}
})

function card(){
	window.addEventListener('scroll',()=>{
		let msf = scrollY;
		if (msf >850){
		document.getElementById('sd_cd').style.scale="1";
		}else{
		document.getElementById('sd_cd').style.scale="0";
		}
	})
}