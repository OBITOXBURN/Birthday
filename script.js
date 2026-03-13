function nextPage(page){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
    p.classList.remove('prev');
  });

  for(let i=1;i<page;i++){
    document.getElementById('page'+i).classList.add('prev');
  }

  document.getElementById('page'+page).classList.add('active');
}

const images=['photo1.jpg','photo2.jpg','photo3.jpg'];
let index=0;

setInterval(()=>{
  index=(index+1)%images.length;
  document.getElementById('slide').src=images[index];
},2000);

function showPopup(){
  document.getElementById('popup').style.display='block';

  for(let i=0;i<120;i++){
    let heart=document.createElement('div');
    heart.className='heart';
    heart.innerHTML='❤';
    heart.style.left='50vw';
    heart.style.top='50vh';
    heart.style.setProperty('--x',(Math.random()*900-450)+'px');
    heart.style.setProperty('--y',(Math.random()*700-350)+'px');
    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },3000);
  }
}
