const x = document.getElementById('aboutUsImgtext');
const counters = document.querySelectorAll('.counter');
// const speed = 300;


 const func = () => counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = 1;
        if(count < target) {
            counter.innerText = (count + increment)
            setTimeout(updateCount, 100)
        } else {
            count.innerText = target;
        }
        
    }
    updateCount();
    
})


const observerOptions ={ 
    root:null,
    threshold: 1.0,
    
}

const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        console.log(entry.target)
        entry.target.classList.toggle('aboutUsBtnWrapScroll')
        
    })
   }
 , observerOptions)

 observer.observe(x);

//  Function which adds clasS(opacity) and other CSS styles when element is in view
const numcountObserver = new IntersectionObserver((entries, numcountObserver ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        entry.target.innerText = 0;
        console.log(entry.target)
        entry.target.classList.toggle('aboutUsBtnWrapScroll');
        func();
        numcountObserver.unobserve(entry.target);}
    })
    
   }
 , observerOptions)


 



 counters.forEach(counters => numcountObserver.observe(counters))
