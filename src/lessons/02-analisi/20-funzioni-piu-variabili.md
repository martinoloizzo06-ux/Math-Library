---
id: analisi-20-funzioni-piu-variabili
titolo: "Funzioni di più variabili e derivate parziali"
materia: analisi
argomento: "Analisi multivariata"
modulo: "Funzioni di più variabili"
livello: universitario
slug: analisi-20-funzioni-piu-variabili

# legacy
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: "Funzioni di più variabili e derivate parziali"
title_en: "Functions of several variables and partial derivatives"
level: blue
order: 20
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); A. Villanacci, Mathematics 1 (appunti); OpenStax Calculus Vol. 1"
source_chapter: "Funzioni Rⁿ→R, curve di livello, limiti in più variabili, derivate parziali, teorema di Schwarz"

prerequisiti:
  - analisi-02-limite-epsilon-delta
  - analisi-04-continuita
  - analisi-06-derivata-definizione

collegamenti:
  - analisi-21-gradiente-differenziabilita
  - analisi-04-continuita
  - analisi-06-derivata-definizione
  - analisi-02-limite-epsilon-delta

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Spazio Rⁿ, funzioni di più variabili, continuità in spazi metrici, calcolo differenziale multivariato, derivate parziali e loro simmetria"
    note: "appunti-prof: notazione e convenzioni d'esame (coerenza con gli esami di Martino). Struttura e rigore delle definizioni di limite/continuità in Rⁿ e di derivata parziale"
  - id_fonte: villanacci-math1
    ruolo: secondaria
    sezioni_coperte: "Topologia di Rⁿ, norma e distanza euclidea, nozione di intorno e punto di accumulazione in più dimensioni"
    note: "supporto alla definizione rigorosa di limite in più variabili (intorni sferici)"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Analogie con il caso a una variabile: la derivata parziale come derivata 1D con le altre variabili congelate; intuizione geometrica delle pendenze"
    note: "solo per il ponte con il caso monovariabile già noto; OpenStax Vol.1 è monovariabile"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Fino a qui una funzione è stata una macchina con un ingresso e un'uscita: dai un numero $x$, ottieni un numero $f(x)$. Ma quasi nulla nel mondo dipende da una sola cosa. La tua altitudine durante un'escursione dipende da **dove** ti trovi sulla cartina, cioè da due coordinate $(x,y)$. La soddisfazione che ricavi da un paniere di spesa dipende da **quanto** compri di ciascun bene. Il prodotto di un'azienda dipende dal capitale **e** dal lavoro impiegati. La pressione atmosferica dipende da posizione e quota. Tutte queste sono **funzioni di più variabili**: molti numeri in ingresso, un numero in uscita.

L'immagine da tenere in mente è quella di un **paesaggio**. Una funzione $f(x,y)$ associa a ogni punto della pianta $(x,y)$ una quota. Il suo grafico è una superficie ondulata sopra il piano: colline, valli, creste, selle. Studiare la funzione significa studiare la forma di quel paesaggio: dove sale, dove scende, dov'è il punto più alto.

Il passaggio da una a più variabili non è un dettaglio tecnico: cambia la natura delle domande. In una variabile ci si può muovere solo *avanti* o *indietro*. In due variabili, da ogni punto, ci si può muovere in **infinite direzioni** — verso Est, verso Nord, in diagonale, lungo una curva a spirale. Questa libertà di movimento è la sorgente di quasi tutte le novità del modulo: il limite diventa più delicato (deve valere lungo *ogni* avvicinamento), e «la pendenza» non è più un numero solo ma dipende dalla direzione in cui cammini. In questa lezione mettiamo a fuoco gli oggetti di base — dominio, curve di livello, limiti, continuità, derivate parziali — che serviranno da fondamenta per il gradiente (lez. 21) e per l'ottimizzazione, cuore delle applicazioni economiche.

C'è un secondo modo di «vedere» un paesaggio, quello dei cartografi: invece di disegnare la superficie in prospettiva, si tracciano sulla pianta le **curve di livello**, le linee che uniscono i punti alla stessa quota. Su una carta topografica sono le isoipse; in economia sono le **curve di indifferenza** (panieri che danno la stessa soddisfazione) e gli **isoquanti** (combinazioni di fattori che producono la stessa quantità). Curve di livello fitte = pendio ripido; curve larghe = terreno pianeggiante. È uno strumento che ci accompagnerà per tutto il modulo.

---

## 2. Teoria

### 2.1 Funzioni di più variabili: dominio, grafico, immagine

**Definizione (funzione reale di $n$ variabili reali).** Sia $D \subseteq \mathbb{R}^n$. Una funzione

$$f: D \subseteq \mathbb{R}^n \longrightarrow \mathbb{R}, \qquad \mathbf{x}=(x_1,\dots,x_n) \mapsto f(\mathbf{x})$$

associa a ogni punto $\mathbf{x}$ del **dominio** $D$ uno e un solo numero reale $f(\mathbf{x})$.

Leggiamo i simboli. Il grassetto $\mathbf{x}=(x_1,\dots,x_n)$ è un **punto** di $\mathbb{R}^n$, cioè una lista ordinata di $n$ coordinate; per $n=2$ scriviamo $(x,y)$, per $n=3$ scriviamo $(x,y,z)$. L'ingresso è quindi un *vettore*, l'uscita resta un *numero*. Il dominio $D$ è il sottoinsieme di $\mathbb{R}^n$ su cui la regola ha senso: se $f(x,y)=\sqrt{1-x^2-y^2}$, il dominio è il disco $x^2+y^2\le 1$, perché fuori la radice non è reale.

Per «vedere» $f$ con $n=2$ ci sono due rappresentazioni complementari:

- il **grafico**, cioè l'insieme dei punti $(x,y,f(x,y))$ in $\mathbb{R}^3$: una superficie sopra (o sotto) il piano $xy$;
- le **curve di livello**, che vivono nel piano $xy$ e verranno definite subito sotto.

Per $n=3$ il grafico vivrebbe in $\mathbb{R}^4$ e non è disegnabile; restano invece disegnabili le superfici di livello. Ecco perché le curve di livello sono uno strumento così prezioso: non smettono di funzionare quando le dimensioni crescono.

*Micro-esempio.* Per $f(x,y)=x^2+y^2$ il dominio è tutto $\mathbb{R}^2$, l'immagine è $[0,+\infty)$, e il grafico è un **paraboloide** a forma di coppa con il vertice nell'origine.

### 2.2 Curve e superfici di livello

**Definizione (curva di livello).** Data $f:D\subseteq\mathbb{R}^2\to\mathbb{R}$ e un valore $c\in\mathbb{R}$, la **curva di livello** di quota $c$ è l'insieme

$$L_c = \{(x,y)\in D : f(x,y)=c\}.$$

È l'insieme dei punti della pianta a cui la funzione assegna esattamente la quota $c$. Geometricamente: se «tagliassimo» il grafico con il piano orizzontale $z=c$ e proiettassimo la sezione sul piano $xy$, otterremmo $L_c$. Al variare di $c$ si ottiene una famiglia di curve che «mappa» tutto il paesaggio. In $\mathbb{R}^3$ la stessa costruzione dà le **superfici di livello** $\{f(x,y,z)=c\}$.

Perché la struttura è utile: la spaziatura delle curve di livello codifica la pendenza. Dove le curve sono **fitte**, basta uno spostamento piccolo per cambiare quota di $c$ in $c+\Delta c$: pendio ripido. Dove sono **larghe**, serve uno spostamento ampio: terreno quasi piatto. Vedremo in lez. 21 che questa osservazione diventa un teorema preciso: il gradiente è ortogonale alle curve di livello e la sua lunghezza misura la ripidità.

*Micro-esempio.* Per $f(x,y)=x^2+y^2$ la curva di livello $L_c$ con $c>0$ è $x^2+y^2=c$, cioè una **circonferenza** di raggio $\sqrt c$; per $c=0$ è il solo punto-origine; per $c<0$ è vuota. Le circonferenze si infittiscono man mano che ci si allontana dall'origine — coerente con un paraboloide che diventa sempre più ripido.

In economia, se $U(x,y)$ è l'utilità di consumare $x$ del primo bene e $y$ del secondo, le curve di livello $U(x,y)=c$ sono le **curve di indifferenza**: tutti i panieri tra cui il consumatore è indifferente. Se $Q(K,L)$ è la produzione con capitale $K$ e lavoro $L$, le curve $Q=c$ sono gli **isoquanti**: tutte le combinazioni di fattori che producono la stessa quantità.

### 2.3 Limiti in più variabili: la delicatezza dei cammini

In una variabile, «$x\to a$» ammette due soli avvicinamenti: da sinistra e da destra. In due variabili un punto $(x,y)$ può avvicinarsi a $(x_0,y_0)$ lungo **infiniti** cammini: rette con ogni pendenza, parabole, spirali. La definizione di limite deve tenerne conto tutti in una volta.

**Definizione ($\varepsilon$–$\delta$, limite in $\mathbb{R}^n$).** Sia $\mathbf{x}_0$ un punto di accumulazione di $D$. Si dice che

$$\lim_{\mathbf{x}\to\mathbf{x}_0} f(\mathbf{x}) = L$$

se per ogni $\varepsilon>0$ esiste $\delta>0$ tale che, per ogni $\mathbf{x}\in D$ con $0<\|\mathbf{x}-\mathbf{x}_0\|<\delta$, si ha $|f(\mathbf{x})-L|<\varepsilon$.

Simbolo per simbolo, la struttura è identica al caso 1D: la sola differenza è che «$|x-x_0|<\delta$» diventa «$\|\mathbf{x}-\mathbf{x}_0\|<\delta$», dove $\|\cdot\|$ è la **norma euclidea** $\|\mathbf{x}-\mathbf{x}_0\|=\sqrt{(x_1-a_1)^2+\cdots+(x_n-a_n)^2}$. La condizione $0<\|\mathbf{x}-\mathbf{x}_0\|<\delta$ descrive un **intorno sferico** bucato: tutti i punti a distanza minore di $\delta$ dal centro, tranne il centro. Questa è la traduzione geometrica di «avvicinarsi da ogni direzione»: la pallina di raggio $\delta$ non privilegia nessun cammino.

Da qui la conseguenza operativa più importante del modulo. Se il limite $L$ esiste, allora *qualunque* cammino porti a $\mathbf{x}_0$ deve dare lo stesso valore $L$. Di conseguenza:

> **Criterio di non-esistenza (dei due cammini).** Se lungo due cammini diversi che tendono a $\mathbf{x}_0$ la funzione tende a due valori diversi, allora il limite **non esiste**.

Questo criterio è potentissimo per *smontare* un limite, ma attenzione all'asimmetria logica: trovare lo stesso valore lungo mille cammini **non dimostra** che il limite esista, perché i cammini possibili sono infiniti e non basta controllarne una parte. Per *dimostrare* l'esistenza servono altri strumenti (stime della norma, coordinate polari, teorema del confronto), che useremo negli esempi.

*Micro-esempio.* Consideriamo $f(x,y)=\dfrac{xy}{x^2+y^2}$ vicino all'origine. Lungo l'asse $x$ (cioè $y=0$) vale $f(x,0)=0$, quindi tende a $0$. Lungo la retta $y=x$ vale $f(x,x)=\dfrac{x^2}{2x^2}=\dfrac12$, quindi tende a $\tfrac12$. Due cammini, due valori: il limite in $(0,0)$ **non esiste**. Lo dimostriamo in dettaglio in §3.1.

<details class="dim-tecnica">
<summary>Perché basta l'esistenza del limite lungo tutte le rette? (e perché in realtà non basta)</summary>

Una tentazione naturale è dire: «controllo il limite lungo tutte le rette $y=mx$; se viene sempre lo stesso valore, il limite esiste». È **falso**, ed è un errore classico. Le rette non esauriscono i cammini possibili.

Controesempio: $g(x,y)=\dfrac{x^2 y}{x^4+y^2}$. Lungo ogni retta $y=mx$:
$$g(x,mx)=\frac{x^2\cdot mx}{x^4+m^2x^2}=\frac{m x^3}{x^2(x^2+m^2)}=\frac{m x}{x^2+m^2}\xrightarrow[x\to0]{}0.$$
Lungo *ogni* retta il limite è $0$. Ma lungo la **parabola** $y=x^2$:
$$g(x,x^2)=\frac{x^2\cdot x^2}{x^4+x^4}=\frac{x^4}{2x^4}=\frac12\xrightarrow[x\to0]{}\frac12\neq 0.$$
Due cammini con limiti diversi ⇒ il limite non esiste, benché *tutte le rette* diano $0$. Morale: la definizione $\varepsilon$–$\delta$ richiede il controllo su intorni sferici, non su una famiglia scelta di cammini; le rette sono solo una famiglia particolarmente comoda per *smontare*, mai sufficiente per *costruire*.

</details>

Lo strumento interattivo qui sotto rende visibile la delicatezza: fissata una retta $y=m\,x$, il valore di $\frac{xy}{x^2+y^2}$ lungo quella retta è **costante** e pari a $\frac{m}{1+m^2}$. Spostando la pendenza $m$ vedi la quota cambiare, mentre lungo gli assi resta $0$: cammini diversi, quote diverse.

```slider
{"title":"Il limite dipende dalla direzione: f(x,y)=xy/(x²+y²) lungo y = m·x","fn":"a/(1+a*a)","fn2":"0","domain":[-2,2],"yDomain":[-0.6,0.6],"pname":"a","pmin":-6,"pmax":6,"pdefault":1,"pstep":0.1,"plabel":"pendenza m della retta y = m·x","label1":"valore di f lungo y = m·x  (= m/(1+m²))","label2":"valore di f lungo gli assi (= 0)"}
```

```checkpoint
[domanda] Verifichi che lungo la retta $y=2x$ la funzione $f(x,y)=\frac{xy}{x^2+y^2}$ tende a $\frac25$, mentre lungo $y=-x$ tende a $-\frac12$. Che cosa puoi concludere sul limite in $(0,0)$?
[risposta] Lungo $y=2x$: $f(x,2x)=\frac{2x^2}{x^2+4x^2}=\frac{2}{5}$, costante. Lungo $y=-x$: $f(x,-x)=\frac{-x^2}{2x^2}=-\frac12$, costante. Due cammini danno due valori diversi ($\tfrac25\neq-\tfrac12$), quindi per il criterio dei due cammini il limite in $(0,0)$ **non esiste**.
```

### 2.4 Continuità

**Definizione (continuità).** $f$ è **continua** in $\mathbf{x}_0\in D$ se $\displaystyle\lim_{\mathbf{x}\to\mathbf{x}_0} f(\mathbf{x})=f(\mathbf{x}_0)$. È continua su $D$ se lo è in ogni suo punto.

La definizione è formalmente identica al caso 1D: il limite esiste, è finito, e coincide con il valore della funzione. Le proprietà note si trasportano: somme, prodotti, quozienti (dove il denominatore non si annulla) e composizioni di funzioni continue sono continue. In particolare i **polinomi** in più variabili sono continui ovunque, e le **funzioni razionali** sono continue dove il denominatore non si annulla. La delicatezza dei limiti si riflette qui: una funzione può essere «costruita» in modo che tutte le sue sezioni siano continue e tuttavia non sia continua come funzione delle due variabili insieme.

*Micro-esempio.* La $f(x,y)=\frac{xy}{x^2+y^2}$ prolungata ponendo $f(0,0)=0$ **non** è continua in $(0,0)$: il limite lì non esiste (2.3), quindi non può coincidere con $f(0,0)=0$. Eppure la sua restrizione a ogni retta per l'origine è continua. La continuità «lungo le sezioni» non implica la continuità congiunta.

### 2.5 Derivate parziali

Come si misura la pendenza di un paesaggio, se da ogni punto si può partire in infinite direzioni? L'idea più semplice è: muoviti lungo **un asse per volta**, tenendo ferme le altre coordinate. Così ricadi in un problema a una variabile, che sai già trattare.

**Definizione (derivata parziale).** Sia $f:D\subseteq\mathbb{R}^n\to\mathbb{R}$ e $\mathbf{x}_0\in D$ interno. La **derivata parziale** di $f$ rispetto a $x_i$ in $\mathbf{x}_0$ è

$$\frac{\partial f}{\partial x_i}(\mathbf{x}_0) = \lim_{h\to 0}\frac{f(\mathbf{x}_0 + h\,\mathbf{e}_i) - f(\mathbf{x}_0)}{h},$$

dove $\mathbf{e}_i$ è l'$i$-esimo versore della base canonica (tutte coordinate nulle tranne un $1$ al posto $i$), se il limite esiste ed è finito.

Leggiamola. Il vettore $\mathbf{x}_0+h\,\mathbf{e}_i$ è il punto $\mathbf{x}_0$ spostato di $h$ **soltanto** lungo la $i$-esima coordinata: tutte le altre restano congelate. Il rapporto è quindi esattamente il rapporto incrementale di una funzione di una sola variabile — quella che ottieni «bloccando» le altre. Ne segue la **regola pratica** più usata al mondo: *per derivare rispetto a $x_i$, tratta tutte le altre variabili come costanti e deriva normalmente in $x_i$.* Per $n=2$ scriviamo $f_x=\partial f/\partial x$ e $f_y=\partial f/\partial y$.

Tre interpretazioni, da tenere insieme:

- **Geometrica.** $\frac{\partial f}{\partial x}(x_0,y_0)$ è la pendenza della curva ottenuta tagliando il grafico con il piano verticale $y=y_0$: la pendenza della «sezione Est-Ovest» del paesaggio. Analogamente $f_y$ è la pendenza della sezione Nord-Sud.
- **Economica.** Se $U(x,y)$ è un'utilità, $U_x$ è l'**utilità marginale** del primo bene: quanto cresce la soddisfazione per un'unità in più del bene $x$, tenendo fisso $y$. Se $Q(K,L)$ è una produzione, $Q_K$ è il **prodotto marginale del capitale**.
- **Di sensibilità.** La derivata parziale misura la reattività dell'uscita a una piccola variazione di *quel solo* ingresso, «a parità di tutto il resto» (il *ceteris paribus* degli economisti).

*Micro-esempio.* Per $f(x,y)=x^2 y + \sin y$: derivando in $x$ tratto $y$ come costante, quindi $f_x = 2xy$; derivando in $y$ tratto $x$ come costante, quindi $f_y = x^2 + \cos y$.

### 2.6 Derivate di ordine superiore e teorema di Schwarz

Poiché $f_x$ e $f_y$ sono a loro volta funzioni di $(x,y)$, si possono derivare ancora, ottenendo le **derivate parziali seconde**:

$$f_{xx}=\frac{\partial^2 f}{\partial x^2},\quad f_{yy}=\frac{\partial^2 f}{\partial y^2},\quad f_{xy}=\frac{\partial}{\partial y}\!\left(\frac{\partial f}{\partial x}\right),\quad f_{yx}=\frac{\partial}{\partial x}\!\left(\frac{\partial f}{\partial y}\right).$$

Le ultime due si dicono **miste**: in $f_{xy}$ si deriva prima in $x$ poi in $y$, in $f_{yx}$ l'ordine è invertito. Sorprendentemente, sotto ipotesi molto blande l'ordine non conta.

**Teorema di Schwarz (simmetria delle derivate miste).** Se $f_{xy}$ e $f_{yx}$ esistono in un intorno di $\mathbf{x}_0$ e sono **continue** in $\mathbf{x}_0$, allora
$$f_{xy}(\mathbf{x}_0)=f_{yx}(\mathbf{x}_0).$$

Il significato: per le funzioni «ragionevoli» che si incontrano nelle applicazioni (di classe $C^2$), derivare prima in $x$ e poi in $y$ dà lo stesso risultato che derivare prima in $y$ e poi in $x$. Questo è il motivo per cui, quando in lez. 22 raccoglieremo le derivate seconde nella **matrice Hessiana**, quella matrice sarà **simmetrica** — un fatto con conseguenze profonde sulla classificazione dei punti critici. L'ipotesi di continuità non è decorativa: esistono funzioni patologiche in cui $f_{xy}(0,0)\neq f_{yx}(0,0)$ proprio perché le miste non sono continue nell'origine.

*Micro-esempio.* Per $f(x,y)=x^2 y + \sin y$: da $f_x=2xy$ si ottiene $f_{xy}=2x$; da $f_y=x^2+\cos y$ si ottiene $f_{yx}=2x$. Coincidono, come garantisce Schwarz (la funzione è liscia ovunque).

```checkpoint
[domanda] Per $f(x,y)=x^3 y^2$ calcola $f_x$, $f_y$ e verifica che $f_{xy}=f_{yx}$.
[risposta] $f_x=3x^2 y^2$ (tratto $y$ come costante). $f_y=2x^3 y$ (tratto $x$ come costante). Derivate miste: $f_{xy}=\partial_y(3x^2y^2)=6x^2 y$; $f_{yx}=\partial_x(2x^3 y)=6x^2 y$. Coincidono ✓, coerente con Schwarz ($f$ è un polinomio, dunque $C^\infty$).
```

---

## 3. Dimostrazioni

### 3.1 Non-esistenza di un limite: il metodo dei due cammini (rigoroso)

**Affermazione.** $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}$ non esiste.

**Dimostrazione.** Ragioniamo per assurdo. Supponiamo che il limite esista e valga $L$. Per definizione, per ogni $\varepsilon>0$ esiste $\delta>0$ tale che $|f(x,y)-L|<\varepsilon$ per ogni $(x,y)$ con $0<\|(x,y)\|<\delta$. In particolare la disuguaglianza deve valere lungo *qualunque* cammino che entra nella pallina di raggio $\delta$.

Consideriamo due cammini che tendono all'origine.

*Primo cammino:* lungo l'asse $x$, cioè i punti $(t,0)$ con $t\to 0^+$. Qui $f(t,0)=\dfrac{t\cdot 0}{t^2+0}=0$ per ogni $t\neq 0$. Quindi $f\to 0$ lungo questo cammino. Poiché per punti abbastanza vicini all'origine deve valere $|f-L|<\varepsilon$, passando al limite lungo il cammino si ottiene $|0-L|\le\varepsilon$, e per l'arbitrarietà di $\varepsilon$ segue $L=0$.

*Secondo cammino:* lungo la retta $y=x$, cioè i punti $(t,t)$ con $t\to 0^+$. Qui $f(t,t)=\dfrac{t\cdot t}{t^2+t^2}=\dfrac{t^2}{2t^2}=\dfrac12$ per ogni $t\neq 0$. Quindi $f\to \tfrac12$ lungo questo cammino, e con lo stesso ragionamento $L=\tfrac12$.

Abbiamo dedotto simultaneamente $L=0$ e $L=\tfrac12$, che è una contraddizione. Dunque l'ipotesi che il limite esista è falsa: il limite non esiste. $\blacksquare$

*Commento sul metodo.* La forza dell'argomento sta nel fatto che l'esistenza del limite è una richiesta *globale* sull'intorno sferico: obbliga tutti i cammini a concordare. Basta quindi esibire **due** cammini in disaccordo per far crollare l'ipotesi. Nota che non abbiamo scelto i cammini a caso: l'asse $x$ e la bisettrice sono i primi due tentativi naturali, e la loro semplicità rende i conti trasparenti.

### 3.2 La derivata parziale come derivata a una variabile

**Affermazione.** Calcolare $\dfrac{\partial f}{\partial x}(x_0,y_0)$ equivale a derivare in $x_0$ la funzione di una variabile $g(x):=f(x,y_0)$, ottenuta congelando $y=y_0$.

**Dimostrazione.** Definiamo $g(x)=f(x,y_0)$: è una funzione della sola variabile $x$, perché $y_0$ è fissato. Il suo rapporto incrementale in $x_0$ è
$$\frac{g(x_0+h)-g(x_0)}{h}=\frac{f(x_0+h,\,y_0)-f(x_0,\,y_0)}{h}.$$
Il numeratore è esattamente $f(\mathbf{x}_0+h\,\mathbf{e}_1)-f(\mathbf{x}_0)$ con $\mathbf{x}_0=(x_0,y_0)$ e $\mathbf{e}_1=(1,0)$, perché aggiungere $h\,\mathbf{e}_1$ significa incrementare la sola prima coordinata. Passando al limite per $h\to 0$, il membro sinistro converge (per definizione) a $g'(x_0)$, mentre il membro destro converge (per definizione) a $\frac{\partial f}{\partial x}(x_0,y_0)$. I due limiti sono lo stesso limite, quindi
$$\frac{\partial f}{\partial x}(x_0,y_0)=g'(x_0). \qquad\blacksquare$$

*Perché è importante.* Questo teoremino è la giustificazione rigorosa della «regola pratica» del §2.5: derivare parzialmente in $x$ *è* derivare in una variabile con $y$ costante. Ogni regola di derivazione 1D (prodotto, quoziente, catena, derivate delle funzioni elementari) si applica quindi tale e quale alle derivate parziali, senza bisogno di nuovi teoremi.

### 3.3 Simmetria delle derivate miste (traccia del teorema di Schwarz)

<details class="dim-tecnica">
<summary>Idea della dimostrazione di $f_{xy}=f_{yx}$ tramite l'incremento misto</summary>

Lo strumento chiave è l'**incremento misto** del secondo ordine. Fissato $\mathbf{x}_0=(x_0,y_0)$ e due passi $h,k>0$, poniamo
$$\Delta(h,k)=f(x_0+h,y_0+k)-f(x_0+h,y_0)-f(x_0,y_0+k)+f(x_0,y_0).$$
Questa combinazione è simmetrica: raggruppando i quattro termini «prima in $x$» oppure «prima in $y$» si ottiene la stessa espressione. Applicando due volte il **teorema di Lagrange** (del valor medio), una volta nella variabile $x$ e una nella variabile $y$, si mostra che esiste un punto interno $(\xi,\eta)$ del rettangolino $[x_0,x_0+h]\times[y_0,y_0+k]$ per cui
$$\frac{\Delta(h,k)}{hk}=f_{xy}(\xi,\eta).$$
Ripetendo il raggruppamento nell'ordine opposto si trova analogamente $\dfrac{\Delta(h,k)}{hk}=f_{yx}(\xi',\eta')$ per un altro punto interno $(\xi',\eta')$. Facendo tendere $h,k\to 0$, entrambi i punti convergono a $(x_0,y_0)$; se $f_{xy}$ e $f_{yx}$ sono **continue** in $(x_0,y_0)$, i due valori tendono rispettivamente a $f_{xy}(x_0,y_0)$ e $f_{yx}(x_0,y_0)$. Ma sono lo stesso quoziente $\Delta(h,k)/(hk)$, quindi i due limiti coincidono:
$$f_{xy}(x_0,y_0)=f_{yx}(x_0,y_0).$$
È qui che l'ipotesi di continuità delle miste entra in gioco in modo essenziale: senza di essa i due limiti potrebbero non stabilizzarsi sullo stesso valore, ed effettivamente esistono controesempi in cui le miste differiscono nell'origine.

</details>

---

## 4. Esempi

**Esempio 1 (dominio e curve di livello — introduttivo).** Trovare dominio e curve di livello di $f(x,y)=\sqrt{9-x^2-y^2}$.
*Strategia:* il dominio è dove il radicando è $\ge 0$. Curve di livello: porre $f=c$ e ricavare la relazione tra $x,y$.
*Svolgimento:* $9-x^2-y^2\ge0\iff x^2+y^2\le 9$: il dominio è il disco chiuso di raggio $3$. Per $0\le c\le 3$: $\sqrt{9-x^2-y^2}=c\iff x^2+y^2=9-c^2$, circonferenze di raggio $\sqrt{9-c^2}$. Il grafico è la **semisfera** superiore di raggio $3$: le circonferenze si stringono verso il polo alto ($c\to3$) e si allargano verso il bordo ($c\to0$).

**Esempio 2 (derivate parziali, regole 1D — introduttivo).** Calcolare $f_x$ e $f_y$ per $f(x,y)=x^3+3x^2y-y^3$.
*Svolgimento:* in $x$, con $y$ costante: $f_x=3x^2+6xy$. In $y$, con $x$ costante: $f_y=3x^2-3y^2$.

**Esempio 3 (regola del prodotto/catena parziale — intermedio).** Calcolare $f_x$ e $f_y$ per $f(x,y)=e^{xy}\cos x$.
*Svolgimento:* in $x$ compaiono sia $e^{xy}$ sia $\cos x$: regola del prodotto. $\partial_x e^{xy}=y\,e^{xy}$ (catena, $y$ costante), $\partial_x\cos x=-\sin x$. Quindi $f_x=y\,e^{xy}\cos x - e^{xy}\sin x = e^{xy}(y\cos x-\sin x)$. In $y$, $\cos x$ è costante: $f_y=\partial_y(e^{xy})\cos x = x\,e^{xy}\cos x$.

**Esempio 4 (limite che non esiste — intermedio).** Studiare $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-y^2}{x^2+y^2}$.
*Strategia:* provare cammini rettilinei $y=mx$.
*Svolgimento:* $f(x,mx)=\dfrac{x^2-m^2x^2}{x^2+m^2x^2}=\dfrac{1-m^2}{1+m^2}$, costante lungo ogni retta ma **dipendente da $m$**: per $m=0$ vale $1$, per $m=1$ vale $0$. Cammini diversi, valori diversi ⇒ il limite non esiste.

**Esempio 5 (limite che esiste, via stima — intermedio/avanzato).** Mostrare che $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2 y}{x^2+y^2}=0$.
*Strategia:* qui il metodo dei cammini dà sempre $0$, ma ciò non basta: serve una **stima** che valga in tutto l'intorno.
*Svolgimento:* poiché $x^2\le x^2+y^2$, si ha $\dfrac{x^2}{x^2+y^2}\le 1$, quindi
$$\left|\frac{x^2 y}{x^2+y^2}\right|=\frac{x^2}{x^2+y^2}\,|y|\le |y|\le \sqrt{x^2+y^2}=\|(x,y)\|.$$
Dato $\varepsilon>0$, scegliendo $\delta=\varepsilon$ si ottiene $|f(x,y)|<\varepsilon$ per $0<\|(x,y)\|<\delta$. Il limite esiste e vale $0$. *Confronta con l'Esempio 4:* cambiare l'esponente al numeratore da $x^2-y^2$ (grado $2$, «pesa quanto» il denominatore) a $x^2 y$ (grado $3$, «più leggero») fa la differenza tra non-esistenza ed esistenza.

**Esempio 6 (coordinate polari — avanzato).** Ricalcolare il limite dell'Esempio 5 in coordinate polari.
*Strategia:* porre $x=r\cos\theta$, $y=r\sin\theta$; allora $(x,y)\to(0,0)\iff r\to0^+$, uniformemente in $\theta$.
*Svolgimento:* $\dfrac{x^2 y}{x^2+y^2}=\dfrac{r^2\cos^2\theta\cdot r\sin\theta}{r^2}=r\cos^2\theta\sin\theta$. In modulo $|r\cos^2\theta\sin\theta|\le r\to 0$, e la stima **non dipende da $\theta$**: il limite è $0$ uniformemente in tutte le direzioni. Le polari sono spesso il modo più pulito per dimostrare l'esistenza: il fattore $r$ davanti garantisce l'annullamento indipendentemente dall'angolo.

**Esempio 7 (derivate seconde e Schwarz — avanzato).** Per $f(x,y)=x^2 e^{y}+y\ln x$ (con $x>0$) calcolare tutte le derivate seconde e verificare Schwarz.
*Svolgimento:* $f_x=2x e^y+\dfrac{y}{x}$, $f_y=x^2 e^y+\ln x$. Seconde: $f_{xx}=2e^y-\dfrac{y}{x^2}$; $f_{yy}=x^2 e^y$; $f_{xy}=\partial_y\!\big(2xe^y+\tfrac{y}{x}\big)=2xe^y+\dfrac1x$; $f_{yx}=\partial_x\!\big(x^2e^y+\ln x\big)=2xe^y+\dfrac1x$. Le miste coincidono ✓.

**Esempio 8 (applicativo economico — Cobb-Douglas).** La funzione di produzione $Q(K,L)=A\,K^{\alpha}L^{\beta}$ (con $A,\alpha,\beta>0$) è il modello più usato in economia. Calcolare i prodotti marginali e il **saggio marginale di sostituzione tecnica**.
*Svolgimento:* prodotto marginale del capitale $Q_K=A\alpha K^{\alpha-1}L^\beta=\alpha\,\dfrac{Q}{K}$; del lavoro $Q_L=A\beta K^{\alpha}L^{\beta-1}=\beta\,\dfrac{Q}{L}$. Entrambi positivi (più fattore, più prodotto) e decrescenti nel proprio fattore se l'esponente è $<1$ (rendimenti marginali decrescenti). Il saggio marginale di sostituzione tecnica — la pendenza dell'isoquanto — è
$$\text{MRTS}=\frac{Q_K}{Q_L}=\frac{\alpha L}{\beta K}.$$
Interpretazione: lungo un isoquanto (produzione costante) è la quantità di lavoro che rimpiazza un'unità di capitale mantenendo invariato l'output. È esattamente l'informazione geometrica contenuta nella pendenza della curva di livello — il ponte tra derivate parziali e curve di livello che la lezione 21 formalizzerà col gradiente.

**Esempio 9 (curve di livello e lettura del paesaggio — applicativo).** Descrivere le curve di livello di $f(x,y)=x^2-y^2$ e cosa dicono sulla forma del grafico.
*Svolgimento:* $x^2-y^2=c$. Per $c>0$: iperboli con i rami aperti verso Est/Ovest; per $c<0$: iperboli aperte verso Nord/Sud; per $c=0$: la coppia di rette $y=\pm x$. Questo intreccio di iperboli che «cambiano orientamento» attraversando il livello $0$ è la firma di un **punto di sella** nell'origine: lungo l'asse $x$ la funzione ha un minimo, lungo l'asse $y$ un massimo. È il prototipo di punto critico che né massimo né minimo, centrale nell'ottimizzazione (lez. 22).

---

## 5. Collegamenti e riepilogo

**Il filo del modulo.** Questa lezione installa gli oggetti di base dell'analisi in $\mathbb{R}^n$. Il messaggio unificante è che *la libertà di muoversi in infinite direzioni* rende tutto più ricco e più delicato: il limite deve valere lungo ogni cammino (non basta controllare le rette), e la pendenza si spezza in tante derivate parziali, una per asse. La lezione 21 raccoglierà queste derivate parziali in un unico oggetto, il **gradiente** $\nabla f=(f_{x_1},\dots,f_{x_n})$, e chiarirà che l'esistenza delle parziali non garantisce nemmeno la continuità: servirà la nozione più forte di **differenziabilità**. La lezione 22 (ottimizzazione) userà il gradiente per trovare i punti critici e l'Hessiana — simmetrica grazie a Schwarz — per classificarli.

**Verso il resto della matematica.** Le curve di livello riappariranno come curve di indifferenza e isoquanti in microeconomia, come isoterme e isobare in fisica, come linee di contorno in ottimizzazione. Le derivate parziali sono il linguaggio delle equazioni alle derivate parziali (fisica, finanza: l'equazione di Black-Scholes è una PDE). Il teorema di Schwarz è ciò che rende ben posta la matrice Hessiana e, in economia, garantisce la coerenza delle condizioni del secondo ordine.

**Idee da portare via.**
- Una funzione $f:\mathbb{R}^n\to\mathbb{R}$ si «vede» col grafico (una superficie) o con le curve/superfici di livello (isoquanti, indifferenza); la spaziatura delle curve codifica la ripidità.
- Il limite in più variabili esiste solo se **tutti** i cammini concordano. Il metodo dei due cammini *smonta* un limite; per *costruirlo* servono stime della norma o coordinate polari.
- La derivata parziale $\partial f/\partial x_i$ è la derivata 1D ottenuta congelando le altre variabili; interpretazioni: pendenza di una sezione, grandezza marginale, sensibilità *ceteris paribus*.
- **Teorema di Schwarz:** con miste continue, $f_{xy}=f_{yx}$. Rende simmetrica l'Hessiana.

**Formule chiave.**
$$\frac{\partial f}{\partial x_i}(\mathbf{x}_0)=\lim_{h\to0}\frac{f(\mathbf{x}_0+h\mathbf{e}_i)-f(\mathbf{x}_0)}{h},\qquad L_c=\{f=c\},\qquad f_{xy}=f_{yx}\ (C^2).$$

---

## 6. Esercizi

**Introduttivi.**

**E1.** Trova il dominio di $f(x,y)=\ln(x-y)$ e disegna a parole tre curve di livello.

<details class="dim-tecnica"><summary>Soluzione E1</summary>

Dominio: $x-y>0$, cioè il semipiano **sotto** la retta $y=x$. Curve di livello $\ln(x-y)=c\iff x-y=e^c$: rette parallele $y=x-e^c$, sempre più «in basso» al crescere di $c$. (Per $c=0$: $y=x-1$.)

</details>

**E2.** Calcola $f_x$ e $f_y$ per $f(x,y)=4x^3y^2-5xy+7$.

<details class="dim-tecnica"><summary>Soluzione E2</summary>

$f_x=12x^2y^2-5y$; $f_y=8x^3y-5x$.

</details>

**E3.** Per $f(x,y)=\sin(x^2+y)$ calcola $f_x$ e $f_y$.

<details class="dim-tecnica"><summary>Soluzione E3</summary>

Regola della catena parziale. $f_x=\cos(x^2+y)\cdot 2x=2x\cos(x^2+y)$; $f_y=\cos(x^2+y)\cdot 1=\cos(x^2+y)$.

</details>

**Standard.**

**E4.** Mostra che $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3-y^3}{x^2+y^2}=0$ con una stima della norma.

<details class="dim-tecnica"><summary>Soluzione E4</summary>

$\left|\frac{x^3-y^3}{x^2+y^2}\right|\le \frac{|x|^3+|y|^3}{x^2+y^2}$. Poiché $|x|\le\|(x,y)\|$ e $x^2\le x^2+y^2$: $\frac{|x|^3}{x^2+y^2}=\frac{x^2}{x^2+y^2}|x|\le|x|\le\|(x,y)\|$, e analogamente per il termine in $y$. Dunque $|f|\le 2\|(x,y)\|\to0$. Scegliendo $\delta=\varepsilon/2$ si conclude. Il limite è $0$.

</details>

**E5.** Studia $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^4}$ (suggerimento: prova le rette *e* la parabola $x=y^2$).

<details class="dim-tecnica"><summary>Soluzione E5</summary>

Lungo $y=mx$: $\frac{x\cdot m^2x^2}{x^2+m^4x^4}=\frac{m^2x^3}{x^2(1+m^4x^2)}=\frac{m^2x}{1+m^4x^2}\to0$. Tutte le rette danno $0$. Lungo $x=y^2$: $\frac{y^2\cdot y^2}{y^4+y^4}=\frac{y^4}{2y^4}=\frac12\to\frac12$. Retta e parabola danno valori diversi ⇒ **il limite non esiste**. (Illustra perché le rette non bastano.)

</details>

**E6.** Per $f(x,y)=\dfrac{x}{y}$ (con $y\neq0$) calcola $f_x,f_y,f_{xx},f_{yy},f_{xy},f_{yx}$ e verifica Schwarz.

<details class="dim-tecnica"><summary>Soluzione E6</summary>

$f_x=\frac1y$, $f_y=-\frac{x}{y^2}$. $f_{xx}=0$; $f_{yy}=\frac{2x}{y^3}$; $f_{xy}=\partial_y(1/y)=-\frac1{y^2}$; $f_{yx}=\partial_x(-x/y^2)=-\frac1{y^2}$. Miste uguali ✓.

</details>

**E7.** Trova e descrivi le curve di livello di $f(x,y)=y-x^2$. Che superficie è il grafico?

<details class="dim-tecnica"><summary>Soluzione E7</summary>

$y-x^2=c\iff y=x^2+c$: parabole verticali traslate in altezza. Il grafico è una **grondaia parabolica** (cilindro parabolico): fisso in $y$-$z$ la forma di parabola, invariante lungo una direzione.

</details>

**Avanzati / applicativi.**

**E8.** Verifica che $f(x,y)=\ln\sqrt{x^2+y^2}$ soddisfa l'**equazione di Laplace** $f_{xx}+f_{yy}=0$ per $(x,y)\neq(0,0)$.

<details class="dim-tecnica"><summary>Soluzione E8</summary>

Scrivi $f=\tfrac12\ln(x^2+y^2)$. Allora $f_x=\frac{x}{x^2+y^2}$. Derivando: $f_{xx}=\frac{(x^2+y^2)-x\cdot2x}{(x^2+y^2)^2}=\frac{y^2-x^2}{(x^2+y^2)^2}$. Per simmetria $f_{yy}=\frac{x^2-y^2}{(x^2+y^2)^2}$. Somma $=0$ ✓. ($f$ è armonica: comparirà in fisica e in finanza.)

</details>

**E9.** Per la Cobb-Douglas $Q(K,L)=K^{1/3}L^{2/3}$ mostra che vale $K\,Q_K+L\,Q_L=Q$ (teorema di Eulero sulle funzioni omogenee di grado $1$) e interpreta economicamente.

<details class="dim-tecnica"><summary>Soluzione E9</summary>

$Q_K=\tfrac13K^{-2/3}L^{2/3}$, $Q_L=\tfrac23K^{1/3}L^{-1/3}$. Allora $K Q_K=\tfrac13 K^{1/3}L^{2/3}=\tfrac13 Q$ e $L Q_L=\tfrac23 K^{1/3}L^{2/3}=\tfrac23 Q$; somma $=Q$ ✓. *Interpretazione:* con rendimenti di scala costanti, se ogni fattore è pagato al suo prodotto marginale, il prodotto totale è esattamente distribuito tra i fattori (esaurimento del prodotto).

</details>

**E10.** Considera $f(x,y)=\dfrac{x^2 y^2}{x^2 y^2+(x-y)^2}$ prolungata con $f=0$ sugli assi. Studia il limite in $(0,0)$ lungo gli assi e lungo la retta $y=x$; concludi sulla continuità.

<details class="dim-tecnica"><summary>Soluzione E10</summary>

Sugli assi $f=0$ (numeratore nullo), quindi lungo l'asse $x$ e l'asse $y$ il limite è $0$. Lungo $y=x$: numeratore $x^4$, denominatore $x^4+0=x^4$, quindi $f(x,x)=1\to1$. Cammini diversi danno $0$ e $1$: **il limite non esiste**, dunque $f$ non è continua in $(0,0)$ (per quanto valga $0$ lungo entrambi gli assi). Ancora una volta: la continuità lungo gli assi non implica la continuità congiunta.

</details>
