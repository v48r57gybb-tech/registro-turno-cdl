(()=>{'use strict';const header=document.querySelector('header'),editor=document.getElementById('editor');if(!header||!editor||document.getElementById('cnc-theme-hero'))return;document.body.classList.add('cnc-cartoon');const stamp=document.createElement('span');stamp.className='cnc-sticker';stamp.textContent='OFFICINA · SOPRAVVIVENZA AL TURNO';header.append(stamp);const controls=document.createElement('div');controls.className='theme-controls';const toggle=document.createElement('button');toggle.type='button';toggle.textContent='Passa allo stile sobrio';toggle.setAttribute('aria-pressed','true');const next=document.createElement('button');next.type='button';next.textContent='Altra vignetta ↻';controls.append(toggle,next);header.append(controls);const hero=document.createElement('section');hero.id='cnc-theme-hero';hero.className='cnc-hero';hero.setAttribute('aria-label','Vignetta di officina');const mascot=document.createElement('img');mascot.className='cnc-mascot';mascot.width=180;mascot.height=135;mascot.alt='Il vostro centro di lavoro cartoon stanco con la tazza di caffè';mascot.src='data:image/webp;base64,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';const copy=document.createElement('div');copy.className='cnc-hero-copy';copy.innerHTML='<div class="cnc-bubble" id="cnc-theme-joke" aria-live="polite"></div><small>Il caffè non corregge gli offset. Però ascolta.</small>';hero.append(mascot,copy);editor.prepend(hero);const jokes=`Buongiorno è una parola grossa.
Tolleranza: ±0,01. Pazienza: fuori campo.
Il mandrino gira. Lo stipendio resta fermo.
Cinque minuti di setup. Disse, tre ore fa.
Fine turno: pezzi lavorati, anima sgrossata.
Asportazione truciolo: ottima. Asportazione tasse: eccellente.
Programma senza errori. Operatore senza energie.
Passaggio consegne, non passaggio di colpe.
Stipendio in tolleranza negativa.
Io faccio trucioli. Tu fai miracoli.
Il primo pezzo non si scorda. Soprattutto se è scarto.
Il caffè è finito prima della sgrossatura.
La quota è giusta. È il disegno che mi guarda male.
Setup rapido: una leggenda di officina.
Oggi lavoro in coppia con la pazienza. Non è arrivata.
Il truciolo è lungo. La pausa è corta.
Ho più offset che progetti per il weekend.
La fresa nuova sente già la pressione.
La macchina ha cinque assi. Io due occhiaie.
Qui si asporta tutto, tranne la stanchezza.
Il programma è corto. La giornata no.
Il pezzo è staffato. Io sono incastrato nel turno.
La finitura viene bene. Il lunedì meno.
Il tastatore trova tutto, tranne le mie energie.
La brugola del quattro vive una vita indipendente.
Il calibro è sul banco. Almeno cinque minuti fa.
Ho cercato lo zero. Ho trovato altre cose da fare.
Il mandrino è caldo. Il pranzo ormai no.
La tolleranza è stretta. La lista lavori è larga.
Una passata alla volta. Anche verso venerdì.
Il cambio utensile è automatico. Il cambio umore no.
Il pezzo pesa. La consegna pure.
La sgrossatura passa. Le occhiaie restano.
La macchina chiede lubrificante. Io una pausa.
Il disegno ha tre viste. Io non vedo l’ora.
Il cassetto utensili nasconde una civiltà perduta.
Ciclo avviato. Pensieri in lavorazione.
Il comparatore oscilla meno del mio umore.
La fresa canta. Io preferivo il silenzio.
Quel rumore non era nella playlist.
Il programma funziona. Non spaventiamolo.
Pezzo campione: oggi il campione è il caffè.
Il controllo qualità non accetta scuse dimensionali.
La bava è piccola. La seccatura è grande.
Sono in attesa utensile. E del weekend.
La tavola gira. Le ferie non arrivano.
Il turno finisce. Il truciolo continua.
Il banco ordinato era un bellissimo progetto.
Quel portautensile ha più esperienza di me.
La quota mancante si nasconde sempre sul retro.
Ho fatto il pieno di trucioli, non di energie.
Il tempo ciclo ha un suo concetto di velocità.
Due minuti alla fine. Da dieci minuti.
Il collega dice tutto a posto. Il fumetto prende appunti.
Sono un centro di lavoro, non un centro benessere.
Oggi produco pezzi e sospiri.
Il caffè entra. La pazienza esce.
La giornata è lunga anche in millimetri.
Il pezzo buono merita un applauso. Silenzioso, siamo stanchi.
La tasca è finita. Quella dello stipendio è vuota.
La contornatura procede. Io conto le ore.
Ho una relazione complicata con il lunedì.
La pausa è un utensile indispensabile al mio umore.
Il magazzino utensili è pieno. La batteria sociale no.
Un foro alla volta verso la pensione.
Il disegno è aggiornato. La mia faccia no.
La commessa è urgente. Come tutte le altre.
Il pezzo è unico. La fretta è in serie.
La fresatura è a cinque assi. Il sonno a tempo pieno.
Ho letto la consegna. Ora cerco il coraggio.
La finitura specchio riflette le mie occhiaie.
La giornata ha richiesto una seconda sgrossatura.
Il tornio del vicino sembra sempre più riposato.
Sono nato per fresare, non per capire il lunedì.
L’utensile è in posizione. Io cerco una posizione comoda.
Nessun truciolo è stato consultato per questa battuta.
Il preventivo diceva semplice. Il pezzo non era d’accordo.
La smussatura è piccola. La soddisfazione enorme.
La revisione del disegno è più fresca del mio caffè.
La rondella caduta ha scelto la latitanza.
Il carrello attrezzi conosce tutti i miei segreti.
Oggi la mia funzione preferita è fine turno.
La scheda attrezzaggio è chiara. La mattina meno.
Ogni inserto nuovo è una piccola speranza.
Il pallet parte. Io rimango qui.
Lavorazione completata. Stanchezza in corso.
Il foro è cieco. La consegna vede tutto.
Il pezzo è centrato. Io sono decentrato dal sonno.
La morsa tiene. La pazienza traballa.
Mi hanno promesso una giornata tranquilla. Ottima narrativa.
La macchina conta i cicli. Io i caffè.
Il cartellino commessa ha viaggiato più di me.
Il ciclo è ripetibile. La mia allegria meno.
La quota finale è arrivata prima della pausa.
Il ricambio arriva domani. La battuta è già pronta.
Il registro turno ricorda quello che il sonno cancella.
Il truciolo luccica più del mio futuro da mattiniero.
Il portellone si chiude. Il sipario sulla pazienza pure.
Il pezzo è pronto. Io per le ferie.
Consegne fatte. Coscienza in tolleranza.`.split('\n');let deck=[],last=-1;const bubble=document.getElementById('cnc-theme-joke');function showJoke(){if(!deck.length){deck=Array.from(jokes.keys());for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck.length>1&&deck[deck.length-1]===last)[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];}last=deck.pop();bubble.textContent=jokes[last];}showJoke();next.onclick=()=>{if(!document.body.classList.contains('cnc-cartoon'))toggle.click();showJoke();};const photo=document.createElement('section');photo.id='cnc-sober-photo';photo.setAttribute('aria-label','Centro di lavoro');photo.style.cssText='margin:20px 0;text-align:center;background:#fff;border:1px solid #c9d8e8;border-radius:12px;padding:16px';const img=document.createElement('img');img.alt='Centro di lavoro CNC: fotografia fornita';img.width=300;img.height=225;img.style.cssText='display:block;width:100%;max-width:516px;height:auto;object-fit:contain;margin:auto';img.src='data:image/webp;base64,UklGRi4LAABXRUJQVlA4ICILAAAQSgCdASosAeEAPqlOokymJCciIrLLuOAVCWku/TArXt+W7YDOpveZxN9EtO9CbPt3EzOIXnJBlJ8vn7z0R3gmYxKYFARCXv9HOrVBL2mvTr2hOZFPNJ/sOi0crjkR98uUBARbKSBDolhImi+CC8Ba/3YDausQFlvRzDlnKchSsgSYmYigIhL7Fzpd2603+1/xZ4dZ2k0I4dsTq83oUvn2UfL7wHvooI8h/ysaQ1JsiD0DbSLjjew82gBTBUeQa7WXO3SjGghdq9is+pHGEIc1IPI+/QQTRqJ1gsUBcecoCpXaoHEW1tPBiZkWcbDqWSgLS1re0qPoXEE7IVql8zKqHrIfl0hIBN69hJmKiA7036eMhr5qNXpSFCDc5ekjS5bScKGlZzWdkadHdA83STTREYpK6gGu9uEK+fX7H2asJi5AiNVbeiQJf9wMp5oOQkVnrz5h9phdoymcyNI63kyGFBne7UvIybBilLzhSInAEa4aa8+DOIxWicEfQUX2I4SJhNF/VTp582ST/YPVgQMwdH3+uqHGYl/W+ENUGthhhQoLBlG3F3wyyU2B0Hz1MNbUNYD+tInlozQTVpIDU+KzTP1CjdzCxH3z7yWGzd/MoVrUMHgHRa0W9mPGzynQHK19UnXbtzPtan1ADGcmF7X0jvS19ToSFHJ9+VGbvC2tIsB1oSTRi0JGFTYEBWNZ/Tedk7UVRxZSIODUIUtX4SVJbYtpesDJbKNhKoPksGSJeeAJETRkhEK0rQAynKJFfY/6rwihCH8lUXG3Y4TnzMvl4QRCXv9HOq0AAP749EAAAAAQVO654q0RBe6lVP2MqZRVN8MFLSd7s93JxAzXvaWFUtX43nHj9NyyJZDo/urOO8I58oY92pT0EEji/6/Jlzg1VZpthO2WMP4Q/+PvjSJvQSgEk27CI1/4RFA8JsazaAFTKMTwuEI6plNeaDzrqo+OkV02th6WfypLSATxm33NyBM9C47tH1QpIEntu70hFPPsB2jsmgBfVFsIv0oIVr5W/nI+OaKltkTHFP0R9m1mpLCR91Icue9mAN1zo7ZVfOtyh37ONvdW2HgLCD24hEM7q0tY3iIKyFC4WrRwn9CWpK1Ae09iNc84paB2A+cirDNKOq+7UO3mANAV50jGHoSa2FOJI4q9QfMk1mUHsjyvArqXYYzoNx5JpfQnwtYdpA5UD3GimgRYSr+Yx9CQHatL9FYCmNoksCFA/uHa/PGt6KL/Oqu8Lc7SrqbMgaLUShZtRh2iWuNaPBcuCgh2YInPXUJ/rbsfHRBisCtYODOj2BI3GjLCdaOzTPvS7g9UtYn+myquCEfp0d4KiWsqiz5u2nIeuY6vLOiuF1BINzlUFlWGGfaEpc2rxN+VB+08aoJ3v9Xrb3bucLwIeP56MGy3RlmQg1FrQlw+nf54oLM9KRtiHOx4eqtBMz0zLWzm97qUEtrZ+AI2Ldo/WrskJOtVPkvAqv6OXjjcr9w1/H7uKIkKUBjuH8s44NGY2vdl0dDfu6u+E4YiCDVhBWlxVVe/9qkq02K1pWCWFjCXfV4LUCa7vG/YquyB3RIdzPEk8Y+jvzjNVsKVgFkfwZjiaz9kADc4h4ajqlINPYbdqq3GZtyPeLNRU0dxaVUq3rMg6P7+iSJLAKyS4ePsMqf/7jKuKvVP8Egl3J4J4DKaYvhai21F27nFcSX1yw9qZ/FN9hBVG+nuHMqnNbHNWPB4CLaERC8nuOYQRooaI7M+H/oBXXYwoTPcyfZr/mQ11WOKV8s3Hg81OlbwpIHAqRSYWRGYobWg0+c/13HKbHrw9NR4lGi3pwBUGY6z6NwPTgcYFKo6Z4sassI0dkm5buVlgK+6S72YdbPNSGObvX3H7XbpcM5PJrLvdl4aecCcp02QPeubd6Yv7mW2kcDTWA4IMmBDKBNtUv1/kDYcTg08Wyw9EUYKLPaiuiP0V0zpcisLSnaoK+qlbsba/wP0kP6W9xmuUkeu2GZYRVAKEfAm/b5Xbb+JMAyuoE9zuoyAWfs6Q4u8EPjJuEaW3mq85xpS+GOCf5PAsFAbxm05bQxgtZ1i+wFmn2dFuHm4yU1G/zphS/FLOmNVlt5nijjE6P3zzSRPfsTOyUpo6ADi9Z3SxfcIL4YXtXc1OTV04egfw2cEVIoeg1uftfncRe2UHnkHXbnY1nxltscaz2li2W4cMYrklzZm8ox2IZ5NByKIP8HClX+J0XmtZvrR4u4u1rJU05IqJsseEbURoNG6urCwNwOiLQtUyRcU9MgBd6bj08mQHsUjt3MXI3fI3MdCKXsAclO/T8mLG/q9kPmgPxgF3lbMrguBFYmLcUICI1hXJDvC3v6a9DW/lr9CnxkhzCOzD4uP/gdVlJi3plqZb1jYUpd4/QfPhLs/uIGCnHdeyLQat/x39mdqNbg75EJO3Cxyi3LNDEtvabgtup/fqL4dHaV5YJPS7XIIsldGpW8f8GZZZfbbOefBvjpWr2/5cUksvPzOTm8WfjG1jFdFMXHkZxTer8Vo2LjvG1YU17GND6vA46Gpp0PglBOTlypl4I+uQg1+oUQYd5XX/9WoxELvPMw/I4XpilszC1+ejSa754TX79gl9ffiNpmjeBQmw8J9YS2JUy8gb2tmK8ahJTCc85BbtQu2gF89cxiwcmYzXBqKVN9602CcTb0jpI5OqaOU5r6haB1ZbqSDuAF0mZL1PY/4OdyDBDK8UBMacSdltLrQAeCS/1V0ZbkMnOQarHfw8X84qaMJd71OFV1Iwze39ID1gELfS+IsFUyNOBogNK7k75CrFjl4Vc0hAhHNB/HbueCRjEzcTprmOmNG/FxgkRlMzuYHN0TjQcfShIzL3TebLeJOCnQbDvO37fSy+aoTIohDuIbkFbIqNg8kJFyFZ05j2JHTf/w13E39vO9i+qtgHOoeinjUeH493rO112ACCdWA1+l3b0zKwa9G7trUamFOfJMZ6j4jzj0ibgnU4BJ72LBf91/tJLOuj20smmvgBDAoogWAaxNcwwqobMcpXxeiVamIZdg5fzqYYIM3uTYy5Fy9PISuluS/I0QUEXYNQDCmQL0k0ZO6eUjx3ei4Tq1SnT6dcg8QIg0tiJt5Rt3HWWcB5Inn25lzb4aWC+vAyDH0udMRjtv6Rgah4tyFfKZiUdjwwAQMm8mGJUNr16dYyCvt8ckOuq/X7ft3LGmX6KpC1OyLax28t1dNaxoRQr2OiOWI98id9BeMkvsGxpYdCC9RWlG1S7hWsaFYkDk8bonyGBjsJO02E7oSl1SrDUSy59mqBjtD3WUM/tD1xgRwg/mzEOh8MvVNmMBzNQbByG4vXl1S7cYtW4VyvTaVUutAs//u9r7o/XBZaIkUxuVLOjS4sB7j59tP/L/1i4ZJZTZ7A3HYrJIamWfGMzkpLaOYp0Nprkju2Or8f43oFyztYTiOx6zDwL/xRXnyqjeJQH6iwZtFjMLdLmMTyn0PuAJRnKQ9T0nprO3ZSOqDgC/nbdb+/o5s+vkjtooBRGFdgN48yp3Gtl4AHISER18oZ2pokeScosPP19czds2ggQyWNw8MOzpj78t15nput0lLG4kk3mwLwniSDQcj5aZqRTPZ/Azo9I+uPBICqW8sr6fpaUt1l/vDtVgjm05BTvVjRQrRg/gvstaOYcICxyOFirbFImT8Rh+Po+E6zZWJrHPpr2Fywu+imhxzGoHchk+75ZYOWHu4Fxn6zNc1aAfkVNDepSMVHgrhAAAAALjm2D4cbNZdC0Qrimpg2/cJl40LTpRxcCRT6pN7O/UiogAAAAAAAAA=';photo.append(img);hero.after(photo);const style=document.createElement('style');style.textContent='body.cnc-cartoon #cnc-sober-photo{display:none}body.cnc-cartoon #cnc-theme-hero .cnc-mascot{display:block;width:40%;max-width:180px;height:auto;object-fit:contain;flex:0 1 180px}#cnc-theme-hero .cnc-hero-copy{min-width:0}#cnc-theme-hero .cnc-bubble{overflow-wrap:anywhere}@media(max-width:420px){body.cnc-cartoon #cnc-theme-hero .cnc-mascot{width:36%;max-width:140px;flex-basis:36%}#cnc-theme-hero .cnc-bubble{font-size:16px;padding:10px}}@media print{#cnc-sober-photo{display:none!important}}';document.head.append(style);toggle.onclick=()=>{const active=document.body.classList.toggle('cnc-cartoon');toggle.textContent=active?'Passa allo stile sobrio':'Passa allo stile cartoon';toggle.setAttribute('aria-pressed',String(active));};})();