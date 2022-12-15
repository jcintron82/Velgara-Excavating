const x = document.getElementById('aboutUsImgtext');
const options ={ 
    root:null,
    threshold: 1.0,
    
}

const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        console.log(entry.target)
        entry.target.classList.toggle('aboutUsBtnWrapScroll')
        
    })
   }
 , options)

 observer.observe(x)







// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
// }

// const observer = new IntersectionObserver(handleIntersect, options)
// function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > prevRatio) {
//         entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
//       } else {
//         entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
//       }
  
//       prevRatio = entry.intersectionRatio;
//     });
//   }

// observer.observe(aboutUsWrapImg)

// const scrollListener = (err, e) => {
//     if (err) throw err;
//     const screenTop = document.scrollingElement.scrollTop;
//     const screenBottom = screenTop + innerHeight;
//     const elementTop = aboutUsWrapImg.getBoundingClientRect().top

//     if (elementTop < screenBottom && elementTop < screenTop) {
//         aboutUsBtnWrap.className =('hide');
    
     
//     }
// }



// document.onscroll = scrollListener
// observer()