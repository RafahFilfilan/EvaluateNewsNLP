function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    console.log(validURL(formText));
	if(validURL(formText)){

		console.log("::: Form Submitted :::")
		
		postData('http://localhost:8080/test', {url: formText})
		
		
		/*fetch('http://localhost:8080/test', {
			method: 'POST',
			headers: {'Content-Type': 'application/json',},
			body: JSON.stringify(formText)	
			
		})*/
		//fetch('http://localhost:8080/test')
		//.then(res => res.json())
		.then(function(res) {
			console.log(res);
			//document.getElementById('results').innerHTML = res.message;
			
			//DOING THIS AFTER SOLVING THE ISSUE.
			document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
			document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
			document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
			document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
					
		})
	} else {
		alert('Invalid URL');
	}
}


function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}



const postData = async (url='', data={}) => {

	console.log("URL:" + url);
	const request = await fetch (url, {
		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)		
	});
	console.log('test test new data: '); 
	
	//This goes to catch WHYYYY??!!
	try {
		const newData = await request.json();
		console.log(newData);
		return newData;
	}catch (error){
		console.log('error', error)
	}
}


export { handleSubmit }
