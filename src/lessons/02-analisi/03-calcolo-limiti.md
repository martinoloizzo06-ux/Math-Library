---
id: analisi-03-calcolo-limiti
titolo: "Calcolo dei limiti: algebra, forme indeterminate e strumenti"
materia: analisi
argomento: "Limiti e continuità"
modulo: "Concetto di limite"
livello: universitario
slug: analisi-03-calcolo-limiti

# legacy
subject: analisi
topic_it: "Limiti e continuità"
topic_en: "Limits and continuity"
title_it: "Calcolo dei limiti: algebra, forme indeterminate e strumenti"
title_en: "Computing limits: algebra, indeterminate forms and tools"
level: blue
order: 3
source_book: "OpenStax Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "Cap. 2.3 e 4.8 (OpenStax); Cap. 6 (Villanacci)"

prerequisiti:
  - analisi-01-limite-intuitivo
  - analisi-02-limite-epsilon-delta
  - base-04-prodotti-notevoli
  - base-05-frazioni-algebriche
  - base-15-funzione-logaritmica

collegamenti:
  - analisi-01-limite-intuitivo
  - analisi-02-limite-epsilon-delta
  - analisi-04-continuita
  - analisi-05-limiti-notevoli-asintoti
  - analisi-06-derivata-definizione
  - analisi-16-successioni

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 2.3 (The Limit Laws), Cap. 4.8 (L'Hôpital's Rule)"
    note: "leggi algebriche dei limiti, teorema del confronto, regola di De l'Hôpital via teorema di Cauchy"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 6 (algebra dei limiti, forme indeterminate, equivalenze asintotiche, gerarchia degli infiniti)"
    note: "priorità per notazione da esame (x₀, ℓ), impostazione algebrica delle forme indeterminate, equivalenze asintotiche come strumento primario"

versione: "2.0"
data_ultima_rielaborazione: "2026-07-10"
stato: completa

componenti_usati:
  - plot
  - slider

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Nella lezione precedente abbiamo pagato un prezzo per il rigore: dimostrare che $\lim_{x\to x_0} f(x) = \ell$ con la definizione $\varepsilon$–$\delta$ richiede, ogni volta, di costruire a mano un $\delta(\varepsilon)$. Va bene per *fondare* la teoria, ma è impraticabile come metodo di *calcolo*. Nessuno, dovendo valutare $\lim_{x\to 2}(x^3 - 5x + 1)$, si mette a cercare bande e strisce: sostituisce $2$ e ottiene $-1$. La domanda di questa lezione è: *perché* ha il diritto di farlo, e cosa succede quando quel diritto viene a mancare.

La risposta ha due facce. La prima è un teorema di **compositività**: il limite di una somma è la somma dei limiti, il limite di un prodotto è il prodotto dei limiti, e così via. Grazie a questo, il limite di quasi ogni funzione "costruita a pezzi" (polinomi, rapporti, radici, esponenziali) si calcola smontandola nei suoi mattoni, valutando i limiti dei mattoni — spesso una banale sostituzione — e rimontando. È la stessa idea che rende utile l'aritmetica: non ricalcoliamo $7 \times 8$ da zero, applichiamo una regola nota.

La seconda faccia è più interessante, ed è il vero cuore del calcolo differenziale. A volte lo smontaggio produce un simbolo *privo di significato*: $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0\cdot\infty$, $\infty - \infty$. Sono le **forme indeterminate**. "Indeterminata" non vuol dire "impossibile": vuol dire che il valore limite *non è deciso* dai soli limiti dei pezzi. Prendi $\frac{0}{0}$: numeratore e denominatore corrono entrambi verso zero, e il rapporto misura *chi corre più veloce*. Se il numeratore è più rapido, il rapporto tende a $0$; se lo è il denominatore, tende a $\infty$; se corrono alla pari, tende a una costante finita. Il simbolo $\frac{0}{0}$ non contiene questa informazione — la velocità sì.

Non è un caso di scuola. La velocità istantanea $\lim_{h\to 0}\frac{s(t_0+h)-s(t_0)}{h}$ è una forma $\frac{0}{0}$; la pendenza di una tangente è una forma $\frac{0}{0}$; l'elasticità di una domanda in economia è una forma $\frac{0}{0}$. Storicamente, imparare a "sbrogliare" questi rapporti — prima con l'astuzia algebrica, poi con la regola che Guillaume de l'Hôpital pubblicò nel 1696 (su risultati di Johann Bernoulli) — è stato il gesto che ha fatto nascere l'Analisi come tecnica di calcolo. Questa lezione raccoglie l'intero arsenale: le leggi algebriche, i teoremi che le puntellano (confronto, permanenza del segno), i limiti notevoli e le equivalenze asintotiche, la gerarchia delle velocità, e la regola di De l'Hôpital.

---

## 2. Prerequisiti

- **[Concetto di limite — approccio intuitivo](analisi-01-limite-intuitivo)** — l'immagine "$x$ vicino a $x_0$ implica $f(x)$ vicino a $\ell$" e i limiti unilaterali e all'infinito, di cui qui useremo il calcolo.
- **[Definizione rigorosa ε–δ del limite](analisi-02-limite-epsilon-delta)** — è il fondamento su cui si dimostrano le leggi algebriche (il §4.3 di quella lezione — limite della somma — è il primo mattone di questa).
- **[Prodotti notevoli](base-04-prodotti-notevoli)** — differenza di quadrati e scomposizioni, indispensabili per le forme $\frac{0}{0}$ polinomiali e per la razionalizzazione.
- **[Frazioni algebriche](base-05-frazioni-algebriche)** — minimo comune denominatore e semplificazione, il motore delle forme $\infty - \infty$.
- **[Funzione logaritmica](base-15-funzione-logaritmica)** — proprietà di $\ln$, usate per ricondurre le forme di potenza ($1^\infty$, $0^0$, $\infty^0$) a forme razionali.

Un avviso: la **regola di De l'Hôpital** (§3.9, §4.4) usa le derivate, che saranno definite rigorosamente nella **[lezione sulla derivata](analisi-06-derivata-definizione)**. La presentiamo qui perché è lo strumento naturale per le forme indeterminate, ma la sua *dimostrazione* dipende da risultati che vedrai formalizzati più avanti; puoi usarla come strumento fin da subito.

---

## 3. Teoria completa

### 3.1 L'algebra dei limiti

**Teorema (leggi algebriche dei limiti).** Siano $f, g$ definite vicino a $x_0$ (punto di accumulazione del dominio comune), e supponiamo
$$\lim_{x\to x_0} f(x) = \ell \in \mathbb{R}, \qquad \lim_{x\to x_0} g(x) = m \in \mathbb{R}$$
*entrambi finiti*. Allora:

$$\lim_{x\to x_0}\big[f(x) \pm g(x)\big] = \ell \pm m, \qquad \lim_{x\to x_0}\big[f(x)\,g(x)\big] = \ell\, m,$$

$$\lim_{x\to x_0} \frac{f(x)}{g(x)} = \frac{\ell}{m}\quad (\text{se } m \neq 0), \qquad \lim_{x\to x_0}\big[f(x)\big]^{n} = \ell^{\,n}\ (n\in\mathbb{N}),$$

$$\lim_{x\to x_0} \sqrt[n]{f(x)} = \sqrt[n]{\ell}\quad (\ell \ge 0 \text{ se } n \text{ pari}).$$

**Come si legge.** Ogni riga dice la stessa cosa in forme diverse: "il limite *commuta* con l'operazione". Il simbolo $\ell \pm m$ a destra è un numero *già determinato* dai limiti dei pezzi; l'ipotesi cruciale, scritta in chiaro, è che $\ell$ e $m$ siano **finiti** (e $m \neq 0$ per il quoziente). È esattamente quando questa ipotesi cade — un limite infinito, o $m = 0$ — che le regole smettono di valere direttamente e compaiono le forme indeterminate (§3.2).

**Perché ha questa struttura.** La legge della somma non è un assioma: si dimostra dalla definizione $\varepsilon$–$\delta$ (§4.1), spezzando la tolleranza $\varepsilon$ in due metà $\varepsilon/2$, una per $f$ e una per $g$. La legge del prodotto usa lo stesso spirito con un aggiustamento tecnico (i fattori vanno tenuti limitati). Da queste due discendono tutte le altre: la potenza è un prodotto ripetuto, il quoziente è un prodotto per il reciproco.

**Conseguenza operativa (sostituzione diretta).** Se $f$ è una funzione costruita da polinomi, radici, esponenziali e logaritmi con le operazioni sopra, e se $x_0$ appartiene al suo dominio "senza problemi", allora $\lim_{x\to x_0} f(x) = f(x_0)$: basta sostituire. Questa è, anticipando, la definizione di **continuità** (lezione 4). Il calcolo dei limiti diventa interessante *proprio* nei punti in cui la sostituzione fallisce.

### 3.2 L'aritmetica estesa e le sette forme indeterminate

Molti limiti coinvolgono $+\infty$ o $-\infty$. Possiamo estendere le operazioni a questi simboli, ma solo in parte. Le combinazioni **determinate** (il risultato è forzato, qualunque siano le funzioni) sono, per $a\in\mathbb{R}$:

| Operazione | Risultato | Operazione | Risultato |
|---|---|---|---|
| $a + (+\infty)$ | $+\infty$ | $(+\infty) + (+\infty)$ | $+\infty$ |
| $a \cdot (+\infty),\ a>0$ | $+\infty$ | $(+\infty)\cdot(+\infty)$ | $+\infty$ |
| $a \cdot (+\infty),\ a<0$ | $-\infty$ | $\dfrac{a}{\pm\infty}$ | $0$ |
| $\dfrac{a}{0^+},\ a>0$ | $+\infty$ | $(+\infty)^{+\infty}$ | $+\infty$ |

Le combinazioni **indeterminate** sono le sette in cui due tendenze opposte si contendono il risultato:

$$\frac{0}{0}, \qquad \frac{\infty}{\infty}, \qquad 0\cdot\infty, \qquad \infty - \infty, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0}.$$

In ciascuna, il valore del limite **non** è deciso dai simboli: dipende dalle funzioni concrete. Che $\frac{0}{0}$ sia davvero indeterminata si vede con un esempio triplo: per $x\to 0$,
$$\frac{x}{x}\to 1, \qquad \frac{x^2}{x}\to 0, \qquad \frac{x}{x^2}\to +\infty.$$
Tre volte la forma è $\frac{0}{0}$, tre risultati diversi. Ecco perché serve *lavorare* la funzione: fattorizzare, razionalizzare, usare equivalenze o De l'Hôpital.

### 3.3 Teorema di permanenza del segno

**Teorema.** Se $\lim_{x\to x_0} f(x) = \ell$ con $\ell > 0$, allora esiste un intorno bucato di $x_0$ in cui $f(x) > 0$. (Simmetricamente per $\ell < 0$.)

**Lettura.** Il segno del limite si "propaga" a tutto un intorno: se una funzione tende a un numero positivo, *vicino* al punto è positiva. È il ponte tra un'informazione puntuale (il limite) e un'informazione locale (il segno in un intorno), e sarà usato costantemente — per esempio per dividere per $g(x)$ sapendo che non si annulla, o negli studi di funzione.

### 3.4 Teorema del confronto (dei "due carabinieri")

**Teorema (squeeze).** Se in un intorno bucato di $x_0$ vale
$$g(x) \le f(x) \le h(x), \qquad \text{e} \qquad \lim_{x\to x_0} g(x) = \lim_{x\to x_0} h(x) = \ell,$$
allora anche $\lim_{x\to x_0} f(x) = \ell$.

**Lettura e nome.** Due funzioni (i "carabinieri" $g$ e $h$) che convergono allo stesso $\ell$ costringono la funzione in mezzo (l'"arrestato" $f$) a convergere anche lei: non ha via di fuga. È lo strumento principe quando $f$ è troppo complicata per un attacco diretto ma è *incastrata* tra due funzioni semplici. Il caso d'oro: $-|x| \le x\sin\frac1x \le |x|$ forza $\lim_{x\to 0} x\sin\frac1x = 0$ pur oscillando la funzione infinite volte (Esempio 4).

### 3.5 Cambio di variabile (limite di funzione composta)

**Teorema.** Se $\lim_{x\to x_0} g(x) = t_0$ e $\lim_{t\to t_0} f(t) = \ell$, e $f$ è continua in $t_0$ oppure $g(x)\neq t_0$ vicino a $x_0$, allora
$$\lim_{x\to x_0} f\big(g(x)\big) = \ell.$$

**Uso pratico.** Permette la **sostituzione** $t = g(x)$: per calcolare $\lim_{x\to 0}\frac{\sin(3x)}{3x}$ si pone $t = 3x$ (con $t\to 0$) e ci si riconduce al limite notevole $\lim_{t\to 0}\frac{\sin t}{t} = 1$. È lo stesso gesto della sostituzione negli integrali, ed è ciò che rende i limiti notevoli così potenti: una volta noto uno "schema", lo si applica a ogni argomento che tende al punto giusto.

### 3.6 Limiti notevoli fondamentali

Alcuni limiti non si riducono ad altri con l'algebra: vanno stabiliti una volta (con la geometria, con le successioni o con gli sviluppi) e poi usati come *mattoni*. I principali, per $x\to 0$:

$$\lim_{x\to 0}\frac{\sin x}{x} = 1, \qquad \lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac12, \qquad \lim_{x\to 0}\frac{\tan x}{x} = 1,$$

$$\lim_{x\to 0}\frac{e^{x}-1}{x} = 1, \qquad \lim_{x\to 0}\frac{\ln(1+x)}{x} = 1, \qquad \lim_{x\to 0}\frac{(1+x)^{\alpha}-1}{x} = \alpha,$$

e, per $x\to\pm\infty$, la definizione stessa del numero di Nepero:
$$\lim_{x\to\pm\infty}\left(1+\frac1x\right)^{x} = e.$$

Il primo (seno su angolo) lo deriviamo nel §5.2; il trattamento completo di tutti questi — con dimostrazioni e asintoti — è nella **[lezione sui limiti notevoli e gli asintoti](analisi-05-limiti-notevoli-asintoti)**. Qui ci interessano come *strumenti* per sciogliere forme indeterminate.

### 3.7 Equivalenze asintotiche

Diciamo che $f$ è **asintoticamente equivalente** a $g$ per $x\to x_0$, e scriviamo $f(x)\sim g(x)$, se
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = 1.$$
Dai limiti notevoli, per $x\to 0$:
$$\sin x \sim x, \quad \tan x \sim x, \quad 1-\cos x \sim \frac{x^2}{2}, \quad e^{x}-1 \sim x, \quad \ln(1+x)\sim x, \quad (1+x)^{\alpha}-1 \sim \alpha x.$$

**Regola d'oro.** Dentro un **prodotto** o un **quoziente** si può sostituire un fattore con un suo equivalente, senza cambiare il limite. **Non** lo si può fare dentro una **somma** o **differenza**: lì il termine trascurato può essere proprio quello che decide il risultato. Esempio del trabocchetto: $\lim_{x\to 0}\frac{\tan x - \sin x}{x^3}$ vale $\frac12$, ma sostituire $\tan x\sim x$ e $\sin x \sim x$ darebbe $\frac{x-x}{x^3} = 0$: sbagliato, perché la differenza $x - x$ cancella proprio l'informazione utile. Le equivalenze sono affilate; vanno maneggiate solo dove la regola le autorizza.

### 3.8 Gerarchia degli infiniti e degli infinitesimi

Per $x\to +\infty$ tutte queste funzioni tendono a $+\infty$, ma a *velocità* diverse. Scrivendo $a \ll b$ per "$a$ è trascurabile rispetto a $b$", cioè $\lim \frac{a}{b} = 0$:

$$\ln x \ll x^{\alpha} \ll x^{n} \ll a^{x} \ll x^{x} \qquad (\alpha,\, n > 0,\ a>1,\ \alpha<n).$$

In parole: il logaritmo cresce più lentamente di ogni potenza; ogni potenza più lentamente di ogni esponenziale; l'esponenziale più lentamente di $x^x$. Nelle forme $\frac{\infty}{\infty}$ **vince la funzione più in alto nella gerarchia**: $\lim_{x\to+\infty}\frac{x^{100}}{e^{x}} = 0$ perché $e^x$ domina. La stessa gerarchia, letta per $x\to 0^+$, ordina gli infinitesimi (le potenze $x^n$ con $n$ grande tendono a $0$ più in fretta).

### 3.9 Regola di De l'Hôpital

**Teorema (De l'Hôpital).** Siano $f, g$ derivabili in un intorno bucato di $x_0$ con $g'(x)\neq 0$ lì, e supponiamo che $\frac{f(x)}{g(x)}$ sia della forma $\frac{0}{0}$ o $\frac{\infty}{\infty}$ per $x\to x_0$. Se esiste (finito o infinito)
$$\lim_{x\to x_0}\frac{f'(x)}{g'(x)} = L, \qquad\text{allora}\qquad \lim_{x\to x_0}\frac{f(x)}{g(x)} = L.$$

**Ipotesi da verificare, sempre, prima di applicare.** (1) La forma è *davvero* $\frac{0}{0}$ o $\frac{\infty}{\infty}$ — non un'altra. (2) $f$ e $g$ sono derivabili vicino a $x_0$. (3) Il limite del rapporto delle *derivate* esiste: se non esiste, la regola **non dice nulla** (non che il limite di partenza non esista). Vale anche per $x_0 = \pm\infty$. Si può **iterare**: se $\frac{f'}{g'}$ è ancora indeterminata e le ipotesi reggono, si riapplica.

**Che cosa fa.** Trasforma il rapporto delle funzioni nel rapporto delle loro *velocità di variazione* (le derivate). Ha senso: una forma $\frac{0}{0}$ è una gara di velocità, e le derivate misurano proprio la velocità. La dimostrazione (§4.4) rende preciso questo, tramite il teorema di Cauchy.

---

## 4. Dimostrazioni

### 4.1 Limite della somma e del prodotto

**Somma.** Che $\lim_{x\to x_0}[f+g] = \ell + m$ è stato dimostrato nella **[lezione ε–δ](analisi-02-limite-epsilon-delta)** (§4.3): dato $\varepsilon$, si chiede a $f$ di stare entro $\varepsilon/2$ da $\ell$ e a $g$ entro $\varepsilon/2$ da $m$; la disuguaglianza triangolare chiude. Lo riprendiamo qui solo come premessa al prodotto.

**Prodotto.** Vogliamo $\lim_{x\to x_0}[f\,g] = \ell m$. Dato $\varepsilon > 0$, dobbiamo rendere piccolo $\lvert f(x)g(x) - \ell m\rvert$. Il trucco è **sommare e sottrarre** un termine ponte $\ell\, g(x)$:
$$f(x)g(x) - \ell m = \big[f(x) - \ell\big]g(x) + \ell\big[g(x) - m\big].$$
Per la disuguaglianza triangolare,
$$\lvert f(x)g(x) - \ell m\rvert \le \lvert f(x) - \ell\rvert\,\lvert g(x)\rvert + \lvert \ell\rvert\,\lvert g(x) - m\rvert.$$
Ora controlliamo i due addendi. Poiché $g(x)\to m$, esiste un intorno in cui $\lvert g(x)\rvert < \lvert m\rvert + 1$ (è limitata vicino a $x_0$). Scegliamo $\delta$ così che valgano insieme, sull'intorno bucato:
$$\lvert f(x) - \ell\rvert < \frac{\varepsilon}{2(\lvert m\rvert + 1)}, \qquad \lvert g(x) - m\rvert < \frac{\varepsilon}{2(\lvert \ell\rvert + 1)}.$$
Allora il primo addendo è $< \frac{\varepsilon}{2(\lvert m\rvert+1)}\cdot(\lvert m\rvert+1) = \frac{\varepsilon}{2}$ e il secondo è $\le \lvert\ell\rvert\cdot\frac{\varepsilon}{2(\lvert\ell\rvert+1)} < \frac{\varepsilon}{2}$. La somma è $< \varepsilon$. $\blacksquare$

**Commento.** Il "$+1$" nei denominatori è un'astuzia per evitare la divisione per zero quando $\ell$ o $m$ sono nulli. Il termine ponte $\ell g(x)$ è la stessa idea del "sommo e sottraggo" che ricorre in tutta l'Analisi: si spezza una differenza difficile in due differenze controllabili.

### 4.2 Teorema del confronto

**Ipotesi:** $g(x)\le f(x)\le h(x)$ vicino a $x_0$, e $g(x), h(x)\to \ell$. **Tesi:** $f(x)\to\ell$.

Dato $\varepsilon > 0$. Poiché $g\to\ell$, esiste $\delta_1$ tale che $0 < \lvert x - x_0\rvert < \delta_1 \Rightarrow \ell - \varepsilon < g(x)$. Poiché $h\to\ell$, esiste $\delta_2$ tale che $0 < \lvert x - x_0\rvert < \delta_2 \Rightarrow h(x) < \ell + \varepsilon$. Sia $\delta = \min\{\delta_1, \delta_2, \delta_3\}$, dove $\delta_3$ delimita l'intorno in cui vale la catena $g\le f\le h$. Allora, per $0 < \lvert x - x_0\rvert < \delta$:
$$\ell - \varepsilon < g(x) \le f(x) \le h(x) < \ell + \varepsilon,$$
cioè $\lvert f(x) - \ell\rvert < \varepsilon$. $\blacksquare$

**Commento.** La dimostrazione è quasi un gioco di incastri: le due disuguaglianze esterne (da $g$ e da $h$) *diventano* la banda $\lvert f - \ell\rvert < \varepsilon$ una volta infilata $f$ in mezzo. Nessuna informazione su $f$ è servita, se non che sta tra i due carabinieri.

### 4.3 Teorema di permanenza del segno

**Ipotesi:** $\lim_{x\to x_0} f(x) = \ell > 0$. **Tesi:** $f > 0$ in un intorno bucato di $x_0$.

Applichiamo la definizione con la scelta furba $\varepsilon = \dfrac{\ell}{2} > 0$. Esiste $\delta$ tale che $0 < \lvert x - x_0\rvert < \delta$ implica $\lvert f(x) - \ell\rvert < \frac{\ell}{2}$, cioè
$$\ell - \frac{\ell}{2} < f(x) < \ell + \frac{\ell}{2} \quad\Longrightarrow\quad f(x) > \frac{\ell}{2} > 0. \qquad \blacksquare$$

**Commento.** Scegliere $\varepsilon = \ell/2$ è la mossa chiave: garantisce che la banda attorno a $\ell$ resti *tutta* sopra lo zero. È lo stesso stile della dimostrazione dell'unicità del limite (lezione 2, §4.1): un $\varepsilon$ tarato sulla mezza distanza.

### 4.4 Regola di De l'Hôpital (caso $\frac00$) via teorema di Cauchy

**Teorema di Cauchy (valor medio generalizzato).** Se $f, g$ sono continue su $[x_0, x]$, derivabili su $(x_0, x)$ e $g'\neq 0$ lì, esiste $c\in(x_0, x)$ con
$$\frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)}.$$

**Applicazione.** Sia $\frac{f}{g}$ della forma $\frac00$ in $x_0$: possiamo *definire* (o è già) $f(x_0) = g(x_0) = 0$. Allora, per ogni $x$ vicino a $x_0$, il teorema di Cauchy dà un $c = c(x)$ tra $x_0$ e $x$ con
$$\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)}.$$
Quando $x\to x_0$, il punto $c$ è schiacciato tra $x_0$ e $x$, quindi $c\to x_0$ (teorema del confronto applicato a $\lvert c - x_0\rvert < \lvert x - x_0\rvert$). Perciò
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = \lim_{x\to x_0}\frac{f'(c)}{g'(c)} = \lim_{c\to x_0}\frac{f'(c)}{g'(c)} = L. \qquad \blacksquare$$

**Commento.** Il teorema di Cauchy fa tutto il lavoro: converte il rapporto delle funzioni (in $x$) nel rapporto delle derivate (in un punto interno $c$). Il resto è il confronto che trascina $c$ verso $x_0$. Si vede anche *perché* serve $g'\neq 0$: è ciò che rende lecita la divisione a destra.

---

## 5. Derivazioni

### 5.1 Rapporti di polinomi all'infinito

**Punto di partenza.** $\displaystyle\lim_{x\to+\infty}\frac{a_p x^{p} + \dots + a_0}{b_q x^{q} + \dots + b_0}$, con $a_p, b_q\neq 0$. È una forma $\frac{\infty}{\infty}$.

**Passaggi.** Raccogliamo la potenza dominante *in alto e in basso*, cioè dividiamo numeratore e denominatore per $x^{q}$ (il grado del denominatore):
$$\frac{a_p x^{p} + \dots}{b_q x^{q} + \dots} = \frac{x^{p}\big(a_p + \tfrac{a_{p-1}}{x} + \dots\big)}{x^{q}\big(b_q + \tfrac{b_{q-1}}{x} + \dots\big)} = x^{\,p-q}\cdot\frac{a_p + o(1)}{b_q + o(1)},$$
dove $o(1)$ raccoglie i termini che tendono a $0$. Passando al limite, la frazione tende a $\frac{a_p}{b_q}$, e il fattore $x^{p-q}$ decide:

**Risultato.**
$$\lim_{x\to+\infty}\frac{P(x)}{Q(x)} = \begin{cases} \pm\infty & p > q \ (\text{numeratore vince, segno di } a_p/b_q),\\[2pt] \dfrac{a_p}{b_q} & p = q,\\[2pt] 0 & p < q \ (\text{denominatore vince}). \end{cases}$$

È la "regola rapida dei gradi massimi": all'infinito conta solo il termine di grado più alto di ciascun polinomio.

### 5.2 Il limite notevole $\dfrac{\sin x}{x}\to 1$ (confronto geometrico)

**Punto di partenza.** Per $0 < x < \frac{\pi}{2}$, confrontiamo tre aree nel cerchio unitario: il triangolo $OAP$, il settore circolare $OAP$, il triangolo $OAT$ (con $T$ sulla tangente). Geometricamente,
$$\underbrace{\tfrac12\sin x}_{\text{triangolo}} \;\le\; \underbrace{\tfrac12 x}_{\text{settore}} \;\le\; \underbrace{\tfrac12\tan x}_{\text{triangolo}}.$$

**Passaggi.** Moltiplico per $2$ e divido per $\sin x > 0$:
$$1 \le \frac{x}{\sin x} \le \frac{1}{\cos x} \quad\Longrightarrow\quad \cos x \le \frac{\sin x}{x} \le 1.$$
Per $x\to 0^+$ si ha $\cos x\to 1$; i due "carabinieri" $\cos x$ e $1$ tendono entrambi a $1$, quindi per il teorema del confronto (§3.4)
$$\lim_{x\to 0^+}\frac{\sin x}{x} = 1.$$
Poiché $\frac{\sin x}{x}$ è **pari** (numeratore e denominatore cambiano entrambi segno), il limite sinistro coincide e il limite bilatero vale $1$. $\blacksquare$

**Risultato e commento.** $\lim_{x\to 0}\frac{\sin x}{x} = 1$. È il capostipite: da esso, per composizione ed equivalenza, discendono $\frac{\tan x}{x}\to 1$, $\frac{1-\cos x}{x^2}\to\frac12$ e l'intera famiglia trigonometrica. La derivazione completa e gli altri notevoli sono nella **[lezione dedicata](analisi-05-limiti-notevoli-asintoti)**.

### 5.3 Ridurre le forme "esotiche" a $\frac00$ o $\frac{\infty}{\infty}$

Le uniche forme che sappiamo attaccare direttamente (con De l'Hôpital o le equivalenze) sono $\frac00$ e $\frac{\infty}{\infty}$. Le altre quattro si *convertono*:

- **$0\cdot\infty$**: scrivi $f\cdot g = \dfrac{f}{1/g}$ (diventa $\frac00$) oppure $\dfrac{g}{1/f}$ (diventa $\frac{\infty}{\infty}$). Scegli la versione che si deriva meglio.
- **$\infty - \infty$**: porta a denominatore comune, oppure razionalizza (se ci sono radici). Il risultato è tipicamente $\frac00$.
- **$1^{\infty},\ 0^{0},\ \infty^{0}$** (potenze $f^{g}$): prendi il logaritmo. Posto $A = \lim f^{g}$, si ha
$$\ln A = \lim\, g\cdot\ln f,$$
che è una forma $0\cdot\infty$: la si converte come sopra, si calcola $\ln A$, e infine $A = e^{\ln A}$.

Questo schema — *tutte le strade portano a $\frac00$* — è la mappa mentale da tenere: davanti a una forma indeterminata, prima la si riconduce a un rapporto, poi si sceglie l'arma (algebra, equivalenze, De l'Hôpital).

---

## 6. Esempi

### Esempio 1 — $\frac00$ per fattorizzazione

$$\lim_{x\to 3}\frac{x^2 - 9}{x - 3}.$$
Sostituendo $3$: $\frac00$. Fattorizzo la differenza di quadrati $x^2 - 9 = (x-3)(x+3)$:
$$= \lim_{x\to 3}\frac{(x-3)(x+3)}{x-3} = \lim_{x\to 3}(x+3) = 6.$$
*Perché è lecito semplificare $x-3$:* nell'intorno bucato è $x\neq 3$, quindi $x - 3\neq 0$ e la cancellazione è legittima (§3.4 di lezione 2, clausola $0 < \lvert x - x_0\rvert$).

### Esempio 2 — $\frac00$ per razionalizzazione

$$\lim_{x\to 0}\frac{\sqrt{1+x} - 1}{x}.$$
Forma $\frac00$. Moltiplico per il coniugato $\sqrt{1+x}+1$:
$$= \lim_{x\to 0}\frac{(1+x) - 1}{x\big(\sqrt{1+x}+1\big)} = \lim_{x\to 0}\frac{1}{\sqrt{1+x}+1} = \frac12.$$
*Nota:* questo è, in anticipo, il valore della derivata di $\sqrt{1+x}$ in $0$; coincide anche con l'equivalenza $(1+x)^{1/2}-1\sim\frac12 x$ (§3.7).

### Esempio 3 — $\frac{\infty}{\infty}$ per gradi massimi

$$\lim_{x\to+\infty}\frac{4x^3 - 2x + 1}{3x^3 + x^2}.$$
Grado uguale in alto e in basso ($p = q = 3$): per il §5.1 il limite è il rapporto dei coefficienti dominanti,
$$= \frac{4}{3}.$$
Verifica dividendo per $x^3$: $\dfrac{4 - 2/x^2 + 1/x^3}{3 + 1/x}\to\dfrac{4}{3}$.

### Esempio 4 — Teorema del confronto con oscillazione

$$\lim_{x\to 0} x\sin\frac1x.$$
La sostituzione non funziona ($\sin\frac1x$ non ha limite: oscilla). Ma $\lvert\sin\frac1x\rvert\le 1$, quindi
$$-\lvert x\rvert \le x\sin\frac1x \le \lvert x\rvert.$$
I carabinieri $\pm\lvert x\rvert$ tendono entrambi a $0$; per il §3.4 il limite è $0$. L'oscillazione infinita è "spenta" dal fattore $x$ che va a zero.

### Esempio 5 — Limite notevole per sostituzione

$$\lim_{x\to 0}\frac{1-\cos x}{x^2}.$$
Uso l'equivalenza $1-\cos x\sim\frac{x^2}{2}$ (§3.7), lecita perché è un *quoziente*:
$$= \lim_{x\to 0}\frac{x^2/2}{x^2} = \frac12.$$
*Alternativa con De l'Hôpital:* $\frac{\sin x}{2x}\to\frac12$ (una sola applicazione). Le due strade concordano.

### Esempio 6 — $0\cdot\infty$ ridotta e risolta

$$\lim_{x\to 0^+} x\ln x.$$
Forma $0\cdot(-\infty)$. La riscrivo come $\dfrac{\ln x}{1/x}$ (forma $\frac{-\infty}{+\infty}$) e applico De l'Hôpital:
$$= \lim_{x\to 0^+}\frac{1/x}{-1/x^2} = \lim_{x\to 0^+}(-x) = 0.$$
Interpretazione con la gerarchia (§3.8): la potenza $x$ "vince" sul logaritmo, quindi il prodotto tende a $0$.

### Esempio 7 — $\infty - \infty$ per razionalizzazione

$$\lim_{x\to+\infty}\big(\sqrt{x^2 + x} - x\big).$$
Forma $\infty - \infty$. Moltiplico e divido per il coniugato $\sqrt{x^2+x}+x$:
$$= \lim_{x\to+\infty}\frac{(x^2 + x) - x^2}{\sqrt{x^2+x}+x} = \lim_{x\to+\infty}\frac{x}{\sqrt{x^2+x}+x}.$$
Divido sopra e sotto per $x > 0$ (con $\sqrt{x^2} = x$):
$$= \lim_{x\to+\infty}\frac{1}{\sqrt{1+1/x}+1} = \frac{1}{1+1} = \frac12.$$
La differenza di due infiniti dà un valore *finito*: il caso più insidioso di $\infty - \infty$.

### Esempio 8 — $1^{\infty}$ e $0^{0}$ con il logaritmo

**(a)** $\displaystyle\lim_{x\to+\infty}\left(1 + \frac3x\right)^{x}$. Forma $1^{\infty}$. Posto $A$ il limite, $\ln A = \lim_{x\to+\infty} x\ln\!\left(1+\frac3x\right)$. Usando $\ln(1+t)\sim t$ con $t = 3/x\to 0$:
$$\ln A = \lim_{x\to+\infty} x\cdot\frac3x = 3 \quad\Longrightarrow\quad A = e^{3}.$$
(Coerente con $\big(1+\frac1u\big)^{u}\to e$ posto $u = x/3$.)

**(b)** $\displaystyle\lim_{x\to 0^+} x^{x}$. Forma $0^{0}$. $\ln A = \lim_{x\to 0^+} x\ln x = 0$ (Esempio 6), quindi $A = e^{0} = 1$.

---

## 7. Visualizzazioni e interattività

### 7.1 Una forma $\frac00$ "riempie il buco"

Il grafico di $\dfrac{e^{x}-1-x}{x^2}$ ha in $x=0$ una forma $\frac00$; il limite vale $\frac12$, e la curva passa senza scosse per quel valore (il buco è "riempibile per continuità"). La retta $y=\frac12$ è il valore verso cui punta.

```plot
{"fn": "(Math.abs(x) > 0.03) ? (Math.exp(x) - 1 - x)/(x*x) : NaN", "fn2": "0.5", "domain": [-3, 3], "yDomain": [-0.2, 1.5], "title": "(e^x - 1 - x)/x^2 -> 1/2 in x=0 (forma 0/0)", "label1": "(e^x-1-x)/x^2", "label2": "y = 1/2"}
```

### 7.2 Il confronto in azione: $x\sin\frac1x$ tra i due carabinieri

La funzione oscilla infinite volte vicino a $0$, ma resta *intrappolata* tra $y = \lvert x\rvert$ e $y = -\lvert x\rvert$, che si chiudono a imbuto verso l'origine. Il limite è schiacciato a $0$.

```plot
{"fn": "x*Math.sin(1/x)", "fn2": "Math.abs(x)", "domain": [-0.6, 0.6], "yDomain": [-0.6, 0.6], "title": "x sin(1/x) intrappolata tra +|x| e -|x|", "label1": "x sin(1/x)", "label2": "y = |x| (carabiniere)"}
```

### 7.3 Manipolabile: la gara di velocità nel limite di Nepero

Muovi il parametro $a$ e osserva $\big(1+\frac{a}{x}\big)^{x}$ per $x$ grande: il valore limite è $e^{a}$ (per $a=1$ vale $e\approx 2{,}718$; per $a=2$ vale $e^2\approx 7{,}39$). È la forma $1^{\infty}$ resa visibile: la base tende a $1$, l'esponente a $\infty$, e il risultato dipende da *come* corrono l'una contro l'altro — cioè da $a$.

```slider
{"fn": "Math.pow(1 + a/x, x)", "pname": "a", "pmin": 0, "pmax": 3, "pstep": 0.5, "pdefault": 1, "plabel": "a  (il limite per x grande vale e^a)", "domain": [1, 30], "yDomain": [0, 25], "title": "(1 + a/x)^x tende a e^a  (forma 1^infinito)"}
```

---

## 8. Errori comuni

**1. Applicare De l'Hôpital senza verificare la forma.** La regola vale *solo* per $\frac00$ e $\frac{\infty}{\infty}$. Su $\lim_{x\to 0}\frac{\sin x}{x+1}$ il denominatore tende a $1$: si sostituisce e si ottiene $\frac{0}{1}=0$. Derivare sopra e sotto darebbe $\frac{\cos 0}{1}=1$, sbagliato. Prima si *classifica* la forma, poi si sceglie lo strumento.

**2. Derivare come un quoziente.** In De l'Hôpital si derivano numeratore e denominatore **separatamente**, ottenendo $\frac{f'}{g'}$ — *non* si applica la regola del quoziente $\frac{f'g-fg'}{g^2}$. Confonderle è un errore che produce risultati completamente errati.

**3. Sostituire equivalenti dentro una somma o differenza.** $\sin x\sim x$ e $\tan x\sim x$ sono validi, ma in $\frac{\tan x - \sin x}{x^3}$ sostituirli dà $\frac{x-x}{x^3}=0$, mentre il valore vero è $\frac12$. Le equivalenze si usano solo dentro prodotti e quozienti (§3.7).

**4. Credere che $0\cdot\infty$, $\infty-\infty$ abbiano un valore fisso.** Sono *indeterminate*: $x\cdot\frac1x\to 1$, $x^2\cdot\frac1x\to\infty$, $\frac{1}{x^2}\cdot x\to 0$ sono tutte $0\cdot\infty$ con esiti diversi. Vanno sempre ricondotte a un rapporto e lavorate.

**5. Fermarsi alla prima applicazione se resta indeterminata.** Se dopo De l'Hôpital la forma è ancora $\frac00$ (o $\frac{\infty}{\infty}$) e le ipotesi reggono, si **riapplica**. Es.: $\frac{e^x-1-x}{x^2}$ richiede due passaggi.

**6. Applicare De l'Hôpital alle potenze $1^{\infty}$, $0^0$, $\infty^0$ direttamente.** Non sono rapporti. Prima il logaritmo ($\lim f^{g} = e^{\lim g\ln f}$), che porta a $0\cdot\infty$; solo dopo il rapporto è trattabile.

**7. Dimenticare che De l'Hôpital può "non decidere".** Se $\lim\frac{f'}{g'}$ *non esiste* (per oscillazione), la regola non è applicabile e **non** implica che $\lim\frac{f}{g}$ non esista. Esempio classico: $\lim_{x\to+\infty}\frac{x+\sin x}{x}=1$ (basta dividere), ma $\frac{f'}{g'} = \frac{1+\cos x}{1}$ non ha limite. Qui serve l'algebra, non De l'Hôpital.

---

## 9. Collegamenti e applicazioni

### Nella biblioteca

- **[Definizione ε–δ del limite](analisi-02-limite-epsilon-delta)** — è la fonte del rigore: ogni legge algebrica di questa lezione (§4.1–4.3) si dimostra da lì.
- **[Continuità e teoremi fondamentali](analisi-04-continuita)** — la "sostituzione diretta" (§3.1) è *esattamente* la definizione di continuità; questa lezione ne è la controparte computazionale.
- **[Limiti notevoli e asintoti](analisi-05-limiti-notevoli-asintoti)** — sviluppa i limiti del §3.6 (dimostrazioni complete) e usa il §5.1 per gli asintoti orizzontali e obliqui.
- **[Derivata: definizione e significato](analisi-06-derivata-definizione)** — la derivata *è* una forma $\frac00$ ($\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}$); qui abbiamo imparato a scioglierla, e la derivata a sua volta alimenta De l'Hôpital (una bella circolarità, risolta dall'ordine logico del §4.4).
- **[Successioni e loro limiti](analisi-16-successioni)** — le stesse leggi algebriche valgono per le successioni; la gerarchia degli infiniti (§3.8) governa la convergenza di rapporti come $\frac{n!}{n^n}$ o $\frac{2^n}{n^2}$.

### Nelle altre discipline

- **Fisica — limite non-relativistico.** L'energia cinetica relativistica $E_k = mc^2(\gamma - 1)$, con $\gamma = (1-v^2/c^2)^{-1/2}$, deve ridursi a $\frac12 mv^2$ per $v\ll c$. Il calcolo è una forma $\infty\cdot 0$ risolta dall'equivalenza $(1+t)^{\alpha}-1\sim\alpha t$ del §3.7.
- **Economia — elasticità.** L'elasticità della domanda è il limite del rapporto tra variazione percentuale della quantità e del prezzo quando entrambe tendono a zero: una forma $\frac00$ che coincide con la derivata logaritmica $\frac{d\ln q}{d\ln p}$. È il calcolo dei limiti applicato alle decisioni di prezzo.
- **Ingegneria del segnale — funzione sinc.** $\operatorname{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ ha in $x=0$ una forma $\frac00$ che vale $1$ per il limite notevole del §5.2; descrive la risposta di un filtro passa-basso ideale e sta dietro ogni campionamento audio/immagine.
- **Informatica — analisi asintotica.** La gerarchia degli infiniti (§3.8) è la stessa che ordina la complessità degli algoritmi: $O(\log n) \ll O(n) \ll O(n^2) \ll O(2^n)$. Confrontare due algoritmi è calcolare un limite di rapporto.

---

## 10. Riepilogo

Abbiamo trasformato il limite da oggetto da *dimostrare* (lezione 2) a oggetto da *calcolare*. La regola generale: prima prova la sostituzione diretta; se produce un simbolo con senso, hai finito; se produce una forma indeterminata, riconducila a $\frac00$ o $\frac{\infty}{\infty}$ e scegli lo strumento.

**Idee fondamentali.**

- Le **leggi algebriche** (§3.1) valgono con limiti *finiti*: rendono il calcolo compositivo.
- Le **sette forme indeterminate** sono le zone in cui le leggi cadono; il valore dipende dalle *velocità* delle funzioni, non dai simboli.
- **Teorema del confronto** e **permanenza del segno** sono i puntelli teorici; il primo è l'arma contro le oscillazioni.
- **Limiti notevoli** ed **equivalenze asintotiche** sono scorciatoie potenti — le equivalenze solo dentro prodotti/quozienti.
- La **gerarchia degli infiniti** decide ogni $\frac{\infty}{\infty}$ per ispezione.
- **De l'Hôpital** converte il rapporto delle funzioni in quello delle derivate; va applicata solo dopo aver verificato le ipotesi, e può iterarsi.

**Schema operativo.**

| Forma di partenza | Prima mossa | Strumento tipico |
|---|---|---|
| valore definito | sostituzione diretta | leggi algebriche (§3.1) |
| $\frac00$ (polinomi) | fattorizza e semplifica | prodotti notevoli |
| $\frac00$ (radici) | razionalizza (coniugato) | — |
| $\frac00$ / $\frac{\infty}{\infty}$ (generale) | equivalenze o De l'Hôpital | §3.7 / §3.9 |
| $\frac{\infty}{\infty}$ (polinomi) | gradi massimi | §5.1 |
| $0\cdot\infty$ | riscrivi come rapporto | poi De l'Hôpital |
| $\infty - \infty$ | denom. comune / coniugato | riduci a $\frac00$ |
| $1^{\infty},\,0^0,\,\infty^0$ | logaritmo | $e^{\lim g\ln f}$ |

---

## 11. Esercizi

> Le soluzioni sono complete e commentate. Prova ciascun esercizio prima di aprirle.

### Introduttivi

**Esercizio 1.** Calcola $\displaystyle\lim_{x\to -2}\frac{x^2 + 5x + 6}{x + 2}$.

<details>
<summary>Soluzione</summary>

Sostituendo $-2$: $\frac00$. Fattorizzo il numeratore ($x^2+5x+6 = (x+2)(x+3)$):
$$\lim_{x\to -2}\frac{(x+2)(x+3)}{x+2} = \lim_{x\to -2}(x+3) = 1.$$
Risultato: $\boxed{1}$. La semplificazione di $x+2$ è lecita perché nell'intorno bucato $x\neq -2$.
</details>

**Esercizio 2.** Calcola $\displaystyle\lim_{x\to 9}\frac{\sqrt{x} - 3}{x - 9}$.

<details>
<summary>Soluzione</summary>

Forma $\frac00$. Razionalizzo con $\sqrt{x}+3$:
$$\frac{\sqrt{x}-3}{x-9}\cdot\frac{\sqrt{x}+3}{\sqrt{x}+3} = \frac{x-9}{(x-9)(\sqrt{x}+3)} = \frac{1}{\sqrt{x}+3}\xrightarrow{x\to 9}\frac{1}{6}.$$
Risultato: $\boxed{\tfrac16}$.
</details>

### Standard

**Esercizio 3.** Calcola $\displaystyle\lim_{x\to 0}\frac{1-\cos x}{x^2}$ in due modi: con l'equivalenza asintotica e con De l'Hôpital.

<details>
<summary>Soluzione</summary>

*Equivalenza:* $1-\cos x\sim\frac{x^2}{2}$, quindi $\frac{x^2/2}{x^2}=\frac12$.

*De l'Hôpital* ($\frac00$): $\frac{\sin x}{2x}$, ancora $\frac00$, di nuovo $\frac{\cos x}{2}\to\frac12$.

Risultato: $\boxed{\tfrac12}$. Le due strade concordano, come deve essere.
</details>

**Esercizio 4.** Calcola $\displaystyle\lim_{x\to+\infty}\frac{x^3 + 2x - 1}{2x^4 - x^2 + 3}$.

<details>
<summary>Soluzione</summary>

Grado del numeratore $3$ < grado del denominatore $4$: per il §5.1 il limite è $0$. Conferma dividendo per $x^4$:
$$\frac{1/x + 2/x^3 - 1/x^4}{2 - 1/x^2 + 3/x^4}\to\frac{0}{2}=0.$$
Risultato: $\boxed{0}$.
</details>

**Esercizio 5.** Dimostra, col teorema del confronto, che $\displaystyle\lim_{x\to 0} x^2\cos\frac1{x} = 0$.

<details>
<summary>Soluzione</summary>

Poiché $\lvert\cos\frac1x\rvert\le 1$, vale $-x^2\le x^2\cos\frac1x\le x^2$. I carabinieri $\pm x^2$ tendono a $0$, quindi per il §3.4 il limite è $\boxed{0}$. Il fattore $x^2$ "spegne" l'oscillazione di $\cos\frac1x$.
</details>

### Avanzati

**Esercizio 6.** Calcola $\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2 + 3x} - \sqrt{x^2 - x}\big)$.

<details>
<summary>Soluzione</summary>

Forma $\infty-\infty$. Razionalizzo con la somma dei due radicali:
$$\frac{(x^2+3x)-(x^2-x)}{\sqrt{x^2+3x}+\sqrt{x^2-x}} = \frac{4x}{\sqrt{x^2+3x}+\sqrt{x^2-x}}.$$
Divido sopra e sotto per $x>0$:
$$= \frac{4}{\sqrt{1+3/x}+\sqrt{1-1/x}}\xrightarrow{x\to+\infty}\frac{4}{1+1}=2.$$
Risultato: $\boxed{2}$.
</details>

**Esercizio 7.** Calcola $\displaystyle\lim_{x\to 0}\frac{\tan x - \sin x}{x^3}$. (Attenzione: è il trabocchetto del §3.7.)

<details>
<summary>Soluzione</summary>

*Non* si possono sostituire $\tan x\sim x$ e $\sin x\sim x$ nella differenza. Raccolgo:
$$\tan x - \sin x = \sin x\left(\frac{1}{\cos x} - 1\right) = \sin x\cdot\frac{1-\cos x}{\cos x}.$$
Quindi
$$\frac{\tan x - \sin x}{x^3} = \frac{\sin x}{x}\cdot\frac{1-\cos x}{x^2}\cdot\frac{1}{\cos x}\xrightarrow{x\to 0} 1\cdot\frac12\cdot 1 = \frac12.$$
Risultato: $\boxed{\tfrac12}$. Ora le equivalenze sono usate dentro un *prodotto*, ed è lecito.
</details>

### Applicativi

**Esercizio 8.** In economia, il fattore di sconto continuo su un anno con tasso $r$ composto $n$ volte è $\big(1+\frac{r}{n}\big)^{n}$. Mostra che, al tendere di $n\to+\infty$ (composizione continua), il fattore tende a $e^{r}$.

<details>
<summary>Soluzione</summary>

Forma $1^{\infty}$. Posto $A$ il limite, $\ln A = \lim_{n\to+\infty} n\ln\!\big(1+\frac{r}{n}\big)$. Con $\ln(1+t)\sim t$ e $t = r/n\to 0$:
$$\ln A = \lim_{n\to+\infty} n\cdot\frac{r}{n} = r \quad\Longrightarrow\quad A = \boxed{e^{r}}.$$
È la formula dell'interesse composto continuo: passando da $n$ finito a "istantaneo", il montante di $1$ euro diventa $e^{r}$. La stessa idea del limite di Nepero (§3.6), applicata alla finanza.
</details>

---

## 12. Fonti

**Fonte primaria (leggi algebriche, confronto, De l'Hôpital):** *OpenStax, Calculus Volume 1*, Cap. 2.3 "The Limit Laws" (leggi algebriche, teorema dello squeeze) e Cap. 4.8 "L'Hôpital's Rule" (regola via teorema di Cauchy, forme indeterminate di potenza tramite logaritmo). Da qui provengono la formulazione delle leggi, la dimostrazione del prodotto col termine ponte (§4.1) e l'impianto di De l'Hôpital (§4.4).

**Fonte appunti-prof (impostazione algebrica, equivalenze, gerarchia):** *A. Villanacci, Notes for Mathematics 1*, Cap. 6. Da qui provengono la **notazione da esame** ($x_0$, $\ell$), l'organizzazione delle sette forme indeterminate come "gara di velocità", le **equivalenze asintotiche** come strumento primario (§3.7), la **gerarchia degli infiniti** (§3.8) e la regola dei gradi massimi (§5.1). Priorità per notazione e metodo, coerentemente con gli esami.

**Differenza tra fonti rilevante per l'apprendimento.** OpenStax e Villanacci risolvono le *stesse* forme indeterminate ma con **strategie prioritarie diverse**, e la differenza conta per come imposterai gli esercizi (e gli esami). OpenStax, di tradizione anglosassone, mette **De l'Hôpital** al centro: è lo strumento di default per $\frac00$ e $\frac{\infty}{\infty}$. Villanacci, come gran parte della tradizione italiana, privilegia le **manipolazioni algebriche, i limiti notevoli e le equivalenze asintotiche**, tenendo De l'Hôpital come arma secondaria (e talvolta, agli scritti, esplicitamente scoraggiata perché "nasconde" la struttura del limite). Non è un disaccordo sul *risultato* — è un disaccordo sul *metodo preferito*, che ha conseguenze concrete: un esercizio come l'Esercizio 7 va idealmente risolto con le equivalenze dentro un prodotto (metodo Villanacci), non con tre applicazioni di De l'Hôpital. Abbiamo presentato entrambe le vie di proposito; per l'esame, la via algebrico-asintotica è quella attesa, e De l'Hôpital resta il controllo di sicurezza.
