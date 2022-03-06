console.log("Heyy");
const searchQForm=document.querySelector("#form");
//const searchQForm=document.querySelector("ul");
searchQForm.addEventListener('submit',function(e){

    e.preventDefault();

    console.log("Form submitted");
    //value
    let q=searchQForm.elements.query.value;
    console.log(q);
    dataFunc(q);
    searchQForm.elements.query.value='';

});


 const dataFunc = async(q) => {
     const resposne=await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${q}`);
     console.log(resposne.data);
     const imgurl=resposne.data.image.medium;
     console.log(imgurl);
      const img=document.createElement('IMG');
     img.src=imgurl;
      document.body.append(img);



 };