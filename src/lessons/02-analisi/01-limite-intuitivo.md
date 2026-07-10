---
id: analisi-01-limite-intuitivo
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Concetto di limite e definizione intuitiva
title_en: The concept of limit — intuitive approach
level: blue
order: 1
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 2 — Limiti"
---

## 1. Intuizione e motivazione

Immagina di camminare lungo un corridoio buio verso una porta chiusa. Puoi avvicinarti quanto vuoi — un metro, un centimetro, un millimetro, un millesimo di millimetro — ma la porta rimane chiusa: non entri mai. Eppure chiunque ti osservi può concludere con certezza verso quale punto stai tendendo: il bordo della porta.

Il **limite** funziona esattamente così. Dato un punto $a$ e una funzione $f$, vogliamo sapere verso quale valore tende $f(x)$ quando $x$ si avvicina ad $a$ — indipendentemente da ciò che accade *in* $a$ (la porta potrebbe non esistere, oppure essere spalancata, ma questo non cambia il corridoio che hai percorso).

Questa distinzione è cruciale e rivoluzionaria: il limite descrive un **comportamento nelle vicinanze**, non un valore puntuale. Senza questa idea, il calcolo differenziale non esisterebbe: la derivata non è altro che un limite di rapporti incrementali, e l'integrale definito è un limite di somme di Riemann. Il concetto di limite è il fondamento su cui poggia tutta l'Analisi matematica.

Un esempio immediato chiarisce tutto. La funzione $f(x) = \dfrac{x^2 - 1}{x - 1}$ non è definita in $x = 1$ (divisione per zero). Eppure, per ogni $x \neq 1$, possiamo semplificare algebricamente:

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1$$

Quindi, avvicinandoci a $x = 1$ (senza mai toccarlo), la funzione si avvicina a $2$. Diremo $\lim_{x \to 1} \frac{x^2-1}{x-1} = 2$, anche se $f(1)$ non esiste. Il limite esiste: il corridoio conduce alla porta, anche se la porta non c'è.

---

## 2. Prerequisiti

- Definizione di **funzione reale** $f: D \subseteq \mathbb{R} \to \mathbb{R}$ e nozione di dominio
- **Intorno** di un punto $a$: l'insieme $(a - r, a + r)$ per un raggio $r > 0$; intorno bucato: lo stesso insieme senza $a$
- Operazioni algebriche di base su polinomi, frazioni razionali e radici
- Concetto di **valore assoluto** $\lvert x - a \rvert$ come distanza tra $x$ e $a$ sulla retta reale
- Nozioni elementari di **successioni**: cosa significa "avvicinarsi" a un valore

---

## 3. Teoria passo-passo

### Definizione informale di limite

**Definizione (informale).** Sia $f$ una funzione definita in un intorno di $a$, tranne eventualmente in $a$ stesso. Diciamo che il **limite di $f(x)$ per $x$ che tende ad $a$ è $L$**, e scriviamo:

$$\lim_{x \to a} f(x) = L$$

se, all'avvicinarsi di $x$ ad $a$ (da sinistra o da destra, con $x \neq a$), i valori $f(x)$ si avvicinano arbitrariamente a $L$.

Il punto chiave è che $x \neq a$. Il limite riguarda il comportamento *attorno* ad $a$, non *in* $a$. Il valore $f(a)$ — ammesso che esista — è completamente irrilevante per la definizione di limite.

### Limite sinistro e limite destro

Spesso è necessario distinguere da quale lato si approccia $a$. Le due nozioni di limite unilaterale sono:

**Limite sinistro** (da sinistra, $x < a$):

$$\lim_{x \to a^-} f(x) = L^-$$

Si legge: "limite di $f(x)$ per $x$ che tende ad $a$ dal basso". La variabile $x$ assume valori strettamente minori di $a$ avvicinandosi ad esso.

**Limite destro** (da destra, $x > a$):

$$\lim_{x \to a^+} f(x) = L^+$$

Si legge: "limite di $f(x)$ per $x$ che tende ad $a$ dall'alto". La variabile $x$ assume valori strettamente maggiori di $a$ avvicinandosi ad esso.

### Teorema di esistenza del limite bilatero

**Teorema.** Il limite bilatero $\lim_{x \to a} f(x) = L$ esiste se e solo se esistono entrambi i limiti unilaterali e coincidono:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

Se i due limiti unilaterali esistono ma sono diversi, il limite bilatero **non esiste**. Se uno dei due non esiste (ad esempio perché la funzione oscilla selvaggiamente), il bilatero non esiste nemmeno.

Questo teorema è fondamentale: riduce il problema di un limite bilatero a due problemi unilaterali, che spesso sono più facili da analizzare separatamente (soprattutto per funzioni a tratti o con valore assoluto).

### Limite all'infinito

Il concetto di limite si estende al caso in cui $x$ cresce senza limite oppure tende a $\pm\infty$:

$$\lim_{x \to +\infty} f(x) = L \quad \text{se } f(x) \to L \text{ al crescere illimitato di } x$$

$$\lim_{x \to -\infty} f(x) = L \quad \text{se } f(x) \to L \text{ al decrescere illimitato di } x$$

$$\lim_{x \to a} f(x) = +\infty \quad \text{se } f(x) \text{ cresce senza limiti quando } x \to a$$

In quest'ultimo caso il limite non è un numero reale finito: diciamo che il limite è infinito, o che non esiste in senso proprio ma "diverge a $+\infty$".

### Limite e valore della funzione: tre possibilità

Sia $f$ definita in un intorno di $a$. Possono presentarsi tre situazioni distinte:

1. **$f(a)$ non è definita**, ma $\lim_{x\to a} f(x) = L$ esiste e è finito: si tratta di una *discontinuità eliminabile* — il limite esiste e "riempirebbe il buco".
2. **$f(a)$ è definita** e $\lim_{x\to a} f(x) = L$ esiste, ma $L \neq f(a)$: il limite esiste ma non coincide con il valore della funzione nel punto.
3. **$f(a)$ è definita** e $\lim_{x\to a} f(x) = f(a)$: questa è la *continuità* in $a$, il caso "ideale" (tema della lezione 4).

---

## 4. Derivazione commentata

**Verifica numerica e algebrica: $\lim_{x \to 3} (2x + 1) = 7$.**

**Passo 1 — osservazione numerica:**

Tabella dei valori di $f(x) = 2x+1$ per $x$ vicini a 3:

| $x$ | $f(x) = 2x+1$ |
| --- | --- |
| 2.9 | 6.8 |
| 2.99 | 6.98 |
| 2.999 | 6.998 |
| 3.001 | 7.002 |
| 3.01 | 7.02 |
| 3.1 | 7.2 |

La tabella mostra chiaramente che $f(x)$ si avvicina a 7 da entrambi i lati, con un errore che si dimezza ogni volta che dimezziamo la distanza da 3.

**Passo 2 — argomento algebrico (senza ε–δ):**

Calcoliamo esplicitamente la distanza tra $f(x)$ e 7:

$$\lvert f(x) - 7 \rvert = \lvert (2x + 1) - 7 \rvert = \lvert 2x - 6 \rvert = 2\lvert x - 3 \rvert$$

Questo ci dice che la distanza di $f(x)$ da 7 è esattamente il **doppio** della distanza di $x$ da 3. Quindi:
- Se $x$ è a distanza $0.001$ da 3, allora $f(x)$ è a distanza $0.002$ da 7.
- Se $x$ è a distanza $0.0001$ da 3, allora $f(x)$ è a distanza $0.0002$ da 7.
- Per qualunque tolleranza $\varepsilon > 0$ vogliamo sull'output, basta stare a distanza $\varepsilon/2$ dall'input.

Questo argomento è la base della definizione epsilon-delta (lezione 2), dove rendiamo rigoroso il concetto di "avvicinarsi arbitrariamente". Il numero $\delta = \varepsilon/2$ è la risposta alla sfida epsilon.

**Passo 3 — conclusione formale (anticipazione della lezione 2):**

Per ogni $\varepsilon > 0$, scegliendo $\delta = \varepsilon/2$, si ha:

$$0 < \lvert x - 3 \rvert < \delta \implies \lvert (2x+1) - 7 \rvert = 2\lvert x-3 \rvert < 2\delta = \varepsilon$$

Quindi $\lim_{x\to 3}(2x+1) = 7$. $\square$

---

## 5. Esempi graduati

**Esempio 1 — Sostituzione diretta (caso più semplice)**

$$\lim_{x \to 2} (x^2 + 3x - 1)$$

Per i polinomi il limite si calcola sostituendo direttamente $x=2$ (i polinomi sono continui ovunque):

$$= 2^2 + 3 \cdot 2 - 1 = 4 + 6 - 1 = 9$$

Il risultato è 9. In questo caso il limite coincide con il valore della funzione in $x = 2$.

---

**Esempio 2 — Semplificazione algebrica (forma $0/0$)**

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1}$$

La sostituzione diretta dà $0/0$ (forma indeterminata). Fatorizziamo il numeratore usando la differenza di quadrati:

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad \text{per } x \neq 1$$

Ora il limite si calcola facilmente:

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} (x + 1) = 2$$

La funzione ha un "buco" in $x=1$ (non è definita lì), ma il limite esiste ed è 2.

---

**Esempio 3 — Limite con valore assoluto (limiti unilaterali)**

$$\lim_{x \to 0} \frac{\lvert x \rvert}{x}$$

Analizziamo separatamente i due lati, usando la definizione di valore assoluto:

- Per $x > 0$: $\lvert x \rvert = x$, quindi $\dfrac{\lvert x \rvert}{x} = \dfrac{x}{x} = 1$, e $\lim_{x \to 0^+} = 1$
- Per $x < 0$: $\lvert x \rvert = -x$, quindi $\dfrac{\lvert x \rvert}{x} = \dfrac{-x}{x} = -1$, e $\lim_{x \to 0^-} = -1$

I due limiti unilaterali sono diversi ($1 \neq -1$), dunque il limite bilatero **non esiste**.

---

**Esempio 4 — Limite all'infinito di una funzione razionale**

$$\lim_{x \to +\infty} \frac{3x^2 + 2x}{x^2 - 1}$$

La sostituzione diretta dà $\infty/\infty$ (indeterminata). Dividiamo numeratore e denominatore per $x^2$ (la potenza massima tra i due polinomi):

$$= \lim_{x \to +\infty} \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}} = \frac{3 + 0}{1 - 0} = 3$$

Il limite è 3: la funzione ha un **asintoto orizzontale** $y = 3$ (argomento sviluppato in lezione 5).

---

**Esempio 5 — Limite di funzione con parametro e collegamento alla derivata**

$$\lim_{x \to 2} \frac{x^a - 4}{x - 2} \quad \text{per } a = 2$$

Con $a=2$: $x^2 - 4 = (x-2)(x+2)$, quindi:

$$\lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4$$

Per $a$ intero qualsiasi, la formula generale è:

$$\lim_{x \to c} \frac{x^a - c^a}{x - c} = a \cdot c^{a-1}$$

Questa è esattamente la definizione della **derivata** di $x^a$ nel punto $c$, e vale anche per $a$ reale non intero. Il limite è il meccanismo che dà senso alla derivata.

---

**Esempio 6 — Funzione a tratti: limite nel punto di raccordo**

Sia $f(x) = \begin{cases} x^2 & x < 2 \\ 3x - 2 & x \geq 2 \end{cases}$

Calcolare $\lim_{x \to 2} f(x)$.

Bisogna calcolare i limiti unilaterali separatamente, perché la funzione è definita con regole diverse:

- Limite sinistro (si usa il ramo $x^2$): $\lim_{x \to 2^-} x^2 = 4$
- Limite destro (si usa il ramo $3x-2$): $\lim_{x \to 2^+} (3x - 2) = 3 \cdot 2 - 2 = 4$

I due limiti coincidono, dunque $\lim_{x \to 2} f(x) = 4$. Inoltre $f(2) = 3 \cdot 2 - 2 = 4 = \lim$, quindi la funzione è anche **continua** in $x=2$ (lezione 4).

---

**Esempio 7 — Discontinuità di salto**

Sia $g(x) = \begin{cases} 1 & x < 0 \\ 3 & x \geq 0 \end{cases}$

- Limite sinistro: $\lim_{x \to 0^-} g(x) = 1$
- Limite destro: $\lim_{x \to 0^+} g(x) = 3$

Poiché $1 \neq 3$, il limite bilatero non esiste. La funzione "salta" da 1 a 3 nel punto $x=0$: si parla di **discontinuità di salto** di ampiezza 2.

---

**Esempio 8 — Limite che non esiste per oscillazione**

$$\lim_{x \to 0} \sin\!\left(\frac{1}{x}\right)$$

La funzione $\sin(1/x)$ oscilla tra $-1$ e $1$ con frequenza crescente man mano che $x \to 0$. Non si avvicina a nessun valore: il limite **non esiste** (né da sinistra né da destra). Questo è un esempio di discontinuità essenziale (lezione 4).

---

## 6. Grafico

```plot
{
  "title": "f(x) = (x²−1)/(x−1): buco in x=1, limite = 2",
  "fn": "(Math.abs(x - 1) > 0.05) ? (x * x - 1) / (x - 1) : NaN",
  "fn2": "x + 1",
  "domain": [-2, 4],
  "yDomain": [-1, 6],
  "label1": "(x²−1)/(x−1) [buco in x=1]",
  "label2": "y = x+1 (forma semplificata)"
}
```

---

## 7. Elemento interattivo

Il grafico seguente mostra $f(x) = \dfrac{x^a - 1}{x - 1}$ al variare del parametro intero $a$. Per ogni $a$, la funzione ha un buco in $x=1$ (forma $0/0$), ma il limite è sempre $a$ (dalla formula della derivata di $x^a$ in $x=1$, che vale $a$). Al crescere di $a$, la curva si incurva sempre di più, ma il "buco" rimane sempre in $x=1$ con il limite uguale ad $a$.

```slider
{
  "title": "Limite di (xᵃ − 1)/(x − 1) per x→1 al variare di a",
  "fn": "(Math.abs(x - 1) > 0.05) ? (Math.pow(Math.max(x, 0.01), a) - 1) / (x - 1) : NaN",
  "domain": [0, 3],
  "yDomain": [-1, 8],
  "pname": "a",
  "pmin": 1,
  "pmax": 5,
  "pdefault": 2,
  "pstep": 0.5,
  "plabel": "Esponente a (limite in x=1 = a)",
  "label1": "(xᵃ−1)/(x−1)"
}
```

---

## 8. Errori comuni

**Errore 1 — Confondere il limite con il valore della funzione.**
Molti studenti scrivono $\lim_{x\to a} f(x) = f(a)$ come se fosse sempre vero. Questo è vero solo se la funzione è *continua* in $a$ (lezione 4). In generale, il limite e il valore della funzione sono concetti distinti: il limite può esistere anche quando $f(a)$ non è definita, e può differire da $f(a)$ anche quando questa è definita.

**Errore 2 — Sostituire direttamente ottenendo $0/0$ e fermarsi.**
La forma $0/0$ è *indeterminata*: non significa che il limite sia 0, né che non esista. Bisogna procedere con la semplificazione algebrica, la razionalizzazione, la regola di De l'Hôpital o altri metodi (lezione 3).

**Errore 3 — Dimenticare di verificare entrambi i limiti unilaterali.**
Quando una funzione ha comportamenti diversi a sinistra e a destra di un punto (funzioni a tratti, valore assoluto, funzione segno), bisogna calcolare separatamente $\lim_{x \to a^-}$ e $\lim_{x \to a^+}$. Se differiscono, il limite bilatero non esiste — anche se entrambi i limiti unilaterali esistono e sono finiti.

**Errore 4 — Credere che se $f(a)$ esiste allora il limite esiste e vale $f(a)$.**
Esempio: sia $f(x) = \begin{cases} x+1 & x \neq 2 \\ 5 & x = 2 \end{cases}$. Allora $f(2)=5$ esiste, ma $\lim_{x\to 2} f(x) = 3 \neq 5$. Il limite "vede" solo i valori vicino a 2, non il valore in 2.

**Errore 5 — Confondere $x \to a$ con $x = a$.**
Il limite descrive ciò che succede *vicino* ad $a$, non *in* $a$. La condizione $x \neq a$ è implicita nella definizione. Sostituire $x=a$ per calcolare un limite è un errore concettuale: a volte funziona (quando la funzione è continua), ma non è questo il motivo per cui funziona.

**Errore 6 — Credere che il limite all'infinito sia sempre 0.**
Se $f(x) = \frac{3x+1}{x}$, il limite per $x \to +\infty$ è 3, non 0. Solo se il grado del numeratore è strettamente minore di quello del denominatore il limite all'infinito di una funzione razionale è 0. In generale il limite dipende dai coefficienti e dai gradi dei termini dominanti.

---

## 9. Applicazioni reali

**Fisica — velocità istantanea.** La velocità media di un corpo in un intervallo $[t, t+h]$ è $\frac{s(t+h)-s(t)}{h}$. La velocità istantanea al tempo $t$ è il limite di questa espressione per $h \to 0$. Senza il concetto di limite, non potremmo definire la velocità in un singolo istante: avremmo solo velocità medie su intervalli finiti. Newton e Leibniz svilupparono il calcolo precisamente per dare senso a questo limite — chiamandolo "flussione" o "differenziale". Questa è la definizione formale di derivata.

**Economia — costo marginale.** In microeconomia, il costo marginale è il limite del rapporto $\frac{\Delta C}{\Delta q}$ quando la variazione di quantità $\Delta q \to 0$. Descrive come varia il costo totale per un'unità infinitesima aggiuntiva di produzione. Senza limiti, le analisi marginali dell'economia — fondamento della teoria della concorrenza e della produzione ottima — non avrebbero fondamento matematico rigoroso.

**Informatica — complessità asintotica.** La notazione $O(n)$ descrive il comportamento asintotico di una funzione: si tratta di un limite per $n \to \infty$. Dire che un algoritmo è $O(n \log n)$ significa che il rapporto tra il tempo di esecuzione e $n \log n$ rimane limitato. Il concetto di limite è alla base dell'analisi della complessità computazionale, che permette di confrontare algoritmi indipendentemente dalla costante moltiplicativa e dall'hardware specifico.

---

## 10. Riepilogo tabellare

| Concetto | Notazione | Significato |
| --- | --- | --- |
| Limite bilatero | $\lim_{x \to a} f(x) = L$ | $f(x) \to L$ quando $x \to a$ da entrambi i lati |
| Limite sinistro | $\lim_{x \to a^-} f(x) = L^-$ | $f(x) \to L^-$ con $x < a$, $x \to a$ |
| Limite destro | $\lim_{x \to a^+} f(x) = L^+$ | $f(x) \to L^+$ con $x > a$, $x \to a$ |
| Esistenza del limite bilatero | $L^- = L^+ = L$ | Condizione necessaria e sufficiente |
| Limite all'infinito | $\lim_{x \to +\infty} f(x) = L$ | $f(x) \to L$ al crescere illimitato di $x$ |
| Limite infinito | $\lim_{x \to a} f(x) = +\infty$ | $f(x)$ cresce senza limite vicino ad $a$ |
| Limite $\neq$ valore | $\lim_{x\to a} f(x) \neq f(a)$ | In generale distinti; uguali solo se $f$ è continua |
| Non esiste (oscillazione) | — | $f(x)$ non si avvicina a nessun $L$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Limite per sostituzione diretta</summary>

**Testo:** Calcola $\lim_{x \to -1} (x^3 - 2x + 5)$.

**Soluzione:**

La funzione è un polinomio, continuo ovunque. Si sostituisce direttamente $x = -1$:

$$(-1)^3 - 2(-1) + 5 = -1 + 2 + 5 = 6$$

Il limite vale $\boxed{6}$.

</details>

<details>
<summary>Esercizio 2 — Forma indeterminata 0/0 con fattorizzazione</summary>

**Testo:** Calcola $\lim_{x \to 3} \dfrac{x^2 - 9}{x - 3}$.

**Soluzione:**

Sostituendo $x=3$ si ottiene $0/0$: forma indeterminata.

Fattorizziamo il numeratore come differenza di quadrati: $x^2 - 9 = (x-3)(x+3)$.

$$\lim_{x \to 3} \frac{(x-3)(x+3)}{x-3} = \lim_{x \to 3} (x+3) = 3 + 3 = 6$$

Il limite vale $\boxed{6}$.

</details>

<details>
<summary>Esercizio 3 — Limiti unilaterali con valore assoluto</summary>

**Testo:** Calcola $\lim_{x \to 2^-}$ e $\lim_{x \to 2^+}$ di $f(x) = \dfrac{x - 2}{\lvert x - 2 \rvert}$. Esiste il limite bilatero?

**Soluzione:**

- Per $x > 2$: $\lvert x-2 \rvert = x-2$, quindi $f(x) = \frac{x-2}{x-2} = 1$. Limite destro: $1$.
- Per $x < 2$: $\lvert x-2 \rvert = -(x-2) = 2-x$, quindi $f(x) = \frac{x-2}{2-x} = -1$. Limite sinistro: $-1$.

Poiché $1 \neq -1$, il limite bilatero **non esiste**.

</details>

<details>
<summary>Esercizio 4 — Limite all'infinito di funzione razionale</summary>

**Testo:** Calcola $\lim_{x \to +\infty} \dfrac{2x^3 - x + 1}{5x^3 + 3x^2}$.

**Soluzione:**

Stessa potenza massima (grado 3) al numeratore e al denominatore. Dividiamo per $x^3$:

$$\lim_{x \to +\infty} \frac{2 - \frac{1}{x^2} + \frac{1}{x^3}}{5 + \frac{3}{x}} = \frac{2 - 0 + 0}{5 + 0} = \frac{2}{5}$$

Il limite vale $\boxed{\dfrac{2}{5}}$.

</details>

<details>
<summary>Esercizio 5 — Funzione a tratti: esistenza del limite e continuità</summary>

**Testo:** Sia $f(x) = \begin{cases} 2x - 1 & x < 1 \\ x^2 & x \geq 1 \end{cases}$. Calcola $\lim_{x \to 1} f(x)$ e verifica se $f$ è continua in $x=1$.

**Soluzione:**

Calcolo i limiti unilaterali usando i rami appropriati della funzione:

- Limite sinistro: $\lim_{x \to 1^-} (2x-1) = 2(1)-1 = 1$
- Limite destro: $\lim_{x \to 1^+} x^2 = 1^2 = 1$

I limiti unilaterali coincidono: $\lim_{x \to 1} f(x) = 1$.

Poiché $f(1) = 1^2 = 1 = \lim_{x \to 1} f(x)$, la funzione è **continua** in $x=1$.

</details>

<details>
<summary>Esercizio 6 — Limite con radice quadrata (razionalizzazione)</summary>

**Testo:** Calcola $\lim_{x \to 4} \dfrac{\sqrt{x} - 2}{x - 4}$.

**Soluzione:**

Sostituendo $x=4$: $\frac{2-2}{0} = \frac{0}{0}$: forma indeterminata.

Moltiplichiamo numeratore e denominatore per il **coniugato** $(\sqrt{x}+2)$:

$$\frac{\sqrt{x}-2}{x-4} \cdot \frac{\sqrt{x}+2}{\sqrt{x}+2} = \frac{x - 4}{(x-4)(\sqrt{x}+2)} = \frac{1}{\sqrt{x}+2}$$

Ora la forma indeterminata è risolta. Si sostituisce $x=4$:

$$\lim_{x \to 4} \frac{1}{\sqrt{x}+2} = \frac{1}{\sqrt{4}+2} = \frac{1}{4}$$

Il limite vale $\boxed{\dfrac{1}{4}}$.

</details>

<details>
<summary>Esercizio 7 — Limite di funzione trigonometrica (anticipazione)</summary>

**Testo:** Dato che $\lim_{x \to 0} \frac{\sin x}{x} = 1$ (limite notevole dimostrato in lezione 5), calcola $\lim_{x \to 0} \frac{\sin(3x)}{x}$.

**Soluzione:**

Riscriviamo moltiplicando e dividendo per 3 per ottenere la forma del limite notevole:

$$\lim_{x \to 0} \frac{\sin(3x)}{x} = \lim_{x \to 0} 3 \cdot \frac{\sin(3x)}{3x}$$

Posto $t = 3x$, quando $x \to 0$ anche $t \to 0$:

$$= 3 \cdot \lim_{t \to 0} \frac{\sin t}{t} = 3 \cdot 1 = 3$$

Il limite vale $\boxed{3}$.

</details>

<details>
<summary>Esercizio 8 — Limite laterale e classificazione</summary>

**Testo:** Sia $h(x) = \begin{cases} x^2 + 1 & x \leq 0 \\ 2x - 1 & x > 0 \end{cases}$. Calcola il limite di $h$ in $x=0$ da sinistra e da destra. Esiste il bilatero? La funzione è continua?

**Soluzione:**

- Limite sinistro: $\lim_{x \to 0^-} (x^2+1) = 0+1 = 1$. Poiché $h(0) = 0^2+1 = 1$, da sinistra va bene.
- Limite destro: $\lim_{x \to 0^+} (2x-1) = 2(0)-1 = -1$.

Poiché $1 \neq -1$, il limite bilatero **non esiste**: si tratta di una **discontinuità di salto** di ampiezza 2 in $x=0$.

</details>
