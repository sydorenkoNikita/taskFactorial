document.querySelector('.btn').onclick = () => {
	function factorial(n){
		if (n==1){
			return 1;
		}else {
			return n*factorial(n-1);
		}
	
	}
	let val = document.querySelector('.inpt').value;
	console.log(factorial(val))
}