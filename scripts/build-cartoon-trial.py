from pathlib import Path
import json,re,unicodedata,hashlib

groups=[
('setup','Attrezzaggio',
'''Il setup era stato annunciato come una formalità.
«Cambio solo la morsa» è il titolo del turno.
Il portautensile giusto ha inaugurato la caccia al tesoro.
L’attrezzaggio rapido è entrato nella fase narrativa.
La scheda diceva «pochi accessori».
Abbiamo trovato quasi tutto per il setup.
La morsa nuova è arrivata con grandi aspettative.
La preparazione doveva durare il tempo di un saluto.
«Siamo praticamente pronti» risuona dal banco.''',
'''Nel frattempo il calendario ha chiesto un aggiornamento.
Il cronometro si è seduto: vuole vedere come finisce.
La brugola del quattro risulta latitante e felice.
Il caffè del mattino è già un campione archeologico.
L’unico pezzo già finito è la nostra pazienza.
Ci manca solo il dettaglio che tiene insieme tutti gli altri.
Il carrello ha tutto, tranne la voglia di collaborare.
La parola «solo» ha chiesto di essere tolta dal verbale.
Sta per uscire la seconda stagione dell’attrezzaggio.
La pausa ha mandato una cartolina: ci pensa.'''),
('primo_pezzo','Primo pezzo',
'''Il primo pezzo è pronto per il suo debutto.
La prima quota ha attirato un pubblico importante.
Il controllo del primo pezzo è diventato un evento.
Il campione sta ricevendo più attenzioni di un neonato.
La finitura del primo pezzo si è messa in posa.
Il calibro è arrivato alla prima del pezzo.
Il disegno è aperto sulla quota decisiva.
L’operatore osserva il campione con grande intensità.
Il pezzo numero uno ha chiesto silenzio in sala.''',
'''Io faccio il professionista; dentro di me parte la colonna sonora.
Il comparatore è tranquillo. Non intendo imitarlo.
Ho visto riunioni con meno persone attorno a un tavolo.
La tazzina aspetta fuori: non ha il pass per la qualità.
La quota non legge le nostre ottime intenzioni.
Qualcuno ha sussurrato «semplice»: il disegno ha voltato pagina.
Adesso manca soltanto il giudizio, non un altro pronostico.
Mi metterei elegante, ma sono già in grigio tecnico.
Anche il banco ha smesso di cigolare per seguire la scena.
Il secondo pezzo aspetta di sapere se può vantarsi di conoscere il primo.'''),
('produzione','Produzione',
'''Il contapezzi sale con grande serietà.
La produzione ha trovato il suo ritmo.
Il ciclo procede senza bisogno di incoraggiamento.
La serie è partita con tutte le migliori intenzioni.
Il pallet ha iniziato il suo giro.
Il programma ripete la lavorazione con convinzione.
Il vassoio dei pezzi si sta popolando.
Il mandrino affronta l’ennesimo pezzo del turno.
La contornatura sta facendo il suo giro di società.''',
'''Io conto i pezzi; il collega conta i minuti con metodo scientifico.
La ripetibilità funziona meglio del nostro entusiasmo.
Il pranzo invece sta completando un ciclo di raffreddamento.
Ho una carriera brillante come produttore di rumore regolare.
Lo stipendio non sembra collegato al contatore: qualcuno controlli il progetto.
La pila cresce, la postura dell’operatore si fa filosofica.
Se il venerdì avesse questo avanzamento, saremmo già tutti contenti.
Il tempo ciclo non accetta negoziati basati sui sospiri.
Il truciolo ha più vita sociale di me.
Ho chiesto una standing ovation. Mi hanno dato un altro grezzo.'''),
('assistenza','Guasto macchina',
'''È arrivato il commento «ieri funzionava».
Il tecnico è atteso come un ospite d’onore.
Il guasto ha aperto una discussione molto partecipata.
Il ricambio ha annunciato il suo prossimo arrivo.
La spiegazione del rumore misterioso è diventata una saga.
«Non l’ha mai fatto» è appena entrato in officina.
La manutenzione ha ricevuto il messaggio.
Il problema è stato descritto come «una cosetta».
La macchina ferma ha attirato molti commentatori.''',
'''Il passato ha ottime prestazioni, ma non ripara il presente.
La battuta è disponibile; l’intervento lo lasciamo a chi è competente.
Per ora il mio contributo è un silenzio molto qualificato.
Il calendario del ricambio è un’opera di fantasia contemporanea.
Ho ascoltato tante ipotesi che potrei aprire un podcast.
Il mio curriculum non prevedeva il ruolo di argomento del giorno.
La diagnosi non la faccio con le occhiaie: aspettiamo quella vera.
Il registro almeno prende appunti senza proporre teorie.
Oggi eccello nella lavorazione dei sospiri.
Mi sento importante, ma avrei preferito esserlo per i pezzi buoni.'''),
('sonno','',
'''L’operatore si è presentato con due occhiaie di precisione.
Il buongiorno è arrivato prima del consenso dell’operatore.
La sveglia ha vinto il primo confronto del turno.
La stanchezza si è piazzata davanti alla macchina.
Il lunedì ha chiesto un po’ di entusiasmo.
L’energia dell’operatore è in fase di valutazione.
La postura di oggi racconta un romanzo lungo.
Il turno mattutino ha aperto le trattative con il sonno.
Le palpebre hanno presentato un piano ferie.''',
'''Io almeno ho il vantaggio di non dover scegliere i calzini.
Il collega è sveglio: ha già contestato la sveglia tre volte.
Gli ho offerto sostegno morale. Dice che preferiva un cuscino.
Le occhiaie sono simmetriche: qualcosa in tolleranza c’è.
La mia carrozzeria è grigia; lui ha scelto lo stesso incarnato.
Il suo entusiasmo risponde solo su appuntamento.
Gli ho chiesto un sorriso. Mi ha consegnato un sospiro revisionato.
Il weekend non ha ancora confermato la data di consegna.
Io sono un centro di lavoro, non posso firmargli una giustificazione al lunedì.
Il solo pensiero di «un ultimo pezzo» ha peggiorato la situazione.'''),
('caffe','',
'''La tazzina è comparsa sul banco come un consulente.
Il caffè dell’operatore è stato interrotto da una domanda.
La macchinetta del caffè ha conquistato la fiducia del reparto.
Il cucchiaino sta svolgendo un turno molto attivo.
Il caffè caldo era il progetto personale dell’operatore.
Il fondo della tazzina è stato consultato per il piano lavori.
La pausa caffè ha aperto una breve conferenza di officina.
Il bicchierino è l’oggetto più osservato del turno.
Il caffè ha fatto il suo ingresso con grandi promesse.''',
'''Non corregge le quote, ma non interrompe mentre ti lamenti.
Appena arriva un «vieni un attimo», diventa automaticamente freddo.
Io lavoro a corrente. Lui sostiene di avere un contratto con la torrefazione.
Il grezzo aspetta il programma; lui aspetta che smetta di scottare.
Ha meno pulsanti di me e una reputazione migliore.
Il mio refrigerante ha una temperatura. Il suo caffè ha dei rimpianti.
La pausa è durata poco, il racconto del setup molto di più.
Ho chiesto un applauso: stavano ancora mescolando.
Il vero lusso è finirlo prima che qualcuno pronunci «urgente».
Basta a creare una gag, non un piano per rinunciare al riposo.'''),
('urgenze','',
'''È arrivata una commessa «più urgente delle altre».
Il piano lavori ha appena incontrato il telefono.
La priorità numero uno ha trovato altre nove priorità numero uno.
Il cliente ha chiesto se si può anticipare.
La consegna è stata definita «per ieri».
La giornata era organizzata fino al primo «al volo».
Il programma del turno è stato aggiornato di nuovo.
Un pezzo «da niente» ha bussato alla porta.
La lista lavori ha aperto un tavolo sulle precedenze.''',
'''Il calendario ha chiesto di essere ascoltato con un avvocato.
Ho diversi assi, ma nessuno dedicato ai viaggi nel tempo.
La pianificazione sta esercitando l’arte dell’improvvisazione.
La parola «tranquillo» è stata rimossa dal vocabolario del reparto.
Il disegno dice millimetri, la telefonata parla di miracoli.
Ho spazio per un utensile, non per un’altra promessa impossibile.
L’ordine delle urgenze verrà stabilito da un torneo a eliminazione.
Il venerdì ha letto la lista e ha chiesto il cambio turno.
Il tempo ciclo continua a non capire il tono della voce.
La cartellina è leggera; le aspettative pesano come un bancale.'''),
('attrezzi','',
'''La brugola del quattro non è nel suo cassetto.
Il calibro ha lasciato il posto assegnato.
Il portautensile cercato ha cambiato quartiere.
La rondella caduta non ha fatto ritorno.
Il carrello attrezzi presenta un certo dinamismo interno.
La chiave giusta sta ricevendo molte attenzioni.
L’ultimo inserto della scatola ha attirato gli sguardi.
Il cassetto appena aperto contiene soprattutto sorprese.
Il banco ha assorbito l’oggetto che cercavamo.''',
'''Non è disordine: è un’esperienza investigativa inclusa nel turno.
Le ricerche procedono sotto la guida di chi dice «l’ho vista prima».
La posizione nota più recente risale al turno precedente.
Il prossimo inventario sarà accompagnato da una colonna sonora poliziesca.
Io ho un magazzino utensili; lui ha un romanzo giallo.
La frase «rimettilo a posto» è stata nominata patrimonio orale.
Il disegno esploso è meno dispersivo della situazione.
Il pezzo attende. L’attrezzo evidentemente no.
La memoria collettiva colloca tutto «lì vicino».
Un cassetto etichettato non garantisce che il contenuto sappia leggere.'''),
('misure','',
'''La quota ha deciso di essere protagonista.
Il disegno è stato aperto sulla pagina interessante.
Il micrometro è arrivato al tavolo delle discussioni.
La tolleranza è stata letta ad alta voce.
Il comparatore sta esprimendo il suo punto di vista.
La finitura ha ricevuto un’ispezione molto seria.
La revisione nuova del disegno è comparsa sul banco.
Il dettaglio ingrandito contiene altri dettagli.
La misura non ha apprezzato il nostro ottimismo.''',
'''Le buone intenzioni non figurano tra gli strumenti di misura.
Il «secondo me» ha scoperto di non essere un’unità riconosciuta.
Io difendo la mia reputazione; la qualità difende i numeri.
La matematica ascolta tutti e poi fa comunque come le pare.
Il vecchio disegno è stato invitato a non commentare.
La quota piccola sta occupando una parte enorme della conversazione.
La mia autostima era nominale. Adesso aspetta il controllo.
Il disegno ha più note del gruppo WhatsApp del reparto.
Ho visto meno precisione nella scelta delle ferie.
Il verdetto lo lasciamo al controllo: le battute non sono certificati.'''),
('fine_turno','',
'''Il fine turno si vede all’orizzonte.
La consegna al collega è entrata nella fase finale.
Il venerdì è stato avvistato vicino al calendario.
La pila dei pezzi buoni si prepara ai saluti.
Il collega del turno dopo sta arrivando.
Il registro è aperto sull’ultima annotazione.
La frase «poi andiamo» è stata pronunciata.
Le ferie hanno mandato un segnale molto debole.
Il cartellino aspetta il momento dei saluti.''',
'''Non festeggiamo: la commessa potrebbe sentirci.
La mia faccia è già fuori turno, il resto attende conferma.
Il pezzo finale ha il dono di diventare improvvisamente interessante.
Il passaggio consegne non comprende il trasferimento delle occhiaie.
Ho riassunto tutto. I sospiri sono negli allegati immaginari.
Il calendario procede con una lentezza che non è prevista a disegno.
Il weekend è un cliente importante: vorrei rispettare la consegna.
Io resto qui. Lui almeno può fingere di non sentire il lunedì.
Le cose da sapere sono scritte; le lamentele hanno una versione estesa.
Il saluto era breve, ma qualcuno ha già detto «ultima cosa».''')
]
coffee='''Il caffè non corregge gli offset. Però ascolta.
La tazzina è piccola. Le aspettative del turno no.
Questo caffè era caldo prima di quel «vieni un secondo».
Il cucchiaino gira con un entusiasmo che non condivido.
Il fondo della tazzina prevede nuove urgenze.
Il decaffeinato è il gemello tranquillo che non partecipa alle nostre gag.
La pausa caffè ha un tempo ciclo che nessuno ha mai approvato.
Io ho il refrigerante. Lui ha una tazzina con dei progetti.
Il caffè sul banco si raffredda con una precisione ammirevole.
La macchinetta del caffè è il centro di lavoro più popolare del reparto.
Il vero lusso è bere il caffè prima che diventi un ricordo.
Il caffè del mattino ha assistito all’intero attrezzaggio.
La crema del caffè è durata più del piano delle priorità.
La tazzina non ha risposte, ma almeno non dice «è semplice».
Questo caffè ha ormai la temperatura della mia motivazione del lunedì.
Il cucchiaino è l’unico utensile che torna sempre nella tazzina.
Il caffè non misura le quote: si limita a giudicare in silenzio.
Il mio caffè ha visto più revisioni del disegno originale.
Una tazzina sul banco vale come prenotazione per una pausa immaginaria.
Il bicchierino è vuoto. Il racconto del guasto no.
Il caffè ha chiesto di essere bevuto senza riunioni attorno.
La tazzina calda è una promessa da mantenere rapidamente.
Il caffè non fa straordinari: diventa freddo e basta.
La pausa era un espresso. Il discorso è diventato un lungo.
Il caffè del collega profuma sempre nel momento sbagliato.
Il bicchierino ha le pareti sottili e una grande responsabilità comica.
Il caffè sa tutto: era sul banco durante il primo pezzo.
Il cucchiaino del lunedì ha chiesto un avanzamento ridotto.
La macchinetta non conosce la commessa, ed è questo che apprezzo di lei.
Il caffè non accetta «lo bevo dopo» come piano credibile.
La tazzina ha una zona termica più instabile del programma delle urgenze.
Il caffè freddo è un verbale dei minuti persi.
Il profumo del caffè ha raggiunto il reparto prima del materiale.
La pausa caffè è breve. Le sue leggende sono eterne.
Il bicchierino contiene caffè, non autorizzazioni a saltare i controlli.
Il caffè è una pausa, non una procedura di ripartenza.
L’operatore e la tazzina si sono incontrati tra due «un attimo».
Il caffè non ha assi, ma trova sempre il centro della conversazione.
La macchinetta riceve più complimenti della finitura specchio.
Il cucchiaino lavora in rotazione, senza fare il fenomeno.
Il caffè aspettava me. Il telefono aveva altre idee.
Una tazzina appena fatta è l’opposto di una commessa «per ieri».
Il caffè sta sul banco con la dignità di un progetto interrotto.
Il fondo del bicchiere non è uno zero pezzo.
Il caffè della pausa ha un pubblico fisso e nessun posto numerato.
Il cucchiaino fa sempre lo stesso percorso: una carriera molto coerente.
Il caffè ha perso calore, non la capacità di ascoltare lamentele.
La tazzina si raffredda anche senza premere nessun pulsante.
Il caffè non guarda l’orologio. L’operatore lo fa per entrambi.
Il primo sorso è il collaudo più atteso della pausa.
Il caffè non legge il disegno: ha già abbastanza problemi con lo zucchero.
La macchinetta non promette miracoli, solo un bicchiere sotto l’ugello.
Ho visto caffè diventare freddi durante spiegazioni definite «brevi».
La tazzina ha sentito «ultimo pezzo» troppe volte per crederci ancora.
Il caffè del venerdì ha già il profumo del weekend.
Il caffè del lunedì si presenta accompagnato da un sospiro.
Il caffè del turno pomeridiano conosce già tutte le urgenze del mattino.
Il cucchiaino non partecipa alle discussioni: continua a girare.
La tazzina non ha memoria, e forse è la sua fortuna.
Un caffè caldo sul banco è una lotta contro il «già che ci sei».
Il caffè è stato dichiarato pronto prima del setup.
La macchinetta ha un menu più breve della lista delle cose da fare.
Il caffè del primo pezzo attende il verdetto insieme a noi.
Il bicchierino non ha superato la prova del «torno subito».
Il cucchiaino ha girato tanto, ma il venerdì non si è avvicinato.
Il caffè non corregge il programma: evita soltanto di commentarlo.
La tazzina si è guadagnata un posto nella memoria del turno.
Il profumo del caffè è l’unico avviso che nessuno vuole silenziare.
Il caffè sul carrello non è una nuova attrezzatura.
La pausa caffè non risolve tutto, ma almeno cambia lo scenario.
Il bicchierino vuoto è il pezzo finito più leggero dell’officina.
Il caffè non ha bisogno di una revisione del disegno, solo di un momento tranquillo.
Il cucchiaino conosce il rumore delle pause meglio del mandrino.
La tazzina ha chiesto di non essere classificata tra gli utensili persi.
Il caffè non è in ritardo: è l’operatore che è stato intercettato.
Il banco ha una zona per il calibro e una zona per le speranze in tazzina.
Il caffè non fa diagnosi: per questo mi fido delle sue conversazioni.
La macchinetta ascolta tutte le versioni dello stesso setup.
Il caffè si raffredda più in fretta di quanto si chiuda una discussione sulle ferie.
La tazzina nuova non sa ancora cosa significa «giornata tranquilla».
Il caffè non è una gara: il vero campione è chi riesce a berlo caldo.
Il cucchiaino ha un contratto di collaborazione con la pausa.
La tazzina sul banco è l’unico piccolo cilindro che non deve andare a disegno.
Il caffè ha assistito al cambio turno senza chiedere un passaggio consegne.
Il fondo della tazzina non contiene il ricambio che aspettiamo.
Il caffè non ha tolleranze: «ormai freddo» è un giudizio unanime.
Il bicchierino ha fatto più soste del carrello attrezzi.
Il caffè del veterano viene con un commento sul passato.
Il caffè dello spaccone viene con una recensione non richiesta.
La tazzina non conosce FR01 e FR03, ma riconosce bene i sospiri.
Il cucchiaino ha chiesto di non essere coinvolto nel prossimo inventario.
Il caffè sul banco non è dimenticato: sta maturando una delusione.
La pausa caffè ha più battute che minuti disponibili.
La macchinetta è precisa: non offre mai il weekend al posto dell’espresso.
Il caffè non firma i controlli qualità, anche se era presente.
Il bicchierino ha un bel curriculum: mattino, pomeriggio e riunioni improvvisate.
La tazzina non si vanta della finitura: preferisce parlare di crema.
Il caffè è pronto; il momento giusto sta ancora cercando parcheggio.
Il cucchiaino è tornato al suo posto. Oggi possiamo sperare.
Il riposo non entra in una tazzina, neanche se è molto capiente.'''.splitlines()
translations=[['Ci vogliono cinque minuti.','Non abbiamo ancora trovato la brugola.'],['È un pezzo semplice.','Il disegno ha un retro.'],['Ho lasciato tutto pronto.','Ti ho lasciato una splendida opportunità di crescita.'],['È quasi finito.','La parola «quasi» sostiene tutto il discorso.'],['Manca solo un dettaglio.','Il dettaglio possiede una sua commessa.'],['L’utensile è qui da qualche parte.','Sta facendo esperienza in un altro cassetto.'],['Il materiale arriva a breve.','Il calendario non è stato informato.'],['Oggi è una giornata tranquilla.','Non abbiamo ancora aperto le email.'],['Passo solo a salutare.','Sto per chiederti una cosa sulla commessa.'],['È una modifica piccola.','Il disegno nuovo occupa lo stesso numero di pagine.'],['Poi sistemiamo il banco.','Il futuro è una categoria molto comoda.'],['Questo è proprio l’ultimo.','È l’ultimo della serie attualmente conosciuta.']]
match=re.search(r'const jokes=`(.*?)`\.split',Path('cartoon.js').read_text(encoding='utf-8'),re.S)
assert match,'Raccolta originale non trovata'
old=match.group(1).splitlines()
assert len(old)==100
main=[{'id':f'M{i:04d}','text':s,'machine':'both','activity':'','theme':'originali','origin':'raccolta_precedente'} for i,s in enumerate(old,1)]
for g,(theme,activity,starts,ends) in enumerate(groups):
    starts,ends=starts.splitlines(),ends.splitlines()
    assert len(starts)==9 and len(ends)==10
    for a,start in enumerate(starts):
        for b,end in enumerate(ends):
            idx=len(main)+1
            machine='FR01' if (g*90+a*10+b)%2==0 else 'FR03'
            other='FR03' if machine=='FR01' else 'FR01'
            text=f'{machine}: «{start}»\n{other}: «{end}»' if (a+b)%4==0 else start+' '+end
            main.append({'id':f'M{idx:04d}','text':text,'machine':machine,'activity':activity,'theme':theme,'origin':'composizione_originale_modulare'})
normalize=lambda s:re.sub(r'\W+','',unicodedata.normalize('NFKC',s).casefold())
assert len(main)==len({normalize(r['text']) for r in main})==1000
assert len(coffee)==len({normalize(s) for s in coffee})==100
assert all(main[i]['text']==s for i,s in enumerate(old))
data={'version':'0.2-full','authoring':'100 originali e 900 composizioni modulari originali; 100 frasi caffe separate. Non sono 900 idee comiche indipendenti.','personalities':{'FR01':{'gender':'maschile','role':'Veterano sarcastico'},'FR03':{'gender':'maschile','role':'Spaccone teatrale'}},'main':main,'coffee':[{'id':f'C{i:03d}','text':s} for i,s in enumerate(coffee,1)],'translations':[{'id':f'T{i:03d}','phrase':a,'meaning':b} for i,(a,b) in enumerate(translations,1)]}
encoded=json.dumps(data,ensure_ascii=False,separators=(',',':'))
Path('cartoon-trial-data.js').write_text('window.CncCartoonTrialData='+encoded+';\n',encoding='utf-8')
Path('cartoon-trial-data.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
source=Path('index.html').read_text(encoding='utf-8')
assert source.count("KEY='registro-cdl-v5'")==1
assert source.count("'registro-cdl-mode'")==1
assert source.count('</body>')==1
trial=source.replace("KEY='registro-cdl-v5'","KEY='registro-cdl-cartoon-trial-v1'").replace("'registro-cdl-mode'","'registro-cdl-mode-cartoon-trial-v1'")
trial=re.sub(r'<link\b[^>]*rel="manifest"[^>]*>','',trial)
trial=trial.replace('<title>Registro turno Centri Di Lavoro</title>','<title>PROVA Cartoon — Registro CDL</title>',1)
trial=trial.replace('<main>','<main><aside id="cartoon-trial-banner" class="notice"><strong>PROVA CARTOON COMPLETA</strong> · Bozze separate dalla versione attuale. <a href="./">Torna alla versione attuale</a></aside>',1)
trial=trial.replace('</head>','<meta name="robots" content="noindex"><style data-theme-boot>@media print{#cartoon-trial-banner{display:none!important}}</style></head>',1)
version=hashlib.sha256((encoded+Path('cartoon-trial.js').read_text(encoding='utf-8')).encode()).hexdigest()[:12]
trial=trial.replace('</body>',f'<script src="cartoon-trial-data.js?v={version}"></script><script src="cartoon-trial.js?v={version}"></script></body>',1)
Path('prova-cartoon.html').write_text(trial,encoding='utf-8')
assert Path('index.html').read_text(encoding='utf-8')==source
audit={'main':1000,'originali_conservate':100,'nuove_composizioni_modulari':900,'coffee':100,'translations':12,'main_unique_normalized':1000,'coffee_unique_normalized':100,'data_sha256':hashlib.sha256(encoded.encode()).hexdigest(),'baseline_commit':'bed57a2b64076527e680b6b69c50b813ee4986f8','production_index_unchanged':True,'browser_full_app_test':'Non ancora eseguito; precedentemente testata anteprima locale in Chromium, non app completa.'}
Path('cartoon-trial-audit.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(audit,ensure_ascii=False))
