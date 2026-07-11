---
id: analisi-02-limite-epsilon-delta
titolo: "Definizione rigorosa ε–δ del limite"
materia: analisi
argomento: "Limiti e continuità"
modulo: "Concetto di limite"
livello: universitario
slug: analisi-02-limite-epsilon-delta

# legacy
subject: analisi
topic_it: "Limiti e continuità"
topic_en: "Limits and continuity"
title_it: "Definizione rigorosa ε–δ del limite"
title_en: "The rigorous ε–δ definition of the limit"
level: blue
order: 2
source_book: "OpenStax Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "Cap. 2.5 (OpenStax); Cap. 6 (Villanacci)"

prerequisiti:
  - analisi-01-limite-intuitivo
  - base-09-valore-assoluto
  - base-25-logica
  - base-08-disequazioni

collegamenti:
  - analisi-01-limite-intuitivo
  - analisi-03-calcolo-limiti
  - analisi-04-continuita
  - analisi-06-derivata-definizione
  - analisi-16-successioni

fonti_integrate:
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 6, §6.1 (Definizioni 316–335, Osservazioni 318–334, Esempi 321–332)"
    note: "priorità per la definizione formale, la notazione da esame (x₀, ℓ, palle Bᵣ, insieme derivato D(f)), la definizione unificata a intorni e il metodo di verifica"
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 2.5 (The Precise Definition of a Limit)"
    note: "impianto geometrico delle bande ε/δ, tecnica della disuguaglianza triangolare, definizioni precise separate per limiti infiniti e all'infinito"
  - id_fonte: villanacci-successioni
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 1 (successioni in ℝ)"
    note: "usata per la caratterizzazione sequenziale del limite (ponte con la lezione sulle successioni)"

versione: "2.0"
data_ultima_rielaborazione: "2026-07-10"
stato: completa

componenti_usati:
  - plot

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Nella lezione precedente abbiamo detto che $\lim_{x\to c} f(x) = L$ significa "quando $x$ si avvicina a $c$, $f(x)$ si avvicina a $L$". È un'immagine potente, ma nascondе una crepa: cosa vuol dire *esattamente* "si avvicina"? Quanto vicino è abbastanza vicino? Due persone che guardano la stessa tabella di valori potrebbero non essere d'accordo su dove stia andando la funzione, e nessun numero finito di righe di tabella può decidere la questione. Finché "avvicinarsi" resta una parola del linguaggio comune, l'Analisi non è una scienza dimostrativa: è un'arte di buone congetture.

Immagina allora un duello tra due matematici. Il primo, il **critico**, fissa una soglia di tolleranza $\varepsilon > 0$ — piccola a piacere, diciamo $\varepsilon = 0{,}001$ — e sfida: "non mi basta che $f(x)$ sia *circa* $L$. Voglio che disti da $L$ meno di $\varepsilon$. Dimostramelo." Il secondo, il **difensore**, deve rispondere consegnando una distanza $\delta > 0$ e una promessa: "se tieni $x$ entro $\delta$ da $c$ (ma diverso da $c$), allora ti garantisco $f(x)$ entro $\varepsilon$ da $L$". Il difensore vince il limite se sa rispondere **a qualunque** $\varepsilon$ il critico osi proporre, per quanto minuscolo.

Questo gioco — apparentemente un cavillo — è la definizione $\varepsilon$–$\delta$, forgiata da **Karl Weierstrass** nell'Ottocento per chiudere due secoli di ambiguità. Newton e Leibniz avevano costruito il calcolo su "infinitesimi", quantità più piccole di ogni numero positivo ma non nulle: strumenti efficacissimi e logicamente indifendibili. Weierstrass li eliminò, sostituendo l'infinitesimo con una sfida quantificata su numeri reali ordinari. Da quel momento "avvicinarsi" smette di essere un'intuizione e diventa un enunciato verificabile, scritto con i soli concetti di **distanza** ($\lvert x - c\rvert$) e **ordine** ($<$) in $\mathbb{R}$.

La domanda di questa lezione è dunque una sola, ma decisiva: come si trasforma l'idea geometrica "la curva tende a $L$" in una frase che si può *dimostrare vera o falsa*, senza appellarsi al disegno? La risposta è la macchina logica più importante di tutta l'Analisi — quella che rende dimostrabili la continuità, la derivata, l'integrale e ogni teorema che verrà dopo.

---

## 2. Prerequisiti

- **Concetto intuitivo di limite** (Analisi, lezione 1, `analisi-01-limite-intuitivo`): l'idea di tendenza che qui rendiamo rigorosa. In particolare la nozione di **punto di accumulazione** del dominio, che qui è la precondizione della definizione.
- **Valore assoluto come distanza** (Base, lezione 9, `base-09-valore-assoluto`): $\lvert x - c\rvert$ è la distanza tra $x$ e $c$ sulla retta; $\lvert x - c\rvert < \delta$ significa "$x$ dista da $c$ meno di $\delta$". Serve anche la **disuguaglianza triangolare** $\lvert a + b\rvert \le \lvert a\rvert + \lvert b\rvert$.
- **Logica dei quantificatori** (Base, lezione 25, `base-25-logica`): i simboli $\forall$ ("per ogni"), $\exists$ ("esiste"), $\Rightarrow$ ("implica"), e soprattutto le regole per **negare** una frase con quantificatori annidati — indispensabili per dimostrare che un limite *non* esiste.
- **Disequazioni** (Base, lezione 8, `base-08-disequazioni`): risolvere $\lvert f(x) - L\rvert < \varepsilon$ significa risolvere un sistema di disequazioni; tutta la parte operativa della definizione si gioca qui.
- **Intorno bucato**: l'insieme $\{x : 0 < \lvert x - c\rvert < \delta\}$, cioè i punti vicini a $c$ ma con $c$ escluso. Il "$0 <$" è ciò che rende il limite indifferente al valore (o all'assenza) di $f$ in $c$.

---

## 3. Teoria completa

Adottiamo qui la **notazione degli appunti del corso** (Villanacci), che ha priorità perché è quella d'esame: il punto in cui si calcola il limite si indica con $x_0$ e il valore limite con $\ell$. Sono esattamente ciò che nella lezione 1 abbiamo chiamato $c$ e $L$: cambia solo il nome delle lettere, non il concetto.

### 3.1 Dalla sfida alla formula

Rendiamo aritmetico il duello del §1. "$f(x)$ dista da $\ell$ meno di $\varepsilon$" si scrive $\lvert f(x) - \ell\rvert < \varepsilon$. "$x$ dista da $x_0$ meno di $\delta$, ma è diverso da $x_0$" si scrive $0 < \lvert x - x_0\rvert < \delta$. La promessa del difensore — "input vicino garantisce output vicino" — è l'implicazione

$$0 < \lvert x - x_0\rvert < \delta \;\Longrightarrow\; \lvert f(x) - \ell\rvert < \varepsilon.$$

Il difensore vince se questa implicazione può essere resa vera *qualunque* sia la sfida $\varepsilon$. Questo "qualunque" è il quantificatore $\forall$; la sua risposta "esiste una distanza che funziona" è $\exists$. Mettendoli in fila si ottiene la definizione.

### 3.2 La definizione ε–δ

**Definizione (limite, Weierstrass).** Sia $f: D \subseteq \mathbb{R} \to \mathbb{R}$ una funzione e sia $x_0$ un **punto di accumulazione** di $D$ (cioè ogni intorno di $x_0$ contiene punti di $D$ diversi da $x_0$; l'insieme di tali punti si denota $D(f)$, il *derivato* di $D$). Diciamo che $\ell \in \mathbb{R}$ è il limite di $f$ per $x$ che tende a $x_0$, e scriviamo

$$\lim_{x\to x_0} f(x) = \ell,$$

se

$$\forall \varepsilon > 0 \;\; \exists\, \delta > 0 \;:\; \forall x \in D,\quad 0 < \lvert x - x_0\rvert < \delta \;\Longrightarrow\; \lvert f(x) - \ell\rvert < \varepsilon.$$

**Ogni simbolo, spiegato.**

- $\varepsilon > 0$ (epsilon) — la **tolleranza sull'output**: quanto lontano da $\ell$ siamo disposti ad accettare $f(x)$. La sceglie il critico; può essere arbitrariamente piccola. È il primo quantificatore: *per ogni* $\varepsilon$.
- $\delta > 0$ (delta) — la **precisione sull'input**: quanto vicino a $x_0$ occorre stare. La trova il difensore *dopo* aver visto $\varepsilon$, e in generale dipende da $\varepsilon$ (§3.4). È il secondo quantificatore: *esiste* $\delta$.
- $0 < \lvert x - x_0\rvert < \delta$ — $x$ appartiene all'**intorno bucato** di $x_0$ di raggio $\delta$. Il "$0 <$" esclude $x = x_0$: il limite non guarda mai il punto, solo i suoi dintorni.
- $\lvert f(x) - \ell\rvert < \varepsilon$ — $f(x)$ cade nell'intorno di $\ell$ di raggio $\varepsilon$.
- $x \in D$ — si considerano solo gli $x$ dove $f$ è definita.

**L'ordine dei quantificatori è tutto.** Prima il critico fissa $\varepsilon$, *poi* il difensore risponde con $\delta$. Scambiare l'ordine — un $\delta$ che vada bene per tutti gli $\varepsilon$ — darebbe una condizione diversa e quasi sempre falsa. La struttura "$\forall\varepsilon\,\exists\delta$" codifica proprio che la risposta può adattarsi alla sfida.

### 3.3 Interpretazione geometrica: le bande

La definizione ha una lettura visiva limpida. Fissato $\varepsilon$, traccia la **banda orizzontale** $\ell - \varepsilon < y < \ell + \varepsilon$ attorno alla quota $\ell$. La definizione chiede: esiste una **banda verticale** $x_0 - \delta < x < x_0 + \delta$ tale che il grafico di $f$, ristretto a quella banda verticale (tolto il punto $x = x_0$), stia *interamente dentro* la banda orizzontale?

Se sì per ogni scelta di banda orizzontale — anche la più sottile — allora $\lim_{x\to x_0} f = \ell$. Restringere $\varepsilon$ (banda orizzontale più stretta) costringe in generale a restringere $\delta$ (banda verticale più stretta): il difensore "stringe la presa" sull'input man mano che il critico alza le pretese sull'output. L'esistenza del limite è la garanzia che questa presa si possa sempre stringere quanto basta.

### 3.4 δ dipende da ε (e non è unico)

Due osservazioni pratiche, entrambe fonte di errori se trascurate.

**$\delta$ è funzione di $\varepsilon$.** Quasi mai un solo $\delta$ va bene per tutti gli $\varepsilon$: a $\varepsilon$ più piccolo corrisponde $\delta$ più piccolo. Per questo si scrive spesso $\delta(\varepsilon)$ o $\delta_\varepsilon$. Trovare il limite significa esibire una *regola* $\varepsilon \mapsto \delta(\varepsilon)$, non un singolo numero.

**$\delta$ non è unico.** Se un certo $\delta$ funziona, allora funziona anche ogni $\delta' $ con $0 < \delta' < \delta$: restringere ancora l'input non può che aiutare (l'intorno bucato più piccolo è contenuto in quello che già funzionava). Perciò nella verifica non serve il $\delta$ "ottimale", ma un $\delta$ *qualsiasi* che vada bene — e questa libertà è ciò che rende le dimostrazioni maneggevoli.

### 3.5 Perché $x_0$ deve essere punto di accumulazione

La richiesta "$x_0 \in D(f)$" non è un tecnicismo. Per studiare come si comporta $f(x)$ quando $x$ si avvicina a $x_0$ *restando nel dominio*, dobbiamo poter trovare punti del dominio arbitrariamente vicini a $x_0$ e diversi da $x_0$: in simboli

$$\forall r > 0,\quad \big(B_r(x_0)\setminus\{x_0\}\big) \cap D \neq \varnothing,$$

che è precisamente la definizione di punto di accumulazione. Se $x_0$ fosse **isolato** (un punto del dominio senza vicini nel dominio), l'intorno bucato potrebbe non contenere alcun $x \in D$: l'implicazione sarebbe vera a vuoto per *ogni* $\ell$, e la nozione di limite perderebbe senso. Escludere i punti isolati è ciò che tiene in piedi anche l'unicità del limite (§4.1).

### 3.6 La formulazione con gli intorni

La definizione a distanze e quella a intorni sono la stessa cosa scritta due volte. Chiamando $B_r(p) := \{x \in \mathbb{R} : \lvert x - p\rvert < r\} = (p - r,\, p + r)$ la **palla** (o intorno) di centro $p$ e raggio $r$, la definizione del §3.2 equivale a:

$$\forall \varepsilon > 0 \;\; \exists\, \delta > 0 \;:\; x \in \big(B_\delta(x_0)\setminus\{x_0\}\big)\cap D \;\Longrightarrow\; f(x) \in B_\varepsilon(\ell).$$

Questa versione sembra solo più elegante, ma ha un vantaggio strutturale enorme che vedremo nel §3.8: parlando di "intorni" invece che di "$\lvert\cdot\rvert < r$", la stessa frase copre anche i casi in cui $x_0$ o $\ell$ sono $\pm\infty$ — basta cambiare cosa si intende per "intorno".

### 3.7 Limiti unilaterali in forma ε–δ

A volte interessa l'avvicinamento da un solo lato. Si restringe il dominio ai punti a destra o a sinistra di $x_0$: $D^+_{x_0} := D \cap (x_0, +\infty)$ e $D^-_{x_0} := D \cap (-\infty, x_0)$.

**Limite destro.** Se $x_0 \in D(D^+_{x_0})$, si dice che $\lim_{x\to x_0^+} f(x) = \ell$ quando

$$\forall \varepsilon > 0 \;\; \exists\, \delta > 0 \;:\; x \in D,\; 0 < x - x_0 < \delta \;\Longrightarrow\; \lvert f(x) - \ell\rvert < \varepsilon.$$

L'unica differenza è $0 < x - x_0 < \delta$ (senza valore assoluto): si guardano solo gli $x > x_0$.

**Limite sinistro.** Simmetricamente, con $0 < x_0 - x < \delta$, cioè gli $x < x_0$.

**Legame col bilatero (teorema di §4.2).** Se $x_0$ è punto di accumulazione da entrambi i lati, allora

$$\lim_{x\to x_0} f(x) = \ell \quad\Longleftrightarrow\quad \lim_{x\to x_0^-} f(x) = \ell \;\wedge\; \lim_{x\to x_0^+} f(x) = \ell.$$

Il bilatero esiste se e solo se i due unilaterali esistono e **coincidono** — la stessa idea vista intuitivamente nella lezione 1, qui pronta per la dimostrazione.

### 3.8 Limiti infiniti e all'infinito: una sola definizione per nove casi

Finora $x_0$ e $\ell$ erano numeri reali. Ma vogliamo dare senso anche a scritture come $\lim_{x\to x_0} f = +\infty$ o $\lim_{x\to +\infty} f = \ell$. La chiave è la formulazione a intorni del §3.6, **estendendo la nozione di intorno ai simboli $\pm\infty$**:

- un intorno di $+\infty$ è una semiretta $(a, +\infty)$, per qualche $a \in \mathbb{R}$;
- un intorno di $-\infty$ è una semiretta $(-\infty, a)$;
- $+\infty$ è punto di accumulazione di $D$ se $D$ è illimitato superiormente (e $-\infty$ se illimitato inferiormente).

Con questa estensione, **una sola frase** copre tutte le combinazioni.

**Definizione unificata (Villanacci, forma a intorni).** Siano $f: D \to \mathbb{R}$ e $x_0 \in \mathbb{R}\cup\{-\infty,+\infty\}$ un punto di accumulazione di $D$. Per $\ell \in \mathbb{R}\cup\{-\infty,+\infty\}$ si scrive $\lim_{x\to x_0} f(x) = \ell$ se

$$\text{per ogni intorno } B(\ell) \text{ di } \ell,\ \exists \text{ un intorno } B(x_0) \text{ di } x_0 \;:\; x \in \big(B(x_0)\cap D\big)\setminus\{x_0\} \Rightarrow f(x) \in B(\ell).$$

Ponendo di volta in volta la giusta forma di intorno per $x_0$ e per $\ell$ (una palla $B_\delta$ se finito, una semiretta se infinito) si ottengono tutti i **nove casi** della tabella seguente, senza scrivere nove definizioni diverse:

| $x_0 \backslash\ \ell$ | $\ell \in \mathbb{R}$ | $\ell = +\infty$ | $\ell = -\infty$ |
|---|---|---|---|
| $x_0 \in \mathbb{R}$ | $\forall\varepsilon\,\exists\delta$ | $\forall M\,\exists\delta$ | $\forall M\,\exists\delta$ |
| $x_0 = +\infty$ | $\forall\varepsilon\,\exists N$ | $\forall M\,\exists N$ | $\forall M\,\exists N$ |
| $x_0 = -\infty$ | $\forall\varepsilon\,\exists N$ | $\forall M\,\exists N$ | $\forall M\,\exists N$ |

Due esempi di "traduzione" dallo schema unificato:

- $\lim_{x\to x_0} f = +\infty$ (con $x_0$ finito): $\ \forall M > 0\ \exists \delta > 0 : 0 < \lvert x - x_0\rvert < \delta \Rightarrow f(x) > M$. La banda orizzontale attorno a $\ell$ diventa la semiretta "sopra $M$": $f$ supera ogni soglia $M$.
- $\lim_{x\to +\infty} f = \ell$ (con $\ell$ finito): $\ \forall \varepsilon > 0\ \exists N > 0 : x > N \Rightarrow \lvert f(x) - \ell\rvert < \varepsilon$. La banda verticale attorno a $x_0$ diventa la semiretta "oltre $N$": basta andare abbastanza a destra.

Questa economia concettuale — un solo principio, nove casi — è il vantaggio della lettura a intorni, ed è il punto in cui gli appunti del corso vanno oltre l'impianto a bande della fonte primaria.

### 3.9 La negazione: quando il limite non è ℓ

Per dimostrare che $\ell$ **non** è il limite, occorre negare la definizione. Negando $\forall\varepsilon\,\exists\delta\,\forall x\,(P \Rightarrow Q)$ si scambiano i quantificatori e si nega l'implicazione:

$$\exists \varepsilon > 0 \;:\; \forall \delta > 0 \;\; \exists x \in D \;:\; 0 < \lvert x - x_0\rvert < \delta \;\wedge\; \lvert f(x) - \ell\rvert \ge \varepsilon.$$

A parole: **esiste una tolleranza $\varepsilon$** così stretta che, **per quanto piccolo** si prenda $\delta$, dentro l'intorno bucato **si trova sempre** un punto $x$ il cui output dista da $\ell$ almeno $\varepsilon$. Questa è la ricetta con cui si smonta un candidato limite sbagliato (Esempio 8) e con cui si prova che certi limiti non esistono affatto (Esercizio 5).

---

## 4. Dimostrazioni

### 4.1 Unicità del limite

**Enunciato.** Se $\lim_{x\to x_0} f(x) = \ell_1$ e $\lim_{x\to x_0} f(x) = \ell_2$, allora $\ell_1 = \ell_2$.

**Dimostrazione.** Supponiamo per assurdo $\ell_1 \neq \ell_2$, e poniamo $\varepsilon = \dfrac{\lvert \ell_1 - \ell_2\rvert}{2} > 0$ (positivo perché i due valori sono distinti). Questa scelta di $\varepsilon$ è il cuore della dimostrazione: è metà della distanza tra i due presunti limiti.

Poiché $\ell_1$ è limite, con questo $\varepsilon$ esiste $\delta_1 > 0$ tale che $0 < \lvert x - x_0\rvert < \delta_1 \Rightarrow \lvert f(x) - \ell_1\rvert < \varepsilon$. Poiché anche $\ell_2$ è limite, esiste $\delta_2 > 0$ tale che $0 < \lvert x - x_0\rvert < \delta_2 \Rightarrow \lvert f(x) - \ell_2\rvert < \varepsilon$. Prendiamo $\delta = \min\{\delta_1, \delta_2\}$, così **entrambe** le implicazioni valgono simultaneamente.

Ora usiamo che $x_0$ è punto di accumulazione: nell'intorno bucato di raggio $\delta$ esiste **almeno un** $x \in D$ (è qui che serve l'ipotesi del §3.5 — senza un punto reale su cui valutare, non potremmo concludere). Per quel $x$, la disuguaglianza triangolare dà

$$\lvert \ell_1 - \ell_2\rvert = \lvert \ell_1 - f(x) + f(x) - \ell_2\rvert \le \lvert f(x) - \ell_1\rvert + \lvert f(x) - \ell_2\rvert < \varepsilon + \varepsilon = 2\varepsilon = \lvert \ell_1 - \ell_2\rvert.$$

Abbiamo ottenuto $\lvert \ell_1 - \ell_2\rvert < \lvert \ell_1 - \ell_2\rvert$, assurdo. Dunque $\ell_1 = \ell_2$. $\blacksquare$

*Commento.* Il trucco "$\varepsilon = $ metà della distanza" ricorre in tutta l'Analisi: si sceglie la tolleranza su misura per far collassare l'ipotesi assurda. Nota che l'unicità *fallisce* se $x_0$ è isolato — un altro motivo per cui il punto di accumulazione è irrinunciabile.

### 4.2 Il bilatero equivale ai due unilaterali

**Enunciato.** Sia $x_0$ punto di accumulazione sia di $D^-_{x_0}$ sia di $D^+_{x_0}$. Allora $\lim_{x\to x_0} f = \ell$ se e solo se $\lim_{x\to x_0^-} f = \ell$ e $\lim_{x\to x_0^+} f = \ell$.

**Dimostrazione ($\Rightarrow$).** Supponiamo $\lim_{x\to x_0} f = \ell$. Dato $\varepsilon > 0$, esiste $\delta > 0$ con $0 < \lvert x - x_0\rvert < \delta \Rightarrow \lvert f(x) - \ell\rvert < \varepsilon$. In particolare l'implicazione vale per gli $x$ che soddisfano $0 < x - x_0 < \delta$ (sono un sottoinsieme dell'intorno bucato): quindi vale il limite destro. Lo stesso $\delta$ serve per $0 < x_0 - x < \delta$: vale il sinistro. Il limite bilatero "contiene" i due unilaterali.

**Dimostrazione ($\Leftarrow$).** Supponiamo i due unilaterali uguali a $\ell$. Dato $\varepsilon > 0$, esistono $\delta_+ > 0$ (per il destro) e $\delta_- > 0$ (per il sinistro) tali che $0 < x - x_0 < \delta_+ \Rightarrow \lvert f(x) - \ell\rvert < \varepsilon$ e $0 < x_0 - x < \delta_- \Rightarrow \lvert f(x) - \ell\rvert < \varepsilon$. Poniamo $\delta = \min\{\delta_+, \delta_-\}$. Se $0 < \lvert x - x_0\rvert < \delta$, allora $x$ è o a destra ($0 < x - x_0 < \delta \le \delta_+$) o a sinistra ($0 < x_0 - x < \delta \le \delta_-$) di $x_0$: in entrambi i casi $\lvert f(x) - \ell\rvert < \varepsilon$. Dunque vale il bilatero. $\blacksquare$

*Commento.* La direzione "$\Leftarrow$" è quella che si usa in pratica per **provare** un limite spezzandolo, e il passo cruciale è ancora il $\min$ dei due delta: un solo raggio che soddisfa entrambe le richieste.

### 4.3 Limite della somma

**Enunciato.** Se $\lim_{x\to x_0} f(x) = L$ e $\lim_{x\to x_0} g(x) = M$, allora $\lim_{x\to x_0}\big(f(x) + g(x)\big) = L + M$.

**Dimostrazione.** Fissiamo $\varepsilon > 0$. L'obiettivo è rendere $\lvert (f(x)+g(x)) - (L+M)\rvert < \varepsilon$. Riorganizziamo con la disuguaglianza triangolare:

$$\lvert (f+g)(x) - (L+M)\rvert = \lvert (f(x)-L) + (g(x)-M)\rvert \le \lvert f(x)-L\rvert + \lvert g(x)-M\rvert.$$

Vogliamo che la somma a destra resti sotto $\varepsilon$. Strategia: chiedere a ciascun addendo di stare sotto $\varepsilon/2$. Poiché $f \to L$, con tolleranza $\varepsilon/2$ esiste $\delta_1 > 0$ tale che $0 < \lvert x - x_0\rvert < \delta_1 \Rightarrow \lvert f(x)-L\rvert < \varepsilon/2$. Poiché $g \to M$, esiste $\delta_2 > 0$ tale che $0 < \lvert x - x_0\rvert < \delta_2 \Rightarrow \lvert g(x)-M\rvert < \varepsilon/2$.

Posto $\delta = \min\{\delta_1, \delta_2\}$, se $0 < \lvert x - x_0\rvert < \delta$ valgono entrambe, e quindi

$$\lvert (f+g)(x) - (L+M)\rvert \le \lvert f(x)-L\rvert + \lvert g(x)-M\rvert < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$

Poiché $\varepsilon$ era arbitrario, il limite della somma è $L + M$. $\blacksquare$

*Commento.* Ecco perché "spezzare $\varepsilon$ in $\varepsilon/2 + \varepsilon/2$" è il gesto più tipico dell'Analisi: distribuisce il budget di errore tra i pezzi. Questa dimostrazione è il primo mattone dell'**algebra dei limiti** che nella lezione 3 useremo come regole pronte all'uso; qui vediamo *da dove nascono*.

---

## 5. Derivazioni

### 5.1 Il metodo generale di verifica (procedura di Villanacci)

Verificare $\lim_{x\to x_0} f = \ell$ dalla definizione segue sempre lo stesso schema, che conviene fissare come procedura:

1. **Parti dalla conclusione desiderata**: scrivi la disuguaglianza $\lvert f(x) - \ell\rvert < \varepsilon$.
2. **Manipolala** algebricamente fino a farla diventare (o implicare) una condizione della forma $\lvert x - x_0\rvert < g(\varepsilon)$, dove $g(\varepsilon) > 0$.
3. **Poni $\delta = g(\varepsilon)$** (verificando $g(\varepsilon) > 0$). Per costruzione, $0 < \lvert x - x_0\rvert < \delta$ implica $\lvert f(x) - \ell\rvert < \varepsilon$.

La difficoltà è tutta al passo 2: trasformare un vincolo sull'output in un vincolo sull'input. Per funzioni lineari è immediato; per funzioni non lineari serve la tecnica del §5.3.

### 5.2 Funzione lineare: $\delta = \varepsilon / \lvert m\rvert$

Deriviamo $\delta$ per $\lim_{x\to x_0}(m x + q)$, con $m \neq 0$. Il candidato limite è $\ell = m x_0 + q$. Partiamo dalla conclusione:

$$\lvert (mx + q) - (m x_0 + q)\rvert = \lvert m(x - x_0)\rvert = \lvert m\rvert\,\lvert x - x_0\rvert.$$

Chiedere che questo sia $< \varepsilon$ equivale, dividendo per $\lvert m\rvert > 0$, a $\lvert x - x_0\rvert < \dfrac{\varepsilon}{\lvert m\rvert}$. Quindi la scelta $\delta = \dfrac{\varepsilon}{\lvert m\rvert}$ funziona esattamente:

$$0 < \lvert x - x_0\rvert < \frac{\varepsilon}{\lvert m\rvert} \;\Longrightarrow\; \lvert (mx+q) - (mx_0+q)\rvert = \lvert m\rvert\,\lvert x - x_0\rvert < \lvert m\rvert\cdot\frac{\varepsilon}{\lvert m\rvert} = \varepsilon.$$

Per $m = 2$, $q = 1$, $x_0 = 3$ si ritrova il $\delta = \varepsilon/2$ derivato intuitivamente nella lezione 1: qui è un caso particolare di una formula generale. Nel caso $m = 0$ (funzione costante) ogni $\delta$ va bene, perché l'output non cambia mai.

### 5.3 Funzioni non lineari: la tecnica "restringi δ, poi minimo"

Per funzioni non lineari, $\lvert f(x) - \ell\rvert$ contiene un fattore che dipende ancora da $x$ e non si lascia isolare pulito. La tecnica standard (Villanacci, Osservazioni 322–323) è **imporre subito un tetto provvisorio a $\delta$** — di solito $\delta \le 1$ — per confinare $x$ in un intervallo limitato, lì maggiorare il fattore fastidioso con una costante, e infine prendere il **minimo** tra il tetto e ciò che serve per $\varepsilon$.

Deriviamola su $\lim_{x\to 3} x^2 = 9$. Partiamo dalla conclusione e facciamo comparire $\lvert x - 3\rvert$ fattorizzando:

$$\lvert x^2 - 9\rvert = \lvert x - 3\rvert\,\lvert x + 3\rvert.$$

Il fattore $\lvert x + 3\rvert$ dipende ancora da $x$: va controllato. **Impongo il tetto provvisorio $\delta \le 1$**, cioè $\lvert x - 3\rvert < 1$, cioè $2 < x < 4$. In quell'intervallo $\lvert x + 3\rvert < 7$ (perché $x < 4 \Rightarrow x + 3 < 7$). Allora, finché $\lvert x - 3\rvert < 1$,

$$\lvert x^2 - 9\rvert = \lvert x - 3\rvert\,\lvert x + 3\rvert < 7\,\lvert x - 3\rvert.$$

Per rendere il tutto $< \varepsilon$ basta chiedere $7\lvert x - 3\rvert < \varepsilon$, cioè $\lvert x - 3\rvert < \varepsilon/7$. Devono valere **entrambi** i vincoli ($\lvert x-3\rvert < 1$ per la maggiorazione e $\lvert x-3\rvert < \varepsilon/7$ per la stima), quindi si prende il minimo:

$$\boxed{\ \delta = \min\Big\{1,\ \frac{\varepsilon}{7}\Big\}\ }.$$

Con questo $\delta$: se $0 < \lvert x - 3\rvert < \delta$ allora $\lvert x - 3\rvert < 1$ (vale la maggiorazione $\lvert x+3\rvert < 7$) e $\lvert x - 3\rvert < \varepsilon/7$, dunque $\lvert x^2 - 9\rvert < 7\cdot \varepsilon/7 = \varepsilon$. Il "$\min$" è la firma di questa tecnica: un vincolo per controllare la nonlinearità, uno per centrare la tolleranza.

---

## 6. Esempi

Gli esempi crescono in difficoltà: dalla verifica lineare più diretta fino alla dimostrazione che un limite proposto è *sbagliato*. In ciascuno indichiamo la **strategia**, poi la verifica formale.

### Esempio 1 — Lineare (il caso base)

Verificare $\lim_{x\to 3}(2x + 1) = 7$.

*Strategia:* funzione lineare, si applica $\delta = \varepsilon/\lvert m\rvert$ con $m = 2$.

$$\lvert (2x+1) - 7\rvert = \lvert 2x - 6\rvert = 2\lvert x - 3\rvert.$$

Scelto $\delta = \varepsilon/2$: se $0 < \lvert x - 3\rvert < \varepsilon/2$, allora $\lvert (2x+1)-7\rvert = 2\lvert x - 3\rvert < 2\cdot \varepsilon/2 = \varepsilon$. $\checkmark$

*Commento:* nessun tetto provvisorio, perché il fattore davanti a $\lvert x - 3\rvert$ è la costante $2$.

### Esempio 2 — Quadratica in $0$ con $\delta = \sqrt{\varepsilon}$ (Villanacci Es. 321)

Verificare $\lim_{x\to 0}(x^2 - 1) = -1$.

*Strategia:* qui $\lvert f(x) - \ell\rvert = \lvert x^2\rvert = \lvert x\rvert^2$ si inverte direttamente, senza bisogno di tetti.

$$\lvert (x^2 - 1) - (-1)\rvert = \lvert x^2\rvert = \lvert x\rvert^2.$$

Chiedere $\lvert x\rvert^2 < \varepsilon$ equivale a $\lvert x\rvert < \sqrt{\varepsilon}$. Scelto $\delta = \sqrt{\varepsilon}$: se $0 < \lvert x\rvert < \sqrt{\varepsilon}$ allora $\lvert x\rvert^2 < \varepsilon$. $\checkmark$

*Commento:* quando la funzione permette di isolare $\lvert x - x_0\rvert$ con un'operazione monotòna (qui la radice), il $\delta$ esce esatto e la tecnica del minimo non serve.

### Esempio 3 — Quadratica fuori dall'origine (tecnica del minimo)

Verificare $\lim_{x\to 3} x^2 = 9$.

*Strategia:* è la derivazione del §5.3; riportiamo solo il risultato applicato.

Con $\delta = \min\{1,\ \varepsilon/7\}$: se $0 < \lvert x - 3\rvert < \delta$, allora $\lvert x + 3\rvert < 7$ e $\lvert x^2 - 9\rvert = \lvert x-3\rvert\lvert x+3\rvert < 7\cdot \varepsilon/7 = \varepsilon$. $\checkmark$

*Commento:* rispetto all'Esempio 2, il centro $x_0 = 3 \neq 0$ fa comparire il fattore $\lvert x + 3\rvert$ da controllare: da qui il tetto $\delta \le 1$.

### Esempio 4 — Razionale con il minimo (Villanacci Es. 324)

Verificare $\lim_{x\to 0}\dfrac{2x^2 - x + 1}{x^2 + 1} = 1$.

*Strategia:* semplificare $\lvert f(x) - 1\rvert$, riconoscere il fattore da controllare, imporre $\delta \le 1$ e maggiorare.

$$\left\lvert \frac{2x^2 - x + 1}{x^2 + 1} - 1\right\rvert = \left\lvert \frac{2x^2 - x + 1 - (x^2 + 1)}{x^2 + 1}\right\rvert = \left\lvert \frac{x^2 - x}{x^2 + 1}\right\rvert = \frac{\lvert x\rvert\,\lvert x - 1\rvert}{x^2 + 1}.$$

Impongo $\delta \le 1$, cioè $\lvert x\rvert < 1$: allora $\lvert x - 1\rvert < 2$ (perché $-1 < x < 1 \Rightarrow -2 < x - 1 < 0$) e inoltre $x^2 + 1 \ge 1$, cioè $\dfrac{1}{x^2+1} \le 1$. Dunque

$$\frac{\lvert x\rvert\,\lvert x - 1\rvert}{x^2 + 1} < \lvert x\rvert \cdot 2 \cdot 1 = 2\lvert x\rvert.$$

Chiedere $2\lvert x\rvert < \varepsilon$ dà $\lvert x\rvert < \varepsilon/2$. Scelto $\delta = \min\{1,\ \varepsilon/2\}$, la stima è garantita. $\checkmark$

*Commento:* tre maggiorazioni combinate ($\lvert x-1\rvert < 2$, $\frac{1}{x^2+1}\le 1$, e infine $\varepsilon/2$). È il livello di verifica che si incontra agli esami: la struttura resta "restringi, maggiora, minimo".

### Esempio 5 — Limite unilaterale con radice

Verificare $\lim_{x\to 0^+}\sqrt{x} = 0$.

*Strategia:* dominio $D = [0, +\infty)$, quindi solo il limite destro ha senso; si isola $\lvert x - 0\rvert$ elevando al quadrato.

Per $x > 0$: $\lvert \sqrt{x} - 0\rvert = \sqrt{x}$. Chiedere $\sqrt{x} < \varepsilon$ equivale a $x < \varepsilon^2$. Scelto $\delta = \varepsilon^2$: se $0 < x < \varepsilon^2$ allora $\sqrt{x} < \varepsilon$. $\checkmark$

*Commento:* qui $\delta = \varepsilon^2$ è *più piccolo* di $\varepsilon$ per $\varepsilon < 1$: la radice "amplifica" la vicinanza, quindi l'input deve stringere di più. Un promemoria che $\delta(\varepsilon)$ non è sempre proporzionale a $\varepsilon$.

### Esempio 6 — Limite infinito (Villanacci Es. 332)

Verificare $\lim_{x\to 0}\dfrac{1}{x^2} = +\infty$.

*Strategia:* usare la definizione del §3.8 per $\ell = +\infty$: dato $M > 0$, trovare $\delta$ tale che $0 < \lvert x\rvert < \delta \Rightarrow \tfrac{1}{x^2} > M$.

$$\frac{1}{x^2} > M \;\Longleftrightarrow\; x^2 < \frac{1}{M} \;\Longleftrightarrow\; \lvert x\rvert < \frac{1}{\sqrt{M}}\quad (x \neq 0).$$

Scelto $\delta = \dfrac{1}{\sqrt{M}}$: se $0 < \lvert x\rvert < \delta$ allora $\tfrac{1}{x^2} > M$. $\checkmark$ La funzione supera *ogni* soglia $M$: asintoto verticale $x = 0$.

*Commento:* il ruolo di $\varepsilon$ è preso da $M$ (la soglia da superare), e "$f(x) > M$" sostituisce la banda orizzontale. È la tabella del §3.8, caso $x_0\in\mathbb{R}$, $\ell = +\infty$.

### Esempio 7 — Limite all'infinito

Verificare $\lim_{x\to +\infty}\dfrac{1}{x} = 0$.

*Strategia:* definizione del §3.8 per $x_0 = +\infty$, $\ell$ finito: dato $\varepsilon > 0$, trovare $N$ tale che $x > N \Rightarrow \lvert \tfrac{1}{x} - 0\rvert < \varepsilon$.

Per $x > 0$: $\left\lvert \tfrac{1}{x}\right\rvert = \tfrac{1}{x}$. Chiedere $\tfrac{1}{x} < \varepsilon$ equivale a $x > \tfrac{1}{\varepsilon}$. Scelto $N = \tfrac{1}{\varepsilon}$: se $x > N$ allora $\tfrac{1}{x} < \varepsilon$. $\checkmark$

*Commento:* qui la "precisione sull'input" non è un raggio $\delta$ attorno a un punto, ma una soglia $N$ oltre la quale spingersi: l'intorno di $+\infty$ è la semiretta $(N, +\infty)$.

### Esempio 8 — Dimostrare che un limite è SBAGLIATO (Villanacci Es. 325)

Mostrare che $\lim_{x\to 0}(x^2 - 1) \neq 1$.

*Strategia:* usare la negazione del §3.9. Basta esibire **un** $\varepsilon$ per cui *nessun* $\delta$ funziona.

Sappiamo (Esempio 2) che il limite vero è $-1$. Il candidato sbagliato $\ell = 1$ dista $2$ dal valore vero, quindi prendiamo $\varepsilon = \tfrac{1}{2}$. Affermiamo: per ogni $\delta > 0$ esiste $x$ nell'intorno bucato con $\lvert (x^2 - 1) - 1\rvert \ge \tfrac{1}{2}$. Infatti $\lvert (x^2 - 1) - 1\rvert = \lvert x^2 - 2\rvert$; scegliendo un $x$ piccolo (per esempio $x = \min\{\delta/2,\ 1/2\}$, così $0 < \lvert x\rvert < \delta$) si ha $x^2 \le 1/4$, dunque $\lvert x^2 - 2\rvert \ge 2 - \tfrac14 = \tfrac74 > \tfrac12$. La condizione della definizione è violata per ogni $\delta$: $\ell = 1$ non è il limite. $\blacksquare$

*Commento:* la negazione non richiede di provare cose per ogni $\varepsilon$ — basta *un* controesempio di tolleranza. È lo strumento con cui, nell'Esercizio 5, si dimostra la non esistenza di un limite.

---

## 7. Visualizzazioni e interattività

La definizione $\varepsilon$–$\delta$ è, per sua natura, un'immagine: due bande che si inseguono. Qui la rendiamo visibile. L'elemento che davvero servirebbe — una **banda $\varepsilon$–$\delta$ manipolabile**, in cui trascinare $\varepsilon$ e vedere $\delta$ adeguarsi in tempo reale — non è ancora disponibile come componente; è tracciato in `SEGNALAZIONI_CONTENUTI.md` ed è lo strumento ideale per interiorizzare il "gioco" tolleranza-precisione descritto nel §3. In attesa di quel componente, usiamo figure statiche che congelano il gioco in istantanee successive.

### 7.1 La banda orizzontale e la striscia verticale

Il grafico seguente mostra la funzione $f(x) = 2x + 1$ vicino a $x_0 = 1$, dove $\ell = 3$. Immagina due linee orizzontali a quota $3 - \varepsilon$ e $3 + \varepsilon$: la definizione chiede che, restringendo $x$ a una striscia verticale abbastanza sottile attorno a $1$, il grafico resti *dentro* la banda orizzontale. Per una retta di pendenza $2$, la striscia giusta ha semiampiezza $\delta = \varepsilon/2$ (Esempio 1).

```plot
{"fn": "2*x + 1", "domain": [-1, 3], "title": "f(x) = 2x + 1 vicino a x0 = 1, ell = 3"}
```

*Come leggerlo:* scegli mentalmente un'altezza $\varepsilon$ (per esempio $0{,}4$); la banda orizzontale va da $2{,}6$ a $3{,}4$. La striscia verticale che tiene il grafico dentro quella banda arriva fino a $\delta = 0{,}2$ da ciascun lato di $x_0 = 1$, cioè da $0{,}8$ a $1{,}2$. Dimezza $\varepsilon$ e dovrai dimezzare $\delta$: la proporzione $\delta = \varepsilon/2$ è la pendenza $2$ letta al contrario.

### 7.2 Perché la pendenza fissa il tasso di cambio $\delta/\varepsilon$

Confronta due rette con pendenze diverse: più la funzione è "ripida", più la striscia verticale deve stringere per stare nella stessa banda orizzontale. Una piccola variazione di $x$ produce una grande variazione di $f(x)$, quindi $\delta$ deve essere più piccolo di $\varepsilon$.

```plot
{"fn": "4*x - 1", "fn2": "0.5*x + 2.5", "domain": [-1, 3], "title": "Pendenza ripida (blu) vs dolce (arancio): stessa banda, delta diversi"}
```

*Come leggerlo:* entrambe passano per $(1, 3)$. Per la retta ripida ($m = 4$) serve $\delta = \varepsilon/4$; per quella dolce ($m = 0{,}5$) basta $\delta = 2\varepsilon$. La regola generale del §5.2 è $\delta = \varepsilon/\lvert m\rvert$: la ripidità è il "cambio" che traduce la tolleranza in uscita nella precisione richiesta in ingresso.

### 7.3 Una parabola: $\delta$ non è più proporzionale a $\varepsilon$

Per $f(x) = x^2$ vicino a $x_0 = 3$ (Esempio 3) la pendenza cambia da punto a punto: attorno a $3$ la funzione sale con pendenza $\approx 6$, quindi $\delta \approx \varepsilon/6$, ma la relazione esatta è $\delta = \min\{1, \varepsilon/7\}$. Il tetto $\delta \le 1$ serve a "congelare" la pendenza locale prima di stimare.

```plot
{"fn": "x^2", "domain": [1.5, 4.5], "title": "f(x) = x^2 vicino a x0 = 3, ell = 9: la pendenza locale detta delta"}
```

*Come leggerlo:* la banda orizzontale attorno a $9$ si riflette in una striscia verticale attorno a $3$ che *non* è simmetrica in modo lineare rispetto a $\varepsilon$: raddoppiando $\varepsilon$ non raddoppia esattamente $\delta$, perché la parabola si incurva. È esattamente il motivo per cui, nella verifica algebrica, compare un $\min$.

### 7.4 Limite infinito: la banda diventa una soglia

Per $\lim_{x\to 0} 1/x^2 = +\infty$ (Esempio 6) non c'è più una banda orizzontale attorno a un valore finito: c'è una **soglia** $M$ da superare. La definizione chiede che, dentro una striscia verticale abbastanza sottile attorno a $0$, il grafico stia *sopra* la retta $y = M$.

```plot
{"fn": "1/(x^2)", "domain": [-2, 2], "title": "f(x) = 1/x^2: supera ogni soglia M dentro |x| < 1/sqrt(M)"}
```

*Come leggerlo:* fissa una soglia alta, diciamo $M = 100$; la striscia $\lvert x\rvert < 1/\sqrt{100} = 0{,}1$ garantisce $1/x^2 > 100$. Alza $M$ e la striscia stringe come $1/\sqrt{M}$: la funzione supera *qualsiasi* soglia, che è il significato preciso di "tende a $+\infty$". Confronta con la tabella del §3.8: qui $M$ gioca il ruolo di $\varepsilon$ e "stare sopra $M$" quello di "stare nella banda".

---

## 8. Errori comuni

**1. Invertire l'ordine dei quantificatori (scegliere $\delta$ prima di $\varepsilon$).**
La definizione è $\forall \varepsilon > 0\ \exists \delta > 0$: è la *sfida* ($\varepsilon$) a venire per prima e la *risposta* ($\delta$) a dipendere da essa. Se scrivessi "$\exists \delta\ \forall \varepsilon$" staresti chiedendo *un solo* $\delta$ buono per tutte le tolleranze contemporaneamente: quasi mai possibile. Ogni verifica corretta comincia con "*dato* $\varepsilon > 0$..." e *poi* costruisce $\delta$. Se il tuo $\delta$ non contiene $\varepsilon$ da qualche parte, quasi certamente hai sbagliato.

**2. Credere che $\delta$ sia unico o che debba essere "il più grande possibile".**
Qualsiasi $\delta$ che funziona va bene, e ogni valore più piccolo funziona ancora (§3.4). Non esiste "il" $\delta$ giusto: $\delta = \varepsilon/2$ e $\delta = \varepsilon/3$ sono entrambi corretti per una retta di pendenza $2$. Non perdere tempo a ottimizzare: ti basta *un* testimone.

**3. Dimenticare la clausola $0 < \lvert x - x_0\rvert$.**
Il limite parla del comportamento *vicino* a $x_0$, mai *in* $x_0$. Se lasci cadere lo "$0 <$", stai includendo il punto stesso e cambi la nozione: diventerebbe (quasi) la continuità, non il limite. È proprio la clausola che permette a $\lim_{x\to 0}\frac{\sin x}{x} = 1$ di esistere anche se la funzione non è definita in $0$.

**4. Pretendere che $f(x_0)$ esista o valga $\ell$.**
Il valore $f(x_0)$ è *irrilevante* per il limite: può non esistere, o esistere e valere tutt'altro. Questo scollamento tra "limite" e "valore" è precisamente ciò che la continuità (lezione 4) richiederà di *colmare*. Confondere i due è l'errore concettuale più diffuso.

**5. "Verificare" un limite con un solo $\varepsilon$ (o con una tabella).**
Mostrare che $\delta$ esiste per $\varepsilon = 0{,}1$ non dimostra nulla: la definizione quantifica su *tutti* gli $\varepsilon$. Una verifica valida esibisce una *formula* $\delta(\varepsilon)$ — o una regola come $\delta = \min\{1, \varepsilon/7\}$ — che risponde a ogni sfida in blocco. Le tabelle di valori suggeriscono, non provano.

**6. Confondersi con la negazione quando si *smentisce* un limite.**
Per dimostrare che $\ell$ *non* è il limite non devi mostrare "per ogni $\varepsilon$ ogni $\delta$ fallisce": basta **un** $\varepsilon$ per cui *ogni* $\delta$ fallisce (§3.9, Esempio 8). Rovesciare male i quantificatori qui porta a "dimostrazioni" o troppo deboli (un $\delta$ che fallisce) o impossibilmente forti.

**7. Trattare i limiti infiniti come se $+\infty$ fosse un numero.**
In $\lim_{x\to 0} 1/x^2 = +\infty$ il simbolo $+\infty$ *non* è un valore raggiunto: è un modo di dire "supera ogni soglia $M$". Non c'è nessuna banda $\lvert f(x) - (+\infty)\rvert < \varepsilon$ da scrivere — non avrebbe senso. La definizione giusta è quella a soglia del §3.8.

---

## 9. Collegamenti e applicazioni

### Nella biblioteca

Questa lezione è la spina dorsale formale di tutto ciò che segue.

- **[Concetto di limite — approccio intuitivo](analisi-01-limite-intuitivo)** — la lezione che questa rende rigorosa: l'immagine "$x$ vicino a $c$ implica $f(x)$ vicino a $L$" diventa qui la coppia di quantificatori $\forall\varepsilon\,\exists\delta$.
- **[Algebra dei limiti e forme indeterminate](analisi-03-calcolo-limiti)** — i teoremi (somma, prodotto, quoziente) che permettono di calcolare limiti *senza* tornare ogni volta all'$\varepsilon$–$\delta$ si *dimostrano* con l'$\varepsilon$–$\delta$: il §4.3 (limite della somma) è il primo mattone.
- **[Continuità e teoremi fondamentali](analisi-04-continuita)** — la continuità in $x_0$ è la coincidenza $\lim_{x\to x_0} f(x) = f(x_0)$: la stessa definizione, ma *senza* la clausola $0 < \lvert x - x_0\rvert$ e con $\ell$ obbligato a valere $f(x_0)$.
- **[Derivata: definizione e significato](analisi-06-derivata-definizione)** — la derivata *è* un limite ($\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}$); ogni volta che deriviamo stiamo, sotto il cofano, usando questa definizione.
- **[Successioni e loro limiti](analisi-16-successioni)** — la caratterizzazione sequenziale (§3.6, ponte con Villanacci-successioni): $\lim_{x\to x_0} f(x) = \ell$ se e solo se $f(x_n)\to \ell$ per *ogni* successione $x_n\to x_0$. È il legame tra limiti di funzioni e limiti di successioni.

### Nelle altre discipline

L'$\varepsilon$–$\delta$ non è un tecnicismo interno all'Analisi: è il modello matematico della frase "una tolleranza sull'uscita si può garantire controllando l'ingresso".

- **Ingegneria e controllo di qualità.** Un processo produce pezzi la cui misura dev'essere entro $\varepsilon$ dal valore nominale. La domanda "quanto preciso devo tenere l'input ($\delta$) per garantire l'output entro $\varepsilon$?" *è* la definizione di limite (e di continuità). Il rapporto $\delta/\varepsilon$ è la sensibilità del processo.
- **Analisi numerica.** La stabilità di un algoritmo è la richiesta che piccoli errori nei dati ($\delta$) producano piccoli errori nel risultato ($\varepsilon$). Un problema "mal condizionato" è uno in cui nessun $\delta$ ragionevole garantisce un $\varepsilon$ piccolo: la funzione è "quasi discontinua" numericamente.
- **Economia.** La continuità di funzioni di domanda, utilità e produzione — assunta per garantire l'esistenza di equilibri e ottimi (teoremi di punto fisso, Weierstrass) — è, alla base, un enunciato $\varepsilon$–$\delta$: piccole variazioni di prezzo producono piccole variazioni di quantità. Senza continuità, molti risultati di esistenza dell'equilibrio crollano.
- **Fisica.** L'idea che una misura sperimentale approssimi un valore "vero" con precisione arbitraria a patto di raffinare abbastanza lo strumento è l'$\varepsilon$–$\delta$ tradotto in laboratorio: $\varepsilon$ è la precisione voluta, $\delta$ la finezza dello strumento necessaria.

---

## 10. Riepilogo

Abbiamo trasformato l'intuizione "$f(x)$ si avvicina a $\ell$ quando $x$ si avvicina a $x_0$" in un enunciato che una macchina potrebbe verificare, eliminando ogni ambiguità sul significato di "avvicinarsi".

**Idee fondamentali.**

- Il limite è un **gioco a due mosse**: l'avversario sceglie una tolleranza $\varepsilon > 0$ sull'uscita; tu devi rispondere con una precisione $\delta > 0$ sull'ingresso che la garantisca. Vinci sempre $\iff$ il limite è $\ell$.
- L'**ordine dei quantificatori è tutto**: $\forall \varepsilon\, \exists \delta$, con $\delta$ funzione di $\varepsilon$. Non il contrario.
- La clausola $0 < \lvert x - x_0\rvert$ **esclude il punto**: il limite ignora, per costruzione, cosa fa (o non fa) la funzione *in* $x_0$.
- $x_0$ deve essere un **punto di accumulazione** del dominio, altrimenti la definizione è vuota.
- La **stessa forma** copre limiti finiti, unilaterali, infiniti e all'infinito, sostituendo "intorno bucato" e "banda" con l'intorno appropriato (tabella del §3.8).
- Per **smentire** un limite basta esibire un singolo $\varepsilon$ imbattibile (negazione, §3.9).

**Formule e schemi chiave.**

$$\lim_{x\to x_0} f(x) = \ell \iff \forall \varepsilon > 0\ \exists \delta > 0 : \ 0 < \lvert x - x_0\rvert < \delta \Rightarrow \lvert f(x) - \ell\rvert < \varepsilon.$$

| Situazione | Precisione input | Tolleranza output |
|---|---|---|
| Limite finito in $x_0$ finito | $0 < \lvert x - x_0\rvert < \delta$ | $\lvert f(x) - \ell\rvert < \varepsilon$ |
| Limite $+\infty$ in $x_0$ finito | $0 < \lvert x - x_0\rvert < \delta$ | $f(x) > M$ |
| Limite finito per $x\to +\infty$ | $x > N$ | $\lvert f(x) - \ell\rvert < \varepsilon$ |

**Metodo di verifica (linea guida).** Dato $\varepsilon$: (1) parti da $\lvert f(x) - \ell\rvert$ e semplifica; (2) fai comparire il fattore $\lvert x - x_0\rvert$; (3) se resta un fattore variabile, imponi un tetto provvisorio $\delta \le 1$ e maggioralo con una costante $K$; (4) chiedi $K\lvert x - x_0\rvert < \varepsilon$ e ricava $\delta = \min\{1,\ \varepsilon/K\}$.

---

## 11. Esercizi

> Le soluzioni sono complete e commentate. Prova ciascun esercizio da solo prima di aprirle.

### Introduttivi

**Esercizio 1.** Usando la definizione, dimostra che $\lim_{x\to 2}(3x - 1) = 5$. Trova esplicitamente $\delta(\varepsilon)$.

<details>
<summary>Soluzione</summary>

Dato $\varepsilon > 0$. Calcolo $\lvert (3x - 1) - 5\rvert = \lvert 3x - 6\rvert = 3\lvert x - 2\rvert$. Voglio $3\lvert x - 2\rvert < \varepsilon$, cioè $\lvert x - 2\rvert < \varepsilon/3$. **Scelgo $\delta = \varepsilon/3$.** Verifica: se $0 < \lvert x - 2\rvert < \delta = \varepsilon/3$, allora $\lvert(3x-1)-5\rvert = 3\lvert x-2\rvert < 3\cdot \varepsilon/3 = \varepsilon$. $\blacksquare$

*Nota:* è il caso lineare del §5.2 con pendenza $m = 3$: $\delta = \varepsilon/\lvert m\rvert = \varepsilon/3$.
</details>

**Esercizio 2.** Per $f(x) = 7$ (funzione costante), dimostra che $\lim_{x\to x_0} f(x) = 7$ per ogni $x_0$. Cosa ha di speciale la scelta di $\delta$?

<details>
<summary>Soluzione</summary>

Dato $\varepsilon > 0$. Ho $\lvert f(x) - 7\rvert = \lvert 7 - 7\rvert = 0 < \varepsilon$ **sempre**, qualunque sia $x$. Quindi *qualsiasi* $\delta > 0$ funziona: posso scegliere $\delta = 1$ (o $\delta = 10^6$). $\blacksquare$

*Commento:* è il raro caso in cui $\delta$ non dipende da $\varepsilon$, perché l'uscita non varia affatto. Mostra che "$\delta$ dipende da $\varepsilon$" è la norma, non un obbligo logico: la dipendenza c'è quando la funzione effettivamente cambia.
</details>

### Standard

**Esercizio 3.** Dimostra che $\lim_{x\to 4}\sqrt{x} = 2$. (Suggerimento: razionalizza moltiplicando per $\frac{\sqrt{x}+2}{\sqrt{x}+2}$.)

<details>
<summary>Soluzione</summary>

Dato $\varepsilon > 0$, lavoro su $D = [0,+\infty)$. Razionalizzo:
$$\lvert \sqrt{x} - 2\rvert = \left\lvert \frac{(\sqrt{x}-2)(\sqrt{x}+2)}{\sqrt{x}+2}\right\rvert = \frac{\lvert x - 4\rvert}{\sqrt{x}+2}.$$
Poiché $\sqrt{x} \ge 0$, si ha $\sqrt{x} + 2 \ge 2$, quindi $\frac{1}{\sqrt{x}+2} \le \frac12$. Dunque
$$\lvert \sqrt{x} - 2\rvert = \frac{\lvert x-4\rvert}{\sqrt{x}+2} \le \frac{\lvert x - 4\rvert}{2}.$$
Chiedo $\frac{\lvert x-4\rvert}{2} < \varepsilon$, cioè $\lvert x - 4\rvert < 2\varepsilon$. **Scelgo $\delta = 2\varepsilon$.** $\blacksquare$

*Nota:* la maggiorazione $\sqrt{x}+2 \ge 2$ vale su *tutto* il dominio, quindi qui non serve nemmeno il tetto $\delta \le 1$: la stima è già uniforme.
</details>

**Esercizio 4.** Dimostra che $\lim_{x\to 2} x^2 = 4$ trovando $\delta = \min\{1, \varepsilon/K\}$ per un opportuno $K$.

<details>
<summary>Soluzione</summary>

Dato $\varepsilon > 0$. Ho $\lvert x^2 - 4\rvert = \lvert x - 2\rvert\,\lvert x + 2\rvert$; devo controllare il fattore $\lvert x + 2\rvert$. **Impongo $\delta \le 1$:** allora $\lvert x - 2\rvert < 1 \Rightarrow 1 < x < 3 \Rightarrow 3 < x + 2 < 5$, quindi $\lvert x + 2\rvert < 5$. Perciò
$$\lvert x^2 - 4\rvert = \lvert x-2\rvert\,\lvert x+2\rvert < 5\lvert x - 2\rvert.$$
Chiedo $5\lvert x - 2\rvert < \varepsilon$, cioè $\lvert x-2\rvert < \varepsilon/5$. **Scelgo $\delta = \min\{1, \varepsilon/5\}$** (qui $K = 5$). Verifica: con questo $\delta$ valgono *entrambe* le stime ($\lvert x+2\rvert < 5$ e $\lvert x-2\rvert < \varepsilon/5$), quindi il prodotto è $< \varepsilon$. $\blacksquare$

*Confronto con l'Esempio 3:* lì $x_0 = 3$ dava $K = 7$; qui $x_0 = 2$ dà $K = 5$. Il valore di $K$ dipende dalla pendenza locale di $x^2$, cioè circa $2x_0$ (più il margine del tetto).
</details>

### Avanzati

**Esercizio 5.** Dimostra che $\lim_{x\to 0}\,\operatorname{sgn}(x)$ **non esiste**, dove $\operatorname{sgn}(x) = 1$ per $x > 0$, $-1$ per $x < 0$. (Suggerimento: mostra che nessun $\ell$ può funzionare, usando i limiti unilaterali oppure la negazione.)

<details>
<summary>Soluzione</summary>

*Via i limiti unilaterali (§4.2).* Il limite destro è $\lim_{x\to 0^+}\operatorname{sgn}(x) = 1$ (la funzione vale costantemente $1$ per $x > 0$); il limite sinistro è $\lim_{x\to 0^-}\operatorname{sgn}(x) = -1$. Per il teorema del §4.2, il limite bilatero esiste $\iff$ i due unilaterali esistono e **coincidono**. Qui $1 \neq -1$, quindi il limite non esiste. $\blacksquare$

*Via la negazione (controllo diretto).* Sia $\ell$ un candidato qualunque. Prendo $\varepsilon = \tfrac12$. Per ogni $\delta > 0$ l'intorno bucato $0 < \lvert x\rvert < \delta$ contiene sia punti con $\operatorname{sgn} = 1$ (a destra) sia con $\operatorname{sgn} = -1$ (a sinistra). Se fosse $\lvert 1 - \ell\rvert < \tfrac12$ e $\lvert -1 - \ell\rvert < \tfrac12$, la disuguaglianza triangolare darebbe $2 = \lvert 1 - (-1)\rvert \le \lvert 1 - \ell\rvert + \lvert \ell - (-1)\rvert < \tfrac12 + \tfrac12 = 1$, assurdo. Quindi nessun $\ell$ soddisfa la definizione. $\blacksquare$

*Osservazione:* le due strade sono la stessa cosa vista da due angoli — il "salto" di ampiezza $2$ è ciò che nessuna banda di semiampiezza $\tfrac12$ può contenere.
</details>

**Esercizio 6.** Dimostra, usando la definizione a soglia, che $\lim_{x\to +\infty}(x^2 - 3x) = +\infty$. (Suggerimento: per $x$ grande, $x^2 - 3x \ge \tfrac12 x^2$.)

<details>
<summary>Soluzione</summary>

Devo mostrare: $\forall M > 0\ \exists N : x > N \Rightarrow x^2 - 3x > M$. Per $x > 6$ si ha $3x < \tfrac12 x^2$ (perché $x^2 - 3x - \tfrac12 x^2 = \tfrac12 x^2 - 3x = \tfrac12 x(x - 6) > 0$), quindi
$$x^2 - 3x = \tfrac12 x^2 + \left(\tfrac12 x^2 - 3x\right) \ge \tfrac12 x^2 \qquad (x > 6).$$
Chiedo $\tfrac12 x^2 > M$, cioè $x > \sqrt{2M}$. **Scelgo $N = \max\{6,\ \sqrt{2M}\}$:** se $x > N$ valgono entrambe le condizioni ($x > 6$ per la stima e $x > \sqrt{2M}$ per la soglia), dunque $x^2 - 3x \ge \tfrac12 x^2 > M$. $\blacksquare$

*Nota:* il $\max$ qui gioca lo stesso ruolo del $\min$ nei limiti finiti — combina il vincolo che rende valida la stima ($x > 6$) con il vincolo che raggiunge la soglia ($x > \sqrt{2M}$).
</details>

### Applicativi

**Esercizio 7.** Una macchina taglia barre di lunghezza nominale $\ell = 50$ cm; la lunghezza dipende dalla posizione $x$ (in mm) di una guida, secondo $f(x) = 50 + 0{,}2(x - 10)$, con guida nominale $x_0 = 10$. Il cliente accetta barre entro $\varepsilon = 0{,}05$ cm dal nominale. Con quale precisione $\delta$ (in mm) va posizionata la guida? Interpreta il rapporto $\delta/\varepsilon$.

<details>
<summary>Soluzione</summary>

Voglio $\lvert f(x) - 50\rvert < \varepsilon$, cioè $\lvert 0{,}2(x - 10)\rvert < 0{,}05$, cioè $0{,}2\,\lvert x - 10\rvert < 0{,}05$, da cui $\lvert x - 10\rvert < 0{,}25$. **Serve $\delta = 0{,}25$ mm.**

*Interpretazione:* $\delta/\varepsilon = 0{,}25/0{,}05 = 5 = 1/0{,}2 = 1/\lvert m\rvert$. Il reciproco della "pendenza" $0{,}2$ (cm di barra per mm di guida) è la **sensibilità** del processo: per stringere la tolleranza sull'uscita di un fattore $2$, devo stringere la precisione sulla guida dello stesso fattore. È l'$\varepsilon$–$\delta$ come specifica di ingegneria: $\delta = \varepsilon/\lvert m\rvert$, esattamente il §5.2.
</details>

**Esercizio 8.** *(Concettuale.)* Un tuo compagno afferma: "Ho verificato che per $\varepsilon = 0{,}1$, $\varepsilon = 0{,}01$ e $\varepsilon = 0{,}001$ esiste un $\delta$ adatto; quindi $\lim_{x\to x_0} f(x) = \ell$". Spiega perché l'argomento è insufficiente e cosa servirebbe per renderlo una dimostrazione.

<details>
<summary>Soluzione</summary>

La definizione quantifica su **tutti** gli $\varepsilon > 0$ (infiniti, e arbitrariamente piccoli), non su una lista finita. Aver risposto a tre sfide specifiche non esclude che esista un $\varepsilon$ più piccolo — o semplicemente diverso — per cui *nessun* $\delta$ funziona. Tre casi sono un indizio, non una prova (Errore comune n. 5).

Per rendere l'argomento una dimostrazione servirebbe una **regola generale** $\delta(\varepsilon)$: una formula (come $\delta = \varepsilon/3$) o una costruzione (come $\delta = \min\{1, \varepsilon/K\}$) che, *dato un $\varepsilon$ arbitrario*, produca un $\delta$ funzionante. È la differenza tra controllare qualche riga di una tabella e dimostrare un teorema: la seconda copre l'infinità dei casi in un colpo solo. $\blacksquare$
</details>

---

## 12. Fonti

**Fonte primaria (impianto geometrico e limiti infiniti/all'infinito):** *OpenStax, Calculus Volume 1*, Cap. 2.5 "The Precise Definition of a Limit". Da qui provengono la costruzione a bande $\varepsilon$/$\delta$, la tecnica della disuguaglianza triangolare per il limite della somma (§4.3) e le definizioni precise separate per i limiti infiniti e i limiti all'infinito (§3.8, Esempi 6–7).

**Fonte appunti-prof (priorità per notazione, formalismo e definizione unificata):** *A. Villanacci, Notes for Mathematics 1*, Cap. 6, §6.1 (Definizioni 316–335, Osservazioni 318–334, Esempi 321–332). Da qui provengono la **notazione da esame** ($x_0$, $\ell$, palle $B_r$, insieme derivato $D(f)$ per i punti di accumulazione, §3.5), la **definizione unificata a intorni** che copre in un'unica formula tutti i 9 casi finito/infinito (§3.8, tabella $3\times 3$), il metodo di verifica del §5.1 e diversi esempi (Es. 325 → Esempio 8, Es. 332 → Esempio 6). Questa fonte ha priorità perché fissa le convenzioni con cui Martino sarà valutato all'esame.

**Fonte appunti-prof (caratterizzazione sequenziale):** *A. Villanacci, Notes on Sequences*, Cap. 1. Usata per il ponte tra limite di funzione e limite di successione (§3.6), che sarà sviluppato nella lezione sulle successioni.

**Differenza tra fonti rilevante per l'apprendimento.** OpenStax e Villanacci arrivano allo stesso concetto ma lo *organizzano* in modo diverso, e la differenza conta per come studierai. OpenStax dà **definizioni separate** per il limite finito, il limite infinito ("$f(x) > M$") e il limite all'infinito ("$x > N$"): tre enunciati distinti, più facili da leggere la prima volta. Villanacci dà **un'unica definizione a intorni** — "per ogni intorno $V$ di $\ell$ esiste un intorno $U$ di $x_0$ tale che $f\big((U\setminus\{x_0\})\cap D\big)\subseteq V$" — che, scegliendo l'intorno giusto (palla per i punti finiti, semiretta per $\pm\infty$), *genera* tutti e 9 i casi come istanze particolari. Non sono due definizioni in conflitto: sono la stessa nozione a due livelli di astrazione. Per gli esami conta la forma unificata di Villanacci (è quella richiesta e quella che rende immediati i limiti infiniti); per la *prima* intuizione geometrica conviene la versione a bande di OpenStax. Le abbiamo tenute entrambe di proposito: la tabella del §3.8 è il ponte esplicito fra le due.
