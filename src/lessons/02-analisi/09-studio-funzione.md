---
id: analisi-09-studio-funzione
titolo: "Studio di funzione completo (una variabile)"
materia: analisi
argomento: "Calcolo differenziale (una variabile)"
modulo: "Applicazioni della derivata"
livello: universitario
slug: analisi-09-studio-funzione

subject: analisi
topic_it: "Calcolo differenziale (una variabile)"
topic_en: "Differential calculus (single variable)"
title_it: "Studio di funzione completo (una variabile)"
title_en: "Complete curve sketching (single variable)"
level: blue
order: 9
source_book: "OpenStax, Calculus Volume 1 (Cap. 4.3–4.6); A. Villanacci, Appunti di Matematica 1 (studio di funzione)"
source_chapter: "OpenStax 4.3 (max/min), 4.5 (derivate e forma del grafico), 4.6 (limiti all'infinito e asintoti); Villanacci, capitolo su studio di funzione"

prerequisiti:
  - analisi-08-teoremi-differenziale
  - analisi-07-regole-derivazione
  - analisi-05-limiti-notevoli-asintoti
  - analisi-04-continuita
collegamenti:
  - analisi-10-taylor
  - analisi-08-teoremi-differenziale
  - analisi-06-derivata-definizione

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 4.3 (massimi e minimi, punti critici), 4.5 (derivate e forma del grafico: monotonia, concavità, test della derivata prima e seconda), 4.6 (limiti all'infinito e asintoti orizzontali/obliqui)"
    note: "Struttura in passi, definizioni di punto critico, concavità e flesso, catalogo delle procedure per gli asintoti; U-shape del costo medio come esempio applicativo."
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Capitolo su studio di funzione: schema operativo, criterio di monotonia dai corollari di Lagrange, condizioni di convessità via f''"
    note: "Priorità su notazione e ordine dei passi d'esame; criterio di convessità enunciato come f'' >= 0 su intervallo <=> f convessa; uso della caratterizzazione tangente/secante."

componenti_usati:
  - plot
  - slider

versione: "2.0"
data_ultima_rielaborazione: "2026-07-11"
stato: completa
sezioni_omesse: []
---

# Studio di funzione completo (una variabile)

## 1. Motivazione e intuizione

Hai in mano una formula, per esempio $f(x)=\dfrac{x^2-1}{x^2-4}$, e ti viene chiesto: «che aspetto ha il suo grafico?». Potresti calcolare $f$ in cento punti e unirli, ma è un lavoro cieco e inaffidabile: rischi di saltare proprio i punti dove succede qualcosa di interessante — un picco stretto, un salto verso l'infinito, un cambio di curvatura — e di disegnare una curva plausibile ma falsa. Lo **studio di funzione** è l'alternativa: un procedimento sistematico che estrae dalla formula, con strumenti analitici esatti, tutte le informazioni qualitative necessarie a disegnare il grafico *con certezza*, e a rispondere a domande che nessuna tabella di valori potrebbe garantire.

L'idea di fondo è che una funzione derivabile "confessa" il proprio comportamento attraverso le sue derivate. La **derivata prima** $f'$ è il tachimetro della funzione: il suo *segno* dice se $f$ sta salendo o scendendo, e i suoi *zeri* segnalano i punti dove la salita si arresta — i candidati a essere vette (massimi) e valli (minimi). La **derivata seconda** $f''$ è invece il "volante": il suo segno dice se la curva sta piegando verso l'alto (come una tazza, $\smile$) o verso il basso (come una cupola, $\frown$), e i punti dove cambia idea sono i **flessi**. Aggiungendo l'analisi del *dominio* (dove la funzione vive), delle *simmetrie* (che dimezzano il lavoro), degli *zeri e del segno* (dove sta sopra o sotto l'asse) e degli *asintoti* (come si comporta ai bordi e all'infinito), otteniamo un ritratto completo.

Perché tutto questo è *lecito*? Perché ogni passo poggia sui teoremi del calcolo differenziale già dimostrati: in particolare sui corollari del teorema di Lagrange, che garantiscono il ponte fondamentale «$f'>0$ in ogni punto $\Rightarrow$ $f$ crescente» — un'affermazione globale che l'intuizione locale, da sola, non basterebbe a giustificare. Lo studio di funzione non è quindi una ricetta da mandare a memoria, ma l'applicazione coordinata di risultati profondi. È anche la palestra in cui tutti gli strumenti dell'analisi in una variabile — limiti, continuità, derivate, teoremi del valor medio — lavorano insieme su un unico bersaglio.

La domanda guida di questa lezione è precisa: **dato $f(x)$, come ricostruire l'intero comportamento qualitativo del suo grafico usando solo carta, penna e le sue derivate?** E, subito dopo: perché ciascuno di questi passi coglie davvero ciò che promette? Lo strumento non è fine a sé stesso. In economia, lo stesso identico procedimento individua il livello di produzione che minimizza il costo medio o massimizza il profitto; in fisica, le posizioni di equilibrio stabile di un sistema. Chi padroneggia lo studio di funzione padroneggia, di fatto, l'ottimizzazione in una variabile.

---

## 2. Teoria

Lo studio di funzione è una procedura ordinata. Ogni passo produce un pezzo del ritratto finale e usa uno strumento analitico preciso, di cui qui chiariamo *significato* e *fondamento*. Presentiamo i passi nell'ordine operativo; le dimostrazioni dei criteri più delicati sono nella §3, gli esempi completi end-to-end nella §4.

Fissiamo la mappa complessiva prima dei dettagli:

$$
\underbrace{\text{Dominio}}_{\text{dove vive } f}
\;\to\;
\underbrace{\text{Simmetrie}}_{\text{dimezzano il lavoro}}
\;\to\;
\underbrace{\text{Segno e zeri}}_{\text{sopra/sotto l'asse}}
\;\to\;
\underbrace{\text{Limiti e asintoti}}_{\text{comportamento ai bordi}}
\;\to\;
\underbrace{f' :\ \text{monotonia, estremi}}_{\text{salita/discesa}}
\;\to\;
\underbrace{f'' :\ \text{concavità, flessi}}_{\text{curvatura}}
\;\to\;
\underbrace{\text{Grafico}}_{\text{sintesi}}
$$

### 2.1 Dominio

Il **dominio naturale** $D\subseteq\mathbb{R}$ è l'insieme dei valori $x$ per cui l'espressione $f(x)$ ha senso. Determinarlo significa imporre tutte le condizioni di esistenza:

- denominatore diverso da zero: se $f=\dfrac{p(x)}{q(x)}$, si impone $q(x)\neq 0$;
- argomento del logaritmo strettamente positivo: in $\ln\big(g(x)\big)$ si impone $g(x)>0$;
- radicando non negativo per radici di indice pari: in $\sqrt{g(x)}$ si impone $g(x)\ge 0$;
- argomento di $\arcsin$ e $\arccos$ nell'intervallo $[-1,1]$.

Il dominio non è un preliminare burocratico: è la *scena* su cui si svolgerà tutto. I punti esclusi dal dominio (per esempio uno zero del denominatore) sono i candidati naturali per gli **asintoti verticali**, e i bordi del dominio sono esattamente i luoghi dove andremo a calcolare i limiti.

### 2.2 Simmetrie e periodicità

Prima di lavorare, conviene chiedersi se il grafico possiede una simmetria che dimezzi la fatica.

**Funzione pari:** $f(-x)=f(x)$ per ogni $x\in D$ (con $D$ simmetrico rispetto a $0$). Il grafico è **simmetrico rispetto all'asse $y$**: basta studiarlo per $x\ge 0$ e riflettere. Esempi: $x^2$, $\cos x$, $\dfrac{1}{x^2+1}$.

**Funzione dispari:** $f(-x)=-f(x)$. Il grafico è **simmetrico rispetto all'origine** (una rotazione di $180^\circ$ lo lascia invariato): basta studiarlo per $x\ge 0$ e ruotare. Esempi: $x^3$, $\sin x$, $\dfrac{x}{x^2+1}$. Una funzione dispari definita in $0$ deve valere $f(0)=0$.

**Periodicità:** $f(x+T)=f(x)$ per un periodo $T>0$. È tipica delle funzioni trigonometriche: basta studiare $f$ su un intervallo lungo un periodo e ripetere. Per esempio $\sin x$ e $\cos x$ hanno periodo $2\pi$, $\tan x$ ha periodo $\pi$.

Le simmetrie non aggiungono informazione nuova, la *dimezzano*: sfruttarle riduce gli errori e i calcoli. Non tutte le funzioni ne hanno; la maggior parte non è né pari né dispari.

### 2.3 Segno, zeri e intersezioni con gli assi

Gli **zeri** di $f$ sono le soluzioni di $f(x)=0$: geometricamente, le intersezioni del grafico con l'asse $x$. L'**intersezione con l'asse $y$**, se $0\in D$, è il punto $(0,f(0))$. Lo **studio del segno** — dove $f(x)>0$ e dove $f(x)<0$ — dice in quali intervalli il grafico sta sopra o sotto l'asse delle ascisse.

Per le funzioni razionali fratte la tecnica è studiare separatamente il segno del numeratore e del denominatore e combinarli con la regola dei segni, ricordando che negli zeri del denominatore la funzione *non esiste* (lì il segno può cambiare senza che il grafico attraversi l'asse). Questo passo, insieme agli asintoti, vincola fortemente la forma della curva ancora prima di derivare.

### 2.4 Limiti agli estremi del dominio e asintoti

Si calcolano i limiti di $f$ ai *bordi* del dominio: agli infiniti ($x\to\pm\infty$, se il dominio è illimitato) e ai punti finiti esclusi dal dominio (dove $f$ può divergere). Da questi limiti nascono gli asintoti, le rette a cui il grafico si avvicina indefinitamente.

**Asintoto orizzontale.** Se
$$
\lim_{x\to+\infty} f(x)=L\in\mathbb{R},
$$
la retta $y=L$ è **asintoto orizzontale destro** (analogamente a sinistra per $x\to-\infty$). Significa che, andando verso destra, il grafico si stabilizza sulla quota $L$. I due lati vanno studiati *separatamente*: una funzione può avere asintoti orizzontali diversi a destra e a sinistra (è il caso di $\arctan x$, che tende a $\pi/2$ a destra e a $-\pi/2$ a sinistra).

**Asintoto verticale.** Se, per un punto finito $x_0$ (tipicamente escluso dal dominio),
$$
\lim_{x\to x_0^{\pm}} f(x)=\pm\infty,
$$
la retta $x=x_0$ è **asintoto verticale**. Qui è essenziale distinguere i due limiti laterali e il loro *segno*: il grafico può schizzare a $+\infty$ da un lato e a $-\infty$ dall'altro. Un asintoto verticale può presentarsi solo ai bordi del dominio, mai in un punto interno dove $f$ è continua.

**Asintoto obliquo.** Quando $f(x)\to\pm\infty$ ma *più lentamente* di quanto farebbe se il grafico si impennasse — cioè $f$ diverge come una retta inclinata — si cerca un asintoto della forma $y=mx+q$ con $m\neq 0$. La condizione è che $f(x)-(mx+q)\to 0$ per $x\to+\infty$ (o $-\infty$).

*Derivazione delle formule di $m$ e $q$.* Supponiamo che l'asintoto obliquo esista, cioè che
$$
f(x)-(mx+q)\xrightarrow[x\to+\infty]{}0.
$$
Come troviamo $m$ e $q$? Dividiamo tutto per $x$ (lecito perché $x\to+\infty$, quindi $x\neq 0$):
$$
\frac{f(x)}{x}-m-\frac{q}{x}\longrightarrow 0.
$$
Il termine $\dfrac{q}{x}\to 0$; resta dunque $\dfrac{f(x)}{x}\to m$. Questo *isola* il coefficiente angolare:
$$
\boxed{\,m=\lim_{x\to+\infty}\frac{f(x)}{x}\,}.
$$
Trovato $m$, riscriviamo la condizione di partenza come $f(x)-mx\to q$, ovvero
$$
\boxed{\,q=\lim_{x\to+\infty}\big(f(x)-mx\big)\,}.
$$
La procedura operativa è quindi: si calcola $m$; se $m$ è un numero finito e diverso da $0$ si calcola $q$; se anche $q$ è finito, l'asintoto obliquo è $y=mx+q$. Se $m=0$ si ricade nel caso orizzontale; se $m=\pm\infty$ oppure $q=\pm\infty$, non c'è asintoto obliquo. La caratterizzazione rigorosa (perché queste formule *catturano davvero* l'asintoto) è nella §3.4. **Attenzione:** un asintoto orizzontale e uno obliquo non possono coesistere *dalla stessa parte*, perché $f/x$ non può tendere insieme a $0$ (orizzontale) e a un $m\neq 0$ (obliquo).

### 2.5 Derivata prima: monotonia e punti critici

Si calcola $f'(x)$. Un **punto critico** è un punto $c\in D$ in cui $f'(c)=0$ (punto *stazionario*) oppure in cui $f'(c)$ non esiste pur essendo $f$ definita e (di norma) continua in $c$. I punti critici sono i *soli* candidati a estremi locali interni: lo garantisce il **teorema di Fermat** (§2.7 e lezione *Teoremi del calcolo differenziale*), secondo cui in un estremo locale interno dove $f$ è derivabile si ha necessariamente $f'(c)=0$.

Il legame tra segno di $f'$ e andamento di $f$ è il cuore di tutto ed è una **conseguenza diretta del teorema di Lagrange** (i corollari sulla monotonia, già dimostrati nella lezione *Teoremi del calcolo differenziale*):

| Segno di $f'$ su un intervallo $I$ | Comportamento di $f$ su $I$ |
|---|---|
| $f'(x)>0$ per ogni $x\in I$ | $f$ **strettamente crescente** su $I$ |
| $f'(x)<0$ per ogni $x\in I$ | $f$ **strettamente decrescente** su $I$ |
| $f'(x)=0$ per ogni $x\in I$ | $f$ **costante** su $I$ |

Da qui il **criterio (o test) della derivata prima** per classificare un punto critico $c$ isolato: si guarda come cambia il segno di $f'$ attraversando $c$.

| Comportamento di $f'$ attorno a $c$ | Natura di $c$ |
|---|---|
| $f'$ passa da $+$ a $-$ | **massimo locale** |
| $f'$ passa da $-$ a $+$ | **minimo locale** |
| $f'$ **non** cambia segno | né max né min (flesso a tangente orizzontale) |

La lettura intuitiva: un massimo è il punto in cui la funzione *smette di salire e inizia a scendere*, cioè dove $f'$ passa da positiva a negativa. Se invece $f'$ si annulla ma mantiene lo stesso segno ai due lati (come in $x^3$ nell'origine), la funzione ha solo un momentaneo appiattimento della pendenza, non un estremo. La dimostrazione rigorosa del criterio è in §3.1.

> **Massimi/minimi locali vs. assoluti.** Un estremo **locale** è più alto (o più basso) solo dei suoi vicini immediati; un estremo **assoluto** lo è su tutto il dominio. Per trovare gli estremi assoluti su un intervallo si confrontano i valori nei punti critici *e* ai bordi del dominio (e i limiti, se il dominio è illimitato): un estremo assoluto potrebbe non essere in un punto critico, ma "al confine".

### 2.6 Derivata seconda: concavità e flessi

Si calcola $f''(x)$. Il suo segno descrive la **concavità**, cioè il verso in cui la curva piega.

**Definizione (convessità/concavità).** Su un intervallo $I$, $f$ si dice **convessa** (o *concava verso l'alto*, $\smile$) se il suo grafico sta *sotto* ogni corda, equivalentemente *sopra* ogni sua tangente; si dice **concava** (o *concava verso il basso*, $\frown$) nel caso opposto. La caratterizzazione operativa, per funzioni due volte derivabili:

| Segno di $f''$ su $I$ | Concavità di $f$ |
|---|---|
| $f''(x)>0$ | **convessa** ($\smile$), la curva piega verso l'alto |
| $f''(x)<0$ | **concava** ($\frown$), la curva piega verso il basso |

Il motivo è trasparente una volta letto $f''$ come "derivata della pendenza": se $f''>0$ allora $f'$ è crescente, cioè la pendenza aumenta man mano che si avanza — la curva si inclina sempre più verso l'alto, esattamente ciò che significa essere convessa. La dimostrazione rigorosa di «$f''\ge 0 \Rightarrow f$ convessa» è in §3.2.

**Punto di flesso.** È un punto in cui la concavità *cambia*: da $\smile$ a $\frown$ o viceversa. Condizione **necessaria** perché $x_0$ (interno, con $f$ due volte derivabile) sia un flesso è $f''(x_0)=0$; la condizione **sufficiente** è che $f''$ *cambi effettivamente segno* attraversando $x_0$. Come per la derivata prima, l'annullarsi di $f''$ non basta: in $f(x)=x^4$ si ha $f''(0)=0$ ma $x=0$ non è un flesso (la funzione resta convessa da entrambi i lati).

**Test della derivata seconda per gli estremi.** Nei punti stazionari ($f'(c)=0$) la concavità fornisce una scorciatoia:
$$
f'(c)=0,\ f''(c)>0\ \Rightarrow\ c \text{ minimo locale};\qquad
f'(c)=0,\ f''(c)<0\ \Rightarrow\ c \text{ massimo locale}.
$$
Se invece $f''(c)=0$ il test è **inconcludente** (può esserci max, min o flesso: si torna al test della derivata prima). Intuizione: in un punto a tangente orizzontale, se la curva è a forma di tazza ($f''>0$) siamo sul fondo di una valle, se è a cupola ($f''<0$) siamo su una vetta. La dimostrazione è in §3.3.

### 2.7 Dalla tabella dei segni al grafico

Raccolti $f'$ e $f''$, si costruisce una **tabella dei segni** che riporta, intervallo per intervallo, il segno di $f'$ (crescita/decrescita) e di $f''$ (concavità), evidenziando i punti notevoli: estremi locali (dove $f'$ cambia segno) e flessi (dove $f''$ cambia segno). Combinando questa tabella con dominio, simmetrie, segno di $f$ e asintoti si dispone di tutto il necessario per il **grafico qualitativo**: si posizionano prima gli asintoti e le intersezioni con gli assi, poi gli estremi e i flessi con le rispettive quote, infine si raccorda la curva rispettando monotonia e concavità di ogni intervallo. Il grafico che ne risulta non è un disegno approssimativo, ma la sintesi visiva di una catena di deduzioni esatte.

**Visual — nascita degli estremi (Fermat + monotonia in azione).** Variando il parametro $a$, osserva la famiglia $f(x)=x^3-a\,x$ e la sua derivata $f'(x)=3x^2-a$. Per $a\le 0$ la derivata non si annulla mai (resta $\ge 0$): niente punti critici, $f$ è monotòna crescente. Appena $a>0$, $f'$ si annulla in $x=\pm\sqrt{a/3}$ e *nascono* un massimo (a sinistra) e un minimo (a destra), tanto più distanti dall'origine quanto più grande è $a$. È il meccanismo della §2.5 reso visibile: gli estremi compaiono esattamente dove $f'$ attraversa lo zero cambiando segno.

```slider
{
  "title": "Nascita di massimo e minimo: f(x) = x³ − a·x  e  f'(x) = 3x² − a",
  "fn": "x*x*x - a*x",
  "fn2": "3*x*x - a",
  "domain": [-3, 3],
  "yDomain": [-6, 6],
  "pname": "a",
  "pmin": -2,
  "pmax": 6,
  "pdefault": 3,
  "pstep": 0.25,
  "plabel": "Parametro a",
  "label1": "f(x) = x³ − a·x",
  "label2": "f'(x) = 3x² − a"
}
```

---

## 3. Dimostrazioni

I criteri operativi della §2 non sono postulati: discendono, con dimostrazione, dai teoremi del calcolo differenziale. In tutta la sezione usiamo come mattoni già disponibili i **corollari sulla monotonia** del teorema di Lagrange (lezione *Teoremi del calcolo differenziale*, §2.4): se $g'>0$ su un intervallo allora $g$ è strettamente crescente, se $g'<0$ è strettamente decrescente, se $g'=0$ è costante.

### 3.1 Test della derivata prima

**Enunciato.** Sia $f$ continua in un intorno di $c$ e derivabile in un intorno *forato* $(c-\delta,c)\cup(c,c+\delta)$. Se $f'(x)>0$ su $(c-\delta,c)$ e $f'(x)<0$ su $(c,c+\delta)$, allora $c$ è un **massimo locale** di $f$. (Il caso $-\,/+$ dà simmetricamente un minimo; se $f'$ non cambia segno, $c$ non è estremo.)

**Dimostrazione.** Consideriamo l'intervallo sinistro $(c-\delta,c)$, su cui $f'>0$. Per il corollario di monotonia di Lagrange, $f$ è strettamente crescente su $(c-\delta,c]$: la continuità di $f$ in $c$ permette di includere l'estremo $c$, perché il valore in $c$ è il limite dei valori crescenti a sinistra. Dunque per ogni $x\in(c-\delta,c)$ vale $f(x)<f(c)$.

Consideriamo ora l'intervallo destro $(c,c+\delta)$, su cui $f'<0$. Per lo stesso corollario, $f$ è strettamente decrescente su $[c,c+\delta)$, di nuovo includendo $c$ per continuità. Dunque per ogni $x\in(c,c+\delta)$ vale $f(x)<f(c)$.

Mettendo insieme le due disuguaglianze: $f(x)<f(c)$ per ogni $x\neq c$ nell'intorno $(c-\delta,c+\delta)$. Questo è esattamente il significato di **massimo locale** in $c$. $\blacksquare$

*Commento.* Il ruolo della **continuità in $c$** è delicato ma essenziale: senza di essa i corollari darebbero la monotonia solo sugli aperti $(c-\delta,c)$ e $(c,c+\delta)$, e nulla vieterebbe a $f(c)$ di essere un valore isolato più basso, distruggendo la conclusione. È la continuità a "saldare" i due tratti nel punto di raccordo.

### 3.2 Criterio di convessità: $f''\ge 0 \Rightarrow f$ convessa

**Enunciato.** Sia $f$ due volte derivabile su un intervallo $I$ con $f''(x)\ge 0$ per ogni $x\in I$. Allora $f$ è **convessa** su $I$: per ogni coppia $x_1<x_2$ in $I$ e ogni punto intermedio $x\in(x_1,x_2)$, il grafico sta sotto la corda, cioè
$$
f(x)\le f(x_1)+\frac{f(x_2)-f(x_1)}{x_2-x_1}\,(x-x_1).
$$
(Con $f''>0$ la disuguaglianza è stretta e la convessità è *stretta*.)

**Passo 1 — Da $f''\ge 0$ a $f'$ non decrescente.** Poiché $f''=(f')'\ge 0$ su $I$, il corollario di monotonia applicato *alla funzione $f'$* dà che $f'$ è non decrescente su $I$: se $s<t$ in $I$, allora $f'(s)\le f'(t)$. (Con $f''>0$, $f'$ è strettamente crescente.)

**Passo 2 — Confronto delle pendenze corda a sinistra / corda a destra.** Fissiamo $x_1<x<x_2$ in $I$. La disuguaglianza da dimostrare, con un po' di algebra, è equivalente a
$$
\frac{f(x)-f(x_1)}{x-x_1}\ \le\ \frac{f(x_2)-f(x)}{x_2-x},
$$
cioè: la pendenza della corda dal punto sinistro fino a $x$ non supera quella dalla corda da $x$ fino al punto destro. (È la forma "tre punti" della convessità: le pendenze delle corde crescono da sinistra a destra.)

**Passo 3 — Applichiamo Lagrange ai due tratti.** Sul tratto $[x_1,x]$, il teorema di Lagrange fornisce un punto $\xi_1\in(x_1,x)$ con
$$
\frac{f(x)-f(x_1)}{x-x_1}=f'(\xi_1).
$$
Sul tratto $[x,x_2]$, Lagrange fornisce un $\xi_2\in(x,x_2)$ con
$$
\frac{f(x_2)-f(x)}{x_2-x}=f'(\xi_2).
$$

**Passo 4 — Conclusione.** Poiché $\xi_1<x<\xi_2$ e $f'$ è non decrescente (Passo 1), si ha $f'(\xi_1)\le f'(\xi_2)$, ovvero
$$
\frac{f(x)-f(x_1)}{x-x_1}\le\frac{f(x_2)-f(x)}{x_2-x},
$$
che è la disuguaglianza del Passo 2, equivalente alla tesi. Con $f''>0$ la $f'$ è strettamente crescente, quindi $f'(\xi_1)<f'(\xi_2)$ e la convessità è stretta. $\blacksquare$

*Commento.* La dimostrazione mostra il vero significato di "$f''>0$": non è la curva a essere "positiva", ma la *pendenza a crescere*. La convessità è, letteralmente, il fatto che le corde diventano via via più ripide man mano che ci si sposta a destra. Il segno di $f''$ è solo il rilevatore locale di questo fenomeno globale, e Lagrange è ancora una volta il ponte che collega i due livelli.

### 3.3 Test della derivata seconda per gli estremi

**Enunciato.** Sia $f$ derivabile in un intorno di $c$, con $f'(c)=0$, ed esista $f''(c)$. Se $f''(c)>0$, allora $c$ è un **minimo locale**; se $f''(c)<0$, un **massimo locale**.

**Dimostrazione (caso $f''(c)>0$).** Partiamo dalla *definizione* di derivata seconda come derivata prima di $f'$ nel punto $c$, usando $f'(c)=0$:
$$
f''(c)=\lim_{x\to c}\frac{f'(x)-f'(c)}{x-c}=\lim_{x\to c}\frac{f'(x)}{x-c}>0.
$$
Il limite del rapporto $\dfrac{f'(x)}{x-c}$ è un numero strettamente positivo. Per il **teorema di permanenza del segno**, esiste un intorno forato $(c-\delta,c)\cup(c,c+\delta)$ in cui il rapporto stesso è positivo:
$$
\frac{f'(x)}{x-c}>0\qquad\text{per } 0<|x-c|<\delta.
$$
Leggiamo il segno di $f'(x)$ separatamente ai due lati, in base al segno del denominatore $x-c$:

- per $x\in(c-\delta,c)$ è $x-c<0$; affinché il rapporto sia positivo deve essere $f'(x)<0$;
- per $x\in(c,c+\delta)$ è $x-c>0$; affinché il rapporto sia positivo deve essere $f'(x)>0$.

Dunque $f'$ passa da **negativa a positiva** attraversando $c$: per il test della derivata prima (§3.1), $c$ è un **minimo locale**. Il caso $f''(c)<0$ è identico a segni invertiti e dà un massimo. $\blacksquare$

*Commento.* Si vede subito **perché il test fallisce quando $f''(c)=0$**: in tal caso il limite del rapporto è $0$, e il teorema di permanenza del segno non dice nulla sul segno di $f'$ nell'intorno — $f'$ potrebbe mantenere lo stesso segno ai due lati (flesso a tangente orizzontale) oppure cambiarlo. Nessuna informazione: si torna al test della derivata prima o si guardano le derivate di ordine superiore.

### 3.4 Caratterizzazione dell'asintoto obliquo

**Enunciato.** La retta $y=mx+q$ (con $m,q$ finiti) è asintoto obliquo di $f$ per $x\to+\infty$ **se e solo se** valgono i due limiti
$$
m=\lim_{x\to+\infty}\frac{f(x)}{x}\in\mathbb{R}\setminus\{0\},\qquad q=\lim_{x\to+\infty}\big(f(x)-mx\big)\in\mathbb{R}.
$$

**Dimostrazione.** *($\Rightarrow$)* Se $y=mx+q$ è asintoto, per definizione $f(x)-(mx+q)\to 0$. Dividendo per $x\to+\infty$:
$$
\frac{f(x)}{x}-m-\frac{q}{x}=\frac{f(x)-(mx+q)}{x}\longrightarrow 0,
$$
perché il numeratore tende a $0$ e il denominatore a $+\infty$. Poiché $\dfrac{q}{x}\to 0$, resta $\dfrac{f(x)}{x}\to m$: il primo limite. Sostituendo, $f(x)-mx=q+\big[f(x)-(mx+q)\big]\to q+0=q$: il secondo limite.

*($\Leftarrow$)* Viceversa, se esistono finiti $m=\lim f(x)/x$ (con $m\neq 0$) e $q=\lim\big(f(x)-mx\big)$, allora per la seconda uguaglianza $f(x)-mx-q\to 0$, che è esattamente la definizione di asintoto obliquo $y=mx+q$. $\blacksquare$

*Commento.* Le due formule operative della §2.4 non sono trucchi mnemonici: sono la traduzione *necessaria e sufficiente* dell'esistenza dell'asintoto. La divisione per $x$ serve a "smontare" la retta pezzo per pezzo — prima il coefficiente angolare $m$, che domina all'infinito, poi l'intercetta $q$, che è ciò che resta una volta sottratta la parte lineare.

---

## 4. Esempi

Gli esempi crescono in difficoltà e, dai primi in poi, eseguono uno **studio di funzione completo end-to-end**. Gli errori tipici e i casi limite sono segnalati *in linea*, attaccati all'esempio che li fa nascere.

### Esempio 1 (introduttivo) — Cubica: $f(x)=x^3-3x$

**Dominio e simmetria.** $D=\mathbb{R}$ (polinomio). $f(-x)=-x^3+3x=-f(x)$: funzione **dispari**, grafico simmetrico rispetto all'origine.

**Zeri e segno.** $f(x)=x(x^2-3)=0\Rightarrow x=0,\ \pm\sqrt3$. Segno: $f>0$ su $(-\sqrt3,0)\cup(\sqrt3,+\infty)$, $f<0$ altrove.

**Limiti.** $\lim_{x\to+\infty}f=+\infty$, $\lim_{x\to-\infty}f=-\infty$. Nessun asintoto (una cubica cresce più di ogni retta: $f/x=x^2-3\to+\infty$, quindi $m$ non è finito).

**Derivata prima.** $f'(x)=3x^2-3=3(x-1)(x+1)$. Punti critici $x=\pm1$. Segno di $f'$: positivo su $(-\infty,-1)$, negativo su $(-1,1)$, positivo su $(1,+\infty)$. Dunque $f'$ passa $+\to-$ in $x=-1$ (**massimo locale**, $f(-1)=2$) e $-\to+$ in $x=1$ (**minimo locale**, $f(1)=-2$).

**Derivata seconda.** $f''(x)=6x$. Si annulla in $x=0$ e cambia segno ($<0$ per $x<0$, $>0$ per $x>0$): **flesso** in $(0,0)$, dove la concavità passa da $\frown$ a $\smile$.

**Sintesi.** Curva dispari che sale fino al massimo $(-1,2)$, scende passando per il flesso $(0,0)$ fino al minimo $(1,-2)$, poi risale. Il grafico qui sotto mostra $f$ e $f'$ insieme: gli zeri di $f'$ (in $\pm1$) sono esattamente le ascisse degli estremi di $f$.

```plot
{
  "title": "f(x) = x³ − 3x  e  f'(x) = 3x² − 3",
  "fn": "x*x*x - 3*x",
  "fn2": "3*x*x - 3",
  "domain": [-2.5, 2.5],
  "yDomain": [-5, 5],
  "label1": "f(x) = x³ − 3x",
  "label2": "f'(x) = 3x² − 3"
}
```

> **Attenzione — $f'(c)=0$ non implica estremo.** Se avessimo studiato $f(x)=x^3$ (senza il termine $-3x$), avremmo trovato $f'(x)=3x^2$, che si annulla in $x=0$ ma *non cambia segno* (resta $\ge 0$). L'origine è allora un flesso a tangente orizzontale, non un estremo. L'annullarsi di $f'$ è condizione necessaria, mai sufficiente: bisogna sempre controllare il *cambio di segno*.

### Esempio 2 (intermedio) — Razionale con asintoti orizzontale e verticali: $f(x)=\dfrac{x^2-1}{x^2-4}$

**Dominio.** $x^2-4\neq0\Rightarrow x\neq\pm2$: $D=\mathbb{R}\setminus\{-2,2\}$.

**Simmetria.** $f(-x)=\dfrac{x^2-1}{x^2-4}=f(x)$: **pari**, simmetrica rispetto all'asse $y$ (basta studiare $x\ge0$).

**Zeri e segno.** $f=0\Rightarrow x=\pm1$. Studiando i segni di $x^2-1$ e $x^2-4$ sui punti $-2,-1,1,2$: $f>0$ su $(-\infty,-2)\cup(-1,1)\cup(2,+\infty)$ e $f<0$ su $(-2,-1)\cup(1,2)$. Intersezione con l'asse $y$: $f(0)=\tfrac{-1}{-4}=\tfrac14$.

**Limiti e asintoti.**
$$
\lim_{x\to\pm\infty}\frac{x^2-1}{x^2-4}=\lim_{x\to\pm\infty}\frac{1-1/x^2}{1-4/x^2}=1\ \Rightarrow\ \text{asintoto orizzontale } y=1.
$$
Nei punti esclusi, guardando i segni vicino a $\pm2$:
$$
\lim_{x\to2^{-}}f=-\infty,\quad \lim_{x\to2^{+}}f=+\infty,\qquad \lim_{x\to-2^{-}}f=+\infty,\quad \lim_{x\to-2^{+}}f=-\infty,
$$
quindi asintoti verticali $x=2$ e $x=-2$.

> **Attenzione — il segno dell'asintoto verticale va determinato lato per lato.** Sapere che il limite è "infinito" non basta: presso $x=2$, il numeratore $x^2-1\to3>0$ è fisso, mentre il denominatore $x^2-4$ è negativo appena a sinistra di $2$ e positivo appena a destra. Da qui $-\infty$ a sinistra e $+\infty$ a destra. Sostituire un valore di prova (es. $x=1.9$ e $x=2.1$) è il modo sicuro per non sbagliare segno.

**Derivata prima.**
$$
f'(x)=\frac{2x(x^2-4)-(x^2-1)\,2x}{(x^2-4)^2}=\frac{2x\big[(x^2-4)-(x^2-1)\big]}{(x^2-4)^2}=\frac{-6x}{(x^2-4)^2}.
$$
Il denominatore è sempre $>0$ (dove definito), quindi il segno di $f'$ è quello di $-6x$: $f'>0$ per $x<0$, $f'<0$ per $x>0$. Unico punto critico $x=0$: $f'$ passa $+\to-$, **massimo locale** $f(0)=\tfrac14$.

**Derivata seconda.** Derivando $f'=\dfrac{-6x}{(x^2-4)^2}$ e semplificando si ottiene
$$
f''(x)=\frac{6(3x^2+4)}{(x^2-4)^3}.
$$
Il numeratore $6(3x^2+4)>0$ sempre: il segno di $f''$ è quello di $(x^2-4)^3$, cioè di $x^2-4$. Dunque $f''>0$ (convessa) per $|x|>2$ e $f''<0$ (concava) per $|x|<2$. **Nessun flesso**, perché $f''$ cambia segno solo nei punti $\pm2$, che *non appartengono al dominio*.

**Sintesi.** Nella banda centrale $(-2,2)$ la curva è una campana concava con vertice massimo in $(0,\tfrac14)$, che precipita a $-\infty$ avvicinandosi ai due asintoti verticali; nelle due bande esterne è convessa e scende dall'alto verso l'asintoto orizzontale $y=1$.

### Esempio 3 (intermedio) — Razionale con asintoto obliquo: $f(x)=\dfrac{x^2}{x-1}$

**Dominio.** $x\neq1$: $D=\mathbb{R}\setminus\{1\}$. Nessuna simmetria. Zero (doppio) in $x=0$; $f(0)=0$.

**Asintoti.** Verticale $x=1$ (numeratore $\to1\neq0$, denominatore $\to0$): $\lim_{x\to1^-}f=-\infty$, $\lim_{x\to1^+}f=+\infty$. Per l'obliquo, con le formule della §2.4:
$$
m=\lim_{x\to\pm\infty}\frac{f(x)}{x}=\lim\frac{x^2}{x(x-1)}=\lim\frac{x}{x-1}=1,
$$
$$
q=\lim_{x\to\pm\infty}\big(f(x)-x\big)=\lim\frac{x^2-x(x-1)}{x-1}=\lim\frac{x}{x-1}=1.
$$
Asintoto obliquo $y=x+1$ (da entrambi i lati). *Verifica veloce con la divisione*: $\dfrac{x^2}{x-1}=x+1+\dfrac{1}{x-1}$, e il resto $\tfrac{1}{x-1}\to0$: si legge direttamente $y=x+1$ come parte lineare.

> **Attenzione — orizzontale e obliquo si escludono a vicenda.** Prima di cercare l'obliquo conviene controllare l'orizzontale: qui $f(x)\to\pm\infty$, quindi *non* c'è asintoto orizzontale e ha senso cercare l'obliquo. Se invece $f$ avesse limite finito all'infinito, cercare un obliquo sarebbe uno spreco: $f/x$ tenderebbe a $0$, dando $m=0$.

**Derivata prima.**
$$
f'(x)=\frac{2x(x-1)-x^2}{(x-1)^2}=\frac{x^2-2x}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}.
$$
Segno (denominatore $>0$): $f'>0$ per $x<0$ e $x>2$, $f'<0$ per $0<x<1$ e $1<x<2$. Quindi **massimo locale** in $x=0$ ($f(0)=0$, $f'$ passa $+\to-$) e **minimo locale** in $x=2$ ($f(2)=4$, $f'$ passa $-\to+$).

*Curiosità geometrica.* Il massimo vale $0$ e il minimo vale $4$: il massimo *locale* sta più in basso del minimo *locale*. Non è un errore — è la firma di un asintoto verticale che spezza il dominio in due tronconi separati, ciascuno con la propria vita.

**Derivata seconda.** Si ottiene $f''(x)=\dfrac{2}{(x-1)^3}$: $f''<0$ (concava) per $x<1$, $f''>0$ (convessa) per $x>1$. Cambio di segno solo in $x=1$, escluso dal dominio: nessun flesso.

### Esempio 4 (avanzato) — Esponenziale: $f(x)=x^2e^{-x}$

**Dominio e segno.** $D=\mathbb{R}$. Poiché $e^{-x}>0$ sempre, $f(x)\ge0$ ovunque, con unico zero in $x=0$. Nessuna simmetria.

**Limiti e asintoti.**
$$
\lim_{x\to+\infty}x^2e^{-x}=0^+ \quad(\text{l'esponenziale batte la potenza}),\qquad \lim_{x\to-\infty}x^2e^{-x}=+\infty.
$$
Asintoto orizzontale $y=0$ **solo a destra**; a sinistra la funzione diverge (nessun asintoto: $f/x=xe^{-x}\to-\infty$).

> **Attenzione — asintoti diversi ai due lati.** È un errore frequente concludere "$y=0$ è asintoto orizzontale" senza specificare *da che parte*. Qui l'asintoto orizzontale vale a destra, ma a sinistra la funzione esplode: i due limiti all'infinito vanno **sempre** calcolati separatamente.

**Derivata prima.**
$$
f'(x)=2xe^{-x}+x^2(-e^{-x})=e^{-x}\big(2x-x^2\big)=e^{-x}\,x(2-x).
$$
Segno ($e^{-x}>0$): $f'>0$ per $0<x<2$, $f'<0$ per $x<0$ e $x>2$. Quindi **minimo locale** in $x=0$ ($f'$ passa $-\to+$, $f(0)=0$, è anche il minimo assoluto perché $f\ge0$) e **massimo locale** in $x=2$ ($f'$ passa $+\to-$, $f(2)=4e^{-2}\approx0.54$).

**Derivata seconda.**
$$
f''(x)=\frac{d}{dx}\Big[e^{-x}(2x-x^2)\Big]=e^{-x}\big(x^2-4x+2\big).
$$
Zeri di $x^2-4x+2$: $x=2\pm\sqrt2$. Poiché $e^{-x}>0$, il segno di $f''$ è quello della parabola $x^2-4x+2$: positiva (convessa) per $x<2-\sqrt2$ e per $x>2+\sqrt2$, negativa (concava) in mezzo. Due **flessi**, in $x=2-\sqrt2\approx0.59$ e $x=2+\sqrt2\approx3.41$.

**Sintesi.** Da sinistra la curva scende da $+\infty$, è convessa, tocca il minimo $(0,0)$, sale convessa fino al primo flesso, prosegue concava fino al massimo $(2,4e^{-2})$, poi scende, cambia di nuovo concavità al secondo flesso e si adagia sull'asse $x$ da sopra.

```plot
{
  "title": "f(x) = x²·e^(−x): minimo in 0, massimo in 2, asintoto y=0 a destra",
  "fn": "x*x*Math.exp(-x)",
  "domain": [-1, 8],
  "yDomain": [-0.5, 4],
  "label1": "f(x) = x²·e^(−x)"
}
```

### Esempio 5 (avanzato) — Logaritmo: $f(x)=\dfrac{\ln x}{x}$

**Dominio.** Il logaritmo impone $x>0$: $D=(0,+\infty)$. Zero dove $\ln x=0$, cioè $x=1$; $f>0$ per $x>1$, $f<0$ per $0<x<1$.

**Limiti e asintoti.**
$$
\lim_{x\to0^+}\frac{\ln x}{x}=\frac{-\infty}{0^+}=-\infty\ \Rightarrow\ \text{asintoto verticale } x=0;
$$
$$
\lim_{x\to+\infty}\frac{\ln x}{x}=0^+\ \Rightarrow\ \text{asintoto orizzontale } y=0 \quad(\text{il logaritmo cresce meno di } x).
$$

**Derivata prima.**
$$
f'(x)=\frac{\tfrac1x\cdot x-\ln x\cdot1}{x^2}=\frac{1-\ln x}{x^2}.
$$
Denominatore $>0$: il segno è quello di $1-\ln x$. Quindi $f'>0$ per $\ln x<1$ ($0<x<e$) e $f'<0$ per $x>e$. Unico punto critico $x=e$: $f'$ passa $+\to-$, **massimo** in $x=e$ con $f(e)=\dfrac{1}{e}\approx0.368$. È il massimo **assoluto** su tutto il dominio (a sinistra $f\to-\infty$, a destra $f\to0^+$).

**Derivata seconda.**
$$
f''(x)=\frac{-\tfrac1x\cdot x^2-(1-\ln x)\cdot2x}{x^4}=\frac{-x-2x(1-\ln x)}{x^4}=\frac{-3+2\ln x}{x^3}.
$$
Denominatore $x^3>0$: il segno è quello di $-3+2\ln x$, che si annulla in $\ln x=\tfrac32$, cioè $x=e^{3/2}\approx4.48$. Per $x<e^{3/2}$ concava, per $x>e^{3/2}$ convessa: **flesso** in $x=e^{3/2}$.

**Curiosità applicativa.** Da $f(e)=1/e$ come massimo assoluto discende la disuguaglianza $\dfrac{\ln x}{x}\le\dfrac1e$, cioè $x^{1/x}\le e^{1/e}$ per ogni $x>0$: il numero $e$ è quello che massimizza la "radice $x$-esima di $x$". Un fatto elegante che cade fuori come sottoprodotto dello studio.

### Esempio 6 (applicativo, economia) — Costo medio: $A(q)=\dfrac{C(q)}{q}$ con $C(q)=2q^2+8q+50$

Un'impresa ha costo totale $C(q)=2q^2+8q+50$ per produrre $q$ unità: la parte $2q^2+8q$ è il **costo variabile**, il termine $50$ è il **costo fisso** (impianti, affitti, indipendenti dalla quantità). Il **costo medio** (costo per unità prodotta) è
$$
A(q)=\frac{C(q)}{q}=2q+8+\frac{50}{q},\qquad q>0.
$$
Domanda economica: quale livello di produzione $q$ **minimizza** il costo medio? Lo studio di funzione risponde e, come vedremo, rivela una proprietà fondamentale.

**Dominio.** $q>0$ (non ha senso produrre quantità negative o nulle): $D=(0,+\infty)$.

**Limiti e asintoti.**
$$
\lim_{q\to0^+}A(q)=+\infty\quad(\text{il costo fisso } 50 \text{ spalmato su pochissime unità}) \ \Rightarrow\ \text{asintoto verticale } q=0;
$$
$$
A(q)-(2q+8)=\frac{50}{q}\to0 \ \Rightarrow\ \text{asintoto obliquo } y=2q+8.
$$
La retta $y=2q+8$ è il costo medio *variabile*: a grandi volumi il costo fisso si diluisce e il costo medio si avvicina al solo variabile per unità.

**Derivata prima.**
$$
A'(q)=2-\frac{50}{q^2}=\frac{2q^2-50}{q^2}=\frac{2(q^2-25)}{q^2}.
$$
Su $D$, il segno è quello di $q^2-25$: $A'<0$ per $0<q<5$ (costo medio in calo) e $A'>0$ per $q>5$ (costo medio in risalita). Unico punto critico $q=5$: $A'$ passa $-\to+$, **minimo**. Costo medio minimo $A(5)=10+8+10=28$.

**Derivata seconda.** $A''(q)=\dfrac{100}{q^3}>0$ su tutto $D$: la funzione è **convessa** (la classica curva del costo medio a "U"). Coerente con il test della derivata seconda: $A''(5)>0$ conferma che $q=5$ è un minimo.

**La proprietà chiave: al minimo del costo medio, costo marginale = costo medio.** Il **costo marginale** è $C'(q)=4q+8$. Nel punto di minimo $q=5$:
$$
C'(5)=4\cdot5+8=28=A(5).
$$
Non è una coincidenza. Al minimo si annulla $A'(q)=\dfrac{C'(q)\,q-C(q)}{q^2}=\dfrac{C'(q)-A(q)}{q}$, e questo accade esattamente quando $C'(q)=A(q)$. Economicamente: finché produrre un'unità in più costa *meno* della media (marginale sotto la media), la media scende; quando costa *più* della media, la media sale; l'equilibrio — il minimo — è dove le due si incontrano. Il grafico mostra la U del costo medio e la retta dell'asintoto obliquo.

```plot
{
  "title": "Costo medio A(q) = 2q + 8 + 50/q: minimo in q=5, A=28",
  "fn": "2*x + 8 + 50/x",
  "domain": [0.5, 15],
  "yDomain": [0, 90],
  "label1": "A(q) = 2q + 8 + 50/q"
}
```

> **Attenzione — non dimenticare i bordi del dominio.** In un problema di ottimizzazione economica il minimo/massimo *assoluto* potrebbe cadere a un estremo dell'intervallo ammissibile (es. una capacità produttiva massima $q\le q_{\max}$), non in un punto critico interno. Qui il dominio è illimitato e i limiti ai bordi ($+\infty$ da entrambi i lati) escludono estremi assoluti "al confine", ma con un dominio limitato andrebbero sempre confrontati anche i valori agli estremi.

---

## 5. Collegamenti e riepilogo

### Collegamenti

Lo studio di funzione è la **cabina di regia** in cui confluiscono quasi tutti gli strumenti dell'analisi in una variabile. I limiti e gli asintoti riprendono la lezione *Limiti notevoli e asintoti*; la continuità (che garantisce, tra l'altro, la validità del test della derivata prima nel punto di raccordo) viene dalla lezione *Continuità*; le regole per calcolare $f'$ e $f''$ sono quelle della lezione *Regole di derivazione*. Il fondamento logico dei criteri di monotonia e del test della derivata prima è interamente nella lezione *Teoremi del calcolo differenziale*: sono i corollari di Lagrange a rendere lecito il passaggio dal segno *locale* di $f'$ al comportamento *globale* di $f$. Il legame guarda anche in avanti: la **formula di Taylor** (lezione *Polinomi di Taylor*) generalizza tutto questo, perché il test della derivata seconda è il caso più semplice di un criterio basato sulla prima derivata non nulla — quando $f''(c)=0$, è lo sviluppo di Taylor a dire se $c$ è massimo, minimo o flesso guardando la prima derivata successiva che non si annulla.

Le **applicazioni** sono ovunque. In **economia**, come nell'Esempio 6, lo studio di funzione è l'ottimizzazione: minimo del costo medio (dove marginale $=$ medio), massimo del profitto $P(q)=R(q)-C(q)$ (dove ricavo marginale $=$ costo marginale, $P'=0$, con $P''<0$), punti di pareggio ($P=0$), rendimenti marginali decrescenti (flessi della funzione di produzione). In **fisica**, il grafico dell'energia potenziale $U(x)$ classifica gli equilibri: i minimi di $U$ sono equilibri *stabili*, i massimi *instabili*, e il segno di $U''$ (concavità) ne misura la "rigidità". In **statistica**, individuare la moda di una densità di probabilità $p(x)$ o i punti di flesso della gaussiana (che cadono a distanza $\sigma$ dalla media) è, letteralmente, uno studio di funzione. In **machine learning**, l'analisi di convessità di una funzione di costo — via $f''\ge0$ in una variabile, via matrice Hessiana in più variabili — decide se un minimo trovato è globale e se la discesa del gradiente converge senza rimanere intrappolata.

### Riepilogo

Lo studio di funzione è la lettura coordinata di $f$, $f'$ e $f''$: $f$ e il suo dominio dicono *dove* e *con che segno* vive la curva; $f'$ dice *dove sale e dove scende* e individua gli estremi; $f''$ dice *come piega* e individua i flessi. Ogni criterio poggia sui teoremi del valor medio: il segno di $f'$ governa la monotonia (corollari di Lagrange), il segno di $f''$ governa la convessità (Lagrange applicato a $f'$). Il grafico finale non è un disegno a occhio, ma la sintesi di deduzioni esatte.

**Schema operativo e formule chiave.**

| Passo | Strumento | Cosa rivela |
|---|---|---|
| Dominio | condizioni di esistenza | dove $f$ è definita; candidati asintoti verticali |
| Simmetrie | $f(-x)$ vs $f(x)$ | pari ($=f$), dispari ($=-f$), periodica: dimezza il lavoro |
| Segno e zeri | $f(x)=0$, regola dei segni | sopra/sotto l'asse $x$, intersezioni con gli assi |
| Limiti e asintoti | limiti ai bordi | orizzontale $y=L$; verticale $x=x_0$; obliquo $y=mx+q$ |
| $f'$ | segno di $f'$ | crescita/decrescita; punti critici; estremi |
| $f''$ | segno di $f''$ | concavità ($\smile$/$\frown$); flessi |
| Grafico | tabella dei segni | sintesi qualitativa completa |

| Criterio | Condizione | Conclusione |
|---|---|---|
| Monotonia | $f'>0$ (risp. $<0$) su $I$ | $f$ strettamente crescente (risp. decrescente) su $I$ |
| Test derivata prima | $f'(c)=0$, $f'$ cambia $+\to-$ (risp. $-\to+$) | massimo (risp. minimo) locale in $c$ |
| Convessità | $f''>0$ (risp. $<0$) su $I$ | $f$ convessa $\smile$ (risp. concava $\frown$) su $I$ |
| Flesso | $f''(x_0)=0$ e $f''$ cambia segno | flesso in $x_0$ |
| Test derivata seconda | $f'(c)=0$, $f''(c)>0$ (risp. $<0$) | minimo (risp. massimo) locale in $c$ |
| Asintoto obliquo | $m=\lim\frac{f}{x}\in\mathbb{R}\setminus\{0\}$, $q=\lim(f-mx)\in\mathbb{R}$ | $y=mx+q$ asintoto |

---

## 6. Esercizi

<details>
<summary>Esercizio 1 — Cubica completa (introduttivo)</summary>

**Testo.** Studia completamente $f(x)=x^3-3x+2$: dominio, zeri, monotonia, estremi, concavità, flessi, grafico qualitativo.

**Soluzione.** $D=\mathbb{R}$, nessuna simmetria. Zeri: $f(1)=0$ e $f(-2)=0$ (si fattorizza $f=(x-1)^2(x+2)$, quindi $x=1$ è zero doppio, $x=-2$ semplice). Limiti: $\pm\infty$; nessun asintoto.
$f'(x)=3x^2-3=3(x-1)(x+1)$: massimo locale in $x=-1$ ($f(-1)=4$, $f'$ passa $+\to-$), minimo locale in $x=1$ ($f(1)=0$, $f'$ passa $-\to+$).
$f''(x)=6x$: flesso in $x=0$ ($f(0)=2$), concava per $x<0$, convessa per $x>0$.
Grafico: sale al massimo $(-1,4)$, scende attraverso il flesso $(0,2)$ fino a toccare l'asse in $(1,0)$ (minimo), poi risale. ✓
</details>

<details>
<summary>Esercizio 2 — Razionale pari con asintoti (standard)</summary>

**Testo.** Studia $f(x)=\dfrac{x^2}{x^2-1}$: dominio, simmetria, asintoti, estremi, concavità.

**Soluzione.** $D=\mathbb{R}\setminus\{-1,1\}$. Pari ($f(-x)=f(x)$). Zero (doppio) in $x=0$; $f(0)=0$.
Asintoto orizzontale: $\lim_{x\to\pm\infty}\tfrac{x^2}{x^2-1}=1$, quindi $y=1$. Verticali $x=\pm1$: presso $x=1$, $\lim_{x\to1^-}=-\infty$, $\lim_{x\to1^+}=+\infty$ (simmetrico in $-1$).
$f'(x)=\dfrac{2x(x^2-1)-x^2\cdot2x}{(x^2-1)^2}=\dfrac{-2x}{(x^2-1)^2}$: segno di $-2x$, quindi massimo locale in $x=0$ ($f(0)=0$), $f'$ passa $+\to-$.
$f''(x)=\dfrac{6x^2+2}{(x^2-1)^3}$: numeratore sempre $>0$, segno di $(x^2-1)^3$. Convessa per $|x|>1$, concava per $|x|<1$; nessun flesso (i cambi sono in $\pm1$, esclusi). ✓
</details>

<details>
<summary>Esercizio 3 — Asintoto obliquo (standard)</summary>

**Testo.** Trova tutti gli asintoti di $f(x)=\dfrac{x^3+1}{x^2}$ e studia la monotonia.

**Soluzione.** $D=\mathbb{R}\setminus\{0\}$. $f(x)=x+\dfrac{1}{x^2}$. Asintoto verticale $x=0$: $\lim_{x\to0^{\pm}}f=+\infty$ (il termine $1/x^2\to+\infty$ da entrambi i lati). Nessun orizzontale ($f\to\pm\infty$). Obliquo: $m=\lim\tfrac{f}{x}=\lim\big(1+\tfrac{1}{x^3}\big)=1$; $q=\lim(f-x)=\lim\tfrac{1}{x^2}=0$. Asintoto $y=x$.
$f'(x)=1-\dfrac{2}{x^3}=\dfrac{x^3-2}{x^3}$. Zero in $x=\sqrt[3]{2}$. Studiando il segno (attenzione al salto in $x=0$): $f'>0$ per $x<0$, $f'<0$ per $0<x<\sqrt[3]2$, $f'>0$ per $x>\sqrt[3]2$. Minimo locale in $x=\sqrt[3]2$. ✓
</details>

<details>
<summary>Esercizio 4 — Funzione con esponenziale (standard)</summary>

**Testo.** Studia $f(x)=(x^2-2)\,e^{-x}$: limiti, estremi, concavità.

**Soluzione.** $D=\mathbb{R}$, nessuna simmetria. $\lim_{x\to-\infty}f=+\infty$, $\lim_{x\to+\infty}f=0^+$ (asintoto orizzontale $y=0$ a destra).
$f'(x)=2xe^{-x}-(x^2-2)e^{-x}=e^{-x}(-x^2+2x+2)$. Zeri di $-x^2+2x+2$: $x=1\pm\sqrt3$. Segno: $f'<0$ per $x<1-\sqrt3$, $f'>0$ tra le radici, $f'<0$ per $x>1+\sqrt3$. Minimo locale in $x=1-\sqrt3\approx-0.73$, massimo locale in $x=1+\sqrt3\approx2.73$.
$f''(x)=e^{-x}(x^2-4x)=e^{-x}\,x(x-4)$: zeri $x=0$ e $x=4$, entrambi con cambio di segno di $f''$: due flessi. Concava tra $0$ e $4$, convessa fuori. ✓
</details>

<details>
<summary>Esercizio 5 — Sfruttare la disparità (standard)</summary>

**Testo.** Usa la simmetria per studiare $f(x)=\dfrac{x}{x^2+1}$, poi trova estremi e flessi.

**Soluzione.** $D=\mathbb{R}$ (denominatore $>0$). $f(-x)=-f(x)$: **dispari**, basta studiare $x\ge0$ e ruotare rispetto all'origine. Zero in $x=0$; $\lim_{x\to\pm\infty}f=0$: asintoto orizzontale $y=0$.
$f'(x)=\dfrac{(x^2+1)-x\cdot2x}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}$. Per $x\ge0$: massimo in $x=1$ ($f(1)=\tfrac12$); per disparità, minimo in $x=-1$ ($f(-1)=-\tfrac12$).
$f''(x)=\dfrac{2x(x^2-3)}{(x^2+1)^3}$: zeri $x=0,\pm\sqrt3$, tutti con cambio di segno: **tre flessi**, in $x=0$ e $x=\pm\sqrt3$. ✓
</details>

<details>
<summary>Esercizio 6 — Massimo assoluto su intervallo chiuso (standard)</summary>

**Testo.** Trova massimo e minimo **assoluti** di $f(x)=\sin x+\cos x$ su $[0,2\pi]$.

**Soluzione.** Dominio dato $[0,2\pi]$, chiuso e limitato: confrontiamo i valori nei punti critici *e* agli estremi. $f'(x)=\cos x-\sin x=0\Rightarrow\tan x=1\Rightarrow x=\tfrac\pi4,\ \tfrac{5\pi}4$.
Valori: $f(0)=1$; $f(\tfrac\pi4)=\sqrt2\approx1.41$; $f(\tfrac{5\pi}4)=-\sqrt2$; $f(2\pi)=1$.
Massimo assoluto $\sqrt2$ in $x=\tfrac\pi4$; minimo assoluto $-\sqrt2$ in $x=\tfrac{5\pi}4$. *(Il confronto con i bordi è essenziale: su un intervallo chiuso un estremo assoluto può cadere al confine.)* ✓
</details>

<details>
<summary>Esercizio 7 — Dominio ristretto e cuspide (avanzato)</summary>

**Testo.** Studia $f(x)=x^{2/3}$ vicino all'origine: è derivabile in $0$? Che tipo di punto è $x=0$?

**Soluzione.** $D=\mathbb{R}$; funzione pari; $f\ge0$ con minimo in $x=0$. $f'(x)=\tfrac23x^{-1/3}=\dfrac{2}{3\sqrt[3]{x}}$: **non definita** in $x=0$, con $\lim_{x\to0^+}f'=+\infty$ e $\lim_{x\to0^-}f'=-\infty$. Dunque $x=0$ è un **punto critico non stazionario** (cuspide a tangente verticale) ed è un **minimo assoluto**.
*Errore da evitare:* cercare gli estremi solo tra gli zeri di $f'$ farebbe perdere questo minimo. I punti dove $f'$ non esiste sono candidati a tutti gli effetti. ✓
</details>

<details>
<summary>Esercizio 8 — Convessità e disuguaglianza (avanzato)</summary>

**Testo.** Mostra che $f(x)=e^x$ è convessa su $\mathbb{R}$ e deducine la disuguaglianza della tangente $e^x\ge1+x$ per ogni $x$.

**Soluzione.** $f''(x)=e^x>0$ ovunque: per il criterio §3.2, $f$ è (strettamente) convessa. Una funzione convessa sta *sopra ogni sua tangente*; la tangente in $x=0$ è $y=f(0)+f'(0)\,x=1+x$. Quindi $e^x\ge1+x$ per ogni $x$, con uguaglianza solo nel punto di tangenza $x=0$. ✓
</details>

<details>
<summary>Esercizio 9 — Ottimizzazione del profitto (applicativo, economia)</summary>

**Testo.** Un'impresa vende ogni unità a prezzo $30$ e ha costo totale $C(q)=q^3-6q^2+15q+10$. Determina il livello di produzione $q\ge0$ che **massimizza il profitto** $P(q)=30q-C(q)$ e verifica che sia un massimo.

**Soluzione.** $P(q)=30q-(q^3-6q^2+15q+10)=-q^3+6q^2+15q-10$, su $q\ge0$.
$P'(q)=-3q^2+12q+15=-3(q^2-4q-5)=-3(q-5)(q+1)$. Su $q\ge0$ l'unico punto critico è $q=5$ ($q=-1$ è fuori dominio). $P'$ passa da $+$ a $-$ in $q=5$: **massimo**. Conferma col test della derivata seconda: $P''(q)=-6q+12$, $P''(5)=-18<0$ ✓. Profitto massimo $P(5)=-125+150+75-10=90$.
*Interpretazione:* in $q=5$ il ricavo marginale ($30$) eguaglia il costo marginale $C'(5)=3\cdot25-12\cdot5+15=30$, la condizione classica di massimo profitto. ✓
</details>

<details>
<summary>Esercizio 10 — Studio con logaritmo end-to-end (avanzato)</summary>

**Testo.** Studia completamente $f(x)=x\ln x$ su $(0,+\infty)$: limiti, monotonia, estremi, concavità.

**Soluzione.** $D=(0,+\infty)$. Zero in $x=1$; $f<0$ su $(0,1)$, $f>0$ su $(1,+\infty)$. Limiti: $\lim_{x\to0^+}x\ln x=0^-$ (limite notevole: la potenza batte il logaritmo, il grafico "parte" dall'origine da sotto), $\lim_{x\to+\infty}x\ln x=+\infty$.
$f'(x)=\ln x+x\cdot\tfrac1x=\ln x+1$. Zero in $\ln x=-1$, cioè $x=e^{-1}=1/e$. $f'<0$ per $x<1/e$, $f'>0$ per $x>1/e$: **minimo assoluto** in $x=1/e$, $f(1/e)=\tfrac1e\cdot(-1)=-\tfrac1e\approx-0.368$.
$f''(x)=\tfrac1x>0$ su tutto il dominio: funzione **convessa**, nessun flesso.
Grafico: parte da $(0^+,0^-)$, scende convessa fino al minimo $(1/e,-1/e)$, risale attraversando l'asse in $(1,0)$ e cresce senza limite. ✓
</details>
