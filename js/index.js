const d = document;

d.addEventListener('DOMContentLoaded', (e)=>{

	let $menu = d.querySelector('.navbar');


	d.addEventListener('click', e =>{
		if(e.target.matches('.fa-bars')){
			$menu.classList.toggle('active-nav');
		}else if(e.target.matches('.fa-chevron-up')){
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}else return false			
	})

	d.addEventListener('scroll',e =>{
		let scroll = d.documentElement.scrollTop;
		if(scroll) $menu.classList.remove('active-nav')	
	})


	d.addEventListener('scroll', e=>{
		let $row  = d.querySelector('.row-up');
		let $scroll = d.documentElement.scrollTop;

		 if($scroll > 200){
		 	$row.classList.remove('up-noActive')
			$row.classList.add('up-active')
		}else{
			$row.classList.remove('up-active')
			$row.classList.add('up-noActive')
		} 

	})

})