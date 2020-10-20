//link axios in page 
let tr = document.querySelector('#tr')
let btnexperience = document.querySelector('#btn-experience')

   function loadJobDate () {

    axios.get('http://localhost:3000/job/api')
    .then(response => {
      console.log(response.data);
         // to set the innerText of div
         let jobList = response.data;
         let html = '';
         jobList.forEach(job => {
             
             let htmlSegment = `
             <tr>
             <td>${job.position}</td>
             <td>${job.description}</td>
             <td>${job.company}</td> 
             <td><button>Apply</button></td>             
             </tr>       
             `;            
 
             html += htmlSegment;
         });
 
         //let container = document.querySelector('.container');
         //let tr = document.querySelector('.container');
         tr.innerHTML = html;
    }, error => {
      console.log(error);
    });

   }

   loadJobDate()
  