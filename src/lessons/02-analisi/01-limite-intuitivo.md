---
id: analisi-01-limite-intuitivo
titolo: "Concetto di limite — approccio intuitivo"
materia: analisi
argomento: "Limiti e continuità"
modulo: "Concetto di limite"
livello: universitario
slug: analisi-01-limite-intuitivo

# legacy
subject: analisi
topic_it: "Limiti e continuità"
topic_en: "Limits and continuity"
title_it: "Concetto di limite e definizione intuitiva"
title_en: "The concept of limit — intuitive approach"
level: blue
order: 1
source_book: "OpenStax Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "Cap. 2 — Limiti"

prerequisiti:
  - base-10-funzioni
  - base-09-valore-assoluto
  - base-01-insiemi-numerici

collegamenti:
  - analisi-02-limite-epsilon-delta
  - analisi-03-calcolo-limiti
  - analisi-04-continuita
  - analisi-06-derivata-definizione

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 2.1–2.2"
    note: "impianto intuitivo, tabelle di valori, stima da grafico, limiti unilaterali e infiniti, asintoto verticale"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 4 (intorni, punti di accumulazione), Cap. 6 (definizioni di limite), Cap. 8 (continuità)"
    note: "impostazione rigorosa via intorni e punti di accumulazione; ha priorità per la definizione formale e la notazione da esame"
  - id_fonte: villanacci-successioni
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 1 (successioni in R)"
    note: "la nozione di convergenza di successione come formalizzazione dell'idea di avvicinarsi"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-11"
stato: completa

componenti_usati:
  - plot
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Immagina di camminare lungo un corridoio buio verso una porta chiusa. Puoi avvicinarti quanto vuoi — un metro, un centimetro, un millesimo di millimetro — ma la porta resta chiusa: non la attraversi mai. Eppure chiunque ti osservi può dire con certezza verso *quale* punto stai tendendo: il bordo della porta. Il valore a cui tendi è ben definito anche se non lo raggiungi, e anche se — al limite — quella porta non esistesse affatto.

Il **limite** funziona esattamente così. Dati un punto $a$ e una funzione $f$, vogliamo sapere verso quale valore tende $f(x)$ quando $x$ si avvicina ad $a$, **indipendentemente da ciò che accade esattamente in $a$**. La porta potrebbe non esistere (la funzione non è definita in $a$), oppure essere spalancata in una posizione anomala (il valore $f(a)$ è "sbagliato"): niente di tutto questo cambia il corridoio che hai percorso. Questa è la distinzione più importante e più rivoluzionaria dell'intera analisi: **il limite descrive un comportamento nelle vicinanze, non un valore puntuale.**

### Perché il concetto esiste: due problemi antichi

Il limite non è nato come curiosità astratta, ma per risolvere due problemi concreti che per secoli erano rimasti senza fondamento rigoroso.

Il **problema della tangente**. Data una curva, come si definisce la retta tangente in un punto? La retta *secante* per due punti distinti si costruisce facilmente. Ma la tangente tocca la curva in un punto solo: per costruirla servirebbero "due punti che coincidono", e la pendenza diventa $\tfrac{0}{0}$, priva di senso. L'idea vincente è far *scorrere* il secondo punto verso il primo e osservare verso quale pendenza tende la secante. Quel valore-limite è la pendenza della tangente — ed è la **derivata**.

Il **problema dell'area**. Come si calcola l'area di una regione dai bordi curvi? I greci la approssimavano con poligoni inscritti, aumentando il numero di lati: più lati, migliore l'approssimazione. L'area esatta è il valore verso cui tendono queste approssimazioni quando il numero di lati cresce senza limite. Questo valore-limite è l'**integrale definito**.

Entrambi i problemi hanno la stessa forma logica: una quantità che non possiamo calcolare direttamente viene ottenuta come *valore verso cui tende* una successione di quantità che sappiamo calcolare. Il limite è lo strumento che dà senso rigoroso a questo "tendere verso". Senza di esso il calcolo differenziale e integrale — e quindi gran parte della fisica, dell'economia e della statistica moderne — semplicemente non esisterebbe.

### Un esempio che chiarisce tutto

Considera la funzione

$$f(x) = \frac{x^2 - 1}{x - 1}.$$

In $x = 1$ questa funzione **non è definita**: sostituendo si ottiene $\tfrac{0}{0}$, che è privo di significato. Eppure, per ogni $x \neq 1$, possiamo semplificare:

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1.$$

Quindi, per tutti i punti *diversi* da $1$, la funzione coincide con $x+1$. Avvicinandoci a $x = 1$ senza mai toccarlo, i valori $f(x)$ si avvicinano a $2$. Scriviamo

$$\lim_{x \to 1} \frac{x^2-1}{x-1} = 2,$$

**anche se $f(1)$ non esiste**. Il limite esiste lo stesso: il corridoio conduce alla porta, anche quando la porta non c'è. Tenere separate queste due domande — "quanto vale $f$ in $a$?" e "verso cosa tende $f$ vicino ad $a$?" — è il primo passo per capire davvero l'analisi.

La funzione appena vista coincide, fuori da $x=1$, con la retta $x+1$: immagina un piccolo cerchietto vuoto sul punto $(1,2)$. Avvicinandoti a $x=1$ da entrambi i lati, l'ordinata tende a $2$ — e il buco non conta.

```plot
{
  "fn": "x + 1",
  "domain": [-1, 3],
  "title": "y = x+1  (il valore forato in x=1 è y=2: lì sta il limite)"
}
```

---

## 2. Teoria

### 2.1 Definizione informale di limite

Cominciamo, come fecero i matematici prima dell'Ottocento, con una definizione **intuitiva**. La renderemo rigorosa nella [lezione sulla definizione ε–δ](/analisi/limiti-e-continuita/analisi-02-limite-epsilon-delta).

**Definizione (informale).** Sia $f$ una funzione definita in un intorno di $a$, tranne eventualmente in $a$ stesso. Diciamo che il **limite di $f(x)$ per $x$ che tende ad $a$ è $L$**, e scriviamo

$$\lim_{x \to a} f(x) = L,$$

se, all'avvicinarsi di $x$ ad $a$ (da sinistra o da destra, con $x \neq a$), i valori $f(x)$ si avvicinano arbitrariamente a $L$ e vi restano vicini.

Leggiamo la scrittura simbolo per simbolo:

- $\displaystyle\lim$ è l'operatore di limite: prende una funzione e un modo di far variare $x$, e restituisce (se esiste) un numero.
- $x \to a$ ("$x$ tende ad $a$") indica **come** facciamo variare $x$: lo avviciniamo indefinitamente ad $a$, senza mai porlo uguale ad $a$.
- $f(x)$ è la quantità che osserviamo mentre $x$ si muove.
- $L$ è il valore verso cui $f(x)$ si stabilizza: il numero letto in fondo al corridoio.

Il punto cruciale è la clausola $x \neq a$. Il limite riguarda il comportamento *attorno* ad $a$, non *in* $a$. Il valore $f(a)$ — ammesso che esista — è del tutto irrilevante per la definizione. Questa è la ragione per cui, nell'esempio della Sezione 1, il limite valeva $2$ pur essendo $f(1)$ inesistente.

*Micro-esempio.* $\lim_{x\to 0}\dfrac{x^2+x}{x} = \lim_{x\to 0}(x+1) = 1$: la funzione non è definita in $0$, ma per ogni $x\neq 0$ vale $x+1$, che punta a $1$. Il limite non chiede mai il valore in $0$.

L'espressione "si avvicinano arbitrariamente" è il cuore ancora vago della definizione: significa che possiamo rendere $f(x)$ vicino a $L$ *quanto vogliamo*, purché prendiamo $x$ abbastanza vicino ad $a$. Rendere preciso questo "quanto vogliamo / abbastanza vicino" è precisamente il compito della definizione $\varepsilon$–$\delta$.

### 2.2 Intorno e intorno bucato

Per parlare con precisione di "vicinanza" introduciamo un oggetto elementare.

**Definizione (intorno).** Dato $a \in \mathbb{R}$ e un raggio $r > 0$, l'**intorno** di $a$ di raggio $r$ è l'intervallo aperto

$$I_r(a) = (a - r,\ a + r) = \{\, x \in \mathbb{R} : \lvert x - a \rvert < r \,\}.$$

È l'insieme dei punti a distanza minore di $r$ da $a$: un "cerchietto" attorno ad $a$ sulla retta. Qui $\lvert x - a\rvert < r$ è la traduzione esatta di "$x$ dista da $a$ meno di $r$".

**Definizione (intorno bucato).** L'**intorno bucato** di $a$ di raggio $r$ è lo stesso insieme privato del centro:

$$\mathring{I}_r(a) = (a-r,\ a+r) \setminus \{a\} = \{\, x : 0 < \lvert x - a \rvert < r \,\}.$$

La doppia disuguaglianza $0 < \lvert x - a\rvert < r$ dice due cose insieme: $x$ è vicino ad $a$ (parte $\lvert x-a\rvert < r$) **ma** $x \neq a$ (parte $0 < \lvert x-a\rvert$, perché la distanza è nulla solo quando $x = a$). L'intorno bucato è esattamente il "corridoio senza la porta": è lì che vive il concetto di limite. Ogni volta che scriveremo un limite, la variabile $x$ percorre intorni bucati sempre più piccoli.

*Micro-esempio.* $I_{0{,}1}(3) = (2{,}9,\ 3{,}1)$; l'intorno bucato $\mathring{I}_{0{,}1}(3)$ è lo stesso intervallo senza il punto $3$: contiene $2{,}95$ e $3{,}05$, ma non $3$.

### 2.3 Dove ha senso fare un limite: il punto di accumulazione

C'è una condizione tecnica che l'intuizione tende a nascondere ma che è essenziale: perché la frase "$x$ si avvicina ad $a$ restando nel dominio" abbia senso, deve esistere davvero una scorta infinita di punti del dominio arbitrariamente vicini ad $a$. Altrimenti non c'è nessun corridoio da percorrere.

**Definizione (punto di accumulazione).** Sia $D \subseteq \mathbb{R}$. Un punto $a \in \mathbb{R}$ è un **punto di accumulazione** di $D$ se ogni intorno bucato di $a$ contiene almeno un punto di $D$:

$$\forall r > 0 \quad \mathring{I}_r(a) \cap D \neq \varnothing.$$

In parole: comunque piccolo scelga il raggio $r$, dentro il "cerchietto bucato" attorno ad $a$ trovo sempre qualche punto del dominio. Si dimostra che questo equivale a chiedere che ogni intorno di $a$ contenga *infiniti* punti di $D$. Il punto $a$ **non** deve appartenere a $D$: nell'esempio $\tfrac{x^2-1}{x-1}$ il punto $1$ non sta nel dominio, ma è punto di accumulazione, e proprio per questo il limite in $1$ ha senso.

Il concetto opposto è quello di **punto isolato**: $a \in D$ è isolato se esiste un intorno che, tolto $a$, non contiene altri punti di $D$. In un punto isolato non si può parlare di limite (non c'è nessun corridoio), ma — vedremo nella [lezione sulla continuità](/analisi/limiti-e-continuita/analisi-04-continuita) — la funzione risulta automaticamente continua lì.

*Micro-esempio.* $D = \{0\} \cup [1,2]$. Il punto $0$ è isolato (l'intorno $(-\tfrac12, \tfrac12)$ bucato non contiene punti di $D$): nessun limite in $0$. I punti $1$, $1{,}5$, $2$ sono di accumulazione: lì i limiti hanno senso. Anche $a=1$ visto "da fuori" lo sarebbe se non appartenesse a $D$: l'appartenenza non c'entra.

> **Perché questa condizione conta davvero.** Nella maggior parte degli esempi (funzioni su un intervallo) ogni punto è di accumulazione e la condizione è automatica. Diventa rilevante quando il dominio ha "buchi" o punti isolati. Le due fonti principali qui divergono in modo sostanziale: OpenStax definisce il limite assumendo che la funzione sia definita su un **intervallo** attorno al punto, e non nomina i punti di accumulazione; Villanacci parte da un dominio qualunque e richiede che il punto sia di **accumulazione**. Non è una differenza di notazione: cambia *quali domande sono lecite* (limiti su domini irregolari, esclusione dei punti isolati). Adottiamo la definizione più generale di Villanacci, coerente con le convenzioni d'esame; quella di OpenStax resta valida come caso particolare.

```checkpoint
[domanda]
Perché il limite di f(x) = (x²−1)/(x−1) in x = 1 ha senso, anche se 1 non appartiene al dominio di f?
[risposta]
Perché 1 è un punto di accumulazione del dominio: ogni intorno bucato di 1 contiene punti del dominio (tutti i reali vicini a 1 tranne 1 stesso). Il limite richiede solo di potersi avvicinare al punto restando nel dominio — non richiede mai che il punto vi appartenga.
```

### 2.4 Limite sinistro e limite destro

Spesso conta *da quale lato* ci avviciniamo ad $a$. Ci si può muovere verso $a$ tenendosi a sinistra ($x < a$) oppure a destra ($x > a$), e la funzione può comportarsi diversamente nei due casi.

**Limite sinistro** (da sinistra, $x < a$):

$$\lim_{x \to a^-} f(x) = L^-.$$

Si legge "limite di $f(x)$ per $x$ che tende ad $a$ da sinistra". Qui $x$ assume solo valori **strettamente minori** di $a$ mentre si avvicina: percorriamo solo la metà sinistra del corridoio bucato.

**Limite destro** (da destra, $x > a$):

$$\lim_{x \to a^+} f(x) = L^+.$$

Si legge "da destra": $x$ assume solo valori **strettamente maggiori** di $a$. Il piccolo apice $-$ o $+$ ricorda da che parte stiamo arrivando (il segno di $x - a$).

*Micro-esempio.* $f(x) = \sqrt{x}$ in $a = 0$: ha senso solo il limite destro, $\lim_{x\to 0^+}\sqrt{x} = 0$, perché a sinistra di $0$ la funzione non è definita ($0$ è di accumulazione del dominio $[0,+\infty)$ solo da destra).

### 2.5 Il legame tra limite bilatero e limiti unilaterali

**Teorema (esistenza del limite bilatero).** Sia $a$ un punto di accumulazione sia da sinistra che da destra. Allora il limite bilatero esiste ed è uguale a $L$ **se e solo se** esistono entrambi i limiti unilaterali e coincidono:

$$\lim_{x \to a} f(x) = L \quad\Longleftrightarrow\quad \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L.$$

L'espressione "$\Longleftrightarrow$" è una doppia implicazione: il limite bilatero esiste **esattamente quando** i due unilaterali esistono e sono uguali. Le conseguenze pratiche sono tre:

1. se i due limiti unilaterali esistono ma sono **diversi**, il limite bilatero **non esiste**;
2. se anche uno solo dei due unilaterali non esiste, il bilatero non esiste;
3. per calcolare un limite bilatero difficile (funzioni a tratti, valore assoluto) conviene spezzarlo nei due unilaterali, spesso più semplici.

Questo teorema è lo strumento operativo numero uno per stabilire la *non esistenza* di un limite: basta esibire due lati con comportamenti diversi. La dimostrazione è in §3.2.

*Micro-esempio.* La funzione $\tfrac{|x|}{x}$ vale $-1$ a sinistra di $0$ e $+1$ a destra: i due unilaterali esistono ($-1$ e $+1$) ma differiscono ⇒ il bilatero in $0$ non esiste. Il grafico "salta":

```plot
{
  "fn": "Math.abs(x)/x",
  "domain": [-3, 3],
  "title": "y = |x|/x: salto da −1 a +1, limite bilatero assente in x=0"
}
```

```checkpoint
[domanda]
Sai che lim (x→2⁺) f(x) = 5 ed è tutto ciò che sai. Puoi concludere qualcosa sul limite bilatero in 2?
[risposta]
No. Il bilatero esiste solo se ENTRAMBI gli unilaterali esistono e coincidono. Senza informazioni sul limite sinistro non puoi concludere nulla: potrebbe valere 5 (bilatero = 5), valere altro (bilatero inesistente) o non esistere affatto (bilatero inesistente).
```

### 2.6 Limiti all'infinito e limiti infiniti

Il concetto di limite si estende naturalmente a due situazioni in cui compare l'infinito. Sono cose diverse e vanno tenute distinte.

**Limite all'infinito** ($x$ cresce o decresce senza limite). Descriviamo il comportamento "in fondo" al grafico:

$$\lim_{x \to +\infty} f(x) = L \quad\text{se } f(x) \to L \text{ quando } x \text{ cresce illimitatamente,}$$

$$\lim_{x \to -\infty} f(x) = L \quad\text{se } f(x) \to L \text{ quando } x \text{ decresce illimitatamente.}$$

Qui il valore-limite $L$ è un numero reale finito; ciò che diventa infinito è la variabile $x$. Graficamente, la retta $y = L$ è un **asintoto orizzontale**.

**Limite infinito** ($f$ cresce o decresce senza limite vicino ad un punto finito $a$):

$$\lim_{x \to a} f(x) = +\infty \quad\text{se } f(x) \text{ supera ogni soglia quando } x \to a.$$

Qui, al contrario, $a$ è finito ma è il *valore* della funzione a divergere. In questo caso il limite **non è un numero reale**: la scrittura "$=+\infty$" è un'abbreviazione per descrivere il comportamento (la funzione cresce senza controllo), non l'affermazione che esista un limite finito. Graficamente, la retta $x = a$ è un **asintoto verticale**.

*Micro-esempio.* $\lim_{x\to 0}\tfrac{1}{x^2} = +\infty$ (limite infinito in un punto finito: asintoto verticale $x=0$); $\lim_{x\to+\infty}\tfrac{1}{x^2} = 0$ (limite finito all'infinito: asintoto orizzontale $y=0$). Stessa funzione, due fenomeni distinti.

Una lettura unificata è possibile e molto elegante: introducendo l'idea di "intorno di $+\infty$" come una semiretta $(M, +\infty)$, tutti questi casi (limite finito in un punto, limite finito all'infinito, limite infinito, ecc.) diventano istanze di **un'unica** definizione: *per ogni intorno del valore-limite, esiste un intorno del punto tale che la funzione mandi il secondo dentro il primo*. È l'impostazione degli appunti del corso, e la incontreremo in forma rigorosa nella [lezione ε–δ](/analisi/limiti-e-continuita/analisi-02-limite-epsilon-delta). Vale la pena tenerla a mente fin d'ora perché rivela che "tendere a $2$", "tendere a $+\infty$" e "$x \to -\infty$" sono la stessa idea vista con lenti diverse.

### 2.7 Regola operativa: limiti razionali all'infinito

Deriviamo la tecnica standard per limiti del tipo $\lim_{x\to+\infty} \tfrac{P(x)}{Q(x)}$ con $P, Q$ polinomi. Prendiamo come guida

$$\lim_{x \to +\infty} \frac{3x^2 + 2x}{x^2 - 1}.$$

La sostituzione diretta darebbe $\tfrac{\infty}{\infty}$, una forma **indeterminata**: non possiamo concludere nulla senza lavorarci. L'idea è che, per $x$ grande, ciò che conta sono solo i **termini di grado massimo** — gli altri diventano trascurabili. Rendiamolo rigoroso mettendo in evidenza la potenza massima presente, qui $x^2$, a numeratore e a denominatore:

$$\frac{3x^2 + 2x}{x^2 - 1} = \frac{x^2\left(3 + \frac{2}{x}\right)}{x^2\left(1 - \frac{1}{x^2}\right)} = \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}}.$$

Il fattore $x^2$ si semplifica (lecito, perché per $x\to+\infty$ è $x\neq 0$). Quando $x \to +\infty$, i termini $\tfrac{2}{x}$ e $\tfrac{1}{x^2}$ tendono a $0$ — un numero fisso diviso una quantità che esplode si schiaccia sullo zero. Quindi

$$\lim_{x \to +\infty} \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}} = \frac{3 + 0}{1 - 0} = 3.$$

Il limite è $3$: la funzione ha asintoto orizzontale $y = 3$. Eccolo nel grafico — la curva si appiattisce e si incolla alla retta $y=3$ senza mai staccarsene:

```plot
{
  "fn": "(3*x*x + 2*x)/(x*x - 1)",
  "fn2": "3",
  "domain": [2, 30],
  "title": "y = (3x²+2x)/(x²−1) tende a y=3 per x→+∞"
}
```

Da questa derivazione si legge la **regola generale** per i razionali all'infinito, secondo il confronto tra il grado del numeratore $\deg P$ e quello del denominatore $\deg Q$:

- se $\deg P = \deg Q$, il limite è il **rapporto dei coefficienti direttori** (qui $3/1 = 3$);
- se $\deg P < \deg Q$, il limite è $0$ (vince il denominatore);
- se $\deg P > \deg Q$, il limite è $\pm\infty$ (vince il numeratore).

La regola non è una formula da memorizzare a scatola chiusa: è la conseguenza diretta del "mettere in evidenza il grado massimo", e sapere da dove viene ti permette di ricostruirla anche quando la dimentichi.

*Micro-esempio.* $\lim_{x\to+\infty}\tfrac{5x^3 - x}{2x^3 + 7} = \tfrac{5}{2}$ (stesso grado, rapporto dei direttori); $\lim_{x\to+\infty}\tfrac{2x+1}{x^2-3} = 0$ (vince il denominatore).

### 2.8 Limite e valore della funzione: le tre possibilità

Torniamo alla distinzione fondamentale della Sezione 1 e cataloghiamola. Sia $a$ un punto di accumulazione del dominio. Possono presentarsi tre scenari:

| Scenario | $f(a)$ | $\lim_{x\to a} f(x)$ | Interpretazione |
|---|---|---|---|
| 1 | non definito | esiste, finito $=L$ | discontinuità **eliminabile**: il limite "riempirebbe il buco" |
| 2 | definito | esiste $=L$, ma $L \neq f(a)$ | il limite esiste ma **non coincide** col valore nel punto |
| 3 | definito | esiste $=f(a)$ | **continuità** in $a$: il caso ideale (lezione 4) |

Il terzo scenario — limite uguale al valore — è così importante da avere un nome tutto suo: **continuità**. È il caso in cui il calcolo del limite si riduce alla semplice sostituzione $x = a$. Ma è un caso *particolare*, non la regola: confondere sistematicamente i primi due scenari col terzo è l'errore concettuale più diffuso.

*Micro-esempio.* Scenario 2 in azione: $f(x) = x+1$ per $x\neq 1$, con $f(1) := 10$ imposto a mano. Il limite in $1$ vale $2$ (i punti vicini non sanno nulla del valore anomalo), ma $f(1) = 10 \neq 2$.

```checkpoint
[domanda]
"Il limite di f in a vale 5, quindi f(a) = 5." Vero o falso?
[risposta]
Falso in generale. Il limite non dice nulla sul valore nel punto: f(a) potrebbe non esistere (scenario 1), valere qualcos'altro (scenario 2) o valere proprio 5 (scenario 3, continuità). L'uguaglianza lim = f(a) è la DEFINIZIONE di continuità, non una proprietà automatica del limite.
```

### 2.9 Verso la definizione rigorosa: il gioco delle due distanze

Chiudiamo la teoria trasformando l'intuizione in un controllo quantitativo — il ponte diretto verso la [definizione ε–δ](/analisi/limiti-e-continuita/analisi-02-limite-epsilon-delta). Prendiamo la funzione lineare $f(x) = 2x + 1$ e il punto $a = 3$.

**Passo 1 — evidenza numerica.** Compiliamo una tabella di valori attorno a $3$, da entrambi i lati:

| $x$ | $2.9$ | $2.99$ | $2.999$ | $\to$ | $3.001$ | $3.01$ | $3.1$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $6.8$ | $6.98$ | $6.998$ | $\to$ | $7.002$ | $7.02$ | $7.2$ |

I valori si stringono attorno a $7$ da entrambi i lati. Di più: ogni volta che dimezziamo la distanza di $x$ da $3$, la distanza di $f(x)$ da $7$ si dimezza. Questo suggerisce un legame **quantitativo** preciso tra le due distanze.

**Passo 2 — il legame esatto tra le distanze.** Calcoliamo direttamente la distanza dell'output dal valore sospetto $7$:

$$\lvert f(x) - 7 \rvert = \lvert (2x+1) - 7 \rvert = \lvert 2x - 6 \rvert = 2\,\lvert x - 3 \rvert.$$

Questa uguaglianza è la chiave di tutto: la distanza dell'output da $7$ è **esattamente il doppio** della distanza dell'input da $3$. Non un'approssimazione: un'identità algebrica valida per ogni $x$.

**Passo 3 — la sfida rovesciata.** Immagina che qualcuno ti imponga una tolleranza sull'output: "voglio che $f(x)$ disti da $7$ meno di $\varepsilon$", dove $\varepsilon > 0$ è piccolo a piacere. Dalla relazione del Passo 2, chiedere $\lvert f(x) - 7 \rvert < \varepsilon$ equivale a chiedere $2\lvert x - 3\rvert < \varepsilon$, cioè

$$\lvert x - 3 \rvert < \frac{\varepsilon}{2}.$$

Ecco la risposta: se scelgo l'input entro una distanza $\delta = \tfrac{\varepsilon}{2}$ da $3$, l'output cade automaticamente entro $\varepsilon$ da $7$. Riassumendo in una riga:

$$0 < \lvert x - 3 \rvert < \frac{\varepsilon}{2} \;\Longrightarrow\; \lvert (2x+1) - 7 \rvert = 2\lvert x-3\rvert < 2\cdot\frac{\varepsilon}{2} = \varepsilon.$$

Poiché questo funziona **per ogni** tolleranza $\varepsilon$ scelta dall'avversario, il valore verso cui tende $f$ è proprio $7$: $\lim_{x\to 3}(2x+1) = 7$.

Abbiamo appena *derivato* la struttura della definizione $\varepsilon$–$\delta$: la tolleranza $\varepsilon$ sull'output determina la precisione $\delta = \varepsilon/2$ richiesta sull'input. Il "gioco" input–output tra $\delta$ ed $\varepsilon$ è tutto qui, e sarà formalizzato nella prossima lezione.

---

## 3. Dimostrazioni

In questa sezione dimostriamo tre risultati usando la definizione intuitiva e il ragionamento diretto. Le dimostrazioni pienamente formali (con $\varepsilon$ e $\delta$) arriveranno nella lezione 2; qui la logica è già completa e corretta.

### 3.1 Unicità del limite

**Enunciato.** Se $\lim_{x\to a} f(x) = L_1$ e $\lim_{x\to a} f(x) = L_2$, allora $L_1 = L_2$. In parole: **il limite, se esiste, è unico.**

**Idea della dimostrazione (per assurdo).** Supponiamo che i due limiti siano diversi, $L_1 \neq L_2$. Allora la loro distanza $d = \lvert L_1 - L_2 \rvert$ è strettamente positiva. Immaginiamo due "bersagli" attorno a $L_1$ e $L_2$, così stretti da **non sovrapporsi**. Se $f$ tende sia a $L_1$ sia a $L_2$, allora per $x$ abbastanza vicino ad $a$ i valori $f(x)$ dovrebbero cadere **contemporaneamente** in entrambi i bersagli — impossibile, perché sono disgiunti. L'assurdo nasce dall'aver supposto $L_1 \neq L_2$: dunque $L_1 = L_2$. $\square$

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi la verifica</summary>

Scegliamo per ciascun bersaglio il raggio $d/3$: i due intervalli $(L_1 - \tfrac{d}{3},\, L_1 + \tfrac{d}{3})$ e $(L_2 - \tfrac{d}{3},\, L_2 + \tfrac{d}{3})$ sono disgiunti, perché insieme coprono al più $2\cdot\tfrac{d}{3} = \tfrac{2d}{3} < d$ della distanza $d$ che separa i centri.

Poiché $f(x)\to L_1$, esiste un raggio $r_1 > 0$ tale che per ogni $x$ nell'intorno bucato $\mathring{I}_{r_1}(a)$ (intersecato col dominio) si ha $f(x)$ nel primo bersaglio. Poiché $f(x)\to L_2$, esiste $r_2 > 0$ analogo per il secondo bersaglio. Prendiamo $r = \min(r_1, r_2)$: essendo $a$ punto di accumulazione del dominio, l'insieme $\mathring{I}_r(a)\cap D$ è non vuoto — questo è il punto in cui l'ipotesi di accumulazione è indispensabile. Per un tale $x$, il valore $f(x)$ appartiene a entrambi i bersagli disgiunti: contraddizione. $\blacksquare$

</details>

Il valore di questa dimostrazione va oltre il risultato: mostra *perché* possiamo scrivere "**il** limite" con l'articolo determinativo, e usa per la prima volta la strategia — che ritroverai ovunque in analisi — di separare due punti con intorni disgiunti.

### 3.2 Limite bilatero tramite i due unilaterali

**Enunciato.** Sia $a$ di accumulazione da entrambi i lati. Allora $\lim_{x\to a} f(x) = L$ se e solo se $\lim_{x\to a^-} f(x) = L$ e $\lim_{x\to a^+} f(x) = L$.

**Dimostrazione.** Trattandosi di un "se e solo se", dimostriamo le due implicazioni separatamente.

*($\Rightarrow$) Se il bilatero vale $L$, allora entrambi gli unilaterali valgono $L$.* Per ipotesi, avvicinando $x$ ad $a$ **da entrambi i lati** i valori $f(x)$ si avvicinano a $L$. In particolare ciò accade quando ci limitiamo ai soli $x < a$ (è un sottoinsieme dei modi di avvicinarsi): dunque il limite sinistro esiste e vale $L$. Identicamente per i soli $x > a$. Restringere l'insieme dei punti considerati non può cambiare il valore-limite.

*($\Leftarrow$) Se entrambi gli unilaterali valgono $L$, allora il bilatero vale $L$.* Prendiamo un qualsiasi grado di vicinanza richiesto attorno a $L$. Poiché il limite sinistro vale $L$, esiste un raggio $r^-$ tale che tutti gli $x$ con $a - r^- < x < a$ danno $f(x)$ entro quella vicinanza. Poiché il limite destro vale $L$, esiste un raggio $r^+$ analogo per $a < x < a + r^+$. Scegliendo $r = \min(r^-, r^+)$, **ogni** $x$ nell'intorno bucato di raggio $r$ — sia a sinistra sia a destra — dà $f(x)$ entro la vicinanza richiesta. Questo è esattamente ciò che significa $\lim_{x\to a} f(x) = L$. $\square$

Il passaggio chiave, in entrambe le direzioni, è la scelta $r = \min(r^-, r^+)$: prendere il più piccolo dei due raggi garantisce che *entrambe* le condizioni valgano insieme. È la stessa mossa della dimostrazione precedente.

### 3.3 Un limite che non esiste: $\displaystyle\lim_{x\to 0}\sin\!\left(\tfrac{1}{x}\right)$

**Enunciato.** Il limite $\lim_{x\to 0} \sin\!\left(\tfrac{1}{x}\right)$ **non esiste** (né bilatero, né unilaterale).

**Idea della dimostrazione (due successioni).** Mostriamo che, avvicinandoci a $0$ lungo due "sentieri" diversi, la funzione tende a due valori diversi. Se il limite esistesse, ogni sentiero dovrebbe portare allo stesso numero; esibirne due discordi lo confuta.

*Primo sentiero* — i punti in cui l'argomento $\tfrac{1}{x}$ vale $\tfrac{\pi}{2} + 2k\pi$ (dove il seno vale $1$):

$$x_k = \frac{1}{\frac{\pi}{2} + 2k\pi} \;\xrightarrow[k\to\infty]{}\; 0^+, \qquad \sin\!\left(\frac{1}{x_k}\right) = 1 \ \text{ per ogni } k.$$

*Secondo sentiero* — i punti in cui l'argomento vale $-\tfrac{\pi}{2} + 2k\pi$ (dove il seno vale $-1$):

$$x_k' = \frac{1}{-\frac{\pi}{2} + 2k\pi} \;\xrightarrow[k\to\infty]{}\; 0^+, \qquad \sin\!\left(\frac{1}{x_k'}\right) = -1 \ \text{ per ogni } k.$$

Due successioni che tendono entrambe a $0^+$, lungo le quali $f$ tende rispettivamente a $1$ e a $-1$: se il limite destro esistesse e valesse $L$, ogni successione tendente a $0^+$ dovrebbe portare $f$ verso lo stesso $L$. Dunque $\lim_{x\to 0^+}\sin(1/x)$ non esiste, e a maggior ragione non esiste il bilatero. $\square$

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi la verifica</summary>

Verifichiamo che i sentieri sono ben definiti e convergono a $0^+$. Per $k \geq 1$ si ha $\tfrac{\pi}{2} + 2k\pi > 0$ e $-\tfrac{\pi}{2} + 2k\pi \geq -\tfrac{\pi}{2} + 2\pi > 0$: entrambi i denominatori sono positivi, quindi $x_k > 0$ e $x_k' > 0$. Al crescere di $k$ i denominatori divergono a $+\infty$, dunque $x_k \to 0^+$ e $x_k' \to 0^+$ (un reciproco di quantità positiva divergente tende a $0$ da destra).

I valori: per la periodicità del seno, $\sin(\tfrac{\pi}{2} + 2k\pi) = \sin\tfrac{\pi}{2} = 1$ e $\sin(-\tfrac{\pi}{2} + 2k\pi) = \sin(-\tfrac{\pi}{2}) = -1$, per ogni intero $k$.

Il principio usato — «se $\lim_{x\to a^+} f(x) = L$, allora per ogni successione $t_n \to a^+$ con $t_n \neq a$ si ha $f(t_n) \to L$» — è la *caratterizzazione sequenziale del limite* (fonte: appunti sulle successioni), che verrà enunciata in generale nella lezione sulla continuità. Qui ne usiamo solo la direzione "limite di funzione ⇒ limite lungo ogni successione", intuitivamente immediata: una successione che tende ad $a^+$ è uno dei modi di percorrere il corridoio.

</details>

Questo è il prototipo di **discontinuità essenziale** (o oscillante): la funzione non salta e non diverge, ma oscilla sempre più fitta tra $-1$ e $1$, senza mai decidersi. La tecnica delle "due successioni" per confutare un limite è tanto semplice quanto potente, e la riutilizzerai spesso.

---

## 4. Esempi

Gli esempi procedono per difficoltà crescente: dal caso più diretto fino ad applicazioni concrete. Per ciascuno indichiamo la **strategia** prima del calcolo.

### Esempio 1 — Sostituzione diretta (introduttivo)

Calcolare $\lim_{x \to 2} (x^2 + 3x - 1)$.

*Strategia:* i polinomi sono funzioni continue ovunque (scenario 3 di §2.8), quindi il limite coincide col valore nel punto e si ottiene per sostituzione.

$$\lim_{x \to 2} (x^2 + 3x - 1) = 2^2 + 3\cdot 2 - 1 = 4 + 6 - 1 = 9.$$

*Commento:* qui limite e valore coincidono. Attenzione a non generalizzare: la sostituzione funziona **perché** la funzione è continua, non perché "si fa sempre così".

> ⚠️ **Errore comune — credere che sostituire sia sempre lecito.** "$\lim_{x\to 0}\tfrac{\sin x}{x} = \tfrac{\sin 0}{0} = \tfrac{0}{0}$, quindi non esiste": falso. La sostituzione diretta funziona *solo* per le funzioni continue nel punto. Una forma indeterminata $\tfrac{0}{0}$ non è una conclusione: è il segnale che il metodo banale non basta e serve un'altra tecnica (quel limite vale $1$, [lezione sui limiti notevoli](/analisi/limiti-e-continuita/analisi-05-limiti-notevoli-asintoti)).

### Esempio 2 — Forma $0/0$ con fattorizzazione (introduttivo)

Calcolare $\lim_{x \to 1} \dfrac{x^2 - 1}{x - 1}$.

*Strategia:* la sostituzione dà $\tfrac{0}{0}$, forma indeterminata. Si elimina il fattore che annulla il denominatore tramite fattorizzazione.

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad (x \neq 1),$$

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} (x+1) = 2.$$

*Commento:* la funzione ha un "buco" in $x = 1$ (non è definita lì), ma il limite esiste e vale $2$. È lo scenario 1: discontinuità eliminabile.

> ⚠️ **Errore comune — confondere il limite con il valore nel punto.** "Il limite non esiste perché la funzione non è definita in $x=1$": falso. Il limite descrive il comportamento *vicino* al punto, non *nel* punto; la definizione esclude esplicitamente $x = a$ (clausola $0 < |x-a|$). Che $f(1)$ esista o meno è irrilevante.

### Esempio 3 — Valore assoluto e limiti unilaterali (standard)

Calcolare $\lim_{x \to 0} \dfrac{\lvert x \rvert}{x}$.

*Strategia:* il valore assoluto cambia definizione a seconda del segno di $x$; si spezza il limite nei due lati.

- Per $x > 0$: $\lvert x \rvert = x$, quindi $\dfrac{\lvert x\rvert}{x} = 1$, e $\lim_{x\to 0^+} = 1$.
- Per $x < 0$: $\lvert x \rvert = -x$, quindi $\dfrac{\lvert x\rvert}{x} = -1$, e $\lim_{x\to 0^-} = -1$.

I due limiti unilaterali esistono ma sono diversi ($1 \neq -1$): per il teorema di §2.5, il **limite bilatero non esiste**.

*Commento:* un esempio in cui entrambi i pezzi sono semplicissimi, eppure il bilatero non c'è. È il motivo per cui non si può mai "dimenticare un lato".

> ⚠️ **Errore comune — dedurre il bilatero da un solo lato.** "Per $x\to 0^+$ vale $1$, quindi il limite è $1$": falso. Un lato solo non decide mai; serve controllare entrambi e verificarne la coincidenza.

### Esempio 4 — Limite razionale all'infinito (standard)

Calcolare $\lim_{x \to +\infty} \dfrac{3x^2 + 2x}{x^2 - 1}$.

*Strategia:* forma $\tfrac{\infty}{\infty}$; si divide per la potenza massima (§2.7).

$$= \lim_{x \to +\infty} \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}} = \frac{3 + 0}{1 - 0} = 3.$$

*Commento:* stesso grado sopra e sotto $\Rightarrow$ rapporto dei coefficienti direttori. Asintoto orizzontale $y = 3$.

> ⚠️ **Errore comune — trattare $\infty$ come un numero.** "$\lim_{x\to+\infty}(x^2 - x) = \infty - \infty = 0$": falso ($\lim(x^2-x) = +\infty$). $\infty$ non obbedisce all'aritmetica ordinaria; $\infty - \infty$, come $\tfrac{0}{0}$ e $\tfrac{\infty}{\infty}$, è una forma indeterminata: riscrivi l'espressione fino a eliminare l'indeterminazione, poi valuta.

### Esempio 5 — Un limite che è già una derivata (standard)

Calcolare $\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2}$ e riconoscerne il significato.

*Strategia:* forma $\tfrac{0}{0}$, si fattorizza; poi osserviamo la struttura.

$$\lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2}(x+2) = 4.$$

*Commento:* questo limite ha la forma $\lim_{x\to c}\tfrac{x^n - c^n}{x - c}$, che vale $n\,c^{n-1}$. Con $n = 2$, $c = 2$: $2\cdot 2^{1} = 4$. Non è una coincidenza: è **la definizione della derivata** di $x^2$ nel punto $2$. Il limite è il meccanismo che dà senso alla derivata — filo che riprenderemo nella [lezione sulla derivata](/analisi/derivate/analisi-06-derivata-definizione).

La stessa struttura si può *manipolare*: la funzione $\dfrac{x^a-1}{x-1}$ ha in $x=1$ una forma $\tfrac{0}{0}$ e il suo limite vale esattamente $a$ (è la derivata di $x^a$ in $x=1$). Muovi lo slider e osserva la curva vicino a $x=1$: al crescere di $a$ la curva "punta" verso un'ordinata più alta nel punto forato. Stai vedendo, in diretta, il limite cambiare al variare del parametro.

```slider
{
  "fn": "(Math.pow(x, a) - 1) / (x - 1)",
  "pname": "a",
  "pmin": 1,
  "pmax": 5,
  "pstep": 1,
  "pdefault": 2,
  "plabel": "Esponente a (limite in x=1 = a)",
  "domain": [0.2, 2.2],
  "title": "y = (x^a − 1)/(x − 1): vicino a x=1 il valore tende ad a"
}
```

### Esempio 6 — Funzione a tratti nel punto di raccordo (standard)

Sia $f(x) = \begin{cases} x^2 & x < 2 \\ 3x - 2 & x \geq 2 \end{cases}$. Calcolare $\lim_{x\to 2} f(x)$ e discutere la continuità.

*Strategia:* nel punto di raccordo la funzione cambia regola; si usano i due rami per i due limiti unilaterali.

- Limite sinistro (ramo $x^2$): $\lim_{x\to 2^-} x^2 = 4$.
- Limite destro (ramo $3x-2$): $\lim_{x\to 2^+}(3x-2) = 4$.

I due coincidono, dunque $\lim_{x\to 2} f(x) = 4$. Inoltre $f(2) = 3\cdot 2 - 2 = 4 = \lim$: la funzione è anche **continua** in $2$ (scenario 3).

*Commento:* qui i due lati concordano — caso opposto all'Esempio 3. Il raccordo è "liscio" nel senso del valore.

### Esempio 7 — Discontinuità di salto e limiti infiniti (avanzato)

Sia $g(x) = \begin{cases} 1 & x < 0 \\ 3 & x \geq 0 \end{cases}$. Studiare il limite in $0$; poi studiare $\lim_{x\to 0}\tfrac{1}{x^2}$ e $\lim_{x\to 0}\tfrac{1}{x}$.

*Per $g$:* $\lim_{x\to 0^-} g(x) = 1$ e $\lim_{x\to 0^+} g(x) = 3$. Poiché $1 \neq 3$, il bilatero non esiste: **discontinuità di salto** di ampiezza $\lvert 3 - 1\rvert = 2$. A differenza dell'oscillazione ($\sin(1/x)$, §3.3), qui ciascun unilaterale esiste; è la loro discordanza a impedire il bilatero.

*Per $\tfrac{1}{x^2}$:* il denominatore è positivo da entrambi i lati e tende a $0^+$, quindi la funzione cresce senza limite da entrambe le parti: $\lim_{x\to 0}\tfrac{1}{x^2} = +\infty$ (asintoto verticale $x=0$).

*Per $\tfrac{1}{x}$:* da destra $+\infty$, da sinistra $-\infty$: i due lati divergono in direzioni opposte, e nemmeno il limite infinito esiste in senso bilatero, sebbene ciascun lato abbia comportamento determinato.

> ⚠️ **Errore comune — "il limite esiste" ≠ "il limite è finito".** "$\lim_{x\to 0}\tfrac{1}{x^2}$ non esiste": impreciso. Come limite *finito* non esiste, ma il comportamento è perfettamente determinato: $+\infty$ da entrambi i lati. Scrivi $\lim_{x\to 0}\tfrac{1}{x^2} = +\infty$; ignorare la distinzione fa perdere l'informazione sull'asintoto verticale.

### Esempio 8 — Applicazione economica: il costo marginale come limite (applicativo)

In microeconomia, il **costo marginale** misura di quanto aumenta il costo totale $C(q)$ producendo un'unità infinitesima aggiuntiva. Data la funzione di costo $C(q) = q^2 + 5q + 100$ (in migliaia di euro, per $q$ unità), il costo marginale al livello $q$ è

$$CM(q) = \lim_{h \to 0} \frac{C(q+h) - C(q)}{h}.$$

*Strategia:* è un limite $\tfrac{0}{0}$ nella variabile $h$; si sviluppa il numeratore e si semplifica.

$$C(q+h) - C(q) = \big[(q+h)^2 + 5(q+h) + 100\big] - \big[q^2 + 5q + 100\big] = 2qh + h^2 + 5h.$$

$$\frac{C(q+h)-C(q)}{h} = \frac{2qh + h^2 + 5h}{h} = 2q + h + 5 \quad (h\neq 0),$$

$$CM(q) = \lim_{h\to 0}(2q + h + 5) = 2q + 5.$$

*Commento:* al livello $q = 10$, il costo marginale è $2\cdot 10 + 5 = 25$ (migliaia di euro per unità). Senza il concetto di limite, l'analisi marginale — pilastro della teoria del produttore — non avrebbe fondamento: il rapporto $\tfrac{\Delta C}{\Delta q}$ resterebbe una media su intervalli finiti, mai un valore "puntuale". Questo esempio è, ancora una volta, una derivata mascherata.

> ⚠️ **Errore comune — chiedere il limite in un punto isolato.** Data $f$ definita solo su $\{0\}\cup[1,2]$, "calcolo $\lim_{x\to 0} f(x)$" è una domanda **mal posta**: $0$ è un punto isolato del dominio, non di accumulazione (§2.3), quindi non c'è nessun corridoio da percorrere. Verifica sempre che il punto sia di accumulazione prima di scrivere un limite — è la cautela che gli appunti del corso mettono in primo piano.

---

## 5. Collegamenti e riepilogo

### Nella biblioteca

- **Definizione $\varepsilon$–$\delta$ del limite** (`analisi-02-limite-epsilon-delta`): la formalizzazione rigorosa del "gioco" tolleranza–precisione derivato in §2.9. Questa lezione ne è la preparazione intuitiva.
- **Calcolo dei limiti** (`analisi-03-calcolo-limiti`): algebra dei limiti, forme indeterminate, limiti notevoli — gli strumenti sistematici per calcolare ciò che qui abbiamo affrontato caso per caso.
- **Continuità** (`analisi-04-continuita`): una funzione è continua in $a$ quando $\lim_{x\to a} f(x) = f(a)$; il limite è il mattone con cui si costruisce la definizione di continuità (scenario 3 di §2.8).
- **Derivata — definizione** (`analisi-06-derivata-definizione`): la derivata *è* un limite, quello del rapporto incrementale. Gli Esempi 5 e 8 erano già derivate mascherate.

### Nelle discipline

- **Economia — analisi marginale.** Costo marginale, ricavo marginale e utilità marginale sono tutti limiti di rapporti incrementali: $CM(q)=\lim_{h\to 0}\tfrac{C(q+h)-C(q)}{h}$. La teoria del produttore e del consumatore poggia interamente su questo passaggio dal discreto al "puntuale" (Esempio 8).
- **Fisica — velocità istantanea.** La velocità in un istante è $v(t)=\lim_{h\to 0}\tfrac{s(t+h)-s(t)}{h}$: senza limite avremmo solo velocità medie su intervalli, mai la lettura del tachimetro in un dato istante.
- **Statistica e probabilità — convergenza.** La legge dei grandi numeri e la definizione di valore atteso di variabili continue si fondano su limiti (di successioni e di somme di Riemann). L'idea di "avvicinarsi indefinitamente a un valore" è la stessa qui introdotta.
- **Informatica e ML — discesa del gradiente.** L'ottimizzazione tramite gradiente usa derivate, cioè limiti di rapporti incrementali, per decidere la direzione di aggiornamento dei parametri. Il tasso di apprendimento controlla quanto ci si muove lungo quella pendenza limite.

### Riepilogo

| Concetto | Definizione / Formula | Note |
|---|---|---|
| Limite (idea) | $\lim_{x\to a} f(x)=L$: $f(x)$ si avvicina a $L$ quanto si vuole se $x$ è abbastanza vicino ad $a$ | Riguarda il comportamento *vicino* ad $a$, non in $a$ |
| Intorno / intorno bucato | $I_r(a) = \{|x-a|<r\}$; $\mathring{I}_r(a) = \{0<|x-a|<r\}$ | Il "bucato" esclude il centro: lì vive il limite |
| Punto di accumulazione | ogni intorno bucato di $a$ contiene punti del dominio | Precondizione perché il limite abbia senso (Villanacci) |
| Limite sinistro / destro | $\lim_{x\to a^-} f$, $\lim_{x\to a^+} f$ | Comportamento da un solo lato |
| Esistenza del bilatero | $\lim_{x\to a} f = L \iff \lim_{x\to a^-} f = \lim_{x\to a^+} f = L$ | I due lati devono esistere e coincidere |
| Forma indeterminata | $\tfrac{0}{0}$, $\tfrac{\infty}{\infty}$, $\infty-\infty$, ecc. | Segnale di "lavora ancora", non una conclusione |
| Limite infinito | $\lim_{x\to a} f = +\infty$ | Non esiste finito, ma diverge; asintoto verticale |
| Limite all'infinito | $\lim_{x\to \pm\infty} f = L$ | Asintoto orizzontale $y=L$ |
| Razionali all'infinito | confronto $\deg P$ vs $\deg Q$ | $=$: rapporto coeff. direttori; $<$: 0; $>$: $\pm\infty$ |

**Punti chiave da ricordare**

- Il limite descrive una *tendenza*, non un valore raggiunto: $f(a)$ può non esistere.
- Il limite ha senso solo nei punti di accumulazione del dominio.
- Il bilatero esiste solo se i due unilaterali esistono e concordano.
- Una forma indeterminata non è un risultato: obbliga a una tecnica ulteriore.
- "Limite infinito" e "limite che non esiste" non sono sinonimi.
- Ogni derivata è un limite: è il ponte verso il calcolo differenziale.

---

## 6. Esercizi

### Esercizio 1 (introduttivo)

Calcola $\lim_{x\to 3}(x^2 - 4x + 1)$.

<details>
<summary>Soluzione</summary>

Il polinomio è continuo ovunque, quindi si sostituisce: $3^2 - 4\cdot 3 + 1 = 9 - 12 + 1 = -2$.

$$\lim_{x\to 3}(x^2 - 4x + 1) = -2.$$

</details>

### Esercizio 2 (introduttivo)

Calcola $\lim_{x\to 2}\dfrac{x^2 - 4}{x - 2}$.

<details>
<summary>Soluzione</summary>

Forma $\tfrac{0}{0}$. Si fattorizza: $\tfrac{(x-2)(x+2)}{x-2}=x+2$ per $x\neq 2$.

$$\lim_{x\to 2}\frac{x^2-4}{x-2}=\lim_{x\to 2}(x+2)=4.$$

</details>

### Esercizio 3 (standard)

Calcola $\lim_{x\to 0^-}\dfrac{x}{|x|}$ e $\lim_{x\to 0^+}\dfrac{x}{|x|}$. Il limite bilatero esiste?

<details>
<summary>Soluzione</summary>

Per $x<0$: $|x|=-x$, quindi $\tfrac{x}{|x|}=\tfrac{x}{-x}=-1$, e $\lim_{x\to 0^-}=-1$.
Per $x>0$: $|x|=x$, quindi $\tfrac{x}{|x|}=1$, e $\lim_{x\to 0^+}=1$.

I due limiti unilaterali sono diversi ($-1\neq 1$): per il teorema di §2.5 il **bilatero non esiste**.

</details>

### Esercizio 4 (standard)

Calcola $\lim_{x\to +\infty}\dfrac{5x^3 - x}{2x^3 + 7}$.

<details>
<summary>Soluzione</summary>

Stesso grado ($3$) sopra e sotto: si divide per $x^3$.

$$\lim_{x\to +\infty}\frac{5 - \frac{1}{x^2}}{2 + \frac{7}{x^3}}=\frac{5-0}{2+0}=\frac{5}{2}.$$

Asintoto orizzontale $y=\tfrac{5}{2}$.

</details>

### Esercizio 5 (standard)

Calcola $\lim_{x\to +\infty}\dfrac{2x + 1}{x^2 - 3}$.

<details>
<summary>Soluzione</summary>

Grado del numeratore ($1$) minore di quello del denominatore ($2$): vince il denominatore.

$$\lim_{x\to +\infty}\frac{2x+1}{x^2-3}=0.$$

Verifica dividendo per $x^2$: $\tfrac{\frac{2}{x}+\frac{1}{x^2}}{1-\frac{3}{x^2}}\to\tfrac{0}{1}=0$.

</details>

### Esercizio 6 (standard)

Sia $f(x)=\begin{cases} x+1 & x<1 \\ 4-x & x\geq 1\end{cases}$. Calcola i due limiti unilaterali in $x=1$ e stabilisci se il bilatero esiste. La funzione è continua in $1$?

<details>
<summary>Soluzione</summary>

Limite sinistro (ramo $x+1$): $\lim_{x\to 1^-}(x+1)=2$.
Limite destro (ramo $4-x$): $\lim_{x\to 1^+}(4-x)=3$.

I due lati differiscono ($2\neq 3$): il bilatero **non esiste**, e di conseguenza $f$ **non è continua** in $1$ (discontinuità di salto, ampiezza $1$).

</details>

### Esercizio 7 (avanzato)

Studia $\lim_{x\to 0}\dfrac{1}{x^2}$ e $\lim_{x\to 0}\dfrac{1}{x}$, distinguendo i comportamenti unilaterali.

<details>
<summary>Soluzione</summary>

Per $\tfrac{1}{x^2}$: il denominatore è positivo da entrambi i lati e tende a $0^+$, quindi la funzione cresce senza limite da entrambe le parti:

$$\lim_{x\to 0}\frac{1}{x^2}=+\infty.$$

Per $\tfrac{1}{x}$: da destra $\lim_{x\to 0^+}\tfrac{1}{x}=+\infty$, da sinistra $\lim_{x\to 0^-}\tfrac{1}{x}=-\infty$. I due lati divergono in direzioni opposte: il limite (nemmeno infinito) non esiste in senso bilatero, sebbene ciascun lato abbia comportamento determinato. Entrambe le funzioni hanno asintoto verticale $x=0$.

</details>

### Esercizio 8 (applicativo)

La funzione di costo di un'impresa è $C(q)=3q^2 + 4q + 50$ (migliaia di euro). Ricava il costo marginale $CM(q)=\lim_{h\to 0}\tfrac{C(q+h)-C(q)}{h}$ e valutalo in $q=8$.

<details>
<summary>Soluzione</summary>

Sviluppo del numeratore:

$$C(q+h)-C(q)=\big[3(q+h)^2+4(q+h)+50\big]-\big[3q^2+4q+50\big]=6qh+3h^2+4h.$$

Divido per $h$ (con $h\neq 0$) e passo al limite:

$$\frac{C(q+h)-C(q)}{h}=6q+3h+4 \;\longrightarrow\; CM(q)=6q+4.$$

In $q=8$: $CM(8)=6\cdot 8 + 4 = 52$ (migliaia di euro per unità).

</details>
