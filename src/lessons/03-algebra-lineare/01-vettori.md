---
id: algebra-01-vettori
titolo: "Vettori e operazioni fondamentali"
materia: algebra-lineare
argomento: "Fondamenti"
modulo: "Vettori, matrici e sistemi lineari"
livello: universitario
slug: algebra-01-vettori

# legacy
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: "Vettori e operazioni fondamentali"
title_en: "Vectors and fundamental operations"
level: blue
order: 1
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Lo spazio Rⁿ: vettori, combinazioni lineari, prodotto interno, norma, ortogonalità"

prerequisiti: []

collegamenti:
  - algebra-02-matrici
  - algebra-05-spazi-vettoriali
  - algebra-11-prodotto-scalare
  - algebra-12-ortogonalita-proiezioni
  - analisi-20-funzioni-piu-variabili

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Lo spazio Rⁿ, operazioni vettoriali, combinazione lineare, prodotto interno standard, norma euclidea, ortogonalità"
    note: "appunti-prof: notazione e convenzioni d'esame; prodotto interno indicato con ⟨·,·⟩ oppure ·"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Rⁿ come spazio vettoriale, combinazioni lineari; disuguaglianza di Cauchy-Schwarz e triangolare in spazi con prodotto interno"
    note: "impostazione astratta e dimostrazione algebrica di Cauchy-Schwarz"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Intuizione geometrica di vettori, combinazioni lineari e proiezioni; esempi applicativi"
    note: "visualizzazione e esempi concreti"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Vettori come frecce e liste; prodotto scalare e angolo"
    note: "supporto intuitivo"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-13"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Supponi di dover descrivere uno spostamento: «tre passi a est, quattro passi a nord». La frase «sette passi» perde l'informazione essenziale, la *direzione*. Serve un oggetto che tenga insieme più numeri come un'unica entità e che permetta di combinarli con regole precise. Quell'oggetto è il **vettore**, e l'algebra lineare è la teoria di come i vettori si sommano, si scalano e si confrontano.

Lo stesso oggetto compare con tre volti diversi, e ognuno è utile in un contesto:

- in **geometria** un vettore è una freccia con lunghezza e direzione;
- in **matematica** è una lista ordinata di numeri, $(v_1, v_2, \dots, v_n)$;
- in **informatica** è un array, una cella di memoria che contiene $n$ numeri.

La forza dell'algebra lineare sta nel fatto che questi tre volti obbediscono alle *stesse* regole aritmetiche. Puoi sommare due frecce mettendole testa-coda; puoi allungarle moltiplicandole per un numero; puoi misurare quanto due frecce «puntano nella stessa direzione». Queste tre operazioni — somma, moltiplicazione per scalare, prodotto scalare — sono elementari in due dimensioni, ma restano identiche in spazi con milioni di dimensioni, dove l'intuizione geometrica non arriva più ma le regole continuano a valere. È lì che nascono il machine learning, la grafica 3D, la meccanica quantistica.

Per uno studente di economia il vettore è ovunque, anche se raramente lo si chiama così. Un **paniere di beni** è un vettore: $\mathbf{q} = (q_1, \dots, q_n)$, le quantità di ciascun bene. Un **vettore dei prezzi** è $\mathbf{p} = (p_1, \dots, p_n)$. La spesa totale è la somma $p_1 q_1 + \dots + p_n q_n$: esattamente il **prodotto scalare** $\mathbf{p}\cdot\mathbf{q}$ che definiremo tra poco. Domanda, offerta, portafogli di titoli, serie di rendimenti: tutti vettori. Capire i vettori significa capire il linguaggio in cui è scritta la microeconomia formale.

Il concetto attorno a cui ruota tutto il corso ha un nome: **combinazione lineare**. Sommare vettori dopo averli scalati — «$2$ volte questo più $3$ volte quello» — è l'unico verbo dell'algebra lineare. Ogni argomento successivo (basi, rango, trasformazioni, autovalori) è una domanda su combinazioni lineari. Vale la pena tenerlo a mente fin dalla prima riga.

Storicamente l'idea maturò nell'Ottocento con Hermann Grassmann (che introdusse il calcolo astratto dei vettori) e William Rowan Hamilton (i quaternioni): per la prima volta si trattarono liste di numeri come oggetti algebrici a pieno titolo, con una loro aritmetica. Da lì l'algebra lineare è diventata, nel Novecento, il linguaggio universale delle scienze quantitative.

---

## 2. Teoria

### 2.1 Vettori nello spazio $\mathbb{R}^n$

Un **vettore** in $\mathbb{R}^n$ è una $n$-upla ordinata di numeri reali. Lo scriviamo indifferentemente in riga o, più spesso in algebra lineare, in colonna:

$$\mathbf{v} = (v_1, v_2, \dots, v_n) = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} \in \mathbb{R}^n .$$

I numeri $v_1, \dots, v_n$ sono le **componenti** del vettore; $n$ è la **dimensione** dello spazio. L'ordine conta: $(1,2)$ e $(2,1)$ sono vettori diversi. Due vettori sono **uguali** quando hanno la *stessa dimensione* e *tutte* le componenti corrispondenti uguali: $\mathbf{u} = \mathbf{v} \iff u_i = v_i$ per ogni $i = 1, \dots, n$.

Il vettore con tutte le componenti nulle, $\mathbf{0} = (0, \dots, 0)$, si chiama **vettore nullo**. È l'unico vettore senza una direzione definita.

*Micro-esempio.* In $\mathbb{R}^3$, il vettore $\mathbf{v} = (2, 0, -1)$ ha componenti $v_1 = 2$, $v_2 = 0$, $v_3 = -1$. Non è uguale a $(2, -1, 0)$: le stesse cifre in ordine diverso danno un punto diverso dello spazio.

### 2.2 Somma, moltiplicazione per scalare, combinazione lineare

Su $\mathbb{R}^n$ definiamo due operazioni, entrambe **componente per componente**.

La **somma** di due vettori:

$$\mathbf{u} + \mathbf{v} = (u_1 + v_1,\ u_2 + v_2,\ \dots,\ u_n + v_n).$$

Geometricamente è la regola del parallelogramma: appoggia la coda di $\mathbf{v}$ sulla punta di $\mathbf{u}$, e la freccia che va dall'origine alla nuova punta è $\mathbf{u} + \mathbf{v}$.

La **moltiplicazione per uno scalare** $c \in \mathbb{R}$:

$$c\,\mathbf{v} = (c\,v_1,\ c\,v_2,\ \dots,\ c\,v_n).$$

Geometricamente $c$ allunga ($|c| > 1$) o accorcia ($|c| < 1$) la freccia; se $c < 0$ ne inverte il verso. Il termine «scalare» nasce proprio da qui: il numero *scala* il vettore.

Combinando le due operazioni si ottiene la nozione centrale del corso. Una **combinazione lineare** dei vettori $\mathbf{v}_1, \dots, \mathbf{v}_k$ con coefficienti (scalari) $c_1, \dots, c_k$ è il vettore

$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k .$$

Praticamente tutta l'algebra lineare consiste nel chiedersi: *quali vettori si possono scrivere come combinazione lineare di un insieme dato?* Lo rivedremo con lo `span`, le basi, il rango.

*Micro-esempio.* Con $\mathbf{u} = (1, 2)$ e $\mathbf{v} = (3, -1)$, la combinazione $2\mathbf{u} - \mathbf{v}$ vale $2(1,2) - (3,-1) = (2-3,\ 4+1) = (-1, 5)$.

Queste operazioni soddisfano una lista di proprietà che, prese come assiomi astratti, definiranno più avanti il concetto di **spazio vettoriale** (lezione sugli Spazi vettoriali). Le raccogliamo qui perché sono le regole del gioco:

| Proprietà | Formula |
| --- | --- |
| Commutatività della somma | $\mathbf{u}+\mathbf{v} = \mathbf{v}+\mathbf{u}$ |
| Associatività della somma | $(\mathbf{u}+\mathbf{v})+\mathbf{w} = \mathbf{u}+(\mathbf{v}+\mathbf{w})$ |
| Elemento neutro | $\mathbf{v}+\mathbf{0} = \mathbf{v}$ |
| Opposto | $\mathbf{v}+(-\mathbf{v}) = \mathbf{0}$ |
| Distributività sugli scalari | $(c+d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$ |
| Distributività sui vettori | $c(\mathbf{u}+\mathbf{v}) = c\mathbf{u}+c\mathbf{v}$ |
| Associatività degli scalari | $c(d\,\mathbf{v}) = (cd)\,\mathbf{v}$ |
| Scalare neutro | $1\cdot\mathbf{v} = \mathbf{v}$ |

Ogni riga si verifica applicando la definizione componente per componente e usando le proprietà dei numeri reali. Non c'è nulla di nascosto: le regole dei vettori *ereditano* quelle dei numeri.

### 2.3 Il prodotto scalare

Le operazioni viste finora producono vettori a partire da vettori. Il **prodotto scalare** (o prodotto interno standard) fa qualcosa di diverso: prende due vettori e restituisce un *numero*. Per $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$:

$$\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i = u_1 v_1 + u_2 v_2 + \dots + u_n v_n .$$

Questa è la definizione **algebrica**: moltiplica le componenti corrispondenti e somma. Ma la stessa quantità ha un significato **geometrico** profondo, che dimostreremo in §3.1:

$$\mathbf{u} \cdot \mathbf{v} = \lVert \mathbf{u} \rVert\, \lVert \mathbf{v} \rVert \cos\theta ,$$

dove $\theta \in [0, \pi]$ è l'angolo tra i due vettori e $\lVert\cdot\rVert$ è la lunghezza (definita in §2.4). Il prodotto scalare misura **quanto due vettori puntano nella stessa direzione**, pesato dalle loro lunghezze:

- $\theta = 0$ (stessa direzione): $\cos\theta = 1$, il prodotto è massimo, $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$;
- $\theta = 90^\circ$ (perpendicolari): $\cos\theta = 0$, il prodotto è nullo;
- $\theta = 180^\circ$ (verso opposto): $\cos\theta = -1$, il prodotto è minimo, $-\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$.

Il prodotto scalare è **simmetrico** ($\mathbf{u}\cdot\mathbf{v} = \mathbf{v}\cdot\mathbf{u}$), **lineare in ciascun argomento** ($(a\mathbf{u} + b\mathbf{w})\cdot\mathbf{v} = a(\mathbf{u}\cdot\mathbf{v}) + b(\mathbf{w}\cdot\mathbf{v})$) e **definito positivo** ($\mathbf{v}\cdot\mathbf{v} \ge 0$, con uguaglianza solo se $\mathbf{v} = \mathbf{0}$). Queste tre proprietà — simmetria, bilinearità, positività — sono la definizione astratta di prodotto interno che riprenderemo nella lezione dedicata.

*Micro-esempio.* Per $\mathbf{u} = (1, 2, 3)$ e $\mathbf{v} = (4, 0, -1)$: $\mathbf{u}\cdot\mathbf{v} = 1\cdot 4 + 2\cdot 0 + 3\cdot(-1) = 4 - 3 = 1$. Il numero è piccolo e positivo: i vettori formano un angolo poco inferiore a $90^\circ$.

Ecco come varia il prodotto scalare, a lunghezze fissate, al ruotare di un vettore rispetto all'altro. Il segno cambia esattamente quando si supera l'angolo retto:

```slider
{"title":"Prodotto scalare u·v = ‖u‖‖v‖·cos θ al variare dell'angolo θ (parametro: prodotto delle norme)","fn":"a*Math.cos(x)","fn2":"0","domain":[0,3.1416],"yDomain":[-6,6],"pname":"a","pmin":1,"pmax":6,"pdefault":4,"pstep":0.5,"plabel":"prodotto delle lunghezze ‖u‖·‖v‖","label1":"u·v in funzione dell'angolo θ (radianti)","label2":"zero: ortogonalità (θ = 90°)"}
```

Il valore parte dal massimo $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ a $\theta = 0$, attraversa lo zero a $\theta = 90^\circ$ (ortogonalità), e scende al minimo $-\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ a $\theta = 180^\circ$. La forma della curva è sempre un coseno: cambia solo l'ampiezza, cioè il prodotto delle lunghezze.

### 2.4 Norma, distanza, versore

La **norma** (o lunghezza, o modulo) di un vettore è la sua lunghezza euclidea, ottenuta dal teorema di Pitagora esteso a $n$ dimensioni:

$$\lVert \mathbf{v} \rVert = \sqrt{\mathbf{v}\cdot\mathbf{v}} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2} .$$

Il legame $\lVert\mathbf{v}\rVert = \sqrt{\mathbf{v}\cdot\mathbf{v}}$ è cruciale: la lunghezza *nasce* dal prodotto scalare di un vettore con se stesso. La norma è sempre $\ge 0$ ed è nulla solo per il vettore nullo. Soddisfa inoltre la proprietà di scaling $\lVert c\,\mathbf{v}\rVert = |c|\,\lVert\mathbf{v}\rVert$ (allungare di $c$ moltiplica la lunghezza per $|c|$).

La **distanza** tra due punti $\mathbf{u}$ e $\mathbf{v}$ è la lunghezza del vettore differenza: $d(\mathbf{u}, \mathbf{v}) = \lVert \mathbf{u} - \mathbf{v}\rVert$.

Un vettore di norma $1$ si chiama **versore** (o vettore unitario). Per ottenere il versore che punta nella direzione di $\mathbf{v} \neq \mathbf{0}$ si **normalizza**, cioè si divide per la lunghezza:

$$\hat{\mathbf{v}} = \frac{\mathbf{v}}{\lVert \mathbf{v}\rVert} .$$

Normalizzare tiene la direzione e butta via l'informazione sulla lunghezza. È un'operazione che ricorrerà continuamente (proiezioni, Gram-Schmidt, statistica).

*Micro-esempio.* Per $\mathbf{v} = (3, 4)$: $\lVert\mathbf{v}\rVert = \sqrt{9 + 16} = 5$, quindi $\hat{\mathbf{v}} = \tfrac{1}{5}(3,4) = (0.6,\ 0.8)$. Controllo: $0.6^2 + 0.8^2 = 0.36 + 0.64 = 1$.

### 2.5 Angolo, ortogonalità, similarità

Invertendo la formula geometrica del prodotto scalare si ricava l'**angolo** tra due vettori non nulli:

$$\cos\theta = \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert}, \qquad \theta = \arccos\!\left( \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert} \right).$$

Due vettori si dicono **ortogonali** quando il loro prodotto scalare è nullo:

$$\mathbf{u} \perp \mathbf{v} \iff \mathbf{u}\cdot\mathbf{v} = 0 .$$

Questa è la definizione *algebrica* di perpendicolarità, e il suo pregio è che funziona in *ogni* dimensione, anche dove non possiamo disegnare nulla. In $\mathbb{R}^{1000}$ non abbiamo intuizione geometrica, ma «ortogonale» significa semplicemente «prodotto scalare zero». Per convenzione il vettore nullo è ortogonale a chiunque.

Il rapporto $\dfrac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert} = \cos\theta$ si chiama **similarità coseno** ed è compreso tra $-1$ e $+1$: vale $1$ per vettori paralleli concordi, $0$ per ortogonali, $-1$ per opposti. È il modo standard, nel machine learning, per misurare quanto due dati (due documenti, due utenti, due immagini) «si somigliano» come direzione, ignorando la loro grandezza.

*Micro-esempio.* $\mathbf{u} = (1, 1)$ e $\mathbf{v} = (1, -1)$: $\mathbf{u}\cdot\mathbf{v} = 1 - 1 = 0$, dunque sono ortogonali ($\theta = 90^\circ$), pur avendo entrambi lunghezza $\sqrt{2}$.

```checkpoint
[domanda] Due vettori hanno lunghezze $\lVert\mathbf{u}\rVert = 2$ e $\lVert\mathbf{v}\rVert = 5$ e prodotto scalare $\mathbf{u}\cdot\mathbf{v} = -5$. Qual è l'angolo tra loro? Sono ortogonali?
[risposta] $\cos\theta = \dfrac{-5}{2\cdot 5} = -\dfrac{1}{2}$, quindi $\theta = \arccos(-\tfrac12) = 120^\circ$. Non sono ortogonali (il prodotto scalare non è zero); formano un angolo ottuso, come conferma il segno negativo.
```

### 2.6 Le due disuguaglianze fondamentali

Due disuguaglianze governano la geometria di $\mathbb{R}^n$. Le enunciamo qui e le dimostriamo in §3.2 e §3.3.

La **disuguaglianza di Cauchy-Schwarz**: per ogni coppia di vettori,

$$\lvert \mathbf{u}\cdot\mathbf{v} \rvert \le \lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert ,$$

con uguaglianza se e solo se i vettori sono paralleli (uno multiplo dell'altro). È ciò che garantisce che il rapporto $\tfrac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert}$ stia davvero tra $-1$ e $1$, e quindi che l'angolo $\theta$ sia ben definito. È probabilmente la disuguaglianza più usata di tutta la matematica.

La **disuguaglianza triangolare**:

$$\lVert \mathbf{u} + \mathbf{v} \rVert \le \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert .$$

In parole: un lato di un triangolo non supera la somma degli altri due; il percorso diretto non è mai più lungo di quello che passa per un punto intermedio. L'uguaglianza vale solo quando $\mathbf{u}$ e $\mathbf{v}$ sono concordi (stessa direzione, stesso verso).

### 2.7 Proiezione ortogonale

Dato un vettore $\mathbf{u}$ e una direzione $\mathbf{v} \neq \mathbf{0}$, spesso serve sapere «quanto di $\mathbf{u}$ va nella direzione di $\mathbf{v}$». La risposta è la **proiezione ortogonale** di $\mathbf{u}$ su $\mathbf{v}$:

$$\operatorname{proj}_{\mathbf{v}} \mathbf{u} = \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}\, \mathbf{v} .$$

Il coefficiente $\dfrac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}$ dice di quanto scalare $\mathbf{v}$ per ottenere il vettore, parallelo a $\mathbf{v}$, più vicino a $\mathbf{u}$. La differenza $\mathbf{u} - \operatorname{proj}_{\mathbf{v}}\mathbf{u}$ è la **componente ortogonale**, ed è per costruzione perpendicolare a $\mathbf{v}$. Così ogni vettore si spezza in due pezzi: uno lungo $\mathbf{v}$ e uno ortogonale a $\mathbf{v}$.

Nota la struttura della formula: al numeratore il prodotto scalare (quanto $\mathbf{u}$ e $\mathbf{v}$ sono allineati), al denominatore $\lVert\mathbf{v}\rVert^2$ (per compensare la lunghezza di $\mathbf{v}$, dato che il risultato deve dipendere solo dalla sua *direzione*). Questa idea — decomporre un vettore lungo una direzione e ortogonalmente a essa — è il seme dei minimi quadrati e della regressione lineare, che rivedremo nella lezione sulle proiezioni.

*Micro-esempio.* Proietta $\mathbf{u} = (4, 2)$ su $\mathbf{v} = (1, 3)$: $\mathbf{u}\cdot\mathbf{v} = 4 + 6 = 10$, $\lVert\mathbf{v}\rVert^2 = 1 + 9 = 10$, quindi $\operatorname{proj}_{\mathbf{v}}\mathbf{u} = \tfrac{10}{10}(1,3) = (1,3)$. La componente ortogonale è $(4,2) - (1,3) = (3,-1)$, e infatti $(3,-1)\cdot(1,3) = 3 - 3 = 0$.

```checkpoint
[domanda] Perché nella formula della proiezione compare $\lVert\mathbf{v}\rVert^2$ e non $\lVert\mathbf{v}\rVert$? Cosa succederebbe se sostituissi $\mathbf{v}$ con $2\mathbf{v}$?
[risposta] La proiezione deve dipendere solo dalla *direzione* di $\mathbf{v}$, non dalla sua lunghezza. Con $2\mathbf{v}$: il numeratore $\mathbf{u}\cdot(2\mathbf{v}) = 2(\mathbf{u}\cdot\mathbf{v})$ raddoppia, il denominatore $\lVert 2\mathbf{v}\rVert^2 = 4\lVert\mathbf{v}\rVert^2$ quadruplica, e il vettore $2\mathbf{v}$ raddoppia: complessivamente $\tfrac{2}{4}\cdot 2 = 1$, il risultato è invariato. Con $\lVert\mathbf{v}\rVert$ al posto di $\lVert\mathbf{v}\rVert^2$ l'esponente non tornerebbe e la proiezione cambierebbe scalando $\mathbf{v}$: sarebbe sbagliata.
```

### 2.8 Prodotto vettoriale (solo in $\mathbb{R}^3$)

C'è un'operazione che vive esclusivamente in tre dimensioni: il **prodotto vettoriale**, che a due vettori associa un terzo vettore perpendicolare a entrambi. Per $\mathbf{u} = (u_1, u_2, u_3)$ e $\mathbf{v} = (v_1, v_2, v_3)$:

$$\mathbf{u}\times\mathbf{v} = (u_2 v_3 - u_3 v_2,\ \ u_3 v_1 - u_1 v_3,\ \ u_1 v_2 - u_2 v_1).$$

Le sue proprietà geometriche: $\mathbf{u}\times\mathbf{v}$ è **ortogonale** sia a $\mathbf{u}$ sia a $\mathbf{v}$; la sua lunghezza $\lVert\mathbf{u}\times\mathbf{v}\rVert = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\sin\theta$ è l'**area del parallelogramma** generato dai due vettori; ed è **anticommutativo**, $\mathbf{u}\times\mathbf{v} = -(\mathbf{v}\times\mathbf{u})$. Lo useremo poco in questo corso (è più uno strumento di fisica e geometria), ma è utile conoscerlo perché ricompare nel calcolo dei determinanti $3\times 3$ e delle normali alle superfici.

*Micro-esempio.* $\mathbf{i}\times\mathbf{j}$ con $\mathbf{i} = (1,0,0)$, $\mathbf{j} = (0,1,0)$: applicando la formula si ottiene $(0,0,1) = \mathbf{k}$, il versore perpendicolare al piano $xy$.

---

## 3. Dimostrazioni

### 3.1 Le due facce del prodotto scalare coincidono

**Enunciato.** Per $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ non nulli, con $\theta$ l'angolo tra loro,
$$\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert\cos\theta .$$

**Dimostrazione.** Consideriamo il triangolo di lati $\mathbf{u}$, $\mathbf{v}$ e il lato opposto $\mathbf{u} - \mathbf{v}$ (la freccia che va dalla punta di $\mathbf{v}$ alla punta di $\mathbf{u}$). L'angolo tra $\mathbf{u}$ e $\mathbf{v}$ è $\theta$. Applichiamo il **teorema del coseno**, noto dalla trigonometria, al lato opposto a $\theta$:

$$\lVert\mathbf{u} - \mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + \lVert\mathbf{v}\rVert^2 - 2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta . \qquad (\mathrm{i})$$

D'altra parte calcoliamo lo stesso membro sinistro *algebricamente*, usando $\lVert\mathbf{w}\rVert^2 = \mathbf{w}\cdot\mathbf{w}$ e la bilinearità del prodotto scalare:

$$\lVert\mathbf{u} - \mathbf{v}\rVert^2 = (\mathbf{u}-\mathbf{v})\cdot(\mathbf{u}-\mathbf{v}) = \mathbf{u}\cdot\mathbf{u} - 2\,\mathbf{u}\cdot\mathbf{v} + \mathbf{v}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert^2 - 2\,\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2 . \qquad (\mathrm{ii})$$

Qui abbiamo usato che $\mathbf{u}\cdot\mathbf{v} = \mathbf{v}\cdot\mathbf{u}$ (simmetria) per fondere i due termini misti. Uguagliamo i membri destri di (i) e (ii):

$$\lVert\mathbf{u}\rVert^2 - 2\,\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + \lVert\mathbf{v}\rVert^2 - 2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta .$$

I termini $\lVert\mathbf{u}\rVert^2$ e $\lVert\mathbf{v}\rVert^2$ si cancellano da entrambi i lati. Resta $-2\,\mathbf{u}\cdot\mathbf{v} = -2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$, e dividendo per $-2$:

$$\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta . \qquad\blacksquare$$

Il punto notevole: la definizione algebrica «somma dei prodotti delle componenti» e quella geometrica «prodotto delle lunghezze per il coseno dell'angolo» sono la *stessa* quantità. La prima è comoda per calcolare, la seconda per capire.

### 3.2 Disuguaglianza di Cauchy-Schwarz

**Enunciato.** Per ogni $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$: $\ \lvert\mathbf{u}\cdot\mathbf{v}\rvert \le \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$, con uguaglianza se e solo se i vettori sono paralleli.

Una volta noto il teorema di §3.1, la disuguaglianza è immediata perché $\lvert\cos\theta\rvert \le 1$. Ma quella dimostrazione presuppone la geometria dell'angolo; la seguente prova *algebrica* è più fondamentale, non usa angoli, e si estende a spazi con prodotto interno qualunque (è la versione di Axler).

<details class="dim-tecnica">
<summary>Dimostrazione algebrica via il discriminante</summary>

Se $\mathbf{v} = \mathbf{0}$ entrambi i membri sono nulli e la tesi vale. Supponiamo $\mathbf{v} \neq \mathbf{0}$ e consideriamo, per un parametro reale $t$, la funzione

$$p(t) = \lVert \mathbf{u} - t\,\mathbf{v}\rVert^2 = (\mathbf{u} - t\mathbf{v})\cdot(\mathbf{u} - t\mathbf{v}).$$

Sviluppando con la bilinearità:

$$p(t) = \mathbf{u}\cdot\mathbf{u} - 2t\,(\mathbf{u}\cdot\mathbf{v}) + t^2\,(\mathbf{v}\cdot\mathbf{v}) = \lVert\mathbf{v}\rVert^2\, t^2 - 2(\mathbf{u}\cdot\mathbf{v})\,t + \lVert\mathbf{u}\rVert^2 .$$

Essendo il quadrato di una norma, $p(t) \ge 0$ per ogni $t$. È un polinomio di secondo grado in $t$ con coefficiente direttore $\lVert\mathbf{v}\rVert^2 > 0$; il fatto che non assuma mai valori negativi impone che il suo **discriminante** sia $\le 0$:

$$\Delta = \big(2(\mathbf{u}\cdot\mathbf{v})\big)^2 - 4\lVert\mathbf{v}\rVert^2\lVert\mathbf{u}\rVert^2 \le 0 .$$

Dividendo per $4$ e riordinando:

$$(\mathbf{u}\cdot\mathbf{v})^2 \le \lVert\mathbf{u}\rVert^2\lVert\mathbf{v}\rVert^2 .$$

Estraendo la radice quadrata (entrambi i membri sono $\ge 0$) si ottiene $\lvert\mathbf{u}\cdot\mathbf{v}\rvert \le \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$.

**Caso di uguaglianza.** L'uguaglianza corrisponde a $\Delta = 0$, cioè al fatto che $p(t)$ abbia una radice reale $t_0$: allora $\lVert\mathbf{u} - t_0\mathbf{v}\rVert^2 = 0$, quindi $\mathbf{u} = t_0\mathbf{v}$, ossia $\mathbf{u}$ è multiplo di $\mathbf{v}$ (i vettori sono paralleli). Viceversa, se $\mathbf{u} = t_0\mathbf{v}$ un calcolo diretto dà l'uguaglianza. $\qquad\blacksquare$

L'idea chiave, da ricordare: *un quadrato è sempre non negativo, quindi il discriminante del polinomio $\lVert\mathbf{u} - t\mathbf{v}\rVert^2$ non può essere positivo*. È una delle prove più eleganti dell'algebra lineare.

</details>

### 3.3 Disuguaglianza triangolare

**Enunciato.** $\lVert\mathbf{u} + \mathbf{v}\rVert \le \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$.

**Dimostrazione.** Poiché entrambi i membri sono non negativi, basta confrontarne i quadrati. Sviluppiamo il quadrato del membro sinistro:

$$\lVert\mathbf{u} + \mathbf{v}\rVert^2 = (\mathbf{u}+\mathbf{v})\cdot(\mathbf{u}+\mathbf{v}) = \lVert\mathbf{u}\rVert^2 + 2\,\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2 .$$

Il termine misto si maggiora con Cauchy-Schwarz, $\mathbf{u}\cdot\mathbf{v} \le \lvert\mathbf{u}\cdot\mathbf{v}\rvert \le \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$:

$$\lVert\mathbf{u} + \mathbf{v}\rVert^2 \le \lVert\mathbf{u}\rVert^2 + 2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert + \lVert\mathbf{v}\rVert^2 = \big(\lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert\big)^2 .$$

Il membro destro è un quadrato perfetto. Prendendo la radice (i due membri sono $\ge 0$) si conclude $\lVert\mathbf{u}+\mathbf{v}\rVert \le \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$. L'uguaglianza richiede $\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$, cioè vettori paralleli e concordi. $\qquad\blacksquare$

Osserva la catena logica del modulo: dal teorema del coseno (§3.1) si ottiene la lettura geometrica del prodotto scalare; da questo, o dalla prova algebrica, Cauchy-Schwarz (§3.2); e da Cauchy-Schwarz la disuguaglianza triangolare (§3.3). Ogni risultato poggia sul precedente.

---

## 4. Esempi

**Esempio 1 (introduttivo) — Operazioni di base.** Con $\mathbf{u} = (2, -1, 3)$ e $\mathbf{v} = (-1, 4, 2)$:
$$\mathbf{u} + \mathbf{v} = (1, 3, 5), \qquad 3\mathbf{u} - 2\mathbf{v} = (6+2,\ -3-8,\ 9-4) = (8, -11, 5), \qquad \lVert\mathbf{u}\rVert = \sqrt{4+1+9} = \sqrt{14}.$$

**Esempio 2 (introduttivo) — Normalizzazione.** Il versore nella direzione di $\mathbf{v} = (1, -2, 2)$: si calcola $\lVert\mathbf{v}\rVert = \sqrt{1+4+4} = 3$, quindi $\hat{\mathbf{v}} = \tfrac13(1,-2,2) = (\tfrac13, -\tfrac23, \tfrac23)$. Verifica: $\tfrac19(1+4+4) = 1$.

**Esempio 3 (intermedio) — Angolo non retto.** L'angolo tra $\mathbf{u} = (1, 0)$ e $\mathbf{v} = (1, 1)$: $\mathbf{u}\cdot\mathbf{v} = 1$, $\lVert\mathbf{u}\rVert = 1$, $\lVert\mathbf{v}\rVert = \sqrt 2$, dunque $\cos\theta = \tfrac{1}{\sqrt 2}$ e $\theta = 45^\circ$. La strategia è sempre la stessa: prodotto scalare al numeratore, prodotto delle norme al denominatore, poi $\arccos$.

**Esempio 4 (intermedio) — Decomposizione ortogonale.** Proietta $\mathbf{u} = (5, 2)$ su $\mathbf{v} = (3, 1)$ e trova la componente ortogonale. Si ha $\mathbf{u}\cdot\mathbf{v} = 17$, $\lVert\mathbf{v}\rVert^2 = 10$, quindi
$$\operatorname{proj}_{\mathbf{v}}\mathbf{u} = \tfrac{17}{10}(3,1) = (5.1,\ 1.7), \qquad \mathbf{u} - \operatorname{proj}_{\mathbf{v}}\mathbf{u} = (-0.1,\ 0.3).$$
Controllo di ortogonalità: $(-0.1, 0.3)\cdot(3, 1) = -0.3 + 0.3 = 0$. Il vettore $\mathbf{u}$ è stato spezzato in un pezzo lungo $\mathbf{v}$ e uno perpendicolare a $\mathbf{v}$.

**Esempio 5 (intermedio) — Verifica di Cauchy-Schwarz.** Per $\mathbf{u} = (1,2,3)$, $\mathbf{v} = (4,0,-1)$: $\lvert\mathbf{u}\cdot\mathbf{v}\rvert = |4 - 3| = 1$, mentre $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert = \sqrt{14}\sqrt{17} = \sqrt{238} \approx 15.4$. La disuguaglianza $1 \le 15.4$ è ampiamente soddisfatta: i vettori sono lontani dall'essere paralleli.

**Esempio 6 (avanzato) — Caso di uguaglianza.** Quando vale l'uguaglianza in Cauchy-Schwarz? Solo per vettori paralleli. Con $\mathbf{u} = (1,2)$ e $\mathbf{v} = 3\mathbf{u} = (3,6)$: $\lvert\mathbf{u}\cdot\mathbf{v}\rvert = |3 + 12| = 15$ e $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert = \sqrt5\,\sqrt{45} = \sqrt{225} = 15$. L'uguaglianza conferma il parallelismo previsto dalla dimostrazione di §3.2.

**Esempio 7 (avanzato) — Angolo in un triangolo.** Un triangolo ha vertici $A = (0,0)$, $B = (4,0)$, $C = (1,3)$. L'angolo in $A$ è l'angolo tra i vettori $\overrightarrow{AB} = (4,0)$ e $\overrightarrow{AC} = (1,3)$. Prodotto scalare $= 4$, norme $4$ e $\sqrt{10}$, quindi $\cos\theta = \tfrac{4}{4\sqrt{10}} = \tfrac{1}{\sqrt{10}}$ e $\theta = \arccos(1/\sqrt{10}) \approx 71.6^\circ$. La geometria del triangolo si riduce a due prodotti scalari.

**Esempio 8 (applicativo, economia) — Spesa come prodotto scalare.** Un consumatore acquista il paniere $\mathbf{q} = (3, 2, 5)$ (unità di tre beni) ai prezzi $\mathbf{p} = (4, 10, 2)$ euro. La spesa totale è
$$\mathbf{p}\cdot\mathbf{q} = 4\cdot 3 + 10\cdot 2 + 2\cdot 5 = 12 + 20 + 10 = 42\ \text{euro}.$$
Il vincolo di bilancio della teoria del consumatore, $\mathbf{p}\cdot\mathbf{q} \le m$ (reddito), è una disuguaglianza sul prodotto scalare tra prezzi e quantità. Il prodotto scalare è la spesa; il vincolo di bilancio è un iperpiano in $\mathbb{R}^n$.

**Esempio 9 (applicativo, ML) — Similarità coseno.** Due brevi documenti sono rappresentati dalle frequenze di tre parole: $\mathbf{a} = (2, 0, 1)$, $\mathbf{b} = (4, 0, 2)$. La similarità coseno è
$$\frac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\lVert\mathbf{b}\rVert} = \frac{8 + 0 + 2}{\sqrt{5}\,\sqrt{20}} = \frac{10}{\sqrt{100}} = 1.$$
Vale esattamente $1$: i due documenti hanno la *stessa direzione* (il secondo è il doppio del primo, $\mathbf{b} = 2\mathbf{a}$). Per un motore di ricerca sono massimamente simili, indipendentemente dal fatto che uno sia più lungo dell'altro. È questa insensibilità alla lunghezza il motivo per cui si usa il coseno e non la distanza.

---

## 5. Collegamenti e riepilogo

**Dove porta questa lezione.** Il prodotto matrice-vettore della prossima lezione (Matrici) è, riga per riga, una collezione di prodotti scalari; e la moltiplicazione di matrici è composta anch'essa di prodotti scalari. La combinazione lineare introdotta qui è il concetto attorno a cui ruotano `span`, indipendenza, basi e rango. L'ortogonalità e la proiezione riappariranno, pienamente sviluppate, nel modulo sull'Ortogonalità, dove la proiezione di un vettore su un *sottospazio* darà il metodo dei minimi quadrati — cioè la regressione lineare della statistica.

**Collegamenti con le altre materie.** In analisi, il **gradiente** di una funzione di più variabili è un vettore, e la derivata direzionale $D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u}$ è un prodotto scalare (lezione sulle funzioni di più variabili): tutta l'intuizione «di quanto cresce nella direzione $\mathbf{u}$» è la geometria del prodotto scalare vista in questa lezione. In economia, panieri, prezzi, vincoli di bilancio e portafogli sono vettori, e la spesa è un prodotto scalare. In statistica e machine learning, i dati sono vettori in spazi ad altissima dimensione, la similarità è il coseno dell'angolo, e la regressione è una proiezione ortogonale.

**Idee da portare via.**

| Concetto | Definizione | Da ricordare |
| --- | --- | --- |
| Vettore in $\mathbb{R}^n$ | $n$-upla ordinata $(v_1,\dots,v_n)$ | l'ordine conta; freccia = lista = array |
| Combinazione lineare | $c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k$ | il concetto centrale di tutto il corso |
| Prodotto scalare | $\mathbf{u}\cdot\mathbf{v} = \sum u_i v_i = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$ | restituisce un numero; misura l'allineamento |
| Norma | $\lVert\mathbf{v}\rVert = \sqrt{\mathbf{v}\cdot\mathbf{v}}$ | la lunghezza nasce dal prodotto scalare |
| Versore | $\hat{\mathbf{v}} = \mathbf{v}/\lVert\mathbf{v}\rVert$ | tiene la direzione, butta la lunghezza |
| Ortogonalità | $\mathbf{u}\cdot\mathbf{v} = 0$ | perpendicolarità in ogni dimensione |
| Cauchy-Schwarz | $\lvert\mathbf{u}\cdot\mathbf{v}\rvert \le \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ | uguaglianza $\iff$ paralleli |
| Proiezione | $\operatorname{proj}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}\mathbf{v}$ | seme dei minimi quadrati |

**Errori comuni da evitare.** Sommare vettori di dimensione diversa (l'operazione non è definita). Confondere il prodotto scalare (un numero) con il prodotto vettoriale (un vettore, solo in $\mathbb{R}^3$). Dimenticare che il prodotto scalare può essere negativo quando l'angolo è ottuso, mentre la norma è sempre $\ge 0$. Scrivere $\lVert\mathbf{u}+\mathbf{v}\rVert = \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$: vale solo per vettori concordi, in generale è una disuguaglianza. Usare $\lVert\mathbf{v}\rVert$ invece di $\lVert\mathbf{v}\rVert^2$ al denominatore della proiezione. Credere che l'ortogonalità richieda una visualizzazione: in $\mathbb{R}^n$ è solo la condizione algebrica $\mathbf{u}\cdot\mathbf{v} = 0$.

---

## 6. Esercizi

**E1 (introduttivo).** Dati $\mathbf{u} = (2,-1,3)$ e $\mathbf{v} = (-1,4,2)$, calcola $\mathbf{u}+\mathbf{v}$, $\ 3\mathbf{u}-2\mathbf{v}$ e $\lVert\mathbf{u}\rVert$.

<details class="dim-tecnica"><summary>Soluzione E1</summary>

$\mathbf{u}+\mathbf{v} = (1,3,5)$; $\ 3\mathbf{u}-2\mathbf{v} = (6+2,\,-3-8,\,9-4) = (8,-11,5)$; $\ \lVert\mathbf{u}\rVert = \sqrt{4+1+9} = \sqrt{14}$.

</details>

**E2 (introduttivo).** Trova il versore nella direzione di $\mathbf{v} = (1,-2,2)$ e verifica che ha norma $1$.

<details class="dim-tecnica"><summary>Soluzione E2</summary>

$\lVert\mathbf{v}\rVert = \sqrt{1+4+4} = 3$, quindi $\hat{\mathbf{v}} = \tfrac13(1,-2,2)$. Verifica: $\lVert\hat{\mathbf{v}}\rVert = \tfrac13\sqrt{1+4+4} = \tfrac33 = 1$.

</details>

**E3 (introduttivo).** Mostra che $\mathbf{u} = (3,4)$ e $\mathbf{v} = (-4,3)$ sono ortogonali. Che relazione geometrica lega i due vettori?

<details class="dim-tecnica"><summary>Soluzione E3</summary>

$\mathbf{u}\cdot\mathbf{v} = 3(-4) + 4(3) = -12 + 12 = 0$, quindi $\theta = 90^\circ$. In generale, ruotando $(v_1, v_2)$ di $90^\circ$ si ottiene $(-v_2, v_1)$: $(-4,3)$ è proprio $(3,4)$ ruotato di un angolo retto, perciò l'ortogonalità è garantita.

</details>

**E4 (intermedio).** Proietta $\mathbf{u} = (5,2)$ su $\mathbf{v} = (3,1)$; trova la componente ortogonale e verificane la perpendicolarità.

<details class="dim-tecnica"><summary>Soluzione E4</summary>

$\mathbf{u}\cdot\mathbf{v} = 17$, $\lVert\mathbf{v}\rVert^2 = 10$, quindi $\operatorname{proj}_{\mathbf{v}}\mathbf{u} = \tfrac{17}{10}(3,1) = (\tfrac{51}{10},\tfrac{17}{10})$. Componente ortogonale: $\mathbf{u}-\operatorname{proj} = (-\tfrac{1}{10}, \tfrac{3}{10})$. Verifica: $(-\tfrac{1}{10},\tfrac{3}{10})\cdot(3,1) = -\tfrac{3}{10}+\tfrac{3}{10} = 0$.

</details>

**E5 (intermedio).** Per quali coppie di vettori vale l'uguaglianza in Cauchy-Schwarz? Fornisci un esempio numerico con la verifica.

<details class="dim-tecnica"><summary>Soluzione E5</summary>

L'uguaglianza $\lvert\mathbf{u}\cdot\mathbf{v}\rvert = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ vale se e solo se i vettori sono paralleli (uno multiplo dell'altro), cioè $\cos\theta = \pm 1$. Esempio: $\mathbf{u} = (1,2)$, $\mathbf{v} = (3,6) = 3\mathbf{u}$. Allora $\lvert\mathbf{u}\cdot\mathbf{v}\rvert = |3+12| = 15$ e $\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert = \sqrt5\sqrt{45} = \sqrt{225} = 15$.

</details>

**E6 (intermedio).** Scrivi $\mathbf{w} = (7,1)$ come combinazione lineare di $\mathbf{a} = (2,1)$ e $\mathbf{b} = (1,-1)$.

<details class="dim-tecnica"><summary>Soluzione E6</summary>

Cerchiamo $\alpha, \beta$ con $\alpha\mathbf{a} + \beta\mathbf{b} = \mathbf{w}$, cioè $\begin{cases} 2\alpha + \beta = 7 \\ \alpha - \beta = 1 \end{cases}$. Sommando le equazioni: $3\alpha = 8$, quindi $\alpha = \tfrac83$; poi $\beta = \alpha - 1 = \tfrac53$. Verifica: $\tfrac83(2,1) + \tfrac53(1,-1) = (\tfrac{16+5}{3}, \tfrac{8-5}{3}) = (7,1)$.

</details>

**E7 (intermedio).** Un triangolo ha vertici $A=(0,0)$, $B=(4,0)$, $C=(1,3)$. Calcola l'angolo nel vertice $A$.

<details class="dim-tecnica"><summary>Soluzione E7</summary>

$\overrightarrow{AB} = (4,0)$, $\overrightarrow{AC} = (1,3)$. Prodotto scalare $= 4$; norme $4$ e $\sqrt{10}$. $\cos\theta = \tfrac{4}{4\sqrt{10}} = \tfrac{1}{\sqrt{10}}$, dunque $\theta = \arccos(1/\sqrt{10}) \approx 71.6^\circ$.

</details>

**E8 (avanzato).** Dimostra la **identità del parallelogramma**: $\lVert\mathbf{u}+\mathbf{v}\rVert^2 + \lVert\mathbf{u}-\mathbf{v}\rVert^2 = 2\lVert\mathbf{u}\rVert^2 + 2\lVert\mathbf{v}\rVert^2$.

<details class="dim-tecnica"><summary>Soluzione E8</summary>

Sviluppa entrambi i quadrati col prodotto scalare:
$\lVert\mathbf{u}+\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + 2\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2$ e $\lVert\mathbf{u}-\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 - 2\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2$. Sommando, i termini $\pm 2\mathbf{u}\cdot\mathbf{v}$ si elidono e resta $2\lVert\mathbf{u}\rVert^2 + 2\lVert\mathbf{v}\rVert^2$. Geometricamente: in un parallelogramma, la somma dei quadrati delle diagonali è pari alla somma dei quadrati dei quattro lati.

</details>

**E9 (avanzato).** Siano $\mathbf{u}, \mathbf{v}$ versori (norma $1$). Mostra che $\mathbf{u}+\mathbf{v}$ e $\mathbf{u}-\mathbf{v}$ sono ortogonali. Interpreta il risultato (rombo).

<details class="dim-tecnica"><summary>Soluzione E9</summary>

$(\mathbf{u}+\mathbf{v})\cdot(\mathbf{u}-\mathbf{v}) = \mathbf{u}\cdot\mathbf{u} - \mathbf{u}\cdot\mathbf{v} + \mathbf{v}\cdot\mathbf{u} - \mathbf{v}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert^2 - \lVert\mathbf{v}\rVert^2 = 1 - 1 = 0$ (i due termini misti si cancellano per simmetria). Quindi le due somme sono ortogonali. Interpretazione: se i lati $\mathbf{u}$ e $\mathbf{v}$ hanno la stessa lunghezza, il parallelogramma è un rombo, e le diagonali di un rombo sono perpendicolari.

</details>

**E10 (applicativo).** Un investitore ha un portafoglio con pesi $\mathbf{w} = (0.5, 0.3, 0.2)$ su tre titoli i cui rendimenti attesi sono $\mathbf{r} = (0.08, 0.12, 0.05)$. Calcola il rendimento atteso del portafoglio. Che operazione stai usando?

<details class="dim-tecnica"><summary>Soluzione E10</summary>

Il rendimento atteso è il prodotto scalare $\mathbf{w}\cdot\mathbf{r} = 0.5(0.08) + 0.3(0.12) + 0.2(0.05) = 0.04 + 0.036 + 0.01 = 0.086$, cioè $8.6\%$. È lo stesso prodotto scalare della spesa (Esempio 8): pesi al posto delle quantità, rendimenti al posto dei prezzi. Nota che i pesi sommano a $1$: il portafoglio sta sull'iperpiano $w_1 + w_2 + w_3 = 1$.

</details>
