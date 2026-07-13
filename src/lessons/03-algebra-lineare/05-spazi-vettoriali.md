---
id: algebra-05-spazi-vettoriali
titolo: "Spazi vettoriali e sottospazi"
materia: algebra-lineare
argomento: "Spazi vettoriali"
modulo: "Struttura vettoriale e trasformazioni"
livello: universitario
slug: algebra-05-spazi-vettoriali

# legacy
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: "Spazi vettoriali e sottospazi"
title_en: "Vector spaces and subspaces"
level: blue
order: 5
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Spazi vettoriali, sottospazi, span, immagine e nucleo come sottospazi"

prerequisiti:
  - algebra-01-vettori
  - algebra-04-rango-rouche-capelli

collegamenti:
  - algebra-01-vettori
  - algebra-04-rango-rouche-capelli
  - algebra-06-indipendenza-basi
  - algebra-07-trasformazioni-lineari

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Definizione di spazio vettoriale su ℝ, assiomi, sottospazi, criterio di sottospazio, span"
    note: "appunti-prof: notazione e ordine di presentazione coerenti con l'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Definizione assiomatica di spazio vettoriale, sottospazi, somma e span come sottospazio più piccolo"
    note: "rigore: impostazione astratta, spazi vettoriali oltre ℝⁿ (polinomi, funzioni)"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Span come insieme di combinazioni lineari, sottospazi come rette e piani per l'origine"
    note: "intuizione: lettura geometrica dei sottospazi"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Esempi di verifica dell'assiomatica, controesempi di non-sottospazi"
    note: "esempi supplementari e controesempi"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-13"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Fino a questo punto abbiamo lavorato con vettori-colonna in $\mathbb{R}^n$: liste ordinate di numeri che si sommano componente per componente e si moltiplicano per uno scalare. Tutta l'algebra lineare vista finora — combinazioni lineari, immagine e nucleo di una matrice, soluzioni di un sistema — poggia su queste due sole operazioni. Ma se ci fermiamo a osservare *quali proprietà* di queste operazioni abbiamo davvero usato, scopriamo qualcosa di sorprendente: non abbiamo mai usato il fatto che i vettori fossero «liste di numeri». Abbiamo usato solo che si potessero sommare e scalare in modo coerente. Lo **spazio vettoriale** è il concetto che nasce da questa osservazione: mettiamo da parte la natura concreta degli oggetti e teniamo solo le regole delle operazioni.

L'immagine giusta è quella di un mondo chiuso rispetto alle sue operazioni. Pensa a un piano infinito: qualunque coppia di frecce tu prenda, la loro somma è ancora una freccia del piano; qualunque freccia tu allunghi o rovesci, resti nel piano. Non c'è modo di «cadere fuori» combinando linearmente gli elementi. Uno spazio vettoriale è esattamente un insieme con questa proprietà di autosufficienza: le operazioni lineari non ti portano mai altrove. Questa chiusura è ciò che rende sensato parlare di rette, piani, dimensioni e direzioni indipendenti — tutte le idee che stiamo per costruire.

Perché conviene questa astrazione, invece di restare comodi in $\mathbb{R}^n$? Perché la *stessa* struttura ricompare in luoghi che a prima vista non hanno nulla a che vedere con le frecce. I polinomi di grado limitato si sommano e si scalano restando polinomi dello stesso grado: sono uno spazio vettoriale. Le funzioni continue su un intervallo idem. Le matrici $m\times n$ idem. Ogni teorema che dimostreremo sugli spazi vettoriali — sulle basi, sulla dimensione, sulle trasformazioni lineari — vale automaticamente in tutti questi contesti, senza ridimostrarlo caso per caso. L'astrazione non è un vezzo: è il modo in cui un solo argomento serve mille situazioni.

C'è infine un motivo che ci riguarda da vicino, come continuazione diretta della lezione sul rango. Là abbiamo incontrato due insiemi speciali associati a una matrice $A$: l'**immagine** $\operatorname{Im}(A)$, cioè tutti i $\mathbf{b}$ raggiungibili come $A\mathbf{x}$, e il **nucleo** $\ker(A)$, cioè tutte le soluzioni di $A\mathbf{x}=\mathbf{0}$. Li avevamo trattati operativamente, come sottoinsiemi utili. In questa lezione scopriremo che non sono sottoinsiemi qualunque: sono **sottospazi**, cioè spazi vettoriali dentro spazi vettoriali. È questo riconoscimento a dare senso pieno alla parola «dimensione» che abbiamo usato per contare i gradi di libertà delle soluzioni, e a preparare il teorema di nullità più rango nella sua forma definitiva.

---

## 2. Teoria

### 2.1 La definizione di spazio vettoriale

Uno **spazio vettoriale reale** è un insieme $V$, i cui elementi chiamiamo *vettori*, dotato di due operazioni: una **somma** che a ogni coppia $\mathbf{u},\mathbf{v}\in V$ associa un elemento $\mathbf{u}+\mathbf{v}\in V$, e una **moltiplicazione per scalare** che a ogni numero reale $c\in\mathbb{R}$ e ogni vettore $\mathbf{v}\in V$ associa un elemento $c\,\mathbf{v}\in V$. Queste due operazioni devono soddisfare otto proprietà, gli **assiomi**, validi per ogni $\mathbf{u},\mathbf{v},\mathbf{w}\in V$ e ogni $a,b\in\mathbb{R}$:

$$
\begin{aligned}
&\text{(A1) } \mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u} && \text{(commutatività)}\\
&\text{(A2) } (\mathbf{u}+\mathbf{v})+\mathbf{w}=\mathbf{u}+(\mathbf{v}+\mathbf{w}) && \text{(associatività della somma)}\\
&\text{(A3) } \exists\,\mathbf{0}\in V:\ \mathbf{v}+\mathbf{0}=\mathbf{v} && \text{(esiste il vettore nullo)}\\
&\text{(A4) } \forall\,\mathbf{v}\ \exists\,(-\mathbf{v}):\ \mathbf{v}+(-\mathbf{v})=\mathbf{0} && \text{(esiste l'opposto)}\\
&\text{(A5) } 1\,\mathbf{v}=\mathbf{v} && \text{(l'unità agisce da identità)}\\
&\text{(A6) } a(b\,\mathbf{v})=(ab)\,\mathbf{v} && \text{(compatibilità degli scalari)}\\
&\text{(A7) } a(\mathbf{u}+\mathbf{v})=a\,\mathbf{u}+a\,\mathbf{v} && \text{(distributività sui vettori)}\\
&\text{(A8) } (a+b)\,\mathbf{v}=a\,\mathbf{v}+b\,\mathbf{v} && \text{(distributività sugli scalari)}
\end{aligned}
$$

Leggiamo che cosa dice davvero questa lista, perché è facile lasciarsi intimidire dagli otto punti. Gli assiomi si dividono in due gruppi. I primi quattro (A1–A4) riguardano la sola somma e affermano che $V$ con l'operazione $+$ si comporta come l'insieme dei numeri interi rispetto all'addizione: puoi sommare in qualunque ordine (A1), raggruppare come vuoi (A2), c'è uno «zero» che non cambia nulla (A3) e ogni elemento ha un opposto che lo annulla (A4). I restanti quattro (A5–A8) governano l'interazione fra scalari e vettori: moltiplicare per $1$ non fa nulla (A5), moltiplicare due volte equivale a moltiplicare per il prodotto (A6), e la moltiplicazione si distribuisce sia rispetto alla somma di vettori (A7) sia rispetto alla somma di scalari (A8). Non c'è nessun assioma che descriva *cosa sono* gli elementi: è precisamente questa reticenza a rendere il concetto così ampio.

Due chiusure sono implicite nelle definizioni delle operazioni e vale la pena renderle esplicite, perché saranno il cuore del criterio di sottospazio: la somma di due elementi di $V$ è un elemento di $V$, e il multiplo scalare di un elemento di $V$ è un elemento di $V$. In simboli, $\mathbf{u}+\mathbf{v}\in V$ e $c\,\mathbf{v}\in V$. Senza queste due chiusure le operazioni non sarebbero nemmeno ben definite come operazioni «interne» a $V$.

*Micro-esempio.* In $\mathbb{R}^2$ l'assioma (A8) con $a=2$, $b=3$, $\mathbf{v}=(1,4)$ dice $(2+3)(1,4)=5\cdot(1,4)=(5,20)$ e anche $2(1,4)+3(1,4)=(2,8)+(3,12)=(5,20)$: i due lati coincidono, come devono. Nulla di misterioso; l'assioma registra una regola che in $\mathbb{R}^n$ già davamo per scontata.

Dagli assiomi seguono due fatti che useremo continuamente e che *non* sono assiomi ma teoremi (li dimostreremo nella sezione 3): il vettore nullo è unico, e per ogni $\mathbf{v}$ vale $0\,\mathbf{v}=\mathbf{0}$, cioè moltiplicare per lo scalare zero produce sempre il vettore nullo. Quest'ultima uguaglianza è la ragione profonda per cui $\mathbf{0}$ deve appartenere a ogni sottospazio.

### 2.2 Esempi di spazi vettoriali

La forza del concetto si vede solo attraverso la varietà degli esempi. Elenchiamone alcuni, verificando in ciascuno che le operazioni chiudano e che il vettore nullo esista — le due condizioni che di solito rischiano di fallire; gli altri assiomi sono di norma eredità automatica delle proprietà dei numeri reali.

Lo spazio $\mathbb{R}^n$ dei vettori-colonna è l'esempio archetipico, quello da cui abbiamo astratto tutto: somma componente per componente, scalatura componente per componente, vettore nullo $(0,\dots,0)$. Lo spazio $M_{m,n}(\mathbb{R})$ delle matrici $m\times n$ reali è uno spazio vettoriale con la somma di matrici e la moltiplicazione per scalare viste nella lezione sulle matrici: il vettore nullo è la matrice tutta di zeri. Lo spazio $P_n$ dei polinomi di grado al più $n$ (a coefficienti reali) è uno spazio vettoriale: sommando due polinomi di grado $\le n$ si resta di grado $\le n$, il polinomio nullo fa da zero. Lo spazio $C[a,b]$ delle funzioni continue su un intervallo $[a,b]$ è uno spazio vettoriale: la somma di funzioni continue è continua, la funzione identicamente nulla è lo zero.

*Micro-esempio.* In $P_2$ sommo $p(x)=1+x^2$ e $q(x)=2x-x^2$: ottengo $p+q=1+2x$, ancora un polinomio di grado $\le 2$. Moltiplico $p$ per $-3$: ottengo $-3-3x^2$, ancora in $P_2$. Le chiusure valgono, e infatti $P_2$ è uno spazio vettoriale benché i suoi «vettori» siano polinomi, non frecce.

Un caso da tenere a mente come promemoria dei limiti: l'insieme dei polinomi di grado *esattamente* $2$ **non** è uno spazio vettoriale. Sommando $x^2+x$ e $-x^2+1$ si ottiene $x+1$, che ha grado $1$: la somma è uscita dall'insieme. La parola «esattamente» rompe la chiusura. È il tipo di dettaglio che distingue uno spazio vettoriale da un insieme che gli somiglia soltanto.

### 2.3 Sottospazi

Nella pratica raramente costruiamo uno spazio vettoriale da zero; molto più spesso ne isoliamo una parte dentro uno spazio già noto. Un **sottospazio** di uno spazio vettoriale $V$ è un sottoinsieme $W\subseteq V$ che è a sua volta uno spazio vettoriale con le *stesse* operazioni di $V$. Il punto delicato è che non serve riverificare tutti e otto gli assiomi: proprietà come la commutatività o l'associatività, valide in tutto $V$, restano automaticamente valide su qualunque suo sottoinsieme. L'unica cosa che può andare storta è che le operazioni ti facciano *uscire* da $W$, oppure che $\mathbf{0}$ manchi. Questa osservazione si cristallizza in un criterio compatto e operativo.

**Criterio di sottospazio.** Un sottoinsieme $W\subseteq V$ è un sottospazio di $V$ se e solo se sono soddisfatte tre condizioni:

$$
\text{(S1) } \mathbf{0}\in W, \qquad
\text{(S2) } \mathbf{u},\mathbf{v}\in W \Rightarrow \mathbf{u}+\mathbf{v}\in W, \qquad
\text{(S3) } \mathbf{v}\in W,\ c\in\mathbb{R} \Rightarrow c\,\mathbf{v}\in W.
$$

La condizione (S1) chiede che $W$ non sia vuoto e, di più, che contenga il vettore nullo; (S2) è la chiusura rispetto alla somma; (S3) la chiusura rispetto alla moltiplicazione per scalare. Le tre condizioni si possono comprimere in una sola: $W$ è un sottospazio se e solo se è non vuoto e chiuso per combinazioni lineari, cioè $\alpha\mathbf{u}+\beta\mathbf{v}\in W$ per ogni $\mathbf{u},\mathbf{v}\in W$ e ogni $\alpha,\beta\in\mathbb{R}$. Le due formulazioni sono equivalenti: da (S2) e (S3) si ottiene la chiusura per combinazioni lineari applicandole in sequenza, e viceversa scegliendo $\alpha=\beta=1$ si recupera (S2), scegliendo $\beta=0$ si recupera (S3).

Vale la pena capire perché (S1) è indispensabile e non ridondante. Si potrebbe pensare che $\mathbf{0}\in W$ segua da (S3) ponendo $c=0$: in effetti $0\,\mathbf{v}=\mathbf{0}$, quindi se $W$ contiene *almeno un* vettore $\mathbf{v}$, la chiusura scalare costringe $\mathbf{0}$ a stare in $W$. Il vero ruolo di (S1) è allora duplice: escludere il caso patologico $W=\varnothing$ (l'insieme vuoto soddisfa vacuamente (S2) e (S3) ma non è uno spazio vettoriale, che per (A3) deve contenere uno zero) e, nella pratica, offrire il test più veloce del mondo per bocciare un candidato — se $\mathbf{0}\notin W$, hai già finito: $W$ non è un sottospazio.

*Micro-esempio.* La retta $W=\{(x,y)\in\mathbb{R}^2: y=2x\}$ è un sottospazio: contiene $(0,0)$; la somma di $(x_1,2x_1)$ e $(x_2,2x_2)$ è $(x_1+x_2,\,2(x_1+x_2))$, ancora della forma richiesta; e $c(x,2x)=(cx,2cx)$ pure. La retta $W'=\{(x,y):y=2x+1\}$, invece, non contiene $(0,0)$ perché $0\neq 2\cdot 0+1$: per il solo test (S1) non è un sottospazio, e non serve controllare altro.

Geometricamente, in $\mathbb{R}^2$ i sottospazi sono soltanto tre tipi di oggetti: il sottospazio nullo $\{\mathbf{0}\}$ (il solo punto origine), le rette passanti per l'origine, e l'intero $\mathbb{R}^2$. In $\mathbb{R}^3$ si aggiungono i piani per l'origine. Il filo conduttore è netto: *un sottospazio deve sempre passare per l'origine*. Ogni retta o piano che non contiene l'origine è, al più, la traslazione di un sottospazio, ma non un sottospazio.

```checkpoint
{"domanda": "L'insieme $W=\\{(x,y,z)\\in\\mathbb{R}^3 : x+y+z=0\\}$ è un sottospazio di $\\mathbb{R}^3$? E l'insieme $U=\\{(x,y,z): x+y+z=1\\}$?", "risposta": "$W$ sì: contiene $(0,0,0)$ perché $0+0+0=0$; se $x_1+y_1+z_1=0$ e $x_2+y_2+z_2=0$ allora la loro somma soddisfa $(x_1+x_2)+(y_1+y_2)+(z_1+z_2)=0$, e ogni multiplo $c(x,y,z)$ dà $cx+cy+cz=c\\cdot 0=0$. È un piano per l'origine. $U$ no: $(0,0,0)$ non appartiene perché $0\\neq 1$; già (S1) fallisce. $U$ è il piano $x+y+z=1$, che è $W$ traslato e non passa per l'origine."}
```

### 2.4 Span: costruire sottospazi dai vettori

C'è un modo canonico di fabbricare sottospazi: partire da alcuni vettori e prendere *tutte* le loro combinazioni lineari. Dati $\mathbf{v}_1,\dots,\mathbf{v}_k\in V$, il loro **span** (o involucro lineare, o sottospazio generato) è l'insieme

$$
\operatorname{span}\{\mathbf{v}_1,\dots,\mathbf{v}_k\}=\left\{\,c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k \;:\; c_1,\dots,c_k\in\mathbb{R}\,\right\}.
$$

A parole: lo span raccoglie ogni vettore che si possa ottenere combinando linearmente i generatori, con qualunque scelta di coefficienti reali. Diremo che i vettori $\mathbf{v}_1,\dots,\mathbf{v}_k$ **generano** $W$, o che sono un *insieme di generatori* di $W$, quando $W=\operatorname{span}\{\mathbf{v}_1,\dots,\mathbf{v}_k\}$. Lo span è sempre un sottospazio (lo dimostreremo nella sezione 3) e, di più, è il *più piccolo* sottospazio che contiene i generatori: qualunque sottospazio che contenga $\mathbf{v}_1,\dots,\mathbf{v}_k$ è costretto, per chiusura, a contenere tutte le loro combinazioni lineari, cioè tutto lo span.

*Micro-esempio.* $\operatorname{span}\{(1,0,0),(0,1,0)\}$ in $\mathbb{R}^3$ è l'insieme dei vettori $a(1,0,0)+b(0,1,0)=(a,b,0)$: il piano $z=0$. Un solo vettore non nullo genera invece una retta: $\operatorname{span}\{(1,2)\}=\{(c,2c):c\in\mathbb{R}\}$, la retta $y=2x$.

Lo span è il ponte esatto verso il rango della lezione precedente. Ricorda la lettura del prodotto matrice-vettore per colonne: $A\mathbf{x}$ è la combinazione lineare delle colonne di $A$ con coefficienti le componenti di $\mathbf{x}$. Quindi l'immagine $\operatorname{Im}(A)=\{A\mathbf{x}:\mathbf{x}\in\mathbb{R}^n\}$ è *esattamente lo span delle colonne* di $A$. Il rango, che avevamo definito come numero di pivot, misura quante di quelle colonne sono davvero indipendenti — cioè, come vedremo nella prossima lezione, la dimensione dello span che esse generano. Immagine e nucleo, che nella lezione sul rango erano insiemi utili, si rivelano ora due sottospazi: il primo un sottospazio di $\mathbb{R}^m$ (lo spazio d'arrivo), il secondo un sottospazio di $\mathbb{R}^n$ (lo spazio di partenza).

```checkpoint
{"domanda": "Sia $A$ una matrice $3\\times 2$. In quale spazio vive $\\operatorname{Im}(A)$ e in quale vive $\\ker(A)$? Di quali vettori è lo span, l'immagine?", "risposta": "$A$ manda vettori di $\\mathbb{R}^2$ in vettori di $\\mathbb{R}^3$. Perciò $\\operatorname{Im}(A)=\\{A\\mathbf{x}:\\mathbf{x}\\in\\mathbb{R}^2\\}$ è un sottospazio di $\\mathbb{R}^3$ (lo spazio d'arrivo), ed è lo span delle $2$ colonne di $A$, ciascuna un vettore di $\\mathbb{R}^3$. Il nucleo $\\ker(A)=\\{\\mathbf{x}\\in\\mathbb{R}^2:A\\mathbf{x}=\\mathbf{0}\\}$ è invece un sottospazio di $\\mathbb{R}^2$ (lo spazio di partenza)."}
```

### 2.5 Un sottospazio deve passare per l'origine: la lezione dello slider

Il tratto che più spesso sfugge è che la chiusura, e in particolare la condizione $\mathbf{0}\in W$, sono davvero vincolanti: bastano a distinguere i sottoinsiemi «buoni» da quelli che gli somigliano ma falliscono. Lo strumento interattivo qui sotto isola proprio questo punto. Considera la retta di equazione $y=x+c$ nel piano e fai variare la traslazione verticale $c$.

```slider
{"title": "La retta y = x + c è un sottospazio solo quando passa per l'origine (parametro: traslazione c)", "fn": "x + a", "domain": [-4, 4], "yDomain": [-5, 5], "pname": "a", "pmin": -3, "pmax": 3, "pdefault": 0, "pstep": 0.1, "plabel": "traslazione verticale c", "label1": "retta y = x + c"}
```

Per $c=0$ la retta passa per l'origine: contiene $(0,0)$, e si verifica facilmente che è chiusa per somma e scalatura — è il sottospazio $\operatorname{span}\{(1,1)\}$. Appena sposti $c$ fuori da zero, la retta si stacca dall'origine: ora $(0,0)$ non le appartiene più, e con esso cade la condizione (S1). Ma cade anche la chiusura: prendi due punti sulla retta $y=x+c$ con $c\neq 0$, ad esempio $(0,c)$ e $(1,1+c)$; la loro somma è $(1,1+2c)$, che sta sulla retta $y=x+(2c)\neq y=x+c$. La somma è uscita. Manipolando il parametro si vede a colpo d'occhio ciò che una figura statica potrebbe solo suggerire: *lo stesso oggetto geometrico* (una retta con la stessa pendenza) è un sottospazio o non lo è a seconda di un unico numero, la sua distanza dall'origine.

---

## 3. Dimostrazioni

### 3.1 Lo span è il più piccolo sottospazio contenente i generatori

**Enunciato.** Siano $\mathbf{v}_1,\dots,\mathbf{v}_k$ vettori di uno spazio vettoriale $V$, e sia $W=\operatorname{span}\{\mathbf{v}_1,\dots,\mathbf{v}_k\}$. Allora $W$ è un sottospazio di $V$; inoltre, se $U$ è un qualunque sottospazio di $V$ che contiene tutti i $\mathbf{v}_i$, allora $W\subseteq U$. In questo senso $W$ è il più piccolo sottospazio che contiene i generatori.

**Dimostrazione.** Verifichiamo prima che $W$ soddisfa il criterio di sottospazio (S1)–(S3).

Per (S1), scegliamo tutti i coefficienti nulli: $0\,\mathbf{v}_1+\cdots+0\,\mathbf{v}_k=\mathbf{0}$. Questa è una combinazione lineare dei generatori con coefficienti in $\mathbb{R}$, dunque appartiene a $W$. Perciò $\mathbf{0}\in W$.

Per (S2), prendiamo due elementi di $W$. Per definizione di span, ciascuno è una combinazione lineare dei generatori: $\mathbf{u}=\sum_{i=1}^k a_i\mathbf{v}_i$ e $\mathbf{w}=\sum_{i=1}^k b_i\mathbf{v}_i$, con coefficienti $a_i,b_i\in\mathbb{R}$. La loro somma è

$$
\mathbf{u}+\mathbf{w}=\sum_{i=1}^k a_i\mathbf{v}_i+\sum_{i=1}^k b_i\mathbf{v}_i=\sum_{i=1}^k (a_i+b_i)\mathbf{v}_i,
$$

dove nel raggruppare i termini abbiamo usato gli assiomi di commutatività e associatività della somma (A1, A2) e la distributività (A8). Il risultato è di nuovo una combinazione lineare dei $\mathbf{v}_i$, con coefficienti $a_i+b_i\in\mathbb{R}$: dunque $\mathbf{u}+\mathbf{w}\in W$.

Per (S3), sia $\mathbf{u}=\sum_{i=1}^k a_i\mathbf{v}_i\in W$ e $c\in\mathbb{R}$. Allora

$$
c\,\mathbf{u}=c\sum_{i=1}^k a_i\mathbf{v}_i=\sum_{i=1}^k (c\,a_i)\mathbf{v}_i,
$$

avendo usato la distributività dello scalare sulla somma di vettori (A7) e la compatibilità degli scalari (A6). Anche questo è una combinazione lineare dei generatori, con coefficienti $c\,a_i\in\mathbb{R}$: dunque $c\,\mathbf{u}\in W$. Le tre condizioni valgono, quindi $W$ è un sottospazio.

Resta la minimalità. Sia $U$ un sottospazio con $\mathbf{v}_1,\dots,\mathbf{v}_k\in U$. Prendiamo un generico $\mathbf{u}=\sum_{i=1}^k a_i\mathbf{v}_i\in W$ e mostriamo che $\mathbf{u}\in U$. Poiché ogni $\mathbf{v}_i$ sta in $U$ e $U$ è chiuso per la moltiplicazione scalare, ogni $a_i\mathbf{v}_i\in U$; e poiché $U$ è chiuso per la somma, anche la somma $a_1\mathbf{v}_1+\cdots+a_k\mathbf{v}_k$ sta in $U$. Dunque $\mathbf{u}\in U$. Essendo $\mathbf{u}$ arbitrario in $W$, concludiamo $W\subseteq U$. $\blacksquare$

Il valore di questo teorema va oltre il tecnicismo: giustifica l'uso della parola «genera» e stabilisce che descrivere un sottospazio elencandone i generatori non perde nulla, perché lo span cattura esattamente il sottospazio più economico compatibile con quei vettori.

### 3.2 Immagine e nucleo di una matrice sono sottospazi

**Enunciato.** Sia $A$ una matrice $m\times n$ reale. Allora $\ker(A)=\{\mathbf{x}\in\mathbb{R}^n: A\mathbf{x}=\mathbf{0}\}$ è un sottospazio di $\mathbb{R}^n$, e $\operatorname{Im}(A)=\{A\mathbf{x}:\mathbf{x}\in\mathbb{R}^n\}$ è un sottospazio di $\mathbb{R}^m$.

**Dimostrazione (nucleo).** Usiamo il criterio (S1)–(S3), sfruttando la linearità del prodotto matrice-vettore stabilita nella lezione sulle matrici: $A(\mathbf{x}+\mathbf{y})=A\mathbf{x}+A\mathbf{y}$ e $A(c\mathbf{x})=c\,A\mathbf{x}$.

Per (S1): $A\,\mathbf{0}=\mathbf{0}$, perché ogni colonna moltiplicata per il coefficiente zero non contribuisce; dunque $\mathbf{0}\in\ker(A)$. Per (S2): siano $\mathbf{x},\mathbf{y}\in\ker(A)$, cioè $A\mathbf{x}=\mathbf{0}$ e $A\mathbf{y}=\mathbf{0}$; allora $A(\mathbf{x}+\mathbf{y})=A\mathbf{x}+A\mathbf{y}=\mathbf{0}+\mathbf{0}=\mathbf{0}$, quindi $\mathbf{x}+\mathbf{y}\in\ker(A)$. Per (S3): sia $\mathbf{x}\in\ker(A)$ e $c\in\mathbb{R}$; allora $A(c\mathbf{x})=c\,A\mathbf{x}=c\,\mathbf{0}=\mathbf{0}$, quindi $c\mathbf{x}\in\ker(A)$. Il nucleo è un sottospazio di $\mathbb{R}^n$. $\blacksquare$

<details class="dim-tecnica">
<summary>Dimostrazione per l'immagine (stesso schema, lettura per colonne)</summary>

Per l'immagine conviene ricordare che $\operatorname{Im}(A)$ è lo span delle colonne di $A$: per la sezione 3.1 uno span è già automaticamente un sottospazio, e questo basterebbe. Verifichiamolo comunque direttamente col criterio, perché è istruttivo.

Per (S1): $\mathbf{0}=A\,\mathbf{0}\in\operatorname{Im}(A)$, dato che $\mathbf{0}$ è raggiunto dall'ingresso $\mathbf{x}=\mathbf{0}$.

Per (S2): siano $\mathbf{b}_1,\mathbf{b}_2\in\operatorname{Im}(A)$; per definizione esistono ingressi $\mathbf{x}_1,\mathbf{x}_2$ con $\mathbf{b}_1=A\mathbf{x}_1$ e $\mathbf{b}_2=A\mathbf{x}_2$. Allora

$$
\mathbf{b}_1+\mathbf{b}_2=A\mathbf{x}_1+A\mathbf{x}_2=A(\mathbf{x}_1+\mathbf{x}_2),
$$

che è $A$ applicata all'ingresso $\mathbf{x}_1+\mathbf{x}_2$: dunque $\mathbf{b}_1+\mathbf{b}_2\in\operatorname{Im}(A)$.

Per (S3): sia $\mathbf{b}=A\mathbf{x}\in\operatorname{Im}(A)$ e $c\in\mathbb{R}$; allora $c\,\mathbf{b}=c\,A\mathbf{x}=A(c\mathbf{x})$, raggiunto dall'ingresso $c\mathbf{x}$: dunque $c\,\mathbf{b}\in\operatorname{Im}(A)$.

Le tre condizioni valgono: $\operatorname{Im}(A)$ è un sottospazio di $\mathbb{R}^m$. Si noti la simmetria con la dimostrazione del nucleo: in entrambi i casi il motore è la sola linearità di $A$, non la sua forma particolare.

</details>

### 3.3 Conseguenze immediate degli assiomi

<details class="dim-tecnica">
<summary>Il vettore nullo è unico e vale 0·v = 0 (dimostrazioni dagli assiomi)</summary>

Questi due fatti erano stati annunciati nella sezione 2.1 come teoremi. Dimostriamoli, perché mostrano come si ragiona a partire dai soli assiomi, senza appoggiarsi all'intuizione delle frecce.

**Unicità del vettore nullo.** Supponiamo che esistano due vettori $\mathbf{0}$ e $\mathbf{0}'$ che si comportano entrambi da elemento neutro, cioè $\mathbf{v}+\mathbf{0}=\mathbf{v}$ e $\mathbf{v}+\mathbf{0}'=\mathbf{v}$ per ogni $\mathbf{v}$. Allora, usando la prima proprietà con $\mathbf{v}=\mathbf{0}'$ e la seconda con $\mathbf{v}=\mathbf{0}$:

$$
\mathbf{0}'=\mathbf{0}'+\mathbf{0}=\mathbf{0}+\mathbf{0}'=\mathbf{0},
$$

dove il passaggio centrale è la commutatività (A1). Quindi $\mathbf{0}'=\mathbf{0}$: il neutro è unico.

**La proprietà $0\,\mathbf{v}=\mathbf{0}$.** Partiamo da un'uguaglianza numerica banale, $0=0+0$, e moltiplichiamola per $\mathbf{v}$. Per la distributività sugli scalari (A8):

$$
0\,\mathbf{v}=(0+0)\,\mathbf{v}=0\,\mathbf{v}+0\,\mathbf{v}.
$$

Ora sommiamo a entrambi i membri l'opposto $-(0\,\mathbf{v})$, che esiste per (A4):

$$
0\,\mathbf{v}+\big(-(0\,\mathbf{v})\big)=\big(0\,\mathbf{v}+0\,\mathbf{v}\big)+\big(-(0\,\mathbf{v})\big).
$$

Il membro sinistro è $\mathbf{0}$ per definizione di opposto. Il destro, per associatività (A2), è $0\,\mathbf{v}+\big(0\,\mathbf{v}+(-(0\,\mathbf{v}))\big)=0\,\mathbf{v}+\mathbf{0}=0\,\mathbf{v}$ per (A3). Uguagliando: $\mathbf{0}=0\,\mathbf{v}$. È questa uguaglianza, valida in *ogni* spazio vettoriale, a garantire che ogni sottospazio non vuoto e chiuso per scalatura contenga il vettore nullo.

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — Una retta per l'origine.** Verifichiamo che $W=\{(x,y)\in\mathbb{R}^2: y=3x\}$ è un sottospazio. Il vettore nullo: $(0,0)$ soddisfa $0=3\cdot 0$, dunque $\mathbf{0}\in W$. Somma: dati $(x_1,3x_1)$ e $(x_2,3x_2)$, la somma è $(x_1+x_2,\,3x_1+3x_2)=(x_1+x_2,\,3(x_1+x_2))$, di nuovo della forma $(x,3x)$. Scalatura: $c(x,3x)=(cx,3cx)=(cx,\,3(cx))$. Le tre condizioni valgono; $W$ è la retta di pendenza $3$ per l'origine, cioè $\operatorname{span}\{(1,3)\}$.

**Esempio 2 (introduttivo) — Un candidato che fallisce per (S1).** L'insieme $W=\{(x,y):x+y=4\}$ non è un sottospazio. Basta la prima verifica: $(0,0)$ dà $0+0=0\neq 4$, dunque $\mathbf{0}\notin W$. Non serve controllare le chiusure. Geometricamente $W$ è una retta che non passa per l'origine.

**Esempio 3 (introduttivo) — Chiusura violata dalla scalatura.** Il primo quadrante $W=\{(x,y):x\ge 0,\ y\ge 0\}$ contiene $\mathbf{0}$ ed è chiuso per la somma (sommando coppie di numeri non negativi si resta non negativi). Tuttavia non è chiuso per scalatura: $(1,1)\in W$ ma $(-1)\cdot(1,1)=(-1,-1)\notin W$. Manca (S3), quindi non è un sottospazio. Questo esempio mostra che $\mathbf{0}\in W$ e la chiusura per somma non bastano da soli.

**Esempio 4 (intermedio) — Un piano per l'origine in $\mathbb{R}^3$.** Sia $W=\{(x,y,z):x-2y+z=0\}$. È un sottospazio: contiene $(0,0,0)$; se due punti soddisfano l'equazione, la loro somma la soddisfa perché $\big((x_1+x_2)-2(y_1+y_2)+(z_1+z_2)\big)=(x_1-2y_1+z_1)+(x_2-2y_2+z_2)=0+0=0$; e ogni multiplo scalare la soddisfa perché $c(x-2y+z)=c\cdot 0=0$. È un piano per l'origine. Possiamo anche descriverlo come span: risolvendo $x=2y-z$, i punti sono $(2y-z,\,y,\,z)=y(2,1,0)+z(-1,0,1)$, dunque $W=\operatorname{span}\{(2,1,0),(-1,0,1)\}$.

**Esempio 5 (intermedio) — Nucleo di una matrice come sottospazio.** Sia $A=\begin{psmallmatrix}1&2&-1\\2&4&-2\end{psmallmatrix}$. La seconda riga è il doppio della prima, quindi il sistema $A\mathbf{x}=\mathbf{0}$ si riduce all'unica equazione $x_1+2x_2-x_3=0$, cioè $x_1=-2x_2+x_3$. Con $x_2=s$, $x_3=t$ liberi:

$$
\ker(A)=\left\{s\begin{psmallmatrix}-2\\1\\0\end{psmallmatrix}+t\begin{psmallmatrix}1\\0\\1\end{psmallmatrix}:s,t\in\mathbb{R}\right\}=\operatorname{span}\left\{\begin{psmallmatrix}-2\\1\\0\end{psmallmatrix},\begin{psmallmatrix}1\\0\\1\end{psmallmatrix}\right\}.
$$

Il nucleo è un piano per l'origine in $\mathbb{R}^3$: la teoria della sezione 3.2 garantiva che fosse un sottospazio, e il calcolo lo esibisce come span dei suoi generatori.

**Esempio 6 (intermedio) — Immagine come span delle colonne.** Per la stessa $A$ dell'esempio 5, l'immagine è lo span delle tre colonne $(1,2)^{\!\top}$, $(2,4)^{\!\top}$, $(-1,-2)^{\!\top}$. Ma la seconda è il doppio della prima e la terza è la prima cambiata di segno: tutte e tre sono multiple di $(1,2)^{\!\top}$. Quindi $\operatorname{Im}(A)=\operatorname{span}\{(1,2)^{\!\top}\}$, la retta $y=2x$ in $\mathbb{R}^2$. Nota la coerenza con il rango: $A$ ha un solo pivot, il rango è $1$, e infatti l'immagine è unidimensionale mentre il nucleo (due variabili libere) è bidimensionale — $1+2=3$, il numero di colonne, come vuole nullità più rango.

**Esempio 7 (avanzato) — Sottospazi di uno spazio di polinomi.** Nello spazio $P_3$ dei polinomi di grado $\le 3$, l'insieme $W=\{p\in P_3: p(0)=0\}$ (i polinomi che si annullano in zero, cioè senza termine noto) è un sottospazio. Il polinomio nullo si annulla in $0$; se $p(0)=0$ e $q(0)=0$ allora $(p+q)(0)=p(0)+q(0)=0$; e $(cp)(0)=c\,p(0)=0$. Invece $W'=\{p\in P_3:p(0)=1\}$ non è un sottospazio: il polinomio nullo dà $0\neq 1$, quindi (S1) fallisce. L'esempio mostra che «sottospazio» è un concetto che vive anche fuori da $\mathbb{R}^n$, purché le operazioni siano quelle di somma e scalatura dello spazio ambiente.

**Esempio 8 (applicativo) — Lo spazio delle soluzioni di un'equazione differenziale.** Nello spazio $C^2(\mathbb{R})$ delle funzioni due volte derivabili, l'insieme delle soluzioni dell'equazione $y''+y=0$ è un sottospazio. La funzione nulla è soluzione; se $y_1$ e $y_2$ risolvono, allora $(y_1+y_2)''+(y_1+y_2)=(y_1''+y_1)+(y_2''+y_2)=0+0=0$, e $(cy_1)''+(cy_1)=c(y_1''+y_1)=0$. È lo stesso meccanismo del nucleo di una matrice: l'operatore «$y\mapsto y''+y$» è lineare, e il suo nucleo — le soluzioni dell'equazione omogenea — è un sottospazio. Questo spiega, in una riga, perché le soluzioni di un'equazione differenziale lineare omogenea si combinano linearmente: è il principio di sovrapposizione, e non è altro che chiusura di un sottospazio.

---

## 5. Collegamenti e riepilogo

Questa lezione compie il salto dall'algebra lineare «concreta» di $\mathbb{R}^n$ alla sua forma strutturale. La struttura di **vettori** e le loro combinazioni lineari, viste in [algebra-01-vettori], vengono qui riconosciute come istanze di un concetto assiomatico che ospita anche matrici, polinomi e funzioni. Soprattutto, la lezione salda un debito lasciato aperto dal [algebra-04-rango-rouche-capelli]: immagine e nucleo, là trattati come insiemi operativi, sono ora dimostrati essere sottospazi, e il rango si rivela come misura della dimensione dell'immagine. La nozione di **span** introdotta qui è il linguaggio con cui la prossima lezione [algebra-06-indipendenza-basi] definirà indipendenza lineare, base e dimensione: una base non è che un insieme di generatori minimo, e la dimensione il numero di elementi di una base. Il fatto che immagine e nucleo siano sottospazi con una dimensione ben definita è ciò che dà senso pieno al teorema di nullità più rango, che riapparirà come «teorema fondamentale delle applicazioni lineari» quando la matrice sarà letta come **trasformazione lineare** in [algebra-07-trasformazioni-lineari].

Fuori dall'algebra lineare, la struttura di spazio vettoriale è il vocabolario di intere discipline. In analisi, gli spazi di funzioni (continue, integrabili, derivabili) sono spazi vettoriali di dimensione infinita, e le soluzioni di equazioni differenziali lineari omogenee ne sono sottospazi: è la ragione strutturale del principio di sovrapposizione. In statistica ed econometria, l'insieme delle predizioni $X\boldsymbol\beta$ di un modello lineare è lo span delle colonne della matrice di disegno, e la stima ai minimi quadrati è una proiezione su quel sottospazio. In meccanica quantistica, gli stati di un sistema vivono in uno spazio vettoriale (di Hilbert) e il principio di sovrapposizione è, letteralmente, la chiusura per combinazioni lineari.

**Idee chiave da ricordare.** Uno spazio vettoriale è un insieme chiuso per somma e moltiplicazione scalare che soddisfa gli otto assiomi; ciò che conta non è la natura degli elementi ma il comportamento delle operazioni. Un sottospazio è un sottoinsieme che è a sua volta spazio vettoriale, e si riconosce col criterio compatto: contiene $\mathbf{0}$ ed è chiuso per somma e scalatura (equivalentemente, per combinazioni lineari). Il test più rapido per bocciare un candidato è $\mathbf{0}\notin W$: ogni sottospazio passa per l'origine. Lo span di alcuni vettori è il più piccolo sottospazio che li contiene, ed è il modo canonico di costruire sottospazi. Immagine e nucleo di una matrice sono sottospazi — rispettivamente dello spazio d'arrivo e di quello di partenza — e l'immagine è lo span delle colonne, il che riallaccia questa lezione al rango.

---

## 6. Esercizi

<details class="dim-tecnica">
<summary>Esercizio 1 (introduttivo) — Retta per l'origine</summary>

**Testo.** Stabilire se $W=\{(x,y)\in\mathbb{R}^2: 3x-2y=0\}$ è un sottospazio di $\mathbb{R}^2$; in caso affermativo, scriverlo come span di un vettore.

**Soluzione.** (S1): $(0,0)$ dà $3\cdot 0-2\cdot 0=0$, quindi $\mathbf{0}\in W$. (S2): se $3x_1-2y_1=0$ e $3x_2-2y_2=0$, allora $3(x_1+x_2)-2(y_1+y_2)=(3x_1-2y_1)+(3x_2-2y_2)=0$. (S3): $3(cx)-2(cy)=c(3x-2y)=0$. Le tre condizioni valgono: $W$ è un sottospazio. Risolvendo $y=\tfrac32 x$, i punti sono $(x,\tfrac32 x)=x(1,\tfrac32)$, dunque $W=\operatorname{span}\{(2,3)\}$ (scelto il generatore $(2,3)$ per evitare frazioni).

</details>

<details class="dim-tecnica">
<summary>Esercizio 2 (introduttivo) — Un disco non è un sottospazio</summary>

**Testo.** L'insieme $W=\{(x,y)\in\mathbb{R}^2:x^2+y^2\le 1\}$ (disco unitario chiuso) è un sottospazio?

**Soluzione.** Il vettore nullo appartiene: $0^2+0^2=0\le 1$. Ma la chiusura per scalatura fallisce: $(1,0)\in W$, mentre $3\cdot(1,0)=(3,0)$ ha $3^2+0^2=9>1$, quindi $(3,0)\notin W$. Manca (S3): $W$ non è un sottospazio. (Fallisce anche (S2): $(1,0)+(0,1)=(1,1)$ ha norma al quadrato $2>1$.)

</details>

<details class="dim-tecnica">
<summary>Esercizio 3 (intermedio) — Span di due vettori in ℝ³</summary>

**Testo.** Descrivere geometricamente $\operatorname{span}\{(1,1,0),(0,1,1)\}$ in $\mathbb{R}^3$ e trovarne un'equazione cartesiana.

**Soluzione.** Un generico elemento è $a(1,1,0)+b(0,1,1)=(a,\,a+b,\,b)$. Ponendo $x=a$, $y=a+b$, $z=b$ si ha $y=x+z$, cioè $x-y+z=0$. I due generatori non sono proporzionali, quindi lo span è un piano (non una retta) per l'origine, di equazione $x-y+z=0$. È un sottospazio $2$-dimensionale di $\mathbb{R}^3$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 4 (intermedio) — Nucleo di una matrice</summary>

**Testo.** Trovare $\ker(A)$ per $A=\begin{psmallmatrix}1&-1&2\\2&-2&4\end{psmallmatrix}$ e verificare che è un sottospazio esibendone i generatori.

**Soluzione.** La seconda riga è il doppio della prima, quindi l'unica equazione è $x_1-x_2+2x_3=0$, cioè $x_1=x_2-2x_3$. Con $x_2=s$, $x_3=t$ liberi:

$$
\ker(A)=s\begin{psmallmatrix}1\\1\\0\end{psmallmatrix}+t\begin{psmallmatrix}-2\\0\\1\end{psmallmatrix},\qquad s,t\in\mathbb{R},
$$

dunque $\ker(A)=\operatorname{span}\{(1,1,0),(-2,0,1)\}$. Essendo uno span, è automaticamente un sottospazio (sezione 3.1); è un piano per l'origine in $\mathbb{R}^3$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 5 (intermedio) — Immagine e coerenza col rango</summary>

**Testo.** Per $A=\begin{psmallmatrix}1&2&3\\0&1&1\end{psmallmatrix}$ descrivere $\operatorname{Im}(A)$ e verificare la relazione nullità più rango.

**Soluzione.** Le colonne sono $\mathbf{c}_1=(1,0)^{\!\top}$, $\mathbf{c}_2=(2,1)^{\!\top}$, $\mathbf{c}_3=(3,1)^{\!\top}$. Si osserva $\mathbf{c}_3=\mathbf{c}_1+\mathbf{c}_2$, quindi $\mathbf{c}_3$ non aggiunge direzioni: $\operatorname{Im}(A)=\operatorname{span}\{\mathbf{c}_1,\mathbf{c}_2\}$. I due vettori $\mathbf{c}_1,\mathbf{c}_2$ non sono proporzionali, quindi generano tutto $\mathbb{R}^2$: $\operatorname{Im}(A)=\mathbb{R}^2$, dimensione $2$, cioè rango $2$. Il nucleo ha una variabile libera ($3$ colonne meno $2$ pivot), dimensione $1$. Verifica: $\operatorname{rk}(A)+\dim\ker(A)=2+1=3$, pari al numero di colonne. $\checkmark$

</details>

<details class="dim-tecnica">
<summary>Esercizio 6 (avanzato) — Sottospazio in uno spazio di polinomi</summary>

**Testo.** Nello spazio $P_2$ dei polinomi di grado $\le 2$, stabilire se $W=\{p\in P_2:p(1)=0\}$ è un sottospazio e, se lo è, esibirne dei generatori.

**Soluzione.** Il polinomio nullo soddisfa $p(1)=0$; se $p(1)=q(1)=0$ allora $(p+q)(1)=0$; e $(cp)(1)=c\,p(1)=0$. Dunque $W$ è un sottospazio. La condizione $p(1)=0$ significa che $1$ è radice, quindi $p(x)=(x-1)q(x)$ con $q$ di grado $\le 1$: $p(x)=(x-1)(\alpha+\beta x)=\alpha(x-1)+\beta(x^2-x)$. Perciò $W=\operatorname{span}\{x-1,\ x^2-x\}$, un sottospazio $2$-dimensionale di $P_2$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 7 (avanzato) — Intersezione di sottospazi</summary>

**Testo.** Siano $W_1=\{(x,y,z):x+y=0\}$ e $W_2=\{(x,y,z):y+z=0\}$ sottospazi di $\mathbb{R}^3$. Dimostrare che $W_1\cap W_2$ è un sottospazio e descriverlo.

**Soluzione.** *Che l'intersezione sia un sottospazio* si vede dal criterio: $\mathbf{0}$ sta in entrambi, quindi nell'intersezione; se $\mathbf{u},\mathbf{v}\in W_1\cap W_2$, allora la somma e ogni multiplo stanno sia in $W_1$ (che è chiuso) sia in $W_2$ (che è chiuso), dunque nell'intersezione. *Descrizione*: i punti soddisfano $x+y=0$ e $y+z=0$, cioè $x=-y$ e $z=-y$. Con $y=t$: $(x,y,z)=t(-1,1,-1)$. Quindi $W_1\cap W_2=\operatorname{span}\{(-1,1,-1)\}$, una retta per l'origine. (Nota: l'*unione* $W_1\cup W_2$ invece non è un sottospazio, perché sommando un vettore del primo con uno del secondo si esce in genere da entrambi.)

</details>

<details class="dim-tecnica">
<summary>Esercizio 8 (applicativo) — Sottospazio di soluzioni</summary>

**Testo.** Sia $A$ una matrice $m\times n$ e $\mathbf{b}\neq\mathbf{0}$. Spiegare perché l'insieme $S=\{\mathbf{x}:A\mathbf{x}=\mathbf{b}\}$ delle soluzioni del sistema non omogeneo *non* è un sottospazio, e descrivere invece la sua struttura.

**Soluzione.** $S$ non contiene $\mathbf{0}$, perché $A\mathbf{0}=\mathbf{0}\neq\mathbf{b}$: già (S1) fallisce, quindi $S$ non è un sottospazio. La sua struttura, vista nella lezione sul rango, è *affine*: se $\mathbf{x}_0$ è una soluzione particolare, ogni altra soluzione è $\mathbf{x}_0+\mathbf{h}$ con $\mathbf{h}\in\ker(A)$, perché $A(\mathbf{x}_0+\mathbf{h})=A\mathbf{x}_0+A\mathbf{h}=\mathbf{b}+\mathbf{0}=\mathbf{b}$. Dunque $S=\mathbf{x}_0+\ker(A)$ è la traslazione del sottospazio $\ker(A)$ per il vettore $\mathbf{x}_0$: un sottospazio spostato via dall'origine, esattamente come la retta $y=x+c$ dello slider per $c\neq 0$.

</details>
