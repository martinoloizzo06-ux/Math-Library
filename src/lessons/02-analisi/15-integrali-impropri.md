---
id: analisi-15-integrali-impropri
titolo: "Integrali impropri"
materia: analisi
argomento: "Calcolo integrale (una variabile)"
modulo: "Integrali impropri"
livello: universitario
slug: analisi-15-integrali-impropri

# legacy
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: "Integrali impropri"
title_en: "Improper integrals"
level: blue
order: 15
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Notes"
source_chapter: "Integrali impropri; limiti all'infinito (lez.05); integrale di Riemann (lez.12)"

prerequisiti:
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-05-limiti-notevoli-asintoti

collegamenti:
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-14-applicazioni-integrale
  - analisi-05-limiti-notevoli-asintoti

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Integrali impropri: intervalli illimitati e integrande non limitate, definizione come limite, integrale campione x^{-p}, criterio del confronto"
    note: "struttura e ordine. La trattazione sistematica degli impropri è in OpenStax Vol.2 (non in catalogo): qui è ricostruita con rigore da Vol.1 + integrale di Riemann di lez.12 (opzione A del curriculum)"
  - id_fonte: villanacci-successioni
    ruolo: appunti-prof
    sezioni_coperte: "Cap.3 — integrale di Riemann, proprietà; base per la monotonia dell'integrale e il criterio del confronto"
    note: "priorità su notazione; monotonia dell'integrale di funzioni non negative e completezza come motori della convergenza"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

L'[integrale definito](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) di lez.12 è stato costruito con due ipotesi ben precise: l'intervallo $[a,b]$ è **limitato** e la funzione $f$ è **limitata** su di esso. Entrambe servivano — le somme di Darboux hanno senso solo con un numero finito di pezzetti tutti di area finita. Ma le due ipotesi tagliano fuori situazioni che contano moltissimo.

La più importante, per chi studia economia e probabilità, è questa: **una densità di probabilità continua** vive tipicamente su tutta la retta. La campana normale si estende da $-\infty$ a $+\infty$, eppure l'area totale sotto di essa deve valere esattamente $1$ — altrimenti non sarebbe una probabilità. Come può un'area estesa all'infinito essere finita? Ancora: il valore attuale di una **rendita perpetua** (un flusso di reddito che non finisce mai) è un'area su $[0,+\infty)$; il lavoro per allontanare all'infinito un satellite è un'area su $[R,+\infty)$. In tutti questi casi l'intervallo è illimitato.

L'altra situazione è opposta: l'intervallo è finito, ma la funzione **esplode** verso un estremo. L'area sotto $1/\sqrt x$ vicino a $x=0$ riguarda una regione infinitamente alta — eppure, vedremo, può essere finita.

L'idea per trattare entrambi i casi è la stessa, ed è onesta: **non ridefiniamo l'integrale, lo raggiungiamo con un limite.** Si calcola l'integrale ordinario su un pezzo «buono» (dove tutto è limitato), poi si fa scivolare l'estremo verso l'infinito, o verso la singolarità, e si guarda il limite. Se il limite esiste finito, diciamo che l'integrale improprio **converge** e chiamiamo quel numero il suo valore. Se il limite è infinito o non esiste, l'integrale **diverge**.

C'è un'analogia stretta con le serie, che vale la pena tenere a mente per tutta la lezione: la serie $\sum \frac{1}{n^2}=\frac{\pi^2}{6}$ converge pur avendo infiniti termini, mentre la serie armonica $\sum\frac1n$ diverge, benché i suoi termini tendano a $0$. Vedremo che gli integrali $\int_1^\infty \frac{dx}{x^2}$ e $\int_1^\infty\frac{dx}{x}$ si comportano *esattamente* allo stesso modo, e per la stessa ragione profonda: quel che conta non è che l'integranda tenda a zero, ma **quanto in fretta** lo fa.

## 2. Teoria

### 2.1 Primo tipo: intervalli illimitati

L'idea del limite si traduce direttamente in definizione.

**Definizione (estremo superiore infinito).** Se $f$ è integrabile su $[a,t]$ per ogni $t>a$, si pone
$$\int_a^{+\infty} f(x)\,dx=\lim_{t\to+\infty}\int_a^{t} f(x)\,dx.$$
Se il limite esiste **finito**, l'integrale *converge* a quel valore; altrimenti *diverge*. In modo simmetrico, $\displaystyle\int_{-\infty}^{b}f=\lim_{t\to-\infty}\int_t^b f$.

La strategia operativa è quindi in tre mosse: (1) si calcola l'integrale ordinario $\int_a^t f$ con il TFC, tenendo $t$ come parametro; (2) si fa il limite $t\to+\infty$; (3) si legge il risultato.

*Micro-esempio (converge).* $\displaystyle\int_0^{+\infty}e^{-2x}\,dx$. Su $[0,t]$: $\int_0^t e^{-2x}\,dx=\big[-\tfrac12 e^{-2x}\big]_0^t=\tfrac12-\tfrac12 e^{-2t}$. Per $t\to+\infty$, $e^{-2t}\to0$, quindi l'integrale converge a $\tfrac12$.

*Micro-esempio (diverge).* $\displaystyle\int_1^{+\infty}\frac{dx}{x}$. Su $[1,t]$: $\int_1^t\frac{dx}{x}=\ln t$. Per $t\to+\infty$, $\ln t\to+\infty$: l'integrale **diverge**, benché l'integranda $1/x$ tenda a $0$. Teniamo a mente questo caso: sarà il confine.

**Entrambi gli estremi infiniti.** Per $\int_{-\infty}^{+\infty}f$ si spezza in un punto $c$ qualsiasi:
$$\int_{-\infty}^{+\infty}f=\int_{-\infty}^{c}f+\int_{c}^{+\infty}f,$$
e si richiede che **entrambi** i pezzi convergano (separatamente). La scelta di $c$ non cambia il risultato. È essenziale trattare i due lati in modo indipendente: non è lecito far tendere insieme i due estremi all'infinito sperando in una compensazione (quella sarebbe una nozione diversa, il *valore principale*, che qui non usiamo).

### 2.2 Secondo tipo: funzione non limitata

Il secondo scenario: l'intervallo è finito, ma $f$ ha un asintoto verticale a un estremo. Stesso rimedio, il limite, ora fatto verso il punto cattivo.

**Definizione (singolarità in un estremo).** Se $f$ è integrabile su $[a,t]$ per ogni $t<b$ ma non è limitata vicino a $b$, si pone
$$\int_a^{b} f(x)\,dx=\lim_{t\to b^{-}}\int_a^{t} f(x)\,dx,$$
e analogamente $\lim_{t\to a^+}\int_t^b f$ se la singolarità è in $a$. Convergenza/divergenza come prima.

*Micro-esempio.* $\displaystyle\int_0^1\frac{dx}{\sqrt x}$. La funzione esplode in $x=0$. Su $[t,1]$: $\int_t^1 x^{-1/2}\,dx=\big[2\sqrt x\big]_t^1=2-2\sqrt t$. Per $t\to0^+$, $\sqrt t\to0$: l'integrale converge a $2$. Un'area infinitamente alta, ma finita: la funzione sale ripida ma la sua base si stringe abbastanza in fretta.

**Singolarità interna.** Se $f$ esplode in un punto interno $c\in(a,b)$, l'integrale va **spezzato** in $c$:
$$\int_a^b f=\int_a^c f+\int_c^b f,$$
e converge solo se convergono entrambi i pezzi. Ignorare la singolarità e applicare il TFC «alla cieca» produce risultati privi di senso, come mostra il prossimo checkpoint.

```checkpoint
[domanda]
Uno studente calcola $\displaystyle\int_{-1}^{1}\frac{dx}{x^2}=\Big[-\frac1x\Big]_{-1}^{1}=(-1)-(1)=-2$. Il risultato è un numero **negativo**, eppure l'integranda $1/x^2$ è sempre **positiva**. Dov'è l'errore, e qual è la risposta corretta?

[risposta]
L'errore è aver applicato il TFC (formula di Newton–Leibniz) su un intervallo che contiene una **singolarità interna**: $1/x^2$ esplode in $x=0\in(-1,1)$, dove la primitiva $-1/x$ non è nemmeno definita. Il TFC richiede una funzione integrabile (in particolare limitata) su tutto $[a,b]$: qui l'ipotesi salta, e la «formula» dà un numero che non ha alcun significato (il segno negativo per una funzione positiva è la spia dell'assurdo). La procedura corretta è spezzare in $x=0$ e trattare ciascun pezzo come improprio di secondo tipo: $\int_0^1 x^{-2}\,dx=\lim_{t\to0^+}\big[-\tfrac1x\big]_t^1=\lim_{t\to0^+}\big(-1+\tfrac1t\big)=+\infty$. Già il primo pezzo diverge, quindi **l'intero integrale diverge**. Regola: prima di integrare, si controlla *sempre* che l'integranda non abbia singolarità dentro l'intervallo; se ne ha, si spezza.
```

### 2.3 L'integrale campione $x^{-p}$ e la soglia $p=1$

Un solo integrale fa da metro di paragone per quasi tutti gli altri, perché il suo comportamento dipende da un unico parametro $p$ e traccia con precisione il confine tra convergenza e divergenza.

**Integrale campione (coda all'infinito).**
$$\int_1^{+\infty}\frac{dx}{x^p}\ \text{ converge se e solo se }\ p>1,\quad\text{e in tal caso vale }\ \frac{1}{p-1}.$$

**Integrale campione (singolarità in $0$).**
$$\int_0^1\frac{dx}{x^p}\ \text{ converge se e solo se }\ p<1,\quad\text{e in tal caso vale }\ \frac{1}{1-p}.$$

Il calcolo completo, con la discussione di tutti i casi, è in §3.1. Vale la pena però leggere subito il *significato*: le due soglie sono «specchiate» attorno a $p=1$. All'infinito serve che la funzione decada **abbastanza in fretta** ($p>1$): $1/x^2$ ce la fa, $1/x$ no, $1/\sqrt x$ nemmeno. Vicino a una singolarità serve invece che la funzione esploda **abbastanza lentamente** ($p<1$): $1/\sqrt x$ è integrabile in $0$, ma $1/x$ e $1/x^2$ no. Il caso esatto $p=1$ — cioè $1/x$ — diverge in **entrambe** le situazioni: è il perno, la funzione che sta esattamente sul confine da tutte e due le parti.

*Micro-esempio (soglia sottile).* $\displaystyle\int_1^{+\infty}\frac{dx}{x^{1{,}001}}=\frac{1}{1{,}001-1}=\frac{1}{0{,}001}=1000$: converge. Basta alzare l'esponente di un millesimo sopra $1$ e l'area, da infinita, diventa finita (grande, ma finita). La soglia $p=1$ non è un'approssimazione: è netta.

```checkpoint
[domanda]
Senza calcolare, di' quali di questi convergono e perché: (a) $\int_1^{+\infty}\frac{dx}{x}$; (b) $\int_1^{+\infty}\frac{dx}{x^2}$; (c) $\int_0^{1}\frac{dx}{x}$; (d) $\int_0^{1}\frac{dx}{\sqrt x}$. Qual è la soglia che decide, e perché lo stesso $1/x$ compare sia tra i divergenti all'infinito sia tra i divergenti in $0$?

[risposta]
La soglia è $p=1$, ma agisce in verso opposto nei due contesti. **All'infinito** ($\int_1^\infty x^{-p}$) serve decadimento veloce, $p>1$: quindi (b) $1/x^2$ ($p=2>1$) **converge**, mentre (a) $1/x$ ($p=1$) **diverge**. **In $0$** ($\int_0^1 x^{-p}$) serve esplosione lenta, $p<1$: quindi (d) $1/\sqrt x$ ($p=\tfrac12<1$) **converge**, mentre (c) $1/x$ ($p=1$) **diverge**. Il caso $p=1$, cioè $1/x$, è proprio sul confine da entrambi i lati e per questo diverge sia all'infinito sia in $0$: è la funzione «di riferimento» il cui integrale è il logaritmo, che cresce senza limite ma lentissimamente. Morale: convergono (b) e (d); divergono (a) e (c).
```

### 2.4 Criteri di convergenza

Spesso non serve — o non si riesce — a calcolare il valore: basta sapere *se* l'integrale converge. Per questo ci sono i criteri, che confrontano l'integranda con una di cui conosciamo già il carattere (tipicamente un campione $x^{-p}$). Valgono per integrande **di segno costante** (le enunciamo per $f\ge0$; il caso $f\le0$ è simmetrico).

**Criterio del confronto diretto.** Siano $0\le f(x)\le g(x)$ per $x\ge a$. Allora:
- se $\displaystyle\int_a^{+\infty}g$ converge, converge anche $\displaystyle\int_a^{+\infty}f$ (la coda più piccola non può fare peggio);
- se $\displaystyle\int_a^{+\infty}f$ diverge, diverge anche $\displaystyle\int_a^{+\infty}g$ (la coda più grande non può fare meglio).

La direzione conta: per provare **convergenza** si cerca un maggiorante che converge; per provare **divergenza** si cerca un minorante che diverge. La dimostrazione è in §3.2.

*Micro-esempio (convergenza per confronto).* $\displaystyle\int_1^{+\infty}\frac{dx}{x^2+\sqrt x}$. Per $x\ge1$ è $x^2+\sqrt x\ge x^2$, quindi $\dfrac{1}{x^2+\sqrt x}\le\dfrac{1}{x^2}$. Poiché $\int_1^\infty x^{-2}$ converge ($p=2>1$), per confronto converge anche l'integrale dato.

**Criterio del confronto asintotico.** Siano $f,g\ge0$ e supponiamo
$$\lim_{x\to+\infty}\frac{f(x)}{g(x)}=L\in(0,+\infty)$$
(un limite finito e non nullo: $f$ e $g$ sono «dello stesso ordine» all'infinito). Allora $\int_a^\infty f$ e $\int_a^\infty g$ hanno lo **stesso carattere**: convergono entrambi o divergono entrambi. È il criterio più comodo, perché permette di sostituire un'integranda complicata con il suo termine dominante.

*Micro-esempio.* $\displaystyle\int_1^{+\infty}\frac{x+1}{x^3-2}\,dx$. Per $x\to+\infty$, $\dfrac{x+1}{x^3-2}\sim\dfrac{x}{x^3}=\dfrac{1}{x^2}$: infatti $\lim_{x\to\infty}\dfrac{(x+1)/(x^3-2)}{1/x^2}=1\in(0,\infty)$. Poiché $\int_1^\infty x^{-2}$ converge, converge anche l'integrale dato.

```checkpoint
[domanda]
«L'integranda tende a $0$, quindi l'area sotto la coda si assottiglia: l'integrale improprio converge.» Perché questo ragionamento è **sbagliato**? Fornisci il controesempio decisivo.

[risposta]
È sbagliato perché la convergenza non dipende dal *fatto* che l'integranda tenda a $0$, ma da **quanto in fretta** ci arriva. L'area della coda $\int_t^\infty f$ è la somma di infiniti contributi: anche se ciascuno diventa piccolo, la loro somma può restare infinita se i contributi non decrescono abbastanza rapidamente. Il controesempio decisivo è $\int_1^\infty\frac{dx}{x}$: qui $\frac1x\to0$, eppure l'integrale vale $\lim_{t\to\infty}\ln t=+\infty$, **diverge**. È il perfetto parallelo della serie armonica $\sum\frac1n$, che diverge pur avendo termini $\to0$. La condizione «integranda $\to0$» è *necessaria* ma **non sufficiente**: il metro giusto è il confronto con i campioni $x^{-p}$, cioè la soglia $p=1$.
```

**Convergenza assoluta (cenno).** Per integrande che **cambiano segno** (oscillano), i criteri sopra non si applicano direttamente. Uno strumento che funziona: se $\displaystyle\int_a^{+\infty}|f|$ converge, allora converge anche $\displaystyle\int_a^{+\infty}f$, e si dice che converge *assolutamente*. Il vantaggio è che $|f|\ge0$, quindi su di essa si possono usare i criteri di confronto.

*Micro-esempio.* $\displaystyle\int_1^{+\infty}\frac{\sin x}{x^2}\,dx$. L'integranda oscilla, ma $\big|\tfrac{\sin x}{x^2}\big|\le\tfrac{1}{x^2}$, e $\int_1^\infty x^{-2}$ converge: dunque $\int_1^\infty\frac{|\sin x|}{x^2}$ converge per confronto, e perciò $\int_1^\infty\frac{\sin x}{x^2}$ converge assolutamente. (Esiste anche la convergenza *semplice* — l'integrale converge ma $\int|f|$ no, come per $\int_1^\infty\frac{\sin x}{x}$ — ma è un capitolo più fine, qui solo accennato.)

Ecco l'integrale campione al variare di $p$: manovra il parametro e osserva dove sta il confine $p=1$ tra area finita e area infinita.

```slider
{"title":"Convergenza di ∫₁^∞ 1/xᵖ dx al variare di p","fn":"1/Math.pow(x, a)","domain":[0.5,8],"yDomain":[-0.1,2],"pname":"a","pmin":0.5,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"p","label1":"1/xᵖ"}
```

Con $p\le1$ la curva decade troppo lentamente e l'area sotto la coda è infinita; con $p>1$ decade abbastanza in fretta e l'area è finita. Il passaggio avviene esattamente in $p=1$.

## 3. Dimostrazioni

### 3.1 L'integrale campione e la soglia $p=1$

**Enunciato.** $\displaystyle\int_1^{+\infty}x^{-p}\,dx$ converge se e solo se $p>1$, con valore $\dfrac{1}{p-1}$; $\displaystyle\int_0^1 x^{-p}\,dx$ converge se e solo se $p<1$, con valore $\dfrac{1}{1-p}$.

**Dimostrazione (coda all'infinito).** Calcoliamo l'integrale troncato $\int_1^t x^{-p}\,dx$ e ne studiamo il limite per $t\to+\infty$, distinguendo i casi secondo la primitiva.

*Caso $p\ne1$.* Una primitiva di $x^{-p}$ è $\dfrac{x^{1-p}}{1-p}$ (deriva a $x^{-p}$), quindi
$$\int_1^t x^{-p}\,dx=\Big[\frac{x^{1-p}}{1-p}\Big]_1^t=\frac{t^{1-p}-1}{1-p}.$$
Il comportamento del limite dipende dal segno dell'esponente $1-p$:
- se $p>1$, allora $1-p<0$, dunque $t^{1-p}=t^{-(p-1)}\to0$ per $t\to+\infty$; il limite è $\dfrac{0-1}{1-p}=\dfrac{-1}{1-p}=\dfrac{1}{p-1}$, **finito**: converge.
- se $p<1$, allora $1-p>0$, dunque $t^{1-p}\to+\infty$; il limite è $+\infty$: **diverge**.

*Caso $p=1$.* Qui la primitiva è il logaritmo, non una potenza: $\int_1^t\frac{dx}{x}=\ln t$, e $\ln t\to+\infty$ per $t\to+\infty$: **diverge**.

Mettendo insieme i tre casi, la convergenza si ha esattamente per $p>1$, con valore $\frac{1}{p-1}$. Il caso $p=1$ è il confine perché è l'unico in cui la primitiva cambia natura (da potenza a logaritmo): il logaritmo cresce senza limite, ma così lentamente che qualsiasi decadimento un po' più rapido ($p>1$) basta a rendere l'area finita.

**Dimostrazione (singolarità in $0$).** Con lo stesso calcolo, per $p\ne1$,
$$\int_t^1 x^{-p}\,dx=\Big[\frac{x^{1-p}}{1-p}\Big]_t^1=\frac{1-t^{1-p}}{1-p},\qquad t\to0^+.$$
Ora è il comportamento di $t^{1-p}$ **in $0$** a decidere: se $p<1$ ($1-p>0$) allora $t^{1-p}\to0$ e il limite è $\frac{1}{1-p}$, finito (converge); se $p>1$ ($1-p<0$) allora $t^{1-p}=t^{-(p-1)}\to+\infty$ e diverge. Per $p=1$, $\int_t^1\frac{dx}{x}=-\ln t\to+\infty$: diverge. Quindi la convergenza in $0$ vale esattamente per $p<1$, valore $\frac{1}{1-p}$. La soglia è la stessa $p=1$, ma con la disuguaglianza rovesciata rispetto alla coda, perché ora il pericolo è a $0$ e non all'infinito. $\qquad\blacksquare$

### 3.2 Il criterio del confronto

**Enunciato.** Siano $f,g$ integrabili su ogni $[a,t]$ con $0\le f(x)\le g(x)$ per $x\ge a$. Se $\int_a^{+\infty}g$ converge, allora $\int_a^{+\infty}f$ converge.

**Dimostrazione.** L'ingrediente chiave è che, per un'integranda **non negativa**, la funzione «integrale troncato» è monotona. Poniamo
$$F(t)=\int_a^t f(x)\,dx,\qquad G(t)=\int_a^t g(x)\,dx.$$

*Passo 1 — $F$ è crescente.* Per $t_2>t_1$, la differenza $F(t_2)-F(t_1)=\int_{t_1}^{t_2}f\,dx\ge0$ perché $f\ge0$ (l'[integrale di una funzione non negativa è $\ge0$](/analisi/calcolo-integrale-una-variabile/12-integrale-definito), monotonia dell'integrale, lez.12). Quindi $F$ è (debolmente) crescente in $t$. Lo stesso vale per $G$.

*Passo 2 — $F$ è limitata superiormente.* Da $f\le g$ segue, di nuovo per monotonia dell'integrale, $F(t)=\int_a^t f\le\int_a^t g=G(t)$ per ogni $t$. Ma $G$ è crescente e converge, per ipotesi, a un valore finito $G_\infty=\int_a^\infty g$; essendo crescente, $G(t)\le G_\infty$ per ogni $t$. Perciò
$$F(t)\le G(t)\le G_\infty\qquad\text{per ogni }t\ge a:$$
$F$ è limitata superiormente dal numero finito $G_\infty$.

*Passo 3 — una funzione crescente e limitata ha limite finito.* $F$ è crescente (Passo 1) e limitata superiormente (Passo 2). Una tale funzione ammette limite finito per $t\to+\infty$, pari all'estremo superiore dei suoi valori (dettaglio in dim-tecnica). Dunque $\lim_{t\to+\infty}F(t)$ esiste finito, cioè $\int_a^{+\infty}f$ **converge**.

La seconda forma del criterio (se $\int f$ diverge allora $\int g$ diverge) è la **contronominale** logica di quanto appena provato: se $\int g$ convergesse, per il teorema convergerebbe anche $\int f$, contro l'ipotesi. $\qquad\blacksquare$

<details class="dim-tecnica">
<summary>Perché «crescente e limitata superiormente» garantisce un limite finito</summary>

È il cuore del criterio, ed è una conseguenza diretta della **completezza** di $\mathbb R$. L'insieme dei valori $\{F(t):t\ge a\}$ è non vuoto e limitato superiormente (da $G_\infty$), quindi per l'assioma di completezza ammette un **estremo superiore** finito $S=\sup_{t\ge a}F(t)$. Mostriamo che $\lim_{t\to+\infty}F(t)=S$. Fissato $\varepsilon>0$, per definizione di sup esiste un valore $t_0$ con $F(t_0)>S-\varepsilon$. Poiché $F$ è crescente, per ogni $t\ge t_0$ vale $F(t)\ge F(t_0)>S-\varepsilon$; d'altra parte $F(t)\le S$ sempre (è il sup). Dunque $S-\varepsilon<F(t)\le S<S+\varepsilon$, cioè $|F(t)-S|<\varepsilon$ per ogni $t\ge t_0$. Questa è esattamente la definizione di $\lim_{t\to+\infty}F(t)=S$. È lo stesso teorema che, per le successioni, afferma «ogni successione monotona e limitata converge»: qui applicato alla funzione crescente $F$. Senza la completezza di $\mathbb R$ (in $\mathbb Q$, per esempio) il sup potrebbe non esistere e il criterio cadrebbe.
</details>

## 4. Esempi

Gli esempi alternano calcoli espliciti (dove la primitiva è nota) e applicazioni dei criteri (dove interessa solo il carattere). Diversi hanno un risvolto probabilistico o economico, il vero motivo per cui questi integrali contano.

**Esempio 1 (primo tipo, per parti).** $\displaystyle\int_0^{+\infty}x\,e^{-x}\,dx$.

*Strategia:* primitiva via [integrazione per parti](/analisi/calcolo-integrale-una-variabile/13-tecniche-integrazione) (lez.13), poi limite. Con $u=x$, $dv=e^{-x}dx$, $v=-e^{-x}$:
$$\int_0^t x e^{-x}\,dx=\big[-x e^{-x}\big]_0^t+\int_0^t e^{-x}\,dx=-t e^{-t}+\big[-e^{-x}\big]_0^t=-t e^{-t}-e^{-t}+1.$$
Per $t\to+\infty$: $t e^{-t}\to0$ (l'esponenziale batte il polinomio, [gerarchia degli infiniti](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale)) e $e^{-t}\to0$. L'integrale converge a $1$. È il momento primo della distribuzione esponenziale di parametro $1$: il suo valore atteso.

**Esempio 2 (secondo tipo, singolarità all'estremo).** $\displaystyle\int_0^1\frac{dx}{\sqrt{1-x}}$.

Singolarità in $x=1$. Su $[0,t]$ con $t<1$: $\int_0^t(1-x)^{-1/2}\,dx=\big[-2\sqrt{1-x}\big]_0^t=-2\sqrt{1-t}+2$. Per $t\to1^-$, $\sqrt{1-t}\to0$: converge a $2$.

**Esempio 3 (singolarità interna: spezzare è obbligatorio).** $\displaystyle\int_0^2\frac{dx}{(x-1)^{2/3}}$.

Singolarità in $x=1$, **interna**: si spezza in $x=1$. Su ciascun lato l'integrale è improprio di secondo tipo. Con primitiva $3(x-1)^{1/3}$:
$$\int_0^1(x-1)^{-2/3}dx=\lim_{t\to1^-}\big[3(x-1)^{1/3}\big]_0^t=0-3(-1)^{1/3}=0-3(-1)=3,$$
$$\int_1^2(x-1)^{-2/3}dx=\lim_{s\to1^+}\big[3(x-1)^{1/3}\big]_s^2=3(1)-0=3.$$
Entrambi i pezzi convergono, quindi l'integrale converge a $3+3=6$. Qui l'esponente della singolarità è $2/3<1$: sotto soglia, quindi integrabile — coerente con il campione di §2.3.

**Esempio 4 (confronto diretto, oscillante).** Converge $\displaystyle\int_1^{+\infty}\frac{\sin^2 x}{x^2}\,dx$?

$0\le\sin^2 x\le1$, quindi $0\le\dfrac{\sin^2 x}{x^2}\le\dfrac{1}{x^2}$. Poiché $\int_1^\infty x^{-2}$ converge ($p=2$), per confronto diretto l'integrale dato **converge**. Non serve (né si saprebbe) calcolarne il valore.

**Esempio 5 (confronto asintotico).** Carattere di $\displaystyle\int_2^{+\infty}\frac{x^2+3}{x^4-1}\,dx$.

Per $x\to+\infty$, $\dfrac{x^2+3}{x^4-1}\sim\dfrac{x^2}{x^4}=\dfrac1{x^2}$, e il limite del rapporto è $1\in(0,\infty)$. Poiché $\int_2^\infty x^{-2}$ converge, per confronto asintotico l'integrale dato **converge**.

**Esempio 6 (divergenza per minorante).** Mostrare che $\displaystyle\int_1^{+\infty}\frac{dx}{\sqrt{x+1}}$ diverge.

Serve un **minorante che diverge**. Per $x\ge1$: $\sqrt{x+1}\le\sqrt{2x}=\sqrt2\,\sqrt x$, quindi $\dfrac{1}{\sqrt{x+1}}\ge\dfrac{1}{\sqrt2}\,x^{-1/2}$. Poiché $\int_1^\infty x^{-1/2}$ diverge ($p=\tfrac12<1$), per confronto diretto **diverge** anche l'integrale dato.

**Esempio 7 (probabilità: la distribuzione di Cauchy).** $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^2}$.

Entrambi gli estremi infiniti: si spezza in $c=0$. Con primitiva $\arctan x$:
$$\int_0^{+\infty}\frac{dx}{1+x^2}=\lim_{t\to+\infty}\big[\arctan x\big]_0^t=\frac{\pi}{2},\qquad \int_{-\infty}^{0}\frac{dx}{1+x^2}=\lim_{t\to-\infty}\big(0-\arctan t\big)=\frac{\pi}{2}.$$
Entrambi convergono, quindi l'integrale vale $\pi$. È il motivo per cui la densità di Cauchy si scrive $\dfrac{1}{\pi}\cdot\dfrac{1}{1+x^2}$: si divide per $\pi$ affinché l'area totale sia $1$, come deve essere per una probabilità.

**Esempio 8 (economia: valore attuale di una rendita perpetua).** Un titolo paga un flusso costante $C$ euro/anno **per sempre**, con tasso continuo $r>0$. Qual è il suo valore attuale?

È il [valore attuale](/analisi/calcolo-integrale-una-variabile/14-applicazioni-integrale) di lez.14, con orizzonte $T\to+\infty$: un integrale improprio.
$$\text{PV}=\int_0^{+\infty}C\,e^{-rt}\,dt=\lim_{T\to+\infty}\Big[-\frac{C}{r}e^{-rt}\Big]_0^{T}=\lim_{T\to+\infty}\Big(\frac{C}{r}-\frac{C}{r}e^{-rT}\Big)=\frac{C}{r}.$$
Il fattore di sconto $e^{-rt}\to0$ garantisce la convergenza: un flusso infinito nel tempo ha valore **finito** oggi, esattamente $C/r$. È la formula del prezzo di una rendita perpetua (o *consol*): con $C=100$ e $r=0{,}05$, il titolo vale oggi $2000$ euro. La convergenza dell'integrale è ciò che rende l'oggetto economicamente sensato.

## 5. Collegamenti e riepilogo

**Idea centrale.** Un integrale improprio non è un oggetto nuovo, ma un integrale ordinario *raggiunto con un limite*: si integra su un pezzo sicuro e si fa scivolare l'estremo verso l'infinito o verso la singolarità. Converge se il limite è finito. La domanda decisiva non è «l'integranda tende a $0$?» ma «**quanto in fretta**?», e il metro universale è l'integrale campione $x^{-p}$ con la sua soglia $p=1$: veloce abbastanza all'infinito ($p>1$), lento abbastanza nelle singolarità ($p<1$).

**Collegamenti.**
- **[Limiti e asintoti](/analisi/limiti-e-continuita/05-limiti-notevoli-asintoti)** (lez.05): tutta la lezione poggia sui limiti all'infinito e sul confronto asintotico tra funzioni; la gerarchia degli infiniti («l'esponenziale batte il polinomio») è ciò che fa convergere integrali come $\int x e^{-x}$.
- **[Integrale definito](/analisi/calcolo-integrale-una-variabile/12-integrale-definito)** (lez.12): la monotonia dell'integrale di funzioni non negative e la completezza di $\mathbb R$ sono i due motori del criterio del confronto (§3.2).
- **[Applicazioni dell'integrale](/analisi/calcolo-integrale-una-variabile/14-applicazioni-integrale)** (lez.14): il valore attuale di una rendita perpetua e la gittata cardiaca $\int_0^\infty c(t)\,dt$ sono applicazioni di lez.14 spinte all'orizzonte infinito — cioè integrali impropri.
- **Serie numeriche** (prossimo argomento di Analisi): l'analogia integrale/serie diventa un teorema, il **criterio integrale**: $\sum_{n\ge1}f(n)$ e $\int_1^\infty f$ hanno lo stesso carattere per $f$ positiva decrescente. La divergenza della serie armonica e quella di $\int_1^\infty\frac{dx}{x}$ sono lo stesso fenomeno.
- **Probabilità e statistica:** ogni densità continua richiede $\int_{-\infty}^{+\infty}f=1$, un integrale improprio che deve convergere; il **valore atteso** $E[X]=\int x f(x)\,dx$ e i momenti sono impropri. Esponenziale, normale, Cauchy, gamma: la loro stessa esistenza come distribuzioni è una questione di convergenza di integrali impropri.

**Formule e criteri chiave.**

| Oggetto | Regola |
|---|---|
| Primo tipo | $\int_a^{+\infty}f=\lim_{t\to+\infty}\int_a^t f$ (converge se il limite è finito) |
| Secondo tipo (sing. in $b$) | $\int_a^b f=\lim_{t\to b^-}\int_a^t f$ |
| Campione, coda | $\int_1^{+\infty}x^{-p}$ converge $\iff p>1$, vale $\tfrac{1}{p-1}$ |
| Campione, singolarità | $\int_0^1 x^{-p}$ converge $\iff p<1$, vale $\tfrac{1}{1-p}$ |
| Confronto diretto | $0\le f\le g$: $\int g$ conv. $\Rightarrow\int f$ conv.; $\int f$ div. $\Rightarrow\int g$ div. |
| Confronto asintotico | $f/g\to L\in(0,\infty)$: stesso carattere |
| Convergenza assoluta | $\int|f|$ conv. $\Rightarrow\int f$ conv. |
| Singolarità interna | spezzare nel punto cattivo; converge solo se **entrambi** i pezzi convergono |

## 6. Esercizi

Prova prima da solo, poi apri la soluzione per confrontare il procedimento.

<details>
<summary>Esercizio 1 (primo tipo, calcolo diretto) — Studiare $\int_1^{+\infty}\frac{dx}{x^3}$.</summary>

$\int_1^t x^{-3}\,dx=\big[-\tfrac{1}{2x^2}\big]_1^t=\tfrac12-\tfrac{1}{2t^2}$. Per $t\to+\infty$, $\tfrac{1}{2t^2}\to0$: **converge** a $\tfrac12$. Coerente col campione: $\tfrac{1}{p-1}=\tfrac{1}{3-1}=\tfrac12$.
</details>

<details>
<summary>Esercizio 2 (primo tipo, esponenziale) — La densità esponenziale. Verificare che $\int_0^{+\infty}\lambda e^{-\lambda x}\,dx=1$ per ogni $\lambda>0$.</summary>

$\int_0^t\lambda e^{-\lambda x}\,dx=\big[-e^{-\lambda x}\big]_0^t=1-e^{-\lambda t}$. Per $t\to+\infty$, $e^{-\lambda t}\to0$ (poiché $\lambda>0$): l'integrale converge a $1$. Questo è ciò che rende $\lambda e^{-\lambda x}$ una densità di probabilità legittima su $[0,+\infty)$: l'area totale è $1$.
</details>

<details>
<summary>Esercizio 3 (secondo tipo, per parti) — Studiare $\int_0^1\frac{\ln x}{\sqrt x}\,dx$.</summary>

Singolarità in $0$ ($\ln x\to-\infty$, $1/\sqrt x\to+\infty$). Per parti su $[t,1]$ con $u=\ln x$, $dv=x^{-1/2}dx$, $v=2\sqrt x$:
$$\int_t^1\frac{\ln x}{\sqrt x}\,dx=\big[2\sqrt x\ln x\big]_t^1-\int_t^1\frac{2\sqrt x}{x}\,dx=-2\sqrt t\ln t-\big[4\sqrt x\big]_t^1=-2\sqrt t\ln t-4+4\sqrt t.$$
Per $t\to0^+$: $\sqrt t\ln t\to0$ (la potenza batte il logaritmo) e $4\sqrt t\to0$. **Converge** a $-4$.
</details>

<details>
<summary>Esercizio 4 (confronto diretto) — Converge $\int_1^{+\infty}\frac{2+\cos x}{x^2}\,dx$?</summary>

Poiché $-1\le\cos x\le1$, si ha $1\le 2+\cos x\le3$, quindi $0\le\dfrac{2+\cos x}{x^2}\le\dfrac{3}{x^2}$. Essendo $\int_1^\infty\frac{3}{x^2}=3$ convergente, per confronto diretto l'integrale **converge**. (Il minorante $\frac{1}{x^2}$ mostra anche che è strettamente positivo.)
</details>

<details>
<summary>Esercizio 5 (confronto asintotico) — Carattere di $\int_1^{+\infty}\frac{dx}{\sqrt{x^3+1}}$.</summary>

Per $x\to+\infty$: $\dfrac{1}{\sqrt{x^3+1}}\sim\dfrac{1}{\sqrt{x^3}}=x^{-3/2}$, con rapporto $\to1\in(0,\infty)$. Poiché $\int_1^\infty x^{-3/2}$ converge ($p=\tfrac32>1$), per confronto asintotico l'integrale **converge**.
</details>

<details>
<summary>Esercizio 6 (divergenza) — Mostrare che $\int_2^{+\infty}\frac{dx}{x\ln x}$ diverge.</summary>

Qui il campione $x^{-p}$ non basta (l'integranda è «appena sopra» $1/x$). Si calcola direttamente con la sostituzione $u=\ln x$, $du=\frac{dx}{x}$: $\int\frac{dx}{x\ln x}=\int\frac{du}{u}=\ln|u|=\ln(\ln x)$. Allora $\int_2^t\frac{dx}{x\ln x}=\ln(\ln t)-\ln(\ln 2)$, e $\ln(\ln t)\to+\infty$ per $t\to+\infty$: **diverge**. (È l'analogo integrale della serie $\sum\frac{1}{n\ln n}$, che pure diverge, seppur lentissimamente.)
</details>

<details>
<summary>Esercizio 7 (entrambi gli estremi) — Calcolare $\int_{-\infty}^{+\infty}x\,e^{-x^2}\,dx$.</summary>

Spezziamo in $c=0$. Primitiva di $x e^{-x^2}$: $-\tfrac12 e^{-x^2}$ (sostituzione $u=-x^2$). Sul lato destro: $\int_0^{+\infty}=\lim_{t\to+\infty}\big[-\tfrac12 e^{-x^2}\big]_0^t=0-(-\tfrac12)=\tfrac12$. Sul lato sinistro, per simmetria (l'integranda è **dispari**), $\int_{-\infty}^0=-\tfrac12$. Entrambi convergono, quindi l'integrale converge a $\tfrac12+(-\tfrac12)=0$. *Attenzione:* la convergenza va verificata sui due lati separatamente; il risultato $0$ è legittimo perché entrambi i pezzi sono finiti (non è una compensazione tra infiniti).
</details>

<details>
<summary>Esercizio 8 (soglia, determinare $p$ — avanzato) — Per quali $p>0$ converge $\int_0^2\frac{dx}{x^p(2-x)^p}$?</summary>

L'integranda esplode in $x=0$ e in $x=2$: si spezza in $c=1$ e si studia ciascun estremo con il confronto asintotico.
**Vicino a $0$:** $2-x\to2$, quindi $\dfrac{1}{x^p(2-x)^p}\sim\dfrac{1}{2^p}x^{-p}$; $\int_0^1 x^{-p}$ converge $\iff p<1$.
**Vicino a $2$:** con $u=2-x$, $x\to2$, quindi l'integranda $\sim\dfrac{1}{2^p}u^{-p}$; converge $\iff p<1$.
Servono **entrambe** le convergenze, quindi l'integrale converge se e solo se $0<p<1$.
</details>
