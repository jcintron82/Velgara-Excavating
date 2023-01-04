const  x= document.getElementById('aboutUsImgtext');
const counters = document.querySelectorAll('.counter');
const counter2 = document.querySelectorAll('.counter2');
const img = document.querySelector('abousUsWrapImg')
// const speed = 300;

const observerOptionsNumbers ={ 
    root:null,
    threshold: 1.0,
    // root:document.getElementById('familyimg')
    
}
const observerOptionsAboutUs ={ 
    threshold: .1,
    rootMargin: '-10px 0px -0px 0px'
 

}

 const func = () => counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = 1;
        if(count < target) {
            counter.innerText = (count + increment)
            setTimeout(updateCount,100)
        } else {
            count.innerText = target;
        }
        
    }
    updateCount();
    
})
const secondNum = () => counter2.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = 1;
        if(count < target) {
            counter.innerText = (count + increment)
            setTimeout(updateCount,25)
        } else {
            count.innerText = target;
        }
        
    }
    updateCount();
    
})
//  Function which adds clasS(opacity) and other CSS styles when element is in view
const numcountObserver = new IntersectionObserver((entries, numcountObserver ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            setTimeout(() => {
                entry.target.innerText = 0;
        console.log(entry.target)
        // entry.target.classList.toggle('aboutUsBtnWrapScroll');
        func()
        numcountObserver.unobserve(entry.target);
            }, 500);
        }
      
    })
    
   }
 , observerOptionsNumbers)

 const secondNumObserver = new IntersectionObserver((entries, numcountObserver ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            setTimeout(() => {
                entry.target.innerText = 0;
        console.log(entry.target)
        // entry.target.classList.toggle('aboutUsBtnWrapScroll');
        secondNum()
        numcountObserver.unobserve(entry.target);
            }, 500);
        }
      
    })
    
   }
 , observerOptionsNumbers)

 counters.forEach(counters => numcountObserver.observe(counters));
 counter2.forEach(counter2 => secondNumObserver.observe(counter2));

 //Observer for the image at the bottom of the homepage
//  const observer = new IntersectionObserver((entries, observer ) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//         console.log(entry.target)
//         entry.target.classList.toggle('aboutUsBtnWrapScroll')}
//         // entry.target.className = 'aboutUsBtnWrapScroll' }
    
//     })
//    }
//  , observerOptionsAboutUs)

//  observer.observe(x);