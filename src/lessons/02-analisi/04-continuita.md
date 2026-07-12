---
id: analisi-04-continuita
titolo: "Continuità e teoremi fondamentali"
materia: analisi
argomento: "Limiti e continuità"
modulo: "Continuità"
livello: universitario
slug: analisi-04-continuita

# legacy
subject: analisi
topic_it: "Limiti e continuità"
topic_en: "Limits and continuity"
title_it: "Continuità e teoremi fondamentali"
title_en: "Continuity and fundamental theorems"
level: blue
order: 4
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Appunti di Matematica 1"
source_chapter: "OpenStax Cap. 2.4; Villanacci Cap. 7"

prerequisiti:
  - analisi-01-limite-intuitivo
  - analisi-02-limite-epsilon-delta
  - analisi-03-calcolo-limiti
  - base-10-funzioni
  - base-08-disequazioni

collegamenti:
  - analisi-05-limiti-notevoli-asintoti
  - analisi-06-derivata-definizione
  - analisi-08-teoremi-differenziale
  - analisi-16-successioni
  - analisi-22-ottimizzazione-lagrange

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 2.4 (Continuity), Cap. 4.0 (IVT)"
    note: "definizione a tre condizioni; classificazione delle discontinuità; enunciati di Weierstrass (Extreme Value Theorem) e valori intermedi seguono OpenStax"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 7 — Continuità"
    note: "priorità sulla notazione e sulle convenzioni d'esame; caratterizzazione sequenziale della continuità come strumento primario per negare la continuità (metodo d'esame); definizione a intorni; dimostrazione di Bolzano per bisezione"

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

Prendi una matita e disegna una curva su un foglio senza mai staccarla dalla carta. Qualunque tracciato tu ottenga — una sinusoide, una spirale, il profilo di una collina — è l'immagine intuitiva di una funzione **continua**: nessun salto, nessun buco, nessuna esplosione verso l'infinito. La continuità è la traduzione matematica di un'idea che usiamo ogni giorno senza nominarla: *le cose cambiano gradualmente*.

Perché serve un concetto apposito? Perché quasi tutte le grandezze fisiche che osserviamo evolvono con continuità. La temperatura di una tazza di caffè che si raffredda non passa da 80° a 40° saltando i valori intermedi: attraversa 79°, 78°, e ogni valore fino a 40°. La posizione di un'automobile, la pressione dell'aria, la carica di una batteria: tutte funzioni continue del tempo. Un salto istantaneo richiederebbe una velocità di variazione infinita, e la natura macroscopica non lo permette. La continuità è quindi il linguaggio naturale per modellare il mondo che cambia con regolarità.

Ma c'è una ragione ancora più profonda, interna alla matematica. La continuità è la chiave che apre le porte dei teoremi più potenti dell'analisi. La domanda guida di questa lezione è: *quali garanzie ci dà sapere che una funzione è continua?* La risposta è sorprendentemente ricca. Il **teorema di Weierstrass** assicura che una funzione continua su un intervallo chiuso e limitato raggiunge sempre un valore massimo e un valore minimo — il fondamento di ogni problema di ottimizzazione, dall'economia all'ingegneria. Il **teorema degli zeri di Bolzano** garantisce che se una funzione continua cambia segno, deve annullarsi da qualche parte — il principio su cui si basano gli algoritmi numerici che risolvono equazioni impossibili da risolvere a mano.

In altre parole: la continuità non è solo un'osservazione estetica sul grafico. È un'ipotesi che, una volta verificata, ti regala esistenza — di massimi, di minimi, di soluzioni. Questa lezione costruisce il concetto a partire dal limite (che già conosci), lo rende preciso, ne classifica le violazioni e dimostra i teoremi che ne fanno lo strumento più prezioso dell'analisi elementare.

---

## 2. Teoria

### 2.1 Continuità in un punto: la definizione

L'idea intuitiva "il grafico non si spezza in $x_0$" si formalizza chiedendo che il valore della funzione nel punto coincida con la sua tendenza limite avvicinandosi al punto.

**Definizione (continuità in un punto).** Sia $f$ definita in un intorno di $x_0$. La funzione $f$ è **continua in $x_0$** se sono soddisfatte tutte e tre le condizioni seguenti, simultaneamente:

1. $f(x_0)$ è **definita** — cioè $x_0$ appartiene al dominio di $f$;
2. $\displaystyle\lim_{x\to x_0} f(x)$ **esiste ed è finito**;
3. $\displaystyle\lim_{x\to x_0} f(x) = f(x_0)$ — il limite coincide con il valore.

Leggiamo la definizione simbolo per simbolo. La condizione 1 esclude i "buchi" nel dominio: non ha senso chiedersi se una funzione è continua dove non è nemmeno definita. La condizione 2 esclude i salti e le esplosioni: perché il limite bilatero esista, i due limiti unilaterali devono esistere finiti e coincidere. La condizione 3 è la vera richiesta di continuità: non basta che la funzione tenda a *qualcosa* e che valga *qualcosa*, i due numeri devono essere lo **stesso** numero. È la condizione 3 che "cuce" il valore puntuale al comportamento limite.

Se anche una sola delle tre condizioni cade, $f$ **non è continua** in $x_0$, e diremo che $x_0$ è un punto di **discontinuità**.

*Micro-esempio.* $f(x)=x^2+1$ in $x_0=3$: (1) $f(3)=10$, definita; (2) $\lim_{x\to 3}(x^2+1)=10$, esiste finito per l'algebra dei limiti; (3) limite $=$ valore. Tutte e tre le condizioni valgono: $f$ è continua in $3$. Invece $g(x)=\dfrac{\sin x}{x}$ in $x_0=0$: il limite esiste e vale $1$ (limite notevole), ma $g(0)$ non è definita — cade la condizione 1, quindi $g$ non è continua in $0$.

```checkpoint
[domanda]
Per la funzione $f(x)=\dfrac{\sin x}{x}$ in $x_0=0$, quale delle tre condizioni di continuità cade? E se definissimo $f(0):=5$, quale condizione cadrebbe allora?
[risposta]
Così com'è, cade la **condizione 1**: $f(0)$ non è definita (divisione per zero), mentre il limite esiste e vale $1$. Definendo $f(0):=5$, la condizione 1 è soddisfatta e la 2 pure ($\lim_{x\to 0}\frac{\sin x}{x}=1$ esiste finito), ma cade la **condizione 3**: $\lim_{x\to 0} f(x)=1\neq 5=f(0)$. Solo con $f(0):=1$ la funzione diventa continua in $0$.
```

### 2.2 La caratterizzazione $\varepsilon$–$\delta$ e la differenza con il limite

La continuità si può enunciare direttamente nel linguaggio $\varepsilon$–$\delta$, ed è illuminante confrontarla con la [definizione di limite](/analisi/limiti-e-continuita/02-limite-epsilon-delta).

**Definizione ($\varepsilon$–$\delta$ di continuità).** $f$ è continua in $x_0$ se

$$\forall \varepsilon > 0 \;\; \exists\, \delta > 0 \;:\; |x - x_0| < \delta \;\Longrightarrow\; |f(x) - f(x_0)| < \varepsilon.$$

In parole: per ogni tolleranza $\varepsilon$ sui valori, esiste un raggio $\delta$ attorno a $x_0$ tale che tutti i punti a distanza minore di $\delta$ da $x_0$ hanno immagine a distanza minore di $\varepsilon$ da $f(x_0)$.

Confrontiamola con la definizione di limite $\lim_{x\to x_0} f(x) = \ell$:

$$\forall \varepsilon > 0 \;\; \exists\, \delta > 0 \;:\; 0 < |x - x_0| < \delta \;\Longrightarrow\; |f(x) - \ell| < \varepsilon.$$

Due differenze, entrambe sostanziali:

- Nel limite compare $0 < |x-x_0|$: si **esclude** il punto $x_0$ (intorno *bucato*), perché il limite descrive il comportamento *avvicinandosi* a $x_0$, indipendentemente da cosa accade *in* $x_0$. Nella continuità la condizione è $|x-x_0| < \delta$, che **include** $x = x_0$. Includere il punto è lecito proprio perché, quando $x = x_0$, si ha $|f(x_0) - f(x_0)| = 0 < \varepsilon$ automaticamente: la richiesta nel punto è gratis.
- Al posto di un limite generico $\ell$ compare esattamente $f(x_0)$. La continuità *sa già* verso cosa deve tendere la funzione: il proprio valore nel punto.

Una terza formulazione, molto usata negli esercizi, esprime la continuità come **permutabilità di limite e funzione**:

$$\lim_{x\to x_0} f(x) = f\!\left(\lim_{x\to x_0} x\right) = f(x_0).$$

Cioè, per le funzioni continue, il limite "entra dentro" il simbolo di funzione. È esattamente ciò che facciamo quando calcoliamo $\lim_{x\to 3}(x^2+1) = 3^2+1 = 10$ per sostituzione diretta: stiamo usando (spesso senza dirlo) la continuità del polinomio.

### 2.3 La caratterizzazione sequenziale

**Caratterizzazione sequenziale.** $f$ è continua in $x_0$ se e solo se per **ogni** successione $(x_n)$ con $x_n \to x_0$ si ha $f(x_n) \to f(x_0)$.

La parola chiave è "ogni": la continuità richiede che *tutte* le strade che portano a $x_0$ producano lo stesso comportamento nei valori. Questo rende la forma sequenziale comodissima per *negare* la continuità: basta esibire una **singola** successione $x_n \to x_0$ lungo la quale $f(x_n)$ non tende a $f(x_0)$ — oppure due successioni lungo le quali i valori tendono a limiti diversi. È il metodo atteso all'esame per le funzioni oscillanti, dove il calcolo diretto dei limiti unilaterali non decide (li useremo nell'Esempio 6).

*Micro-esempio.* La funzione segno $\operatorname{sgn}(x)$ non è continua in $0$: la successione $x_n=\tfrac1n\to 0$ dà $\operatorname{sgn}(x_n)=1\to 1$, mentre $x_n'=-\tfrac1n\to 0$ dà $\operatorname{sgn}(x_n')=-1\to -1$. Due successioni, due limiti diversi: nessun valore $\operatorname{sgn}(0)$ può renderla continua.

### 2.4 Continuità su un intervallo

La continuità puntuale si estende a insiemi.

- $f$ è **continua su un intervallo aperto** $(a,b)$ se è continua in ogni suo punto.
- $f$ è **continua sull'intervallo chiuso** $[a,b]$ se è continua su $(a,b)$ e inoltre è **continua da destra in $a$** ($\lim_{x\to a^+} f(x) = f(a)$) e **continua da sinistra in $b$** ($\lim_{x\to b^-} f(x) = f(b)$).

Agli estremi si richiede solo la continuità *unilaterale* perché fuori da $[a,b]$ la funzione potrebbe non essere definita: sarebbe assurdo pretendere un limite bilatero in $a$ se a sinistra di $a$ non c'è nulla.

**Continuità da destra / da sinistra in un punto interno.** In generale, $f$ è continua da destra in $x_0$ se $\lim_{x\to x_0^+} f(x) = f(x_0)$, e da sinistra se $\lim_{x\to x_0^-} f(x) = f(x_0)$. Una funzione è continua in $x_0$ se e solo se è continua sia da destra sia da sinistra in $x_0$ (conseguenza diretta del [teorema bilatero⇔unilaterali](/analisi/limiti-e-continuita/02-limite-epsilon-delta)).

*Micro-esempio.* $f(x)=\sqrt{x}$ è continua su $[0,+\infty)$: nei punti interni è continua in senso bilatero; in $x_0=0$ è continua **da destra** ($\lim_{x\to 0^+}\sqrt{x}=0=f(0)$), e questo basta perché a sinistra di $0$ la funzione non è definita.

### 2.5 Operazioni che preservano la continuità

**Teorema (algebra delle funzioni continue).** Se $f$ e $g$ sono continue in $x_0$, allora sono continue in $x_0$ anche:

- la somma $f+g$ e la differenza $f-g$;
- il prodotto $f\cdot g$ e, per ogni costante $c$, il multiplo $c\,f$;
- il quoziente $f/g$, **purché** $g(x_0)\neq 0$;
- il valore assoluto $|f|$ e la potenza $f^n$ con $n\in\mathbb{N}$.

La dimostrazione discende direttamente dall'[algebra dei limiti](/analisi/limiti-e-continuita/03-calcolo-limiti): ad esempio $\lim_{x\to x_0}(f+g)(x)=\lim f + \lim g = f(x_0)+g(x_0)=(f+g)(x_0)$.

**Teorema (continuità della funzione composta).** Se $g$ è continua in $x_0$ e $f$ è continua in $g(x_0)$, allora la composta $f\circ g$ è continua in $x_0$; in particolare

$$\lim_{x\to x_0} f\big(g(x)\big) = f\!\left(\lim_{x\to x_0} g(x)\right) = f\big(g(x_0)\big).$$

Lo dimostriamo in §3.3.

**Conseguenza operativa.** Le funzioni elementari sono continue nei loro domini naturali: polinomi (ovunque), funzioni razionali (dove il denominatore non si annulla), $\sin$, $\cos$ (ovunque), $\tan$ (dove $\cos\neq 0$), $e^x$ (ovunque), $\ln$ (su $(0,+\infty)$), radici, potenze. Ogni funzione costruita da queste con un numero finito di somme, prodotti, quozienti e composizioni è continua dove è definita. Questo è il motivo per cui, nella pratica, si calcolano moltissimi limiti "per sostituzione": si sta sfruttando la continuità.

*Micro-esempio.* $h(x)=e^{\cos x}\cdot\ln(1+x^2)$ è continua su tutto $\mathbb{R}$: $\cos x$ è continua, $e^t$ è continua, quindi $e^{\cos x}$ è continua (composta); $1+x^2\ge 1>0$ sempre, quindi $\ln(1+x^2)$ è continua (composta con argomento nel dominio di $\ln$); il prodotto di continue è continuo.

### 2.6 Classificazione delle discontinuità

Se $f$ non è continua in $x_0$, il *tipo* di discontinuità dipende dal comportamento dei limiti unilaterali $\ell^- = \lim_{x\to x_0^-} f(x)$ e $\ell^+ = \lim_{x\to x_0^+} f(x)$.

**Discontinuità eliminabile.** Il limite bilatero $\lim_{x\to x_0} f(x) = \ell$ **esiste ed è finito** (quindi $\ell^-=\ell^+=\ell$), ma la condizione 3 fallisce perché $f(x_0)$ non è definita, oppure è definita con un valore $\neq \ell$. Si chiama *eliminabile* perché ridefinendo $f(x_0) := \ell$ si ottiene una funzione continua in $x_0$: la discontinuità era solo un difetto puntuale, un buco o un punto "fuori posto". Prototipo: $f(x) = \dfrac{\sin x}{x}$ in $x_0 = 0$, dove il limite vale $1$ ma $f(0)$ non è definita.

**Discontinuità di salto (o di prima specie).** Entrambi i limiti unilaterali **esistono finiti** ma sono **diversi**: $\ell^- \neq \ell^+$. La funzione "salta" da $\ell^-$ a $\ell^+$; l'ampiezza del salto è $|\ell^+ - \ell^-|$. Il limite bilatero non esiste (i due unilaterali non coincidono). Prototipo: la funzione segno $\operatorname{sgn}(x)$, con salto di ampiezza $2$ in $x_0=0$.

**Discontinuità essenziale (o di seconda specie).** **Almeno uno** dei due limiti unilaterali non esiste finito — perché è infinito, oppure perché non esiste affatto (oscillazione). Prototipi: $f(x)=\dfrac1x$ in $0$ (limiti unilaterali $\pm\infty$: discontinuità con asintoto verticale) e $f(x)=\sin\!\big(\tfrac1x\big)$ in $0$ (nessun limite unilaterale, per oscillazione sempre più rapida). Questa discontinuità **non è riparabile** ridefinendo il valore nel punto.

Il grafico seguente mostra una discontinuità di salto: la funzione a tratti che vale $x+2$ per $x<0$ e $x^2+0{.}5$ per $x\ge 0$ salta bruscamente in $x=0$, dove il limite sinistro ($2$) e il limite destro ($0{.}5$) non coincidono. Osserva come i due rami "non si toccano" nel punto di giunzione: è la firma visiva del salto.

```plot
{
  "title": "Discontinuità di salto in x=0",
  "fn": "(x < 0) ? x + 2 : x*x + 0.5",
  "domain": [-3, 3],
  "yDomain": [-1, 5],
  "label1": "f(x) a tratti, salta in x=0"
}
```

```checkpoint
[domanda]
Classifica la discontinuità in $x_0=0$ in ciascuno dei tre casi: (a) $\ell^-=3$, $\ell^+=3$, $f(0)=7$; (b) $\ell^-=3$, $\ell^+=5$, $f(0)=3$; (c) $\ell^-=3$, $\ell^+=+\infty$.
[risposta]
(a) Il limite bilatero esiste finito ($=3$) ma è diverso da $f(0)=7$: **eliminabile** (si ripara con $f(0):=3$). (b) Unilaterali finiti ma diversi: **salto**, ampiezza $|5-3|=2$; il valore $f(0)=3$ non cambia la classificazione. (c) Un unilaterale è infinito: **essenziale**, non riparabile con alcuna ridefinizione di $f(0)$.
```

### 2.7 La condizione di raccordo per una funzione a tratti

Un caso pratico ricorrente: data una funzione definita a tratti

$$f(x) = \begin{cases} g(x) & x \le x_0 \\ h(x) & x > x_0 \end{cases}$$

con $g$ e $h$ continue, quando $f$ è continua nel punto di raccordo $x_0$? Deriviamo la condizione dalla definizione.

Serve $\lim_{x\to x_0} f(x) = f(x_0)$. Poiché a sinistra vale $g$ e a destra vale $h$:

$$\lim_{x\to x_0^-} f(x) = \lim_{x\to x_0^-} g(x) = g(x_0) \quad(\text{$g$ continua}),$$
$$\lim_{x\to x_0^+} f(x) = \lim_{x\to x_0^+} h(x) = h(x_0) \quad(\text{$h$ continua}).$$

Il valore nel punto è $f(x_0)=g(x_0)$ (per come è scritta la definizione, $x_0$ ricade nel ramo $\le$). Perché il limite bilatero esista e coincida con $f(x_0)$ occorre e basta che i due limiti unilaterali siano uguali:

$$\boxed{\,g(x_0) = h(x_0)\,}$$

**Condizione di raccordo continuo:** i due rami devono assumere lo stesso valore nel punto di giunzione. È questa l'equazione che si risolve quando un esercizio chiede "per quale $k$ la funzione è continua?": si impone l'uguaglianza dei valori dei due rami in $x_0$ e si ricava $k$.

L'elemento interattivo seguente serve a *vedere* la condizione di raccordo. La funzione vale $k\cdot x^2$ per $x<1$ e $x + (k-1)$ per $x\ge 1$; il parametro $k$ controlla entrambi i rami. Muovendo lo slider, cerca il valore che salda perfettamente i due pezzi in $x=1$: per $k=1$ il ramo sinistro vale $1\cdot 1^2=1$ e il destro vale $1+0=1$, i due rami combaciano e la funzione è continua; per $k\neq 1$ compare un salto visibile. Manipolando il parametro capisci che la continuità di una funzione a tratti è una condizione *fragile*, che si rompe appena i due rami smettono di coincidere nel punto.

```slider
{
  "title": "Continuità di una funzione a tratti: k=1 salda i due rami in x=1",
  "fn": "(x < 1) ? a*x*x : x + (a - 1)",
  "domain": [-1, 3],
  "yDomain": [-1, 6],
  "pname": "a",
  "pmin": 0.2,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Parametro k (k=1 ⇒ continua in x=1)",
  "label1": "f(x) a tratti"
}
```

### 2.8 Il teorema di Weierstrass (dei valori estremi)

**Teorema (Weierstrass).** Se $f$ è continua sull'intervallo **chiuso e limitato** $[a,b]$, allora:

1. $f$ è **limitata** su $[a,b]$: esiste $M>0$ tale che $|f(x)|\le M$ per ogni $x\in[a,b]$;
2. $f$ **assume massimo e minimo assoluti**: esistono $x_m, x_M \in [a,b]$ tali che

$$f(x_m) \le f(x) \le f(x_M) \qquad \forall\, x\in[a,b].$$

Le due ipotesi — intervallo **chiuso** e **limitato** (in $\mathbb{R}^n$ si direbbe *compatto*) — sono entrambe indispensabili, come mostreranno i controesempi nell'Esempio 7. Il teorema garantisce l'**esistenza** del massimo e del minimo, non fornisce un metodo per trovarli: la localizzazione dei punti estremi è compito del [calcolo differenziale](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale).

*Micro-esempio.* $f(x)=\sin x + \tfrac{x}{10}$ è continua su $[0, 4\pi]$, chiuso e limitato: Weierstrass garantisce che massimo e minimo assoluti *esistono*, ancora prima di saperli calcolare. Su $(0,4\pi)$ aperto, invece, il teorema non si applica — e infatti potrebbe accadere che l'estremo sia raggiunto proprio in un estremo escluso.

### 2.9 Il teorema degli zeri (Bolzano) e dei valori intermedi

**Teorema (degli zeri, Bolzano 1817).** Se $f$ è continua su $[a,b]$ e $f(a)$ e $f(b)$ hanno **segni opposti** (cioè $f(a)\cdot f(b) < 0$), allora esiste almeno un punto $c\in(a,b)$ tale che $f(c)=0$.

**Teorema dei valori intermedi (TVI).** Se $f$ è continua su $[a,b]$ e $k$ è un qualsiasi valore compreso tra $f(a)$ e $f(b)$, allora esiste almeno un $c\in(a,b)$ tale che $f(c)=k$.

Il TVI è la versione "traslata" di Bolzano: applicando il teorema degli zeri alla funzione ausiliaria $g(x)=f(x)-k$ (anch'essa continua) si ottiene esattamente il TVI (dimostrazione in §3.2). Intuitivamente il TVI dice che una funzione continua **non può saltare** un valore: per passare da $f(a)$ a $f(b)$ deve attraversare tutti i valori intermedi. Ovvio sul disegno, ma la dimostrazione rigorosa richiede la **completezza di $\mathbb{R}$** (la proprietà dell'estremo superiore, che distingue $\mathbb{R}$ da $\mathbb{Q}$): la vedremo all'opera in §3.1.

Una conseguenza notevole: se $f$ è continua su un intervallo $I$, allora l'immagine $f(I)$ è ancora un intervallo. La continuità *conserva la connessione*.

```checkpoint
[domanda]
La funzione $\operatorname{sgn}(x)$ vale $-1$ in $x=-1$ e $+1$ in $x=1$: cambia segno su $[-1,1]$. Perché NON possiamo concludere da Bolzano che ha uno zero in $(-1,1)$? (E infatti $\operatorname{sgn}(x)\neq 0$ per ogni $x\neq 0$... ma $\operatorname{sgn}(0)=0$: il teorema c'entra?)
[risposta]
Bolzano richiede la **continuità su tutto** $[a,b]$, e $\operatorname{sgn}$ è discontinua in $0$ (salto): l'ipotesi cade, quindi il teorema non è applicabile e non garantisce nulla. Il fatto che $\operatorname{sgn}(0)=0$ è una coincidenza della definizione, non una conseguenza di Bolzano: basta modificare la funzione ponendo il valore $1$ in $0$ per avere una funzione che cambia segno su $[-1,1]$ e non si annulla **mai**. Morale: senza continuità, il cambio di segno non garantisce zeri.
```

---

## 3. Dimostrazioni

### 3.1 Teorema degli zeri (metodo di bisezione)

Supponiamo, per fissare le idee, $f(a) < 0 < f(b)$ (il caso opposto è simmetrico). L'idea della dimostrazione è **costruttiva**: dimezziamo ripetutamente l'intervallo, scegliendo ogni volta la metà in cui la funzione continua a cambiare segno. Gli estremi degli intervalli formano due successioni che si stringono su un punto $c$; la completezza di $\mathbb{R}$ garantisce che $c$ esiste, e la continuità di $f$ forza $f(c)=0$.

**La costruzione.** Poniamo $a_0=a$, $b_0=b$; vale $f(a_0)<0<f(b_0)$. Dato $[a_n,b_n]$ con $f(a_n)\le 0 \le f(b_n)$, sia $c_n=\dfrac{a_n+b_n}{2}$ il punto medio. Tre casi:

- se $f(c_n)=0$, abbiamo trovato uno zero e ci fermiamo;
- se $f(c_n)>0$, poniamo $a_{n+1}=a_n$ e $b_{n+1}=c_n$;
- se $f(c_n)<0$, poniamo $a_{n+1}=c_n$ e $b_{n+1}=b_n$.

In ogni caso il nuovo intervallo $[a_{n+1},b_{n+1}]$ conserva la proprietà $f(a_{n+1})\le 0 \le f(b_{n+1})$ e ha **ampiezza dimezzata**:

$$b_{n+1}-a_{n+1} = \frac{b_n-a_n}{2}\quad\Longrightarrow\quad b_n-a_n = \frac{b-a}{2^n}.$$

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi la verifica di convergenza e conclusione</summary>

**Convergenza (qui entra la completezza di $\mathbb{R}$).** La successione $(a_n)$ è monotona non decrescente per costruzione (a ogni passo $a_{n+1}$ è $a_n$ oppure il punto medio $c_n>a_n$) ed è limitata superiormente da $b$ (ogni $a_n$ resta dentro $[a,b]$). Analogamente $(b_n)$ è monotona non crescente e limitata inferiormente da $a$. Per il teorema di convergenza delle successioni monotone limitate — che è una conseguenza diretta della completezza di $\mathbb{R}$ — entrambe le successioni convergono. Poiché $b_n-a_n=\dfrac{b-a}{2^n}\to 0$, i due limiti coincidono:

$$\lim_{n\to\infty} a_n = \lim_{n\to\infty} b_n = c \in [a,b].$$

(Se i limiti fossero $\alpha\neq\beta$, si avrebbe $b_n-a_n\to \beta-\alpha\neq 0$, contro il calcolo esplicito dell'ampiezza.)

**Conclusione (qui entra la continuità).** Per la caratterizzazione sequenziale della continuità (§2.3), da $a_n\to c$ segue $f(a_n)\to f(c)$, e da $b_n\to c$ segue $f(b_n)\to f(c)$. Ma per costruzione $f(a_n)\le 0$ per ogni $n$: per il teorema della permanenza del segno (passaggio al limite nelle disuguaglianze larghe),

$$f(c)=\lim_{n\to\infty} f(a_n) \le 0.$$

Analogamente $f(b_n)\ge 0$ per ogni $n$ implica $f(c)=\lim_{n\to\infty} f(b_n)\ge 0$. Le due disuguaglianze $f(c)\le 0$ e $f(c)\ge 0$ forzano $f(c)=0$. $\blacksquare$

</details>

**Osservazioni.** (i) La dimostrazione fornisce un **algoritmo** (la bisezione) per approssimare lo zero. Dopo $n$ passi lo zero è localizzato in un intervallo di ampiezza $\dfrac{b-a}{2^n}$; prendendo il punto medio, l'errore è al più $e_n = \dfrac{b-a}{2^{n+1}}$. Per garantire una tolleranza $\tau$ si impone $\dfrac{b-a}{2^{n+1}} \le \tau$, da cui

$$n \ge \log_2\!\left(\frac{b-a}{\tau}\right) - 1.$$

Ad esempio, con $b-a=1$ e $10$ cifre decimali ($\tau=10^{-10}$) servono circa $\log_2(10^{10})-1 \approx 33$ iterazioni: la crescita è **logaritmica** nella precisione, e raddoppiare le cifre corrette costa solo un numero costante di passi in più.

(ii) La completezza di $\mathbb{R}$ è irrinunciabile: su $\mathbb{Q}$ la funzione $f(x)=x^2-2$ è "continua", cambia segno su $[1,2]$, ma non ha zeri razionali perché $\sqrt2\notin\mathbb{Q}$. È esattamente la completezza a "riempire i buchi" e garantire l'esistenza di $c$.

### 3.2 Teorema dei valori intermedi (da Bolzano)

Sia $f$ continua su $[a,b]$ e $k$ compreso tra $f(a)$ e $f(b)$; supponiamo $f(a) < k < f(b)$ (l'altro caso è simmetrico). Definiamo la funzione ausiliaria

$$g(x) = f(x) - k.$$

$g$ è continua su $[a,b]$ perché differenza di una funzione continua e di una costante (§2.5). Valutiamo agli estremi:

$$g(a) = f(a)-k < 0, \qquad g(b) = f(b)-k > 0.$$

Quindi $g(a)\cdot g(b) < 0$. Per il teorema degli zeri (§3.1) esiste $c\in(a,b)$ con $g(c)=0$, cioè $f(c)-k=0$, ovvero $f(c)=k$. $\blacksquare$

Questa dimostrazione mostra un pattern ricorrente in analisi: **ricondurre un teorema a un altro tramite una funzione ausiliaria**. Il TVI non richiede una nuova idea, solo una traslazione verticale che riporta il problema al caso "zero".

### 3.3 Continuità della funzione composta

Siano $g$ continua in $x_0$ e $f$ continua in $y_0 := g(x_0)$. Vogliamo mostrare che $f\circ g$ è continua in $x_0$. L'idea è una **catena di tolleranze**: la continuità di $f$ (funzione esterna) traduce la tolleranza finale $\varepsilon$ in una tolleranza intermedia $\eta$ sui valori di $g$; la continuità di $g$ (funzione interna) traduce $\eta$ in un raggio $\delta$ sulle $x$. Le due implicazioni si concatenano.

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi i tre passi della catena</summary>

Fissiamo $\varepsilon>0$; cerchiamo $\delta>0$ con $|x-x_0|<\delta \Rightarrow |f(g(x))-f(g(x_0))|<\varepsilon$.

**Passo 1.** Poiché $f$ è continua in $y_0$, applicando la definizione $\varepsilon$–$\delta$ di continuità (§2.2) a $f$ con la tolleranza $\varepsilon$, esiste $\eta>0$ tale che

$$|y-y_0|<\eta \;\Longrightarrow\; |f(y)-f(y_0)|<\varepsilon.$$

**Passo 2.** Poiché $g$ è continua in $x_0$, applicandone la definizione con la tolleranza $\eta$ appena trovata (usiamo $\eta$ nel ruolo dell'"$\varepsilon$" di $g$ — è lecito perché la definizione vale per *ogni* tolleranza positiva, e $\eta>0$), esiste $\delta>0$ tale che

$$|x-x_0|<\delta \;\Longrightarrow\; |g(x)-g(x_0)|<\eta, \quad\text{cioè}\quad |g(x)-y_0|<\eta.$$

**Passo 3 — concatenazione.** Se $|x-x_0|<\delta$, per il Passo 2 il valore $y=g(x)$ soddisfa $|y-y_0|<\eta$; allora $y$ rientra nell'ipotesi del Passo 1, che dà $|f(y)-f(y_0)|<\varepsilon$, cioè $|f(g(x))-f(g(x_0))|<\varepsilon$. $\blacksquare$

</details>

Il cuore della dimostrazione è l'**ordine** in cui si scelgono le tolleranze: prima si fissa $\eta$ dalla continuità di $f$ (esterna), poi si usa quell'$\eta$ come "$\varepsilon$" per la continuità di $g$ (interna). È lo stesso meccanismo a catena della composizione dei limiti.

---

## 4. Esempi

### Esempio 1 — Verifica delle tre condizioni (introduttivo)

Stabilire se $f(x)=\dfrac{x^2-4}{x-2}$ è continua in $x_0=2$.

**Soluzione.** Condizione 1: $f(2)$ richiede il denominatore $2-2=0$, quindi $f(2)$ **non è definita**. La condizione 1 cade: $f$ non è continua in $2$. Osserviamo però che $\lim_{x\to 2}\dfrac{x^2-4}{x-2}=\lim_{x\to 2}(x+2)=4$ esiste finito. Si tratta dunque di una **discontinuità eliminabile**: ponendo $f(2):=4$ la funzione diventa continua. *Commento:* un limite finito che esiste, ma un valore mancante, è la firma della discontinuità eliminabile.

> ⚠️ **Errore comune — "il limite esiste" NON implica "la funzione è continua".** Da $\lim_{x\to 2}\frac{x^2-4}{x-2}=4$ qualcuno conclude che la funzione è continua in $2$. Ma il limite può esistere finito mentre $f(x_0)$ non è definita, o è definita ma diversa dal limite: mancano le condizioni 1 o 3. L'esistenza del limite è *necessaria* ma non *sufficiente* per la continuità.

### Esempio 2 — Discontinuità di salto (introduttivo)

Classificare la discontinuità di $h(x)=\begin{cases} 2x+1 & x<1 \\ x^2+3 & x\ge 1\end{cases}$ in $x_0=1$.

**Soluzione.** Limiti unilaterali: $\lim_{x\to 1^-} h(x)=2\cdot1+1=3$ e $\lim_{x\to 1^+} h(x)=1^2+3=4$. Entrambi finiti ma diversi: **discontinuità di salto**, ampiezza $|4-3|=1$. Il limite bilatero non esiste. *Commento:* qui $h(1)=4$ è definito, ma il problema è la condizione 2 (il limite non esiste), non la condizione 1.

### Esempio 3 — Determinare la costante di raccordo (standard)

Trovare $k$ affinché $f(x)=\begin{cases} kx^2-1 & x\le 2 \\ 3x-k & x>2\end{cases}$ sia continua in $x_0=2$.

**Soluzione.** Applichiamo la condizione di raccordo (§2.7): i due rami devono coincidere in $2$.

$$\lim_{x\to 2^-}(kx^2-1)=4k-1,\qquad \lim_{x\to 2^+}(3x-k)=6-k.$$

Imponiamo $4k-1=6-k \Rightarrow 5k=7 \Rightarrow k=\dfrac{7}{5}$.

*Verifica.* Con $k=\tfrac75$: $f(2)=4\cdot\tfrac75-1=\tfrac{23}{5}$ e $\lim_{x\to 2^+}=6-\tfrac75=\tfrac{23}{5}$. Coincidono: continua. $\square$

> ⚠️ **Errore comune — le funzioni a tratti NON sono automaticamente discontinue nel raccordo.** "È definita con due formule diverse, quindi in $x_0$ c'è per forza una discontinuità" è falso: ciò che conta non è avere due formule, ma se i due rami assumono lo stesso valore nel punto di giunzione. Verifica sempre i limiti unilaterali: se $g(x_0)=h(x_0)$ la funzione è continua nonostante la definizione a tratti — come qui con $k=7/5$.

### Esempio 4 — Esistenza di una radice via Bolzano (standard)

Dimostrare che $x^3-x-1=0$ ha almeno una soluzione in $[1,2]$.

**Soluzione.** Sia $f(x)=x^3-x-1$, polinomio, dunque continua su $[1,2]$. Valutiamo: $f(1)=1-1-1=-1<0$ e $f(2)=8-2-1=5>0$. Poiché $f(1)\cdot f(2)<0$ e $f$ è continua, per Bolzano esiste $c\in(1,2)$ con $f(c)=0$. $\square$ *(La radice è $c\approx 1.3247$, la costante plastica; con la bisezione bastano $\sim 20$ passi per 6 cifre.)*

> ⚠️ **Errore comune — Bolzano dà "almeno uno" zero, non "esattamente uno".** Il teorema garantisce l'*esistenza*, non l'*unicità*: una funzione continua che cambia segno può avere molti zeri (pensa a $\sin x$ su $[0,10\pi]$). Per l'unicità servono ipotesi aggiuntive, tipicamente la **stretta monotonia** su $[a,b]$ (che si prova, ad esempio, mostrando $f'>0$). Qui $f'(x)=3x^2-1>0$ su $[1,2]$, quindi lo zero è effettivamente unico in quell'intervallo.

### Esempio 5 — Continuità della composta (standard)

Mostrare che $h(x)=\sin(x^2+1)$ è continua su tutto $\mathbb{R}$.

**Soluzione.** Scriviamo $h=f\circ g$ con $g(x)=x^2+1$ (polinomio, continuo su $\mathbb{R}$) e $f(t)=\sin t$ (continua su $\mathbb{R}$). Per il teorema di continuità della composta (§3.3), $h$ è continua in ogni $x$, poiché $f$ è continua in $g(x)$ per ogni $x$. $\square$ *Commento:* riconoscere la struttura "funzione esterna $\circ$ funzione interna" è il passo chiave.

### Esempio 6 — Discontinuità essenziale per oscillazione (avanzato)

Studiare la continuità di $f(x)=\sin\!\big(\tfrac1x\big)$ in $x_0=0$ (con $f(0)$ eventualmente ridefinito).

**Soluzione.** Usiamo la caratterizzazione sequenziale (§2.3). Consideriamo due successioni che tendono a $0$: $x_n=\dfrac{1}{2\pi n}\to 0$ dà $f(x_n)=\sin(2\pi n)=0$, mentre $x_n'=\dfrac{1}{2\pi n+\pi/2}\to 0$ dà $f(x_n')=\sin(2\pi n+\tfrac\pi2)=1$. Lungo due successioni convergenti a $0$ la funzione tende a limiti diversi ($0$ e $1$): il limite in $0$ **non esiste**. È una **discontinuità essenziale**, non riparabile con alcuna scelta di $f(0)$. *Commento:* la strategia "due successioni, due limiti diversi" è il metodo standard (e atteso all'esame) per negare l'esistenza di un limite.

> ⚠️ **Errore comune — eliminabile ed essenziale non sono "la stessa cosa".** "$\frac1x$ e $\frac{\sin x}{x}$ sono entrambe discontinue in $0$ allo stesso modo" è falso: per $\frac{\sin x}{x}$ il limite in $0$ esiste finito ($=1$), discontinuità *eliminabile* riparabile ridefinendo il valore; per $\frac1x$ i limiti unilaterali sono $\pm\infty$, discontinuità *essenziale* non riparabile. Classifica sempre calcolando i due limiti unilaterali: bilatero finito ⇒ eliminabile; unilaterali finiti ma diversi ⇒ salto; almeno uno infinito o inesistente ⇒ essenziale.

### Esempio 7 — Weierstrass in azione (applicativo)

Trovare massimo e minimo assoluti di $f(x)=x^3-3x$ su $[-2,2]$.

**Soluzione.** $f$ è un polinomio, continua sul chiuso e limitato $[-2,2]$: per Weierstrass massimo e minimo assoluti **esistono**. Per localizzarli confrontiamo i valori nei punti critici interni ($f'(x)=3x^2-3=0\Rightarrow x=\pm1$) e agli estremi:

| $x$ | $-2$ | $-1$ | $1$ | $2$ |
|---|---|---|---|---|
| $f(x)$ | $-2$ | $2$ | $-2$ | $2$ |

Massimo assoluto $2$ (in $x=-1$ e $x=2$); minimo assoluto $-2$ (in $x=-2$ e $x=1$). *Commento:* Weierstrass garantisce l'esistenza; il calcolo differenziale (lezione 8) fornisce i candidati.

> ⚠️ **Errore comune — Weierstrass NON vale su intervalli aperti o illimitati.** "$f(x)=x$ è continua su $(0,1)$, quindi ha massimo e minimo lì" è falso: su $(0,1)$ l'estremo superiore è $1$ ma non è mai raggiunto ($1\notin(0,1)$); e su $[0,+\infty)$ la stessa funzione è continua ma illimitata. Le ipotesi **chiuso E limitato** sono entrambe essenziali: controllale prima di invocare l'esistenza di max/min.

### Esempio 8 — Un punto fisso via TVI (applicativo)

Sia $f:[0,1]\to[0,1]$ continua. Dimostrare che esiste $c\in[0,1]$ con $f(c)=c$ (un **punto fisso**).

**Soluzione.** Definiamo $g(x)=f(x)-x$, continua su $[0,1]$. Agli estremi: $g(0)=f(0)-0=f(0)\ge 0$ (perché $f(0)\in[0,1]$) e $g(1)=f(1)-1\le 0$ (perché $f(1)\in[0,1]$). Se $g(0)=0$ o $g(1)=0$ abbiamo il punto fisso agli estremi; altrimenti $g(0)>0>g(1)$ e per Bolzano esiste $c\in(0,1)$ con $g(c)=0$, cioè $f(c)=c$. $\square$ *Commento:* è la versione 1-dimensionale del teorema di punto fisso di Brouwer, alla base del teorema di Nash (§5).

---

## 5. Collegamenti e riepilogo

### 5.1 Nella biblioteca

- **[Calcolo dei limiti](/analisi/limiti-e-continuita/03-calcolo-limiti)**: la continuità delle funzioni elementari è ciò che legittima il calcolo dei limiti "per sostituzione"; a sua volta la classificazione delle discontinuità usa i limiti unilaterali studiati lì.
- **[Limiti notevoli e asintoti](/analisi/limiti-e-continuita/05-limiti-notevoli-asintoti)**: le discontinuità essenziali con limiti $\pm\infty$ corrispondono agli asintoti verticali; la lezione successiva approfondisce il comportamento all'infinito.
- **[Derivata: definizione](/analisi/calcolo-differenziale-una-variabile/06-derivata-definizione)**: la derivabilità è più forte della continuità (ogni funzione derivabile in $x_0$ è continua in $x_0$, ma non viceversa: $|x|$ in $0$ è continua ma non derivabile).
- **[Teoremi del calcolo differenziale](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale)**: i teoremi di Rolle e Lagrange richiedono la continuità su un intervallo chiuso come ipotesi; Weierstrass è il mattone che garantisce l'esistenza degli estremi che quei teoremi localizzano.
- **Successioni** (Analisi, lezione 16): la caratterizzazione sequenziale della continuità e la dimostrazione di Bolzano si appoggiano sulla convergenza di successioni monotone.
- **Ottimizzazione e Lagrange** (Analisi, lezione 22): Weierstrass è il teorema di esistenza che sta a monte di ogni problema di massimo/minimo vincolato.

### 5.2 Nelle discipline

- **Informatica — metodo di bisezione.** È l'algoritmo numerico più robusto per risolvere $f(x)=0$: si basa interamente su Bolzano. Data la continuità e il cambio di segno su $[a,b]$, garantisce convergenza con errore $\le \frac{b-a}{2^{n+1}}$ dopo $n$ passi (§3.1). Robusto ma lento (lineare); metodi più veloci come Newton sacrificano la garanzia di convergenza.
- **Economia — esistenza dell'equilibrio.** Nella teoria dei giochi, il teorema di punto fisso di Brouwer (generalizzazione multidimensionale dell'idea dell'Esempio 8) garantisce, grazie alla **continuità** delle funzioni di miglior risposta, l'esistenza dell'equilibrio di Nash in ogni gioco finito a strategie miste. Senza continuità l'esistenza non sarebbe garantita: è la continuità a "chiudere" l'argomento.
- **Fisica — condizioni di raccordo.** In termodinamica e in elettromagnetismo, la continuità di grandezze come temperatura o potenziale al confine tra due mezzi è imposta come *condizione al contorno*. Una discontinuità di temperatura implicherebbe un flusso di calore infinito, fisicamente impossibile; la matematica della continuità traduce questo vincolo fisico.
- **Statistica — funzioni di ripartizione.** La funzione di ripartizione (CDF) di una variabile aleatoria è continua a destra ovunque; i suoi salti corrispondono esattamente alle masse di probabilità dei valori discreti. La classificazione delle discontinuità diventa lettura diretta della distribuzione.

### 5.3 Riepilogo

| Concetto | Definizione / Formula | Note |
|---|---|---|
| Continuità in $x_0$ | $f(x_0)$ definita, $\lim_{x\to x_0} f(x)$ esiste finito, $\lim = f(x_0)$ | Tre condizioni simultanee |
| $\varepsilon$–$\delta$ di continuità | $\forall\varepsilon\,\exists\delta:\ |x-x_0|<\delta \Rightarrow |f(x)-f(x_0)|<\varepsilon$ | Include $x=x_0$ (no $0<$) |
| Caratterizzazione sequenziale | $x_n\to x_0 \Rightarrow f(x_n)\to f(x_0)$, $\forall(x_n)$ | Utile per negare la continuità |
| Continuità su $[a,b]$ | continua su $(a,b)$ + continua da destra in $a$, da sinistra in $b$ | Agli estremi basta l'unilaterale |
| Raccordo continuo (a tratti) | $g(x_0)=h(x_0)$ nel punto di giunzione | Equazione per il parametro |
| Disc. eliminabile | $\lim_{x\to x_0} f$ finito, ma $f(x_0)$ assente o $\neq$ limite | Riparabile ridefinendo $f(x_0)$ |
| Disc. di salto | $\ell^-\neq\ell^+$, entrambi finiti | Ampiezza $|\ell^+-\ell^-|$ |
| Disc. essenziale | almeno un unilaterale $\infty$ o inesistente | Non riparabile |
| Weierstrass | $f$ continua su $[a,b]$ chiuso e limitato $\Rightarrow$ max e min assoluti | Esistenza, non localizzazione |
| Bolzano (zeri) | $f$ continua, $f(a)f(b)<0 \Rightarrow \exists\,c\in(a,b): f(c)=0$ | Serve la completezza di $\mathbb{R}$ |
| Valori intermedi | $f$ continua, $k$ tra $f(a),f(b) \Rightarrow \exists\,c: f(c)=k$ | Da Bolzano via $g=f-k$ |

**Punti chiave da ricordare:** (1) la continuità è "limite = valore", tre condizioni insieme; (2) le funzioni elementari sono continue nei loro domini, quindi la sostituzione diretta calcola i limiti; (3) le discontinuità si classificano dai limiti unilaterali; (4) su un chiuso e limitato la continuità *regala* max e min (Weierstrass); (5) un cambio di segno su una funzione continua *regala* uno zero (Bolzano). Continuità = ipotesi che produce esistenza.

---

## 6. Esercizi

### Esercizio 1
Stabilire se $f(x)=\begin{cases} \frac{x^2-1}{x-1} & x\neq 1 \\ 3 & x=1\end{cases}$ è continua in $x_0=1$ e, in caso negativo, classificare la discontinuità.

<details>
<summary>Soluzione</summary>

Condizione 1: $f(1)=3$, definita. ✓ Condizione 2: $\lim_{x\to 1}\frac{x^2-1}{x-1}=\lim_{x\to 1}(x+1)=2$, esiste finito. ✓ Condizione 3: $\lim_{x\to 1} f(x)=2 \neq 3 = f(1)$. ✗

Non è continua: **discontinuità eliminabile**. Ridefinendo $f(1):=2$ la funzione diventa continua.

</details>

### Esercizio 2
Trovare $k$ affinché $f(x)=\begin{cases} kx^2-1 & x\le 2 \\ 3x-k & x>2\end{cases}$ sia continua in $x_0=2$.

<details>
<summary>Soluzione</summary>

Condizione di raccordo (§2.7): $\lim_{x\to 2^-}(kx^2-1)=4k-1$ deve uguagliare $\lim_{x\to 2^+}(3x-k)=6-k$. Da $4k-1=6-k$ segue $5k=7$, quindi $k=\dfrac{7}{5}$.

Verifica: $f(2)=4\cdot\tfrac75-1=\tfrac{23}{5}$ e $\lim_{x\to 2^+}=6-\tfrac75=\tfrac{23}{5}$. ✓

</details>

### Esercizio 3
Classificare la discontinuità di $f(x)=\dfrac{x^2-x-2}{x-2}$ in $x_0=2$.

<details>
<summary>Soluzione</summary>

$f(2)$ non è definita (denominatore nullo). Fattorizzando: $x^2-x-2=(x-2)(x+1)$, quindi per $x\neq 2$

$$f(x)=\frac{(x-2)(x+1)}{x-2}=x+1,\qquad \lim_{x\to 2} f(x)=3.$$

Il limite esiste finito ma $f(2)$ è assente: **discontinuità eliminabile** (si ripara con $f(2):=3$).

</details>

### Esercizio 4
Dimostrare che l'equazione $e^x = 3-x$ ha almeno una soluzione reale.

<details>
<summary>Soluzione</summary>

Poniamo $f(x)=e^x+x-3$, continua su $\mathbb{R}$ (somma di funzioni continue). Valutiamo: $f(0)=1+0-3=-2<0$ e $f(2)=e^2+2-3=e^2-1\approx 6.39>0$. Poiché $f$ è continua su $[0,2]$ e $f(0)f(2)<0$, per Bolzano esiste $c\in(0,2)$ con $f(c)=0$, cioè $e^c=3-c$. $\square$

</details>

### Esercizio 5
Determinare i punti di discontinuità di $f(x)=\dfrac{1}{\sin x}$ e classificarli.

<details>
<summary>Soluzione</summary>

$\sin x$ è continua ovunque; $1/t$ è continua per $t\neq 0$. Dunque $f$ è discontinua dove $\sin x=0$, cioè in $x=k\pi$, $k\in\mathbb{Z}$. In tali punti $\lim_{x\to k\pi}\frac{1}{\sin x}=\pm\infty$ (il segno dipende dal lato), quindi sono **discontinuità essenziali** (asintoti verticali).

</details>

### Esercizio 6
La funzione di Heaviside è $H(x)=\begin{cases} 0 & x<0 \\ 1 & x\ge 0\end{cases}$. Classificare la discontinuità in $x_0=0$ e stabilire se $H$ è continua da destra e/o da sinistra.

<details>
<summary>Soluzione</summary>

$\lim_{x\to 0^-} H=0$, $\lim_{x\to 0^+} H=1$, $H(0)=1$. I limiti unilaterali esistono finiti ma sono diversi: **discontinuità di salto**, ampiezza $1$; il limite bilatero non esiste.

Continua da destra: $\lim_{x\to 0^+} H = 1 = H(0)$. ✓ Non continua da sinistra: $\lim_{x\to 0^-} H=0\neq 1=H(0)$. ✗

</details>

### Esercizio 7
Dimostrare che $f(x)=x^4+x-3$ assume il valore $k=2$ in almeno un punto di $[1,2]$.

<details>
<summary>Soluzione</summary>

$f$ è un polinomio, continua su $[1,2]$. $f(1)=1+1-3=-1$ e $f(2)=16+2-3=15$. Poiché $k=2$ è compreso tra $-1$ e $15$, per il teorema dei valori intermedi esiste $c\in(1,2)$ con $f(c)=2$. $\square$ *(Equivale a $x^4+x-5=0$, soddisfatta da $c\approx 1.28$.)*

</details>

### Esercizio 8
Sia $f:[0,1]\to[0,1]$ continua. Dimostrare che $f$ ha un punto fisso, cioè esiste $c\in[0,1]$ con $f(c)=c$.

<details>
<summary>Soluzione</summary>

Poniamo $g(x)=f(x)-x$, continua su $[0,1]$. Agli estremi: $g(0)=f(0)\ge 0$ (perché $f(0)\in[0,1]$) e $g(1)=f(1)-1\le 0$ (perché $f(1)\in[0,1]$). Se uno dei due è nullo, il punto fisso è all'estremo. Altrimenti $g(0)>0>g(1)$ e per Bolzano esiste $c\in(0,1)$ con $g(c)=0$, cioè $f(c)=c$. $\square$

</details>

### Esercizio 9
Determinare $a,b\in\mathbb{R}$ affinché $f(x)=\begin{cases} x+a & x<0 \\ 2 & x=0 \\ b\,x^2 + a & x>0\end{cases}$ sia continua in $x_0=0$.

<details>
<summary>Soluzione</summary>

Serve $\lim_{x\to 0^-} f = \lim_{x\to 0^+} f = f(0)=2$. Limite sinistro: $\lim_{x\to 0^-}(x+a)=a$. Limite destro: $\lim_{x\to 0^+}(bx^2+a)=a$. Entrambi valgono $a$; imponendo $a=2$ i limiti unilaterali coincidono con $f(0)=2$. La costante $b$ resta **libera**: qualunque valore di $b$ dà continuità in $0$ (influenza solo la concavità del ramo destro, non il valore limite). Dunque $a=2$, $b\in\mathbb{R}$ qualsiasi.

</details>

### Esercizio 10
Sia $f$ continua su $[0,2]$ con $f(0)=f(2)$. Dimostrare che esistono due punti distinti $x_1,x_2\in[0,2]$ con $x_2-x_1=1$ e $f(x_1)=f(x_2)$ (proprietà della "corda orizzontale di lunghezza 1").

<details>
<summary>Soluzione</summary>

Definiamo $g(x)=f(x+1)-f(x)$ su $[0,1]$, continua. Calcoliamo $g(0)=f(1)-f(0)$ e $g(1)=f(2)-f(1)=f(0)-f(1)=-g(0)$ (avendo usato $f(2)=f(0)$). Dunque $g(0)$ e $g(1)$ sono opposti: $g(0)\cdot g(1)=-g(0)^2\le 0$. Se $g(0)=0$ allora $f(1)=f(0)$ e prendiamo $x_1=0,x_2=1$. Altrimenti $g(0)$ e $g(1)$ hanno segni opposti e per Bolzano esiste $c\in(0,1)$ con $g(c)=0$, cioè $f(c+1)=f(c)$: poniamo $x_1=c$, $x_2=c+1$. $\square$ *(È un classico uso "a traslazione" di Bolzano.)*

</details>
