---
id: analisi-02-limite-epsilon-delta
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Definizione rigorosa ε–δ
title_en: Rigorous ε–δ definition of limit
level: blue
order: 2
source_book: "W. Rudin, Principles of Mathematical Analysis; MIT OCW 18.01"
source_chapter: "Cap. 4 — Limiti (definizione formale)"
---

## 1. Intuizione e motivazione

Immagina una sfida tra due matematici. Il primo, il **critico**, sceglie una soglia di tolleranza $\varepsilon > 0$ (molto piccola: ad esempio $\varepsilon = 0{,}001$) e dice: "dimostrami che $f(x)$ è davvero vicino a $L$, con errore strettamente minore di $\varepsilon$." Il secondo, il **difensore**, deve rispondere trovando una distanza $\delta > 0$ tale che, se $x$ è a meno di $\delta$ da $a$ (ma con $x \neq a$), allora $f(x)$ è garantito essere a meno di $\varepsilon$ da $L$.

Se il difensore riesce sempre a rispondere — per qualunque $\varepsilon$ scelga il critico, per quanto piccolo — allora il limite esiste ed è $L$.

Questa è la definizione epsilon-delta, formulata da Karl Weierstrass nel XIX secolo per porre fine alle ambiguità degli "infinitesimi" introdotti da Newton e Leibniz. Prima di questa definizione, il calcolo era efficace ma privo di fondamento logico rigoroso: i matematici usavano quantità "infinitesimamente piccole" senza poter dire esattamente cosa fossero. Con la definizione di Weierstrass, l'Analisi matematica divenne una scienza dimostrativa nel senso pieno del termine.

La domanda a cui risponde la definizione è precisa: cosa significa esattamente "avvicinarsi"? L'intuizione geometrica (la curva si avvicina a $L$) deve diventare un enunciato verificabile, senza ambiguità, esprimibile con i soli concetti di distanza e ordine in $\mathbb{R}$.

---

## 2. Prerequisiti

- Concetto intuitivo di **limite** (lezione 1): il comportamento di $f(x)$ vicino ad $a$
- **Valore assoluto** $\lvert x \rvert$ e sua interpretazione come distanza: $\lvert x - a \rvert < \delta$ significa "$x$ è a distanza minore di $\delta$ da $a$"
- **Intorno bucato** di $a$: l'insieme $\{x \in \mathbb{R} : 0 < \lvert x - a \rvert < \delta\}$ — include punti vicini ad $a$ ma esclude $a$ stesso
- Quantificatori logici: $\forall$ ("per ogni"), $\exists$ ("esiste"), $\Rightarrow$ ("implica")
- **Disuguaglianza triangolare**: $\lvert a + b \rvert \leq \lvert a \rvert + \lvert b \rvert$
- Proprietà dell'ordine in $\mathbb{R}$: composizione di disuguaglianze

---

## 3. Teoria passo-passo

### La definizione formale

**Definizione (Weierstrass, XIX sec.).** Sia $f: D \to \mathbb{R}$, con $a$ punto di accumulazione di $D$ (cioè in ogni intorno di $a$ esiste almeno un punto di $D$ diverso da $a$). Diciamo che:

$$\lim_{x \to a} f(x) = L$$

se per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che, per ogni $x \in D$:

$$0 < \lvert x - a \rvert < \delta \implies \lvert f(x) - L \rvert < \varepsilon$$

In forma compatta con i quantificatori:

$$\forall \varepsilon > 0 \; \exists \delta > 0 : \forall x \in D, \; 0 < \lvert x - a \rvert < \delta \implies \lvert f(x) - L \rvert < \varepsilon$$

**Ogni simbolo spiegato con cura:**

- $\varepsilon$ (epsilon): la tolleranza sull'**output** — quanto siamo disposti a stare lontani da $L$; scelto dal critico, può essere arbitrariamente piccolo
- $\delta$ (delta): la tolleranza sull'**input** — quanto vicino dobbiamo stare ad $a$; trovato dal difensore, dipende da $\varepsilon$
- $0 < \lvert x - a \rvert < \delta$: $x$ è nell'intorno bucato di $a$ di raggio $\delta$ — il "$0 <$" esclude $x = a$
- $\lvert f(x) - L \rvert < \varepsilon$: $f(x)$ è nell'intorno aperto di $L$ di raggio $\varepsilon$
- L'**ordine** è fondamentale: prima il critico sceglie $\varepsilon$, poi il difensore trova $\delta$ (che dipende da $\varepsilon$)

### Interpretazione geometrica

Geometricamente, la condizione dice: per ogni **banda orizzontale** di ampiezza $2\varepsilon$ centrata in $L$ (la striscia $L - \varepsilon < y < L + \varepsilon$), esiste una **banda verticale** di ampiezza $2\delta$ centrata in $a$ (la striscia $a - \delta < x < a + \delta$) tale che il grafico di $f$, all'interno della banda verticale (eccetto in $x=a$), rimane interamente nella banda orizzontale.

Più $\varepsilon$ si restringe, più in generale dovrà restringersi anche $\delta$. L'esistenza del limite garantisce che questa "risposta" $\delta$ esista sempre, per ogni $\varepsilon > 0$ per quanto piccolo.

### Negazione della definizione (il limite non esiste)

Il limite $\lim_{x\to a} f(x) = L$ **non esiste** (o non vale $L$) se e solo se:

$$\exists \varepsilon_0 > 0 : \forall \delta > 0, \; \exists x \in D \text{ con } 0 < \lvert x-a \rvert < \delta \text{ ma } \lvert f(x) - L \rvert \geq \varepsilon_0$$

In italiano: il critico trova una soglia $\varepsilon_0$ alla quale il difensore non sa rispondere — qualunque $\delta$ scelga, c'è sempre un punto $x$ nell'intorno che manda $f(x)$ fuori dalla banda. Questo è il modo rigoroso per dimostrare che un limite non esiste.

### Unicità del limite

**Teorema.** Se il limite esiste, è unico.

**Dimostrazione (per assurdo).** Supponiamo $\lim_{x\to a} f(x) = L$ e $\lim_{x\to a} f(x) = M$ con $L \neq M$. Sia $\varepsilon = \dfrac{\lvert L-M \rvert}{2} > 0$.

Per definizione, esistono $\delta_1, \delta_2 > 0$ tali che:
$$0 < \lvert x-a \rvert < \delta_1 \implies \lvert f(x) - L \rvert < \varepsilon$$
$$0 < \lvert x-a \rvert < \delta_2 \implies \lvert f(x) - M \rvert < \varepsilon$$

Sia $\delta = \min(\delta_1, \delta_2)$. Per $0 < \lvert x-a \rvert < \delta$, per la **disuguaglianza triangolare**:

$$\lvert L - M \rvert = \lvert L - f(x) + f(x) - M \rvert \leq \lvert f(x)-L \rvert + \lvert f(x)-M \rvert < \varepsilon + \varepsilon = 2\varepsilon = \lvert L-M \rvert$$

Ottengo $\lvert L-M \rvert < \lvert L-M \rvert$: contraddizione. Dunque $L = M$. $\square$

### Teorema del confronto (Squeeze Theorem)

**Teorema.** Se $g(x) \leq f(x) \leq h(x)$ per ogni $x$ in un intorno bucato di $a$, e se $\lim_{x\to a} g(x) = \lim_{x\to a} h(x) = L$, allora:

$$\lim_{x\to a} f(x) = L$$

**Idea della dimostrazione:** dato $\varepsilon > 0$, esistono $\delta_1, \delta_2 > 0$ tali che $g(x)$ e $h(x)$ sono entrambi nell'intervallo $(L-\varepsilon, L+\varepsilon)$ per $\lvert x-a \rvert < \min(\delta_1, \delta_2)$. Poiché $f$ è "schiacciata" tra $g$ e $h$, anche $f(x) \in (L-\varepsilon, L+\varepsilon)$, cioè $\lvert f(x)-L \rvert < \varepsilon$.

Questo teorema è fondamentale per calcolare limiti di funzioni difficili, come $\lim_{x\to 0} x\sin(1/x) = 0$ (perché $-\lvert x \rvert \leq x\sin(1/x) \leq \lvert x \rvert$ e $\lvert x \rvert \to 0$).

---

## 4. Derivazione commentata

**Dimostrazione formale che $\lim_{x \to 2} (3x - 1) = 5$.**

Questa dimostrazione si fa in due fasi: prima l'**analisi preliminare** (trovare $\delta$), poi la **dimostrazione pulita**.

**Analisi preliminare (fuori dalla dimostrazione formale — è il lavoro in bozza):**

Vogliamo rendere $\lvert f(x) - 5 \rvert$ piccolo. Calcoliamo:

$$\lvert (3x-1) - 5 \rvert = \lvert 3x - 6 \rvert = 3\lvert x - 2 \rvert$$

Per avere $3\lvert x-2 \rvert < \varepsilon$, basta imporre $\lvert x-2 \rvert < \dfrac{\varepsilon}{3}$.

Scegliamo quindi $\delta = \dfrac{\varepsilon}{3}$.

**Dimostrazione formale:**

Sia $\varepsilon > 0$ arbitrario. Poniamo $\delta = \dfrac{\varepsilon}{3}$.

Supponiamo $0 < \lvert x - 2 \rvert < \delta$. Allora:

$$\lvert (3x-1) - 5 \rvert = \lvert 3x - 6 \rvert = 3\lvert x - 2 \rvert < 3\delta = 3 \cdot \frac{\varepsilon}{3} = \varepsilon$$

Abbiamo dimostrato che per ogni $\varepsilon > 0$, scegliendo $\delta = \varepsilon/3$, si ha:

$$0 < \lvert x - 2 \rvert < \delta \implies \lvert (3x-1) - 5 \rvert < \varepsilon$$

Pertanto, per definizione, $\lim_{x \to 2} (3x-1) = 5$. $\square$

**Osservazioni importanti:**
- La scelta di $\delta$ non è unica: qualsiasi $\delta' \leq \delta$ funziona ugualmente.
- L'analisi preliminare non è parte della dimostrazione formale: è il lavoro di "scoperta" che precede la dimostrazione.
- La dimostrazione formale inizia sempre con "Sia $\varepsilon > 0$", poi enuncia $\delta$, poi verifica la condizione.

---

## 5. Esempi graduati

**Esempio 1 — Limite di funzione costante**

Dimostrare che $\lim_{x \to a} c = c$ per ogni costante $c \in \mathbb{R}$.

Per qualsiasi $\varepsilon > 0$, scegliamo qualsiasi $\delta > 0$ (ad esempio $\delta = 1$). Per ogni $x$ con $0 < \lvert x-a \rvert < \delta$:

$$\lvert f(x) - c \rvert = \lvert c - c \rvert = 0 < \varepsilon$$

La condizione è soddisfatta trivialmente, perché $f(x) = c$ non dipende affatto da $x$. $\square$

---

**Esempio 2 — Limite dell'identità**

Dimostrare che $\lim_{x \to a} x = a$.

Dato $\varepsilon > 0$, poniamo $\delta = \varepsilon$. Se $0 < \lvert x - a \rvert < \delta$, allora:

$$\lvert x - a \rvert < \delta = \varepsilon$$

Dunque $\lvert f(x) - a \rvert = \lvert x - a \rvert < \varepsilon$. $\square$

In questo caso $\delta = \varepsilon$ è la scelta più naturale: la funzione $f(x)=x$ ha pendenza 1, quindi la variazione dell'output è uguale alla variazione dell'input.

---

**Esempio 3 — Limite di $x^2$ in un punto (esempio con $\min$)**

Dimostrare che $\lim_{x \to 3} x^2 = 9$.

**Analisi preliminare:** $\lvert x^2 - 9 \rvert = \lvert x-3 \rvert \cdot \lvert x+3 \rvert$.

Il fattore $\lvert x+3 \rvert$ non è controllato direttamente, ma se restringiamo $\lvert x-3 \rvert < 1$, allora $2 < x < 4$, quindi $5 < x+3 < 7$, cioè $\lvert x+3 \rvert < 7$.

Dunque $\lvert x^2 - 9 \rvert < 7\lvert x-3 \rvert$. Per avere $7\lvert x-3 \rvert < \varepsilon$, basta $\lvert x-3 \rvert < \varepsilon/7$.

**Dimostrazione:** Sia $\varepsilon > 0$. Poniamo $\delta = \min\!\left(1, \dfrac{\varepsilon}{7}\right)$.

Se $0 < \lvert x-3 \rvert < \delta$, allora:
- $\lvert x-3 \rvert < 1$ garantisce $\lvert x+3 \rvert < 7$
- $\lvert x-3 \rvert < \varepsilon/7$

Quindi:

$$\lvert x^2 - 9 \rvert = \lvert x-3 \rvert \cdot \lvert x+3 \rvert < \frac{\varepsilon}{7} \cdot 7 = \varepsilon \quad \square$$

---

**Esempio 4 — Dimostrazione che un limite non esiste**

Mostrare che $\lim_{x \to 0} \sin\!\left(\dfrac{1}{x}\right)$ non esiste.

Usiamo la negazione della definizione. Prendiamo $\varepsilon_0 = \frac{1}{2}$. Per qualunque $\delta > 0$ scelto, troviamo due punti nell'intorno bucato $(0-\delta, 0+\delta) \setminus \{0\}$:

$$x_n = \frac{1}{2n\pi} \quad (\text{con } n \text{ intero sufficientemente grande per avere } x_n < \delta)$$
$$y_n = \frac{1}{\pi/2 + 2n\pi}$$

Si ha $\sin(1/x_n) = \sin(2n\pi) = 0$ e $\sin(1/y_n) = \sin(\pi/2) = 1$.

Qualunque $L$ si proponga come limite, o $\lvert 0 - L \rvert \geq 1/2$ o $\lvert 1 - L \rvert \geq 1/2$. Il critico sceglie il punto (tra $x_n$ e $y_n$) che manda $f$ lontano da $L$. Nessun $\delta$ riesce a contenere tutti i valori di $f$ entro $\varepsilon_0 = 1/2$ da $L$.

Dunque il limite non esiste. $\square$

---

**Esempio 5 — Teorema del confronto applicato**

Calcolare $\lim_{x \to 0} x^2 \sin\!\left(\dfrac{1}{x}\right)$.

Per ogni $x \neq 0$: $-1 \leq \sin(1/x) \leq 1$, quindi moltiplicando per $x^2 \geq 0$:

$$-x^2 \leq x^2 \sin\!\left(\frac{1}{x}\right) \leq x^2$$

Poiché $\lim_{x\to 0} (-x^2) = 0$ e $\lim_{x\to 0} x^2 = 0$, per il teorema del confronto:

$$\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$$

Nota: $\sin(1/x)$ da solo non ha limite in 0, ma moltiplicato per $x^2$ (che tende a 0 "abbastanza in fretta") il prodotto ha limite 0.

---

**Esempio 6 — Verifica con $\min$: limite di $x^2 + 2x$ in $x=1$**

Verificare che $\lim_{x\to 1} (x^2 + 2x) = 3$ scegliendo $\delta = \min(1, \varepsilon/5)$.

Con $\lvert x-1 \rvert < 1$ si ha $0 < x < 2$, quindi $3 < x+3 < 5$, cioè $\lvert x+3 \rvert < 5$.

$$\lvert x^2 + 2x - 3 \rvert = \lvert (x-1)(x+3) \rvert = \lvert x-1 \rvert \cdot \lvert x+3 \rvert < \frac{\varepsilon}{5} \cdot 5 = \varepsilon$$

La scelta $\delta = \min(1, \varepsilon/5)$ è valida (non ottimale, ma funziona). $\square$

---

## 6. Grafico

```plot
{
  "title": "f(x) = 3x−1: il limite in x=2 è L=5",
  "fn": "3 * x - 1",
  "fn2": "5",
  "domain": [0, 4],
  "yDomain": [0, 12],
  "label1": "f(x) = 3x − 1",
  "label2": "L = 5 (valore del limite)"
}
```

---

## 7. Elemento interattivo

Lo slider regola la tolleranza $\varepsilon$ sull'output. Osserva come la funzione $f(x) = 3x-1$ risponde: al restringersi di $\varepsilon$, anche la finestra $\delta = \varepsilon/3$ sull'input si restringe, ma esiste sempre. Questo è il significato visivo della definizione epsilon-delta: per ogni banda orizzontale di ampiezza $2\varepsilon$ centrata in $L=5$, si può trovare una banda verticale di ampiezza $2\delta$ centrata in $a=2$ che "cattura" tutta la curva nella banda orizzontale.

```slider
{
  "title": "Definizione ε–δ: f(x)=3x−1, per ogni ε esiste δ=ε/3",
  "fn": "3 * x - 1",
  "domain": [0.5, 3.5],
  "yDomain": [1, 9],
  "pname": "a",
  "pmin": 0.1,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Tolleranza ε (visiva)",
  "label1": "f(x) = 3x − 1"
}
```

---

## 8. Errori comuni

**Errore 1 — Invertire l'ordine dei quantificatori.**
La definizione corretta è "per ogni $\varepsilon > 0$, esiste $\delta > 0$". Scrivere "esiste $\delta > 0$ tale che per ogni $\varepsilon > 0$" è il contrario: implicherebbe che un unico $\delta$ funziona per tutti gli $\varepsilon$, il che è possibile solo per funzioni costanti. L'ordine $\forall \varepsilon \; \exists \delta$ è essenziale e non si può invertire.

**Errore 2 — Dimenticare la condizione $0 < \lvert x - a \rvert$.**
La condizione corretta è $0 < \lvert x - a \rvert < \delta$. Il "$0 <$" esclude $x = a$. Il limite riguarda cosa succede *vicino* ad $a$ con $x \neq a$, non in $a$. Dimenticare "$0 <$" e scrivere solo $\lvert x-a \rvert < \delta$ include il punto $a$, il che è un errore formale: la funzione potrebbe non essere definita in $a$.

**Errore 3 — Scegliere $\delta$ che non dipende da $\varepsilon$.**
Se si sceglie $\delta = 1$ (costante) per ogni $\varepsilon$, la dimostrazione fallisce per $\varepsilon$ molto piccoli: un $\delta$ fisso permette variazioni fisse dell'input, che producono variazioni fisse dell'output, le quali per $\varepsilon$ abbastanza piccolo saranno troppo grandi. Il $\delta$ deve dipendere da $\varepsilon$: tipicamente $\delta = \varepsilon / c$ per qualche costante $c > 0$.

**Errore 4 — Omettere l'analisi preliminare.**
Le dimostrazioni ε–δ richiedono di trovare $\delta$ in funzione di $\varepsilon$ **prima** di scrivere la dimostrazione formale. L'analisi preliminare è la fase di scoperta: si manipola $\lvert f(x) - L \rvert$ per trovare una stima in termini di $\lvert x-a \rvert$, poi si sceglie $\delta$. Solo dopo si scrive la dimostrazione pulita. Omettere questa fase porta a scegliere $\delta$ a caso.

**Errore 5 — Confondere "dimostrare che il limite è $L$" con "calcolare il limite".**
Prima si calcola $L$ (per sostituzione, algebra o argomenti intuitivi), poi si dimostra con ε–δ che $L$ è effettivamente il limite. La definizione ε–δ è uno strumento di **verifica**, non di scoperta. Non si usa la definizione per trovare il valore del limite, ma per certificare che il valore trovato è corretto.

**Errore 6 — Ignorare il $\min$ nella scelta di $\delta$.**
In molte dimostrazioni (come quella di $x^2$) bisogna restringere $\lvert x-a \rvert < 1$ per controllare un fattore aggiuntivo. La scelta $\delta = \min(1, \varepsilon/c)$ è il modo standard: il "1" limita $x$ in una regione compatta dove si può stimare il fattore aggiuntivo, l'$\varepsilon/c$ garantisce la tolleranza richiesta sull'output.

---

## 9. Applicazioni reali

**Analisi numerica — criteri di arresto degli algoritmi.** Gli algoritmi iterativi (metodo di Newton, gradiente, ottimizzazione) terminano quando la differenza tra due iterate consecutive è inferiore a una tolleranza $\varepsilon$. La definizione ε–δ formalizza esattamente questo: per ogni precisione richiesta sul risultato, esiste un numero di iterazioni sufficiente (il "delta" è il numero di passi). I criteri di arresto degli algoritmi numerici sono applicazioni pratiche dirette della logica epsilon-delta.

**Fisica — propagazione degli errori di misura.** In fisica sperimentale, ogni misura è affetta da un'incertezza. Il limite ε–δ modella questa situazione: per ogni precisione $\varepsilon$ desiderata sul risultato calcolato $f(x)$, esiste una precisione $\delta$ sulle misure di $x$ che la garantisce. La funzione $f$ mappa incertezze sull'input in incertezze sull'output, e il rapporto $\delta/\varepsilon$ dà la "sensibilità" della misura. Questa è la base matematica dell'analisi della propagazione degli errori.

**Informatica — precisione in aritmetica floating point.** I processori lavorano con numeri in virgola mobile con precisione finita (IEEE 754), che introduce errori di arrotondamento dell'ordine di $10^{-16}$ (double precision). La definizione ε–δ è il fondamento per analizzare quando un algoritmo numerico produce risultati affidabili: dato un $\varepsilon$ di tolleranza sul risultato, si determina la precisione $\delta$ necessaria sui dati in ingresso. Algoritmi numericamente stabili sono quelli per cui $\delta$ è dello stesso ordine di grandezza di $\varepsilon$.

---

## 10. Riepilogo tabellare

| Concetto | Formula / Enunciato |
| --- | --- |
| Definizione ε–δ | $\forall \varepsilon > 0 \; \exists \delta > 0 : 0 < \lvert x-a \rvert < \delta \Rightarrow \lvert f(x)-L \rvert < \varepsilon$ |
| Intorno bucato di $a$ di raggio $\delta$ | $\{x \in D : 0 < \lvert x-a \rvert < \delta\}$ |
| Unicità del limite | Se esiste, è unico — dim. per assurdo con disuguaglianza triangolare |
| Teorema del confronto | $g \leq f \leq h$ e $\lim g = \lim h = L \Rightarrow \lim f = L$ |
| Scelta tipica di $\delta$ (caso lineare) | $\delta = \varepsilon / c$ dove $c$ è la pendenza massima di $f$ |
| Scelta tipica di $\delta$ (caso quadratico) | $\delta = \min(1, \varepsilon/c)$ dove $c$ stima il fattore aggiuntivo |
| Negazione: limite non esiste | $\exists \varepsilon_0 > 0 : \forall \delta > 0, \exists x$ nell'intorno con $\lvert f(x)-L \rvert \geq \varepsilon_0$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Dimostrazione ε–δ per funzione lineare</summary>

**Testo:** Dimostrare con la definizione ε–δ che $\lim_{x \to 4} (2x + 3) = 11$.

**Soluzione:**

**Analisi:** $\lvert (2x+3) - 11 \rvert = \lvert 2x - 8 \rvert = 2\lvert x-4 \rvert$. Per avere $2\lvert x-4 \rvert < \varepsilon$, basta $\lvert x-4 \rvert < \varepsilon/2$.

**Dimostrazione:** Sia $\varepsilon > 0$. Poniamo $\delta = \varepsilon/2$. Se $0 < \lvert x-4 \rvert < \delta$:

$$\lvert (2x+3) - 11 \rvert = 2\lvert x-4 \rvert < 2 \cdot \frac{\varepsilon}{2} = \varepsilon \quad \square$$

</details>

<details>
<summary>Esercizio 2 — Limite di funzione costante</summary>

**Testo:** Dimostrare con la definizione ε–δ che $\lim_{x \to 7} 5 = 5$.

**Soluzione:**

Sia $\varepsilon > 0$. Poniamo $\delta = 1$ (qualsiasi valore positivo funziona). Se $0 < \lvert x-7 \rvert < \delta$:

$$\lvert 5 - 5 \rvert = 0 < \varepsilon$$

La condizione è soddisfatta per ogni $\varepsilon > 0$, perché la funzione costante non varia mai. $\square$

</details>

<details>
<summary>Esercizio 3 — Limite di $x^2 − 3x$ in un punto</summary>

**Testo:** Dimostrare che $\lim_{x \to 2} (x^2 - 3x) = -2$.

**Soluzione:**

**Analisi:** $\lvert (x^2-3x) - (-2) \rvert = \lvert x^2 - 3x + 2 \rvert = \lvert (x-1)(x-2) \rvert = \lvert x-1 \rvert \cdot \lvert x-2 \rvert$.

Se $\lvert x-2 \rvert < 1$, allora $1 < x < 3$, quindi $0 < x-1 < 2$, cioè $\lvert x-1 \rvert < 2$.

Dunque $\lvert (x-1)(x-2) \rvert < 2\lvert x-2 \rvert$. Basta $\lvert x-2 \rvert < \varepsilon/2$.

**Dimostrazione:** Sia $\varepsilon > 0$. Poniamo $\delta = \min(1, \varepsilon/2)$. Se $0 < \lvert x-2 \rvert < \delta$:

$$\lvert (x^2-3x)+2 \rvert = \lvert x-1 \rvert \cdot \lvert x-2 \rvert < 2 \cdot \frac{\varepsilon}{2} = \varepsilon \quad \square$$

</details>

<details>
<summary>Esercizio 4 — Applicazione del teorema del confronto</summary>

**Testo:** Calcolare $\lim_{x \to 0} x \cos\!\left(\dfrac{1}{x}\right)$ usando il teorema del confronto.

**Soluzione:**

Per ogni $x \neq 0$: $-1 \leq \cos(1/x) \leq 1$. Moltiplicando per $\lvert x \rvert \geq 0$:

$$-\lvert x \rvert \leq x\cos\!\left(\frac{1}{x}\right) \leq \lvert x \rvert$$

(L'inequazione funziona anche per $x < 0$ perché il coseno è limitato in modulo da 1.)

Poiché $\lim_{x\to 0}(-\lvert x \rvert) = 0$ e $\lim_{x\to 0}\lvert x \rvert = 0$, per il teorema del confronto:

$$\lim_{x \to 0} x\cos\!\left(\frac{1}{x}\right) = 0$$

</details>

<details>
<summary>Esercizio 5 — Negazione della definizione: limite non esiste</summary>

**Testo:** Usare la negazione della definizione ε–δ per mostrare che $\lim_{x\to 0} \dfrac{1}{x}$ non esiste come numero reale finito.

**Soluzione:**

Supponiamo per assurdo che $\lim_{x\to 0} \frac{1}{x} = L \in \mathbb{R}$. Scegliamo $\varepsilon_0 = 1$.

Per definizione, dovrebbe esistere $\delta > 0$ tale che $0 < \lvert x \rvert < \delta \Rightarrow \lvert \frac{1}{x} - L \rvert < 1$.

Scegliamo $x_0 = \min(\delta/2, \frac{1}{L+2})$ (positivo). Allora $0 < x_0 < \delta$ ma:

$$\frac{1}{x_0} \geq L+2 \implies \lvert \frac{1}{x_0} - L \rvert \geq 2 > 1 = \varepsilon_0$$

Contraddizione: il limite finito non esiste. $\square$

</details>

<details>
<summary>Esercizio 6 — Dimostrazione con min: limite di $x^3$ in $x=1$</summary>

**Testo:** Dimostrare che $\lim_{x\to 1} x^3 = 1$.

**Soluzione:**

**Analisi:** $\lvert x^3 - 1 \rvert = \lvert (x-1)(x^2+x+1) \rvert = \lvert x-1 \rvert \cdot \lvert x^2+x+1 \rvert$.

Se $\lvert x-1 \rvert < 1$, allora $0 < x < 2$, quindi $x^2 < 4$ e $x^2+x+1 < 4+2+1 = 7$.

Dunque $\lvert x^3-1 \rvert < 7\lvert x-1 \rvert$. Basta $\lvert x-1 \rvert < \varepsilon/7$.

**Dimostrazione:** Sia $\varepsilon > 0$. Poniamo $\delta = \min(1, \varepsilon/7)$. Se $0 < \lvert x-1 \rvert < \delta$:

$$\lvert x^3-1 \rvert = \lvert x-1 \rvert \cdot \lvert x^2+x+1 \rvert < \frac{\varepsilon}{7} \cdot 7 = \varepsilon \quad \square$$

</details>

<details>
<summary>Esercizio 7 — Limite della radice quadrata</summary>

**Testo:** Dimostrare che $\lim_{x \to 4} \sqrt{x} = 2$.

**Soluzione:**

**Analisi:** $\lvert \sqrt{x} - 2 \rvert = \dfrac{\lvert x - 4 \rvert}{\sqrt{x} + 2}$.

Per $\lvert x - 4 \rvert < 1$ si ha $3 < x < 5$, quindi $\sqrt{x} > \sqrt{3} > 1$, cioè $\sqrt{x}+2 > 3$.

Dunque $\lvert \sqrt{x} - 2 \rvert = \dfrac{\lvert x-4 \rvert}{\sqrt{x}+2} < \dfrac{\lvert x-4 \rvert}{3}$. Basta $\lvert x-4 \rvert < 3\varepsilon$.

**Dimostrazione:** Sia $\varepsilon > 0$. Poniamo $\delta = \min(1, 3\varepsilon)$. Se $0 < \lvert x-4 \rvert < \delta$:

$$\lvert \sqrt{x} - 2 \rvert = \frac{\lvert x-4 \rvert}{\sqrt{x}+2} < \frac{3\varepsilon}{3} = \varepsilon \quad \square$$

</details>
