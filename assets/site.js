// ===== 共通ロジック =====
(function(){
  const LANG_KEY='pf_lang';
  window.getLang=()=>{try{return localStorage.getItem(LANG_KEY)||'jp';}catch(e){return 'jp';}};
  window.setLang=v=>{try{localStorage.setItem(LANG_KEY,v);}catch(e){}};
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  window.$=$;window.$$=$$;

  // ---------- Nav injection ----------
  window.buildNav=function(active){
    const lang=getLang(),T=window.T[lang];
    const items=[
      ['home','index.html'],['about','about.html'],['works','works.html'],
      ['essays','essays.html'],['contact','contact.html']
    ];
    const nav=document.createElement('nav');
    nav.className='nav';
    nav.innerHTML=`
      <div class="logo"><a href="index.html">TAKAGI Kaede<b></b></a></div>
      <div class="menu">
        ${items.map(([k,href])=>`<a href="${href}" data-nav="${k}" class="${k===active?'active':''}">${T.nav[k]}</a>`).join('')}
      </div>
      <div class="lang">
        <button data-lang="jp" class="${lang==='jp'?'active':''}">JP</button>
        <button data-lang="en" class="${lang==='en'?'active':''}">EN</button>
      </div>`;
    document.body.insertBefore(nav,document.body.firstChild);
    nav.querySelectorAll('.lang button').forEach(b=>{
      b.onclick=()=>{setLang(b.dataset.lang);location.reload();};
    });
  };

  window.buildFooter=function(){
    const f=document.createElement('footer');
    f.className='footer';
    f.innerHTML=`<div>© 2026 TAKAGI Kaede</div>`;
    document.body.appendChild(f);
  };

  // ---------- Modal ----------
  window.ensureModal=function(){
    if($('#modal'))return;
    const m=document.createElement('div');
    m.className='modal';m.id='modal';m.setAttribute('aria-hidden','true');
    m.innerHTML=`<div class="mbg"></div>
      <button class="mclose" id="mClose" aria-label="Close">×</button>
      <div class="msheet" id="mSheet"><div class="minner" id="mInner"></div></div>`;
    document.body.appendChild(m);
    m.querySelector('#mClose').onclick=closeModal;
    m.querySelector('.mbg').onclick=closeModal;
    document.addEventListener('keydown',e=>{
      if(!$('#modal').classList.contains('show'))return;
      if(e.key==='Escape')closeModal();
      else if(e.key==='ArrowLeft'){const b=$('#gprev');if(b)b.click();}
      else if(e.key==='ArrowRight'){const b=$('#gnext');if(b)b.click();}
    });
  };
  function showModal(){
    ensureModal();
    const m=$('#modal');m.classList.add('show');m.setAttribute('aria-hidden','false');
    document.querySelector('.app').classList.add('blurred');
    document.body.style.overflow='hidden';
    $('#mSheet').scrollTop=0;
  }
  function closeModal(){
    const m=$('#modal');m.classList.remove('show');m.setAttribute('aria-hidden','true');
    document.querySelector('.app').classList.remove('blurred');
    document.body.style.overflow='';
  }
  window.closeModal=closeModal;

  // ---------- Carousel (枚数は作品ごとの images 配列で決まる) ----------
  const stripTags=s=>s.replace(/<br\s*\/?>/g,' / ').replace(/<[^>]+>/g,'');
  // サムネイルは images/作品ID/t/ にある縮小版（幅240px）を使う
  const thumbSrc=src=>src.replace(/\/([^\/]+)$/,'/t/$1');
  function buildCarousel(images,alt){
    const n=images.length;
    return `<div class="hero" id="hero">
      ${images.map((im,i)=>`<img src="${im.src}" alt="${alt} ${i+1}" class="${i===0?'on':''}" ${i===0?'':'loading="lazy"'}>`).join('')}
      ${n>1?`<button class="gbtn gprev" id="gprev" aria-label="Prev">‹</button>
      <button class="gbtn gnext" id="gnext" aria-label="Next">›</button>
      <div class="gcount" id="gcount">1 / ${n}</div>`:''}
      </div>
      ${n>1?`<div class="gthumbs" id="gthumbs">
        ${images.map((im,i)=>`<button type="button" class="gthumb" data-i="${i}" aria-label="${i+1} / ${n}"><img src="${thumbSrc(im.src)}" alt="" loading="lazy"></button>`).join('')}
      </div>`:''}
      <div class="gcap" id="gcap"></div>`;
  }
  function bindCarousel(images,jp){
    const n=images.length;let slide=0;
    const imgs=$$('#hero img'),thumbs=$$('#gthumbs .gthumb'),strip=$('#gthumbs');
    const setSlide=k=>{
      slide=(k+n)%n;
      imgs.forEach((im,i)=>im.classList.toggle('on',i===slide));
      thumbs.forEach((b,i)=>{b.classList.toggle('on',i===slide);b.setAttribute('aria-current',i===slide?'true':'false');});
      if(strip&&thumbs[slide]){const b=thumbs[slide];strip.scrollTo({left:b.offsetLeft-(strip.clientWidth-b.offsetWidth)/2,behavior:'smooth'});}
      if($('#gcount'))$('#gcount').textContent=(slide+1)+' / '+n;
      const c=images[slide].cap||['',''];$('#gcap').textContent=c[jp?0:1]||'';
    };
    if(n>1){
      $('#gprev').onclick=e=>{e.stopPropagation();setSlide(slide-1);};
      $('#gnext').onclick=e=>{e.stopPropagation();setSlide(slide+1);};
      thumbs.forEach(b=>b.onclick=()=>setSlide(+b.dataset.i));
    }
    setSlide(0);
  }
  const paras=t=>t.split(/\n\n+/).map(p=>`<p>${p}</p>`).join('');

  window.openWork=function(w){
    ensureModal();
    const lang=getLang(),jp=lang==='jp';
    const t=window.T[lang];
    const main=jp?w.jp:w.en, more=jp?w.jpMore:w.enMore;
    const ex=jp?w.ex[0]:w.ex[1];
    $('#mInner').innerHTML=`
      ${buildCarousel(w.images,stripTags(w.title[jp?0:1]))}
      <div class="mmeta">
        <div>
          <div class="mt">${w.title[jp?0:1]}</div>
          <div class="msub">${w.year} ／ ${w.meta[jp?0:1]}</div>
        </div>
        <div class="mtag">${jp?'カテゴリ':'CATEGORY'}<b>${w.tag[jp?0:1]}</b></div>
      </div>
      <div class="mbody">${paras(main)}</div>
      ${more?`<div class="mmore"><div class="mmore-k">${t.moreLabel}</div><div class="mbody">${paras(more)}</div></div>`:''}
      ${ex?`<div class="mex"><b>${t.exLabel}</b>${ex}</div>`:''}`;
    showModal();
    bindCarousel(w.images,jp);
  };

})();
