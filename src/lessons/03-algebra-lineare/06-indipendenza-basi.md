---
id: algebra-06-indipendenza-basi
titolo: "Indipendenza lineare, basi e dimensione"
materia: algebra-lineare
argomento: "Spazi vettoriali"
modulo: "Struttura vettoriale e trasformazioni"
livello: universitario
slug: algebra-06-indipendenza-basi

# legacy
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: "Indipendenza lineare, basi e dimensione"
title_en: "Linear independence, bases, and dimension"
level: blue
order: 6
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Indipendenza lineare, basi, dimensione, coordinate, teorema di nullità più rango"

prerequisiti:
  - algebra-04-rango-rouche-capelli
  - algebra-05-spazi-vettoriali

collegamenti:
  - algebra-04-rango-rouche-capelli
  - algebra-05-spazi-vettoriali
  - algebra-07-trasformazioni-lineari
  - algebra-08-determinanti

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Indipendenza lineare, basi, dimensione, coordinate, rango come dimensione dell'immagine"
    note: "appunti-prof: definizioni e notazione coerenti con l'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Lemma di scambio, invarianza della dimensione, teorema fondamentale delle applicazioni lineari"
    note: "rigore: dimostrazione dell'invarianza della dimensione e impostazione astratta (basi di polinomi e funzioni)"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Indipendenza come assenza di ridondanza, basi come sistemi di coordinate, lettura geometrica"
    note: "intuizione: base come sistema di riferimento minimo"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Verifica di indipendenza con eliminazione, calcolo di basi di nucleo e immagine, esempi risolti"
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

Nella lezione precedente abbiamo imparato a costruire sottospazi con lo span, cioè prendendo tutte le combinazioni lineari di alcuni vettori generatori. Ma resta una domanda scomoda: quanti generatori servono *davvero*? Se descrivo il piano $z=0$ come span di $(1,0,0)$, $(0,1,0)$ e $(1,1,0)$, il terzo vettore è del tutto inutile — è già la somma dei primi due, e toglierlo non cambia nulla dello span. C'è ridondanza. La coppia di concetti che sviluppiamo qui — **indipendenza lineare** e **base** — serve esattamente a separare l'informazione essenziale dalla ripetizione, e a rispondere in modo definitivo alla domanda «quanti generatori bastano, e non uno di meno».

L'immagine più fedele è quella di un sistema di riferimento. Per individuare ogni punto del piano bastano due direzioni non allineate: «tanto in avanti, tanto di lato». Con quelle due direzioni raggiungi ogni punto, e in un unico modo. Una terza direzione sarebbe ridondante (la puoi ricostruire dalle prime due), mentre una sola direzione sarebbe insufficiente (copri solo una retta). Le due direzioni giuste formano una **base**: un insieme di vettori che è al tempo stesso *abbastanza ricco* da raggiungere tutto lo spazio e *abbastanza sobrio* da non contenere ripetizioni. Il numero di direzioni necessarie — due per il piano, tre per lo spazio — è la **dimensione**.

Ciò che rende questo apparato tanto potente è un teorema di invarianza: qualunque base tu scelga per uno stesso spazio, il numero di vettori che la compongono è sempre lo stesso. Puoi orientare i tuoi assi come preferisci, ma per descrivere il piano ne servono sempre esattamente due, mai uno né tre. Questo numero fisso — la dimensione — è una proprietà intrinseca dello spazio, non della base che hai scelto. È un fatto tutt'altro che ovvio, e la sua dimostrazione è uno dei momenti in cui l'algebra lineare mostra il suo rigore: lo affronteremo per intero.

C'è infine il riscatto di una promessa lasciata in sospeso. Nella lezione sul rango avevamo contato «gradi di libertà» e «direzioni indipendenti» in modo operativo, appoggiandoci ai pivot. Ora possiamo dare a quei conteggi il loro nome proprio: il rango è la *dimensione dell'immagine* e la nullità è la *dimensione del nucleo*, e il teorema di nullità più rango diventa un'affermazione pulita sulla ripartizione delle dimensioni. La base è lo strumento che trasforma frasi come «ci sono due variabili libere» in «il nucleo è un sottospazio di dimensione due, e qui ne è una base». Da qui in avanti «dimensione» smette di essere un modo di dire e diventa un numero rigoroso.

---

## 2. Teoria

### 2.1 Indipendenza lineare

I vettori $\mathbf{v}_1,\dots,\mathbf{v}_k$ di uno spazio vettoriale $V$ si dicono **linearmente indipendenti** se l'unica loro combinazione lineare che dà il vettore nullo è quella con tutti i coefficienti nulli:

$$
c_1\mathbf{v}_1+c_2\mathbf{v}_2+\cdots+c_k\mathbf{v}_k=\mathbf{0}
\quad\Longrightarrow\quad
c_1=c_2=\cdots=c_k=0.
$$

Se invece esiste una combinazione che dà $\mathbf{0}$ con *almeno un coefficiente diverso da zero*, i vettori si dicono **linearmente dipendenti**. Leggiamo con cura la definizione, perché la sua forza sta in una sottigliezza logica. La combinazione con tutti i coefficienti nulli dà sempre $\mathbf{0}$, in qualunque insieme di vettori: quella è la soluzione «banale» e non conta nulla. La domanda vera è se ce ne siano *altre*. Se l'unica è quella banale, i vettori sono indipendenti: nessuno di essi è ottenibile combinando gli altri. Se ce n'è una non banale, sono dipendenti: c'è ridondanza, e uno dei vettori è «spiegabile» tramite gli altri (lo dimostreremo nella sezione 3).

*Micro-esempio.* I vettori $(1,0)$ e $(0,1)$ sono indipendenti: $c_1(1,0)+c_2(0,1)=(c_1,c_2)=\mathbf{0}$ forza subito $c_1=c_2=0$. I vettori $(1,2)$ e $(2,4)$ sono dipendenti: $2\cdot(1,2)-1\cdot(2,4)=\mathbf{0}$ è una combinazione non banale, e infatti il secondo è il doppio del primo.

Il collegamento con la lezione sul rango è diretto e trasforma la definizione in un algoritmo. Disponiamo i vettori come colonne di una matrice $A$: allora $c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k$ è esattamente il prodotto $A\mathbf{c}$, dove $\mathbf{c}=(c_1,\dots,c_k)^{\!\top}$. Chiedere che l'unica combinazione nulla sia quella banale equivale a chiedere che $A\mathbf{c}=\mathbf{0}$ abbia solo la soluzione $\mathbf{c}=\mathbf{0}$, cioè che il nucleo sia banale. Ne segue il **criterio matriciale**:

$$
\mathbf{v}_1,\dots,\mathbf{v}_k \text{ indipendenti}
\iff \ker(A)=\{\mathbf{0}\}
\iff \operatorname{rk}(A)=k
\iff \text{nessuna variabile libera.}
$$

In pratica: sistemi i vettori in colonna, riduci a scalini, e conti i pivot. Se i pivot sono tanti quanti i vettori, sono indipendenti; se ne manca anche uno solo, c'è una variabile libera, il nucleo è non banale, e i vettori sono dipendenti.

*Micro-esempio.* Per $(1,2,0)$, $(0,1,3)$, $(1,0,-6)$ la matrice colonna si riduce a due soli pivot su tre colonne (lo verificheremo negli esempi): rango $2<3$, quindi dipendenti.

### 2.2 Base

Una **base** di uno spazio vettoriale $V$ è un insieme di vettori $\mathcal{B}=\{\mathbf{b}_1,\dots,\mathbf{b}_n\}$ che soddisfa due requisiti simultanei:

$$
\text{(B1) } \mathbf{b}_1,\dots,\mathbf{b}_n \text{ sono linearmente indipendenti;}\qquad
\text{(B2) } \operatorname{span}\{\mathbf{b}_1,\dots,\mathbf{b}_n\}=V.
$$

I due requisiti tirano in direzioni opposte e per questo si bilanciano. L'indipendenza (B1) impone *sobrietà*: nessuna ridondanza, non un vettore di troppo. Il fatto di generare (B2) impone *ricchezza*: abbastanza vettori da raggiungere ogni punto di $V$. Una base è il punto di equilibrio esatto tra le due esigenze — il numero minimo di vettori che ancora bastano a generare tutto, o equivalentemente il numero massimo di vettori indipendenti che lo spazio ammette.

*Micro-esempio.* In $\mathbb{R}^n$ la **base canonica** è $\{\mathbf{e}_1,\dots,\mathbf{e}_n\}$, dove $\mathbf{e}_i$ ha un $1$ nella posizione $i$-esima e $0$ altrove. È indipendente (una combinazione nulla forza tutte le componenti a zero) e genera (ogni $(x_1,\dots,x_n)=x_1\mathbf{e}_1+\cdots+x_n\mathbf{e}_n$). Ma non è l'unica base: in $\mathbb{R}^2$ anche $\{(1,2),(3,1)\}$ è una base, perché i due vettori sono indipendenti e due vettori indipendenti in $\mathbb{R}^2$ generano già tutto il piano. Uno spazio ha infinite basi diverse.

Anche gli spazi «non fatti di frecce» hanno basi. In $P_2$, i polinomi $\{1,x,x^2\}$ formano una base: sono indipendenti (un polinomio identicamente nullo ha tutti i coefficienti nulli) e generano ogni polinomio di grado $\le 2$. In $M_{2,2}$ le quattro matrici con un solo $1$ e il resto $0$ formano una base.

### 2.3 Coordinate

La proprietà che rende una base uno *strumento di calcolo*, e non solo una definizione, è l'unicità della rappresentazione. Se $\mathcal{B}=\{\mathbf{b}_1,\dots,\mathbf{b}_n\}$ è una base di $V$, allora **ogni** vettore $\mathbf{w}\in V$ si scrive in **uno e un solo** modo come combinazione lineare degli elementi di $\mathcal{B}$:

$$
\mathbf{w}=c_1\mathbf{b}_1+c_2\mathbf{b}_2+\cdots+c_n\mathbf{b}_n.
$$

I coefficienti $(c_1,\dots,c_n)$, univocamente determinati, sono le **coordinate di $\mathbf{w}$ rispetto a $\mathcal{B}$**, e si scrivono $[\mathbf{w}]_{\mathcal{B}}$. L'esistenza della scrittura viene da (B2), che garantisce almeno una rappresentazione; l'unicità viene da (B1), l'indipendenza — è precisamente il ruolo dell'indipendenza garantire che non ci siano due modi diversi di scrivere lo stesso vettore (lo dimostriamo nella sezione 3). Le coordinate sono ciò che permette di lavorare in uno spazio astratto come se fosse $\mathbb{R}^n$: scelta una base, ogni vettore diventa una lista di numeri, e ogni operazione lineare diventa aritmetica su quelle liste.

*Micro-esempio.* Nella base $\mathcal{B}=\{(2,1),(1,1)\}$ di $\mathbb{R}^2$, il vettore $(5,1)$ ha coordinate $(4,-3)$, perché $4(2,1)-3(1,1)=(8-3,4-3)=(5,1)$, e questa scrittura è l'unica possibile. Lo stesso vettore ha coordinate $(5,1)$ nella base canonica: le coordinate cambiano con la base, il vettore no.

### 2.4 Dimensione

Arriviamo al concetto che dà senso a tutto il resto. Il **teorema di invarianza della dimensione** afferma che tutte le basi di uno stesso spazio vettoriale (finitamente generato) hanno lo stesso numero di elementi. Questo numero comune si chiama **dimensione** di $V$ e si scrive $\dim(V)$.

Il teorema non è una comodità notazionale: senza di esso la parola «dimensione» sarebbe mal definita, perché potrebbe dipendere dalla base scelta. È invece un fatto strutturale — la dimensione è una proprietà intrinseca dello spazio — e la sua dimostrazione, basata sul lemma di scambio, la svolgeremo per intero nella sezione 3. Le dimensioni degli spazi che incontriamo più spesso sono:

$$
\dim(\mathbb{R}^n)=n,\qquad \dim(P_n)=n+1,\qquad \dim(M_{m,n})=m\cdot n.
$$

*Micro-esempio.* $\dim(P_2)=3$ perché $\{1,x,x^2\}$ ha tre elementi; nessuna base di $P_2$ potrà mai averne due o quattro. La dimensione conta i «gradi di libertà» dello spazio: un polinomio di grado $\le 2$ è determinato da tre numeri (i suoi coefficienti), né più né meno.

Una volta stabilita la dimensione $n=\dim(V)$, molte verifiche si semplificano drasticamente, grazie a una serie di equivalenze che dimostreremo nella sezione 3: in uno spazio di dimensione $n$, un insieme di *esattamente* $n$ vettori indipendenti è automaticamente una base (genera senza bisogno di verificarlo), e un insieme di *esattamente* $n$ generatori è automaticamente indipendente. Inoltre più di $n$ vettori sono sempre dipendenti, e meno di $n$ vettori non possono generare. La dimensione fa da «soglia» che governa che cosa è possibile.

```checkpoint
{"domanda": "In $\\mathbb{R}^3$, i tre vettori $(1,0,0)$, $(0,1,0)$, $(1,1,0)$ formano una base? E se sostituisco il terzo con $(0,0,1)$?", "risposta": "No, il primo terzetto non è una base: $(1,1,0)=(1,0,0)+(0,1,0)$, quindi i tre sono dipendenti. Generano solo il piano $z=0$ (dimensione $2$), non tutto $\\mathbb{R}^3$. Con $(0,0,1)$ al posto del terzo, invece, i vettori sono $(1,0,0),(0,1,0),(0,0,1)$: la base canonica, indipendente e generatrice. Poiché $\\dim(\\mathbb{R}^3)=3$, tre vettori indipendenti sono automaticamente una base."}
```

### 2.5 Rango e nullità come dimensioni

Ora possiamo saldare il debito con la lezione sul rango. Data una matrice $A$ di tipo $m\times n$, i due sottospazi che le avevamo associato hanno una dimensione ben definita:

$$
\operatorname{rk}(A)=\dim\operatorname{Im}(A)\quad(\text{rango}),\qquad
\dim\ker(A)\quad(\text{nullità}).
$$

Il rango, che avevamo introdotto come numero di pivot, è precisamente la dimensione dell'immagine — cioè il numero di colonne *indipendenti* di $A$, il numero di direzioni genuine che le colonne sanno raggiungere. La nullità è la dimensione del nucleo — il numero di variabili libere, cioè i gradi di libertà nell'insieme delle soluzioni di $A\mathbf{x}=\mathbf{0}$. Con questa lettura, il teorema di nullità più rango della lezione precedente assume la sua forma definitiva:

$$
\operatorname{rk}(A)+\dim\ker(A)=n,
$$

dove $n$ è il numero di colonne, cioè la dimensione dello spazio di partenza. A parole: ogni colonna «vale» o un pivot (contribuisce all'immagine) o una variabile libera (contribuisce al nucleo), senza sovrapposizioni e senza vuoti. La somma delle due dimensioni ricostruisce esattamente $n$. Questo è lo stesso teorema dimostrato nella lezione sul rango contando i pivot; qui la novità è interpretativo-strutturale — i due addendi sono *dimensioni di sottospazi*, non solo conteggi — e nella prossima lezione lo rileggeremo come «teorema fondamentale delle applicazioni lineari».

*Micro-esempio.* Per $A=\begin{psmallmatrix}1&2&3\\0&1&1\end{psmallmatrix}$: due pivot, quindi rango $2$ e $\dim\operatorname{Im}(A)=2$ (l'immagine è tutto $\mathbb{R}^2$); una variabile libera, quindi $\dim\ker(A)=1$. Verifica: $2+1=3$, il numero di colonne.

```checkpoint
{"domanda": "Una matrice $A$ è $4\\times 6$ e ha rango $3$. Qual è la dimensione del nucleo? Quante colonne di $A$ sono indipendenti, e le sue colonne possono generare tutto $\\mathbb{R}^4$?", "risposta": "Per nullità più rango, $\\dim\\ker(A)=n-\\operatorname{rk}(A)=6-3=3$. Le colonne indipendenti sono $\\operatorname{rk}(A)=3$. No, le colonne non possono generare $\\mathbb{R}^4$: la loro span è $\\operatorname{Im}(A)$, che ha dimensione $3<4$, quindi è un sottospazio proprio di $\\mathbb{R}^4$ (un iperpiano-immagine di dimensione $3$)."}
```

### 2.6 Due direzioni sono una base finché non collassano: la lezione dello slider

L'idea che una base sia il giusto equilibrio tra «abbastanza» e «non troppo» si tocca con mano osservando due direzioni nel piano. Lo strumento qui sotto fissa la prima direzione lungo la retta $y=2x$ (il vettore $\mathbf{v}_1=(1,2)$) e ti lascia ruotare la seconda, di pendenza $k$ (il vettore $\mathbf{v}_2=(1,k)$).

```slider
{"title": "Direzioni v₁=(1,2) [retta y=2x] e v₂ di pendenza k: due direzioni sono una base di ℝ² finché non diventano parallele (parametro: pendenza k)", "fn": "2*x", "fn2": "a*x", "domain": [-3, 3], "yDomain": [-6, 6], "pname": "a", "pmin": -3, "pmax": 3, "pdefault": 0.5, "pstep": 0.1, "plabel": "pendenza k di v₂", "label1": "direzione v₁ = (1,2)", "label2": "direzione v₂ = (1,k)"}
```

Finché le due rette sono distinte, i vettori $\mathbf{v}_1$ e $\mathbf{v}_2$ puntano in direzioni diverse: sono indipendenti e, essendo due vettori indipendenti in uno spazio di dimensione due, formano una base — insieme raggiungono ogni punto del piano. Sposta $k$ verso $2$: le due rette si avvicinano fino a sovrapporsi. Nell'istante in cui $k=2$, i due vettori sono paralleli, dunque dipendenti ($\mathbf{v}_2=\tfrac12\mathbf{v}_1$): la loro span collassa dalla intero piano a una sola retta, e cessano di essere una base. Manipolando il parametro si vede ciò che una figura statica non trasmette: la perdita di indipendenza non è un salto brusco tra «base» e «non base», ma la degenerazione continua di due direzioni che si schiacciano l'una sull'altra, e con esse dell'area del parallelogramma che generano — l'area che nella lezione sui determinanti misurerà esattamente questa indipendenza.

---

## 3. Dimostrazioni

### 3.1 Dipendenza equivale a «un vettore è combinazione degli altri»

**Enunciato.** I vettori $\mathbf{v}_1,\dots,\mathbf{v}_k$ (con $k\ge 2$) sono linearmente dipendenti se e solo se almeno uno di essi è combinazione lineare dei rimanenti.

**Dimostrazione.** Si tratta di un'equivalenza, quindi dimostriamo le due implicazioni separatamente.

($\Rightarrow$) Supponiamo i vettori dipendenti. Per definizione esiste una combinazione nulla non banale $c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k=\mathbf{0}$ con almeno un coefficiente diverso da zero; sia $c_j\neq 0$ uno di essi. Isoliamo il termine $j$-esimo portando gli altri a destra:

$$
c_j\mathbf{v}_j=-\sum_{i\neq j}c_i\mathbf{v}_i.
$$

Poiché $c_j\neq 0$, possiamo dividere per $c_j$ (moltiplicare per $1/c_j$):

$$
\mathbf{v}_j=\sum_{i\neq j}\left(-\frac{c_i}{c_j}\right)\mathbf{v}_i.
$$

Dunque $\mathbf{v}_j$ è combinazione lineare degli altri, come volevamo.

($\Leftarrow$) Viceversa, supponiamo che uno dei vettori, diciamo $\mathbf{v}_j$, sia combinazione degli altri: $\mathbf{v}_j=\sum_{i\neq j}a_i\mathbf{v}_i$ per certi coefficienti $a_i$. Portiamo tutto a un membro:

$$
(-1)\mathbf{v}_j+\sum_{i\neq j}a_i\mathbf{v}_i=\mathbf{0}.
$$

Questa è una combinazione lineare dei $\mathbf{v}_1,\dots,\mathbf{v}_k$ che dà $\mathbf{0}$, e il coefficiente di $\mathbf{v}_j$ è $-1\neq 0$: è dunque non banale. Perciò i vettori sono dipendenti. $\blacksquare$

Questo teorema è la giustificazione rigorosa dell'intuizione con cui abbiamo aperto la lezione: «dipendente» significa proprio «uno è spiegabile con gli altri, dunque ridondante». Si noti l'importanza del passo in cui dividiamo per $c_j$: è lecito solo perché abbiamo scelto un coefficiente *non nullo*, ed è la ragione per cui la definizione di dipendenza richiede «almeno un coefficiente diverso da zero» e non semplicemente «una combinazione nulla».

### 3.2 L'indipendenza garantisce l'unicità delle coordinate

**Enunciato.** Sia $\mathcal{B}=\{\mathbf{b}_1,\dots,\mathbf{b}_n\}$ una base di $V$. Allora ogni $\mathbf{w}\in V$ si scrive in modo unico come $\mathbf{w}=\sum_{i=1}^n c_i\mathbf{b}_i$.

**Dimostrazione.** L'esistenza di almeno una scrittura è immediata dal fatto che $\mathcal{B}$ genera $V$ (requisito (B2)): ogni $\mathbf{w}\in V$ è per definizione una combinazione lineare degli elementi di $\mathcal{B}$. Resta da provare l'unicità, ed è qui che entra l'indipendenza.

Supponiamo che $\mathbf{w}$ ammetta due scritture:

$$
\mathbf{w}=\sum_{i=1}^n c_i\mathbf{b}_i \qquad\text{e}\qquad \mathbf{w}=\sum_{i=1}^n d_i\mathbf{b}_i.
$$

Sottraiamo membro a membro. Il lato sinistro dà $\mathbf{w}-\mathbf{w}=\mathbf{0}$; il destro, raccogliendo per ciascun $\mathbf{b}_i$, dà

$$
\mathbf{0}=\sum_{i=1}^n (c_i-d_i)\mathbf{b}_i.
$$

Questa è una combinazione lineare degli elementi di $\mathcal{B}$ uguale al vettore nullo. Poiché $\mathcal{B}$ è per ipotesi indipendente (requisito (B1)), l'unica possibilità è che tutti i coefficienti siano nulli:

$$
c_i-d_i=0 \quad\text{per ogni } i,\qquad\text{cioè}\qquad c_i=d_i \quad\text{per ogni } i.
$$

Le due scritture coincidono: la rappresentazione è unica. $\blacksquare$

La dimostrazione rende trasparente la divisione dei ruoli fra i due requisiti di una base: (B2) fornisce l'*esistenza* delle coordinate, (B1) ne fornisce l'*unicità*. Togliendo l'indipendenza, uno stesso vettore avrebbe infinite rappresentazioni e il concetto di coordinate perderebbe senso.

### 3.3 Invarianza della dimensione

<details class="dim-tecnica">
<summary>Lemma di scambio e dimostrazione che tutte le basi hanno la stessa cardinalità</summary>

Il cuore tecnico dell'intera teoria è il seguente lemma, che limita quanti vettori indipendenti può contenere uno spazio in funzione di quanti ne bastano a generarlo.

**Lemma (di scambio, forma numerica).** Se $V=\operatorname{span}\{\mathbf{u}_1,\dots,\mathbf{u}_n\}$ (cioè $V$ è generato da $n$ vettori) e $\mathbf{w}_1,\dots,\mathbf{w}_m$ sono vettori di $V$ con $m>n$, allora $\mathbf{w}_1,\dots,\mathbf{w}_m$ sono linearmente dipendenti.

*Dimostrazione del lemma.* Poiché i $\mathbf{u}_i$ generano $V$, ciascun $\mathbf{w}_j$ si scrive come loro combinazione lineare:

$$
\mathbf{w}_j=\sum_{i=1}^n a_{ij}\,\mathbf{u}_i,\qquad j=1,\dots,m.
$$

Cerchiamo una combinazione nulla non banale dei $\mathbf{w}_j$, cioè coefficienti $x_1,\dots,x_m$ non tutti nulli con $\sum_{j=1}^m x_j\mathbf{w}_j=\mathbf{0}$. Sostituendo l'espressione dei $\mathbf{w}_j$ e scambiando l'ordine delle somme:

$$
\sum_{j=1}^m x_j\mathbf{w}_j=\sum_{j=1}^m x_j\sum_{i=1}^n a_{ij}\mathbf{u}_i=\sum_{i=1}^n\left(\sum_{j=1}^m a_{ij}x_j\right)\mathbf{u}_i.
$$

Questa combinazione dei $\mathbf{u}_i$ è certamente $\mathbf{0}$ se ogni coefficiente interno si annulla, cioè se

$$
\sum_{j=1}^m a_{ij}x_j=0\qquad\text{per ogni } i=1,\dots,n.
$$

Ma questo è un sistema lineare *omogeneo* di $n$ equazioni nelle $m$ incognite $x_1,\dots,x_m$. Poiché $m>n$ — più incognite che equazioni — il sistema ha necessariamente una soluzione non banale (per la classificazione dei sistemi omogenei vista nella lezione sui sistemi: con più colonne che righe compaiono variabili libere). Quella soluzione fornisce coefficienti $x_j$ non tutti nulli con $\sum_j x_j\mathbf{w}_j=\mathbf{0}$: i $\mathbf{w}_j$ sono dipendenti. $\square$

**Conseguenza (invarianza della dimensione).** Siano $\mathcal{B}=\{\mathbf{b}_1,\dots,\mathbf{b}_n\}$ e $\mathcal{C}=\{\mathbf{c}_1,\dots,\mathbf{c}_m\}$ due basi di $V$. Vogliamo $m=n$.

Poiché $\mathcal{B}$ genera $V$ (ha $n$ elementi) e $\mathcal{C}$ è un insieme di vettori indipendenti di $V$, il lemma proibisce che $\mathcal{C}$ abbia più di $n$ elementi: se fosse $m>n$, il lemma renderebbe $\mathcal{C}$ dipendente, contro l'ipotesi che sia una base. Dunque $m\le n$.

Scambiando i ruoli — $\mathcal{C}$ genera (ha $m$ elementi) e $\mathcal{B}$ è indipendente — lo stesso lemma dà $n\le m$.

Dalle due disuguaglianze $m\le n$ e $n\le m$ segue $m=n$. $\blacksquare$

**Corollari operativi.** In uno spazio $V$ di dimensione $n$: (i) più di $n$ vettori sono sempre dipendenti; (ii) meno di $n$ vettori non possono generare $V$; (iii) $n$ vettori indipendenti sono automaticamente una base (se non generassero, si potrebbe aggiungere un vettore fuori dalla loro span ottenendo $n+1$ vettori indipendenti, impossibile per (i)); (iv) $n$ generatori sono automaticamente indipendenti (se fossero dipendenti, se ne potrebbe rimuovere uno restando generatori con $n-1$ vettori, impossibile per (ii)). Sono queste equivalenze a rendere così economico verificare che un insieme di $n$ vettori è una base: basta controllarne *una* delle due proprietà.

</details>

<details class="dim-tecnica">
<summary>Nullità più rango come uguaglianza di dimensioni</summary>

Riformuliamo il teorema di nullità più rango nel linguaggio delle dimensioni, collegandolo al calcolo con i pivot già svolto nella lezione sul rango.

Sia $A$ di tipo $m\times n$ e sia $R$ la sua forma a scalini ridotta. Le colonne di $R$ si dividono in due gruppi disgiunti che esauriscono tutte le $n$ colonne: le **colonne pivot** (una per ciascun pivot) e le **colonne libere**. Il loro numero è rispettivamente $\operatorname{rk}(A)$ e $n-\operatorname{rk}(A)$.

*Dimensione dell'immagine.* Le colonne di $A$ corrispondenti alle colonne pivot sono indipendenti e generano lo spazio delle colonne; sono quindi una base di $\operatorname{Im}(A)$. Perciò $\dim\operatorname{Im}(A)=\operatorname{rk}(A)$.

*Dimensione del nucleo.* Ogni colonna libera dà origine a una variabile libera; assegnando a una variabile libera il valore $1$ e a tutte le altre $0$ si costruisce una soluzione di $A\mathbf{x}=\mathbf{0}$, e le soluzioni così ottenute (una per colonna libera) sono indipendenti e generano $\ker(A)$ — sono una sua base. Perciò $\dim\ker(A)=n-\operatorname{rk}(A)$.

Sommando le due dimensioni si ricostruisce il totale delle colonne:

$$
\dim\operatorname{Im}(A)+\dim\ker(A)=\operatorname{rk}(A)+\big(n-\operatorname{rk}(A)\big)=n.
$$

La costruzione esplicita della base del nucleo dalle variabili libere è la stessa svolta passo per passo nella lezione sul rango; qui il punto nuovo è che quei generatori formano una *base*, il che dà alla nullità lo statuto di dimensione di un sottospazio.

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — Indipendenza in $\mathbb{R}^2$ col determinante.** I vettori $(1,2)$ e $(3,1)$: li dispongo in colonna, $A=\begin{psmallmatrix}1&3\\2&1\end{psmallmatrix}$. Basta osservare che le colonne non sono proporzionali; in modo sistematico, la riduzione dà due pivot, quindi rango $2$ e indipendenza. Essendo due vettori indipendenti in $\mathbb{R}^2$, formano una base.

**Esempio 2 (introduttivo) — Dipendenza per proporzionalità.** I vettori $(2,4)$ e $(1,2)$ sono dipendenti perché $(2,4)=2(1,2)$; la combinazione non banale $1\cdot(2,4)-2\cdot(1,2)=\mathbf{0}$ lo certifica. Non formano una base di $\mathbb{R}^2$: generano solo la retta $y=2x$.

**Esempio 3 (intermedio) — Verifica con eliminazione.** I vettori $(1,2,0)$, $(0,1,3)$, $(1,0,-6)$ in colonna:

$$
A=\begin{psmallmatrix}1&0&1\\2&1&0\\0&3&-6\end{psmallmatrix}
\xrightarrow{R_2-2R_1}
\begin{psmallmatrix}1&0&1\\0&1&-2\\0&3&-6\end{psmallmatrix}
\xrightarrow{R_3-3R_2}
\begin{psmallmatrix}1&0&1\\0&1&-2\\0&0&0\end{psmallmatrix}.
$$

Due pivot su tre colonne: rango $2<3$, i vettori sono dipendenti. La colonna libera è la terza, e risolvendo $A\mathbf{c}=\mathbf{0}$ si trova $\mathbf{v}_3=\mathbf{v}_1-2\mathbf{v}_2$ (infatti $(1,0,-6)=(1,2,0)-2(0,1,3)$).

**Esempio 4 (intermedio) — Base di un piano.** Il piano $x+y+z=0$ in $\mathbb{R}^3$: da $x=-y-z$, con $y=s$, $z=t$ liberi, i punti sono $(-s-t,s,t)=s(-1,1,0)+t(-1,0,1)$. I due vettori $(-1,1,0)$ e $(-1,0,1)$ generano il piano e non sono proporzionali, dunque sono indipendenti: sono una base del piano, che ha perciò dimensione $2$.

**Esempio 5 (intermedio) — Base del nucleo e nullità.** Per $A=\begin{psmallmatrix}1&1&2\\2&2&4\end{psmallmatrix}$, la seconda riga è doppia della prima, l'unica equazione è $x_1+x_2+2x_3=0$, cioè $x_1=-x_2-2x_3$. Con $x_2=s$, $x_3=t$: $\ker(A)=\operatorname{span}\{(-1,1,0),(-2,0,1)\}$, e quei due generatori sono indipendenti (guardando le ultime due componenti, $(1,0)$ e $(0,1)$), quindi una base. Dunque $\dim\ker(A)=2$; poiché $\operatorname{rk}(A)=1$, la verifica $1+2=3$ (colonne) è soddisfatta.

**Esempio 6 (intermedio) — Coordinate in una base non canonica.** Base $\mathcal{B}=\{(2,1),(1,1)\}$ di $\mathbb{R}^2$; cerchiamo $[(5,1)]_{\mathcal{B}}$. Imponendo $c_1(2,1)+c_2(1,1)=(5,1)$ si ottiene il sistema $2c_1+c_2=5$, $c_1+c_2=1$; sottraendo, $c_1=4$ e quindi $c_2=-3$. Le coordinate sono $(4,-3)$, e la verifica $4(2,1)-3(1,1)=(5,1)$ conferma. Nella base canonica lo stesso vettore ha coordinate $(5,1)$: le coordinate dipendono dalla base.

**Esempio 7 (avanzato) — Base di uno spazio di polinomi.** Verifichiamo che $\{1,x,x^2\}$ è una base di $P_2$. Indipendenza: se $c_0+c_1x+c_2x^2=0$ come polinomio (cioè per ogni $x$), allora tutti i coefficienti sono nulli — un polinomio non nullo di grado $\le 2$ ha al più due radici, non può annullarsi ovunque. Generano: ogni polinomio di grado $\le 2$ è per definizione $a_0+a_1x+a_2x^2$, combinazione dei tre. Dunque $\dim(P_2)=3$. Una base alternativa è $\{1,\,x-1,\,(x-1)^2\}$ (base di Taylor centrata in $1$), a riprova che le basi sono molte.

**Esempio 8 (avanzato) — Indipendenza di funzioni.** Le funzioni $e^{x},e^{2x},e^{3x}$ sono indipendenti in $C(\mathbb{R})$. Supponiamo $c_1e^{x}+c_2e^{2x}+c_3e^{3x}=0$ per ogni $x$. Derivando due volte otteniamo tre relazioni; valutandole in $x=0$ si ottiene il sistema

$$
c_1+c_2+c_3=0,\qquad c_1+2c_2+3c_3=0,\qquad c_1+4c_2+9c_3=0,
$$

la cui matrice dei coefficienti (matrice di Vandermonde con nodi $1,2,3$) ha determinante non nullo: l'unica soluzione è $c_1=c_2=c_3=0$. Le tre funzioni sono indipendenti — un esempio in uno spazio di dimensione infinita, dove pure il concetto di indipendenza continua a funzionare.

---

## 5. Collegamenti e riepilogo

Questa lezione porta a maturazione gli strumenti introdotti nel [algebra-05-spazi-vettoriali]: lo span diventa il criterio di generazione (B2), e la nozione di sottospazio acquista una misura numerica, la dimensione. Soprattutto, la lezione salda definitivamente il conto con il [algebra-04-rango-rouche-capelli]: il rango si rivela come $\dim\operatorname{Im}(A)$ e la nullità come $\dim\ker(A)$, così che il teorema di nullità più rango diventa un'uguaglianza tra dimensioni di sottospazi anziché un mero conteggio di pivot. Il linguaggio delle coordinate qui costruito è ciò che permetterà, nella prossima lezione [algebra-07-trasformazioni-lineari], di rappresentare ogni applicazione lineare con una matrice una volta fissate le basi, e di rileggere il teorema di nullità più rango come «teorema fondamentale delle applicazioni lineari». L'idea che l'indipendenza di $n$ vettori in dimensione $n$ equivalga a non collassare — vista nello slider come non-parallelismo — troverà nel [algebra-08-determinanti] la sua misura quantitativa: il determinante è non nullo esattamente quando le colonne sono indipendenti, cioè formano una base.

Fuori dall'algebra lineare, base e dimensione sono ovunque si parli di gradi di libertà e di rappresentazione efficiente dell'informazione. Nell'analisi delle componenti principali (PCA) si cerca una nuova base dei dati in cui poche direzioni catturino gran parte della variabilità, proiettando i dati su un sottospazio di dimensione ridotta: è una scelta di base al servizio della compressione. Nella teoria delle equazioni differenziali lineari, l'insieme delle soluzioni di un'equazione di ordine $n$ è uno spazio vettoriale di dimensione $n$, e «risolvere» significa esibirne una base (le soluzioni fondamentali); l'indipendenza di queste soluzioni si controlla con il wronskiano, un determinante. In statistica, la dimensione dello spazio generato dai regressori decide se i parametri di un modello sono identificabili: la multicollinearità è, letteralmente, una caduta di indipendenza tra le colonne.

**Idee chiave da ricordare.** Un insieme di vettori è indipendente se l'unica loro combinazione nulla è quella banale; equivalentemente, se nessuno è combinazione degli altri, ed equivalentemente ancora se la matrice che li ha per colonne ha nucleo banale (rango pari al numero di vettori). Una base è un insieme indipendente e generatore: sobrio quanto basta, ricco quanto serve. In una base ogni vettore ha coordinate uniche — esistenza dal generare, unicità dall'indipendenza. Tutte le basi di uno spazio hanno lo stesso numero di elementi, la dimensione, che è una proprietà intrinseca dello spazio; in dimensione $n$, $n$ vettori indipendenti sono già una base e altrettanto $n$ generatori. Infine, rango e nullità sono le dimensioni di immagine e nucleo, e la loro somma è il numero di colonne.

---

## 6. Esercizi

<details class="dim-tecnica">
<summary>Esercizio 1 (introduttivo) — Indipendenti o dipendenti?</summary>

**Testo.** Stabilire se $(1,0,1)$, $(2,1,0)$, $(0,1,-2)$ sono indipendenti in $\mathbb{R}^3$.

**Soluzione.** Li dispongo in colonna e riduco:

$$
\begin{psmallmatrix}1&2&0\\0&1&1\\1&0&-2\end{psmallmatrix}
\xrightarrow{R_3-R_1}
\begin{psmallmatrix}1&2&0\\0&1&1\\0&-2&-2\end{psmallmatrix}
\xrightarrow{R_3+2R_2}
\begin{psmallmatrix}1&2&0\\0&1&1\\0&0&0\end{psmallmatrix}.
$$

Due pivot su tre colonne: rango $2<3$, dunque **dipendenti**. Per esibire la relazione, risolviamo $A\mathbf{c}=\mathbf{0}$ dalla forma ridotta ponendo la variabile libera $c_3=1$: da $R_2$ segue $c_2+c_3=0$, cioè $c_2=-1$; da $R_1$ segue $c_1+2c_2=0$, cioè $c_1=2$. La relazione di dipendenza è quindi $2\mathbf{v}_1-\mathbf{v}_2+\mathbf{v}_3=\mathbf{0}$, ovvero $\mathbf{v}_3=\mathbf{v}_2-2\mathbf{v}_1=(2,1,0)-2(1,0,1)=(0,1,-2)$. Verifica: $2(1,0,1)-(2,1,0)+(0,1,-2)=(0,0,0)$. ✓

</details>

<details class="dim-tecnica">
<summary>Esercizio 2 (introduttivo) — Base del nucleo</summary>

**Testo.** Trovare una base di $\ker(A)$ per $A=\begin{psmallmatrix}1&2&3\\2&4&6\end{psmallmatrix}$ e verificare nullità più rango.

**Soluzione.** La seconda riga è doppia della prima, quindi $\operatorname{rk}(A)=1$ e l'unica equazione è $x_1+2x_2+3x_3=0$, cioè $x_1=-2x_2-3x_3$. Con $x_2=s$, $x_3=t$ liberi:

$$
\ker(A)=s\begin{psmallmatrix}-2\\1\\0\end{psmallmatrix}+t\begin{psmallmatrix}-3\\0\\1\end{psmallmatrix}.
$$

I due generatori sono indipendenti (ultime due componenti $(1,0)$ e $(0,1)$): sono una base, $\dim\ker(A)=2$. Verifica: $\operatorname{rk}(A)+\dim\ker(A)=1+2=3$, il numero di colonne. ✓

</details>

<details class="dim-tecnica">
<summary>Esercizio 3 (intermedio) — Coordinate in una base di P₂</summary>

**Testo.** Trovare le coordinate di $p(x)=3+2x-x^2$ nella base $\mathcal{B}=\{1+x,\ x+x^2,\ 1+x^2\}$ di $P_2$.

**Soluzione.** Imponiamo $c_1(1+x)+c_2(x+x^2)+c_3(1+x^2)=3+2x-x^2$ e uguagliamo i coefficienti:

$$
\text{costante: } c_1+c_3=3,\qquad
\text{grado 1: } c_1+c_2=2,\qquad
\text{grado 2: } c_2+c_3=-1.
$$

Dalla prima $c_3=3-c_1$, dalla seconda $c_2=2-c_1$; sostituendo nella terza $(2-c_1)+(3-c_1)=-1$, cioè $5-2c_1=-1$, da cui $c_1=3$, $c_2=-1$, $c_3=0$. Coordinate: $[(p)]_{\mathcal{B}}=(3,-1,0)$. Verifica: $3(1+x)-1(x+x^2)=3+2x-x^2$. ✓

</details>

<details class="dim-tecnica">
<summary>Esercizio 4 (intermedio) — Rango, nullità e base del nucleo</summary>

**Testo.** Per $A=\begin{psmallmatrix}1&0&2&1\\0&1&-1&2\\2&1&3&4\end{psmallmatrix}$, calcolare rango e nullità ed esibire una base del nucleo.

**Soluzione.** Riduzione:

$$
\xrightarrow{R_3-2R_1}
\begin{psmallmatrix}1&0&2&1\\0&1&-1&2\\0&1&-1&2\end{psmallmatrix}
\xrightarrow{R_3-R_2}
\begin{psmallmatrix}1&0&2&1\\0&1&-1&2\\0&0&0&0\end{psmallmatrix}.
$$

Due pivot (colonne $1$ e $2$): $\operatorname{rk}(A)=2$, quindi $\dim\ker(A)=4-2=2$. Variabili libere $x_3=s$, $x_4=t$; da $R_2$, $x_2=x_3-2x_4=s-2t$; da $R_1$, $x_1=-2x_3-x_4=-2s-t$. Base del nucleo:

$$
\left\{\begin{psmallmatrix}-2\\1\\1\\0\end{psmallmatrix},\ \begin{psmallmatrix}-1\\-2\\0\\1\end{psmallmatrix}\right\}.
$$

</details>

<details class="dim-tecnica">
<summary>Esercizio 5 (intermedio) — Estendere a una base</summary>

**Testo.** Estendere $\{(1,1,0),(0,1,1)\}$ a una base di $\mathbb{R}^3$.

**Soluzione.** Servono $\dim(\mathbb{R}^3)=3$ vettori indipendenti; i due dati lo sono (non proporzionali). Cerchiamo un terzo vettore fuori dal loro span, cioè dal piano $\operatorname{span}\{(1,1,0),(0,1,1)\}$: dall'esercizio analogo della lezione precedente questo piano ha equazione $x-y+z=0$, quindi basta scegliere un vettore che non la soddisfi, ad esempio $(1,0,0)$ (perché $1-0+0=1\neq 0$). I tre vettori $(1,1,0),(0,1,1),(1,0,0)$ sono allora indipendenti e, essendo tre in dimensione tre, formano una base di $\mathbb{R}^3$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 6 (avanzato) — Dimensione di un sottospazio definito da vincoli</summary>

**Testo.** Trovare la dimensione e una base di $W=\{(x,y,z,w)\in\mathbb{R}^4: x+y=0,\ z+w=0\}$.

**Soluzione.** I due vincoli danno $y=-x$ e $w=-z$; le variabili libere sono $x=s$ e $z=t$. Allora $(x,y,z,w)=(s,-s,t,-t)=s(1,-1,0,0)+t(0,0,1,-1)$. I due generatori sono indipendenti (guardando le componenti $1$ e $3$), dunque una base: $\dim(W)=2$. Coerenza col conteggio: $W$ è il nucleo della matrice $\begin{psmallmatrix}1&1&0&0\\0&0&1&1\end{psmallmatrix}$, che ha rango $2$; nullità $=4-2=2$. ✓

</details>

<details class="dim-tecnica">
<summary>Esercizio 7 (avanzato) — Perché lo zero non può stare in una base</summary>

**Testo.** Dimostrare che qualunque insieme di vettori che contiene il vettore nullo è linearmente dipendente. Dedurne che $\mathbf{0}$ non appartiene mai a una base.

**Soluzione.** Sia $\{\mathbf{0},\mathbf{v}_2,\dots,\mathbf{v}_k\}$ un insieme che contiene il vettore nullo. Consideriamo la combinazione con coefficiente $1$ davanti a $\mathbf{0}$ e $0$ davanti a tutti gli altri: $1\cdot\mathbf{0}+0\cdot\mathbf{v}_2+\cdots+0\cdot\mathbf{v}_k=\mathbf{0}$. È una combinazione nulla in cui *non* tutti i coefficienti sono nulli (quello di $\mathbf{0}$ vale $1$): per definizione l'insieme è dipendente. Poiché una base deve essere indipendente (B1), non può contenere $\mathbf{0}$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 8 (applicativo) — Indipendenza di soluzioni e cambio di base</summary>

**Testo.** (a) Dato $\mathbf{v}=(3,5)$ in coordinate canoniche, trovare $[\mathbf{v}]_{\mathcal{B}}$ nella base $\mathcal{B}=\{(1,2),(1,1)\}$. (b) Interpretare il risultato dicendo perché $\mathcal{B}$ è effettivamente una base.

**Soluzione.** (a) Imponiamo $c_1(1,2)+c_2(1,1)=(3,5)$: il sistema è $c_1+c_2=3$, $2c_1+c_2=5$; sottraendo la prima dalla seconda, $c_1=2$, quindi $c_2=1$. Coordinate: $[(3,5)]_{\mathcal{B}}=(2,1)$; verifica $2(1,2)+1(1,1)=(3,5)$. ✓ (b) Il sistema aveva soluzione *unica* per $(3,5)$, e lo stesso vale per ogni vettore-target: ciò equivale a dire che la matrice $\begin{psmallmatrix}1&1\\2&1\end{psmallmatrix}$ ha rango $2$, cioè colonne indipendenti che generano $\mathbb{R}^2$ — la definizione di base. L'unicità delle coordinate trovata è esattamente la proprietà dimostrata nella sezione 3.2.

</details>
