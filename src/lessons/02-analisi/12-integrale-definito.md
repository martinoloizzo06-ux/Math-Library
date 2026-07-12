---
id: analisi-12-integrale-definito
titolo: "Integrale definito e teorema fondamentale del calcolo"
materia: analisi
argomento: "Calcolo integrale (una variabile)"
modulo: "Integrale definito e teorema fondamentale"
livello: universitario
slug: analisi-12-integrale-definito

# legacy
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: "Integrale definito e teorema fondamentale del calcolo"
title_en: "Definite integral and the fundamental theorem of calculus"
level: blue
order: 12
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Sequences and Series in ℝ and Riemann Integral"
source_chapter: "OpenStax Cap. 5.1–5.4; Villanacci Cap. 3"

prerequisiti:
  - analisi-04-continuita
  - analisi-08-teoremi-differenziale
  - analisi-11-integrale-indefinito
  - analisi-03-calcolo-limiti

collegamenti:
  - analisi-11-integrale-indefinito
  - analisi-13-tecniche-integrazione
  - analisi-14-applicazioni-integrale
  - analisi-15-integrali-impropri

fonti_integrate:
  - id_fonte: villanacci-successioni
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 3 — Integrale di Riemann: partizioni P={t₀,…,t_n}, somme superiori/inferiori di Darboux U(f;P)/L(f;P), integrale superiore/inferiore, criterio di integrabilità L(f)=U(f), controesempio di Dirichlet, proprietà"
    note: "priorità su notazione e impostazione rigorosa (Darboux); integrabilità definita come coincidenza di integrale inferiore e superiore; funzione di Dirichlet come non integrabile"
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 5.1 (area/somme di Riemann), 5.2 (integrale definito e proprietà), 5.3 (teorema fondamentale, valor medio), 5.4 (net change / formule)"
    note: "struttura e ordine di esposizione; interpretazione area con segno e accumulo; enunciati e uso operativo del TFC"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - plot
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Nella [lezione precedente](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito) (lez.11) abbiamo imparato ad *antiderivare*: data $f$, trovare una $F$ con $F'=f$. Ma abbiamo lasciato in sospeso una domanda scomoda, e l'abbiamo dichiarato apertamente: **a cosa serve, davvero, una primitiva?** Per ora l'antiderivazione era solo un gioco algebrico — leggere all'indietro la tavola delle derivate. Questa lezione risponde alla domanda, e la risposta è una delle più belle di tutta la matematica.

Partiamo da un problema che con le primitive sembra non avere nulla a che fare: **calcolare l'area di una regione con un bordo curvo**. L'area di un rettangolo è base per altezza; quella di un triangolo, di un trapezio, di un poligono qualsiasi, si riduce a somme di rettangoli e triangoli. Ma quanto vale l'area sotto un arco di parabola, tra $x=0$ e $x=3$? Nessuna formula elementare la dà, perché il bordo superiore non è fatto di segmenti.

L'idea, che risale ad Archimede e fu resa rigorosa da Riemann e Darboux, è di una semplicità disarmante: **se non so misurare la regione curva, la incastro tra regioni fatte di rettangoli, che so misurare.** Ricopro la base $[0,3]$ con tante striscioline verticali; su ciascuna, disegno il rettangolo più basso che sta *sotto* la curva e il rettangolo più alto che la *contiene*. La vera area sta in mezzo: è più grande della somma dei rettangoli bassi (che sottostima) e più piccola della somma dei rettangoli alti (che sovrastima). Se, infittendo le striscioline, la stima per difetto e quella per eccesso si stringono fino a coincidere, quel valore comune **è**, per definizione, l'area. Questo è l'**integrale definito** $\int_a^b f(x)\,dx$.

Lo stesso schema risolve un problema che a prima vista è diverso: l'**accumulo di una grandezza a partire dal suo tasso**. Se un serbatoio riceve acqua a portata variabile $q(t)$ (litri al secondo), quanta acqua entra tra l'istante $a$ e l'istante $b$? Su un intervallino di tempo così breve che la portata è quasi costante, entra circa $q(t)\cdot\Delta t$ litri (portata per durata). Il totale è la somma di questi contributi infinitesimi — di nuovo un integrale. Area sotto una curva e quantità accumulata da un tasso sono **la stessa operazione matematica**: sommare infiniti contributi della forma $f(x)\,dx$. Ecco perché il simbolo $\int$ è una «S» di *summa*, l'anticipazione che avevamo fatto in lez.11.

E qui arriva il colpo di scena. Calcolare direttamente quel limite di somme è, in pratica, un incubo: già per la parabola richiede di sommare $n$ quadrati e far tendere $n\to\infty$. Il **Teorema Fondamentale del Calcolo** (TFC) dice che non serve: per calcolare $\int_a^b f$ basta trovare una primitiva $F$ di $f$ e fare $F(b)-F(a)$. Cioè: il problema geometrico dell'area e il problema algebrico dell'antiderivazione, che sembrano appartenere a mondi diversi, sono **due facce della stessa medaglia**. Derivare e integrare sono operazioni inverse. È la scoperta di Newton e Leibniz, ed è ciò che ha reso il calcolo lo strumento che ha riscritto la scienza.

La lezione ha quindi due anime, e le costruiamo in quest'ordine: prima la **definizione rigorosa** dell'integrale come limite di somme (cosa *è* l'integrale, e per quali funzioni esiste); poi il **TFC**, che lo collega alle primitive e lo rende *calcolabile*.

## 2. Teoria

### 2.1 Partizioni e somme di Darboux

Sia $f:[a,b]\to\mathbb{R}$ una funzione **limitata** su un intervallo chiuso e limitato $[a,b]$ (la limitatezza serve perché tra poco lavoreremo con gli estremi superiore e inferiore di $f$ su ogni pezzetto: senza di essa non esisterebbero finiti). Vogliamo dare senso all'«area con segno» tra il grafico e l'asse. Il primo passo è tagliare $[a,b]$ in pezzetti.

**Definizione (partizione).** Una **partizione** $P$ di $[a,b]$ è un insieme finito di punti
$$P=\{t_0,t_1,\dots,t_n\}, \qquad a=t_0<t_1<\dots<t_n=b.$$
Essa suddivide $[a,b]$ negli $n$ **sottointervalli** $[t_{i-1},t_i]$, di ampiezza $\Delta t_i=t_i-t_{i-1}$ (non necessariamente uguali).

Su ciascun sottointervallo, poiché $f$ è limitata, hanno senso l'estremo inferiore e superiore dei valori che $f$ assume lì:
$$m_i=\inf_{x\in[t_{i-1},t_i]} f(x), \qquad M_i=\sup_{x\in[t_{i-1},t_i]} f(x).$$
$m_i$ è l'altezza del rettangolo più alto che sta *sotto* il grafico sul pezzetto $i$-esimo; $M_i$ quella del rettangolo più basso che lo *contiene*. Sommando le aree di questi rettangoli si ottengono le due somme di Darboux.

**Definizione (somme inferiore e superiore).** La **somma inferiore** e la **somma superiore** di $f$ rispetto alla partizione $P$ sono
$$L(f;P)=\sum_{i=1}^n m_i\,\Delta t_i, \qquad U(f;P)=\sum_{i=1}^n M_i\,\Delta t_i.$$

Lettura in linguaggio naturale: $L(f;P)$ è l'area totale dei rettangoli «inscritti» (per difetto), $U(f;P)$ quella dei rettangoli «circoscritti» (per eccesso). Poiché $m_i\le M_i$ su ogni pezzo e le ampiezze $\Delta t_i$ sono positive, si ha sempre, per *ogni* partizione $P$,
$$L(f;P)\le U(f;P).$$
La vera area — qualunque cosa sia — è intrappolata tra le due: $L(f;P)\le \text{area}\le U(f;P)$.

*Micro-esempio.* Prendiamo $f(x)=x^2$ su $[0,1]$ e la partizione in due parti uguali $P=\{0,\tfrac12,1\}$. Su $[0,\tfrac12]$: $f$ è crescente, quindi $m_1=f(0)=0$, $M_1=f(\tfrac12)=\tfrac14$. Su $[\tfrac12,1]$: $m_2=f(\tfrac12)=\tfrac14$, $M_2=f(1)=1$. Con $\Delta t_i=\tfrac12$:
$$L(f;P)=\tfrac12\big(0+\tfrac14\big)=\tfrac18=0{,}125, \qquad U(f;P)=\tfrac12\big(\tfrac14+1\big)=\tfrac58=0{,}625.$$
Il vero valore, che calcoleremo, è $\tfrac13\approx0{,}333$: sta in mezzo, come deve. Con due soli rettangoli la forbice è larghissima; il prossimo paragrafo mostra che si stringe infittendo.

Il grafico interattivo qui sotto mostra proprio questo per $f(x)=x^2$ su $[0,3]$: la curva vera (in rosso) e la **funzione a gradini** che realizza la somma inferiore con $n$ rettangoli (in blu, altezza $m_i$ presa all'estremo sinistro, dove $f$ è più bassa perché crescente). Aumentando $n$ con lo slider, i gradini si avvicinano alla curva e l'area blu sale verso l'area vera sotto la parabola.

```slider
{
  "title": "Somma inferiore di Darboux per f(x)=x² su [0,3]: n rettangoli",
  "fn": "Math.pow(Math.floor(x/(3/n))*(3/n), 2)",
  "fn2": "x*x",
  "domain": [0, 3],
  "yDomain": [0, 9.5],
  "pname": "n",
  "pmin": 1,
  "pmax": 24,
  "pdefault": 4,
  "pstep": 1,
  "plabel": "n (numero di rettangoli)",
  "label1": "gradini: somma inferiore",
  "label2": "f(x)=x²",
  "color": "#2563eb",
  "color2": "#dc2626"
}
```

### 2.2 Raffinare la partizione stringe la forbice

L'esperimento visivo suggerisce un fatto preciso: aggiungere punti di taglio *migliora* entrambe le stime. Lo formalizziamo.

**Definizione (raffinamento).** Una partizione $P'$ è un **raffinamento** di $P$ se $P\subseteq P'$, cioè $P'$ contiene tutti i punti di $P$ e in più qualcun altro.

**Lemma (monotonia rispetto al raffinamento).** Se $P'$ è un raffinamento di $P$, allora
$$L(f;P)\le L(f;P')\le U(f;P')\le U(f;P).$$

In parole: raffinando, la somma inferiore **non può calare** e la superiore **non può crescere**. La forbice $[L,U]$ si *restringe* (o resta uguale), mai si allarga. L'idea della dimostrazione — cosa accade spezzando un solo sottointervallo in due — è breve e illuminante, quindi la teniamo qui (i dettagli in §3.1).

*Perché è vero, in una riga.* Spezziamo un sottointervallo $[t_{i-1},t_i]$ in due tronconi con un nuovo punto $c$. L'estremo inferiore di $f$ su ciascun troncone è $\ge$ dell'estremo inferiore su tutto $[t_{i-1},t_i]$ (su un insieme più piccolo l'inf non può che essere maggiore o uguale): quindi il contributo alla somma inferiore non diminuisce. Simmetricamente il sup su un troncone è $\le$ del sup sull'intero pezzo, quindi la somma superiore non aumenta. Aggiungere un punto è ripetere questa mossa; aggiungerne molti anche.

Ne discende un fatto cruciale che useremo continuamente: **qualunque** somma inferiore è $\le$ **qualunque** somma superiore, anche se calcolate su partizioni *diverse*.

**Corollario.** Per ogni coppia di partizioni $P_1,P_2$ di $[a,b]$ vale $L(f;P_1)\le U(f;P_2)$.

*Perché.* Basta considerare la partizione $P^*=P_1\cup P_2$, che raffina entrambe. Per il lemma, $L(f;P_1)\le L(f;P^*)\le U(f;P^*)\le U(f;P_2)$. La partizione «unione» fa da ponte tra le due. (Dettaglio in §3.1.)

```checkpoint
[domanda]
La somma inferiore $L(f;P)$ sottostima o sovrastima l'area? E perché, aumentando i punti della partizione, le due stime $L$ e $U$ tendono ad avvicinarsi invece che allontanarsi?

[risposta]
$L(f;P)=\sum m_i\Delta t_i$ usa su ogni pezzo l'altezza *minima* $m_i=\inf f$: i rettangoli stanno tutti **sotto** il grafico, quindi $L$ **sottostima** l'area. Simmetricamente $U$ usa l'altezza *massima* $M_i=\sup f$ e **sovrastima**. Raffinando la partizione, per il lemma di monotonia $L$ non può che salire e $U$ non può che scendere: la forbice $[L,U]$ si restringe. Intuitivamente, con rettangoli più stretti l'«errore» ai bordi curvi di ciascun pezzo — la parte di rettangolo che sborda o che manca — diventa più piccolo.
```

### 2.3 Integrale inferiore, integrale superiore, integrabilità

Abbiamo una famiglia di sottostime $\{L(f;P)\}$ e una di sovrastime $\{U(f;P)\}$, e ogni sottostima è $\le$ di ogni sovrastima. È lo scenario perfetto per un estremo superiore e uno inferiore.

**Definizione (integrale inferiore e superiore).** Si chiamano **integrale inferiore** e **integrale superiore** di $f$ su $[a,b]$ i numeri
$$\underline{\int_a^b} f = \sup_{P} L(f;P), \qquad \overline{\int_a^b} f = \inf_{P} U(f;P),$$
dove sup e inf sono presi al variare di *tutte* le partizioni $P$ di $[a,b]$.

L'integrale inferiore è la migliore sottostima possibile (la più grande delle somme inferiori); quello superiore è la migliore sovrastima (la più piccola delle superiori). Il corollario di §2.2 garantisce che ogni somma inferiore è limitata superiormente (da qualunque $U(f;P)$), quindi il sup esiste finito; analogamente per l'inf. Inoltre, passando al sup su $P_1$ e all'inf su $P_2$ nella disuguaglianza $L(f;P_1)\le U(f;P_2)$, si ottiene sempre
$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f.$$
La migliore sottostima non supera mai la migliore sovrastima. Resta un'unica domanda: **si toccano?**

**Definizione (funzione integrabile secondo Riemann).** La funzione limitata $f$ si dice **integrabile** (secondo Riemann) su $[a,b]$ se integrale inferiore e superiore coincidono. In tal caso il loro valore comune è l'**integrale definito** di $f$:
$$\int_a^b f(x)\,dx \;:=\; \underline{\int_a^b} f \;=\; \overline{\int_a^b} f.$$

Significato di ogni simbolo:

- $\displaystyle\int_a^b$ — il segno di integrale con i due **estremi di integrazione** $a$ (inferiore) e $b$ (superiore); dice tra dove e dove si accumula.
- $f(x)$ — la **funzione integranda**.
- $dx$ — indica la variabile di integrazione e, geometricamente, la **base infinitesima** di ciascun rettangolo: $f(x)\,dx$ è l'area di una strisciolina di altezza $f(x)$ e base $dx$, e $\int$ le somma tutte.

**Avvertenza fondamentale — l'integrale definito è un numero.** A differenza dell'[integrale indefinito](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito) $\int f\,dx = F(x)+C$, che è una *famiglia di funzioni*, l'integrale definito $\int_a^b f(x)\,dx$ è **un numero reale** (l'area con segno). Stessa parola, stesso simbolo $\int$, oggetti di natura diversa: uno è una funzione (a meno di costante), l'altro è uno scalare. Confonderli è l'errore concettuale numero uno del capitolo.

La variabile $x$ è **muta**: $\int_a^b f(x)\,dx$, $\int_a^b f(t)\,dt$, $\int_a^b f(u)\,du$ sono lo stesso numero. La lettera serve solo a scrivere l'integranda; una volta integrata, sparisce (come l'indice in una somma $\sum_i$).

*Micro-esempio (una funzione non integrabile).* Non tutte le funzioni limitate sono integrabili. La **funzione di Dirichlet** su $[0,1]$,
$$D(x)=\begin{cases}1 & x\in\mathbb{Q}\\ 0 & x\notin\mathbb{Q},\end{cases}$$
è limitata, ma *ogni* sottointervallo $[t_{i-1},t_i]$ contiene sia razionali sia irrazionali (entrambi sono densi in $\mathbb{R}$). Perciò su ogni pezzo $m_i=0$ e $M_i=1$, qualunque sia la partizione. Allora $L(f;P)=0$ e $U(f;P)=\sum 1\cdot\Delta t_i = (b-a)=1$ per **ogni** $P$: l'integrale inferiore è $0$, quello superiore è $1$, e non coincidono. $D$ **non è integrabile**. È il segnale che l'integrabilità è una proprietà genuina, non automatica.

### 2.4 Ogni funzione continua è integrabile

La funzione di Dirichlet è patologica proprio perché salta all'impazzata. Le funzioni «ragionevoli» che incontriamo — continue, o continue a tratti — sono invece sempre integrabili. Questo è il teorema che rende utilizzabile tutta la teoria.

**Teorema (integrabilità delle funzioni continue).** Se $f$ è **continua** su $[a,b]$, allora $f$ è integrabile su $[a,b]$.

L'idea è che, per una funzione continua su un intervallo chiuso e limitato, si può rendere l'oscillazione $M_i-m_i$ su ogni pezzo *piccola a piacere* pur di prendere i pezzi abbastanza stretti — e questo fa collassare la differenza $U(f;P)-L(f;P)$ a zero. Il motore tecnico è la **continuità uniforme** (teorema di Heine–Cantor): la dimostrazione completa, che è più tecnica che illuminante, è nel blocco richiudibile §3.5. Ci basta il criterio operativo che ne è il cuore:

**Criterio di integrabilità (di Riemann).** $f$ limitata è integrabile su $[a,b]$ se e solo se per ogni $\varepsilon>0$ esiste una partizione $P$ tale che
$$U(f;P)-L(f;P)<\varepsilon.$$
Cioè: $f$ è integrabile precisamente quando la forbice sottostima–sovrastima può essere resa arbitrariamente sottile. (È l'esatta traduzione di «integrale inferiore = integrale superiore».)

Lo stesso argomento copre un caso di poco più generale, utilissimo nelle applicazioni:

**Estensione.** Se $f$ è **limitata e continua su $[a,b]$ tranne che in un numero finito di punti**, allora $f$ è integrabile. (In particolare lo sono le funzioni continue a tratti, come i gradini.) Le poche discontinuità si «isolano» in sottointervalli di ampiezza totale piccola, che contribuiscono in modo trascurabile alla forbice.

*Micro-esempio.* La funzione «scalino» $f(x)=0$ su $[0,1)$ e $f(x)=1$ su $[1,2]$ è discontinua solo in $x=1$: è integrabile, e $\int_0^2 f = 1$ (l'area del rettangolo unitario su $[1,2]$). Una singola discontinuità di salto non rovina l'integrabilità.

### 2.5 Le proprietà dell'integrale definito

Dalla definizione discendono le regole di calcolo. Le enunciamo per funzioni integrabili su $[a,b]$; tutte hanno una lettura geometrica in termini di aree con segno.

**(P1) Linearità.** Se $f,g$ sono integrabili e $\alpha,\beta\in\mathbb{R}$:
$$\int_a^b\big[\alpha f(x)+\beta g(x)\big]\,dx=\alpha\int_a^b f(x)\,dx+\beta\int_a^b g(x)\,dx.$$
L'integrale di una combinazione lineare è la combinazione lineare degli integrali: le costanti escono, le somme si spezzano.

**(P2) Additività sugli intervalli.** Se $c\in[a,b]$ e $f$ è integrabile su $[a,b]$:
$$\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx.$$
Spezzare l'intervallo di integrazione spezza l'area: accumulare da $a$ a $b$ è accumulare da $a$ a $c$ e poi da $c$ a $b$.

**(P3) Monotonia.** Se $f(x)\le g(x)$ per ogni $x\in[a,b]$, allora $\int_a^b f\le\int_a^b g$. In particolare, se $f\ge0$ allora $\int_a^b f\ge0$ (un grafico che sta sopra l'asse ha area con segno non negativa). Caso speciale — **stima di base**: se $m\le f(x)\le M$ su $[a,b]$,
$$m\,(b-a)\le\int_a^b f(x)\,dx\le M\,(b-a).$$
L'area sta tra quella del rettangolo più basso e quella del più alto sull'intero $[a,b]$.

**(P4) Disuguaglianza del valore assoluto.** Se $f$ è integrabile, lo è anche $|f|$ e
$$\left|\int_a^b f(x)\,dx\right|\le\int_a^b |f(x)|\,dx.$$
L'area con segno (dove i contributi positivi e negativi si possono cancellare) non supera in modulo l'area geometrica $\int|f|$ (dove tutto conta positivo). È l'analogo integrale della disuguaglianza triangolare $|\sum a_i|\le\sum|a_i|$.

**(P5) Convenzioni di orientazione.** Finora $a<b$. Si *pone per definizione*, per poter maneggiare gli estremi liberamente:
$$\int_a^a f(x)\,dx=0, \qquad \int_b^a f(x)\,dx=-\int_a^b f(x)\,dx.$$
La prima: accumulare su un intervallo di ampiezza nulla dà zero. La seconda: **invertire gli estremi cambia segno**. Non è un teorema ma una convenzione, scelta apposta perché renda vera l'additività (P2) *per ogni ordine* di $a,b,c$ e coerente il TFC.

```checkpoint
[domanda]
Può un integrale definito $\int_a^b f(x)\,dx$ (con $a<b$) essere **negativo**? Se sì, cosa significa geometricamente? E cosa distingue questo numero dall'«area» della regione?

[risposta]
Sì. L'integrale è l'**area con segno**: dove $f(x)>0$ il contributo è positivo (grafico sopra l'asse), dove $f(x)<0$ è negativo (grafico sotto). Se la parte sotto l'asse prevale, l'integrale è negativo; se le due parti si equilibrano, è zero. Esempio: $\int_0^{2\pi}\sin x\,dx=0$, perché l'area sopra $[0,\pi]$ cancella quella sotto $[\pi,2\pi]$. L'**area geometrica** della regione (sempre $\ge0$) è invece $\int_a^b|f(x)|\,dx$: conta tutto positivo. Integrale e area coincidono solo quando $f\ge0$ su tutto $[a,b]$.
```

### 2.6 Il valor medio integrale

L'integrale permette di definire il **valore medio** di una funzione su un intervallo — non la media di un numero finito di dati, ma di un continuo di valori.

**Definizione (valor medio).** Il **valor medio** di $f$ integrabile su $[a,b]$ è
$$\bar f=\frac{1}{b-a}\int_a^b f(x)\,dx.$$

La motivazione della struttura: la media di $n$ numeri è $\frac1n\sum x_i$; per una funzione, «sommare tutti i valori» diventa $\int_a^b f$ e «dividere per quanti sono» diventa dividere per la lunghezza $b-a$ del dominio. Geometricamente, $\bar f$ è l'altezza del rettangolo di base $[a,b]$ che ha **la stessa area con segno** sotto $f$: $\bar f\,(b-a)=\int_a^b f$.

Per le funzioni continue si può dire di più: quel valor medio è *effettivamente raggiunto*.

**Teorema (della media integrale).** Se $f$ è **continua** su $[a,b]$, esiste un punto $c\in[a,b]$ tale che
$$f(c)=\bar f=\frac{1}{b-a}\int_a^b f(x)\,dx, \qquad\text{ovvero}\qquad \int_a^b f(x)\,dx=f(c)\,(b-a).$$

Interpretazione: c'è almeno un istante in cui la funzione assume esattamente il proprio valore medio. La velocità media di un viaggio è raggiunta, a un certo punto, come velocità istantanea. La dimostrazione (via Weierstrass e valori intermedi) è in §3.2; questo teorema è il gradino su cui poggia il TFC.

*Micro-esempio.* Per $f(x)=x$ su $[0,2]$: $\bar f=\frac{1}{2}\int_0^2 x\,dx=\frac12\cdot 2=1$ (l'area è quella del triangolo di base $2$ e altezza $2$, cioè $2$). Il punto della media è $c$ con $f(c)=1$, cioè $c=1$: il punto medio, come è naturale per una retta.

### 2.7 Il Teorema Fondamentale del Calcolo — Parte 1

Ora il cuore della lezione. Fissiamo $f$ continua su $[a,b]$ e usiamo l'integrale per *costruire* una nuova funzione: facciamo variare l'estremo superiore.

**Definizione (funzione integrale).** Per $x\in[a,b]$ si pone
$$G(x)=\int_a^x f(t)\,dt.$$
$G(x)$ è l'area con segno accumulata da $a$ fino a $x$. È una funzione di $x$ (l'estremo mobile); la variabile di integrazione $t$ è muta e non va confusa con $x$ — è il motivo per cui la scriviamo con una lettera diversa.

**Teorema (TFC, parte 1).** Se $f$ è continua su $[a,b]$, allora $G(x)=\int_a^x f(t)\,dt$ è **derivabile** su $[a,b]$ e
$$G'(x)=f(x)\qquad\text{per ogni }x\in[a,b].$$

In parole: la funzione area ha per derivata l'integranda. **Derivare un integrale rispetto al suo estremo superiore restituisce la funzione di partenza** — cioè $G$ è una *primitiva* di $f$. È il ponte tra i due mondi: partendo dall'integrale (accumulo) si ottiene, derivando, l'antiderivata (lez.11). La dimostrazione, breve e illuminante, è in §3.3; l'idea è che, in un intervallino $[x,x+h]$, l'area accumulata $G(x+h)-G(x)$ è circa $f(x)\cdot h$, quindi il rapporto incrementale tende a $f(x)$.

**Corollario (esistenza delle primitive).** Ogni funzione continua su un intervallo **ammette una primitiva** — precisamente $G$. Questo colma un vuoto lasciato in lez.11, dove avevamo *supposto* che una primitiva esistesse: per le funzioni continue, ora lo sappiamo con certezza.

```checkpoint
[domanda]
Quanto vale $\dfrac{d}{dx}\displaystyle\int_a^x f(t)\,dt$? E quanto vale $\dfrac{d}{dx}\displaystyle\int_a^b f(t)\,dt$ (con $a,b$ costanti)? Perché sono così diversi?

[risposta]
Il primo è $f(x)$, per il TFC parte 1: l'estremo superiore è la variabile $x$, quindi $G(x)=\int_a^x f$ è una vera funzione di $x$ e la sua derivata è l'integranda valutata in $x$. Il secondo è $0$: $\int_a^b f(t)\,dt$ con $a,b$ *costanti* è un **numero fisso** (non dipende da $x$), e la derivata di una costante è nulla. La differenza sta tutta nel ruolo della lettera: nel primo caso $x$ è l'estremo mobile; nel secondo la variabile di integrazione è la $t$ muta, e non c'è alcuna $x$ da cui il risultato dipenda. Ecco perché la variabile muta va tenuta distinta dall'estremo.
```

### 2.8 Il Teorema Fondamentale del Calcolo — Parte 2 (Newton–Leibniz)

La parte 1 dice che $G(x)=\int_a^x f$ è *una* primitiva di $f$. Ma in lez.11 abbiamo imparato che tutte le primitive differiscono per una costante. Combinando le due cose si ottiene la formula che rende gli integrali *calcolabili*.

**Teorema (TFC, parte 2 — formula di Newton–Leibniz).** Se $f$ è continua su $[a,b]$ e $F$ è **una qualunque** primitiva di $f$ (cioè $F'=f$ su $[a,b]$), allora
$$\boxed{\ \int_a^b f(x)\,dx = F(b)-F(a) =: \big[F(x)\big]_a^b\ }.$$

In parole: per calcolare l'integrale definito basta trovare *una* primitiva $F$ (con le tecniche di lez.11 e lez.13) e farne la differenza dei valori agli estremi. Non serve alcun limite di somme. La notazione $\big[F(x)\big]_a^b$ è un comodo promemoria: «valuta $F$ in $b$, sottrai $F$ in $a$».

Perché funziona con *qualunque* primitiva? Perché due primitive differiscono per una costante $C$, e nella differenza $F(b)-F(a)$ la costante **si cancella**: $[G(b)+C]-[G(a)+C]=G(b)-G(a)$. È esattamente il motivo per cui nell'integrale definito la costante di integrazione sparisce — mentre nell'indefinito era il grado di libertà. La dimostrazione, che deriva la formula dalla parte 1, è in §3.4.

*Micro-esempio.* $\displaystyle\int_0^1 x^2\,dx$: una primitiva di $x^2$ è $F(x)=\tfrac{x^3}{3}$ (lez.11). Quindi
$$\int_0^1 x^2\,dx=\Big[\tfrac{x^3}{3}\Big]_0^1=\tfrac13-0=\tfrac13.$$
In tre righe otteniamo il numero che con le somme di Darboux avrebbe richiesto un limite di $\sum i^2$: è la potenza del TFC.

> ⚠️ **Attenzione — il TFC-2 richiede ipotesi.** La formula $\int_a^b f=F(b)-F(a)$ vale quando $f$ è continua su tutto $[a,b]$ (o comunque integrabile e dotata di primitiva su $[a,b]$). Se $f$ ha una singolarità *dentro* $[a,b]$, applicarla alla cieca porta ad assurdi (Esempio 8 e §4). La continuità sull'intervallo chiuso è il permesso per usarla.

## 3. Dimostrazioni

### 3.1 Le somme inferiori non superano le superiori

Dimostriamo il lemma di raffinamento (§2.2) e il suo corollario, che sono le fondamenta su cui poggia la definizione stessa di integrale.

**Lemma di raffinamento.** *Se $P'\supseteq P$ è un raffinamento di $P$, allora $L(f;P)\le L(f;P')$ e $U(f;P')\le U(f;P)$.*

**Dimostrazione.** È sufficiente trattare il caso in cui $P'$ ha **un solo punto in più** di $P$: aggiungerne molti è ripetere questo passo un numero finito di volte, e ogni passo conserva le disuguaglianze.

Sia dunque $P=\{t_0,\dots,t_n\}$ e sia $c$ il nuovo punto, con $c\in(t_{k-1},t_k)$ per qualche $k$. Tutti i sottointervalli restano identici tranne l'$k$-esimo, che viene spezzato in $[t_{k-1},c]$ e $[c,t_k]$. Poiché tutti gli altri termini delle somme non cambiano, basta confrontare il contributo del pezzo spezzato.

*Somma inferiore.* Sul pezzo intero, il contributo è $m_k\,(t_k-t_{k-1})$ con $m_k=\inf_{[t_{k-1},t_k]}f$. Dopo lo spezzamento diventa $m'\,(c-t_{k-1})+m''\,(t_k-c)$, con
$$m'=\inf_{[t_{k-1},c]}f, \qquad m''=\inf_{[c,t_k]}f.$$
Ora, $[t_{k-1},c]$ e $[c,t_k]$ sono **sottoinsiemi** di $[t_{k-1},t_k]$: l'estremo inferiore su un insieme più piccolo è maggiore o uguale a quello sull'insieme più grande (togliendo punti, l'inf può solo salire o restare). Quindi $m'\ge m_k$ e $m''\ge m_k$. Perciò
$$m'\,(c-t_{k-1})+m''\,(t_k-c)\ \ge\ m_k\,(c-t_{k-1})+m_k\,(t_k-c)=m_k\,(t_k-t_{k-1}),$$
dove nell'ultimo passaggio si è raccolto $m_k$ e si è usato $(c-t_{k-1})+(t_k-c)=(t_k-t_{k-1})$. Il contributo alla somma inferiore **non è diminuito**, dunque $L(f;P)\le L(f;P')$.

*Somma superiore.* Simmetricamente, con $M'=\sup_{[t_{k-1},c]}f\le M_k$ e $M''=\sup_{[c,t_k]}f\le M_k$ (il sup su un sottoinsieme non supera quello sull'insieme grande):
$$M'\,(c-t_{k-1})+M''\,(t_k-c)\ \le\ M_k\,(t_k-t_{k-1}),$$
cioè $U(f;P')\le U(f;P)$. $\quad\blacksquare$

**Corollario.** *Per ogni coppia di partizioni $P_1,P_2$ di $[a,b]$ vale $L(f;P_1)\le U(f;P_2)$.*

**Dimostrazione.** Sia $P^*=P_1\cup P_2$: essa contiene tutti i punti di $P_1$ e tutti quelli di $P_2$, quindi è un raffinamento di *entrambe*. Applicando il lemma due volte e la disuguaglianza $L(f;P^*)\le U(f;P^*)$ (vera per ogni singola partizione, perché $m_i\le M_i$ su ogni pezzo):
$$L(f;P_1)\ \le\ L(f;P^*)\ \le\ U(f;P^*)\ \le\ U(f;P_2). \qquad\blacksquare$$

Prendendo il sup su $P_1$ e poi l'inf su $P_2$, se ne deduce $\underline{\int}f\le\overline{\int}f$: l'integrale inferiore non supera mai il superiore, come affermato in §2.3.

### 3.2 Teorema della media integrale

**Enunciato (§2.6).** *Se $f$ è continua su $[a,b]$, esiste $c\in[a,b]$ con $\displaystyle\int_a^b f=f(c)\,(b-a)$.*

**Dimostrazione.** Poiché $f$ è continua sull'intervallo **chiuso e limitato** $[a,b]$, per il [teorema di Weierstrass](/analisi/limiti-e-continuita/04-continuita) (lez.04) $f$ assume su $[a,b]$ un valore minimo $m$ e un valore massimo $M$: esistono $x_m,x_M\in[a,b]$ con $f(x_m)=m$ e $f(x_M)=M$, e $m\le f(x)\le M$ per ogni $x$.

*Passo 1 — incastro del valor medio.* Applichiamo la stima di base (P3, §2.5) alla disuguaglianza $m\le f(x)\le M$:
$$m\,(b-a)\ \le\ \int_a^b f(x)\,dx\ \le\ M\,(b-a).$$
Dividendo per $(b-a)>0$ (lecito perché $a<b$):
$$m\ \le\ \frac{1}{b-a}\int_a^b f(x)\,dx\ \le\ M.$$
Il valor medio $\bar f=\frac{1}{b-a}\int_a^b f$ è dunque un numero **compreso tra il minimo e il massimo** di $f$.

*Passo 2 — il valore intermedio viene raggiunto.* La funzione continua $f$ assume i due valori $m=f(x_m)$ e $M=f(x_M)$. Per il [teorema dei valori intermedi](/analisi/limiti-e-continuita/04-continuita) (lez.04), $f$ assume **ogni** valore compreso tra $m$ e $M$ in qualche punto tra $x_m$ e $x_M$. Poiché $\bar f\in[m,M]$ per il Passo 1, esiste $c$ (tra $x_m$ e $x_M$, quindi in $[a,b]$) con $f(c)=\bar f$. Moltiplicando per $(b-a)$ si ottiene $\int_a^b f=f(c)\,(b-a)$. $\quad\blacksquare$

Si noti dove serve la **continuità**: senza di essa, $\bar f$ resta tra $\inf f$ e $\sup f$, ma potrebbe non essere *assunto* da alcun $f(c)$ (il valore medio potrebbe cadere in un «buco» di salto). È il teorema dei valori intermedi a garantire che nessun valore intermedio venga saltato.

### 3.3 TFC parte 1

**Enunciato (§2.7).** *Se $f$ è continua su $[a,b]$ e $G(x)=\int_a^x f(t)\,dt$, allora $G'(x)=f(x)$ per ogni $x\in[a,b]$.*

**Dimostrazione.** Fissiamo $x$ e calcoliamo il rapporto incrementale di $G$ in $x$. Per un incremento $h\neq0$ (con $x+h\in[a,b]$):
$$G(x+h)-G(x)=\int_a^{x+h} f(t)\,dt-\int_a^{x} f(t)\,dt=\int_x^{x+h} f(t)\,dt,$$
dove nell'ultimo passaggio si è usata l'**additività sugli intervalli** (P2, §2.5): l'area da $a$ a $x+h$ meno quella da $a$ a $x$ è l'area da $x$ a $x+h$. Dunque
$$\frac{G(x+h)-G(x)}{h}=\frac{1}{h}\int_x^{x+h} f(t)\,dt.$$

Applichiamo ora il **teorema della media integrale** (§3.2) all'integrale su $[x,x+h]$ (o $[x+h,x]$ se $h<0$; l'argomento è identico grazie alla convenzione P5): poiché $f$ è continua, esiste un punto $c_h$ compreso tra $x$ e $x+h$ tale che
$$\int_x^{x+h} f(t)\,dt=f(c_h)\cdot h.$$
Sostituendo nel rapporto incrementale, il fattore $h$ si semplifica:
$$\frac{G(x+h)-G(x)}{h}=\frac{f(c_h)\cdot h}{h}=f(c_h).$$

Resta da far tendere $h\to0$. Il punto $c_h$ è **schiacciato** tra $x$ e $x+h$: quando $h\to0$, entrambi gli estremi tendono a $x$, quindi $c_h\to x$ (teorema del confronto). Per la **continuità** di $f$ in $x$, $f(c_h)\to f(x)$. Perciò il limite del rapporto incrementale esiste e vale
$$G'(x)=\lim_{h\to0}\frac{G(x+h)-G(x)}{h}=\lim_{h\to0}f(c_h)=f(x). \qquad\blacksquare$$

È qui che la continuità di $f$ è indispensabile due volte: per applicare la media integrale e per concludere $f(c_h)\to f(x)$.

### 3.4 TFC parte 2 (Newton–Leibniz)

**Enunciato (§2.8).** *Se $f$ è continua su $[a,b]$ e $F$ è una primitiva di $f$, allora $\displaystyle\int_a^b f=F(b)-F(a)$.*

**Dimostrazione.** Per il TFC parte 1 (§3.3), la funzione $G(x)=\int_a^x f(t)\,dt$ è una primitiva di $f$ su $[a,b]$. Sia $F$ un'altra primitiva qualsiasi. Per il [teorema di struttura delle primitive](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito) (lez.11), due primitive di $f$ su un intervallo differiscono per una costante: esiste $C\in\mathbb{R}$ tale che
$$F(x)=G(x)+C\qquad\text{per ogni }x\in[a,b].$$

Valutiamo agli estremi e sottraiamo, così la costante $C$ si elide:
$$F(b)-F(a)=\big[G(b)+C\big]-\big[G(a)+C\big]=G(b)-G(a).$$

Non resta che calcolare $G$ agli estremi. Per definizione di $G$:
$$G(b)=\int_a^b f(t)\,dt, \qquad G(a)=\int_a^a f(t)\,dt=0,$$
dove $G(a)=0$ per la convenzione (P5, §2.5): un intervallo di ampiezza nulla ha area nulla. Dunque
$$F(b)-F(a)=G(b)-G(a)=\int_a^b f(t)\,dt-0=\int_a^b f(x)\,dx. \qquad\blacksquare$$

L'osservazione chiave è la cancellazione di $C$: **qualunque** primitiva porta allo stesso risultato, perché la costante non sopravvive alla differenza $F(b)-F(a)$. Ecco perché nell'integrale definito non si scrive «$+C$».

### 3.5 (dim-tecnica) Le funzioni continue sono integrabili

<details class="dim-tecnica">
<summary>Dettaglio tecnico — integrabilità delle continue via continuità uniforme</summary>

**Enunciato (§2.4).** *Se $f$ è continua su $[a,b]$, allora $f$ è integrabile.*

Usiamo il criterio di Riemann (§2.4): basta esibire, per ogni $\varepsilon>0$, una partizione $P$ con $U(f;P)-L(f;P)<\varepsilon$.

*Passo 1 — continuità uniforme.* Poiché $f$ è continua sull'intervallo **chiuso e limitato** $[a,b]$, per il **teorema di Heine–Cantor** $f$ è *uniformemente continua* su $[a,b]$: la stessa soglia $\delta$ funziona in tutti i punti contemporaneamente. In formule, per ogni $\eta>0$ esiste $\delta>0$ tale che
$$|x-y|<\delta \;\Rightarrow\; |f(x)-f(y)|<\eta \qquad\text{per ogni }x,y\in[a,b].$$
(È la proprietà che la continuità semplice non garantisce e che la compattezza di $[a,b]$ regala; è ciò che manca alla funzione di Dirichlet e a $f$ su intervalli non chiusi.)

*Passo 2 — scelta di $\eta$ e della partizione.* Dato $\varepsilon>0$, poniamo $\eta=\dfrac{\varepsilon}{b-a}$ e prendiamo il corrispondente $\delta$ del Passo 1. Scegliamo una partizione $P=\{t_0,\dots,t_n\}$ con tutti i sottointervalli di ampiezza $\Delta t_i<\delta$ (ad esempio $n$ parti uguali con $n$ abbastanza grande da avere $\frac{b-a}{n}<\delta$).

*Passo 3 — l'oscillazione su ogni pezzo è piccola.* Su ciascun sottointervallo $[t_{i-1},t_i]$, $f$ è continua sul chiuso limitato, quindi (Weierstrass) assume massimo e minimo: $M_i=f(\xi_i)$ e $m_i=f(\zeta_i)$ per certi $\xi_i,\zeta_i\in[t_{i-1},t_i]$. Poiché $|\xi_i-\zeta_i|\le\Delta t_i<\delta$, la continuità uniforme dà
$$M_i-m_i=f(\xi_i)-f(\zeta_i)\le|f(\xi_i)-f(\zeta_i)|<\eta.$$
L'oscillazione di $f$ su ogni pezzo è minore di $\eta$, **uniformemente** (stesso $\eta$ per tutti i pezzi: è qui che serve l'uniformità).

*Passo 4 — la forbice collassa.* Sommando:
$$U(f;P)-L(f;P)=\sum_{i=1}^n (M_i-m_i)\,\Delta t_i \ <\ \eta\sum_{i=1}^n \Delta t_i=\eta\,(b-a).$$
La somma delle ampiezze è l'intera lunghezza $\sum\Delta t_i=(b-a)$. Sostituendo $\eta=\frac{\varepsilon}{b-a}$:
$$U(f;P)-L(f;P)<\frac{\varepsilon}{b-a}\cdot(b-a)=\varepsilon.$$
Abbiamo trovato, per ogni $\varepsilon>0$, una partizione con forbice $<\varepsilon$: per il criterio di Riemann, $f$ è integrabile. $\quad\blacksquare$

*Nota (continuità a tratti).* Se $f$ ha un numero finito di discontinuità (ma resta limitata), si racchiudono i punti «cattivi» in pochi sottointervalli di ampiezza totale $<\dfrac{\varepsilon}{2\,(\sup|f|-\inf|f|)}$, il cui contributo alla forbice è $<\varepsilon/2$; sui restanti tratti $f$ è continua e si applica l'argomento sopra per l'altra metà $\varepsilon/2$. Somma: forbice $<\varepsilon$. Da qui l'integrabilità delle funzioni continue a tratti.
</details>

## 4. Esempi

**Esempio 1 (fondamentale — l'integrale dalla definizione).** Calcolare $\displaystyle\int_0^3 x^2\,dx$ come limite di somme di Darboux, per *vedere* la definizione al lavoro (poi il TFC lo farà in una riga).

*Strategia:* partizione in $n$ parti uguali; poiché $x^2$ è crescente su $[0,3]$, l'inf su ogni pezzo è all'estremo sinistro e il sup a quello destro.

Ampiezza $\Delta t=\frac{3}{n}$, punti $t_i=\frac{3i}{n}$. Somma superiore (estremo destro, $M_i=t_i^2$):
$$U(f;P_n)=\sum_{i=1}^n \Big(\frac{3i}{n}\Big)^2\frac{3}{n}=\frac{27}{n^3}\sum_{i=1}^n i^2=\frac{27}{n^3}\cdot\frac{n(n+1)(2n+1)}{6},$$
dove si è usata la formula nota $\sum_{i=1}^n i^2=\frac{n(n+1)(2n+1)}{6}$. Semplificando:
$$U(f;P_n)=\frac{27}{6}\cdot\frac{(n+1)(2n+1)}{n^2}=\frac{9}{2}\cdot\frac{2n^2+3n+1}{n^2}=\frac{9}{2}\Big(2+\frac{3}{n}+\frac{1}{n^2}\Big).$$
Per $n\to\infty$: $U(f;P_n)\to\frac92\cdot2=9$. La somma inferiore (estremo sinistro) porta allo stesso limite $9$ (differisce solo per il termine $i=0$ vs $i=n$, che svanisce). Integrale inferiore = superiore = $9$:
$$\int_0^3 x^2\,dx=9.$$
*Verifica col TFC:* $\big[\tfrac{x^3}{3}\big]_0^3=\tfrac{27}{3}=9$. Coincide — ma il TFC ci ha risparmiato tutta la somma.

---

**Esempio 2 (introduttivo — TFC diretto).** Calcolare $\displaystyle\int_0^2 (3x^2-2x+1)\,dx$.

*Strategia:* una primitiva per linearità (lez.11), poi Newton–Leibniz.

$$F(x)=x^3-x^2+x, \qquad \int_0^2(3x^2-2x+1)\,dx=\big[x^3-x^2+x\big]_0^2=(8-4+2)-0=6.$$

> ⚠️ **Errore da evitare — confondere definito e indefinito.** Il risultato è il **numero** $6$, non «$x^3-x^2+x+C$». Scrivere il $+C$ o lasciare una $x$ nel risultato di un integrale *definito* è un errore concettuale: gli estremi $0$ e $2$ trasformano la famiglia di primitive in un singolo scalare.

---

**Esempio 3 (intermedio — area con segno e area geometrica).** Calcolare $\displaystyle\int_0^{2\pi}\sin x\,dx$ e confrontarlo con l'area geometrica della regione tra $\sin x$ e l'asse.

Con $F(x)=-\cos x$:
$$\int_0^{2\pi}\sin x\,dx=\big[-\cos x\big]_0^{2\pi}=(-\cos2\pi)-(-\cos0)=-1+1=0.$$
L'integrale è **zero**: l'area sopra l'asse su $[0,\pi]$ (positiva) cancella quella sotto su $[\pi,2\pi]$ (negativa). L'**area geometrica** è invece
$$\int_0^{2\pi}|\sin x|\,dx=\int_0^\pi\sin x\,dx-\int_\pi^{2\pi}\sin x\,dx=\big[-\cos x\big]_0^\pi-\big[-\cos x\big]_\pi^{2\pi}=2-(-2)=4.$$

> ⚠️ **Errore da evitare — «integrale nullo ⇒ nessuna area».** $\int=0$ non significa che la funzione non racchiuda area, ma che i contributi con segno si equilibrano. Per l'area geometrica si integra $|f|$, spezzando negli intervalli dove $f$ ha segno costante.

---

**Esempio 4 (intermedio — TFC parte 1 con regola della catena).** Calcolare $\displaystyle\frac{d}{dx}\int_1^{x^2}\ln t\,dt$.

*Strategia:* l'estremo superiore non è $x$ ma $x^2$; si compone il TFC-1 con la [regola della catena](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07).

Sia $G(u)=\int_1^u\ln t\,dt$; per il TFC-1, $G'(u)=\ln u$. La funzione da derivare è $G(x^2)$, quindi
$$\frac{d}{dx}G(x^2)=G'(x^2)\cdot(x^2)'=\ln(x^2)\cdot 2x=2x\cdot2\ln|x|=4x\ln|x|.$$

> ⚠️ **Errore da evitare — dimenticare il fattore della catena.** Scrivere solo $\ln(x^2)$ trascura il $(x^2)'=2x$: quando l'estremo superiore è una funzione $g(x)$, la derivata è $f(g(x))\cdot g'(x)$, non $f(g(x))$.

---

**Esempio 5 (avanzato — entrambi gli estremi variabili).** Calcolare $\displaystyle\frac{d}{dx}\int_x^{x^2} e^{t^2}\,dt$.

*Strategia:* si spezza in un punto fisso (l'additività P2) per avere due integrali a estremo superiore variabile, poi TFC-1 + catena su ciascuno.
$$\int_x^{x^2} e^{t^2}\,dt=\int_0^{x^2} e^{t^2}\,dt-\int_0^{x} e^{t^2}\,dt.$$
Derivando (il primo con la catena, fattore $2x$; il secondo direttamente):
$$\frac{d}{dx}\int_0^{x^2}e^{t^2}\,dt=e^{(x^2)^2}\cdot2x=2x\,e^{x^4}, \qquad \frac{d}{dx}\int_0^{x}e^{t^2}\,dt=e^{x^2}.$$
Risultato: $\displaystyle\frac{d}{dx}\int_x^{x^2}e^{t^2}\,dt=2x\,e^{x^4}-e^{x^2}$. (Si noti che $e^{t^2}$ non ha primitiva elementare, ma la derivata della funzione integrale si calcola comunque: è la forza del TFC-1.)

---

**Esempio 6 (intermedio — additività su funzione definita a tratti).** Calcolare $\displaystyle\int_0^3 f(x)\,dx$ dove $f(x)=x$ su $[0,1]$ e $f(x)=1$ su $[1,3]$.

*Strategia:* $f$ ha una definizione diversa sui due tratti; si spezza l'integrale nel punto di raccordo con l'additività (P2) e si integra ciascun pezzo con la sua espressione.
$$\int_0^3 f=\int_0^1 x\,dx+\int_1^3 1\,dx=\Big[\tfrac{x^2}{2}\Big]_0^1+\big[x\big]_1^3=\tfrac12+(3-1)=\tfrac12+2=\tfrac52.$$
Geometricamente: il triangolo di area $\tfrac12$ su $[0,1]$ più il rettangolo di area $2$ su $[1,3]$. La discontinuità di salto in $x=1$ non è un problema — $f$ è continua a tratti, dunque integrabile (§2.4).

---

**Esempio 7 (applicativo — valor medio).** Trovare il valor medio di $f(x)=x^2$ su $[0,3]$ e il punto $c$ garantito dal teorema della media.

Dall'Esempio 1, $\int_0^3 x^2\,dx=9$, quindi
$$\bar f=\frac{1}{3-0}\int_0^3 x^2\,dx=\frac{9}{3}=3.$$
Il punto della media risolve $f(c)=\bar f$: $c^2=3\Rightarrow c=\sqrt3\approx1{,}73\in[0,3]$ (si scarta $-\sqrt3$, fuori intervallo). Interpretazione: il rettangolo di base $3$ e altezza $3$ ha la stessa area $9$ sotto la parabola.

---

**Esempio 8 (avanzato — stima senza calcolare + trappola dell'ipotesi).** (a) Stimare $\displaystyle\int_0^1 e^{-x^2}\,dx$ senza calcolarlo. (b) Spiegare perché $\displaystyle\int_{-1}^1\frac{1}{x^2}\,dx=\big[-\tfrac1x\big]_{-1}^1=-2$ è **falso**.

(a) Su $[0,1]$ si ha $0\le x^2\le1$, quindi $-1\le -x^2\le0$ e, applicando l'esponenziale (crescente), $e^{-1}\le e^{-x^2}\le1$. Per la stima di base (P3) con $m=e^{-1}$, $M=1$, $b-a=1$:
$$\frac{1}{e}\approx0{,}368\ \le\ \int_0^1 e^{-x^2}\,dx\ \le\ 1.$$
(Il valore vero, $\approx0{,}747$, non ha primitiva elementare — la stima è tutto ciò che si ottiene con mezzi elementari.)

(b) Il «calcolo» $\big[-\tfrac1x\big]_{-1}^1=-1-1=-2$ applica il TFC-2, ma **l'ipotesi non è soddisfatta**: $f(x)=\tfrac1{x^2}$ ha una singolarità in $x=0\in[-1,1]$, dove non è continua né limitata. Il TFC-2 richiede $f$ continua su tutto $[a,b]$; qui non lo è. Per di più il risultato $-2$ è assurdo, perché $\tfrac1{x^2}\ge0$ e quindi l'integrale, se esistesse, sarebbe $\ge0$ per monotonia. In realtà si tratta di un [integrale improprio](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) (lez.15) che **diverge** a $+\infty$.

> ⚠️ **Errore da evitare — applicare il TFC-2 attraverso una singolarità.** Prima di scrivere $F(b)-F(a)$, verificare che $f$ sia continua (o almeno integrabile) su *tutto* $[a,b]$. Una singolarità interna richiede la teoria degli integrali impropri, non la formula di Newton–Leibniz.

## 5. Collegamenti e riepilogo

**Da dove viene, dove porta.** Questa lezione chiude il cerchio aperto in [lez.11](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito): là l'antiderivazione era un «gioco algebrico» di cui non si vedeva lo scopo; qui il TFC rivela che quel gioco *calcola aree e accumuli*. Le due dimostrazioni-cardine poggiano interamente sul calcolo differenziale: il teorema della media integrale usa [Weierstrass e i valori intermedi](/analisi/limiti-e-continuita/04-continuita) (lez.04), e il TFC-2 usa il [teorema di struttura delle primitive](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito) (lez.11), a sua volta corollario di Lagrange (lez.08). Guardando avanti: il TFC riduce il calcolo di un integrale al *trovare una primitiva*, ma per molte funzioni la primitiva non «si vede» — è la [cassetta degli attrezzi di lez.13](/analisi/calcolo-integrale-una-variabile/13-tecniche-integrazione) (sostituzione, per parti, frazioni parziali). Le [applicazioni](/analisi/calcolo-integrale-una-variabile/14-applicazioni-integrale) (lez.14) — aree tra curve, volumi, valor medio, grandezze economiche — sono tutte istanze di «accumulo». E quando l'intervallo è infinito o l'integranda esplode (come in Esempio 8b), servono gli [integrali impropri](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) (lez.15).

**Applicazioni.** Lo schema «somma di contributi $f(x)\,dx$» è ubiquo. In **fisica**, il lavoro di una forza variabile è $W=\int_a^b F(x)\,dx$, e lo spazio percorso è $\int v\,dt$ (accumulo della velocità). In **economia**, il surplus del consumatore è l'area $\int_0^{q^*}[D(q)-p^*]\,dq$ tra curva di domanda e prezzo, e il valore attuale di un flusso di cassa continuo è un integrale del flusso scontato. In **probabilità**, per una variabile continua di densità $f$, la probabilità $P(a\le X\le b)=\int_a^b f(x)\,dx$ è un'area, e la funzione di ripartizione $F(x)=\int_{-\infty}^x f(t)\,dt$ è — per il TFC-1 — una primitiva della densità, con $F'=f$: il legame densità/ripartizione *è* il teorema fondamentale.

**Riepilogo — idee e formule chiave.**

- **Costruzione (Darboux):** $L(f;P)=\sum m_i\Delta t_i\le U(f;P)=\sum M_i\Delta t_i$; raffinando, $L$ sale e $U$ scende.
- **Integrabilità:** $f$ è integrabile $\iff \underline{\int}f=\overline{\int}f \iff \forall\varepsilon\,\exists P:\,U(f;P)-L(f;P)<\varepsilon$. Le **funzioni continue** (e continue a tratti) su $[a,b]$ **sono integrabili**; la funzione di Dirichlet no.
- **L'integrale definito è un NUMERO** (area con segno), l'indefinito è una famiglia di funzioni. Variabile di integrazione muta.
- **Proprietà:** linearità, additività $\int_a^b=\int_a^c+\int_c^b$, monotonia, $\big|\int f\big|\le\int|f|$, orientazione $\int_a^b=-\int_b^a$.
- **Media integrale:** $\bar f=\frac{1}{b-a}\int_a^b f$; se $f$ continua, $\exists c$ con $f(c)=\bar f$.
- **TFC-1:** $\dfrac{d}{dx}\int_a^x f(t)\,dt=f(x)$ (la funzione area è una primitiva; le continue hanno primitiva).
- **TFC-2 (Newton–Leibniz):** $\int_a^b f=F(b)-F(a)$ con $F'=f$ e $f$ continua su $[a,b]$.

$$\boxed{\ \frac{d}{dx}\int_a^x f(t)\,dt=f(x), \qquad \int_a^b f(x)\,dx=F(b)-F(a)\ \ (F'=f)\ }$$

## 6. Esercizi

**Esercizio 1 (introduttivo — calcolo diretto).** Calcolare:
(a) $\displaystyle\int_1^4\Big(\sqrt{x}-\frac{1}{\sqrt{x}}\Big)\,dx$; \quad (b) $\displaystyle\int_0^{\pi/4}\frac{1}{\cos^2 x}\,dx$; \quad (c) $\displaystyle\int_1^2\frac{1}{x}\,dx$.

<details>
<summary>Soluzione</summary>

(a) Riscrivendo in potenze $x^{1/2}-x^{-1/2}$ e antiderivando (lez.11):
$$\Big[\tfrac23 x^{3/2}-2x^{1/2}\Big]_1^4=\Big(\tfrac23\cdot8-2\cdot2\Big)-\Big(\tfrac23-2\Big)=\Big(\tfrac{16}{3}-4\Big)-\Big(\tfrac23-2\Big)=\tfrac{14}{3}-2=\tfrac83.$$

(b) Una primitiva di $\tfrac{1}{\cos^2 x}$ è $\tan x$: $\big[\tan x\big]_0^{\pi/4}=1-0=1$.

(c) $\big[\ln|x|\big]_1^2=\ln2-\ln1=\ln2$. (Su $[1,2]$ si può scrivere $\ln x$, ma il valore assoluto è sempre corretto.)
</details>

---

**Esercizio 2 (introduttivo — area con segno).** Calcolare $\displaystyle\int_{-2}^2 (x^2-1)\,dx$ e stabilire se il risultato è l'area geometrica della regione tra $x^2-1$ e l'asse su $[-2,2]$.

<details>
<summary>Soluzione</summary>

$$\int_{-2}^2(x^2-1)\,dx=\Big[\tfrac{x^3}{3}-x\Big]_{-2}^2=\Big(\tfrac83-2\Big)-\Big(-\tfrac83+2\Big)=\tfrac83-2+\tfrac83-2=\tfrac{16}{3}-4=\tfrac43.$$
**Non** è l'area geometrica: su $(-1,1)$ la funzione è negativa (contributo con segno negativo). L'area geometrica sarebbe $\int_{-2}^2|x^2-1|\,dx$, che vale $4$ (spezzando in $[-2,-1]$, $[-1,1]$, $[1,2]$). Il numero $\tfrac43$ è l'area *con segno*.
</details>

---

**Esercizio 3 (intermedio — TFC parte 1).** Calcolare $\displaystyle\frac{d}{dx}\int_2^{\sin x}\sqrt{1+t^4}\,dt$.

<details>
<summary>Soluzione</summary>

Sia $G(u)=\int_2^u\sqrt{1+t^4}\,dt$; per il TFC-1, $G'(u)=\sqrt{1+u^4}$. L'estremo superiore è $\sin x$, quindi per la catena:
$$\frac{d}{dx}G(\sin x)=G'(\sin x)\cdot(\sin x)'=\sqrt{1+\sin^4 x}\cdot\cos x.$$
(L'integranda non ha primitiva elementare, ma la derivata della funzione integrale sì: è il TFC-1.)
</details>

---

**Esercizio 4 (intermedio — additività e tratti).** Sia $f(x)=x^2$ su $[0,2]$ e $f(x)=4$ su $[2,3]$. Calcolare $\displaystyle\int_0^3 f(x)\,dx$ e il valor medio di $f$ su $[0,3]$.

<details>
<summary>Soluzione</summary>

$$\int_0^3 f=\int_0^2 x^2\,dx+\int_2^3 4\,dx=\Big[\tfrac{x^3}{3}\Big]_0^2+\big[4x\big]_2^3=\tfrac83+(12-8)=\tfrac83+4=\tfrac{20}{3}.$$
Valor medio: $\bar f=\dfrac{1}{3-0}\cdot\dfrac{20}{3}=\dfrac{20}{9}\approx2{,}22$. (La funzione è continua a tratti — anzi qui continua, perché $x^2\to4$ e $f=4$ raccordano in $x=2$ — dunque integrabile.)
</details>

---

**Esercizio 5 (intermedio — valor medio e punto della media).** Trovare il valor medio di $f(x)=\cos x$ su $[0,\pi/2]$ e il punto $c\in[0,\pi/2]$ con $f(c)=\bar f$.

<details>
<summary>Soluzione</summary>

$$\bar f=\frac{1}{\pi/2}\int_0^{\pi/2}\cos x\,dx=\frac{2}{\pi}\big[\sin x\big]_0^{\pi/2}=\frac{2}{\pi}(1-0)=\frac{2}{\pi}\approx0{,}637.$$
Punto della media: $\cos c=\tfrac{2}{\pi}\Rightarrow c=\arccos\!\big(\tfrac{2}{\pi}\big)\approx0{,}881\in[0,\pi/2]$. L'esistenza di $c$ è garantita dal teorema della media (§3.2), perché $\cos$ è continua.
</details>

---

**Esercizio 6 (intermedio — simmetria per funzioni dispari).** Senza calcolare esplicitamente le primitive, determinare $\displaystyle\int_{-3}^3 (x^5-3x^3+x)\,dx$. Giustificare con le proprietà dell'integrale.

<details>
<summary>Soluzione</summary>

La funzione $g(x)=x^5-3x^3+x$ è **dispari**: ogni termine ha esponente dispari, quindi $g(-x)=-g(x)$. Su un intervallo simmetrico $[-3,3]$, spezzando in $[-3,0]$ e $[0,3]$ (additività P2) e usando il cambio di variabile che riflette $[-3,0]$ su $[0,3]$, i due contributi sono opposti e si annullano:
$$\int_{-3}^3 g=\int_{-3}^0 g+\int_0^3 g=-\int_0^3 g+\int_0^3 g=0.$$
Riconoscere la disparità evita interamente il calcolo. (Analogamente, per $f$ *pari*, $\int_{-a}^a f=2\int_0^a f$.)
</details>

---

**Esercizio 7 (avanzato — stima con monotonia e valore assoluto).** (a) Dimostrare che $\displaystyle 2\le\int_0^2\sqrt{1+x^3}\,dx\le 6$. (b) Dimostrare che $\displaystyle\left|\int_0^{2\pi}\frac{\sin x}{2+x}\,dx\right|\le\ln(1+\pi)$.

<details>
<summary>Soluzione</summary>

(a) Su $[0,2]$, $x^3$ cresce da $0$ a $8$, quindi $1\le1+x^3\le9$ e $1\le\sqrt{1+x^3}\le3$. Per la stima di base (P3) con $m=1$, $M=3$, $b-a=2$: $1\cdot2\le\int_0^2\sqrt{1+x^3}\,dx\le3\cdot2$, cioè $2\le\int\le6$.

(b) Per la disuguaglianza del valore assoluto (P4) e poi la monotonia, usando $|\sin x|\le1$:
$$\left|\int_0^{2\pi}\frac{\sin x}{2+x}\,dx\right|\le\int_0^{2\pi}\frac{|\sin x|}{2+x}\,dx\le\int_0^{2\pi}\frac{1}{2+x}\,dx=\big[\ln(2+x)\big]_0^{2\pi}=\ln(2+2\pi)-\ln2=\ln(1+\pi).$$
(Nell'ultimo passaggio $\ln\frac{2+2\pi}{2}=\ln(1+\pi)$.)
</details>

---

**Esercizio 8 (avanzato — l'integrale dalla definizione).** Calcolare $\displaystyle\int_0^1 x\,dx$ come limite delle somme superiori su $n$ parti uguali, verificando col TFC.

<details>
<summary>Soluzione</summary>

Ampiezza $\Delta t=\tfrac1n$, estremo destro $t_i=\tfrac in$. Poiché $f(x)=x$ è crescente, $M_i=t_i=\tfrac in$:
$$U(f;P_n)=\sum_{i=1}^n\frac{i}{n}\cdot\frac1n=\frac{1}{n^2}\sum_{i=1}^n i=\frac{1}{n^2}\cdot\frac{n(n+1)}{2}=\frac{n+1}{2n}=\frac12+\frac{1}{2n}.$$
Per $n\to\infty$: $U(f;P_n)\to\tfrac12$. La somma inferiore (estremo sinistro) è $\tfrac12-\tfrac1{2n}\to\tfrac12$: coincidono, quindi $\int_0^1 x\,dx=\tfrac12$. *Verifica TFC:* $\big[\tfrac{x^2}{2}\big]_0^1=\tfrac12$. (È l'area del triangolo di base e altezza $1$.)
</details>

---

**Esercizio 9 (concettuale — perché serve la continuità nel TFC-2).** Un'auto ha posizione $s(t)$ e velocità $v(t)=s'(t)$. (a) Interpretare $\int_a^b v(t)\,dt$ tramite il TFC-2. (b) Spiegare, con questa lettura, perché $\int_a^b v\,dt$ dà lo *spostamento netto* e non lo *spazio percorso*.

<details>
<summary>Soluzione</summary>

(a) Poiché $s$ è una primitiva di $v$ ($s'=v$), il TFC-2 dà $\int_a^b v(t)\,dt=s(b)-s(a)$: l'integrale della velocità è la **variazione di posizione** tra gli istanti $a$ e $b$. (Questo è il «net change theorem»: l'integrale di un tasso è la variazione totale della grandezza.)

(b) $s(b)-s(a)$ è lo **spostamento netto** (posizione finale meno iniziale), con segno: se l'auto va avanti e poi torna indietro, i due tratti si compensano. Lo **spazio percorso** (sempre $\ge0$) è invece $\int_a^b|v(t)|\,dt$, che conta positivo ogni movimento a prescindere dalla direzione. È lo stesso fenomeno «area con segno vs area geometrica» dell'Esempio 3, tradotto in cinematica.
</details>

---

**Esercizio 10 (concettuale — integrabilità).** (a) Dire, motivando, se $f(x)=\lfloor x\rfloor$ (parte intera) è integrabile su $[0,3]$ e calcolare $\int_0^3\lfloor x\rfloor\,dx$. (b) Mostrare che $g(x)=1$ se $x=\tfrac12$, $g(x)=0$ altrimenti su $[0,1]$, è integrabile con $\int_0^1 g=0$.

<details>
<summary>Soluzione</summary>

(a) $\lfloor x\rfloor$ vale $0$ su $[0,1)$, $1$ su $[1,2)$, $2$ su $[2,3)$: è **continua a tratti** (salti in $x=1,2$), limitata, dunque integrabile (§2.4, estensione). Per additività:
$$\int_0^3\lfloor x\rfloor\,dx=\int_0^1 0\,dx+\int_1^2 1\,dx+\int_2^3 2\,dx=0+1+2=3.$$

(b) $g$ differisce dalla funzione nulla in **un solo punto**. Per qualunque partizione, su ogni sottointervallo $m_i=0$ (ci sono punti dove $g=0$), quindi $L(g;P)=0$: l'integrale inferiore è $0$. Per il superiore, il punto $x=\tfrac12$ cade in al più *due* sottointervalli, dove $M_i=1$; restringendo la loro ampiezza totale sotto $\varepsilon$ si ha $U(g;P)<\varepsilon$. Dunque $\overline{\int}g=0=\underline{\int}g$: $g$ è integrabile e $\int_0^1 g=0$. (Morale: modificare una funzione in un numero finito di punti non cambia l'integrale.)
</details>
