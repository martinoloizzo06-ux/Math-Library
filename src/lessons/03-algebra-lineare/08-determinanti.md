---
id: algebra-08-determinanti
titolo: "Determinanti"
materia: algebra-lineare
argomento: "Spazi vettoriali"
modulo: "Struttura vettoriale e trasformazioni"
livello: universitario
slug: algebra-08-determinanti

# legacy
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: "Determinanti"
title_en: "Determinants"
level: blue
order: 8
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Determinante: caratterizzazione assiomatica, sviluppo di Laplace, proprietà, interpretazione geometrica, Cramer e inversa"

prerequisiti:
  - algebra-06-indipendenza-basi
  - algebra-07-trasformazioni-lineari

collegamenti:
  - algebra-04-rango-rouche-capelli
  - algebra-06-indipendenza-basi
  - algebra-07-trasformazioni-lineari
  - algebra-09-autovalori-autovettori

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Determinante, sviluppo di Laplace, proprietà, criterio di invertibilità, regola di Cramer, matrice aggiunta"
    note: "appunti-prof: definizioni, notazione e criteri come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Caratterizzazione del determinante come funzione multilineare alternante normalizzata; determinante e invertibilità"
    note: "rigore: impostazione assiomatica, unicità della funzione determinante"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Interpretazione geometrica: area, volume, orientazione; determinante come fattore di scala dei volumi"
    note: "intuizione: il determinante come volume con segno del parallelepipedo delle colonne"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Esempi risolti di sviluppo di Laplace, Cramer, calcolo dell'inversa con l'aggiunta"
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

Abbiamo costruito, lezione dopo lezione, un elenco di condizioni tutte equivalenti fra loro: una matrice quadrata $A$ è invertibile, le sue colonne sono linearmente indipendenti, formano una base dello spazio, il sistema $A\mathbf{x}=\mathbf{b}$ ha soluzione unica, il nucleo è ridotto al solo vettore nullo. Ogni volta, però, per stabilire quale dei due mondi vale — invertibile oppure singolare — abbiamo dovuto *lavorare*: ridurre la matrice a scalini, calcolare il rango, ispezionare i pivot. La domanda che apre questa lezione è se esista un unico numero, calcolabile direttamente dalle entrate della matrice, che risponda con il suo semplice essere zero o non zero. Quel numero esiste, si chiama **determinante**, e la sua nullità è la firma della singolarità.

L'intuizione geometrica dà al determinante un significato prima ancora di ogni formula. Prendi le colonne di una matrice $2\times 2$ e disegnale come due frecce uscenti dall'origine: insieme individuano un parallelogramma. Il determinante, a meno del segno, è l'**area** di quel parallelogramma. Per una matrice $3\times 3$ le tre colonne individuano un parallelepipedo, e il determinante ne è il **volume** con segno. Ora immagina di avvicinare le due frecce del caso piano finché non coincidono in direzione: il parallelogramma si assottiglia fino a schiacciarsi in un segmento, area zero. Ma due colonne che puntano nella stessa direzione sono proprio due colonne linearmente dipendenti. Ecco il ponte: **volume nullo è dipendenza lineare è singolarità**. Il determinante misura il volume, e il volume collassa esattamente quando le colonne smettono di essere indipendenti.

C'è un secondo significato, nascosto nel segno. Una trasformazione lineare — lo abbiamo visto nella lezione precedente — deforma lo spazio; il determinante della sua matrice dice di quanto vengono scalati i volumi. Se $\lvert\det(A)\rvert = 3$, ogni figura vede la propria area (o il proprio volume) triplicare sotto l'azione di $A$. E il segno distingue le trasformazioni che conservano l'orientazione dello spazio da quelle che lo ribaltano, come una riflessione allo specchio trasforma una mano destra in una sinistra. Un determinante positivo conserva il verso, uno negativo lo inverte, uno nullo lo annienta appiattendo tutto in una dimensione inferiore. In una sola quantità, dunque, convivono tre informazioni: se la matrice è invertibile, di quanto scala i volumi, e se preserva o rovescia l'orientazione.

La sfida tecnica è trasformare questa immagine geometrica in una formula che funzioni in ogni dimensione. La strada che seguiremo non parte da una formula calata dall'alto, ma da tre proprietà che qualunque nozione ragionevole di «volume con segno» deve possedere — proporzionalità rispetto a ciascun lato, annullamento quando due lati coincidono, valore uno per il cubo unitario. La scoperta profonda, dovuta all'impostazione assiomatica, è che queste tre richieste non lasciano libertà: esiste **una e una sola** funzione che le soddisfa, ed è il determinante. Tutte le formule di calcolo — Sarrus, lo sviluppo di Laplace, il prodotto dei pivot — sono conseguenze forzate di quelle tre proprietà, non definizioni concorrenti.

---

## 2. Teoria

### 2.1 La caratterizzazione assiomatica

Cerchiamo una funzione che a ogni matrice quadrata $A\in M_{n,n}(\mathbb{R})$ associ un numero reale, pensando $A$ come la lista ordinata delle sue colonne $\mathbf{a}_1,\dots,\mathbf{a}_n$. Le tre proprietà che imponiamo traducono in linguaggio algebrico l'idea di «volume con segno».

**Definizione (determinante).** Il **determinante** è la funzione $\det\colon M_{n,n}(\mathbb{R})\to\mathbb{R}$, scritta $\det(A)$ o $\lvert A\rvert$, caratterizzata dalle tre proprietà seguenti:

1. **Multilinearità nelle colonne.** Fissate tutte le colonne tranne una, $\det$ è lineare in quella colonna. Cioè, per ogni indice $j$,
$$\det(\dots,\ \alpha\mathbf{u}+\beta\mathbf{v},\ \dots)=\alpha\det(\dots,\mathbf{u},\dots)+\beta\det(\dots,\mathbf{v},\dots).$$
2. **Alternanza.** Se due colonne di $A$ sono uguali, allora $\det(A)=0$.
3. **Normalizzazione.** $\det(I_n)=1$, dove $I_n$ è la matrice identità.

*Che cosa dice ciascun assioma.* La multilinearità è la traduzione di «se raddoppio un lato del parallelogramma, l'area raddoppia»: il volume dipende in modo proporzionale da ciascun lato, preso uno alla volta. L'alternanza è «se due lati coincidono la figura è degenere, volume zero». La normalizzazione fissa l'unità di misura: il cubo generato dai versori canonici ha volume uno. Nessuno di questi tre fatti, da solo, è una formula; insieme, come vedremo, ne determinano una sola.

*Micro-esempio.* Nell'identità $I_2$ le due colonne sono $\mathbf{e}_1=(1,0)$ ed $\mathbf{e}_2=(0,1)$: individuano il quadrato unitario, area $1$, in accordo con la normalizzazione $\det(I_2)=1$.

Il fatto non ovvio è che queste tre condizioni si possano soddisfare *contemporaneamente* e in *un solo modo*.

**Teorema (esistenza e unicità).** Per ogni $n$ esiste una e una sola funzione $\det\colon M_{n,n}(\mathbb{R})\to\mathbb{R}$ che soddisfa i tre assiomi.

L'unicità è la parte che useremo di continuo: qualunque procedimento di calcolo che rispetti gli assiomi deve produrre *lo stesso* numero. È per questo che Sarrus, Laplace e la riduzione a scalini, pur sembrando ricette diverse, danno sempre il medesimo risultato. La dimostrazione della formula esplicita nel caso $2\times 2$, che ricava $ad-bc$ dai soli assiomi, è in §3 e mostra il meccanismo dell'unicità all'opera.

### 2.2 Conseguenze immediate degli assiomi

Dagli assiomi discendono, senza bisogno di alcuna formula, le regole di manipolazione che rendono il determinante calcolabile. Le raccogliamo qui perché sono lo strumento di lavoro quotidiano.

**Scambio di due colonne: cambia il segno.** Se $A'$ si ottiene da $A$ scambiando due colonne, allora $\det(A')=-\det(A)$. Questo è il motivo per cui l'assioma 2 si chiama «alternanza»: la funzione *alterna* il segno a ogni scambio. La derivazione da «due colonne uguali danno zero» è in §3.

*Micro-esempio.* Da $\det\begin{psmallmatrix}1&0\\0&1\end{psmallmatrix}=1$ segue, scambiando le colonne, $\det\begin{psmallmatrix}0&1\\1&0\end{psmallmatrix}=-1$.

**Colonna nulla: determinante nullo.** Se una colonna è il vettore nullo, per la multilinearità (con $\alpha=0$) il determinante è $0$.

**Sommare a una colonna un multiplo di un'altra: il determinante non cambia.** Se a $\mathbf{a}_j$ si aggiunge $\lambda\mathbf{a}_k$ (con $k\ne j$), il determinante resta invariato. Questa è la proprietà cruciale: sono esattamente le mosse dell'eliminazione di Gauss che *non* alterano il determinante, e permettono di ridurre qualunque matrice a forma triangolare tenendo il conto del determinante. La verifica, brevissima, è in §3.

*Micro-esempio.* $\det\begin{psmallmatrix}1&2\\0&1\end{psmallmatrix}$: sottraendo alla seconda colonna il doppio della prima si ottiene $\det\begin{psmallmatrix}1&0\\0&1\end{psmallmatrix}=1$; dunque il determinante di partenza vale anch'esso $1$.

**Colonne linearmente dipendenti: determinante nullo.** Se una colonna è combinazione lineare delle altre, con le mosse precedenti la si azzera senza cambiare il determinante, che quindi vale $0$. Questo è metà del criterio fondamentale di §2.5.

### 2.3 Formule di calcolo: $2\times 2$, $3\times 3$ e sviluppo di Laplace

Per matrici piccole gli assiomi si condensano in formule esplicite.

**Caso $2\times 2$.**
$$\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc.$$
Il valore assoluto $\lvert ad-bc\rvert$ è l'area del parallelogramma di lati $(a,c)$ e $(b,d)$. La derivazione dagli assiomi è il modello di tutta la teoria ed è svolta per intero in §3.

*Micro-esempio.* $\det\begin{psmallmatrix}3&1\\2&4\end{psmallmatrix}=3\cdot4-1\cdot2=10$.

**Caso $3\times 3$ (regola di Sarrus).**
$$\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}=aei+bfg+cdh-ceg-afh-bdi.$$
Si sommano i tre prodotti lungo le diagonali «discendenti verso destra» e si sottraggono i tre lungo le «discendenti verso sinistra», dopo aver idealmente riscritto le prime due colonne a fianco della matrice. Attenzione: questa scorciatoia vale **solo** per il $3\times 3$; estenderla al $4\times 4$ è uno degli errori più comuni.

*Micro-esempio.* $\det\begin{psmallmatrix}2&1&3\\0&-1&2\\1&0&1\end{psmallmatrix}=2(-1)(1)+1\cdot2\cdot1+3\cdot0\cdot0-3(-1)(1)-2\cdot0\cdot2-1\cdot0\cdot1=-2+2+0+3-0-0=3$.

**Caso generale (sviluppo di Laplace).** Per una matrice $n\times n$ il determinante si riconduce a determinanti di taglia $n-1$. Chiamiamo **minore** $M_{ij}$ il determinante della sottomatrice $(n-1)\times(n-1)$ ottenuta cancellando la riga $i$ e la colonna $j$, e **cofattore** $C_{ij}=(-1)^{i+j}M_{ij}$. Allora, sviluppando lungo una qualsiasi riga $i$,
$$\det(A)=\sum_{j=1}^{n}(-1)^{i+j}\,a_{ij}\,M_{ij}=\sum_{j=1}^{n}a_{ij}\,C_{ij},$$
e vale la formula analoga sviluppando lungo una colonna. Il fattore $(-1)^{i+j}$ dispone i segni a scacchiera, con il $+$ nell'angolo in alto a sinistra. La libertà di scegliere la riga o la colonna è un dono pratico: **conviene svilupparsi lungo la linea con più zeri**, perché ogni entrata nulla cancella un intero minore.

*Micro-esempio.* Sviluppando $\det\begin{psmallmatrix}1&2&3\\0&4&5\\0&0&6\end{psmallmatrix}$ lungo la prima colonna, restano solo il termine $(1,1)$: $1\cdot\det\begin{psmallmatrix}4&5\\0&6\end{psmallmatrix}=1\cdot24=24$. È il prodotto della diagonale, come vedremo per ogni matrice triangolare.

```checkpoint
{"domanda": "Nello sviluppo di Laplace, qual è il segno che moltiplica il minore in posizione (2,3), cioè il segno del cofattore $C_{23}$?", "risposta": "Il segno è $(-1)^{2+3}=(-1)^5=-1$, quindi negativo. La posizione (2,3) sta su una casella '$-$' della scacchiera dei segni: $C_{23}=-M_{23}$."}
```

### 2.4 Le proprietà strutturali

Tre proprietà trasformano il determinante da formula in strumento teorico.

**Matrice triangolare: prodotto della diagonale.** Se $A$ è triangolare (superiore o inferiore), $\det(A)$ è il prodotto degli elementi diagonali $a_{11}a_{22}\cdots a_{nn}$. Questo, unito alle mosse di §2.2, è l'algoritmo efficiente per calcolare determinanti grandi: si riduce la matrice a triangolare con l'eliminazione di Gauss (tenendo conto degli scambi, che cambiano il segno) e si moltiplica la diagonale.

*Micro-esempio.* $\det\begin{psmallmatrix}2&7&-1\\0&3&5\\0&0&4\end{psmallmatrix}=2\cdot3\cdot4=24$, indipendentemente dai valori sopra la diagonale.

**Trasposizione: $\det(A^{T})=\det(A)$.** Trasporre non cambia il determinante. È la ragione per cui gli assiomi enunciati sulle colonne valgono identici sulle righe: ogni affermazione «per colonne» ha la sua gemella «per righe», e lo sviluppo di Laplace funziona indifferentemente lungo righe o colonne.

**Moltiplicatività: $\det(AB)=\det(A)\det(B)$.** Il determinante di un prodotto è il prodotto dei determinanti. Geometricamente è trasparente: se $A$ scala i volumi di un fattore $\det(A)$ e $B$ di un fattore $\det(B)$, applicarle in sequenza li scala del prodotto. Da qui discende subito il comportamento dell'inversa: da $A A^{-1}=I$ e $\det(I)=1$ si ricava
$$\det(A^{-1})=\frac{1}{\det(A)}\qquad(\text{quando }A\text{ è invertibile}).$$
La dimostrazione della moltiplicatività, elegante conseguenza dell'unicità, è in §3.

**Attenzione alla scalatura.** Moltiplicare l'intera matrice per uno scalare $c$ moltiplica *ciascuna* delle $n$ colonne per $c$, e per la multilinearità ogni fattore esce una volta:
$$\det(cA)=c^{\,n}\det(A),$$
non $c\det(A)$. L'esponente è la dimensione. Analogamente il determinante **non** è additivo: in generale $\det(A+B)\ne\det(A)+\det(B)$.

*Micro-esempio.* Se $A$ è $3\times 3$ con $\det(A)=5$, allora $\det(2A)=2^{3}\cdot5=40$.

```checkpoint
{"domanda": "Sia $A$ una matrice $3\\times 3$ con $\\det(A)=4$. Quanto valgono $\\det(2A)$ e $\\det(A^{-1})$?", "risposta": "$\\det(2A)=2^{3}\\det(A)=8\\cdot 4=32$, perché ciascuna delle 3 colonne porta fuori un fattore 2. E $\\det(A^{-1})=1/\\det(A)=1/4$, dalla moltiplicatività applicata a $AA^{-1}=I$."}
```

### 2.5 Il criterio di invertibilità e la geometria

Arriviamo al fatto che dà senso a tutto il resto e collega il determinante alle lezioni precedenti.

**Teorema (criterio del determinante).** Una matrice quadrata $A$ è invertibile se e solo se $\det(A)\ne 0$. Equivalentemente: $\det(A)=0$ se e solo se le colonne di $A$ sono linearmente dipendenti, se e solo se $\ker(A)\ne\{\mathbf{0}\}$, se e solo se $\operatorname{rk}(A)<n$.

Questo teorema salda il determinante alla catena di equivalenze del rango e delle basi: fornisce un *unico numero* la cui nullità certifica la singolarità. La dimostrazione completa è in §3.

*Micro-esempio.* $A=\begin{psmallmatrix}k&1\\2&k\end{psmallmatrix}$ ha $\det(A)=k^{2}-2$: la matrice è invertibile per ogni $k$ tranne $k=\pm\sqrt{2}$, dove le colonne diventano proporzionali.

**Interpretazione geometrica.** Per $A\in M_{n,n}(\mathbb{R})$ il numero $\lvert\det(A)\rvert$ è il volume $n$-dimensionale del parallelepipedo generato dalle colonne di $A$, e il segno codifica l'orientazione: $\det(A)>0$ conserva il verso dello spazio, $\det(A)<0$ lo inverte, $\det(A)=0$ lo appiattisce (volume nullo, colonne dipendenti). Il determinante è dunque il **fattore di scala dei volumi** della trasformazione $\mathbf{x}\mapsto A\mathbf{x}$: è la lettura geometrica del legame matrice–trasformazione lineare della lezione precedente.

Lo slider seguente rende visibile il cuore del criterio: due colonne come direzioni nel piano, e l'area del loro parallelogramma che collassa quando le direzioni coincidono.

```slider
{"title": "Colonne (1,1) [retta y=x] e (1,a) [retta y=a·x]: l'area del parallelogramma è det = a−1 e si annulla quando le due direzioni coincidono, cioè a=1 (colonne dipendenti)", "fn": "x", "fn2": "a*x", "domain": [-3, 3], "yDomain": [-6, 6], "pname": "a", "pmin": -2, "pmax": 3, "pdefault": 2, "pstep": 0.1, "plabel": "pendenza a della seconda colonna", "label1": "prima colonna, direzione y = x", "label2": "seconda colonna, direzione y = a·x"}
```

### 2.6 Regola di Cramer e formula dell'inversa

Il determinante non solo diagnostica l'invertibilità: quando essa vale, fornisce formule chiuse per la soluzione e per l'inversa. Sono strumenti soprattutto teorici — per il calcolo effettivo su sistemi grandi l'eliminazione di Gauss resta molto più economica — ma la loro forma esplicita è preziosa nelle dimostrazioni e nell'analisi al variare dei parametri.

**Regola di Cramer.** Se $\det(A)\ne 0$, l'unica soluzione di $A\mathbf{x}=\mathbf{b}$ ha componenti
$$x_j=\frac{\det(A_j)}{\det(A)},\qquad j=1,\dots,n,$$
dove $A_j$ è la matrice ottenuta da $A$ sostituendo la $j$-esima colonna con il termine noto $\mathbf{b}$.

*Micro-esempio.* Per $\begin{psmallmatrix}2&1\\1&-1\end{psmallmatrix}\mathbf{x}=\begin{psmallmatrix}5\\1\end{psmallmatrix}$ si ha $\det(A)=-3$, $\det(A_1)=\det\begin{psmallmatrix}5&1\\1&-1\end{psmallmatrix}=-6$, quindi $x_1=-6/-3=2$; e $\det(A_2)=\det\begin{psmallmatrix}2&5\\1&1\end{psmallmatrix}=-3$, quindi $x_2=1$.

**Formula dell'inversa con l'aggiunta.** Sia $C_{ij}$ il cofattore di posto $(i,j)$. La **matrice aggiunta** $\operatorname{adj}(A)$ è la trasposta della matrice dei cofattori, cioè $(\operatorname{adj}(A))_{ij}=C_{ji}$. Allora, se $\det(A)\ne 0$,
$$A^{-1}=\frac{1}{\det(A)}\operatorname{adj}(A).$$
L'indice invertito $C_{ji}$ (non $C_{ij}$) è il dettaglio da non dimenticare: l'aggiunta è la *trasposta* della matrice dei cofattori.

*Micro-esempio.* Per $A=\begin{psmallmatrix}2&1\\5&3\end{psmallmatrix}$, $\det(A)=1$; i cofattori danno $\operatorname{adj}(A)=\begin{psmallmatrix}3&-1\\-5&2\end{psmallmatrix}$, quindi $A^{-1}=\begin{psmallmatrix}3&-1\\-5&2\end{psmallmatrix}$.

---

## 3. Dimostrazioni

### 3.1 La formula $2\times 2$ ricavata dai soli assiomi

Mostriamo come le tre proprietà, senza altra informazione, costringano la formula $ad-bc$. È il prototipo del meccanismo di unicità.

Scriviamo le colonne di $A=\begin{psmallmatrix}a&b\\c&d\end{psmallmatrix}$ nella base canonica: $\mathbf{a}_1=(a,c)=a\mathbf{e}_1+c\mathbf{e}_2$ e $\mathbf{a}_2=(b,d)=b\mathbf{e}_1+d\mathbf{e}_2$.

Applichiamo la multilinearità (assioma 1) alla prima colonna, tenendo fissa la seconda:
$$\det(A)=\det(a\mathbf{e}_1+c\mathbf{e}_2,\ \mathbf{a}_2)=a\det(\mathbf{e}_1,\mathbf{a}_2)+c\det(\mathbf{e}_2,\mathbf{a}_2).$$
Ora sviluppiamo la seconda colonna in ciascun termine:
$$\det(A)=a\big[b\det(\mathbf{e}_1,\mathbf{e}_1)+d\det(\mathbf{e}_1,\mathbf{e}_2)\big]+c\big[b\det(\mathbf{e}_2,\mathbf{e}_1)+d\det(\mathbf{e}_2,\mathbf{e}_2)\big].$$
Interviene ora l'alternanza (assioma 2): $\det(\mathbf{e}_1,\mathbf{e}_1)=0$ e $\det(\mathbf{e}_2,\mathbf{e}_2)=0$, perché in ciascuno le due colonne coincidono. Restano
$$\det(A)=ad\,\det(\mathbf{e}_1,\mathbf{e}_2)+cb\,\det(\mathbf{e}_2,\mathbf{e}_1).$$
La normalizzazione (assioma 3) dà $\det(\mathbf{e}_1,\mathbf{e}_2)=\det(I_2)=1$; e dalla proprietà di scambio (ricavata qui sotto in 3.2) $\det(\mathbf{e}_2,\mathbf{e}_1)=-1$. Concludiamo
$$\det(A)=ad\cdot 1+cb\cdot(-1)=ad-bc.\qquad\blacksquare$$
Nessuna scelta era possibile lungo il cammino: gli assiomi hanno imposto ogni passaggio. Questo è ciò che significa unicità.

### 3.2 Scambio di colonne e invarianza per combinazioni

<details class="dim-tecnica"><summary>Dimostrazione: lo scambio cambia il segno, e sommare un multiplo di una colonna non cambia il determinante</summary>

**Scambio.** Siano $\mathbf{u},\mathbf{v}$ le due colonne coinvolte, le altre fissate. Per l'alternanza, il determinante con due colonne uguali si annulla; consideriamo allora la colonna «somma» $\mathbf{u}+\mathbf{v}$ posta in entrambe le posizioni:
$$0=\det(\dots,\mathbf{u}+\mathbf{v},\dots,\mathbf{u}+\mathbf{v},\dots).$$
Sviluppando per multilinearità nelle due posizioni si ottengono quattro termini:
$$0=\det(\dots,\mathbf{u},\dots,\mathbf{u},\dots)+\det(\dots,\mathbf{u},\dots,\mathbf{v},\dots)+\det(\dots,\mathbf{v},\dots,\mathbf{u},\dots)+\det(\dots,\mathbf{v},\dots,\mathbf{v},\dots).$$
Il primo e il quarto termine hanno due colonne uguali, quindi valgono $0$ per l'alternanza. Resta
$$0=\det(\dots,\mathbf{u},\dots,\mathbf{v},\dots)+\det(\dots,\mathbf{v},\dots,\mathbf{u},\dots),$$
cioè lo scambio di $\mathbf{u}$ e $\mathbf{v}$ inverte il segno. $\blacksquare$

**Invarianza per combinazioni.** Aggiungiamo alla colonna $\mathbf{a}_j$ il multiplo $\lambda\mathbf{a}_k$ di un'altra colonna ($k\ne j$). Per la multilinearità nella posizione $j$:
$$\det(\dots,\mathbf{a}_j+\lambda\mathbf{a}_k,\dots)=\det(\dots,\mathbf{a}_j,\dots)+\lambda\det(\dots,\mathbf{a}_k,\dots).$$
Nel secondo determinante la colonna $\mathbf{a}_k$ compare due volte (nella sua posizione originaria $k$ e ora anche in posizione $j$): due colonne uguali, quindi quel termine è $0$ per l'alternanza. Resta $\det(\dots,\mathbf{a}_j,\dots)$, il determinante di partenza. $\blacksquare$

Queste due proprietà giustificano l'uso dell'eliminazione di Gauss nel calcolo del determinante: le operazioni «sommo a una colonna un multiplo di un'altra» lo lasciano invariato, e gli scambi ne registrano solo un cambio di segno.

</details>

### 3.3 Il criterio di invertibilità

Dimostriamo che $\det(A)=0$ se e solo se le colonne di $A$ sono linearmente dipendenti — equivalentemente, $A$ non è invertibile.

**($\Leftarrow$) Colonne dipendenti $\Rightarrow$ $\det(A)=0$.** Se le colonne sono dipendenti, una di esse, diciamo $\mathbf{a}_j$, è combinazione lineare delle altre: $\mathbf{a}_j=\sum_{k\ne j}\lambda_k\mathbf{a}_k$. Usando ripetutamente l'invarianza di 3.2, sottraiamo da $\mathbf{a}_j$ ciascun multiplo $\lambda_k\mathbf{a}_k$ senza alterare il determinante; al termine la colonna $j$ è diventata il vettore nullo. Una colonna nulla forza $\det(A)=0$ (multilinearità con fattore $0$). $\blacksquare$

**($\Rightarrow$) Colonne indipendenti $\Rightarrow$ $\det(A)\ne 0$.** Se le colonne sono indipendenti, formano una base di $\mathbb{R}^n$ (sono $n$ vettori indipendenti in dimensione $n$, per il risultato della lezione sulle basi $[algebra-06-indipendenza-basi]$). Allora $A$ è invertibile, cioè esiste $B$ con $AB=I$. Per la moltiplicatività (3.4),
$$\det(A)\det(B)=\det(AB)=\det(I)=1,$$
e un prodotto che vale $1$ ha entrambi i fattori diversi da zero. Quindi $\det(A)\ne 0$. $\blacksquare$

Le due implicazioni insieme danno l'equivalenza cercata, e per contrapposizione: $\det(A)=0\iff$ colonne dipendenti $\iff$ $A$ singolare.

### 3.4 Moltiplicatività del determinante

<details class="dim-tecnica"><summary>Dimostrazione: $\det(AB)=\det(A)\det(B)$ tramite l'unicità</summary>

Fissiamo $A$ e definiamo la funzione $D\colon M_{n,n}(\mathbb{R})\to\mathbb{R}$ ponendo
$$D(X)=\det(AX).$$
Osserviamo come $D$ agisce sulle colonne di $X$. Le colonne di $AX$ sono $A\mathbf{x}_1,\dots,A\mathbf{x}_n$, dove $\mathbf{x}_1,\dots,\mathbf{x}_n$ sono le colonne di $X$; infatti la $j$-esima colonna di $AX$ è $A$ applicata alla $j$-esima colonna di $X$.

*$D$ è multilineare nelle colonne di $X$.* Poiché $\mathbf{x}\mapsto A\mathbf{x}$ è lineare, se $\mathbf{x}_j=\alpha\mathbf{u}+\beta\mathbf{v}$ allora la corrispondente colonna di $AX$ è $\alpha(A\mathbf{u})+\beta(A\mathbf{v})$; la multilinearità di $\det$ nelle colonne di $AX$ si trasferisce così a $D$ nelle colonne di $X$.

*$D$ è alternante.* Se due colonne di $X$ coincidono, coincidono anche le corrispondenti colonne di $AX$, e $\det(AX)=0$.

$D$ è dunque una funzione multilineare alternante delle colonne di $X$. Un tale oggetto, per la parte di unicità del teorema di caratterizzazione, è necessariamente un multiplo costante del determinante: $D(X)=\kappa\det(X)$ per ogni $X$, con $\kappa=D(I)$. Ma $D(I)=\det(AI)=\det(A)$. Perciò
$$\det(AX)=\det(A)\det(X)\quad\text{per ogni }X,$$
che è la tesi con $X=B$. $\blacksquare$

Nota sull'affermazione «multilineare alternante $\Rightarrow$ multiplo del determinante»: è la formulazione precisa dell'unicità. Una funzione multilineare alternante $F$ vale $F(I)\cdot\det$ perché, ripetendo su $F$ lo sviluppo di §3.1, ogni suo valore è determinato da $F(I)$ esattamente come $\det$ è determinato da $\det(I)=1$.

</details>

### 3.5 Determinante di una matrice triangolare

<details class="dim-tecnica"><summary>Dimostrazione: per $A$ triangolare, $\det(A)=a_{11}a_{22}\cdots a_{nn}$</summary>

Sia $A$ triangolare superiore (il caso inferiore è identico per trasposizione, dato che $\det(A^T)=\det(A)$). Procediamo per induzione su $n$ sviluppando con Laplace lungo la **prima colonna**, che ha una sola entrata potenzialmente non nulla, $a_{11}$, essendo tutte le altre sotto la diagonale nulle.

*Base.* Per $n=1$, $\det(a_{11})=a_{11}$.

*Passo induttivo.* Lo sviluppo lungo la prima colonna dà
$$\det(A)=a_{11}\,(-1)^{1+1}M_{11}=a_{11}\,M_{11},$$
poiché tutti gli altri addendi hanno coefficiente $a_{i1}=0$ per $i\ge 2$. Il minore $M_{11}$ è il determinante della sottomatrice ottenuta cancellando la prima riga e la prima colonna: essa è ancora triangolare superiore, di taglia $(n-1)$, con diagonale $a_{22},\dots,a_{nn}$. Per ipotesi induttiva $M_{11}=a_{22}\cdots a_{nn}$. Quindi
$$\det(A)=a_{11}\,a_{22}\cdots a_{nn}.\qquad\blacksquare$$

In particolare, poiché ogni matrice si porta a forma triangolare con le operazioni di §3.2 (che al più cambiano il segno per gli scambi), questo fornisce l'algoritmo di calcolo efficiente: ridurre e moltiplicare la diagonale.

</details>

### 3.6 La regola di Cramer

<details class="dim-tecnica"><summary>Derivazione della regola di Cramer dalla multilinearità</summary>

Sia $\det(A)\ne 0$ e $\mathbf{x}$ la soluzione di $A\mathbf{x}=\mathbf{b}$, con colonne di $A$ denotate $\mathbf{a}_1,\dots,\mathbf{a}_n$. L'equazione dice che $\mathbf{b}=x_1\mathbf{a}_1+\dots+x_n\mathbf{a}_n$.

Costruiamo $A_j$ sostituendo la colonna $j$ di $A$ con $\mathbf{b}$ e calcoliamo $\det(A_j)$ inserendo l'espressione di $\mathbf{b}$:
$$\det(A_j)=\det(\mathbf{a}_1,\dots,\underbrace{\textstyle\sum_{k}x_k\mathbf{a}_k}_{\text{posto }j},\dots,\mathbf{a}_n).$$
Per la multilinearità nella posizione $j$ questo è $\sum_k x_k\det(\mathbf{a}_1,\dots,\mathbf{a}_k\ (\text{al posto }j),\dots,\mathbf{a}_n)$. In ognuno di questi determinanti, per $k\ne j$, la colonna $\mathbf{a}_k$ compare due volte (nella sua posizione $k$ e al posto $j$): due colonne uguali, addendo nullo per alternanza. Sopravvive solo $k=j$, che restituisce esattamente $A$:
$$\det(A_j)=x_j\det(A).$$
Dividendo per $\det(A)\ne 0$ si ottiene $x_j=\det(A_j)/\det(A)$. $\blacksquare$

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — $2\times 2$ e sua area.** $A=\begin{psmallmatrix}3&1\\2&4\end{psmallmatrix}$: $\det(A)=3\cdot4-1\cdot2=10$. Il parallelogramma di lati $(3,2)$ e $(1,4)$ ha area $\lvert10\rvert=10$; il segno positivo dice che l'orientazione delle due colonne è quella canonica.

**Esempio 2 (introduttivo) — determinante nullo e dipendenza.** $A=\begin{psmallmatrix}1&2\\3&6\end{psmallmatrix}$: $\det(A)=6-6=0$. La seconda colonna è il doppio della prima, colonne dipendenti, $A$ non invertibile. Il criterio di §2.5 si legge qui a occhio.

**Esempio 3 (intermedio) — $3\times 3$ con Sarrus.** $A=\begin{psmallmatrix}2&1&3\\0&-1&2\\1&0&1\end{psmallmatrix}$. Diagonali discendenti a destra: $2(-1)(1)+1\cdot2\cdot1+3\cdot0\cdot0=-2+2+0=0$. Diagonali discendenti a sinistra: $3(-1)(1)+2\cdot2\cdot(? )$... svolgiamo con la formula ordinata $aei+bfg+cdh-ceg-afh-bdi$: $-2+2+0-3\cdot(-1)\cdot1-2\cdot0\cdot2-1\cdot0\cdot1=0-(-3)-0-0=3$. Dunque $\det(A)=3$.

**Esempio 4 (intermedio) — sfruttare gli zeri con Laplace.** Per $A=\begin{psmallmatrix}5&2&7\\0&3&0\\0&4&1\end{psmallmatrix}$ conviene la seconda riga (due zeri): $\det(A)=3\cdot(-1)^{2+2}\det\begin{psmallmatrix}5&7\\0&1\end{psmallmatrix}=3\cdot(5\cdot1-7\cdot0)=15$. Scegliere bene la linea di sviluppo ha ridotto tutto a un solo minore $2\times 2$.

**Esempio 5 (intermedio) — invertibilità parametrica.** $A=\begin{psmallmatrix}t&2&0\\1&t&0\\0&0&3\end{psmallmatrix}$. Sviluppando lungo la terza colonna: $\det(A)=3\det\begin{psmallmatrix}t&2\\1&t\end{psmallmatrix}=3(t^2-2)$. La matrice è singolare esattamente per $t=\pm\sqrt2$; altrove è invertibile.

**Esempio 6 (intermedio) — proprietà del prodotto come verifica.** $A=\begin{psmallmatrix}2&1\\0&3\end{psmallmatrix}$, $B=\begin{psmallmatrix}1&-1\\1&2\end{psmallmatrix}$: $\det(A)=6$, $\det(B)=3$, quindi $\det(AB)=18$. Controllo diretto: $AB=\begin{psmallmatrix}3&0\\3&6\end{psmallmatrix}$, $\det(AB)=18-0=18$. La moltiplicatività fornisce un test rapido contro gli errori di calcolo.

**Esempio 7 (avanzato) — matrice a blocchi triangolare.** $A=\begin{psmallmatrix}2&0&0&0\\1&3&0&0\\4&2&1&0\\1&0&2&5\end{psmallmatrix}$ è triangolare inferiore: $\det(A)=2\cdot3\cdot1\cdot5=30$. Nessuno sviluppo di Laplace: il risultato è il prodotto della diagonale.

**Esempio 8 (applicativo) — volume in $\mathbb{R}^3$ e orientazione.** I vettori $\mathbf{a}=(1,0,2)$, $\mathbf{b}=(0,1,1)$, $\mathbf{c}=(1,1,0)$ generano un parallelepipedo di volume $\lvert\det[\mathbf{a}\,\mathbf{b}\,\mathbf{c}]\rvert$. Sviluppando lungo la prima riga:
$$\det\begin{pmatrix}1&0&1\\0&1&1\\2&1&0\end{pmatrix}=1\det\begin{psmallmatrix}1&1\\1&0\end{psmallmatrix}-0+1\det\begin{psmallmatrix}0&1\\2&1\end{psmallmatrix}=1(0-1)+1(0-2)=-3.$$
Il volume è $\lvert-3\rvert=3$; il segno negativo segnala che la terna $(\mathbf{a},\mathbf{b},\mathbf{c})$ è orientata «alla mancina» rispetto alla base canonica.

---

## 5. Collegamenti e riepilogo

Il determinante chiude e unifica il filo conduttore dei moduli precedenti. Il criterio di §2.5 aggiunge un tassello alla catena di equivalenze già incontrata con il rango e le basi: alle condizioni «colonne indipendenti», «rango massimo», «nucleo banale», «sistema con soluzione unica» si affianca ora «determinante non nullo», con il vantaggio di essere un *singolo numero* calcolabile direttamente. In questo senso il determinante è il compagno quantitativo del teorema di Rouché–Capelli $[algebra-04-rango-rouche-capelli]$ e del concetto di base $[algebra-06-indipendenza-basi]$: dove quelli descrivono *quante* soluzioni, il determinante fornisce la diagnosi immediata *se* la matrice è regolare.

Il legame con le trasformazioni lineari $[algebra-07-trasformazioni-lineari]$ è geometrico: la matrice associata a una trasformazione ha per determinante il fattore di scala dei volumi e, nel segno, l'informazione sull'orientazione. Una trasformazione con determinante nullo è precisamente una che comprime lo spazio in dimensione inferiore — nucleo non banale, immagine di dimensione minore — riconnettendo il determinante al teorema fondamentale $\dim\ker+\dim\operatorname{Im}=\dim V$. Guardando avanti, il determinante è lo strumento con cui si costruisce il **polinomio caratteristico** $\det(A-\lambda I)$, la porta d'ingresso agli autovalori e autovettori $[algebra-09-autovalori-autovettori]$: le radici di quel polinomio sono gli scalari per cui $A-\lambda I$ diventa singolare, cioè annulla il determinante. Fuori dall'algebra lineare, il determinante ricompare come **Jacobiano** nel cambio di variabili degli integrali multipli, dove $\lvert\det J\rvert$ è il fattore di correzione dei volumi infinitesimi — la stessa idea di «scala dei volumi», portata al livello locale del calcolo differenziale.

L'essenziale da trattenere. Il determinante è l'unica funzione multilineare alternante normalizzata sulle colonne; da questi tre assiomi discende ogni formula. Geometricamente è il volume con segno del parallelepipedo delle colonne, e quindi il fattore di scala dei volumi della trasformazione associata. Si calcola con $ad-bc$ nel $2\times 2$, con Sarrus nel $3\times 3$, con lo sviluppo di Laplace $\sum_j(-1)^{i+j}a_{ij}M_{ij}$ in generale — scegliendo la linea con più zeri — o, in modo efficiente, riducendo a triangolare e moltiplicando la diagonale. Le proprietà chiave sono $\det(AB)=\det(A)\det(B)$, $\det(A^T)=\det(A)$, $\det(cA)=c^n\det(A)$, $\det(A^{-1})=1/\det(A)$. Il criterio fondamentale è $A$ invertibile $\iff\det(A)\ne 0$. Quando $\det(A)\ne 0$, Cramer dà $x_j=\det(A_j)/\det(A)$ e l'inversa è $A^{-1}=\operatorname{adj}(A)/\det(A)$.

---

## 6. Esercizi

<details class="dim-tecnica"><summary>Esercizio 1 (introduttivo) — determinante 3×3 con Laplace</summary>

**Testo.** Calcolare $\det\begin{psmallmatrix}2&1&3\\0&-1&2\\1&0&1\end{psmallmatrix}$ sviluppando lungo la prima colonna.

**Soluzione.** La prima colonna ha entrate $2,0,1$; sopravvivono i termini $(1,1)$ e $(3,1)$:
$$\det=2(-1)^{1+1}\det\begin{psmallmatrix}-1&2\\0&1\end{psmallmatrix}+1(-1)^{3+1}\det\begin{psmallmatrix}1&3\\-1&2\end{psmallmatrix}.$$
Il primo minore vale $(-1)(1)-2\cdot0=-1$; il secondo $1\cdot2-3(-1)=2+3=5$. Quindi
$$\det=2(1)(-1)+1(1)(5)=-2+5=\mathbf{3},$$
in accordo con il calcolo per Sarrus dell'Esempio 3.

</details>

<details class="dim-tecnica"><summary>Esercizio 2 (standard) — invertibilità parametrica</summary>

**Testo.** Per quali $t\in\mathbb{R}$ la matrice $A=\begin{psmallmatrix}t&2&0\\1&t&0\\0&0&3\end{psmallmatrix}$ non è invertibile?

**Soluzione.** Sviluppando lungo la terza colonna (una sola entrata non nulla, $3$ in posizione $(3,3)$):
$$\det(A)=3(-1)^{3+3}\det\begin{psmallmatrix}t&2\\1&t\end{psmallmatrix}=3(t^2-2).$$
Per il criterio del determinante, $A$ è singolare $\iff\det(A)=0\iff t^2=2\iff t=\pm\sqrt2$.

</details>

<details class="dim-tecnica"><summary>Esercizio 3 (standard) — algebra delle proprietà</summary>

**Testo.** Siano $A,B\in\mathbb{R}^{3\times3}$ con $\det(A)=5$ e $\det(B)=3$. Calcolare (a) $\det(AB)$, (b) $\det(2A)$, (c) $\det(A^{-1}B)$, (d) $\det(A^TB^{-1})$.

**Soluzione.** (a) $\det(AB)=\det(A)\det(B)=15$. (b) $\det(2A)=2^3\det(A)=8\cdot5=40$ (esponente $=$ dimensione). (c) $\det(A^{-1}B)=\det(A^{-1})\det(B)=\tfrac{1}{5}\cdot3=\tfrac{3}{5}$. (d) $\det(A^TB^{-1})=\det(A^T)\det(B^{-1})=\det(A)\cdot\tfrac{1}{\det(B)}=5\cdot\tfrac13=\tfrac53$.

</details>

<details class="dim-tecnica"><summary>Esercizio 4 (standard) — regola di Cramer</summary>

**Testo.** Risolvere con Cramer $\begin{cases}x+2y=7\\3x-y=1\end{cases}$.

**Soluzione.** $A=\begin{psmallmatrix}1&2\\3&-1\end{psmallmatrix}$, $\det(A)=-1-6=-7\ne0$: soluzione unica. Sostituendo il termine noto $\mathbf{b}=(7,1)$:
$$A_1=\begin{psmallmatrix}7&2\\1&-1\end{psmallmatrix},\ \det(A_1)=-7-2=-9,\qquad A_2=\begin{psmallmatrix}1&7\\3&1\end{psmallmatrix},\ \det(A_2)=1-21=-20.$$
Quindi $x=\dfrac{-9}{-7}=\dfrac97$, $y=\dfrac{-20}{-7}=\dfrac{20}{7}$. Verifica: $\tfrac97+2\cdot\tfrac{20}{7}=\tfrac{49}{7}=7$ ✓ e $3\cdot\tfrac97-\tfrac{20}{7}=\tfrac{7}{7}=1$ ✓.

</details>

<details class="dim-tecnica"><summary>Esercizio 5 (standard) — inversa con l'aggiunta</summary>

**Testo.** Calcolare $A^{-1}$ per $A=\begin{psmallmatrix}1&2\\3&7\end{psmallmatrix}$ con la formula dell'aggiunta.

**Soluzione.** $\det(A)=7-6=1$. I cofattori sono $C_{11}=7$, $C_{12}=-3$, $C_{21}=-2$, $C_{22}=1$. L'aggiunta è la *trasposta* della matrice dei cofattori: $\operatorname{adj}(A)=\begin{psmallmatrix}C_{11}&C_{21}\\C_{12}&C_{22}\end{psmallmatrix}=\begin{psmallmatrix}7&-2\\-3&1\end{psmallmatrix}$. Dunque $A^{-1}=\tfrac11\begin{psmallmatrix}7&-2\\-3&1\end{psmallmatrix}$. Verifica: $\begin{psmallmatrix}1&2\\3&7\end{psmallmatrix}\begin{psmallmatrix}7&-2\\-3&1\end{psmallmatrix}=\begin{psmallmatrix}1&0\\0&1\end{psmallmatrix}$ ✓.

</details>

<details class="dim-tecnica"><summary>Esercizio 6 (standard) — area di un triangolo</summary>

**Testo.** Calcolare l'area del triangolo di vertici $P=(1,2)$, $Q=(4,3)$, $R=(2,6)$.

**Soluzione.** I lati uscenti da $P$ sono $\mathbf{u}=Q-P=(3,1)$ e $\mathbf{v}=R-P=(1,4)$. L'area del parallelogramma è $\lvert\det\begin{psmallmatrix}3&1\\1&4\end{psmallmatrix}\rvert=\lvert12-1\rvert=11$; quella del triangolo è la metà, $\tfrac{11}{2}=5{,}5$ unità quadrate.

</details>

<details class="dim-tecnica"><summary>Esercizio 7 (avanzato) — calcolo per riduzione a triangolare</summary>

**Testo.** Calcolare $\det\begin{psmallmatrix}1&2&1\\2&5&3\\1&3&4\end{psmallmatrix}$ usando le operazioni sulle righe (o colonne) che non alterano il determinante.

**Soluzione.** Sottraiamo alla riga 2 il doppio della riga 1 e alla riga 3 la riga 1 (operazioni che non cambiano il determinante, versione «per righe» di §3.2):
$$\begin{pmatrix}1&2&1\\2&5&3\\1&3&4\end{pmatrix}\longrightarrow\begin{pmatrix}1&2&1\\0&1&1\\0&1&3\end{pmatrix}\longrightarrow\begin{pmatrix}1&2&1\\0&1&1\\0&0&2\end{pmatrix},$$
dove nell'ultimo passaggio si sottrae la riga 2 alla riga 3. La matrice finale è triangolare superiore: $\det=1\cdot1\cdot2=\mathbf{2}$. Nessuno scambio è stato usato, quindi non c'è cambio di segno.

</details>

<details class="dim-tecnica"><summary>Esercizio 8 (applicativo) — volume e orientazione in ℝ³</summary>

**Testo.** Determinare il volume del parallelepipedo generato da $\mathbf{a}=(1,0,2)$, $\mathbf{b}=(0,1,1)$, $\mathbf{c}=(1,1,0)$ e stabilirne l'orientazione.

**Soluzione.** Poniamo i vettori come colonne e sviluppiamo lungo la prima riga:
$$\det\begin{pmatrix}1&0&1\\0&1&1\\2&1&0\end{pmatrix}=1\det\begin{psmallmatrix}1&1\\1&0\end{psmallmatrix}-0\cdot(\cdots)+1\det\begin{psmallmatrix}0&1\\2&1\end{psmallmatrix}=1(0-1)+1(0-2)=-3.$$
Il volume è $\lvert-3\rvert=3$ unità cubiche. Il segno negativo indica che la terna è orientata negativamente (sistema mancino) rispetto alla base canonica. Poiché il determinante è non nullo, i tre vettori sono indipendenti e formano una base di $\mathbb{R}^3$.

</details>
