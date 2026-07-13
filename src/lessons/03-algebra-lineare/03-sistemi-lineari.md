---
id: algebra-03-sistemi-lineari
titolo: "Sistemi lineari e metodo di Gauss"
materia: algebra-lineare
argomento: "Fondamenti"
modulo: "Vettori, matrici e sistemi lineari"
livello: universitario
slug: algebra-03-sistemi-lineari

# legacy
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: "Sistemi lineari e metodo di Gauss"
title_en: "Linear systems and Gaussian elimination"
level: blue
order: 3
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Sistemi lineari, eliminazione di Gauss, forma a scalini, struttura dell'insieme delle soluzioni"

prerequisiti:
  - algebra-01-vettori
  - algebra-02-matrici

collegamenti:
  - algebra-02-matrici
  - algebra-04-rango-rouche-capelli
  - algebra-05-spazi-vettoriali
  - algebra-06-indipendenza-basi
  - algebra-08-determinanti

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Sistemi lineari, forma matriciale A x = b, eliminazione di Gauss, sistemi omogenei, struttura delle soluzioni"
    note: "appunti-prof: notazione, convenzioni d'esame; classificazione compatibile/incompatibile"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Interpretazione geometrica (intersezione di rette/piani), forma a scalini ridotta, variabili libere e pivot"
    note: "visualizzazione geometrica e lettura per colonne"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Insieme delle soluzioni come traslato del nucleo; soluzione generale = particolare + omogenea"
    note: "rigore sulla struttura affine dell'insieme delle soluzioni"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Operazioni elementari sulle righe, esempi risolti, sistemi parametrici"
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

Quasi ogni domanda quantitativa che inizia con «trova i valori che soddisfano contemporaneamente queste condizioni» è, sotto la superficie, un sistema di equazioni lineari. Un'azienda vuole sapere quante unità di due prodotti produrre per usare esattamente le ore-macchina e le ore-lavoro disponibili; un chimico cerca i coefficienti che bilanciano una reazione; un economista impone che l'offerta eguagli la domanda su più mercati simultaneamente. In tutti questi casi le incognite compaiono solo elevate alla prima potenza e solo sommate tra loro: nessun prodotto tra incognite, nessun quadrato. Questa restrizione — la **linearità** — è ciò che rende il problema completamente risolvibile con un unico algoritmo meccanico.

L'intuizione geometrica è la porta d'ingresso. Un'equazione lineare in due incognite, come $2x + 3y = 5$, descrive una **retta** nel piano. Due equazioni descrivono due rette, e risolvere il sistema significa cercare i punti che stanno su entrambe: la loro intersezione. Qui si vedono già i tre destini possibili di ogni sistema lineare. Le due rette possono incrociarsi in un punto (una soluzione), possono essere la stessa retta scritta in due modi (infinite soluzioni), oppure possono essere parallele e distinte (nessuna soluzione). Non esistono altri casi: due rette nel piano non possono incontrarsi in esattamente due punti. Salendo a tre incognite, ogni equazione diventa un **piano** nello spazio, e risolvere il sistema significa intersecare piani; ma la trichotomia resta identica — un punto, infiniti punti, oppure il vuoto.

Il problema è che «disegnare e guardare dove si incrociano» non è un metodo: fallisce con quattro incognite, dove non c'è più un disegno, e fallisce quando i numeri non sono comodi. Serve una procedura algebrica che dia sempre la risposta corretta, in un numero finito di passi, qualunque sia la dimensione. Questa procedura è l'**eliminazione di Gauss**. L'idea di fondo è semplice e potente: trasformare il sistema in uno più semplice ma con *esattamente le stesse soluzioni*, ripetendo mosse che non alterano l'insieme delle risposte, fino a raggiungere una forma «a gradini» in cui la soluzione si legge quasi direttamente. È l'algoritmo più usato del calcolo scientifico — dentro ogni software che risolve sistemi, dalla previsione strutturale di un ponte alla ricostruzione di una TAC.

Storicamente il metodo porta il nome di Carl Friedrich Gauss, che lo usò intorno al 1810 per calcolare l'orbita dell'asteroide Cerere a partire da poche osservazioni, ma tecniche di eliminazione equivalenti comparivano già nel testo cinese *Jiuzhang Suanshu* («I nove capitoli sull'arte matematica»), oltre duemila anni fa. La forma sistematica e la notazione matriciale che usiamo oggi sono però un prodotto dell'algebra lineare moderna, ed è in quel linguaggio — matrici e vettori, non liste di equazioni — che il metodo mostra tutta la sua eleganza.

## 2. Teoria

### 2.1 Sistema lineare e sua forma matriciale

Un **sistema di $m$ equazioni lineari in $n$ incognite** $x_1, x_2, \ldots, x_n$ è una lista di $m$ condizioni:

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \qquad\qquad\vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$

I numeri $a_{ij}$ sono i **coefficienti** (il primo indice $i$ dice a quale equazione appartengono, il secondo $j$ a quale incognita moltiplicano), i numeri $b_i$ sono i **termini noti**, e $x_j$ sono le incognite che vogliamo determinare. «Lineare» significa proprio questo: ogni incognita compare al più elevata alla prima potenza e non moltiplicata per un'altra incognita.

Raccogliendo i coefficienti in una matrice $A$, le incognite in un vettore $\mathbf{x}$ e i termini noti in un vettore $\mathbf{b}$, tutto il sistema si comprime nell'unica scrittura

$$A\mathbf{x} = \mathbf{b}, \qquad A \in \mathbb{R}^{m\times n},\ \ \mathbf{x}\in\mathbb{R}^n,\ \ \mathbf{b}\in\mathbb{R}^m.$$

Questa non è solo un'abbreviazione: è la stessa lezione precedente sul prodotto matrice-vettore. La riga $i$-esima di $A\mathbf{x}$ è il prodotto scalare tra la riga $i$ di $A$ e il vettore $\mathbf{x}$, e imporre che valga $b_i$ ricostruisce esattamente l'equazione $i$-esima. C'è però una seconda lettura, quella *per colonne*, che sarà decisiva più avanti: $A\mathbf{x}$ è la combinazione lineare delle colonne di $A$ con pesi $x_1, \ldots, x_n$. Quindi risolvere $A\mathbf{x} = \mathbf{b}$ significa chiedersi: **con quali pesi devo combinare le colonne di $A$ per ottenere $\mathbf{b}$?**

*Micro-esempio.* Il sistema $\begin{cases} x + 2y = 5 \\ 3x + y = 10\end{cases}$ diventa $A\mathbf{x}=\mathbf{b}$ con $A = \begin{psmallmatrix}1 & 2\\ 3 & 1\end{psmallmatrix}$, $\mathbf{x}=\begin{psmallmatrix}x\\y\end{psmallmatrix}$, $\mathbf{b}=\begin{psmallmatrix}5\\10\end{psmallmatrix}$. Nella lettura per colonne cerchiamo $x\begin{psmallmatrix}1\\3\end{psmallmatrix} + y\begin{psmallmatrix}2\\1\end{psmallmatrix} = \begin{psmallmatrix}5\\10\end{psmallmatrix}$.

Un caso speciale importante è il **sistema omogeneo** $A\mathbf{x} = \mathbf{0}$, in cui tutti i termini noti sono nulli. Un sistema omogeneo non è mai impossibile: ha sempre almeno la **soluzione banale** $\mathbf{x} = \mathbf{0}$ (combinare le colonne con pesi tutti nulli dà il vettore nullo). La domanda interessante sarà se ne possiede *altre* oltre a quella.

### 2.2 Matrice aumentata e operazioni elementari

Per eseguire il metodo conviene abbandonare i simboli $x, y, z$ — che sono solo etichette — e lavorare sulla tabella dei numeri. La **matrice aumentata** affianca ai coefficienti la colonna dei termini noti, separata da una barra:

$$[A\mid\mathbf{b}] = \left(\begin{array}{cccc|c} a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\ a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\ \vdots & & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} & b_m \end{array}\right).$$

Ogni riga di questa tabella *è* un'equazione. Manipolare il sistema in modo da non cambiarne le soluzioni corrisponde ad applicare alle righe le tre **operazioni elementari**:

| Operazione | Notazione | Che cosa fa |
| --- | --- | --- |
| Scambio | $R_i \leftrightarrow R_j$ | scambia due righe (riordina le equazioni) |
| Scalatura | $R_i \leftarrow c\,R_i$, con $c\neq 0$ | moltiplica un'equazione per una costante non nulla |
| Eliminazione | $R_i \leftarrow R_i + c\,R_j$ | somma a un'equazione un multiplo di un'altra |

Il punto cruciale, che dimostreremo nella Sezione 3, è che **nessuna di queste tre operazioni altera l'insieme delle soluzioni**: il sistema prima e dopo ha esattamente le stesse risposte. Sono reversibili (ogni mossa si può disfare), e questa reversibilità è la ragione profonda per cui non si perdono né si guadagnano soluzioni. La condizione $c \neq 0$ nella scalatura è essenziale: moltiplicare un'equazione per zero la cancellerebbe, distruggendo informazione.

*Micro-esempio.* Applicare $R_2 \leftarrow R_2 - 3R_1$ alla matrice aumentata di $\begin{cases}x+2y=5\\3x+y=10\end{cases}$ significa: alla seconda equazione tolgo tre volte la prima. La riga $(3,1\mid 10)$ diventa $(3-3,\,1-6\mid 10-15) = (0,-5\mid -5)$. L'incognita $x$ è stata eliminata dalla seconda equazione — l'obiettivo di ogni passo di Gauss.

### 2.3 Forma a scalini e pivot

L'eliminazione mira a una forma standard. Una matrice è in **forma a scalini** (in inglese *row echelon form*, REF) quando ha l'aspetto di una scalinata discendente:

$$\begin{pmatrix} \boxed{p_1} & * & * & * \\ 0 & \boxed{p_2} & * & * \\ 0 & 0 & \boxed{p_3} & * \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

Precisamente, servono due condizioni: le eventuali righe interamente nulle stanno tutte in fondo; e in ogni riga non nulla il primo elemento diverso da zero — detto **pivot** — si trova strettamente più a destra del pivot della riga sopra. Gli $*$ sono numeri qualsiasi, i pivot $p_k$ sono per definizione diversi da zero.

Il pivot è il concetto organizzatore di tutta la lezione. Ogni colonna che contiene un pivot corrisponde a un'incognita **vincolata** — il suo valore resta determinato dalle altre; ogni colonna *senza* pivot corrisponde a una **variabile libera**, che può assumere qualsiasi valore reale. Contare i pivot, quindi, risponde da solo alla domanda «quante soluzioni ha il sistema». Il numero di pivot è un invariante della matrice così importante da avere un nome proprio, il **rango**, che sarà l'oggetto della prossima lezione.

Spingendo l'eliminazione un passo oltre si ottiene la **forma ridotta a scalini** (*reduced row echelon form*, RREF), che richiede in più che ogni pivot valga esattamente $1$ e sia l'unico elemento non nullo della propria colonna (azzerato sopra e sotto). La RREF ha una proprietà notevole: è **unica**: partendo da una data matrice, per quante strade diverse la si riduca, si arriva sempre alla stessa RREF. In RREF la soluzione si legge senza alcun conto aggiuntivo.

### 2.4 L'algoritmo di eliminazione di Gauss

Il metodo procede in due tempi.

**Discesa (eliminazione in avanti).** Si scende colonna per colonna, da sinistra. Nella colonna corrente si individua un pivot (se l'elemento in posizione naturale è zero, si porta su con uno scambio $R_i \leftrightarrow R_j$ una riga che abbia lì un numero non nullo). Poi, con operazioni $R_i \leftarrow R_i - \frac{a_{ik}}{p}R_{\text{pivot}}$, si azzerano tutti gli elementi *sotto* il pivot. Si passa alla sottomatrice rimanente e si ripete. Al termine la matrice è in forma a scalini.

**Risalita (sostituzione all'indietro).** Dalla forma a scalini si parte dall'ultima equazione non banale — che coinvolge poche incognite — la si risolve, e si sostituisce il valore trovato risalendo verso l'alto, un'equazione alla volta. In alternativa si continua l'eliminazione anche sopra i pivot (metodo di **Gauss–Jordan**) fino alla RREF, e a quel punto la soluzione si legge direttamente senza sostituzioni.

*Micro-esempio.* Ridotto il sistema alla forma a scalini con ultima riga $5z = -10$, la risalita dà subito $z = -2$; sostituendo nella riga sopra si ricava $y$, e infine dalla prima riga $x$. Ogni passo usa solo valori già calcolati.

```checkpoint
{"domanda":"Durante l'eliminazione ottieni la riga $(0\\ 0\\ 0 \\mid 4)$ nella matrice aumentata. Che cosa puoi concludere immediatamente sul sistema, senza continuare i conti?","risposta":"Quella riga rappresenta l'equazione $0\\cdot x_1 + \\cdots + 0\\cdot x_n = 4$, cioè $0 = 4$: una contraddizione. Nessuna scelta delle incognite può renderla vera, quindi il sistema è **incompatibile** (nessuna soluzione). È il segnale definitivo di incompatibilità: un pivot nella colonna dei termini noti. Basta questa riga per fermarsi e concludere."}
```

### 2.5 Classificazione: i tre destini di un sistema

Portato il sistema in forma a scalini, il numero e la posizione dei pivot determinano completamente quante soluzioni esistono. Sia $r$ il numero di pivot nella parte dei coefficienti (il rango di $A$) e $n$ il numero di incognite.

**Incompatibile (nessuna soluzione).** Compare un pivot nella colonna dei termini noti, cioè una riga del tipo $(0\ 0\ \cdots\ 0 \mid c)$ con $c \neq 0$. L'equazione $0 = c$ è impossibile. Geometricamente: rette o piani senza alcun punto comune.

**Compatibile determinato (una sola soluzione).** Nessuna riga impossibile e *ogni* colonna delle incognite ha un pivot, cioè $r = n$. Non ci sono variabili libere: ogni incognita è vincolata a un unico valore. Geometricamente: le rette/piani si incrociano in un punto solo.

**Compatibile indeterminato (infinite soluzioni).** Nessuna riga impossibile ma alcune colonne non hanno pivot, cioè $r < n$. Le $n - r$ incognite corrispondenti alle colonne senza pivot sono **variabili libere**: scegliendo per esse un valore arbitrario, tutte le altre restano determinate. L'insieme delle soluzioni è infinito, con $n - r$ «gradi di libertà».

*Micro-esempio.* In un sistema con $n = 3$ incognite ridotto a due pivot ($r = 2$), c'è $3 - 2 = 1$ variabile libera: le soluzioni formano una retta nello spazio, parametrizzata da un unico parametro $t$.

Questa tabella anticipa il teorema di Rouché–Capelli (prossima lezione), che riformula la stessa trichotomia confrontando il rango di $A$ con quello della matrice aumentata $[A\mid\mathbf{b}]$: il sistema è compatibile se e solo se i due ranghi coincidono.

### 2.6 Un elemento interattivo: quando la soluzione «scappa all'infinito»

Il seguente cursore mostra due rette, $x + y = 2$ (fissa) e $x + a\,y = 3$, al variare del coefficiente $a$. La loro intersezione è la soluzione del sistema. Muovendo $a$ verso $1$ le due rette diventano quasi parallele e il punto d'incontro si allontana verso l'infinito: è la transizione visiva tra «soluzione unica» e «sistema senza soluzione».

```slider
{"title":"Sistema x+y=2 e x+a·y=3: l'intersezione è la soluzione (parametro: coefficiente a)","fn":"2-x","fn2":"(3-x)/a","domain":[-4,6],"yDomain":[-4,6],"pname":"a","pmin":0.4,"pmax":2,"pdefault":1.5,"pstep":0.1,"plabel":"coefficiente a della seconda equazione","label1":"retta x + y = 2","label2":"retta x + a·y = 3"}
```

Quando $a = 1$ le rette sono $x+y=2$ e $x+y=3$: parallele e distinte, nessun punto in comune, il sistema è incompatibile. Per ogni $a \neq 1$ esiste un unico punto d'intersezione, la cui coordinata $x = \frac{2a-3}{a-1}$ cresce senza limite man mano che $a$ si avvicina a $1$. Questo illustra anche un fenomeno numerico reale, il **malcondizionamento**: quando due equazioni sono «quasi» dipendenti, la soluzione diventa enormemente sensibile a piccole variazioni dei coefficienti.

## 3. Dimostrazioni

### 3.1 Le operazioni elementari preservano l'insieme delle soluzioni

Questo è il teorema che rende legittimo tutto il metodo: se ogni mossa conserva le soluzioni, allora il sistema finale, per quanto trasformato, ha le stesse risposte di quello di partenza. Dimostriamo l'affermazione per l'operazione di eliminazione $R_i \leftarrow R_i + c\,R_j$ (con $i \neq j$), che è la più delicata; scambio e scalatura sono più semplici e li trattiamo nella parte tecnica.

Indichiamo con $E_i(\mathbf{x})$ e $E_j(\mathbf{x})$ le equazioni $i$ e $j$, dove
$$E_i:\quad a_{i1}x_1 + \cdots + a_{in}x_n = b_i, \qquad E_j:\quad a_{j1}x_1 + \cdots + a_{jn}x_n = b_j.$$
Dopo la mossa, l'equazione $i$ è sostituita da $E_i' : \ E_i + c\,E_j$, cioè
$$(a_{i1}+c\,a_{j1})x_1 + \cdots + (a_{in}+c\,a_{jn})x_n = b_i + c\,b_j,$$
mentre tutte le altre equazioni, inclusa $E_j$, restano invariate. Dobbiamo mostrare che un vettore $\mathbf{x}^*$ risolve il sistema originale se e solo se risolve quello modificato. Poiché le due liste di equazioni differiscono solo nella riga $i$ (e la riga $j$ è comune a entrambe), basta ragionare su quella riga, tenendo presente che in entrambi i sistemi vale $E_j$.

**($\Rightarrow$) Se $\mathbf{x}^*$ risolve l'originale, risolve il modificato.** Per ipotesi $\mathbf{x}^*$ soddisfa $E_i$ e $E_j$, ossia il lato sinistro di $E_i$ valutato in $\mathbf{x}^*$ dà $b_i$ e quello di $E_j$ dà $b_j$. Il lato sinistro di $E_i'$ è, per costruzione, il lato sinistro di $E_i$ più $c$ volte quello di $E_j$; valutato in $\mathbf{x}^*$ dà quindi $b_i + c\,b_j$, che è proprio il lato destro di $E_i'$. Dunque $\mathbf{x}^*$ soddisfa $E_i'$, e poiché soddisfa già tutte le altre equazioni (immutate), risolve il sistema modificato.

**($\Leftarrow$) Se $\mathbf{x}^*$ risolve il modificato, risolve l'originale.** Ora $\mathbf{x}^*$ soddisfa $E_i'$ e $E_j$. Osserviamo che l'equazione originale si riscrive come $E_i = E_i' - c\,E_j$, perché sottrarre $c\,E_j$ da $E_i'$ annulla esattamente ciò che l'operazione aveva aggiunto. Valutando in $\mathbf{x}^*$: il lato sinistro di $E_i'$ dà $b_i + c\,b_j$, quello di $E_j$ dà $b_j$, quindi il lato sinistro di $E_i$ dà $(b_i + c\,b_j) - c\,b_j = b_i$. Dunque $\mathbf{x}^*$ soddisfa $E_i$ e, di conseguenza, l'intero sistema originale.

Le due implicazioni insieme dicono che i due sistemi hanno **identico insieme di soluzioni**. La chiave è che la mossa è invertibile: la sua inversa è $R_i \leftarrow R_i - c\,R_j$, dello stesso tipo, il che rende simmetriche le due direzioni. $\blacksquare$

<details class="dim-tecnica">
<summary>Scambio e scalatura: perché anche queste due preservano le soluzioni</summary>

**Scambio $R_i \leftrightarrow R_j$.** Un vettore $\mathbf{x}^*$ risolve un sistema se e solo se soddisfa *tutte* le sue equazioni. Scambiare l'ordine di due equazioni non cambia l'insieme delle equazioni da soddisfare — cambia solo la sequenza in cui sono elencate. Poiché la nozione di soluzione non dipende dall'ordine («$\mathbf{x}^*$ le soddisfa tutte» è insensibile a come le numeriamo), l'insieme delle soluzioni è identico. L'operazione è la propria inversa: applicandola due volte si torna al punto di partenza.

**Scalatura $R_i \leftarrow c\,R_i$ con $c \neq 0$.** L'equazione $E_i:\ \sum_k a_{ik}x_k = b_i$ diventa $c\,E_i:\ \sum_k (c\,a_{ik})x_k = c\,b_i$. Per un dato $\mathbf{x}^*$, chiamiamo $L$ il valore del lato sinistro di $E_i$. Allora $\mathbf{x}^*$ soddisfa $E_i$ significa $L = b_i$, mentre soddisfa $c\,E_i$ significa $cL = c\,b_i$. Poiché $c \neq 0$, possiamo dividere: $cL = c\,b_i \iff L = b_i$. Le due condizioni sono quindi equivalenti, e nessun'altra equazione è toccata. L'inversa è $R_i \leftarrow \frac{1}{c}R_i$, ben definita proprio perché $c \neq 0$.

Se fosse $c = 0$ l'equivalenza cadrebbe: l'equazione diventerebbe $0 = 0$, vera per ogni $\mathbf{x}$, e si perderebbe l'informazione contenuta in $E_i$ — ecco perché la scalatura per zero è vietata.

</details>

### 3.2 Struttura dell'insieme delle soluzioni: generale = particolare + omogenea

Il secondo risultato spiega *la forma* dell'insieme delle soluzioni quando queste sono infinite, ed è il ponte verso gli spazi vettoriali.

**Teorema.** Sia $A\mathbf{x} = \mathbf{b}$ un sistema compatibile e sia $\mathbf{x}_p$ una sua soluzione qualsiasi (una **soluzione particolare**). Allora l'insieme di *tutte* le soluzioni è
$$\{\, \mathbf{x}_p + \mathbf{x}_h \ :\ \mathbf{x}_h \text{ risolve il sistema omogeneo } A\mathbf{x} = \mathbf{0} \,\}.$$
In parole: ogni soluzione si ottiene sommando alla soluzione particolare una soluzione del sistema omogeneo associato, e ogni somma di questo tipo è a sua volta soluzione.

*Dimostrazione.* Usiamo la linearità del prodotto matrice-vettore, cioè $A(\mathbf{u}+\mathbf{v}) = A\mathbf{u} + A\mathbf{v}$ (proprietà stabilita nella lezione sulle matrici).

Mostriamo le due inclusioni. Primo, ogni $\mathbf{x}_p + \mathbf{x}_h$ è soluzione: infatti
$$A(\mathbf{x}_p + \mathbf{x}_h) = A\mathbf{x}_p + A\mathbf{x}_h = \mathbf{b} + \mathbf{0} = \mathbf{b},$$
avendo usato $A\mathbf{x}_p = \mathbf{b}$ (particolare) e $A\mathbf{x}_h = \mathbf{0}$ (omogenea). Secondo, ogni soluzione ha quella forma: sia $\mathbf{x}^*$ una soluzione arbitraria, dunque $A\mathbf{x}^* = \mathbf{b}$. Poniamo $\mathbf{x}_h := \mathbf{x}^* - \mathbf{x}_p$. Allora
$$A\mathbf{x}_h = A(\mathbf{x}^* - \mathbf{x}_p) = A\mathbf{x}^* - A\mathbf{x}_p = \mathbf{b} - \mathbf{b} = \mathbf{0},$$
quindi $\mathbf{x}_h$ risolve l'omogeneo, e per costruzione $\mathbf{x}^* = \mathbf{x}_p + \mathbf{x}_h$. Le due inclusioni chiudono la dimostrazione. $\blacksquare$

L'interpretazione geometrica è che l'insieme delle soluzioni non è un sottospazio vettoriale (non contiene l'origine, salvo il caso $\mathbf{b}=\mathbf{0}$) ma un suo **traslato**: si prende l'insieme delle soluzioni omogenee — che, lo vedremo, è un sottospazio, il *nucleo* di $A$ — e lo si sposta rigidamente del vettore $\mathbf{x}_p$. Ne segue un corollario utile: un sistema compatibile ha soluzione unica se e solo se il suo omogeneo associato ha solo la soluzione banale $\mathbf{x}_h = \mathbf{0}$.

```checkpoint
{"domanda":"Un sistema $A\\mathbf{x}=\\mathbf{b}$ ha $\\mathbf{x}_p=(1,0,2)$ come soluzione, e il sistema omogeneo associato ha soluzioni $t\\,(1,-1,1)$ al variare di $t\\in\\mathbb{R}$. Scrivi tutte le soluzioni del sistema completo e di' quante sono.","risposta":"Per il teorema, ogni soluzione è $\\mathbf{x}_p+\\mathbf{x}_h$, cioè $(1,0,2)+t\\,(1,-1,1)=(1+t,\\,-t,\\,2+t)$ per $t\\in\\mathbb{R}$. Sono **infinite** (una retta nello spazio, con un grado di libertà): la soluzione omogenea non banale segnala la presenza di una variabile libera. Verifica veloce: per $t=0$ si riottiene $\\mathbf{x}_p=(1,0,2)$."}
```

## 4. Esempi

**Esempio 1 — Soluzione unica ($3\times 3$).** Risolviamo
$$\begin{cases} x + 2y + z = 2 \\ 3x + 8y + z = 12 \\ \phantom{3x + {}}4y + z = 2. \end{cases}$$
Matrice aumentata e discesa. Con $R_2 \leftarrow R_2 - 3R_1$:
$$\left(\begin{array}{ccc|c}1&2&1&2\\3&8&1&12\\0&4&1&2\end{array}\right)\to\left(\begin{array}{ccc|c}1&2&1&2\\0&2&-2&6\\0&4&1&2\end{array}\right).$$
Con $R_3 \leftarrow R_3 - 2R_2$:
$$\to\left(\begin{array}{ccc|c}1&2&1&2\\0&2&-2&6\\0&0&5&-10\end{array}\right).$$
Tre pivot in tre colonne di incognite: soluzione unica. Risalita: dalla terza riga $5z = -10 \Rightarrow z = -2$; dalla seconda $2y - 2(-2) = 6 \Rightarrow y = 1$; dalla prima $x + 2 - 2 = 2 \Rightarrow x = 2$. **Soluzione:** $(x,y,z) = (2,1,-2)$.

**Esempio 2 — Infinite soluzioni ($3\times 3$).** Il sistema
$$\begin{cases} x + 2y - z = 1 \\ 2x + 4y - 2z = 2 \\ x - y + z = 0 \end{cases}$$
ha la seconda equazione uguale al doppio della prima. Con $R_2 \leftarrow R_2 - 2R_1$ e $R_3 \leftarrow R_3 - R_1$, poi $R_2 \leftrightarrow R_3$:
$$\left(\begin{array}{ccc|c}1&2&-1&1\\0&-3&2&-1\\0&0&0&0\end{array}\right).$$
Due pivot (colonne 1 e 2), la colonna 3 è libera: $z = t$. Dalla seconda riga $-3y + 2t = -1 \Rightarrow y = \frac{1+2t}{3}$; dalla prima $x = 1 - 2y + t = \frac{1-t}{3}$. **Soluzione:** $\left(\frac{1-t}{3},\ \frac{1+2t}{3},\ t\right)$, $t\in\mathbb{R}$.

**Esempio 3 — Nessuna soluzione.** Per $\begin{cases}x+y=1\\ 2x+2y=5\end{cases}$, l'operazione $R_2 \leftarrow R_2 - 2R_1$ produce la riga $(0\ 0\mid 3)$, cioè $0=3$. **Sistema incompatibile.** Le due rette $x+y=1$ e $x+y=\tfrac{5}{2}$ sono parallele.

**Esempio 4 — Sistema omogeneo e sue soluzioni non banali.** Per $A = \begin{psmallmatrix}1&2&-1\\ 2&4&-2\end{psmallmatrix}$, il sistema $A\mathbf{x}=\mathbf{0}$ dopo $R_2 \leftarrow R_2 - 2R_1$ si riduce all'unica equazione $x_1 + 2x_2 - x_3 = 0$. Due variabili libere $x_2 = s$, $x_3 = t$ danno $x_1 = -2s + t$, quindi
$$\mathbf{x} = s\begin{psmallmatrix}-2\\1\\0\end{psmallmatrix} + t\begin{psmallmatrix}1\\0\\1\end{psmallmatrix},\quad s,t\in\mathbb{R}.$$
L'insieme delle soluzioni è un piano per l'origine: infinite soluzioni oltre a quella banale.

**Esempio 5 — Gauss–Jordan (lettura diretta in RREF).** Per $\begin{cases}2x + y = 5\\ x + 3y = 10\end{cases}$ portiamo tutto in RREF:
$$\left(\begin{array}{cc|c}2&1&5\\1&3&10\end{array}\right)\xrightarrow{R_1\leftrightarrow R_2}\left(\begin{array}{cc|c}1&3&10\\2&1&5\end{array}\right)\xrightarrow{R_2-2R_1}\left(\begin{array}{cc|c}1&3&10\\0&-5&-15\end{array}\right)$$
$$\xrightarrow{-\frac15 R_2}\left(\begin{array}{cc|c}1&3&10\\0&1&3\end{array}\right)\xrightarrow{R_1-3R_2}\left(\begin{array}{cc|c}1&0&1\\0&1&3\end{array}\right).$$
La RREF dà **direttamente** $x = 1$, $y = 3$, senza sostituzioni.

**Esempio 6 — Sistema parametrico.** Per quali $k$ il sistema $\begin{cases}x + ky = 2\\ kx + y = 2\end{cases}$ ha infinite soluzioni? Con $R_2 \leftarrow R_2 - kR_1$:
$$\left(\begin{array}{cc|c}1&k&2\\0&1-k^2&2-2k\end{array}\right).$$
La seconda riga è $(1-k^2)y = 2-2k = 2(1-k)$. Se $1 - k^2 \neq 0$ (cioè $k \neq \pm 1$) c'è un unico $y$: soluzione unica. Se $k = 1$: la riga diventa $0 = 0$, sempre vera, e resta una variabile libera → **infinite soluzioni**. Se $k = -1$: la riga diventa $0 = 4$ → **nessuna soluzione**. Il valore che dà infinite soluzioni è dunque $k = 1$.

**Esempio 7 — Sovradeterminato ($m > n$) e incompatibile.** Tre rette per due incognite:
$$\begin{cases}x + y = 1\\ x - y = 3\\ 2x + y = 5.\end{cases}$$
Con $R_2 \leftarrow R_2 - R_1$, $R_3 \leftarrow R_3 - 2R_1$, poi $R_3 \leftarrow R_3 - \tfrac12 R_2$:
$$\left(\begin{array}{cc|c}1&1&1\\0&-2&2\\0&0&2\end{array}\right).$$
L'ultima riga è $0 = 2$: **incompatibile**. Avere più equazioni che incognite non garantisce compatibilità — le tre rette non hanno un punto comune. (Le prime due si incrociano in $(2,-1)$, che non soddisfa la terza: $2\cdot 2 + (-1) = 3 \neq 5$.)

**Esempio 8 — Soluzione generale = particolare + omogenea (applicazione del Teorema 3.2).** Per $A = \begin{psmallmatrix}1&-1&2\\ 2&-2&4\end{psmallmatrix}$, $\mathbf{b} = \begin{psmallmatrix}3\\6\end{psmallmatrix}$, dopo $R_2 \leftarrow R_2 - 2R_1$ resta la sola equazione $x_1 - x_2 + 2x_3 = 3$. Una soluzione particolare (con $x_2=x_3=0$) è $\mathbf{x}_p = (3,0,0)$; le soluzioni omogenee sono $s(1,1,0) + t(-2,0,1)$. Per il teorema:
$$\mathbf{x} = \begin{psmallmatrix}3\\0\\0\end{psmallmatrix} + s\begin{psmallmatrix}1\\1\\0\end{psmallmatrix} + t\begin{psmallmatrix}-2\\0\\1\end{psmallmatrix},\quad s,t\in\mathbb{R}.$$

## 5. Collegamenti e riepilogo

Questa lezione è lo snodo operativo del modulo. Poggia sul **prodotto matrice-vettore** e sulla sua linearità, introdotti in [algebra-02-matrici], che qui usiamo sia per comprimere il sistema in $A\mathbf{x}=\mathbf{b}$ sia per dimostrare la struttura affine delle soluzioni. Il conteggio dei pivot che abbiamo usato per classificare i sistemi è esattamente la nozione di **rango**, formalizzata nella lezione successiva [algebra-04-rango-rouche-capelli], dove la trichotomia diventa il teorema di Rouché–Capelli espresso come confronto $\operatorname{rk}(A)$ contro $\operatorname{rk}([A\mid\mathbf{b}])$. L'insieme delle soluzioni omogenee, che qui appare come «combinazioni di vettori con parametri liberi», è il **nucleo** di $A$ e sarà riconosciuto come sottospazio vettoriale in [algebra-05-spazi-vettoriali]; il numero di variabili libere è la sua **dimensione**, tema di [algebra-06-indipendenza-basi] e del teorema di nullità più rango. Infine, la condizione di soluzione unica per ogni $\mathbf{b}$ nel caso quadrato si legherà all'invertibilità della matrice e al **determinante** di [algebra-08-determinanti].

Fuori dall'algebra lineare, l'eliminazione di Gauss è l'algoritmo che sta dentro ogni calcolo scientifico che risolve equazioni di equilibrio: strutture in ingegneria, circuiti in elettrotecnica, reti di flusso in economia, ricostruzione d'immagine nelle TAC. In economia, i modelli input-output di Leontief e la ricerca di prezzi di equilibrio su più mercati sono sistemi lineari risolti esattamente con questo metodo; il fenomeno del malcondizionamento visto nel cursore è ciò che rende delicate, nella pratica, queste soluzioni.

**Idee chiave da ricordare.** Un sistema lineare si scrive $A\mathbf{x}=\mathbf{b}$; le operazioni elementari sulle righe trasformano la matrice aumentata *senza cambiare le soluzioni*; l'eliminazione porta alla forma a scalini, dove i **pivot** decidono tutto. Con $r$ pivot e $n$ incognite: se compare $0=c\neq 0$ il sistema è impossibile; se $r=n$ la soluzione è unica; se $r<n$ ci sono $n-r$ variabili libere e infinite soluzioni. La soluzione generale di un sistema compatibile è **una particolare più tutte le omogenee**.

| Situazione in forma a scalini | Numero di soluzioni |
| --- | --- |
| Pivot nella colonna dei termini noti ($0=c$, $c\neq0$) | nessuna (incompatibile) |
| Nessun $0=c$, e $r = n$ (pivot in ogni colonna incognita) | esattamente una |
| Nessun $0=c$, e $r < n$ | infinite, con $n-r$ variabili libere |

## 6. Esercizi

<details class="dim-tecnica">
<summary>Esercizio 1 — Eliminazione di Gauss, sistema $3\times 3$</summary>

Risolvere $\begin{cases} x + y - z = 2 \\ 2x + y + z = 7 \\ x - y + 2z = 3.\end{cases}$

**Soluzione.** Con $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$, poi $R_3 \leftarrow R_3 - 2R_2$:
$$\left(\begin{array}{ccc|c}1&1&-1&2\\0&-1&3&3\\0&0&-3&-5\end{array}\right).$$
Risalita: $-3z = -5 \Rightarrow z = \tfrac53$; $-y + 3\cdot\tfrac53 = 3 \Rightarrow y = 2$; $x + 2 - \tfrac53 = 2 \Rightarrow x = \tfrac53$. **Soluzione:** $\left(\tfrac53,\,2,\,\tfrac53\right)$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 2 — Due variabili libere</summary>

Trovare la soluzione generale di $\begin{cases}x + 2y - z = 3\\ 2x + 4y - 2z = 6.\end{cases}$

**Soluzione.** $R_2 \leftarrow R_2 - 2R_1$ dà la riga nulla $(0\,0\,0\mid 0)$: resta solo $x + 2y - z = 3$. Un pivot, tre incognite, quindi $3-1=2$ variabili libere: $y = s$, $z = t$, e $x = 3 - 2s + t$. **Soluzione:** $(3-2s+t,\ s,\ t)$, $s,t\in\mathbb{R}$ (infinità di tipo $\infty^2$).

</details>

<details class="dim-tecnica">
<summary>Esercizio 3 — Riconoscere l'incompatibilità</summary>

Mostrare che $\begin{cases} x - y + z = 2 \\ 2x - 2y + 2z = 5 \\ 3x - 3y + 3z = 7 \end{cases}$ non ha soluzioni.

**Soluzione.** I lati sinistri sono l'uno il doppio, l'altro il triplo del primo, ma i termini noti no. Con $R_2 \leftarrow R_2 - 2R_1$ compare $(0\,0\,0\mid 1)$, cioè $0=1$: **incompatibile**. Nessun valore di $x-y+z$ può valere contemporaneamente $2$, $\tfrac52$ e $\tfrac73$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 4 — Gauss–Jordan fino alla RREF</summary>

Portare in RREF e risolvere $\begin{cases}x + 2y = 5\\ 3x + y = 10.\end{cases}$

**Soluzione.**
$$\left(\begin{array}{cc|c}1&2&5\\3&1&10\end{array}\right)\xrightarrow{R_2-3R_1}\left(\begin{array}{cc|c}1&2&5\\0&-5&-5\end{array}\right)\xrightarrow{-\frac15 R_2}\left(\begin{array}{cc|c}1&2&5\\0&1&1\end{array}\right)\xrightarrow{R_1-2R_2}\left(\begin{array}{cc|c}1&0&3\\0&1&1\end{array}\right).$$
**Soluzione:** $x = 3$, $y = 1$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 5 — Nucleo di una matrice</summary>

Trovare tutte le soluzioni di $A\mathbf{x}=\mathbf{0}$ per $A = \begin{psmallmatrix}1&2&3\\ 2&4&6\\ 1&0&1\end{psmallmatrix}$.

**Soluzione.** $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$, poi $R_2 \leftrightarrow R_3$:
$$\begin{psmallmatrix}1&2&3\\0&-2&-2\\0&0&0\end{psmallmatrix}.$$
Due pivot (colonne 1,2), $z = t$ libera. Dalla seconda riga $-2y - 2t = 0 \Rightarrow y = -t$; dalla prima $x + 2(-t) + 3t = 0 \Rightarrow x = -t$. Quindi $\mathbf{x} = t\,(-1,-1,1)$, $t\in\mathbb{R}$. La dimensione dello spazio delle soluzioni è $1 = n - r = 3 - 2$, coerente col conteggio dei pivot.

</details>

<details class="dim-tecnica">
<summary>Esercizio 6 — Discussione con parametro</summary>

Per quali $k$ il sistema $\begin{cases}x + y = 3\\ x + ky = 5\end{cases}$ ha (a) soluzione unica, (b) infinite, (c) nessuna?

**Soluzione.** $R_2 \leftarrow R_2 - R_1$: $\left(\begin{smallmatrix}1&1&\mid&3\\0&k-1&\mid&2\end{smallmatrix}\right)$, cioè $(k-1)y = 2$. **(a)** Se $k \neq 1$: $y = \tfrac{2}{k-1}$ e $x = 3 - y$ — soluzione unica. **(b)** Infinite soluzioni richiederebbero $k-1=0$ e $2=0$ insieme: impossibile, non esiste alcun $k$. **(c)** Se $k = 1$: la riga è $0 = 2$ — nessuna soluzione. Questo sistema non ammette mai il caso «infinite».

</details>

<details class="dim-tecnica">
<summary>Esercizio 7 — Applicare la struttura generale = particolare + omogenea</summary>

Data $A = \begin{psmallmatrix}1&-1&2\\ 2&-2&4\end{psmallmatrix}$ e $\mathbf{b} = \begin{psmallmatrix}3\\6\end{psmallmatrix}$, scrivere la soluzione generale come $\mathbf{x}_p$ più le soluzioni omogenee, e verificare con $s=t=0$.

**Soluzione.** $R_2 \leftarrow R_2 - 2R_1$ lascia $x_1 - x_2 + 2x_3 = 3$. Particolare: $\mathbf{x}_p = (3,0,0)$. Omogenee: da $x_1 = x_2 - 2x_3$ con $x_2=s$, $x_3=t$ si ha $s(1,1,0)+t(-2,0,1)$. Generale:
$$\mathbf{x} = (3,0,0) + s(1,1,0) + t(-2,0,1),\quad s,t\in\mathbb{R}.$$
Verifica: per $s=t=0$ si ottiene $(3,0,0)$ e $A(3,0,0)^\top = (3,6)^\top = \mathbf{b}$ ✓.

</details>

<details class="dim-tecnica">
<summary>Esercizio 8 — Sistema $4\times 4$ e incompatibilità nascosta</summary>

Discutere $\begin{cases} x_1 + x_2 + x_3 + x_4 = 4 \\ x_1 + 2x_2 + x_3 = 3 \\ x_1 + x_3 + x_4 = 3 \\ 2x_1 + x_2 + x_4 = 4.\end{cases}$

**Soluzione.** Confrontiamo la prima e la terza equazione: sottraendo, $R_3 \leftarrow R_3 - R_1$ dà $(0\,{-1}\,0\,0\mid -1)$, cioè $-x_2 = -1$, quindi $x_2 = 1$. Ora la seconda con $R_2 \leftarrow R_2 - R_1$ dà $(0\,1\,0\,{-1}\mid -1)$, cioè $x_2 - x_4 = -1 \Rightarrow x_4 = x_2 + 1 = 2$. Sostituendo nella quarta, $R_4 \leftarrow R_4 - 2R_1$ dà $(0\,{-1}\,{-2}\,{-1}\mid -4)$, cioè $-x_2 - 2x_3 - x_4 = -4 \Rightarrow -1 - 2x_3 - 2 = -4 \Rightarrow x_3 = \tfrac12$. Infine dalla prima $x_1 = 4 - x_2 - x_3 - x_4 = 4 - 1 - \tfrac12 - 2 = \tfrac12$. **Soluzione unica:** $\left(\tfrac12,\,1,\,\tfrac12,\,2\right)$. (Verifica sulla terza: $\tfrac12 + \tfrac12 + 2 = 3$ ✓.)

</details>
