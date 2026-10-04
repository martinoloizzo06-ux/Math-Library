---
id: algebra-11-prodotto-scalare
titolo: "Prodotto scalare e spazi con norma"
materia: algebra-lineare
argomento: "Ortogonalità"
modulo: "Ortogonalità"
livello: universitario
slug: algebra-11-prodotto-scalare

# legacy
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: "Prodotto scalare e spazi con norma"
title_en: "Inner product and normed spaces"
level: blue
order: 11
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Prodotto scalare interno, norma indotta, disuguaglianza di Cauchy-Schwarz, ortogonalità"

prerequisiti:
  - algebra-01-vettori
  - algebra-05-spazi-vettoriali

collegamenti:
  - algebra-01-vettori
  - algebra-12-ortogonalita-proiezioni
  - algebra-13-gram-schmidt
  - algebra-14-forme-quadratiche

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Prodotto scalare, norma, distanza, ortogonalità, disuguaglianza di Cauchy-Schwarz e triangolare"
    note: "appunti-prof: assiomi, notazione e criteri come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Spazi con prodotto interno, norma indotta, Cauchy-Schwarz, ortogonalità e teorema di Pitagora"
    note: "rigore: impostazione assiomatica astratta, dimostrazioni pulite valide in qualsiasi spazio"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Interpretazione geometrica: lunghezza, angolo, proiezione come letture del prodotto scalare"
    note: "intuizione: il prodotto scalare come misuratore simultaneo di lunghezza e allineamento"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Esempi risolti in Rⁿ e in spazi di funzioni, prodotti scalari pesati"
    note: "esempi supplementari, incluso lo spazio L²"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-13"
stato: completa
profondita: approfondita
componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Nel piano cartesiano due cose ci sembrano ovvie: sappiamo quanto è lungo un vettore e sappiamo che angolo formano due vettori. Sono i due dati geometrici fondamentali, quelli con cui misuriamo distanze, decidiamo se due direzioni sono perpendicolari, calcoliamo l'ombra di una freccia su un'altra. La sorpresa dell'algebra lineare è che entrambe queste nozioni — lunghezza e angolo — non sono concetti primitivi separati: nascono da **una sola operazione**, il prodotto scalare. Se sai fare il prodotto scalare, allora sai misurare lunghezze (la lunghezza di $\mathbf{v}$ è $\sqrt{\mathbf{v}\cdot\mathbf{v}}$) e sai misurare angoli (attraverso $\cos\theta$). Tutta la geometria metrica di uno spazio è contenuta in questo unico strumento.

Questo diventa potente quando lasciamo il piano. In $\mathbb{R}^2$ l'angolo tra due frecce lo vediamo con gli occhi; ma cosa vuol dire che due *funzioni* sono perpendicolari? Cosa vuol dire che un segnale sonoro è «lungo» tanto così? Non abbiamo occhi per vederlo, eppure abbiamo bisogno di dirlo con precisione. La mossa decisiva è **rovesciare la logica**: invece di estrarre il prodotto scalare dalla geometria che già vediamo, prendiamo le proprietà essenziali del prodotto scalare — poche, algebriche, verificabili — e le eleviamo a definizione. Chiamiamo prodotto scalare interno qualunque operazione che si comporti come quella di $\mathbb{R}^n$: simmetrica, lineare, e che assegni a ogni vettore non nullo una «lunghezza al quadrato» positiva. Una volta fissata quella regola, tutta la geometria — lunghezze, angoli, perpendicolarità, il teorema di Pitagora — si trasferisce automaticamente allo spazio nuovo, foss'anche uno spazio di funzioni.

Il caso più importante è proprio quello: lo spazio delle funzioni con il prodotto scalare integrale $\langle f,g\rangle=\int f g$. Qui l'ortogonalità smette di essere un'immagine e diventa un calcolo: $\sin(mx)$ e $\sin(nx)$ sono «perpendicolari» quando il loro integrale prodotto è nullo, e lo sono per ogni coppia di frequenze intere distinte. È esattamente questo fatto — funzioni ortogonali come frecce ortogonali — che permette di scomporre un suono nelle sue frequenze pure (le serie di Fourier), di descrivere gli stati della meccanica quantistica, di far funzionare i metodi kernel nell'apprendimento automatico. In economia e statistica lo stesso strumento misura la correlazione tra due serie di dati: variabili «ortogonali» sono variabili scorrelate. Un solo assioma, tante geometrie.

C'è infine un guadagno di rigore che ci accompagnerà nelle prossime lezioni. Una volta che disponiamo di una nozione di angolo e di perpendicolarità valida ovunque, possiamo costruire **basi ortogonali** — sistemi di riferimento in cui i vettori sono a due a due perpendicolari e di lunghezza uno. In queste basi ogni calcolo si semplifica: le coordinate di un vettore si leggono con un solo prodotto scalare, le proiezioni diventano immediate, la geometria torna a essere quella pulita del piano cartesiano anche in dimensione infinita. Il prodotto scalare è la porta d'ingresso: le proiezioni ortogonali, Gram-Schmidt e le forme quadratiche, che vedremo subito dopo, ne sono le stanze.

---

## 2. Teoria

### 2.1 Definizione assiomatica

**Definizione (prodotto scalare interno).** Sia $V$ uno spazio vettoriale su $\mathbb{R}$. Un **prodotto scalare interno** è una funzione $\langle\cdot,\cdot\rangle: V\times V\to\mathbb{R}$ che, per ogni $\mathbf{u},\mathbf{v},\mathbf{w}\in V$ e ogni $c\in\mathbb{R}$, soddisfa i tre assiomi:

1. **Simmetria:** $\langle\mathbf{u},\mathbf{v}\rangle=\langle\mathbf{v},\mathbf{u}\rangle$.
2. **Linearità nel primo argomento:** $\langle c\mathbf{u}+\mathbf{w},\mathbf{v}\rangle=c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{w},\mathbf{v}\rangle$.
3. **Positività definita:** $\langle\mathbf{v},\mathbf{v}\rangle\ge 0$, con uguaglianza $\langle\mathbf{v},\mathbf{v}\rangle=0$ se e solo se $\mathbf{v}=\mathbf{0}$.

Ogni assioma svolge un ruolo preciso. La **simmetria** dice che l'operazione non distingue l'ordine dei due argomenti: misura una relazione reciproca, non una direzione. La **linearità** dice che il prodotto scalare rispetta la struttura vettoriale — somme e multipli passano attraverso di esso — ed è ciò che rende ogni calcolo trattabile algebricamente. La **positività definita** è l'assioma geometricamente decisivo: garantisce che $\langle\mathbf{v},\mathbf{v}\rangle$ sia una quantità $\ge 0$ che possiamo interpretare come lunghezza al quadrato, e che solo il vettore nullo abbia lunghezza nulla. Senza questo assioma non ci sarebbe una nozione sensata di distanza.

*Micro-esempio.* In $\mathbb{R}^2$ con $\langle\mathbf{u},\mathbf{v}\rangle=u_1v_1+u_2v_2$: la simmetria è la commutatività della somma di prodotti; la positività è $\langle\mathbf{v},\mathbf{v}\rangle=v_1^2+v_2^2\ge0$, nulla solo se $v_1=v_2=0$. I tre assiomi sono soddisfatti — è il prodotto scalare standard.

Combinando simmetria e linearità nel primo argomento si ottiene gratis la linearità anche nel secondo: il prodotto scalare è **bilineare**. La dimostrazione è breve e la rimandiamo alla sezione 3; per ora la usiamo liberamente.

*Micro-esempio.* Bilinearità in azione: $\langle\mathbf{u},2\mathbf{v}+\mathbf{w}\rangle=2\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{u},\mathbf{w}\rangle$. Si «distribuisce» esattamente come una moltiplicazione, su entrambi i lati.

### 2.2 I tre modelli fondamentali

**Prodotto scalare standard in $\mathbb{R}^n$.** Il modello di riferimento, quello da cui tutto è astratto:

$$\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}^{\!\top}\mathbf{v}=\sum_{i=1}^n u_i v_i.$$

Qui $\mathbf{u}^{\!\top}\mathbf{v}$ è il prodotto riga-per-colonna: un vettore riga $1\times n$ per un vettore colonna $n\times 1$, che restituisce un numero.

*Micro-esempio.* $\mathbf{u}=(1,2,-1)$, $\mathbf{v}=(3,0,1)$: $\langle\mathbf{u},\mathbf{v}\rangle=3+0-1=2$.

**Prodotto scalare in $L^2([a,b])$.** Sullo spazio delle funzioni a quadrato integrabile su $[a,b]$ si definisce

$$\langle f,g\rangle=\int_a^b f(x)g(x)\,dx.$$

L'analogia con $\mathbb{R}^n$ è esatta: la somma discreta $\sum u_iv_i$ diventa una «somma continua», cioè un integrale. Ogni punto $x$ gioca il ruolo che in $\mathbb{R}^n$ gioca l'indice $i$. È il contesto naturale delle serie di Fourier e della meccanica quantistica.

*Micro-esempio.* Su $[0,1]$, $\langle 1,x\rangle=\int_0^1 x\,dx=\tfrac12\ne0$: le funzioni costante $1$ e $x$ non sono ortogonali su questo intervallo.

**Prodotto scalare pesato.** Data una funzione peso $w(x)>0$, si pone $\langle f,g\rangle_w=\int_a^b f(x)g(x)w(x)\,dx$. Il peso cambia quali funzioni risultano ortogonali e genera famiglie diverse di polinomi ortogonali (Legendre, Chebyshev, Laguerre). È la prova concreta che l'ortogonalità **dipende dal prodotto scalare scelto**, non è una proprietà assoluta dei vettori.

*Micro-esempio.* Con peso $w(x)=e^{-x}$ su $[0,\infty)$ nascono i polinomi di Laguerre; con peso $w=1$ su $[-1,1]$ quelli di Legendre. Gli stessi «vettori» (polinomi), prodotti scalari diversi, ortogonalità diverse.

### 2.3 Norma indotta, distanza, angolo

Il primo frutto della positività definita è la **norma**:

$$\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}.$$

La radice ha senso proprio perché il radicando è $\ge0$. La norma eredita tre proprietà: $\lVert\mathbf{v}\rVert\ge0$ con uguaglianza solo per $\mathbf{v}=\mathbf{0}$ (dalla positività), $\lVert c\mathbf{v}\rVert=\lvert c\rvert\,\lVert\mathbf{v}\rVert$ (omogeneità, dalla bilinearità), e la disuguaglianza triangolare $\lVert\mathbf{u}+\mathbf{v}\rVert\le\lVert\mathbf{u}\rVert+\lVert\mathbf{v}\rVert$ (che dimostreremo). La **distanza** tra due vettori è $d(\mathbf{u},\mathbf{v})=\lVert\mathbf{u}-\mathbf{v}\rVert$.

*Micro-esempio.* In $\mathbb{R}^2$, $\lVert(3,4)\rVert=\sqrt{9+16}=5$: la norma indotta dal prodotto scalare standard è esattamente il teorema di Pitagora.

Il secondo frutto è l'**angolo**. In $\mathbb{R}^n$ vale l'identità $\langle\mathbf{u},\mathbf{v}\rangle=\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$, dove $\theta$ è l'angolo geometrico tra i due vettori (la dimostreremo dal teorema del coseno in [algebra-01-vettori]). Rovesciandola, **definiamo** l'angolo in qualunque spazio con prodotto scalare come

$$\cos\theta=\frac{\langle\mathbf{u},\mathbf{v}\rangle}{\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert}.$$

Perché questa definizione sia lecita occorre che il membro destro stia sempre nell'intervallo $[-1,1]$: è esattamente ciò che garantisce la disuguaglianza di Cauchy-Schwarz, il teorema centrale della lezione.

*Micro-esempio.* $\mathbf{u}=(1,0,0)$, $\mathbf{v}=(1,1,0)$: $\cos\theta=\dfrac{1}{1\cdot\sqrt2}=\dfrac{1}{\sqrt2}$, dunque $\theta=45°$.

### 2.4 Cauchy-Schwarz e ortogonalità

**Disuguaglianza di Cauchy-Schwarz.** In ogni spazio con prodotto scalare,

$$\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert,$$

con uguaglianza se e solo se $\mathbf{u}$ e $\mathbf{v}$ sono linearmente dipendenti. In parole: il prodotto scalare non può mai superare il prodotto delle lunghezze; il massimo allineamento si ha quando i vettori sono paralleli. È questa disuguaglianza a rendere ben definito $\cos\theta$ e a garantire la disuguaglianza triangolare della norma. La dimostrazione è nella sezione 3.

*Micro-esempio.* $\mathbf{u}=(1,2)$, $\mathbf{v}=(3,1)$: $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert=\lvert5\rvert=5$, mentre $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert=\sqrt5\cdot\sqrt{10}=\sqrt{50}\approx7{,}07$. E infatti $5\le7{,}07$.

**Ortogonalità.** Due vettori sono **ortogonali**, e si scrive $\mathbf{u}\perp\mathbf{v}$, quando

$$\langle\mathbf{u},\mathbf{v}\rangle=0,$$

cioè quando $\cos\theta=0$, ovvero $\theta=90°$. È la generalizzazione della perpendicolarità: non richiede più di «vedere» un angolo retto, basta che il prodotto scalare si annulli. Il vettore nullo è ortogonale a tutti (e, notare, è l'unico vettore ortogonale a sé stesso, per la positività definita).

*Micro-esempio.* $\mathbf{u}=(1,2,-1,0)$, $\mathbf{v}=(2,-1,0,3)$: $\langle\mathbf{u},\mathbf{v}\rangle=2-2+0+0=0$. Ortogonali in $\mathbb{R}^4$, benché non li si possa disegnare.

**Teorema di Pitagora generalizzato.** Se $\mathbf{u}\perp\mathbf{v}$, allora

$$\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2.$$

È il vecchio teorema, valido ora in ogni spazio con prodotto scalare: la dimostrazione è una riga di bilinearità (sezione 3). L'ortogonalità è precisamente la condizione che fa sparire il «doppio prodotto».

*Micro-esempio.* $\mathbf{u}=(3,4)$, $\mathbf{v}=(-4,3)$: sono ortogonali ($-12+12=0$), e $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert(-1,7)\rVert^2=50=25+25$.

```checkpoint
[domanda]
Sulla base $\mathbb{R}^2$ definiamo $B(\mathbf{u},\mathbf{v})=u_1v_1-u_2v_2$. È simmetrica e bilineare. È un prodotto scalare interno?

[risposta]
No. Viola la positività definita: per $\mathbf{v}=(0,1)$ si ha $B(\mathbf{v},\mathbf{v})=0-1=-1<0$, e per $\mathbf{v}=(1,1)\ne\mathbf{0}$ si ha $B(\mathbf{v},\mathbf{v})=1-1=0$ pur essendo $\mathbf{v}$ non nullo. Manca l'assioma decisivo: è una forma indefinita, non un prodotto scalare. Non induce una norma.
```

Il seguente slider mostra il caso emblematico dell'ortogonalità in $L^2$: al variare della frequenza intera $n$, la funzione $\sin(nx)$ resta ortogonale a $\sin(x)$ perché $\int_0^{2\pi}\sin(x)\sin(nx)\,dx=0$ per ogni intero $n\ne1$. È il fatto che rende possibili le serie di Fourier.

```slider
{"title": "Ortogonalità in L²: sin(x) fissa (blu) e sin(nx) al variare della frequenza n (rossa). Per ogni intero n≠1 l'integrale del prodotto su [0,2π] è nullo — le due funzioni sono ortogonali. È la base delle serie di Fourier (parametro: frequenza n)", "fn": "Math.sin(x)", "fn2": "Math.sin(a*x)", "domain": [0, 6.28], "yDomain": [-1.3, 1.3], "pname": "a", "pmin": 1, "pmax": 6, "pdefault": 2, "pstep": 1, "plabel": "frequenza n della seconda funzione", "label1": "sin(x)", "label2": "sin(nx)"}
```

```checkpoint
[domanda]
La norma $\lVert\mathbf{v}\rVert_1=\lvert v_1\rvert+\lvert v_2\rvert$ (norma «taxi») è una norma legittima su $\mathbb{R}^2$. Proviene da un prodotto scalare?

[risposta]
No. Una norma proviene da un prodotto scalare se e solo se soddisfa l'identità del parallelogramma $\lVert\mathbf{u}+\mathbf{v}\rVert^2+\lVert\mathbf{u}-\mathbf{v}\rVert^2=2(\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2)$. Con $\mathbf{u}=(1,0)$, $\mathbf{v}=(0,1)$: sinistra $=2^2+2^2=8$, destra $=2(1+1)=4$. L'identità fallisce, quindi $\lVert\cdot\rVert_1$ non è indotta da nessun prodotto scalare.
```

---

## 3. Dimostrazioni

### 3.1 Disuguaglianza di Cauchy-Schwarz

**Enunciato.** In ogni spazio con prodotto scalare, $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert$, con uguaglianza se e solo se $\mathbf{u},\mathbf{v}$ sono linearmente dipendenti.

**Dimostrazione.** Se $\mathbf{v}=\mathbf{0}$, entrambi i membri sono nulli e i vettori sono dipendenti: la tesi vale. Supponiamo dunque $\mathbf{v}\ne\mathbf{0}$. L'idea è sfruttare l'unico fatto forte a disposizione — la positività definita — applicandolo a un vettore costruito ad hoc. Consideriamo, per $t\in\mathbb{R}$, la quantità

$$f(t)=\lVert\mathbf{u}+t\mathbf{v}\rVert^2=\langle\mathbf{u}+t\mathbf{v},\,\mathbf{u}+t\mathbf{v}\rangle.$$

Per la positività definita, $f(t)\ge0$ per **ogni** valore di $t$. Espandiamo il prodotto scalare usando la bilinearità e la simmetria:

$$f(t)=\langle\mathbf{u},\mathbf{u}\rangle+2t\langle\mathbf{u},\mathbf{v}\rangle+t^2\langle\mathbf{v},\mathbf{v}\rangle=\lVert\mathbf{v}\rVert^2\,t^2+2\langle\mathbf{u},\mathbf{v}\rangle\,t+\lVert\mathbf{u}\rVert^2.$$

Questo è un polinomio di secondo grado in $t$ (il coefficiente direttore $\lVert\mathbf{v}\rVert^2$ è positivo perché $\mathbf{v}\ne\mathbf{0}$), che non assume mai valori negativi. Una parabola rivolta verso l'alto che non scende mai sotto zero non può avere due radici reali distinte: il suo discriminante deve essere $\le0$. Imponendo $\Delta\le0$:

$$\Delta=\big(2\langle\mathbf{u},\mathbf{v}\rangle\big)^2-4\lVert\mathbf{v}\rVert^2\lVert\mathbf{u}\rVert^2\le0.$$

Dividendo per $4$ e riordinando, $\langle\mathbf{u},\mathbf{v}\rangle^2\le\lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2$, ed estraendo la radice (entrambi i membri sono $\ge0$),

$$\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert.$$

Il passo che rende tutto rigoroso è «positività per ogni $t$ $\Rightarrow$ discriminante $\le0$»: qui si usa in pieno l'assioma di positività definita, non una semplice manipolazione algebrica. $\blacksquare$

<details class="dim-tecnica">
<summary>Caso di uguaglianza (dimostrazione tecnica)</summary>

L'uguaglianza $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert=\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ equivale a $\Delta=0$, cioè al fatto che la parabola $f(t)$ tocca lo zero in un punto $t_0$. Ma $f(t_0)=\lVert\mathbf{u}+t_0\mathbf{v}\rVert^2=0$, e per la positività definita questo forza $\mathbf{u}+t_0\mathbf{v}=\mathbf{0}$, ossia $\mathbf{u}=-t_0\mathbf{v}$: i due vettori sono proporzionali, dunque linearmente dipendenti. Viceversa, se $\mathbf{u}=\lambda\mathbf{v}$, un calcolo diretto dà $\lvert\langle\lambda\mathbf{v},\mathbf{v}\rangle\rvert=\lvert\lambda\rvert\lVert\mathbf{v}\rVert^2=\lVert\lambda\mathbf{v}\rVert\lVert\mathbf{v}\rVert$, cioè l'uguaglianza. Le due condizioni sono quindi equivalenti.

</details>

### 3.2 Bilinearità (linearità nel secondo argomento)

<details class="dim-tecnica">
<summary>Dal simmetria + linearità nel primo argomento segue la linearità nel secondo (dimostrazione tecnica)</summary>

Vogliamo mostrare $\langle\mathbf{u},c\mathbf{v}+\mathbf{w}\rangle=c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{u},\mathbf{w}\rangle$. Partiamo applicando la simmetria per portare il secondo argomento al primo posto, dove sappiamo essere lineari, poi la simmetria di nuovo a ritroso:

$$\langle\mathbf{u},c\mathbf{v}+\mathbf{w}\rangle\overset{\text{sim.}}{=}\langle c\mathbf{v}+\mathbf{w},\mathbf{u}\rangle\overset{\text{lin.}}{=}c\langle\mathbf{v},\mathbf{u}\rangle+\langle\mathbf{w},\mathbf{u}\rangle\overset{\text{sim.}}{=}c\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{u},\mathbf{w}\rangle.$$

Ogni passaggio usa un solo assioma, indicato sopra il segno di uguaglianza. La linearità nel secondo argomento non è quindi un assioma aggiuntivo: è una conseguenza. Per questo il prodotto scalare (reale) si dice **bilineare**.

</details>

### 3.3 Teorema di Pitagora generalizzato

<details class="dim-tecnica">
<summary>Se $\mathbf{u}\perp\mathbf{v}$ allora $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$ (dimostrazione tecnica)</summary>

Espandiamo la norma al quadrato con la bilinearità e la simmetria:

$$\lVert\mathbf{u}+\mathbf{v}\rVert^2=\langle\mathbf{u}+\mathbf{v},\mathbf{u}+\mathbf{v}\rangle=\langle\mathbf{u},\mathbf{u}\rangle+2\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{v},\mathbf{v}\rangle=\lVert\mathbf{u}\rVert^2+2\langle\mathbf{u},\mathbf{v}\rangle+\lVert\mathbf{v}\rVert^2.$$

L'ipotesi $\mathbf{u}\perp\mathbf{v}$ significa $\langle\mathbf{u},\mathbf{v}\rangle=0$: il termine centrale, il «doppio prodotto», si annulla, e resta $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$. La formula generale con il doppio prodotto è la vera identità; il teorema di Pitagora è il suo caso particolare quando i vettori sono ortogonali.

</details>

### 3.4 Disuguaglianza triangolare

<details class="dim-tecnica">
<summary>$\lVert\mathbf{u}+\mathbf{v}\rVert\le\lVert\mathbf{u}\rVert+\lVert\mathbf{v}\rVert$ come corollario di Cauchy-Schwarz (dimostrazione tecnica)</summary>

Partiamo dalla norma al quadrato della somma e maggioriamo il doppio prodotto con Cauchy-Schwarz:

$$\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+2\langle\mathbf{u},\mathbf{v}\rangle+\lVert\mathbf{v}\rVert^2\le\lVert\mathbf{u}\rVert^2+2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert+\lVert\mathbf{v}\rVert^2=\big(\lVert\mathbf{u}\rVert+\lVert\mathbf{v}\rVert\big)^2.$$

La disuguaglianza al centro usa $\langle\mathbf{u},\mathbf{v}\rangle\le\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$. Estraendo la radice quadrata (entrambi i membri sono $\ge0$) si ottiene $\lVert\mathbf{u}+\mathbf{v}\rVert\le\lVert\mathbf{u}\rVert+\lVert\mathbf{v}\rVert$. Geometricamente: un lato di un triangolo non supera la somma degli altri due. È il fatto che rende $d(\mathbf{u},\mathbf{v})=\lVert\mathbf{u}-\mathbf{v}\rVert$ una vera distanza. $\blacksquare$

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — Ortogonalità e Pitagora in $\mathbb{R}^4$.**
Siano $\mathbf{u}=(1,2,-1,0)$ e $\mathbf{v}=(2,-1,0,3)$. Il prodotto scalare è $\langle\mathbf{u},\mathbf{v}\rangle=1\cdot2+2\cdot(-1)+(-1)\cdot0+0\cdot3=0$: ortogonali. Le norme: $\lVert\mathbf{u}\rVert=\sqrt{1+4+1+0}=\sqrt6$, $\lVert\mathbf{v}\rVert=\sqrt{4+1+0+9}=\sqrt{14}$. Verifica di Pitagora: $\mathbf{u}+\mathbf{v}=(3,1,-1,3)$, $\lVert\mathbf{u}+\mathbf{v}\rVert^2=9+1+1+9=20=6+14$. Torna.

**Esempio 2 (introduttivo) — Angolo tra vettori.**
Per $\mathbf{u}=(1,1,0)$ e $\mathbf{v}=(0,1,1)$: $\langle\mathbf{u},\mathbf{v}\rangle=0+1+0=1$, $\lVert\mathbf{u}\rVert=\lVert\mathbf{v}\rVert=\sqrt2$. Quindi $\cos\theta=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12$, da cui $\theta=60°$. La Cauchy-Schwarz è rispettata ($1\le2$) e $\cos\theta\in[-1,1]$ come deve.

**Esempio 3 (intermedio) — Norma $L^2$ di una sinusoide.**
Calcoliamo $\lVert\sin\rVert$ su $[0,\pi]$. Usando $\sin^2x=\tfrac{1-\cos2x}{2}$:

$$\lVert\sin\rVert^2=\int_0^\pi\sin^2x\,dx=\int_0^\pi\frac{1-\cos2x}{2}\,dx=\left[\frac{x}{2}-\frac{\sin2x}{4}\right]_0^\pi=\frac{\pi}{2}.$$

Dunque $\lVert\sin\rVert=\sqrt{\pi/2}$. In $L^2$ anche una funzione ha una «lunghezza» ben precisa.

**Esempio 4 (intermedio) — Seno e coseno sono ortogonali.**
Su $[0,\pi]$, con l'identità $\sin x\cos x=\tfrac12\sin2x$:

$$\langle\sin,\cos\rangle=\int_0^\pi\sin x\cos x\,dx=\frac12\int_0^\pi\sin2x\,dx=\left[-\frac{\cos2x}{4}\right]_0^\pi=\frac{-1+1}{4}=0.$$

Perpendicolari come vettori, pur essendo funzioni. È il primo mattone delle serie di Fourier.

**Esempio 5 (intermedio) — Cauchy-Schwarz produce una disuguaglianza classica.**
Applichiamo Cauchy-Schwarz in $\mathbb{R}^n$ ai vettori $\mathbf{a}=(a_1,\dots,a_n)$ e $\mathbf{b}=(b_1,\dots,b_n)$:

$$\left(\sum_{i=1}^n a_ib_i\right)^2=\langle\mathbf{a},\mathbf{b}\rangle^2\le\lVert\mathbf{a}\rVert^2\lVert\mathbf{b}\rVert^2=\left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right).$$

Un teorema di algebra lineare produce, quasi senza sforzo, una disuguaglianza numerica non banale. Scegliendo $\mathbf{b}=(1,\dots,1)$ si ottiene $\big(\sum a_i\big)^2\le n\sum a_i^2$ (media $\le$ media quadratica).

**Esempio 6 (intermedio) — L'ortogonalità dipende dal peso.**
Sullo spazio dei polinomi su $[0,1]$ con peso $w(x)=e^{-x}$: $\langle 1,x\rangle_w=\int_0^1 x\,e^{-x}\,dx$. Integrando per parti, $\int x e^{-x}dx=-(x+1)e^{-x}$, quindi $\langle 1,x\rangle_w=\big[-(x+1)e^{-x}\big]_0^1=-2e^{-1}+1=1-\tfrac{2}{e}\approx0{,}26\ne0$. Con peso $w=1$ invece $\langle1,x\rangle=\tfrac12$. Cambiando il peso cambia il valore, e potrebbe cambiare l'ortogonalità: nessuna ortogonalità è assoluta.

**Esempio 7 (avanzato) — La famiglia $\{\sin(nx)\}$ è ortogonale.**
Per interi positivi $m\ne n$, su $[0,\pi]$, usando la formula di prostaferesi $\sin(mx)\sin(nx)=\tfrac12[\cos((m-n)x)-\cos((m+n)x)]$:

$$\int_0^\pi\sin(mx)\sin(nx)\,dx=\frac12\int_0^\pi\big[\cos((m-n)x)-\cos((m+n)x)\big]\,dx=\frac12\left[\frac{\sin((m-n)x)}{m-n}-\frac{\sin((m+n)x)}{m+n}\right]_0^\pi=0,$$

perché $\sin(k\pi)=0$ per ogni intero $k$. Le infinite funzioni $\sin(x),\sin(2x),\sin(3x),\dots$ sono a due a due ortogonali: una «base ortogonale» in dimensione infinita, il cuore dello sviluppo in serie di Fourier di seni.

**Esempio 8 (applicativo) — Coefficiente di correlazione come coseno.**
In statistica, date due serie di dati centrate $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$ (a media nulla), il coefficiente di correlazione di Pearson è $r=\dfrac{\sum x_iy_i}{\sqrt{\sum x_i^2}\sqrt{\sum y_i^2}}=\dfrac{\langle\mathbf{x},\mathbf{y}\rangle}{\lVert\mathbf{x}\rVert\lVert\mathbf{y}\rVert}=\cos\theta$. La correlazione è letteralmente il coseno dell'angolo tra i due vettori di dati: $r=1$ vettori paralleli (correlazione perfetta), $r=0$ vettori ortogonali (variabili scorrelate), $r=-1$ antiparalleli. E Cauchy-Schwarz è precisamente il teorema che garantisce $-1\le r\le1$.

---

## 5. Collegamenti e riepilogo

Questa lezione ha compiuto un'astrazione precisa: ha preso lunghezza e angolo — le due misure geometriche fondamentali — e le ha ricondotte a un'unica operazione algebrica retta da tre assiomi. Da quel momento, tutto ciò che sappiamo fare in $\mathbb{R}^2$ (misurare, decidere la perpendicolarità, applicare Pitagora) si trasferisce a qualunque spazio dotato di prodotto scalare, compresi gli spazi di funzioni. La disuguaglianza di Cauchy-Schwarz è il cardine su cui poggia l'intero edificio: rende ben definito l'angolo, garantisce la disuguaglianza triangolare, e traduce in disuguaglianze numeriche concrete tutte le volte che la si specializza.

Le connessioni sono immediate. Il prodotto scalare standard e l'angolo tramite coseno riprendono e completano quanto introdotto in [algebra-01-vettori]; l'idea di spazio vettoriale su cui la struttura è costruita viene da [algebra-05-spazi-vettoriali]. La direzione in avanti è tutta la geometria dell'ortogonalità: in [algebra-12-ortogonalita-proiezioni] useremo il prodotto scalare per proiettare un vettore su un sottospazio (il fondamento del metodo dei minimi quadrati e della regressione), e in [algebra-13-gram-schmidt] costruiremo basi ortonormali a partire da basi qualsiasi, dove ogni coordinata si legge con un solo prodotto scalare. Più avanti, in [algebra-14-forme-quadratiche], la stessa struttura bilineare — ma senza l'assioma di positività — genererà le forme quadratiche e il legame con le matrici simmetriche. Fuori dall'algebra, il prodotto scalare $L^2$ è la spina dorsale delle serie di Fourier e dell'analisi del segnale, lo spazio di Hilbert è l'ambiente della meccanica quantistica, il «trucco del kernel» nell'apprendimento automatico sfrutta il fatto che molti algoritmi dipendono dai dati solo attraverso prodotti scalari, e in statistica la correlazione è il coseno dell'angolo tra vettori di dati.

Le idee da portare via. Un **prodotto scalare interno** è una funzione simmetrica, bilineare e positiva definita $\langle\cdot,\cdot\rangle$; l'ultimo assioma è quello che dà senso geometrico a tutto il resto. Da esso si ottiene la **norma** $\lVert\mathbf{v}\rVert=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$, la **distanza** $d(\mathbf{u},\mathbf{v})=\lVert\mathbf{u}-\mathbf{v}\rVert$ e l'**angolo** via $\cos\theta=\langle\mathbf{u},\mathbf{v}\rangle/(\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert)$. La **disuguaglianza di Cauchy-Schwarz** $\lvert\langle\mathbf{u},\mathbf{v}\rangle\rvert\le\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ (uguaglianza solo per vettori dipendenti) garantisce che il coseno sia sempre in $[-1,1]$ e implica la **disuguaglianza triangolare**. Due vettori sono **ortogonali** quando $\langle\mathbf{u},\mathbf{v}\rangle=0$, e in tal caso vale il **teorema di Pitagora** $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$. Infine: l'ortogonalità **non è assoluta**, dipende dal prodotto scalare scelto, e non ogni norma proviene da un prodotto scalare (solo quelle che soddisfano l'identità del parallelogramma).

---

## 6. Esercizi

<details class="dim-tecnica">
<summary>Esercizio 1 (introduttivo) — Ortogonalità e norme in $\mathbb{R}^4$</summary>

Verificare se $\mathbf{u}=(1,2,-1,0)$ e $\mathbf{v}=(2,-1,0,3)$ sono ortogonali, calcolarne le norme e controllare il teorema di Pitagora.

**Soluzione.** $\langle\mathbf{u},\mathbf{v}\rangle=2-2+0+0=0$: ortogonali. $\lVert\mathbf{u}\rVert=\sqrt{1+4+1}=\sqrt6$, $\lVert\mathbf{v}\rVert=\sqrt{4+1+9}=\sqrt{14}$. Pitagora: $\mathbf{u}+\mathbf{v}=(3,1,-1,3)$, $\lVert\mathbf{u}+\mathbf{v}\rVert^2=9+1+1+9=20=6+14=\lVert\mathbf{u}\rVert^2+\lVert\mathbf{v}\rVert^2$. Verificato.

</details>

<details class="dim-tecnica">
<summary>Esercizio 2 (introduttivo) — Norma in $L^2$</summary>

Calcolare $\lVert f\rVert$ per $f(x)=x$ sull'intervallo $[0,1]$.

**Soluzione.** $\lVert f\rVert^2=\displaystyle\int_0^1 x^2\,dx=\left[\frac{x^3}{3}\right]_0^1=\frac13$, quindi $\lVert f\rVert=\dfrac{1}{\sqrt3}$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 3 (standard) — Angolo tra vettori</summary>

Calcolare l'angolo tra $\mathbf{u}=(2,1,-2)$ e $\mathbf{v}=(1,2,2)$.

**Soluzione.** $\langle\mathbf{u},\mathbf{v}\rangle=2+2-4=0$: i vettori sono ortogonali, quindi $\theta=90°$. (Le norme valgono entrambe $3$, ma non servono: il solo annullarsi del prodotto scalare basta a concludere.)

</details>

<details class="dim-tecnica">
<summary>Esercizio 4 (standard) — Cauchy-Schwarz applicata</summary>

Usando Cauchy-Schwarz, dimostrare che per ogni $a_1,\dots,a_n>0$ vale $\left(\sum_{i=1}^n a_i\right)^2\le n\sum_{i=1}^n a_i^2$.

**Soluzione.** Applichiamo la disuguaglianza in $\mathbb{R}^n$ ai vettori $\mathbf{a}=(a_1,\dots,a_n)$ e $\mathbf{1}=(1,\dots,1)$. Allora $\langle\mathbf{a},\mathbf{1}\rangle=\sum a_i$, $\lVert\mathbf{a}\rVert^2=\sum a_i^2$, $\lVert\mathbf{1}\rVert^2=n$. Cauchy-Schwarz dà $\big(\sum a_i\big)^2\le\big(\sum a_i^2\big)\cdot n$. L'uguaglianza vale quando $\mathbf{a}$ è parallelo a $\mathbf{1}$, cioè tutti gli $a_i$ uguali.

</details>

<details class="dim-tecnica">
<summary>Esercizio 5 (standard) — Ortogonalità in $L^2$ su $[0,2\pi]$</summary>

Verificare che $f(x)=\sin x$ e $g(x)=\cos x$ sono ortogonali su $[0,2\pi]$.

**Soluzione.** $\langle\sin,\cos\rangle=\displaystyle\int_0^{2\pi}\sin x\cos x\,dx=\frac12\int_0^{2\pi}\sin2x\,dx=\left[-\frac{\cos2x}{4}\right]_0^{2\pi}=\frac{-1+1}{4}=0$. Ortogonali.

</details>

<details class="dim-tecnica">
<summary>Esercizio 6 (standard) — Verificare gli assiomi</summary>

Mostrare che $\langle f,g\rangle=\displaystyle\int_0^1 f(x)g(x)\,dx$ è un prodotto scalare sullo spazio delle funzioni continue su $[0,1]$.

**Soluzione.** *Simmetria*: $\int_0^1 fg\,dx=\int_0^1 gf\,dx$ per commutatività del prodotto. *Linearità nel primo argomento*: $\int_0^1(cf+h)g\,dx=c\int_0^1 fg\,dx+\int_0^1 hg\,dx$ per linearità dell'integrale. *Positività definita*: $\langle f,f\rangle=\int_0^1 f(x)^2\,dx\ge0$; se $f$ è continua e l'integrale del suo quadrato è nullo, allora $f\equiv0$ (una funzione continua non negativa con integrale nullo è identicamente nulla). I tre assiomi valgono.

</details>

<details class="dim-tecnica">
<summary>Esercizio 7 (avanzato) — Identità del parallelogramma</summary>

Dimostrare che in ogni spazio con prodotto scalare vale $\lVert\mathbf{u}+\mathbf{v}\rVert^2+\lVert\mathbf{u}-\mathbf{v}\rVert^2=2\lVert\mathbf{u}\rVert^2+2\lVert\mathbf{v}\rVert^2$, e usarla per mostrare che la norma $\lVert(x,y)\rVert_\infty=\max(\lvert x\rvert,\lvert y\rvert)$ non proviene da un prodotto scalare.

**Soluzione.** Espandendo con la bilinearità: $\lVert\mathbf{u}+\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2+2\langle\mathbf{u},\mathbf{v}\rangle+\lVert\mathbf{v}\rVert^2$ e $\lVert\mathbf{u}-\mathbf{v}\rVert^2=\lVert\mathbf{u}\rVert^2-2\langle\mathbf{u},\mathbf{v}\rangle+\lVert\mathbf{v}\rVert^2$. Sommando, i doppi prodotti si cancellano e resta $2\lVert\mathbf{u}\rVert^2+2\lVert\mathbf{v}\rVert^2$. Per la norma del massimo, prendiamo $\mathbf{u}=(1,0)$ e $\mathbf{v}=(0,1)$: $\lVert\mathbf{u}\rVert_\infty=\lVert\mathbf{v}\rVert_\infty=1$, $\mathbf{u}+\mathbf{v}=(1,1)$ e $\mathbf{u}-\mathbf{v}=(1,-1)$ hanno norma $\infty$ pari a $1$. Sinistra $=1+1=2$, destra $=2+2=4$: l'identità fallisce, quindi $\lVert\cdot\rVert_\infty$ non è indotta da nessun prodotto scalare.

</details>

<details class="dim-tecnica">
<summary>Esercizio 8 (applicativo) — Prodotto scalare contro prodotto esterno</summary>

Per vettori colonna $\mathbf{u},\mathbf{v}\in\mathbb{R}^n$, chiarire la differenza tra $\mathbf{u}^{\!\top}\mathbf{v}$ e $\mathbf{u}\mathbf{v}^{\!\top}$, e calcolarli per $\mathbf{u}=(1,2)^{\!\top}$, $\mathbf{v}=(3,4)^{\!\top}$.

**Soluzione.** $\mathbf{u}^{\!\top}\mathbf{v}$ è un prodotto $(1\times n)(n\times1)$: restituisce lo **scalare** $\sum u_iv_i$ (il prodotto scalare). $\mathbf{u}\mathbf{v}^{\!\top}$ è un prodotto $(n\times1)(1\times n)$: restituisce una **matrice** $n\times n$ di elemento $(i,j)$ pari a $u_iv_j$ (il prodotto esterno, di rango $1$). Numericamente: $\mathbf{u}^{\!\top}\mathbf{v}=3+8=11$, mentre $\mathbf{u}\mathbf{v}^{\!\top}=\begin{psmallmatrix}3&4\\6&8\end{psmallmatrix}$. Confonderli è l'errore più comune: il primo è un numero, il secondo una matrice.

</details>
