(()=>{'use strict';const header=document.querySelector('header'),editor=document.getElementById('editor');if(!header||!editor||document.getElementById('cnc-theme-hero'))return;document.body.classList.add('cnc-cartoon');const stamp=document.createElement('span');stamp.className='cnc-sticker';stamp.textContent='OFFICINA · SOPRAVVIVENZA AL TURNO';header.append(stamp);const controls=document.createElement('div');controls.className='theme-controls';const toggle=document.createElement('button');toggle.type='button';toggle.textContent='Passa allo stile sobrio';toggle.setAttribute('aria-pressed','true');const next=document.createElement('button');next.type='button';next.textContent='Altra vignetta ↻';controls.append(toggle,next);header.append(controls);const hero=document.createElement('section');hero.id='cnc-theme-hero';hero.className='cnc-hero';hero.setAttribute('aria-label','Vignetta di officina');hero.innerHTML='<svg class="cnc-mascot" viewBox="0 0 250 240" role="img" aria-label="Mascotte CNC stanco con caffè e fiamme cartoon"><g stroke="#233044" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M63 69Q39 43 66 14Q64 36 82 33Q91 8 108 5Q101 33 123 45Q135 16 144 22Q168 52 153 72" fill="#ff914d"/><path d="M83 65Q72 46 86 35Q90 54 105 51Q113 30 121 34Q142 57 123 69" fill="#ffdf70"/><rect x="28" y="66" width="184" height="140" rx="17" fill="#6da5c2"/><rect x="43" y="81" width="128" height="99" rx="10" fill="#d1edf3"/><path d="M105 83v96" fill="none"/><path d="M48 182h117"/><rect x="180" y="83" width="22" height="58" rx="5" fill="#fffdf5"/><circle cx="191" cy="96" r="3" fill="#f18462"/><path d="M186 110h10m-10 10h10m-10 10h7"/><path d="M61 116q14 10 28 0m31 0q14 10 28 0" fill="none"/><path d="M65 129h20m38 0h20" stroke="#7099ab"/><path d="M91 150q14-10 27 0" fill="none"/><rect x="44" y="207" width="31" height="14" rx="3" fill="#233044"/><rect x="168" y="207" width="31" height="14" rx="3" fill="#233044"/><path d="M202 175l18-5"/><path d="M212 155h26v29q-13 9-26 0z" fill="#fffdf5"/><path d="M238 161q20 0 9 16h-9" fill="none"/><path d="M218 143q-7-9 1-16m12 16q-7-9 1-16" stroke="#80919e" fill="none"/><path d="M7 206l11-7m3 26l12 1m184-5l12 6" stroke="#be7951"/></g></svg><div class="cnc-hero-copy"><div class="cnc-bubble" id="cnc-theme-joke" aria-live="polite"></div><small>Il caffè non corregge gli offset. Però ascolta.</small></div>';editor.prepend(hero);const jokes=`Buongiorno è una parola grossa.
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
Consegne fatte. Coscienza in tolleranza.`.split('\n');let index=0;const bubble=document.getElementById('cnc-theme-joke');function showJoke(){bubble.textContent=jokes[index];next.textContent='Altra vignetta ↻ ('+(index+1)+'/'+jokes.length+')';}showJoke();next.onclick=()=>{if(!document.body.classList.contains('cnc-cartoon'))toggle.click();index=(index+1)%jokes.length;showJoke();};const photo=document.createElement('section');photo.id='cnc-sober-photo';photo.setAttribute('aria-label','Centro di lavoro');photo.style.cssText='margin:20px 0;text-align:center;background:#fff;border:1px solid #c9d8e8;border-radius:12px;padding:16px';const img=document.createElement('img');img.alt='Centro di lavoro CNC: fotografia fornita';img.width=300;img.height=225;img.style.cssText='display:block;width:100%;max-width:516px;height:auto;object-fit:contain;margin:auto';img.src='data:image/webp;base64,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';photo.append(img);hero.after(photo);const style=document.createElement('style');style.textContent='body.cnc-cartoon #cnc-sober-photo{display:none}@media print{#cnc-sober-photo{display:none!important}}';document.head.append(style);toggle.onclick=()=>{const active=document.body.classList.toggle('cnc-cartoon');toggle.textContent=active?'Passa allo stile sobrio':'Passa allo stile cartoon';toggle.setAttribute('aria-pressed',String(active));};})();