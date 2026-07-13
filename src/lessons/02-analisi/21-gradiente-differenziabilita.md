---
id: analisi-21-gradiente-differenziabilita
titolo: "Gradiente, differenziabilità e piano tangente"
materia: analisi
argomento: "Analisi multivariata"
modulo: "Calcolo differenziale in più variabili"
livello: universitario
slug: analisi-21-gradiente-differenziabilita

# legacy
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: "Gradiente, differenziabilità e piano tangente"
title_en: "Gradient, differentiability, and tangent plane"
level: blue
order: 21
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); A. Villanacci, Mathematics 1 (appunti); OpenStax Calculus Vol. 1"
source_chapter: "Differenziabilità in Rⁿ, gradiente, derivata direzionale, piano tangente, regola della catena"

prerequisiti:
  - analisi-20-funzioni-piu-variabili
  - analisi-06-derivata-definizione
  - analisi-10-taylor

collegamenti:
  - analisi-20-funzioni-piu-variabili
  - analisi-06-derivata-definizione
  - analisi-10-taylor
  - analisi-04-continuita

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Differenziabilità in Rⁿ, differenziale come approssimazione lineare, gradiente, derivata direzionale, regola della catena multivariata, condizione C¹"
    note: "appunti-prof: definizione di differenziabilità come esistenza dell'approssimazione lineare con resto o(‖h‖); notazione e convenzioni d'esame"
  - id_fonte: villanacci-math1
    ruolo: secondaria
    sezioni_coperte: "o-piccolo in più variabili, prodotto scalare e norma, ortogonalità"
    note: "supporto al formalismo del resto o(‖h‖) e all'ortogonalità gradiente / curva di livello"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Analogia con la linearizzazione 1D (retta tangente ⟶ piano tangente); intuizione della direzione di massima crescita"
    note: "solo per il ponte con la migliore approssimazione lineare del caso monovariabile"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

In una variabile, «derivabile» e «bene approssimabile da una retta» sono la stessa cosa. La derivata $f'(x_0)$ esiste esattamente quando il grafico, visto sempre più da vicino attorno a $x_0$, diventa indistinguibile dalla sua retta tangente. La derivata *è* la pendenza di quella retta, e quella retta *è* la migliore approssimazione lineare.

In più variabili questa equivalenza si rompe, ed è la lezione più importante del modulo. Nella lezione 20 abbiamo imparato a calcolare le derivate parziali: la pendenza lungo l'asse $x$, la pendenza lungo l'asse $y$. Verrebbe da pensare che «esistono le parziali» sia l'analogo di «è derivabile». **Non lo è.** Si possono costruire funzioni con entrambe le derivate parziali perfettamente definite in un punto, e che tuttavia in quel punto non sono nemmeno *continue* — figurarsi «lisce». Il motivo è geometrico: conoscere la pendenza lungo due assi non dice nulla su cosa succede lungo le infinite direzioni oblique.

La nozione giusta, quella che generalizza davvero la derivabilità 1D, si chiama **differenziabilità**: esiste un **piano** (in generale un iperpiano) che approssima il grafico vicino al punto con un errore che va a zero *più in fretta* della distanza. Il piano tangente sostituisce la retta tangente. I suoi coefficienti sono le derivate parziali, ma raccolte in un unico vettore — il **gradiente** — che non è un semplice contenitore: ha una direzione e una lunghezza con un significato preciso. Il gradiente punta verso la salita più ripida del paesaggio ed è perpendicolare alle curve di livello. È l'oggetto centrale dell'ottimizzazione (i punti critici sono dove il gradiente si annulla) e degli algoritmi di apprendimento automatico (la *discesa del gradiente* segue $-\nabla f$).

Il piano di questa lezione: prima chiariamo perché le parziali non bastano (il controesempio), poi definiamo la differenziabilità come esistenza dell'approssimazione lineare, introduciamo il gradiente e la derivata direzionale, dimostriamo le tre proprietà che rendono il gradiente lo strumento chiave (differenziabilità ⇒ continuità; direzione di massima crescita; ortogonalità alle curve di livello) e chiudiamo con la regola della catena e la comoda condizione sufficiente «parziali continue ⇒ differenziabile».

---

## 2. Teoria

### 2.1 Il problema: le parziali non bastano

Ricordiamo il caso 1D. Dire che $f$ è derivabile in $x_0$ equivale a scrivere
$$f(x_0+h)=f(x_0)+f'(x_0)\,h+o(h)\qquad(h\to0),$$
dove $o(h)$ è un errore *trascurabile rispetto a $h$*, cioè $o(h)/h\to0$. Questa è la migliore approssimazione lineare: la retta $y=f(x_0)+f'(x_0)h$ commette un errore che svanisce più in fretta dello spostamento $h$.

L'idea da generalizzare è proprio questa forma, non «esiste il limite del rapporto incrementale». Il rapporto incrementale in più variabili si spezza in tante derivate parziali (una per direzione), e — lo vedremo subito — nessuna combinazione di esse basta a garantire una buona approssimazione. La forma «valore + parte lineare + resto trascurabile» invece si generalizza pulita e cattura la cosa giusta.

*Micro-esempio del problema.* La funzione $f(x,y)=\dfrac{xy}{x^2+y^2}$ (con $f(0,0)=0$) ha $f_x(0,0)=0$ e $f_y(0,0)=0$: entrambe le parziali esistono e valgono zero. Eppure, come visto in lez. 20, $f$ **non è continua** in $(0,0)$. Una funzione con parziali definite ma discontinua non può essere considerata «derivabile» in alcun senso utile. Serve una nozione più forte.

### 2.2 Differenziabilità e piano tangente

**Definizione (differenziabilità).** Sia $f:D\subseteq\mathbb{R}^n\to\mathbb{R}$ e $\mathbf{x}_0$ interno a $D$. Diciamo che $f$ è **differenziabile** in $\mathbf{x}_0$ se esiste un vettore $\mathbf{a}\in\mathbb{R}^n$ tale che
$$f(\mathbf{x}_0+\mathbf{h}) = f(\mathbf{x}_0) + \mathbf{a}\cdot\mathbf{h} + o(\|\mathbf{h}\|)\qquad (\mathbf{h}\to\mathbf{0}),$$
dove $o(\|\mathbf{h}\|)$ indica un errore $R(\mathbf{h})$ con $\dfrac{R(\mathbf{h})}{\|\mathbf{h}\|}\to0$ per $\mathbf{h}\to\mathbf{0}$.

Leggiamola pezzo per pezzo. Il termine $f(\mathbf{x}_0)$ è il valore di partenza. Il termine $\mathbf{a}\cdot\mathbf{h}$ (prodotto scalare) è la **parte lineare**: dipende linearmente dallo spostamento $\mathbf{h}$ ed è il candidato «piano». Il resto $o(\|\mathbf{h}\|)$ è la parte curva, che deve essere *trascurabile rispetto alla lunghezza dello spostamento*: non basta che vada a zero (lo fa anche $\mathbf{h}$ stesso), deve andare a zero **più in fretta** di $\|\mathbf{h}\|$. È esattamente la condizione 1D, con $|h|$ sostituito dalla norma $\|\mathbf{h}\|$ e il prodotto $f'(x_0)h$ sostituito dal prodotto scalare $\mathbf{a}\cdot\mathbf{h}$.

Il grafico dell'approssimazione lineare $z=f(\mathbf{x}_0)+\mathbf{a}\cdot\mathbf{h}$ è il **piano tangente** al grafico di $f$ nel punto. Per $n=2$, scrivendo $\mathbf{h}=(x-x_0,\,y-y_0)$ e $\mathbf{a}=(a_1,a_2)$:
$$z=f(x_0,y_0)+a_1(x-x_0)+a_2(y-y_0).$$

Vedremo in §2.3 che, se $f$ è differenziabile, il vettore $\mathbf{a}$ è **necessariamente** il vettore delle derivate parziali — non c'è scelta.

*Micro-esempio.* $f(x,y)=x^2+y^2$ in $(1,1)$: $f(1,1)=2$, parziali $f_x=2x\to2$, $f_y=2y\to2$. Piano tangente $z=2+2(x-1)+2(y-1)=2x+2y-2$. Verifica del resto: $f(1+h,1+k)-[2+2h+2k]=(1+h)^2+(1+k)^2-2-2h-2k=h^2+k^2=\|\mathbf{h}\|^2=o(\|\mathbf{h}\|)$ ✓.

### 2.3 Il gradiente

**Definizione (gradiente).** Se le derivate parziali di $f$ esistono in $\mathbf{x}_0$, il **gradiente** è il vettore che le raccoglie:
$$\nabla f(\mathbf{x}_0)=\left(\frac{\partial f}{\partial x_1}(\mathbf{x}_0),\ \dots,\ \frac{\partial f}{\partial x_n}(\mathbf{x}_0)\right).$$

Il simbolo $\nabla$ (nabla) si legge «gradiente di». Il legame con la differenziabilità è il seguente, ed è il motivo per cui il gradiente non è un semplice elenco:

**Proposizione (il vettore lineare è il gradiente).** Se $f$ è differenziabile in $\mathbf{x}_0$, allora tutte le derivate parziali esistono e il vettore $\mathbf{a}$ della definizione coincide con il gradiente: $\mathbf{a}=\nabla f(\mathbf{x}_0)$. Quindi
$$f(\mathbf{x}_0+\mathbf{h})=f(\mathbf{x}_0)+\nabla f(\mathbf{x}_0)\cdot\mathbf{h}+o(\|\mathbf{h}\|).$$

La dimostrazione (§3.2, primo passo) consiste nello scegliere $\mathbf{h}=h\,\mathbf{e}_i$ nella definizione: la formula si riduce a quella della derivata parziale rispetto a $x_i$, forzando $a_i=\partial f/\partial x_i$. Attenzione all'implicazione: differenziabilità ⇒ esistenza delle parziali, **ma non viceversa** (il controesempio di §2.1). Il gradiente si può *scrivere* ogni volta che le parziali esistono; ha il significato di «parte lineare del piano tangente» soltanto quando $f$ è differenziabile.

### 2.4 Derivata direzionale, direzione di massima crescita, ortogonalità

Le parziali misurano la pendenza lungo gli assi. Ma da un punto si può partire in qualsiasi direzione: la generalizzazione è la derivata direzionale.

**Definizione (derivata direzionale).** Data una direzione $\mathbf{u}$ con $\|\mathbf{u}\|=1$ (versore), la **derivata direzionale** di $f$ in $\mathbf{x}_0$ lungo $\mathbf{u}$ è
$$D_{\mathbf{u}}f(\mathbf{x}_0)=\lim_{t\to0}\frac{f(\mathbf{x}_0+t\,\mathbf{u})-f(\mathbf{x}_0)}{t},$$
se il limite esiste. È la pendenza del paesaggio camminando nella direzione $\mathbf{u}$.

Se $f$ è differenziabile, questa quantità ha una formula chiusa splendida (dimostrata in §3.2):
$$\boxed{\,D_{\mathbf{u}}f(\mathbf{x}_0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{u}\,}$$
La pendenza in una direzione qualsiasi è il **prodotto scalare** del gradiente con quella direzione. Da qui, con la formula geometrica del prodotto scalare $\nabla f\cdot\mathbf{u}=\|\nabla f\|\,\|\mathbf{u}\|\cos\theta=\|\nabla f\|\cos\theta$ (dove $\theta$ è l'angolo tra $\nabla f$ e $\mathbf{u}$), leggiamo due fatti fondamentali:

- **Direzione di massima crescita.** $D_{\mathbf{u}}f$ è massima quando $\cos\theta=1$, cioè $\mathbf{u}$ parallelo e concorde a $\nabla f$. *Il gradiente punta nella direzione di massima crescita*, e il tasso di crescita massimo è $\|\nabla f\|$. Nella direzione opposta $-\nabla f$ si ha la massima *discesa* (base della discesa del gradiente in machine learning).
- **Ortogonalità alle curve di livello.** Quando $\mathbf{u}$ è tangente a una curva di livello, muovendosi lungo di essa la funzione resta costante, quindi $D_{\mathbf{u}}f=0$, cioè $\nabla f\cdot\mathbf{u}=0$: *il gradiente è perpendicolare alle curve (superfici) di livello*. Salire il più ripidamente possibile significa muoversi perpendicolarmente alle isoipse — cosa che ogni escursionista sa d'istinto.

*Micro-esempio.* Per $f(x,y)=x^2+y^2$ in $(1,0)$: $\nabla f=(2,0)$, punta lungo l'asse $x$ positivo (verso l'esterno, dove il paraboloide sale), ed è ortogonale alla circonferenza di livello $x^2+y^2=1$, che in $(1,0)$ è verticale. Massima pendenza $\|\nabla f\|=2$.

Lo strumento qui sotto mostra $D_{\mathbf{u}}f=\|\nabla f\|\cos(\theta-\varphi)$ al variare della direzione di cammino $\theta$ (asse orizzontale), con $\varphi$ = direzione del gradiente regolabile. Il picco (massima crescita, valore $\|\nabla f\|$) cade sempre dove $\theta=\varphi$, cioè quando cammini *lungo* il gradiente; a $90^\circ$ dal picco la derivata direzionale è zero — stai camminando lungo la curva di livello.

```slider
{"title":"Derivata direzionale D_u f = ‖∇f‖·cos(θ−φ) al variare della direzione θ (‖∇f‖=2)","fn":"2*Math.cos(x - a)","fn2":"0","domain":[0,6.283],"yDomain":[-2.4,2.4],"pname":"a","pmin":0,"pmax":6.28,"pdefault":1,"pstep":0.05,"plabel":"φ = direzione del gradiente (radianti)","label1":"D_u f in funzione della direzione di cammino θ","label2":"zero (direzione tangente alla curva di livello)"}
```

```checkpoint
[domanda] Sia $\nabla f(P)=(3,4)$. Qual è la massima pendenza in $P$ e in quale direzione (versore) si realizza? Quanto vale la derivata direzionale lungo $\mathbf{u}=(1,0)$?
[risposta] Massima pendenza $=\|\nabla f\|=\sqrt{3^2+4^2}=5$, nella direzione del versore $\frac{1}{5}(3,4)=(0.6,\,0.8)$. Lungo $\mathbf{u}=(1,0)$: $D_{\mathbf u}f=\nabla f\cdot\mathbf u=(3,4)\cdot(1,0)=3$ (che è semplicemente $f_x$).
```

### 2.5 Regola della catena multivariata

Quando le variabili di $f$ dipendono a loro volta da altri parametri, la derivata si propaga tramite il gradiente. Nel caso più usato, $f=f(x,y)$ con $x=x(t)$, $y=y(t)$, la composizione $g(t)=f(x(t),y(t))$ ha derivata
$$g'(t)=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}=\nabla f\cdot\begin{pmatrix}x'(t)\\ y'(t)\end{pmatrix}.$$

La struttura è «somma dei contributi di ogni percorso»: $t$ influenza $f$ passando per $x$ e per $y$, e i due contributi si sommano, ciascuno pesato dalla rispettiva derivata parziale. In forma compatta $g'(t)=\nabla f\cdot \mathbf{r}'(t)$, dove $\mathbf{r}(t)=(x(t),y(t))$ è il cammino: la derivata lungo un cammino è il gradiente per la velocità del cammino. Questa formula è il motore delle dimostrazioni di §3.2–§3.3 e, iterata, dell'algoritmo di *backpropagation* nelle reti neurali.

*Micro-esempio.* $f(x,y)=x^2 y$, $x(t)=\cos t$, $y(t)=\sin t$. Allora $\nabla f=(2xy,\,x^2)$ e $\mathbf{r}'=(-\sin t,\cos t)$, quindi $g'(t)=2xy(-\sin t)+x^2\cos t=-2\cos t\sin^2 t+\cos^3 t$.

### 2.6 Una condizione sufficiente comoda: $C^1 \Rightarrow$ differenziabile

Verificare la differenziabilità dalla definizione (controllare che il resto sia $o(\|\mathbf{h}\|)$) è laborioso. Fortunatamente c'è una scorciatoia quasi sempre applicabile.

**Teorema (condizione sufficiente di differenziabilità).** Se le derivate parziali di $f$ esistono in un intorno di $\mathbf{x}_0$ e sono **continue** in $\mathbf{x}_0$ (cioè $f$ è di classe $C^1$), allora $f$ è differenziabile in $\mathbf{x}_0$.

In pratica: per le funzioni date da formule elementari (polinomi, esponenziali, seni, logaritmi, loro composizioni), le parziali sono continue dove definite, quindi la funzione è automaticamente differenziabile lì. Non serve verificare il resto a mano. Le patologie (parziali esistenti ma funzione non differenziabile) nascono solo quando le parziali *esistono ma non sono continue* — situazione tipica delle funzioni definite «a pezzi» con un valore forzato in un punto singolare. Attenzione alla logica: la continuità delle parziali è *sufficiente*, non *necessaria*; esistono funzioni differenziabili con parziali non continue, ma sono rare e artificiali.

```checkpoint
[domanda] La funzione $f(x,y)=e^{x}\sin(xy)$ è differenziabile in $(0,0)$? Come lo stabilisci senza calcolare il resto?
[risposta] Sì. È composizione e prodotto di funzioni elementari con parziali continue ovunque: $f_x=e^x\sin(xy)+e^x y\cos(xy)$ e $f_y=e^x x\cos(xy)$ sono continue su tutto $\mathbb{R}^2$. Quindi $f\in C^1$ e per la condizione sufficiente è differenziabile in ogni punto, in particolare in $(0,0)$. (Non serve verificare l'$o(\|\mathbf h\|)$.)
```

---

## 3. Dimostrazioni

### 3.1 Differenziabilità implica continuità

**Affermazione.** Se $f$ è differenziabile in $\mathbf{x}_0$, allora è continua in $\mathbf{x}_0$.

**Dimostrazione.** Per ipotesi $f(\mathbf{x}_0+\mathbf{h})=f(\mathbf{x}_0)+\nabla f(\mathbf{x}_0)\cdot\mathbf{h}+R(\mathbf{h})$ con $R(\mathbf{h})/\|\mathbf{h}\|\to0$. Vogliamo mostrare che $f(\mathbf{x}_0+\mathbf{h})\to f(\mathbf{x}_0)$ quando $\mathbf{h}\to\mathbf{0}$, cioè che i due termini aggiuntivi svaniscono.

Il termine lineare: per la disuguaglianza di Cauchy-Schwarz, $|\nabla f(\mathbf{x}_0)\cdot\mathbf{h}|\le\|\nabla f(\mathbf{x}_0)\|\,\|\mathbf{h}\|\to0$ quando $\mathbf{h}\to\mathbf{0}$, perché $\|\nabla f(\mathbf{x}_0)\|$ è una costante finita.

Il resto: da $R(\mathbf{h})/\|\mathbf{h}\|\to0$ segue in particolare $R(\mathbf{h})=\dfrac{R(\mathbf{h})}{\|\mathbf{h}\|}\cdot\|\mathbf{h}\|\to0\cdot0=0$ (prodotto di un infinitesimo per una quantità che tende a $0$).

Quindi $f(\mathbf{x}_0+\mathbf{h})-f(\mathbf{x}_0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{h}+R(\mathbf{h})\to0$, cioè $f$ è continua in $\mathbf{x}_0$. $\blacksquare$

*Conseguenza operativa.* Questo teorema è il **test di non-differenziabilità** più usato: se una funzione non è continua in un punto, non può essere differenziabile lì. È esattamente ciò che squalifica $\frac{xy}{x^2+y^2}$ nell'origine (parziali esistenti, ma discontinua ⇒ non differenziabile), chiudendo il cerchio aperto in §2.1.

### 3.2 Differenziabilità, parziali e formula della derivata direzionale

**Affermazione.** Se $f$ è differenziabile in $\mathbf{x}_0$ con vettore lineare $\mathbf{a}$, allora (i) $\mathbf{a}=\nabla f(\mathbf{x}_0)$, e (ii) per ogni versore $\mathbf{u}$ esiste $D_{\mathbf{u}}f(\mathbf{x}_0)$ e vale $D_{\mathbf{u}}f(\mathbf{x}_0)=\nabla f(\mathbf{x}_0)\cdot\mathbf{u}$.

**Dimostrazione.** Partiamo dalla definizione con incremento $\mathbf{h}=t\,\mathbf{u}$, dove $\mathbf{u}$ è un versore fissato e $t\to0$ è uno scalare. Allora $\|\mathbf{h}\|=|t|\,\|\mathbf{u}\|=|t|$, e
$$f(\mathbf{x}_0+t\,\mathbf{u})=f(\mathbf{x}_0)+\mathbf{a}\cdot(t\,\mathbf{u})+o(|t|)=f(\mathbf{x}_0)+t\,(\mathbf{a}\cdot\mathbf{u})+o(|t|).$$
Isolando il rapporto incrementale lungo $\mathbf{u}$:
$$\frac{f(\mathbf{x}_0+t\,\mathbf{u})-f(\mathbf{x}_0)}{t}=\mathbf{a}\cdot\mathbf{u}+\frac{o(|t|)}{t}.$$
Il termine $o(|t|)/t$ tende a $0$ per $t\to0$ (è un infinitesimo diviso per $t$, con l'infinitesimo trascurabile rispetto a $|t|$). Dunque il limite del rapporto incrementale esiste e
$$D_{\mathbf{u}}f(\mathbf{x}_0)=\mathbf{a}\cdot\mathbf{u}. \qquad (\ast)$$
Questo prova (ii), *a patto* di sapere che $\mathbf{a}=\nabla f$. Per (i), scegliamo $\mathbf{u}=\mathbf{e}_i$ ($i$-esimo versore della base): il primo membro di $(\ast)$ diventa, per definizione, la derivata parziale $\partial f/\partial x_i(\mathbf{x}_0)$, mentre il secondo membro è $\mathbf{a}\cdot\mathbf{e}_i=a_i$. Quindi $a_i=\partial f/\partial x_i(\mathbf{x}_0)$ per ogni $i$, cioè $\mathbf{a}=\nabla f(\mathbf{x}_0)$. Sostituendo in $(\ast)$ si ottiene $D_{\mathbf{u}}f=\nabla f\cdot\mathbf{u}$. $\blacksquare$

*Perché conta.* La formula $(\ast)$ è ciò che rende il gradiente uno strumento e non una lista: da esso si legge *ogni* pendenza direzionale con un prodotto scalare, e quindi la direzione di massima crescita e l'ortogonalità ai livelli (§2.4). Nota anche il ruolo essenziale dell'ipotesi di differenziabilità: nel controesempio $\frac{xy}{x^2+y^2}$ le derivate direzionali oblique **non esistono nemmeno**, proprio perché la funzione non è differenziabile e $(\ast)$ non si applica.

### 3.3 Il gradiente è ortogonale alle curve di livello

**Affermazione.** Se $f$ è differenziabile e $\mathbf{r}(t)$ è una curva liscia contenuta nella curva di livello $\{f=c\}$ con $\mathbf{r}(t_0)=\mathbf{x}_0$, allora $\nabla f(\mathbf{x}_0)$ è ortogonale al vettore tangente $\mathbf{r}'(t_0)$.

**Dimostrazione.** Poiché il cammino giace sul livello $c$, per ogni $t$ vale $f(\mathbf{r}(t))=c$, costante. Deriviamo entrambi i membri rispetto a $t$ con la regola della catena (§2.5): a sinistra otteniamo $\nabla f(\mathbf{r}(t))\cdot\mathbf{r}'(t)$, a destra la derivata della costante, cioè $0$. Valutando in $t_0$:
$$\nabla f(\mathbf{x}_0)\cdot\mathbf{r}'(t_0)=0.$$
Un prodotto scalare nullo significa vettori ortogonali (quando entrambi non nulli). Poiché $\mathbf{r}'(t_0)$ è tangente alla curva di livello in $\mathbf{x}_0$, concludiamo che $\nabla f(\mathbf{x}_0)$ è perpendicolare alla curva di livello. $\blacksquare$

*Lettura geometrica.* Questo chiude il quadro: la direzione lungo cui $f$ non varia (tangente al livello) e la direzione lungo cui $f$ varia più in fretta (il gradiente) sono a $90^\circ$ l'una dall'altra. In lez. 22 questo diventerà il cuore dei moltiplicatori di Lagrange: all'ottimo vincolato il gradiente della funzione obiettivo è ortogonale al vincolo esattamente come qui, forzando $\nabla f=\lambda\nabla g$.

### 3.4 Parziali esistenti ma funzione non differenziabile (controesempio)

<details class="dim-tecnica">
<summary>Costruzione completa: $\frac{xy}{x^2+y^2}$ ha parziali in $(0,0)$ ma non è differenziabile</summary>

Sia $f(x,y)=\dfrac{xy}{x^2+y^2}$ per $(x,y)\neq(0,0)$ e $f(0,0)=0$.

**Le parziali esistono in $(0,0)$.** Per definizione,
$$f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h}=\lim_{h\to0}\frac{0-0}{h}=0,$$
perché $f(h,0)=\frac{h\cdot0}{h^2}=0$. Analogamente $f_y(0,0)=0$. Dunque $\nabla f(0,0)=(0,0)$ esiste.

**Le derivate direzionali oblique non esistono.** Prendiamo $\mathbf{u}=(\cos\theta,\sin\theta)$ con $\cos\theta\sin\theta\neq0$ (direzione non lungo gli assi). Allora
$$\frac{f(t\cos\theta,\,t\sin\theta)-0}{t}=\frac{1}{t}\cdot\frac{t^2\cos\theta\sin\theta}{t^2}=\frac{\cos\theta\sin\theta}{t}\xrightarrow[t\to0]{}\pm\infty.$$
Il limite non è finito: lungo ogni direzione obliqua la derivata direzionale **non esiste**. Se $f$ fosse differenziabile, dovrebbe valere $D_{\mathbf u}f=\nabla f\cdot\mathbf u=(0,0)\cdot\mathbf u=0$ per ogni $\mathbf u$ — ma abbiamo appena visto che $D_{\mathbf u}f$ non esiste. Contraddizione.

**In alternativa, via continuità.** In lez. 20 abbiamo mostrato che $\lim_{(x,y)\to(0,0)}f$ non esiste (lungo gli assi $f\to0$, lungo $y=x$ vale $\tfrac12$), quindi $f$ non è continua in $(0,0)$. Per il teorema di §3.1 (differenziabile ⇒ continua), la non-continuità impedisce la differenziabilità.

**Morale.** L'esistenza delle parziali è un'informazione «lungo gli assi» e non controlla il comportamento obliquo. La differenziabilità, chiedendo l'approssimazione lineare valida in *tutte* le direzioni con resto $o(\|\mathbf h\|)$, è strettamente più forte. È questa la ragione per cui il modulo costruisce la teoria sulla differenziabilità e non sulla semplice esistenza delle parziali.

</details>

---

## 4. Esempi

**Esempio 1 (gradiente e piano tangente — introduttivo).** Trova $\nabla f$ e il piano tangente di $f(x,y)=x^2+3xy$ in $(1,2)$.
*Svolgimento:* $f_x=2x+3y$, $f_y=3x$; in $(1,2)$: $\nabla f=(2+6,\,3)=(8,3)$, $f(1,2)=1+6=7$. Piano tangente: $z=7+8(x-1)+3(y-2)=8x+3y-7$.

**Esempio 2 (derivata direzionale — introduttivo).** Per $f(x,y)=x^2+y^2$ in $(3,4)$, calcola la derivata direzionale lungo $\mathbf{v}=(1,1)$.
*Strategia:* normalizzare $\mathbf{v}$, poi $\nabla f\cdot\mathbf{u}$.
*Svolgimento:* $\nabla f=(2x,2y)=(6,8)$; versore $\mathbf{u}=\frac{1}{\sqrt2}(1,1)$. $D_{\mathbf u}f=(6,8)\cdot\frac1{\sqrt2}(1,1)=\frac{6+8}{\sqrt2}=\frac{14}{\sqrt2}=7\sqrt2$. (Errore da evitare: usare $\mathbf v$ non normalizzato darebbe $14$, sbagliato.)

**Esempio 3 (direzione di massima crescita — intermedio).** Dove punta la salita più ripida di $f(x,y)=e^{x}\cos y$ in $(0,\pi/2)$, e quanto vale?
*Svolgimento:* $f_x=e^x\cos y$, $f_y=-e^x\sin y$; in $(0,\pi/2)$: $\cos(\pi/2)=0$, $\sin(\pi/2)=1$, quindi $\nabla f=(0,-1)$. La massima crescita è nella direzione $(0,-1)$ (verso $y$ decrescente) con tasso $\|\nabla f\|=1$.

**Esempio 4 (regola della catena — intermedio).** Con $f(x,y)=x^2 y$, $x=t^2$, $y=e^t$, calcola $\frac{d}{dt}f(x(t),y(t))$.
*Svolgimento:* $\nabla f=(2xy,\,x^2)$, $\mathbf r'=(2t,\,e^t)$. $g'(t)=2xy\cdot2t+x^2 e^t=2(t^2)(e^t)(2t)+(t^2)^2 e^t=4t^3 e^t+t^4 e^t=t^3 e^t(4+t)$.

**Esempio 5 (verifica di differenziabilità dalla definizione — avanzato).** Mostra che $f(x,y)=xy$ è differenziabile in ogni punto verificando il resto.
*Svolgimento:* in $(x_0,y_0)$, con $\mathbf h=(h,k)$: $\nabla f=(y_0,x_0)$. Resto $R=f(x_0+h,y_0+k)-f(x_0,y_0)-\nabla f\cdot\mathbf h=(x_0+h)(y_0+k)-x_0y_0-(y_0 h+x_0 k)=hk$. Serve $\frac{hk}{\|\mathbf h\|}\to0$: poiché $|hk|\le\frac{h^2+k^2}{2}=\frac{\|\mathbf h\|^2}{2}$, si ha $\frac{|R|}{\|\mathbf h\|}\le\frac{\|\mathbf h\|}{2}\to0$ ✓. Dunque $f$ è differenziabile e $\nabla f=(y_0,x_0)$.

**Esempio 6 (condizione sufficiente $C^1$ — avanzato).** Perché $f(x,y)=\sqrt{x^2+y^2+1}$ è differenziabile su tutto $\mathbb{R}^2$?
*Svolgimento:* $f_x=\frac{x}{\sqrt{x^2+y^2+1}}$, $f_y=\frac{y}{\sqrt{x^2+y^2+1}}$: il radicando è sempre $\ge1>0$, quindi le parziali sono continue ovunque. Per la condizione sufficiente $C^1\Rightarrow$ differenziabile, $f$ è differenziabile su tutto $\mathbb{R}^2$, senza bisogno di controllare il resto.

**Esempio 7 (ortogonalità applicata — avanzato).** Trova la retta tangente alla curva di livello di $f(x,y)=x^2+4y^2$ passante per $(2,1)$ (livello $c=8$).
*Strategia:* $\nabla f$ è normale alla curva di livello; la tangente è la retta per $(2,1)$ ortogonale a $\nabla f$.
*Svolgimento:* $\nabla f=(2x,8y)=(4,8)$ in $(2,1)$. La tangente ha $\nabla f$ come normale: $4(x-2)+8(y-1)=0\iff x+2y=4$. (L'ellisse $x^2+4y^2=8$ è tangente in $(2,1)$ alla retta $x+2y=4$.)

**Esempio 8 (economico — massima crescita dell'utilità).** L'utilità è $U(x,y)=x^{0.5}y^{0.5}$. Nel paniere $(4,9)$, in quale proporzione conviene aumentare i due beni per accrescere l'utilità il più rapidamente possibile?
*Svolgimento:* $U_x=0.5\,x^{-0.5}y^{0.5}$, $U_y=0.5\,x^{0.5}y^{-0.5}$; in $(4,9)$: $U_x=0.5\cdot\frac{3}{2}=0.75$, $U_y=0.5\cdot\frac{2}{3}\approx0.333$. Il gradiente $\nabla U\approx(0.75,\,0.333)$ indica la direzione di massima crescita: conviene aumentare $x$ e $y$ in rapporto $0.75:0.333\approx 9:4$, cioè più il bene di cui si ha *meno* in termini relativi (utilità marginale più alta). Nota: questa è la direzione di crescita più rapida *senza vincolo di spesa*; con un vincolo di bilancio il problema diventa quello di Lagrange (lez. 22), dove la direzione ottima cambia.

---

## 5. Collegamenti e riepilogo

**Il posto di questa lezione.** È il perno del modulo: trasforma le derivate parziali «lungo gli assi» (lez. 20) nell'oggetto giusto per l'analisi in più variabili, il gradiente, e chiarisce che la nozione di derivabilità che conta è la **differenziabilità** (esistenza dell'approssimazione lineare), non la mera esistenza delle parziali. Da qui in avanti tutto si appoggia al gradiente: la lezione 22 cerca i punti critici come zeri di $\nabla f$ e li classifica con l'Hessiana; gli algoritmi di ottimizzazione numerica e di machine learning seguono $-\nabla f$ (discesa del gradiente); la fisica scrive le forze conservative come $-\nabla V$.

**Collegamenti trasversali.** L'ortogonalità gradiente/livello è la base geometrica dei moltiplicatori di Lagrange (economia, lez. 22) e delle superfici equipotenziali (fisica). La regola della catena multivariata, iterata su composizioni profonde, è la *backpropagation* con cui si addestrano le reti neurali. La condizione $C^1\Rightarrow$ differenziabile giustifica il fatto che «nelle applicazioni tutto è differenziabile»: le patologie richiedono funzioni costruite ad arte.

**Idee da portare via.**
- L'esistenza delle parziali **non** implica continuità né differenziabilità; la nozione giusta è la differenziabilità: $f(\mathbf{x}_0+\mathbf{h})=f(\mathbf{x}_0)+\nabla f\cdot\mathbf{h}+o(\|\mathbf{h}\|)$.
- Se $f$ è differenziabile, la parte lineare è il gradiente e vale $D_{\mathbf u}f=\nabla f\cdot\mathbf u$; da cui: $\nabla f$ punta nella massima crescita (tasso $\|\nabla f\|$) ed è ortogonale alle curve di livello.
- **Differenziabile ⇒ continua** (test di non-differenziabilità: se non è continua, non è differenziabile).
- **$C^1$ ⇒ differenziabile**: scorciatoia pratica per quasi tutte le funzioni elementari.

**Formule chiave.**
$$\nabla f=(f_{x_1},\dots,f_{x_n}),\quad D_{\mathbf u}f=\nabla f\cdot\mathbf u=\|\nabla f\|\cos\theta,\quad \frac{d}{dt}f(\mathbf r(t))=\nabla f\cdot\mathbf r'(t).$$

---

## 6. Esercizi

**Introduttivi.**

**E1.** Calcola $\nabla f$ e il piano tangente di $f(x,y)=3x^2-y^2$ in $(1,2)$.

<details class="dim-tecnica"><summary>Soluzione E1</summary>

$f_x=6x=6$, $f_y=-2y=-4$; $\nabla f=(6,-4)$, $f(1,2)=3-4=-1$. Piano tangente: $z=-1+6(x-1)-4(y-2)=6x-4y+1$.

</details>

**E2.** Per $f(x,y)=x^2+y^2$ in $(1,2)$, calcola la derivata direzionale lungo $\mathbf v=(3,4)$.

<details class="dim-tecnica"><summary>Soluzione E2</summary>

$\nabla f=(2,4)$; versore $\mathbf u=\frac15(3,4)$. $D_{\mathbf u}f=(2,4)\cdot\frac15(3,4)=\frac{6+16}{5}=\frac{22}{5}=4.4$.

</details>

**E3.** In quale direzione cresce più rapidamente $f(x,y)=\ln(x^2+y^2)$ in $(1,0)$, e a che tasso?

<details class="dim-tecnica"><summary>Soluzione E3</summary>

$\nabla f=\left(\frac{2x}{x^2+y^2},\frac{2y}{x^2+y^2}\right)=(2,0)$ in $(1,0)$. Direzione di massima crescita $(1,0)$, tasso $\|\nabla f\|=2$.

</details>

**Standard.**

**E4.** Con $f(x,y)=x e^{y}$, $x=\sin t$, $y=t^2$, calcola $\frac{d}{dt}f(x(t),y(t))$ in $t=0$.

<details class="dim-tecnica"><summary>Soluzione E4</summary>

$\nabla f=(e^y,\,x e^y)$, $\mathbf r'=(\cos t,\,2t)$. In $t=0$: $x=0,y=0$, $\nabla f=(1,0)$, $\mathbf r'=(1,0)$. $g'(0)=(1,0)\cdot(1,0)=1$.

</details>

**E5.** Mostra che $f(x,y)=x^2+xy$ è differenziabile in $(0,0)$ verificando il resto.

<details class="dim-tecnica"><summary>Soluzione E5</summary>

$\nabla f(0,0)=(2x+y,\,x)|_{(0,0)}=(0,0)$. Resto $R=f(h,k)-0-0=h^2+hk$. $\frac{|R|}{\|\mathbf h\|}=\frac{|h^2+hk|}{\sqrt{h^2+k^2}}\le\frac{h^2+|hk|}{\sqrt{h^2+k^2}}$. Poiché $h^2\le\|\mathbf h\|^2$ e $|hk|\le\|\mathbf h\|^2$: $\frac{|R|}{\|\mathbf h\|}\le\frac{2\|\mathbf h\|^2}{\|\mathbf h\|}=2\|\mathbf h\|\to0$ ✓. Differenziabile.

</details>

**E6.** Trova la retta tangente alla curva di livello di $f(x,y)=x^2+y^2$ per il punto $(3,4)$.

<details class="dim-tecnica"><summary>Soluzione E6</summary>

$\nabla f=(6,8)$ è normale al livello (circonferenza di raggio $5$). Tangente: $6(x-3)+8(y-4)=0\iff 3x+4y=25$.

</details>

**Avanzati / applicativi.**

**E7.** La funzione $f(x,y)=\dfrac{x^2 y}{x^4+y^2}$ (con $f(0,0)=0$) è continua in $(0,0)$? È differenziabile? (Suggerimento: parabola $y=x^2$.)

<details class="dim-tecnica"><summary>Soluzione E7</summary>

Lungo ogni retta $y=mx$: $\frac{x^2\cdot mx}{x^4+m^2x^2}=\frac{mx}{x^2+m^2}\to0$. Ma lungo $y=x^2$: $\frac{x^2\cdot x^2}{x^4+x^4}=\frac12\to\frac12\neq0$. Il limite non esiste ⇒ **non continua** in $(0,0)$ ⇒ per §3.1 **non differenziabile**. (Le parziali in $(0,0)$ esistono e valgono $0$: altro esempio di parziali senza differenziabilità.)

</details>

**E8.** Verifica che per $f(x,y)=x^3-3xy^2$ il gradiente è ortogonale alla curva di livello in $(1,1)$ costruendo esplicitamente un vettore tangente.

<details class="dim-tecnica"><summary>Soluzione E8</summary>

$\nabla f=(3x^2-3y^2,\,-6xy)=(0,-6)$ in $(1,1)$. Un vettore tangente alla curva di livello è ortogonale a $(0,-6)$, quindi orizzontale, es. $\mathbf t=(1,0)$. Verifica: $\nabla f\cdot\mathbf t=(0,-6)\cdot(1,0)=0$ ✓. Il gradiente (verticale) è perpendicolare alla tangente (orizzontale).

</details>

**E9.** In machine learning si minimizza una funzione di costo $J(\mathbf w)$ aggiornando $\mathbf w\leftarrow\mathbf w-\eta\,\nabla J(\mathbf w)$. Spiega, con la teoria di questa lezione, perché questo passo *diminuisce* $J$ (per $\eta>0$ piccolo).

<details class="dim-tecnica"><summary>Soluzione E9</summary>

Il passo si muove nella direzione $\mathbf u=-\nabla J/\|\nabla J\|$. La derivata direzionale in quella direzione è $D_{\mathbf u}J=\nabla J\cdot\mathbf u=\nabla J\cdot\left(-\frac{\nabla J}{\|\nabla J\|}\right)=-\|\nabla J\|<0$ (se $\nabla J\neq0$). Per l'approssimazione lineare $J(\mathbf w-\eta\nabla J)\approx J(\mathbf w)-\eta\|\nabla J\|^2<J(\mathbf w)$: la funzione cala. Inoltre $-\nabla J$ è la direzione di *massima* discesa, quindi il passo è quello localmente più efficace. (Se $\eta$ è troppo grande l'approssimazione lineare non vale più e si può «scavalcare» il minimo.)

</details>

**E10.** Sia $f$ differenziabile con $\nabla f(P)=(a,b)\neq(0,0)$. Dimostra che la somma delle derivate direzionali lungo due direzioni opposte $\mathbf u$ e $-\mathbf u$ è nulla, e interpreta.

<details class="dim-tecnica"><summary>Soluzione E10</summary>

$D_{\mathbf u}f=\nabla f\cdot\mathbf u$ e $D_{-\mathbf u}f=\nabla f\cdot(-\mathbf u)=-\nabla f\cdot\mathbf u$. Somma $=0$. *Interpretazione:* la pendenza in una direzione è l'opposto della pendenza nella direzione contraria — se salendo verso Est guadagni quota a tasso $s$, tornando verso Ovest la perdi allo stesso tasso. È la manifestazione della *linearità* della derivata direzionale (garantita dalla differenziabilità); per funzioni solo con parziali, senza differenziabilità, questa simmetria può fallire.

</details>
