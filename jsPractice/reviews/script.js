const reviews = [
    {
        username: "1",
      designation: "1",
      review: "1",
      src: "#",
      alt: "1"
    },
    {
        username: "2",
      designation: "2",
      review: "2",
      src: "#",
      alt: "2"
    
    },
    {
        username: "3",
      designation: "3",
      review: "3",
      src: "#",
      alt: "3"
    }
    ];
    
    const userName = document.getElementById("username");
    const designation = document.getElementById("designation");
    const review = document.getElementById("review");
    const image = document.getElementById("image");
    
    let counter = 0;
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const random = document.getElementById("random");
    
    left.onclick = ()=> {
    if(counter===0){
    counter = reviews.length;
    }
    setReview(counter--);
    }
    right.onclick = ()=> { 
    if(counter===reviews.length-1){
    counter = -1;
    }
    setReview(counter++);
    }
    random.onclick = ()=>{
        counter = Math.floor(Math.random()*reviews.length);
      console.log(counter);
      setReview(counter);
    }
    
    function setReview() {
      image.style.src = reviews[counter].src;
      image.alt = reviews[counter].alt;
      userName.innerHTML = reviews[counter].username;
      designation.innerHTML = reviews[counter].designation;
      review.innerHTML = reviews[counter].review;
    }