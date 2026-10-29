$("bell").onclick=g(()=>go("notifs"));$("acct").onclick=g(()=>{menuOpen=!menuOpen;renderHeader()});$("vi").onclick=()=>setLang("vi");$("en").onclick=()=>setLang("en");
document.documentElement.lang=lang;render();
