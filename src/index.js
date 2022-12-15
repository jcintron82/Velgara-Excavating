const x = document.getElementById('aboutUsImgtext');
const counters = document.querySelectorAll('.counter');
// const speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = 1;
        if(count < target) {
            counter.innerText = (count + increment)
            setTimeout(updateCount, 40)
        } else {
            count.innerText = target;
        }

    }

    updateCount();
})


const observerOptions ={ 
    root:null,
    threshold: .7,
    
}

const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        console.log(entry.target)
        entry.target.classList.toggle('aboutUsBtnWrapScroll')
        
    })
   }
 , observerOptions)

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