---
id: algebra-07-trasformazioni-lineari
titolo: "Trasformazioni lineari"
materia: algebra-lineare
argomento: "Spazi vettoriali"
modulo: "Struttura vettoriale e trasformazioni"
livello: universitario
slug: algebra-07-trasformazioni-lineari

# legacy
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: "Trasformazioni lineari"
title_en: "Linear transformations"
level: blue
order: 7
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Applicazioni lineari, matrice associata, nucleo e immagine, teorema fondamentale, isomorfismi"

prerequisiti:
  - algebra-05-spazi-vettoriali
  - algebra-06-indipendenza-basi

collegamenti:
  - algebra-04-rango-rouche-capelli
  - algebra-06-indipendenza-basi
  - algebra-08-determinanti
  - algebra-09-autovalori-autovettori

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Applicazioni lineari, matrice associata, nucleo e immagine, iniettività e suriettività, isomorfismi"
    note: "appunti-prof: definizioni e criteri come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Applicazioni lineari come oggetto primario, teorema fondamentale delle applicazioni lineari, determinazione da una base"
    note: "rigore: impostazione astratta, TL fra spazi qualunque (polinomi, funzioni), non solo ℝⁿ→ℝᵐ"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Interpretazione geometrica: rotazioni, riflessioni, proiezioni, shear; matrice come azione sulla base canonica"
    note: "intuizione: le colonne come immagini dei versori"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Composizione e prodotto di matrici, esempi risolti su nucleo e immagine"
    note: "esempi supplementari"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-13"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Finora abbiamo studiato gli spazi vettoriali come *luoghi*: insiemi di vettori con una struttura di somma e scalatura. Manca l'altro protagonista di ogni teoria matematica: le *funzioni* che collegano un luogo all'altro. Tra tutte le funzioni immaginabili da uno spazio vettoriale a un altro, ce n'è una famiglia privilegiata — quelle che rispettano la struttura lineare, cioè che non «rompono» la somma e la scalatura. Sono le **trasformazioni lineari**, e sono l'oggetto centrale di tutta l'algebra lineare: non a caso la disciplina prende il nome da loro, non dai vettori.

Che cosa significa «rispettare la struttura»? Immagina una macchina che prende in ingresso un vettore e ne restituisce un altro. La macchina è lineare se soddisfa un patto di coerenza: sommare due ingressi e poi passarli nella macchina dà lo stesso risultato che passarli separatamente e sommare le uscite; e amplificare un ingresso di un fattore amplifica l'uscita dello stesso fattore. In una macchina lineare non ci sono sorprese, non ci sono effetti soglia né distorsioni: l'uscita segue l'ingresso in modo perfettamente proporzionale e additivo. È la classe di funzioni più «gentile» possibile rispetto alle operazioni vettoriali, e proprio questa gentilezza la rende trattabile con la potenza del calcolo matriciale.

Il legame con le matrici è il cuore della lezione, e va in entrambe le direzioni. Da un lato, ogni matrice $A$ definisce una trasformazione lineare tramite il prodotto $\mathbf{x}\mapsto A\mathbf{x}$ — lo sappiamo dalla lezione sulle matrici, dove la linearità del prodotto era già stata dimostrata. Dall'altro, e questo è il fatto nuovo e sorprendente, *ogni* trasformazione lineare tra spazi di coordinate è realizzata da una matrice, e da una sola. Trasformazioni lineari e matrici sono, in questo senso, due facce dello stesso oggetto: la matrice è il modo di *calcolare* con la trasformazione, la trasformazione è il *significato geometrico* della matrice. Rotazioni, riflessioni, proiezioni, dilatazioni: tutte diventano matrici, e comporle diventa moltiplicarle.

C'è una ragione profonda per cui basta una matrice a catturare una trasformazione lineare, e sta nel concetto di base costruito nella lezione precedente. Una trasformazione lineare è completamente determinata da ciò che fa ai vettori di una base: una volta che sai dove finiscono i vettori di base, la linearità ti costringe a sapere dove finisce ogni altro vettore, perché ogni vettore è una combinazione lineare — con coordinate uniche — dei vettori di base, e la trasformazione manda quella combinazione nella corrispondente combinazione delle immagini. La matrice non è che l'elenco delle immagini dei vettori di base, messe in colonna. Da questa idea discende tutto il resto: nucleo e immagine come sottospazi, il teorema fondamentale che lega le loro dimensioni, la caratterizzazione di iniettività e suriettività.

---

## 2. Teoria

### 2.1 Definizione di trasformazione lineare

Siano $V$ e $W$ due spazi vettoriali reali. Una funzione $T\colon V\to W$ è una **trasformazione lineare** (o applicazione lineare) se rispetta somma e moltiplicazione per scalare, cioè se per ogni $\mathbf{u},\mathbf{v}\in V$ e ogni $c\in\mathbb{R}$:

$$
\text{(additività) } T(\mathbf{u}+\mathbf{v})=T(\mathbf{u})+T(\mathbf{v}),
\qquad
\text{(omogeneità) } T(c\,\mathbf{v})=c\,T(\mathbf{v}).
$$

Le due condizioni si possono condensare in una sola, che useremo spesso come test: $T$ è lineare se e solo se $T(\alpha\mathbf{u}+\beta\mathbf{v})=\alpha\,T(\mathbf{u})+\beta\,T(\mathbf{v})$ per ogni $\mathbf{u},\mathbf{v}\in V$ e $\alpha,\beta\in\mathbb{R}$. A parole: $T$ «commuta» con le combinazioni lineari — puoi combinare prima e poi applicare $T$, oppure applicare $T$ ai singoli vettori e combinare dopo, e ottieni lo stesso risultato. È bene notare che le somme e le scalature ai due membri avvengono in spazi diversi: a sinistra dentro $V$ (lo spazio di partenza), a destra dentro $W$ (lo spazio di arrivo).

Una conseguenza immediata, che serve da primo test di linearità, è che una trasformazione lineare manda sempre il vettore nullo nel vettore nullo: $T(\mathbf{0}_V)=\mathbf{0}_W$. Infatti $T(\mathbf{0})=T(0\cdot\mathbf{v})=0\cdot T(\mathbf{v})=\mathbf{0}$, usando l'omogeneità con lo scalare $0$. Se una funzione *non* manda $\mathbf{0}$ in $\mathbf{0}$, si può concludere subito che non è lineare, senza altre verifiche.

*Micro-esempio.* La funzione $T(x,y)=(2x+y,\,x-y)$ è lineare: manda $\mathbf{0}$ in $\mathbf{0}$, e ogni componente dell'uscita è una combinazione lineare (senza termini noti né potenze) delle componenti dell'ingresso. Invece $T(x,y)=(x+1,\,y)$ non è lineare, perché $T(0,0)=(1,0)\neq\mathbf{0}$: le traslazioni non sono trasformazioni lineari. Anche $T(x,y)=(x^2,\,y)$ fallisce, perché $T(2\cdot(1,0))=T(2,0)=(4,0)$ mentre $2\,T(1,0)=(2,0)$: l'omogeneità è violata dal quadrato.

### 2.2 La matrice associata

Concentriamoci sul caso $T\colon\mathbb{R}^n\to\mathbb{R}^m$, quello in cui la connessione con le matrici è più diretta. Il fatto centrale è che ogni tale $T$ è realizzata dalla moltiplicazione per un'unica matrice $A$ di tipo $m\times n$:

$$
T(\mathbf{x})=A\mathbf{x},\qquad\text{dove}\qquad A=\big[\;T(\mathbf{e}_1)\ \big|\ T(\mathbf{e}_2)\ \big|\ \cdots\ \big|\ T(\mathbf{e}_n)\;\big].
$$

La ricetta per costruire $A$ è tanto semplice quanto rivelatrice: la $j$-esima colonna di $A$ è l'immagine $T(\mathbf{e}_j)$ del $j$-esimo vettore della base canonica. La ragione, che dimostreremo nella sezione 3, è quella anticipata nell'introduzione: ogni $\mathbf{x}=(x_1,\dots,x_n)$ si scrive come $x_1\mathbf{e}_1+\cdots+x_n\mathbf{e}_n$, e la linearità impone $T(\mathbf{x})=x_1T(\mathbf{e}_1)+\cdots+x_nT(\mathbf{e}_n)$, che è esattamente la lettura per colonne del prodotto $A\mathbf{x}$. *Conoscere l'azione di $T$ sulla base determina $T$ ovunque.*

*Micro-esempio.* Per la rotazione di $90^\circ$ in senso antiorario, $T(\mathbf{e}_1)=T(1,0)=(0,1)$ e $T(\mathbf{e}_2)=T(0,1)=(-1,0)$: mettendo queste due immagini in colonna si ottiene $A=\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}$, la matrice di rotazione. Non serve altro: quelle due colonne codificano l'intera rotazione.

Il principio «l'azione sulla base determina la trasformazione» vale in qualunque spazio, non solo in $\mathbb{R}^n$. In uno spazio astratto come $P_2$, una volta scelte una base di partenza e una di arrivo, si costruisce ugualmente una matrice le cui colonne sono le coordinate delle immagini dei vettori di base. È il ponte che permette di trattare la derivazione di polinomi, o qualunque altra operazione lineare, con l'aritmetica delle matrici.

### 2.3 Nucleo e immagine

A ogni trasformazione lineare $T\colon V\to W$ si associano due sottospazi che ne descrivono il comportamento, e sono la generalizzazione diretta di nucleo e immagine di una matrice. Il **nucleo** è l'insieme dei vettori di partenza che $T$ annulla:

$$
\ker(T)=\{\mathbf{v}\in V: T(\mathbf{v})=\mathbf{0}_W\}\subseteq V.
$$

L'**immagine** è l'insieme dei vettori di arrivo effettivamente raggiunti:

$$
\operatorname{Im}(T)=\{T(\mathbf{v}):\mathbf{v}\in V\}\subseteq W.
$$

Entrambi sono sottospazi — il nucleo di $V$, l'immagine di $W$ — e la dimostrazione (sezione 3, ripresa dalla lezione sugli spazi vettoriali) usa solo la linearità di $T$. Quando $T(\mathbf{x})=A\mathbf{x}$, i due sottospazi coincidono con quelli già studiati: $\ker(T)=\ker(A)$ e $\operatorname{Im}(T)=\operatorname{Im}(A)$, cioè l'immagine è lo span delle colonne di $A$. Il nucleo misura *quanto $T$ collassa* (quali direzioni schiaccia a zero), l'immagine misura *quanto $T$ raggiunge* (quali direzioni sono coperte nell'arrivo).

*Micro-esempio.* La proiezione sull'asse $x$, $T(x,y)=(x,0)$, ha per nucleo l'asse $y$ (tutti i punti $(0,y)$ vengono schiacciati nell'origine) e per immagine l'asse $x$ (i soli punti raggiunti sono $(x,0)$). Entrambi sono rette per l'origine, cioè sottospazi di dimensione $1$; e $1+1=2=\dim\mathbb{R}^2$, un'anticipazione del teorema che segue.

```checkpoint
{"domanda": "Per la proiezione $T(x,y,z)=(x,y,0)$ di $\\mathbb{R}^3$ in sé, che cosa sono $\\ker(T)$ e $\\operatorname{Im}(T)$, e di che dimensione sono?", "risposta": "$\\ker(T)$ è l'insieme dei $(x,y,z)$ con $(x,y,0)=(0,0,0)$, cioè $x=y=0$: è l'asse $z$, $\\ker(T)=\\{(0,0,z)\\}$, dimensione $1$. $\\operatorname{Im}(T)$ è l'insieme dei punti raggiunti, cioè tutti i $(x,y,0)$: il piano $z=0$, dimensione $2$. Verifica: $\\dim\\ker(T)+\\dim\\operatorname{Im}(T)=1+2=3=\\dim\\mathbb{R}^3$."}
```

### 2.4 Il teorema fondamentale delle applicazioni lineari

Il legame tra le dimensioni di nucleo e immagine è il teorema che abbiamo incontrato come «nullità più rango», e che nel linguaggio delle trasformazioni assume il nome di **teorema fondamentale delle applicazioni lineari**:

$$
\dim\ker(T)+\dim\operatorname{Im}(T)=\dim(V),
$$

dove $V$ è lo spazio di partenza. In termini matriciali, con $T(\mathbf{x})=A\mathbf{x}$ e $A$ di tipo $m\times n$, questo è $\dim\ker(A)+\operatorname{rk}(A)=n$: nulla di nuovo rispetto alla lezione sul rango, se non l'interpretazione. Il teorema dice che le dimensioni di ciò che $T$ *annulla* e di ciò che $T$ *raggiunge* si spartiscono esattamente la dimensione dello spazio di partenza. Ogni «grado di libertà» in ingresso o viene collassato dal nucleo, o sopravvive nell'immagine: non se ne perde e non se ne crea.

Questa contabilità ha conseguenze immediate e potenti sul comportamento possibile di una trasformazione, che rendono espliciti certi vincoli «di stazza» tra spazio di partenza e di arrivo. Se $\dim V > \dim W$, la trasformazione è costretta a collassare qualcosa: l'immagine, essendo un sottospazio di $W$, non può avere dimensione superiore a $\dim W$, quindi il nucleo ha dimensione almeno $\dim V-\dim W>0$ e contiene vettori non nulli. Se $\dim V<\dim W$, la trasformazione non può raggiungere tutto $W$: l'immagine ha dimensione al più $\dim V<\dim W$. Sono i vincoli che rendono impossibile, ad esempio, una trasformazione iniettiva da $\mathbb{R}^3$ a $\mathbb{R}^2$ o suriettiva da $\mathbb{R}^2$ a $\mathbb{R}^3$.

### 2.5 Iniettività, suriettività, isomorfismi

Le due domande naturali su una funzione — se sia iniettiva (ingressi diversi danno uscite diverse) e se sia suriettiva (ogni uscita è raggiunta) — per le trasformazioni lineari si traducono in condizioni sui due sottospazi appena introdotti, e diventano quindi calcolabili.

L'**iniettività** equivale alla banalità del nucleo: $T$ è iniettiva se e solo se $\ker(T)=\{\mathbf{0}\}$. La dimostreremo nella sezione 3; l'idea è che, per la linearità, $T(\mathbf{u})=T(\mathbf{v})$ equivale a $T(\mathbf{u}-\mathbf{v})=\mathbf{0}$, cioè a $\mathbf{u}-\mathbf{v}\in\ker(T)$, e se il nucleo contiene solo $\mathbf{0}$ questo forza $\mathbf{u}=\mathbf{v}$. La **suriettività** equivale a $\operatorname{Im}(T)=W$, cioè, in dimensione finita, a $\dim\operatorname{Im}(T)=\dim W$. Nel caso matriciale $T(\mathbf{x})=A\mathbf{x}$ con $A$ di tipo $m\times n$, queste si leggono così: $T$ è iniettiva se e solo se $\operatorname{rk}(A)=n$ (rango pieno per colonne, nessuna variabile libera); $T$ è suriettiva se e solo se $\operatorname{rk}(A)=m$ (rango pieno per righe, l'immagine è tutto $\mathbb{R}^m$).

Una trasformazione lineare che sia al tempo stesso iniettiva e suriettiva si dice **isomorfismo**: è una corrispondenza biunivoca che preserva la struttura lineare, e ammette un'inversa $T^{-1}$ anch'essa lineare. Per una $T\colon\mathbb{R}^n\to\mathbb{R}^n$ (partenza e arrivo della stessa dimensione), essere un isomorfismo equivale all'invertibilità della matrice $A$, cioè — come vedremo nella prossima lezione — al fatto che il suo determinante sia diverso da zero. Un isomorfismo dichiara che due spazi sono «la stessa cosa» dal punto di vista lineare, pur potendo apparire diversi: per esempio $P_2$ e $\mathbb{R}^3$ sono isomorfi, tramite la trasformazione che manda un polinomio nella terna dei suoi coefficienti.

```checkpoint
{"domanda": "Una trasformazione lineare $T\\colon\\mathbb{R}^4\\to\\mathbb{R}^4$ ha matrice $A$ con $\\operatorname{rk}(A)=4$. È iniettiva? Suriettiva? Un isomorfismo? E se invece fosse $T\\colon\\mathbb{R}^4\\to\\mathbb{R}^3$ con $\\operatorname{rk}(A)=3$?", "risposta": "Primo caso: $n=m=4$ e rango $4$. Iniettiva sì ($\\operatorname{rk}=n=4$, nucleo banale); suriettiva sì ($\\operatorname{rk}=m=4$, immagine tutto $\\mathbb{R}^4$); dunque isomorfismo, e $A$ è invertibile. Secondo caso: $T\\colon\\mathbb{R}^4\\to\\mathbb{R}^3$ con rango $3$. Suriettiva sì ($\\operatorname{rk}=m=3$). Iniettiva no: $\\dim\\ker=n-\\operatorname{rk}=4-3=1>0$. Non è un isomorfismo (gli spazi hanno dimensioni diverse, non potrebbe esserlo)."}
```

### 2.6 Geometria, composizione e lo slider

Il potere delle trasformazioni lineari si apprezza vedendole come operazioni geometriche. In $\mathbb{R}^2$, molte trasformazioni familiari sono lineari e hanno matrici standard: la rotazione di un angolo $\theta$ ha matrice $\begin{psmallmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{psmallmatrix}$; la riflessione rispetto all'asse $x$ è $\begin{psmallmatrix}1&0\\0&-1\end{psmallmatrix}$; la proiezione sull'asse $x$ è $\begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}$; la dilatazione di fattore $k$ è $\begin{psmallmatrix}k&0\\0&k\end{psmallmatrix}$. Ciascuna si ricostruisce con la ricetta delle colonne: dove finiscono $\mathbf{e}_1$ ed $\mathbf{e}_2$.

Comporre due trasformazioni — applicarne una dopo l'altra — corrisponde a moltiplicare le loro matrici, con un'avvertenza sull'ordine: se prima si applica $T$ (matrice $A$) e poi $S$ (matrice $B$), la composizione $S\circ T$ ha matrice $BA$, non $AB$. L'ordine è invertito rispetto alla lettura da sinistra a destra, perché $\mathbf{x}$ incontra prima $A$ e poi $B$: $S(T(\mathbf{x}))=B(A\mathbf{x})=(BA)\mathbf{x}$. Questo è il motivo strutturale per cui il prodotto di matrici non è commutativo: comporre una rotazione e una riflessione in ordine diverso dà risultati geometrici diversi.

Lo strumento interattivo qui sotto isola l'effetto di una trasformazione su una retta. Fissiamo la retta $y=x$ (i punti $(t,t)$) e le applichiamo la trasformazione $T(x,y)=(x,\,a\,y)$, che lascia invariata l'ascissa e scala l'ordinata per un fattore $a$. La retta si trasforma nella retta $y=a\,x$.

```slider
{"title": "La retta y=x (in blu) e la sua immagine y=a·x sotto la trasformazione T(x,y)=(x, a·y) (parametro: fattore a)", "fn": "x", "fn2": "a*x", "domain": [-3, 3], "yDomain": [-6, 6], "pname": "a", "pmin": -2, "pmax": 2, "pdefault": 1, "pstep": 0.1, "plabel": "fattore a della trasformazione", "label1": "retta originale y = x", "label2": "immagine y = a·x"}
```

Muovendo $a$ si attraversano i casi notevoli e si vede come un solo parametro cambi la natura geometrica della trasformazione. Per $a=1$ l'immagine coincide con la retta originale: $T$ è l'identità, non deforma nulla. Per $a=0$ l'immagine si appiattisce sull'asse $x$: $T$ è la proiezione, e ogni retta viene schiacciata sull'orizzontale — il nucleo (l'asse $y$) è ciò che sparisce. Per $a=-1$ l'immagine è la retta $y=-x$: $T$ è la riflessione rispetto all'asse $x$. Manipolando il fattore si coglie l'unità sottostante: identità, proiezione e riflessione non sono operazioni scollegate, ma valori particolari di una stessa famiglia lineare a un parametro, e il collasso in $a=0$ è esattamente il momento in cui il nucleo diventa non banale e $T$ perde l'iniettività.

---

## 3. Dimostrazioni

### 3.1 Ogni trasformazione lineare da ℝⁿ a ℝᵐ è una moltiplicazione per matrice

**Enunciato.** Sia $T\colon\mathbb{R}^n\to\mathbb{R}^m$ una trasformazione lineare. Allora esiste un'unica matrice $A$ di tipo $m\times n$ tale che $T(\mathbf{x})=A\mathbf{x}$ per ogni $\mathbf{x}$, e le sue colonne sono $A_{\cdot j}=T(\mathbf{e}_j)$.

**Dimostrazione.** *Esistenza.* Definiamo $A$ come la matrice le cui colonne sono i vettori $T(\mathbf{e}_1),\dots,T(\mathbf{e}_n)$ (ciascuno un vettore di $\mathbb{R}^m$, quindi $A$ è $m\times n$). Verifichiamo che questa $A$ realizza $T$. Preso un qualunque $\mathbf{x}=(x_1,\dots,x_n)\in\mathbb{R}^n$, lo scriviamo nella base canonica: $\mathbf{x}=x_1\mathbf{e}_1+\cdots+x_n\mathbf{e}_n$. Applichiamo $T$ e usiamo la linearità (estesa a $n$ addendi per induzione a partire dalle due condizioni di base):

$$
T(\mathbf{x})=T\!\left(\sum_{j=1}^n x_j\mathbf{e}_j\right)=\sum_{j=1}^n x_j\,T(\mathbf{e}_j)=\sum_{j=1}^n x_j\,A_{\cdot j}.
$$

L'ultima espressione, $\sum_j x_j A_{\cdot j}$, è per definizione la lettura per colonne del prodotto $A\mathbf{x}$ (vista nella lezione sulle matrici): la combinazione delle colonne di $A$ con coefficienti le componenti di $\mathbf{x}$. Dunque $T(\mathbf{x})=A\mathbf{x}$ per ogni $\mathbf{x}$.

*Unicità.* Supponiamo che due matrici $A$ e $A'$ realizzino entrambe $T$, cioè $A\mathbf{x}=A'\mathbf{x}$ per ogni $\mathbf{x}$. Scegliamo in particolare $\mathbf{x}=\mathbf{e}_j$: allora $A\mathbf{e}_j=A'\mathbf{e}_j$. Ma $A\mathbf{e}_j$ è proprio la $j$-esima colonna di $A$, e analogamente per $A'$. Quindi $A$ e $A'$ hanno le stesse colonne per ogni $j$, cioè $A=A'$. La matrice che realizza $T$ è unica. $\blacksquare$

Questo teorema è la cerniera tra il mondo geometrico delle trasformazioni e quello algebrico delle matrici. La sua dimostrazione mostra *perché* basta l'azione sulla base: la linearità propaga quell'informazione a tutto lo spazio, senza ambiguità.

### 3.2 Iniettività equivale a nucleo banale

**Enunciato.** Una trasformazione lineare $T\colon V\to W$ è iniettiva se e solo se $\ker(T)=\{\mathbf{0}\}$.

**Dimostrazione.** ($\Rightarrow$) Supponiamo $T$ iniettiva. Sappiamo che $T(\mathbf{0})=\mathbf{0}$. Se $\mathbf{v}\in\ker(T)$, allora $T(\mathbf{v})=\mathbf{0}=T(\mathbf{0})$; per l'iniettività, ingressi con la stessa uscita coincidono, quindi $\mathbf{v}=\mathbf{0}$. Dunque il nucleo contiene solo il vettore nullo.

($\Leftarrow$) Supponiamo $\ker(T)=\{\mathbf{0}\}$ e mostriamo l'iniettività. Siano $\mathbf{u},\mathbf{v}\in V$ con $T(\mathbf{u})=T(\mathbf{v})$. Per la linearità,

$$
T(\mathbf{u}-\mathbf{v})=T(\mathbf{u})-T(\mathbf{v})=\mathbf{0},
$$

quindi $\mathbf{u}-\mathbf{v}\in\ker(T)$. Ma il nucleo è per ipotesi il solo $\{\mathbf{0}\}$, dunque $\mathbf{u}-\mathbf{v}=\mathbf{0}$, cioè $\mathbf{u}=\mathbf{v}$. Ingressi con la stessa uscita sono uguali: $T$ è iniettiva. $\blacksquare$

Il valore di questo criterio è pratico oltre che concettuale: verificare l'iniettività di una funzione generica richiederebbe di confrontare *tutte* le coppie di ingressi, mentre per una trasformazione lineare basta controllare un solo sottospazio — il nucleo — e vedere se si riduce all'origine. È l'ennesima semplificazione che la linearità regala.

### 3.3 La composizione è lineare e corrisponde al prodotto di matrici

<details class="dim-tecnica">
<summary>Composizione di trasformazioni lineari: linearità e matrice BA</summary>

**Enunciato.** Siano $T\colon U\to V$ e $S\colon V\to W$ trasformazioni lineari. Allora la composizione $S\circ T\colon U\to W$, definita da $(S\circ T)(\mathbf{u})=S(T(\mathbf{u}))$, è lineare. Inoltre, nel caso di spazi di coordinate con $T(\mathbf{x})=A\mathbf{x}$ e $S(\mathbf{y})=B\mathbf{y}$, la matrice di $S\circ T$ è $BA$.

**Dimostrazione della linearità.** Prendiamo $\mathbf{u}_1,\mathbf{u}_2\in U$ e $\alpha,\beta\in\mathbb{R}$. Applicando prima la linearità di $T$ e poi quella di $S$:

$$
(S\circ T)(\alpha\mathbf{u}_1+\beta\mathbf{u}_2)
=S\big(T(\alpha\mathbf{u}_1+\beta\mathbf{u}_2)\big)
=S\big(\alpha\,T(\mathbf{u}_1)+\beta\,T(\mathbf{u}_2)\big)
=\alpha\,S(T(\mathbf{u}_1))+\beta\,S(T(\mathbf{u}_2)),
$$

che è $\alpha\,(S\circ T)(\mathbf{u}_1)+\beta\,(S\circ T)(\mathbf{u}_2)$. La composizione soddisfa la condizione unica di linearità.

**Dimostrazione della matrice $BA$.** Per ogni $\mathbf{x}$,

$$
(S\circ T)(\mathbf{x})=S(T(\mathbf{x}))=S(A\mathbf{x})=B(A\mathbf{x})=(BA)\mathbf{x},
$$

dove l'ultimo passaggio è l'associatività del prodotto matrice-vettore. Per l'unicità della matrice associata (sezione 3.1), la matrice di $S\circ T$ è dunque $BA$. L'ordine — prima $A$ (la trasformazione applicata per prima), poi $B$ a sinistra — è la ragione strutturale per cui il prodotto di matrici non commuta: comporre in ordine diverso significa in generale ottenere trasformazioni diverse, e infatti $BA\neq AB$ salvo casi particolari.

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — Riconoscere una trasformazione lineare e trovarne la matrice.** Sia $T(x,y)=(2x+y,\,x-y)$. È lineare: manda $\mathbf{0}$ in $\mathbf{0}$ e ogni uscita è combinazione lineare degli ingressi. La matrice si legge dalle immagini dei versori: $T(\mathbf{e}_1)=T(1,0)=(2,1)$ e $T(\mathbf{e}_2)=T(0,1)=(1,-1)$, dunque $A=\begin{psmallmatrix}2&1\\1&-1\end{psmallmatrix}$.

**Esempio 2 (introduttivo) — Riflessione rispetto all'asse $x$.** $T(x,y)=(x,-y)$. Immagini dei versori: $T(\mathbf{e}_1)=(1,0)$, $T(\mathbf{e}_2)=(0,-1)$, quindi $A=\begin{psmallmatrix}1&0\\0&-1\end{psmallmatrix}$. È un isomorfismo (il determinante è $-1\neq 0$), e applicandola due volte si torna all'identità: $A^2=I$, come dev'essere per una riflessione.

**Esempio 3 (introduttivo) — Proiezione e i suoi sottospazi.** $T(x,y)=(x,0)$, matrice $A=\begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}$. Il nucleo è l'asse $y$: i punti $(0,y)$ vengono mandati in $\mathbf{0}$. L'immagine è l'asse $x$. Le dimensioni sono $\dim\ker(T)=1$ e $\dim\operatorname{Im}(T)=1$, con somma $2=\dim\mathbb{R}^2$: il teorema fondamentale è verificato. Nota che $T$ non è né iniettiva (nucleo non banale) né suriettiva (immagine più piccola dell'arrivo).

**Esempio 4 (intermedio) — Trasformazione non quadrata: nucleo e immagine.** Sia $T\colon\mathbb{R}^3\to\mathbb{R}^2$, $T(x,y,z)=(x+y,\,y+z)$, con matrice $A=\begin{psmallmatrix}1&1&0\\0&1&1\end{psmallmatrix}$. Il rango è $2$ (due pivot), quindi l'immagine è tutto $\mathbb{R}^2$: $T$ è suriettiva. Il nucleo ha dimensione $3-2=1$: da $x+y=0$ e $y+z=0$ si ottiene $x=-y$, $z=-y$, cioè $\ker(T)=\operatorname{span}\{(-1,1,-1)\}$. $T$ non è iniettiva, coerentemente col fatto che $\dim\mathbb{R}^3>\dim\mathbb{R}^2$.

**Esempio 5 (intermedio) — Composizione: riflessione poi proiezione.** Sia $T$ la riflessione rispetto all'asse $y$, $A_T=\begin{psmallmatrix}-1&0\\0&1\end{psmallmatrix}$, e $S$ la proiezione sull'asse $x$, $A_S=\begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}$. La composizione $S\circ T$ (prima $T$, poi $S$) ha matrice $A_S A_T=\begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}\begin{psmallmatrix}-1&0\\0&1\end{psmallmatrix}=\begin{psmallmatrix}-1&0\\0&0\end{psmallmatrix}$, cioè $(S\circ T)(x,y)=(-x,0)$: si riflette e poi si schiaccia sull'asse $x$.

**Esempio 6 (intermedio) — Composizione di rotazioni.** Se $R_\alpha$ e $R_\beta$ sono rotazioni in $\mathbb{R}^2$, la loro composizione è la rotazione della somma degli angoli: $R_\beta\circ R_\alpha=R_{\alpha+\beta}$. Lo si verifica moltiplicando le matrici e usando le formule di addizione di seno e coseno. In particolare $R_{\pi/2}\circ R_{\pi/2}=R_\pi$: infatti $\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}^2=\begin{psmallmatrix}-1&0\\0&-1\end{psmallmatrix}$, che è la rotazione di $180^\circ$.

**Esempio 7 (avanzato) — Una trasformazione lineare su uno spazio di polinomi.** La derivazione $D\colon P_2\to P_2$, $D(p)=p'$, è lineare (la derivata di una somma è la somma delle derivate, e le costanti escono). Nella base $\{1,x,x^2\}$ le immagini sono $D(1)=0$, $D(x)=1$, $D(x^2)=2x$, che in coordinate sono $(0,0,0)$, $(1,0,0)$, $(0,2,0)$. La matrice è $\begin{psmallmatrix}0&1&0\\0&0&2\\0&0&0\end{psmallmatrix}$. Il nucleo di $D$ è lo spazio delle costanti (i polinomi con derivata nulla), dimensione $1$; l'immagine è $\operatorname{span}\{1,x\}=P_1$, dimensione $2$; e $1+2=3=\dim P_2$.

**Esempio 8 (avanzato) — Un isomorfismo su $P_2$.** La trasformazione $T\colon P_2\to P_2$, $T(p)=p+p'$, è lineare. Immagini della base: $T(1)=1$, $T(x)=x+1$, $T(x^2)=x^2+2x$, in coordinate $(1,0,0)$, $(1,1,0)$, $(0,2,1)$. La matrice è $\begin{psmallmatrix}1&1&0\\0&1&2\\0&0&1\end{psmallmatrix}$, triangolare con determinante $1\neq 0$: $T$ è un isomorfismo di $P_2$ in sé. Ciò significa che l'equazione $p+p'=q$ ha, per ogni polinomio $q$ di grado $\le 2$, una e una sola soluzione $p$ di grado $\le 2$.

---

## 5. Collegamenti e riepilogo

Questa lezione mette in moto la struttura statica costruita nelle precedenti. Le nozioni di base e coordinate del [algebra-06-indipendenza-basi] sono ciò che permette di associare a ogni trasformazione una matrice (le colonne sono le immagini dei vettori di base), e il teorema di nullità più rango di quella lezione riappare qui come teorema fondamentale delle applicazioni lineari, ora letto come contabilità tra ciò che $T$ annulla e ciò che raggiunge. Nucleo e immagine, dimostrati sottospazi nel [algebra-05-spazi-vettoriali], diventano gli strumenti che diagnosticano iniettività e suriettività. Il criterio di isomorfismo per una trasformazione quadrata — invertibilità della matrice — trova nel [algebra-08-determinanti] la sua misura numerica: il determinante è non nullo esattamente quando $T$ è biiettiva. E la ricerca di direzioni che $T$ trasforma nel modo più semplice possibile — vettori che vengono solo dilatati, senza cambiare direzione — è il tema del [algebra-09-autovalori-autovettori], che è lo studio della struttura interna di una trasformazione lineare.

Fuori dall'algebra lineare, le trasformazioni lineari sono il linguaggio di innumerevoli applicazioni. Nella computer grafica ogni rotazione, scalatura, riflessione e proiezione di una scena è una trasformazione lineare (o affine, con l'aggiunta di traslazioni tramite coordinate omogenee), e comporre operazioni significa moltiplicare matrici nell'ordine corretto. Nell'elaborazione di segnali e immagini, filtri e trasformate (come la trasformata di Fourier discreta) sono trasformazioni lineari, e la loro invertibilità decide se un'operazione è reversibile. Nell'apprendimento automatico, ogni strato «lineare» di una rete neurale calcola $A\mathbf{x}+\mathbf{b}$, e la propagazione dei gradienti attraverso la rete è, in sostanza, una composizione di trasformazioni lineari e dei loro prodotti matriciali.

**Idee chiave da ricordare.** Una trasformazione lineare rispetta somma e scalatura, equivalentemente le combinazioni lineari, e manda sempre $\mathbf{0}$ in $\mathbf{0}$. Ogni trasformazione lineare da $\mathbb{R}^n$ a $\mathbb{R}^m$ è la moltiplicazione per un'unica matrice, le cui colonne sono le immagini dei versori: conoscere l'azione sulla base determina la trasformazione ovunque. Nucleo e immagine sono sottospazi (di partenza e di arrivo) e le loro dimensioni soddisfano il teorema fondamentale $\dim\ker+\dim\operatorname{Im}=\dim V$. L'iniettività equivale a nucleo banale, la suriettività a immagine piena; una trasformazione biiettiva è un isomorfismo e, nel caso quadrato, corrisponde a una matrice invertibile. Comporre trasformazioni corrisponde a moltiplicare le matrici in ordine invertito ($S\circ T\leftrightarrow BA$), il che spiega perché il prodotto di matrici non commuta.

---

## 6. Esercizi

<details class="dim-tecnica">
<summary>Esercizio 1 (introduttivo) — Lineare o no?</summary>

**Testo.** Stabilire quali fra $T_1(x,y)=(2x+y,\,x-y)$, $T_2(x,y)=(x+1,\,y)$, $T_3(x,y)=(xy,\,x)$ sono trasformazioni lineari.

**Soluzione.** $T_1$: manda $\mathbf{0}$ in $\mathbf{0}$; l'additività e l'omogeneità si verificano perché ogni componente è combinazione lineare degli ingressi. È lineare, matrice $\begin{psmallmatrix}2&1\\1&-1\end{psmallmatrix}$. $T_2$: $T_2(0,0)=(1,0)\neq\mathbf{0}$, quindi *non* lineare (è una traslazione). $T_3$: la prima componente $xy$ non è lineare; controprova con l'omogeneità, $T_3(2\cdot(1,1))=T_3(2,2)=(4,2)$ mentre $2\,T_3(1,1)=2(1,1)=(2,2)$: diversi. Non lineare.

</details>

<details class="dim-tecnica">
<summary>Esercizio 2 (introduttivo) — Matrice di una riflessione</summary>

**Testo.** Trovare la matrice della riflessione rispetto alla retta $y=x$ in $\mathbb{R}^2$ e verificarne una proprietà caratteristica.

**Soluzione.** La riflessione rispetto a $y=x$ scambia le coordinate: $T(x,y)=(y,x)$. Immagini dei versori: $T(\mathbf{e}_1)=T(1,0)=(0,1)$, $T(\mathbf{e}_2)=T(0,1)=(1,0)$, quindi $A=\begin{psmallmatrix}0&1\\1&0\end{psmallmatrix}$. Proprietà caratteristica: riflettere due volte riporta all'origine di partenza, e infatti $A^2=\begin{psmallmatrix}0&1\\1&0\end{psmallmatrix}^2=\begin{psmallmatrix}1&0\\0&1\end{psmallmatrix}=I$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 3 (intermedio) — Nucleo e immagine di una TL 4→3</summary>

**Testo.** Per $T\colon\mathbb{R}^4\to\mathbb{R}^3$ con matrice $A=\begin{psmallmatrix}1&2&0&1\\0&0&1&2\\1&2&1&3\end{psmallmatrix}$, trovare $\ker(T)$ e $\operatorname{Im}(T)$ e verificare il teorema fondamentale.

**Soluzione.** La terza riga è la somma delle prime due, quindi si annulla nella riduzione: $\operatorname{rk}(A)=2$, con pivot nelle colonne $1$ e $3$. Variabili libere $x_2=s$, $x_4=t$. Da $R_1$: $x_1=-2s-t$; da $R_2$: $x_3=-2t$. Dunque

$$
\ker(T)=s\begin{psmallmatrix}-2\\1\\0\\0\end{psmallmatrix}+t\begin{psmallmatrix}-1\\0\\-2\\1\end{psmallmatrix},\qquad \dim\ker(T)=2.
$$

L'immagine è lo span delle colonne pivot: $\operatorname{Im}(T)=\operatorname{span}\{(1,0,1),(0,1,1)\}$, dimensione $2$. Verifica: $\dim\ker+\dim\operatorname{Im}=2+2=4=\dim\mathbb{R}^4$. ✓

</details>

<details class="dim-tecnica">
<summary>Esercizio 4 (intermedio) — Iniettività via determinante</summary>

**Testo.** La trasformazione $T\colon\mathbb{R}^3\to\mathbb{R}^3$ con matrice $A=\begin{psmallmatrix}1&2&1\\0&1&1\\1&1&0\end{psmallmatrix}$ è iniettiva?

**Soluzione.** Per una trasformazione quadrata, iniettività, suriettività e invertibilità coincidono, e si controllano col determinante. Sviluppando lungo la prima colonna: $\det(A)=1\cdot\det\begin{psmallmatrix}1&1\\1&0\end{psmallmatrix}-0+1\cdot\det\begin{psmallmatrix}2&1\\1&1\end{psmallmatrix}=1(0-1)+1(2-1)=-1+1=0$. Poiché $\det(A)=0$, la matrice non è invertibile: il nucleo è non banale e $T$ **non è iniettiva**. (La prossima lezione formalizzerà il legame determinante–invertibilità qui usato.)

</details>

<details class="dim-tecnica">
<summary>Esercizio 5 (intermedio) — Composizione nell'ordine giusto</summary>

**Testo.** Siano $R$ la rotazione di $\pi/2$ e $F$ la riflessione rispetto all'asse $x$. Calcolare le matrici di $F\circ R$ e $R\circ F$ e verificare che sono diverse.

**Soluzione.** $A_R=\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}$, $A_F=\begin{psmallmatrix}1&0\\0&-1\end{psmallmatrix}$. La composizione $F\circ R$ (prima $R$, poi $F$) ha matrice $A_F A_R=\begin{psmallmatrix}1&0\\0&-1\end{psmallmatrix}\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}=\begin{psmallmatrix}0&-1\\-1&0\end{psmallmatrix}$. La composizione $R\circ F$ (prima $F$, poi $R$) ha matrice $A_R A_F=\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}\begin{psmallmatrix}1&0\\0&-1\end{psmallmatrix}=\begin{psmallmatrix}0&1\\1&0\end{psmallmatrix}$. Le due matrici sono diverse: comporre rotazione e riflessione in ordine opposto dà trasformazioni geometriche distinte, un esempio concreto della non commutatività del prodotto.

</details>

<details class="dim-tecnica">
<summary>Esercizio 6 (avanzato) — Rotazione e sua azione</summary>

**Testo.** Scrivere la matrice della rotazione di $\pi/4$ e calcolare l'immagine di $(1,0)$; interpretare il risultato.

**Soluzione.** $R_{\pi/4}=\begin{psmallmatrix}\cos(\pi/4)&-\sin(\pi/4)\\\sin(\pi/4)&\cos(\pi/4)\end{psmallmatrix}=\begin{psmallmatrix}\frac{\sqrt2}{2}&-\frac{\sqrt2}{2}\\[2pt]\frac{\sqrt2}{2}&\frac{\sqrt2}{2}\end{psmallmatrix}$. Applicandola a $(1,0)$: $R_{\pi/4}(1,0)^{\!\top}=\big(\tfrac{\sqrt2}{2},\tfrac{\sqrt2}{2}\big)^{\!\top}$. Il versore orizzontale $\mathbf{e}_1$ viene ruotato di $45^\circ$ e finisce sulla bisettrice $y=x$, a distanza $1$ dall'origine (la rotazione conserva la lunghezza): infatti $\big(\tfrac{\sqrt2}{2}\big)^2+\big(\tfrac{\sqrt2}{2}\big)^2=\tfrac12+\tfrac12=1$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 7 (avanzato) — Vincoli di stazza su iniettività e suriettività</summary>

**Testo.** Spiegare, usando il teorema fondamentale, perché nessuna trasformazione lineare $T\colon\mathbb{R}^2\to\mathbb{R}^3$ può essere suriettiva e nessuna $T\colon\mathbb{R}^3\to\mathbb{R}^2$ può essere iniettiva.

**Soluzione.** Per $T\colon\mathbb{R}^2\to\mathbb{R}^3$: l'immagine è un sottospazio di $\mathbb{R}^3$ e, per il teorema fondamentale, $\dim\operatorname{Im}(T)=\dim\mathbb{R}^2-\dim\ker(T)\le 2<3$. Quindi $\operatorname{Im}(T)\subsetneq\mathbb{R}^3$: $T$ non può essere suriettiva. Per $T\colon\mathbb{R}^3\to\mathbb{R}^2$: $\dim\ker(T)=\dim\mathbb{R}^3-\dim\operatorname{Im}(T)\ge 3-2=1>0$, quindi il nucleo contiene vettori non nulli e $T$ non è iniettiva. In generale, una trasformazione non può essere iniettiva se la partenza ha dimensione maggiore dell'arrivo, né suriettiva se ha dimensione minore.

</details>

<details class="dim-tecnica">
<summary>Esercizio 8 (applicativo) — Isomorfismo tra P₂ e ℝ³</summary>

**Testo.** Mostrare che la trasformazione $C\colon P_2\to\mathbb{R}^3$ che manda $a+bx+cx^2$ nella terna dei coefficienti $(a,b,c)$ è un isomorfismo, e spiegarne il significato.

**Soluzione.** $C$ è lineare: $C(p+q)$ ha per coefficienti la somma dei coefficienti, e $C(\lambda p)$ li ha moltiplicati per $\lambda$. È iniettiva perché $C(p)=\mathbf{0}$ significa $a=b=c=0$, cioè $p=0$: nucleo banale. È suriettiva perché ogni terna $(a,b,c)$ è immagine del polinomio $a+bx+cx^2$. Essendo lineare, iniettiva e suriettiva, $C$ è un isomorfismo. Significato: $P_2$ e $\mathbb{R}^3$ sono «lo stesso spazio» dal punto di vista lineare — è precisamente la ragione per cui possiamo rappresentare i polinomi con le loro coordinate e fare algebra lineare su di essi come se fossero vettori-colonna. Coerente con $\dim P_2=3=\dim\mathbb{R}^3$: due spazi di dimensione finita sono isomorfi se e solo se hanno la stessa dimensione.

</details>
