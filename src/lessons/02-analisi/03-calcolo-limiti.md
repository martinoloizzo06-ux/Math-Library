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
    note: "priorità per notazione da esame (x₀, ℓ), impostazione algebrica delle forme indeterminate, equivalenze asintotiche come strumento primario; ordine dei metodi allineato alla priorità d'esame (via algebrico-asintotica prima, De l'Hôpital come controllo)"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - plot
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Nella lezione precedente abbiamo pagato un prezzo per il rigore: dimostrare che $\lim_{x\to x_0} f(x) = \ell$ con la definizione $\varepsilon$–$\delta$ richiede, ogni volta, di costruire a mano un $\delta(\varepsilon)$. Va bene per *fondare* la teoria, ma è impraticabile come metodo di *calcolo*. Nessuno, dovendo valutare $\lim_{x\to 2}(x^3 - 5x + 1)$, si mette a cercare bande e strisce: sostituisce $2$ e ottiene $-1$. La domanda di questa lezione è: *perché* ha il diritto di farlo, e cosa succede quando quel diritto viene a mancare.

La risposta ha due facce. La prima è un teorema di **compositività**: il limite di una somma è la somma dei limiti, il limite di un prodotto è il prodotto dei limiti, e così via. Grazie a questo, il limite di quasi ogni funzione "costruita a pezzi" (polinomi, rapporti, radici, esponenziali) si calcola smontandola nei suoi mattoni, valutando i limiti dei mattoni — spesso una banale sostituzione — e rimontando. È la stessa idea che rende utile l'aritmetica: non ricalcoliamo $7 \times 8$ da zero, applichiamo una regola nota.

La seconda faccia è più interessante, ed è il vero cuore del calcolo differenziale. A volte lo smontaggio produce un simbolo *privo di significato*: $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0\cdot\infty$, $\infty - \infty$. Sono le **forme indeterminate**. "Indeterminata" non vuol dire "impossibile": vuol dire che il valore limite *non è deciso* dai soli limiti dei pezzi. Prendi $\frac{0}{0}$: numeratore e denominatore corrono entrambi verso zero, e il rapporto misura *chi corre più veloce*. Se il numeratore è più rapido, il rapporto tende a $0$; se lo è il denominatore, tende a $\infty$; se corrono alla pari, tende a una costante finita. Il simbolo $\frac{0}{0}$ non contiene questa informazione — la velocità sì.

Non è un caso di scuola. La velocità istantanea $\lim_{h\to 0}\frac{s(t_0+h)-s(t_0)}{h}$ è una forma $\frac{0}{0}$; la pendenza di una tangente è una forma $\frac{0}{0}$; l'elasticità di una domanda in economia è una forma $\frac{0}{0}$. Storicamente, imparare a "sbrogliare" questi rapporti — prima con l'astuzia algebrica, poi con la regola che Guillaume de l'Hôpital pubblicò nel 1696 (su risultati di Johann Bernoulli) — è stato il gesto che ha fatto nascere l'Analisi come tecnica di calcolo. Questa lezione raccoglie l'intero arsenale, nell'ordine in cui conviene impugnarlo agli esami: le leggi algebriche e le manipolazioni, i limiti notevoli e le equivalenze asintotiche, la gerarchia delle velocità, i teoremi che puntellano tutto (confronto, permanenza del segno) e, per ultima, la regola di De l'Hôpital come controllo di sicurezza.

---

## 2. Teoria

### 2.1 L'algebra dei limiti

**Teorema (leggi algebriche dei limiti).** Siano $f, g$ definite vicino a $x_0$ (punto di accumulazione del dominio comune), e supponiamo
$$\lim_{x\to x_0} f(x) = \ell \in \mathbb{R}, \qquad \lim_{x\to x_0} g(x) = m \in \mathbb{R}$$
*entrambi finiti*. Allora:

$$\lim_{x\to x_0}\big[f(x) \pm g(x)\big] = \ell \pm m, \qquad \lim_{x\to x_0}\big[f(x)\,g(x)\big] = \ell\, m,$$

$$\lim_{x\to x_0} \frac{f(x)}{g(x)} = \frac{\ell}{m}\quad (\text{se } m \neq 0), \qquad \lim_{x\to x_0}\big[f(x)\big]^{n} = \ell^{\,n}\ (n\in\mathbb{N}),$$

$$\lim_{x\to x_0} \sqrt[n]{f(x)} = \sqrt[n]{\ell}\quad (\ell \ge 0 \text{ se } n \text{ pari}).$$

**Come si legge.** Ogni riga dice la stessa cosa in forme diverse: "il limite *commuta* con l'operazione". Il simbolo $\ell \pm m$ a destra è un numero *già determinato* dai limiti dei pezzi; l'ipotesi cruciale, scritta in chiaro, è che $\ell$ e $m$ siano **finiti** (e $m \neq 0$ per il quoziente). È esattamente quando questa ipotesi cade — un limite infinito, o $m = 0$ — che le regole smettono di valere direttamente e compaiono le forme indeterminate (§2.2).

**Perché ha questa struttura.** La legge della somma non è un assioma: si dimostra dalla definizione $\varepsilon$–$\delta$ (§3.1), spezzando la tolleranza $\varepsilon$ in due metà $\varepsilon/2$, una per $f$ e una per $g$. La legge del prodotto usa lo stesso spirito con un aggiustamento tecnico (i fattori vanno tenuti limitati). Da queste due discendono tutte le altre: la potenza è un prodotto ripetuto, il quoziente è un prodotto per il reciproco.

**Conseguenza operativa (sostituzione diretta).** Se $f$ è una funzione costruita da polinomi, radici, esponenziali e logaritmi con le operazioni sopra, e se $x_0$ appartiene al suo dominio "senza problemi", allora $\lim_{x\to x_0} f(x) = f(x_0)$: basta sostituire. Questa è, anticipando, la definizione di **continuità** (lezione 4). Il calcolo dei limiti diventa interessante *proprio* nei punti in cui la sostituzione fallisce.

*Micro-esempio.* $\lim_{x\to 2}(x^3 - 5x + 1)$: polinomio, sostituzione diretta lecita, $= 8 - 10 + 1 = -1$. Invece $\lim_{x\to 3}\frac{x^2-9}{x-3}$: la sostituzione dà $\frac00$ — la legge del quoziente non si applica ($m = 0$) e serve lavorare la funzione (Esempio 1).

### 2.2 L'aritmetica estesa e le sette forme indeterminate

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
Tre volte la forma è $\frac{0}{0}$, tre risultati diversi. Ecco perché serve *lavorare* la funzione: fattorizzare, razionalizzare, usare equivalenze o — come ultima carta — De l'Hôpital.

```checkpoint
[domanda]
Classifica queste forme, senza calcolare nulla: (a) $\lim_{x\to 0^+}\frac{\cos x}{x}$; (b) $\lim_{x\to +\infty}\frac{\ln x}{x}$; (c) $\lim_{x\to 0^+}(1+x)^{1/x}$. Quali sono indeterminate?
[risposta]
(a) $\frac{1}{0^+} = +\infty$: forma **determinata** (il numeratore tende a $1 \neq 0$), nessun lavoro da fare. (b) $\frac{+\infty}{+\infty}$: **indeterminata** (la risolverà la gerarchia del §2.7: vale $0$). (c) base $\to 1$, esponente $\to +\infty$: forma $1^{\infty}$, **indeterminata** (è il limite di Nepero travestito: vale $e$). Il primo gesto davanti a ogni limite è sempre questo: sostituire mentalmente e classificare.
```

### 2.3 Rapporti di polinomi all'infinito: la regola dei gradi massimi

Il primo attrezzo algebrico per la forma $\frac{\infty}{\infty}$. Consideriamo $\displaystyle\lim_{x\to+\infty}\frac{a_p x^{p} + \dots + a_0}{b_q x^{q} + \dots + b_0}$, con $a_p, b_q\neq 0$.

**Derivazione.** Raccogliamo la potenza dominante *in alto e in basso*:
$$\frac{a_p x^{p} + \dots}{b_q x^{q} + \dots} = \frac{x^{p}\big(a_p + \tfrac{a_{p-1}}{x} + \dots\big)}{x^{q}\big(b_q + \tfrac{b_{q-1}}{x} + \dots\big)} = x^{\,p-q}\cdot\frac{a_p + o(1)}{b_q + o(1)},$$
dove $o(1)$ raccoglie i termini che tendono a $0$ (ognuno è del tipo $\frac{c}{x^k}\to 0$, aritmetica estesa del §2.2). Passando al limite, la frazione tende a $\frac{a_p}{b_q}$ per le leggi algebriche, e il fattore $x^{p-q}$ decide:

$$\lim_{x\to+\infty}\frac{P(x)}{Q(x)} = \begin{cases} \pm\infty & p > q \ (\text{numeratore vince, segno di } a_p/b_q),\\[2pt] \dfrac{a_p}{b_q} & p = q,\\[2pt] 0 & p < q \ (\text{denominatore vince}). \end{cases}$$

È la "regola rapida dei gradi massimi": all'infinito conta solo il termine di grado più alto di ciascun polinomio.

*Micro-esempio.* $\lim_{x\to+\infty}\frac{5x^2 - x}{2x^2 + 7} = \frac{5}{2}$ (gradi uguali, rapporto dei coefficienti dominanti); $\lim_{x\to+\infty}\frac{x^2}{x^3+1} = 0$ (denominatore di grado maggiore).

### 2.4 Cambio di variabile (limite di funzione composta)

**Teorema.** Se $\lim_{x\to x_0} g(x) = t_0$ e $\lim_{t\to t_0} f(t) = \ell$, e $f$ è continua in $t_0$ oppure $g(x)\neq t_0$ vicino a $x_0$, allora
$$\lim_{x\to x_0} f\big(g(x)\big) = \ell.$$

**Uso pratico.** Permette la **sostituzione** $t = g(x)$: ci si riconduce a un limite già noto valutato nella nuova variabile. È lo stesso gesto della sostituzione negli integrali, ed è ciò che rende i limiti notevoli così potenti: una volta noto uno "schema", lo si applica a ogni argomento che tende al punto giusto.

*Micro-esempio.* $\lim_{x\to 0}\frac{\sin(3x)}{3x}$: pongo $t = 3x$ (con $t\to 0$ quando $x \to 0$) e ottengo $\lim_{t\to 0}\frac{\sin t}{t} = 1$. Da cui anche $\lim_{x\to 0}\frac{\sin(3x)}{x} = \lim_{x\to 0} 3\cdot\frac{\sin(3x)}{3x} = 3$.

### 2.5 Limiti notevoli fondamentali

Alcuni limiti non si riducono ad altri con l'algebra: vanno stabiliti una volta (con la geometria, con le successioni o con gli sviluppi) e poi usati come *mattoni*. I principali, per $x\to 0$:

$$\lim_{x\to 0}\frac{\sin x}{x} = 1, \qquad \lim_{x\to 0}\frac{1-\cos x}{x^2} = \frac12, \qquad \lim_{x\to 0}\frac{\tan x}{x} = 1,$$

$$\lim_{x\to 0}\frac{e^{x}-1}{x} = 1, \qquad \lim_{x\to 0}\frac{\ln(1+x)}{x} = 1, \qquad \lim_{x\to 0}\frac{(1+x)^{\alpha}-1}{x} = \alpha,$$

e, per $x\to\pm\infty$, la definizione stessa del numero di Nepero:
$$\lim_{x\to\pm\infty}\left(1+\frac1x\right)^{x} = e.$$

Il primo (seno su angolo) lo dimostriamo nel §3.4; il trattamento completo di tutti questi — con dimostrazioni, la generalizzazione $\big(1+\frac{a}{x}\big)^x \to e^a$ (con grafico manipolabile) e gli asintoti — è nella **[lezione sui limiti notevoli e gli asintoti](analisi-05-limiti-notevoli-asintoti)**. Qui ci interessano come *strumenti* per sciogliere forme indeterminate.

### 2.6 Equivalenze asintotiche

Diciamo che $f$ è **asintoticamente equivalente** a $g$ per $x\to x_0$, e scriviamo $f(x)\sim g(x)$, se
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = 1.$$
Dai limiti notevoli, per $x\to 0$:
$$\sin x \sim x, \quad \tan x \sim x, \quad 1-\cos x \sim \frac{x^2}{2}, \quad e^{x}-1 \sim x, \quad \ln(1+x)\sim x, \quad (1+x)^{\alpha}-1 \sim \alpha x.$$

**Regola d'oro.** Dentro un **prodotto** o un **quoziente** si può sostituire un fattore con un suo equivalente, senza cambiare il limite (la giustificazione è immediata: moltiplicare per $\frac{f}{g}\to 1$ non altera il limite, per la legge del prodotto). **Non** lo si può fare dentro una **somma** o **differenza**: lì il termine trascurato può essere proprio quello che decide il risultato. Esempio del trabocchetto: $\lim_{x\to 0}\frac{\tan x - \sin x}{x^3}$ vale $\frac12$, ma sostituire $\tan x\sim x$ e $\sin x \sim x$ darebbe $\frac{x-x}{x^3} = 0$: sbagliato, perché la differenza $x - x$ cancella proprio l'informazione utile. Le equivalenze sono affilate; vanno maneggiate solo dove la regola le autorizza.

*Micro-esempio.* $\lim_{x\to 0}\frac{\sin(2x)\,\ln(1+x)}{x^2}$: tutto dentro un quoziente di prodotti, quindi sostituisco $\sin(2x)\sim 2x$ e $\ln(1+x)\sim x$: $\frac{2x\cdot x}{x^2} = 2$. Lecito e immediato.

```checkpoint
[domanda]
Nel limite $\lim_{x\to 0}\frac{e^{x}-1-x}{x^2}$ un compagno sostituisce $e^x - 1 \sim x$ e ottiene $\frac{x - x}{x^2} = 0$. Il risultato vero è $\frac12$. Dov'è l'errore?
[risposta]
Ha usato l'equivalenza dentro una **differenza**: $e^x - 1 - x$ è una somma algebrica, non un prodotto o quoziente. L'equivalenza $e^x - 1 \sim x$ dice solo che il rapporto tende a $1$, cioè $e^x - 1 = x + (\text{resto più piccolo di } x)$: sottraendo $x$, sopravvive proprio il resto, che l'equivalenza non descrive. La regola d'oro: equivalenti solo dentro prodotti e quozienti; nelle somme serve altro (algebra fine, De l'Hôpital, o gli sviluppi di Taylor che verranno).
```

### 2.7 Gerarchia degli infiniti e degli infinitesimi

Per $x\to +\infty$ tutte queste funzioni tendono a $+\infty$, ma a *velocità* diverse. Scrivendo $a \ll b$ per "$a$ è trascurabile rispetto a $b$", cioè $\lim \frac{a}{b} = 0$:

$$\ln x \ll x^{\alpha} \ll x^{n} \ll a^{x} \ll x^{x} \qquad (\alpha,\, n > 0,\ a>1,\ \alpha<n).$$

In parole: il logaritmo cresce più lentamente di ogni potenza; ogni potenza più lentamente di ogni esponenziale; l'esponenziale più lentamente di $x^x$. Nelle forme $\frac{\infty}{\infty}$ **vince la funzione più in alto nella gerarchia**. La stessa gerarchia, letta per $x\to 0^+$, ordina gli infinitesimi (le potenze $x^n$ con $n$ grande tendono a $0$ più in fretta).

*Micro-esempio.* $\lim_{x\to+\infty}\frac{x^{100}}{e^{x}} = 0$: per quanto $100$ sia grande, $e^x$ è più in alto nella gerarchia e vince. Simmetricamente $\lim_{x\to+\infty}\frac{x^{0{,}01}}{\ln x} = +\infty$: anche una potenza minuscola batte il logaritmo.

```checkpoint
[domanda]
Senza calcoli, decidi il valore di: (a) $\lim_{x\to+\infty}\frac{2^x}{x^{1000}}$; (b) $\lim_{x\to+\infty}\frac{(\ln x)^{5}}{\sqrt{x}}$.
[risposta]
(a) $+\infty$: esponenziale contro potenza, vince l'esponenziale (è più in alto nella gerarchia), e sta al numeratore. (b) $0$: ogni potenza del logaritmo resta sotto ogni potenza positiva di $x$ — infatti $(\ln x)^5 \ll x^{\alpha}$ per qualunque $\alpha > 0$, e qui $\alpha = \tfrac12$. Regola pratica: individua chi è più in alto nella gerarchia; se sta al denominatore il limite è $0$, se sta al numeratore è $\pm\infty$.
```

### 2.8 Teorema di permanenza del segno

**Teorema.** Se $\lim_{x\to x_0} f(x) = \ell$ con $\ell > 0$, allora esiste un intorno bucato di $x_0$ in cui $f(x) > 0$. (Simmetricamente per $\ell < 0$.)

**Lettura.** Il segno del limite si "propaga" a tutto un intorno: se una funzione tende a un numero positivo, *vicino* al punto è positiva. È il ponte tra un'informazione puntuale (il limite) e un'informazione locale (il segno in un intorno), e sarà usato costantemente — per esempio per dividere per $g(x)$ sapendo che non si annulla, o negli studi di funzione. Dimostrazione nel §3.3.

### 2.9 Teorema del confronto (dei "due carabinieri")

**Teorema (squeeze).** Se in un intorno bucato di $x_0$ vale
$$g(x) \le f(x) \le h(x), \qquad \text{e} \qquad \lim_{x\to x_0} g(x) = \lim_{x\to x_0} h(x) = \ell,$$
allora anche $\lim_{x\to x_0} f(x) = \ell$.

**Lettura e nome.** Due funzioni (i "carabinieri" $g$ e $h$) che convergono allo stesso $\ell$ costringono la funzione in mezzo (l'"arrestato" $f$) a convergere anche lei: non ha via di fuga. È lo strumento principe quando $f$ è troppo complicata per un attacco diretto ma è *incastrata* tra due funzioni semplici — tipicamente quando c'è di mezzo un fattore oscillante ma **limitato**.

*Micro-esempio.* $\lvert\sin\frac1x\rvert \le 1$ dà $-\lvert x\rvert \le x\sin\frac1x \le \lvert x\rvert$: i carabinieri $\pm\lvert x\rvert$ tendono a $0$, quindi $\lim_{x\to 0} x\sin\frac1x = 0$, pur oscillando la funzione infinite volte (grafico all'Esempio 4).

### 2.10 Ridurre le forme "esotiche" a $\frac00$ o $\frac{\infty}{\infty}$

Le uniche forme che sappiamo attaccare direttamente (con l'algebra, le equivalenze o De l'Hôpital) sono $\frac00$ e $\frac{\infty}{\infty}$. Le altre quattro si *convertono*:

- **$0\cdot\infty$**: scrivi $f\cdot g = \dfrac{f}{1/g}$ (diventa $\frac00$) oppure $\dfrac{g}{1/f}$ (diventa $\frac{\infty}{\infty}$). Scegli la versione che si lavora meglio.
- **$\infty - \infty$**: porta a denominatore comune, oppure razionalizza (se ci sono radici). Il risultato è tipicamente $\frac00$.
- **$1^{\infty},\ 0^{0},\ \infty^{0}$** (potenze $f^{g}$): prendi il logaritmo. Posto $A = \lim f^{g}$, si ha
$$\ln A = \lim\, g\cdot\ln f,$$
che è una forma $0\cdot\infty$: la si converte come sopra, si calcola $\ln A$, e infine $A = e^{\ln A}$.

Questo schema — *tutte le strade portano a $\frac00$* — è la mappa mentale da tenere: davanti a una forma indeterminata, prima la si riconduce a un rapporto, poi si sceglie l'arma (algebra, equivalenze, gerarchia; De l'Hôpital in ultima istanza).

### 2.11 Regola di De l'Hôpital (l'ultima carta)

**Teorema (De l'Hôpital).** Siano $f, g$ derivabili in un intorno bucato di $x_0$ con $g'(x)\neq 0$ lì, e supponiamo che $\frac{f(x)}{g(x)}$ sia della forma $\frac{0}{0}$ o $\frac{\infty}{\infty}$ per $x\to x_0$. Se esiste (finito o infinito)
$$\lim_{x\to x_0}\frac{f'(x)}{g'(x)} = L, \qquad\text{allora}\qquad \lim_{x\to x_0}\frac{f(x)}{g(x)} = L.$$

**Ipotesi da verificare, sempre, prima di applicare.** (1) La forma è *davvero* $\frac{0}{0}$ o $\frac{\infty}{\infty}$ — non un'altra. (2) $f$ e $g$ sono derivabili vicino a $x_0$. (3) Il limite del rapporto delle *derivate* esiste: se non esiste, la regola **non dice nulla** (non che il limite di partenza non esista). Vale anche per $x_0 = \pm\infty$. Si può **iterare**: se $\frac{f'}{g'}$ è ancora indeterminata e le ipotesi reggono, si riapplica.

**Che cosa fa.** Trasforma il rapporto delle funzioni nel rapporto delle loro *velocità di variazione* (le derivate). Ha senso: una forma $\frac00$ è una gara di velocità, e le derivate misurano proprio la velocità. La dimostrazione (§3.5) rende preciso questo, tramite il teorema di Cauchy.

**Due avvertenze di metodo.** Primo: la regola usa le derivate, che saranno definite rigorosamente nella **[lezione sulla derivata](analisi-06-derivata-definizione)**; la presentiamo qui perché è lo strumento naturale per le forme indeterminate, e puoi usarla come strumento fin da subito (l'ordine logico è risolto nel §3.5). Secondo: negli scritti d'esame la via attesa è quella **algebrico-asintotica** (fattorizzazioni, notevoli, equivalenze, gerarchia — §2.3–2.7), perché rende visibile la struttura del limite; De l'Hôpital è la verifica di sicurezza o l'ultima risorsa quando l'algebra non morde. Per questo l'abbiamo messa in fondo all'arsenale.

---

## 3. Dimostrazioni

### 3.1 Limite della somma e del prodotto

**Somma.** Che $\lim_{x\to x_0}[f+g] = \ell + m$ è stato dimostrato nella **[lezione ε–δ](analisi-02-limite-epsilon-delta)** (§3.3): dato $\varepsilon$, si chiede a $f$ di stare entro $\varepsilon/2$ da $\ell$ e a $g$ entro $\varepsilon/2$ da $m$; la disuguaglianza triangolare chiude. Lo riprendiamo qui solo come premessa al prodotto.

**Prodotto — l'idea.** Vogliamo $\lim_{x\to x_0}[f\,g] = \ell m$, cioè rendere piccolo $\lvert f(x)g(x) - \ell m\rvert$. Il problema: la differenza mescola *due* variazioni contemporanee ($f$ che si scosta da $\ell$ e $g$ da $m$). Il trucco è **sommare e sottrarre** un termine ponte $\ell\, g(x)$, che le separa:
$$f(x)g(x) - \ell m = \big[f(x) - \ell\big]g(x) + \ell\big[g(x) - m\big].$$
Ora ogni addendo contiene *una sola* variazione: la prima moltiplicata per $g(x)$ (che vicino a $x_0$ è limitata, perché converge), la seconda per la costante $\ell$. Ciascuna si controlla con la definizione di limite; il budget $\varepsilon$ si spezza a metà come per la somma. Il termine ponte è la stessa idea del "sommo e sottraggo" che ricorre in tutta l'Analisi: spezza una differenza difficile in due differenze controllabili.

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi la verifica</summary>

Per la disuguaglianza triangolare,
$$\lvert f(x)g(x) - \ell m\rvert \le \lvert f(x) - \ell\rvert\,\lvert g(x)\rvert + \lvert \ell\rvert\,\lvert g(x) - m\rvert.$$

Controlliamo i due addendi. Poiché $g(x)\to m$, applicando la definizione con tolleranza $1$ esiste un intorno bucato in cui $\lvert g(x) - m\rvert < 1$, dunque $\lvert g(x)\rvert \le \lvert m\rvert + \lvert g(x) - m\rvert < \lvert m\rvert + 1$: $g$ è limitata vicino a $x_0$. Dato $\varepsilon > 0$, scegliamo ora $\delta$ (minimo dei tre raggi coinvolti) così che sull'intorno bucato valgano insieme:
$$\lvert f(x) - \ell\rvert < \frac{\varepsilon}{2(\lvert m\rvert + 1)}, \qquad \lvert g(x) - m\rvert < \frac{\varepsilon}{2(\lvert \ell\rvert + 1)}.$$

Allora il primo addendo è $< \frac{\varepsilon}{2(\lvert m\rvert+1)}\cdot(\lvert m\rvert+1) = \frac{\varepsilon}{2}$ e il secondo è $\le \lvert\ell\rvert\cdot\frac{\varepsilon}{2(\lvert\ell\rvert+1)} < \frac{\varepsilon}{2}$. La somma è $< \varepsilon$. $\blacksquare$

*Nota sul "$+1$" nei denominatori:* è un'astuzia per evitare la divisione per zero quando $\ell$ o $m$ sono nulli, e per far tornare pulite le maggiorazioni.

</details>

### 3.2 Teorema del confronto

**Ipotesi:** $g(x)\le f(x)\le h(x)$ vicino a $x_0$, e $g(x), h(x)\to \ell$. **Tesi:** $f(x)\to\ell$.

**Dimostrazione.** Dato $\varepsilon > 0$. Poiché $g\to\ell$, esiste $\delta_1$ tale che $0 < \lvert x - x_0\rvert < \delta_1 \Rightarrow \ell - \varepsilon < g(x)$ (è metà della definizione di limite per $g$: ci serve solo la disuguaglianza dal basso). Poiché $h\to\ell$, esiste $\delta_2$ tale che $0 < \lvert x - x_0\rvert < \delta_2 \Rightarrow h(x) < \ell + \varepsilon$ (l'altra metà, dall'alto). Sia $\delta = \min\{\delta_1, \delta_2, \delta_3\}$, dove $\delta_3$ delimita l'intorno in cui vale la catena $g\le f\le h$. Allora, per $0 < \lvert x - x_0\rvert < \delta$:
$$\ell - \varepsilon < g(x) \le f(x) \le h(x) < \ell + \varepsilon,$$
cioè $\lvert f(x) - \ell\rvert < \varepsilon$. $\blacksquare$

**Commento.** La dimostrazione è quasi un gioco di incastri: le due disuguaglianze esterne (da $g$ e da $h$) *diventano* la banda $\lvert f - \ell\rvert < \varepsilon$ una volta infilata $f$ in mezzo. Nessuna informazione su $f$ è servita, se non che sta tra i due carabinieri.

### 3.3 Teorema di permanenza del segno

**Ipotesi:** $\lim_{x\to x_0} f(x) = \ell > 0$. **Tesi:** $f > 0$ in un intorno bucato di $x_0$.

**Dimostrazione.** Applichiamo la definizione con la scelta furba $\varepsilon = \dfrac{\ell}{2} > 0$ (lecita perché $\ell > 0$). Esiste $\delta$ tale che $0 < \lvert x - x_0\rvert < \delta$ implica $\lvert f(x) - \ell\rvert < \frac{\ell}{2}$, cioè
$$\ell - \frac{\ell}{2} < f(x) < \ell + \frac{\ell}{2} \quad\Longrightarrow\quad f(x) > \frac{\ell}{2} > 0. \qquad \blacksquare$$

**Commento.** Scegliere $\varepsilon = \ell/2$ è la mossa chiave: garantisce che la banda attorno a $\ell$ resti *tutta* sopra lo zero. È lo stesso stile della dimostrazione dell'unicità del limite (lezione 2, §3.1): un $\varepsilon$ tarato sulla mezza distanza.

### 3.4 Il limite notevole $\dfrac{\sin x}{x}\to 1$ (confronto geometrico)

**Dimostrazione.** Per $0 < x < \frac{\pi}{2}$, confrontiamo tre aree nel cerchio unitario: il triangolo $OAP$, il settore circolare $OAP$, il triangolo $OAT$ (con $T$ sulla tangente). Le tre figure sono una dentro l'altra, quindi le aree sono ordinate:
$$\underbrace{\tfrac12\sin x}_{\text{triangolo}} \;\le\; \underbrace{\tfrac12 x}_{\text{settore}} \;\le\; \underbrace{\tfrac12\tan x}_{\text{triangolo}}.$$

Moltiplico per $2$ e divido per $\sin x > 0$ (positivo nell'intervallo considerato, quindi le disuguaglianze non si ribaltano):
$$1 \le \frac{x}{\sin x} \le \frac{1}{\cos x} \quad\Longrightarrow\quad \cos x \le \frac{\sin x}{x} \le 1,$$
dove il passaggio finale prende i reciproci dei tre membri (tutti positivi), il che inverte l'ordine delle disuguaglianze. Per $x\to 0^+$ si ha $\cos x\to 1$; i due "carabinieri" $\cos x$ e $1$ tendono entrambi a $1$, quindi per il teorema del confronto (§3.2)
$$\lim_{x\to 0^+}\frac{\sin x}{x} = 1.$$
Poiché $\frac{\sin x}{x}$ è **pari** (numeratore e denominatore cambiano entrambi segno per $x \mapsto -x$, e il rapporto resta uguale), il limite sinistro coincide col destro e il limite bilatero vale $1$. $\blacksquare$

**Commento.** È il capostipite: da esso, per composizione ed equivalenza, discendono $\frac{\tan x}{x}\to 1$, $\frac{1-\cos x}{x^2}\to\frac12$ e l'intera famiglia trigonometrica. La derivazione completa della famiglia è nella **[lezione dedicata](analisi-05-limiti-notevoli-asintoti)**.

### 3.5 Regola di De l'Hôpital (caso $\frac00$) via teorema di Cauchy

**Teorema di Cauchy (valor medio generalizzato).** Se $f, g$ sono continue su $[x_0, x]$, derivabili su $(x_0, x)$ e $g'\neq 0$ lì, esiste $c\in(x_0, x)$ con
$$\frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)}.$$

**L'idea.** Se la forma è $\frac00$, possiamo definire (o è già) $f(x_0) = g(x_0) = 0$: allora $\frac{f(x)}{g(x)}$ coincide con il rapporto degli *incrementi* $\frac{f(x)-f(x_0)}{g(x)-g(x_0)}$, e il teorema di Cauchy lo converte nel rapporto delle *derivate* in un punto intermedio $c$. Quando $x$ si schiaccia su $x_0$, anche $c$ (intrappolato in mezzo) ci si schiaccia: il limite del rapporto delle funzioni diventa il limite del rapporto delle derivate.

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi la verifica</summary>

Sia $\frac{f}{g}$ della forma $\frac00$ in $x_0$: poniamo (o è già) $f(x_0) = g(x_0) = 0$, il che non cambia il limite (che ignora il valore nel punto, clausola $0 < \lvert x - x_0\rvert$). Per ogni $x$ vicino a $x_0$, il teorema di Cauchy applicato all'intervallo tra $x_0$ e $x$ dà un $c = c(x)$ strettamente compreso tra i due, con

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)}.$$

(La divisione a sinistra è lecita: $g(x) \neq 0$ vicino a $x_0$, altrimenti per il teorema di Rolle $g'$ si annullerebbe da qualche parte, contro l'ipotesi $g' \neq 0$.)

Quando $x\to x_0$, il punto $c$ è schiacciato tra $x_0$ e $x$: da $\lvert c - x_0\rvert < \lvert x - x_0\rvert$ e dal teorema del confronto segue $c\to x_0$. Poiché per ipotesi $\lim_{t\to x_0}\frac{f'(t)}{g'(t)} = L$, il cambio di variabile (§2.4, con $t = c(x) \neq x_0$) dà

$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = \lim_{x\to x_0}\frac{f'(c(x))}{g'(c(x))} = L. \qquad \blacksquare$$

</details>

**Commento.** Il teorema di Cauchy fa tutto il lavoro: converte il rapporto delle funzioni (in $x$) nel rapporto delle derivate (in un punto interno $c$). Il resto è il confronto che trascina $c$ verso $x_0$. Si vede anche *perché* serve $g'\neq 0$: è ciò che rende lecita la divisione. Il caso $\frac{\infty}{\infty}$ richiede una variante tecnica dello stesso argomento e lo assumiamo senza dimostrazione.

---

## 4. Esempi

### Esempio 1 — $\frac00$ per fattorizzazione

$$\lim_{x\to 3}\frac{x^2 - 9}{x - 3}.$$
Sostituendo $3$: $\frac00$. Fattorizzo la differenza di quadrati $x^2 - 9 = (x-3)(x+3)$:
$$= \lim_{x\to 3}\frac{(x-3)(x+3)}{x-3} = \lim_{x\to 3}(x+3) = 6.$$
*Perché è lecito semplificare $x-3$:* nell'intorno bucato è $x\neq 3$, quindi $x - 3\neq 0$ e la cancellazione è legittima (lezione 2, clausola $0 < \lvert x - x_0\rvert$).

### Esempio 2 — $\frac00$ per razionalizzazione

$$\lim_{x\to 0}\frac{\sqrt{1+x} - 1}{x}.$$
Forma $\frac00$. Moltiplico per il coniugato $\sqrt{1+x}+1$:
$$= \lim_{x\to 0}\frac{(1+x) - 1}{x\big(\sqrt{1+x}+1\big)} = \lim_{x\to 0}\frac{1}{\sqrt{1+x}+1} = \frac12.$$
*Nota:* questo è, in anticipo, il valore della derivata di $\sqrt{1+x}$ in $0$; coincide anche con l'equivalenza $(1+x)^{1/2}-1\sim\frac12 x$ (§2.6).

### Esempio 3 — $\frac{\infty}{\infty}$ per gradi massimi

$$\lim_{x\to+\infty}\frac{4x^3 - 2x + 1}{3x^3 + x^2}.$$
Grado uguale in alto e in basso ($p = q = 3$): per il §2.3 il limite è il rapporto dei coefficienti dominanti,
$$= \frac{4}{3}.$$
Verifica dividendo per $x^3$: $\dfrac{4 - 2/x^2 + 1/x^3}{3 + 1/x}\to\dfrac{4}{3}$.

### Esempio 4 — Teorema del confronto con oscillazione

$$\lim_{x\to 0} x\sin\frac1x.$$
La sostituzione non funziona ($\sin\frac1x$ non ha limite: oscilla). Ma $\lvert\sin\frac1x\rvert\le 1$, quindi
$$-\lvert x\rvert \le x\sin\frac1x \le \lvert x\rvert.$$
I carabinieri $\pm\lvert x\rvert$ tendono entrambi a $0$; per il §2.9 il limite è $0$. L'oscillazione infinita è "spenta" dal fattore $x$ che va a zero.

```plot
{"fn": "x*Math.sin(1/x)", "fn2": "Math.abs(x)", "domain": [-0.6, 0.6], "yDomain": [-0.6, 0.6], "title": "x sin(1/x) intrappolata tra +|x| e -|x|", "label1": "x sin(1/x)", "label2": "y = |x| (carabiniere)"}
```

*Come leggerlo:* la funzione oscilla infinite volte vicino a $0$, ma resta *intrappolata* tra $y = \lvert x\rvert$ e $y = -\lvert x\rvert$, che si chiudono a imbuto verso l'origine. Il limite è schiacciato a $0$.

### Esempio 5 — Limite notevole ed equivalenza (con controllo De l'Hôpital)

$$\lim_{x\to 0}\frac{1-\cos x}{x^2}.$$
Uso l'equivalenza $1-\cos x\sim\frac{x^2}{2}$ (§2.6), lecita perché è un *quoziente*:
$$= \lim_{x\to 0}\frac{x^2/2}{x^2} = \frac12.$$
*Controllo con De l'Hôpital:* forma $\frac00$, derivo sopra e sotto: $\frac{\sin x}{2x}$ — ancora $\frac00$, riapplico: $\frac{\cos x}{2}\to\frac12$. Le due strade concordano; la via asintotica è più rapida e più trasparente.

> ⚠️ **Errore comune — sostituire equivalenti dentro una somma o differenza.** $\sin x\sim x$ e $\tan x\sim x$ sono validi, ma in $\frac{\tan x - \sin x}{x^3}$ sostituirli dà $\frac{x-x}{x^3}=0$, mentre il valore vero è $\frac12$ (Esercizio 7). Le equivalenze si usano solo dentro prodotti e quozienti (§2.6): nella differenza, il termine cancellato è proprio quello che decide.

> ⚠️ **Errore comune — fermarsi alla prima applicazione di De l'Hôpital se la forma resta indeterminata.** Come appena visto, $\frac{\sin x}{2x}$ è ancora $\frac00$: se le ipotesi reggono, si **riapplica**. Un altro caso a due passaggi è $\frac{e^x - 1 - x}{x^2} \to \frac{e^x - 1}{2x} \to \frac{e^x}{2} \to \frac12$.

### Esempio 6 — $0\cdot\infty$ ridotta e risolta

$$\lim_{x\to 0^+} x\ln x.$$
Forma $0\cdot(-\infty)$. La riscrivo come $\dfrac{\ln x}{1/x}$ (forma $\frac{-\infty}{+\infty}$, §2.10) e applico De l'Hôpital:
$$= \lim_{x\to 0^+}\frac{1/x}{-1/x^2} = \lim_{x\to 0^+}(-x) = 0.$$
Interpretazione con la gerarchia (§2.7): la potenza $x$ "vince" sul logaritmo, quindi il prodotto tende a $0$.

> ⚠️ **Errore comune — applicare De l'Hôpital male o a sproposito.** Tre trappole. (1) *Non verificare la forma:* la regola vale solo per $\frac00$ e $\frac{\infty}{\infty}$; su $\lim_{x\to 0}\frac{\sin x}{x+1}$ il denominatore tende a $1$, si sostituisce e viene $0$ — derivare sopra e sotto darebbe $1$, sbagliato. (2) *Derivare come un quoziente:* si derivano numeratore e denominatore **separatamente** ($\frac{f'}{g'}$), *non* con la regola $\frac{f'g-fg'}{g^2}$. (3) *Credere che la regola decida sempre:* se $\lim\frac{f'}{g'}$ non esiste, la regola non dice nulla — $\lim_{x\to+\infty}\frac{x+\sin x}{x}=1$ (basta dividere per $x$), ma $\frac{f'}{g'} = \frac{1+\cos x}{1}$ oscilla senza limite. Lì serve l'algebra, non De l'Hôpital.

### Esempio 7 — $\infty - \infty$ per razionalizzazione

$$\lim_{x\to+\infty}\big(\sqrt{x^2 + x} - x\big).$$
Forma $\infty - \infty$. Moltiplico e divido per il coniugato $\sqrt{x^2+x}+x$:
$$= \lim_{x\to+\infty}\frac{(x^2 + x) - x^2}{\sqrt{x^2+x}+x} = \lim_{x\to+\infty}\frac{x}{\sqrt{x^2+x}+x}.$$
Divido sopra e sotto per $x > 0$ (con $\sqrt{x^2} = x$):
$$= \lim_{x\to+\infty}\frac{1}{\sqrt{1+1/x}+1} = \frac{1}{1+1} = \frac12.$$
La differenza di due infiniti dà un valore *finito*: il caso più insidioso di $\infty - \infty$.

> ⚠️ **Errore comune — credere che $0\cdot\infty$ o $\infty-\infty$ abbiano un valore fisso.** Sono *indeterminate*: $x\cdot\frac1x\to 1$, $x^2\cdot\frac1x\to\infty$, $\frac{1}{x^2}\cdot x\to 0$ sono tutte $0\cdot\infty$ con esiti diversi; e qui $\infty - \infty$ ha dato $\frac12$, ma $\sqrt{x^2+3x}-\sqrt{x^2-x}$ dà $2$ (Esercizio 6) e $x^2 - x$ dà $+\infty$. Vanno sempre ricondotte a un rapporto e lavorate.

### Esempio 8 — $1^{\infty}$ e $0^{0}$ con il logaritmo

**(a)** $\displaystyle\lim_{x\to+\infty}\left(1 + \frac3x\right)^{x}$. Forma $1^{\infty}$. Posto $A$ il limite, $\ln A = \lim_{x\to+\infty} x\ln\!\left(1+\frac3x\right)$. Usando $\ln(1+t)\sim t$ con $t = 3/x\to 0$ (equivalenza dentro un prodotto, lecita):
$$\ln A = \lim_{x\to+\infty} x\cdot\frac3x = 3 \quad\Longrightarrow\quad A = e^{3}.$$
(Coerente con $\big(1+\frac1u\big)^{u}\to e$ posto $u = x/3$; il caso generale $\big(1+\frac{a}{x}\big)^x \to e^a$, con grafico manipolabile, è nella **[lezione sui limiti notevoli](analisi-05-limiti-notevoli-asintoti)**.)

**(b)** $\displaystyle\lim_{x\to 0^+} x^{x}$. Forma $0^{0}$. $\ln A = \lim_{x\to 0^+} x\ln x = 0$ (Esempio 6), quindi $A = e^{0} = 1$.

> ⚠️ **Errore comune — applicare De l'Hôpital direttamente alle forme di potenza $1^{\infty}$, $0^0$, $\infty^0$.** Non sono rapporti: la regola non c'entra. Prima il logaritmo ($\lim f^{g} = e^{\lim g\ln f}$), che le converte in $0\cdot\infty$; poi la conversione a rapporto (§2.10); solo a quel punto gli strumenti per $\frac00$/$\frac{\infty}{\infty}$ diventano applicabili.

---

## 5. Collegamenti e riepilogo

### Nella biblioteca

- **[Definizione ε–δ del limite](analisi-02-limite-epsilon-delta)** — è la fonte del rigore: ogni legge algebrica di questa lezione (§3.1–3.3) si dimostra da lì.
- **[Continuità e teoremi fondamentali](analisi-04-continuita)** — la "sostituzione diretta" (§2.1) è *esattamente* la definizione di continuità; questa lezione ne è la controparte computazionale.
- **[Limiti notevoli e asintoti](analisi-05-limiti-notevoli-asintoti)** — sviluppa i limiti del §2.5 (dimostrazioni complete, incluso $\big(1+\frac{a}{x}\big)^x \to e^a$ con grafico manipolabile) e usa la regola dei gradi massimi (§2.3) per gli asintoti orizzontali e obliqui.
- **[Derivata: definizione e significato](analisi-06-derivata-definizione)** — la derivata *è* una forma $\frac00$ ($\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}$); qui abbiamo imparato a scioglierla, e la derivata a sua volta alimenta De l'Hôpital (una bella circolarità, risolta dall'ordine logico del §3.5).
- **[Successioni e loro limiti](analisi-16-successioni)** — le stesse leggi algebriche valgono per le successioni; la gerarchia degli infiniti (§2.7) governa la convergenza di rapporti come $\frac{n!}{n^n}$ o $\frac{2^n}{n^2}$.

### Nelle altre discipline

- **Fisica — limite non-relativistico.** L'energia cinetica relativistica $E_k = mc^2(\gamma - 1)$, con $\gamma = (1-v^2/c^2)^{-1/2}$, deve ridursi a $\frac12 mv^2$ per $v\ll c$. Il calcolo è una forma $\infty\cdot 0$ risolta dall'equivalenza $(1+t)^{\alpha}-1\sim\alpha t$ del §2.6.
- **Economia — elasticità.** L'elasticità della domanda è il limite del rapporto tra variazione percentuale della quantità e del prezzo quando entrambe tendono a zero: una forma $\frac00$ che coincide con la derivata logaritmica $\frac{d\ln q}{d\ln p}$. È il calcolo dei limiti applicato alle decisioni di prezzo.
- **Ingegneria del segnale — funzione sinc.** $\operatorname{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ ha in $x=0$ una forma $\frac00$ che vale $1$ per il limite notevole del §3.4; descrive la risposta di un filtro passa-basso ideale e sta dietro ogni campionamento audio/immagine.
- **Informatica — analisi asintotica.** La gerarchia degli infiniti (§2.7) è la stessa che ordina la complessità degli algoritmi: $O(\log n) \ll O(n) \ll O(n^2) \ll O(2^n)$. Confrontare due algoritmi è calcolare un limite di rapporto.

### Riepilogo

Abbiamo trasformato il limite da oggetto da *dimostrare* (lezione 2) a oggetto da *calcolare*. La regola generale: prima prova la sostituzione diretta; se produce un simbolo con senso, hai finito; se produce una forma indeterminata, riconducila a $\frac00$ o $\frac{\infty}{\infty}$ e scegli lo strumento — in ordine di priorità: algebra, equivalenze/notevoli, gerarchia, De l'Hôpital.

**Idee fondamentali.**

- Le **leggi algebriche** (§2.1) valgono con limiti *finiti*: rendono il calcolo compositivo.
- Le **sette forme indeterminate** sono le zone in cui le leggi cadono; il valore dipende dalle *velocità* delle funzioni, non dai simboli.
- **Limiti notevoli** ed **equivalenze asintotiche** sono lo strumento primario — le equivalenze solo dentro prodotti/quozienti.
- La **gerarchia degli infiniti** decide ogni $\frac{\infty}{\infty}$ per ispezione.
- **Teorema del confronto** e **permanenza del segno** sono i puntelli teorici; il primo è l'arma contro le oscillazioni.
- **De l'Hôpital** converte il rapporto delle funzioni in quello delle derivate; va applicata solo dopo aver verificato le ipotesi, può iterarsi, ed è l'ultima carta — non la prima.

**Schema operativo.**

| Forma di partenza | Prima mossa | Strumento tipico |
|---|---|---|
| valore definito | sostituzione diretta | leggi algebriche (§2.1) |
| $\frac00$ (polinomi) | fattorizza e semplifica | prodotti notevoli |
| $\frac00$ (radici) | razionalizza (coniugato) | — |
| $\frac00$ / $\frac{\infty}{\infty}$ (generale) | equivalenze e notevoli | §2.5–2.6; De l'Hôpital in riserva (§2.11) |
| $\frac{\infty}{\infty}$ (polinomi) | gradi massimi | §2.3 |
| $\frac{\infty}{\infty}$ (misto log/potenze/exp) | gerarchia | §2.7 |
| $0\cdot\infty$ | riscrivi come rapporto | §2.10 |
| $\infty - \infty$ | denom. comune / coniugato | riduci a $\frac00$ |
| $1^{\infty},\,0^0,\,\infty^0$ | logaritmo | $e^{\lim g\ln f}$ |

---

## 6. Esercizi

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

Risultato: $\boxed{\tfrac12}$. Le due strade concordano, come deve essere; quella asintotica è la via attesa agli scritti.
</details>

**Esercizio 4.** Calcola $\displaystyle\lim_{x\to+\infty}\frac{x^3 + 2x - 1}{2x^4 - x^2 + 3}$.

<details>
<summary>Soluzione</summary>

Grado del numeratore $3$ < grado del denominatore $4$: per il §2.3 il limite è $0$. Conferma dividendo per $x^4$:
$$\frac{1/x + 2/x^3 - 1/x^4}{2 - 1/x^2 + 3/x^4}\to\frac{0}{2}=0.$$
Risultato: $\boxed{0}$.
</details>

**Esercizio 5.** Dimostra, col teorema del confronto, che $\displaystyle\lim_{x\to 0} x^2\cos\frac1{x} = 0$.

<details>
<summary>Soluzione</summary>

Poiché $\lvert\cos\frac1x\rvert\le 1$, vale $-x^2\le x^2\cos\frac1x\le x^2$. I carabinieri $\pm x^2$ tendono a $0$, quindi per il §2.9 il limite è $\boxed{0}$. Il fattore $x^2$ "spegne" l'oscillazione di $\cos\frac1x$.
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

**Esercizio 7.** Calcola $\displaystyle\lim_{x\to 0}\frac{\tan x - \sin x}{x^3}$. (Attenzione: è il trabocchetto del §2.6.)

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
È la formula dell'interesse composto continuo: passando da $n$ finito a "istantaneo", il montante di $1$ euro diventa $e^{r}$. La stessa idea del limite di Nepero (§2.5), applicata alla finanza.
</details>
