---
id: analisi-06-derivata-definizione
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Derivata — definizione e significato geometrico
title_en: Derivative — definition and geometric meaning
level: blue
order: 6
source_book: "J. Stewart, Calculus; MIT OCW 18.01; Rudin, Principles of Mathematical Analysis"
source_chapter: "Cap. 3 — La derivata"
---

## 1. Intuizione e motivazione

Immagina di essere in macchina sull'autostrada. Il tachimetro mostra **120 km/h**. Non è la velocità media del viaggio: è la velocità esatta in quell'istante preciso. Come si calcola una "velocità istantanea"?

Se in 2 ore hai percorso 120 km, la tua velocità media è $\frac{120}{2} = 60$ km/h. Ma questo numero non dice nulla su ciò che stavi facendo a ogni singolo istante: potresti essere stato fermo per un'ora e poi andare a 120 km/h per l'altra.

Per trovare la velocità in un preciso istante $t_0$, l'idea è restringere l'intervallo di osservazione:

$$v(t_0) \approx \frac{s(t_0 + h) - s(t_0)}{h} \qquad \text{per } h \text{ piccolo}$$

dove $s(t)$ è la posizione al tempo $t$. Più $h$ è piccolo, più l'approssimazione è precisa. **Nel limite $h \to 0$, otteniamo la velocità istantanea esatta.** Questo limite è la derivata.

La derivata risponde alla domanda: *con che rapidità sta cambiando una quantità, in un preciso istante?* È il fondamento del calcolo differenziale e appare ovunque: in fisica (forza, campo elettrico), economia (costo marginale, ottimizzazione), biologia (tasso di crescita), machine learning (gradiente per l'allenamento delle reti neurali).

---

## 2. Prerequisiti

Prima di procedere, assicurati di avere questi concetti chiari:

- **Funzioni** (Matematica di base, lezioni 1–5): $f : \mathbb{R} \to \mathbb{R}$, dominio, codominio, grafico
- **Limiti** (Analisi, lezioni 1–3): la derivata è **definita come un limite** — è il prerequisito essenziale
- **Continuità** (Analisi, lezione 4): serve per capire quando la derivata può o non può esistere
- **Algebra e manipolazione** (Matematica di base, lezioni 6–12): per semplificare le espressioni nei calcoli

---

## 3. Il rapporto incrementale — dalla variazione media alla variazione istantanea

Partiamo da una funzione $f$ e fissiamo un punto $a$ nel suo dominio.

Prendiamo un secondo punto vicino: $x = a + h$, dove $h \neq 0$ è un piccolo incremento (positivo o negativo). La variazione della funzione è:

$$\Delta f = f(a + h) - f(a)$$

Il **rapporto incrementale** è il tasso di variazione medio di $f$ sull'intervallo da $a$ ad $a+h$:

$$R(h) = \frac{f(a+h) - f(a)}{h}$$

**Cosa significano i singoli simboli:**
- $f(a+h)$: il valore della funzione nel punto $a$ spostato di $h$
- $f(a)$: il valore nel punto di partenza
- $f(a+h) - f(a)$: la variazione verticale (quanto sale o scende il grafico)
- $h$: la variazione orizzontale (lo spostamento di $x$)
- Il rapporto: "quante unità varia $f$ per ogni unità di variazione di $x$"

**Significato geometrico:** i punti $A = (a, f(a))$ e $B = (a+h, f(a+h))$ sono due punti sul grafico di $f$. La **retta secante** che li congiunge ha pendenza esattamente uguale al rapporto incrementale. Man mano che $h \to 0$, il punto $B$ si avvicina ad $A$ e la secante ruota convergendo verso la **retta tangente** in $A$.

**Tabella numerica per $f(x) = x^2$, $a = 1$:**

| $h$ | $R(h) = \dfrac{(1+h)^2 - 1}{h}$ |
|-----|----------------------------------|
| 1.0 | 3.000 |
| 0.5 | 2.500 |
| 0.1 | 2.100 |
| 0.01 | 2.010 |
| 0.001 | 2.001 |
| $\to 0$ | $\to$ **2** |

Il rapporto si avvicina sempre di più a $2$. Questo limite è la derivata di $x^2$ in $x=1$.

```plot
{
  "fn": "x*x",
  "domain": [-2.5, 2.5],
  "title": "f(x) = x² — la parabola su cui definiremo la derivata"
}
```

---

## 4. Definizione formale della derivata

**Definizione.** La **derivata** di $f$ nel punto $x = a$ è:

$$\boxed{f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}}$$

purché il limite esista finito. In tal caso $f$ si dice **derivabile in $a$**.

Se esiste per ogni $a$ nel dominio, la **funzione derivata** $f' : \mathbb{R} \to \mathbb{R}$ è:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Derivazione di $f(x) = x^2$ dalla definizione — passo per passo:**

$$f'(x) = \lim_{h\to 0} \frac{(x+h)^2 - x^2}{h}$$

Espandiamo il quadrato: $(x+h)^2 = x^2 + 2xh + h^2$

$$= \lim_{h\to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h\to 0} \frac{2xh + h^2}{h}$$

Raccogliamo $h$ al numeratore (e lo cancelliamo con il denominatore, sapendo $h \neq 0$):

$$= \lim_{h\to 0} \frac{h(2x + h)}{h} = \lim_{h\to 0} (2x + h) = 2x$$

Quindi $(x^2)' = 2x$. In $x = 1$: $f'(1) = 2$. Confermato dalla tabella!

---

## 5. Significato geometrico — la retta tangente

$f'(a)$ è la **pendenza della retta tangente** al grafico di $f$ nel punto $(a, f(a))$.

**Equazione della retta tangente** in $x = a$:

$$y = f(a) + f'(a)\,(x - a)$$

Questa è una retta con pendenza $f'(a)$ che passa per il punto $(a, f(a))$.

Interpretazione della pendenza:
- $f'(a) > 0$ → la funzione è **crescente** in $a$ (tangente inclinata verso l'alto)
- $f'(a) < 0$ → la funzione è **decrescente** in $a$ (tangente inclinata verso il basso)
- $f'(a) = 0$ → la tangente è **orizzontale** (punto critico: possibile massimo, minimo o flesso)

**Grafico interattivo:** sposta il cursore per vedere la retta tangente scorrere lungo la parabola $y = x^2$. La tangente in $x = a$ ha equazione $y = 2ax - a^2$ (pendenza $2a$).

```slider
{
  "fn": "x*x",
  "fn2": "2*a*x - a*a",
  "domain": [-2.8, 2.8],
  "yDomain": [-0.5, 8],
  "title": "Tangente alla parabola y = x² nel punto (a, a²)",
  "label1": "f(x) = x²",
  "label2": "Tangente in x = a",
  "pname": "a",
  "pmin": -2.5,
  "pmax": 2.5,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Punto di tangenza  a"
}
```

*Osserva:* quando $a = 0$ la tangente è orizzontale (pendenza $= 0$). Quando $a > 0$ la tangente sale, quando $a < 0$ scende — questo riflette il fatto che $f'(x) = 2x$ è positiva a destra dell'origine e negativa a sinistra.

---

## 6. Notazioni

Esistono diverse notazioni per la derivata, tutte equivalenti:

$$f'(x) \;=\; \frac{df}{dx} \;=\; \frac{d}{dx}\bigl[f(x)\bigr] \;=\; \dot{f}(t) \quad \text{(solo per derivate rispetto al tempo)}$$

| Notazione | Nome | Tipico contesto |
|-----------|------|-----------------|
| $f'(x)$ | Lagrange / prima | Matematica pura |
| $\dfrac{df}{dx}$ | Leibniz | Fisica, ingegneria, calcolo |
| $\dot{f}(t)$ | Newton | Meccanica (derivata rispetto al tempo $t$) |

La notazione di Leibniz è la più ricca di significato: $\dfrac{d}{dx}$ è un **operatore differenziale** che agisce su $f$ e produce $f'$. Sottolinea che la derivata è il rapporto (al limite) tra due variazioni infinitesime $df$ e $dx$.

Per la valutazione in un punto specifico $x = a$:

$$f'(a) = \left.\frac{df}{dx}\right|_{x=a}$$

---

## 7. Derivabilità implica continuità — e viceversa no

**Teorema.** Se $f$ è derivabile in $a$, allora è continua in $a$.

**Dimostrazione.** Se esiste il limite $f'(a) = \lim_{h\to 0} \frac{f(a+h)-f(a)}{h}$, allora:

$$\lim_{h\to 0} [f(a+h) - f(a)] = \lim_{h\to 0} \frac{f(a+h)-f(a)}{h} \cdot h = f'(a) \cdot 0 = 0$$

Quindi $\lim_{x\to a} f(x) = f(a)$: questo è esattamente la definizione di continuità in $a$. $\square$

**Il viceversa è falso.** Esempio canonico: $f(x) = |x|$.

È chiaramente continua in $x = 0$ (il grafico non salta). Ma non è derivabile in $0$:

- Limite destro: $\displaystyle\lim_{h\to 0^+} \frac{|0+h|-|0|}{h} = \lim_{h\to 0^+} \frac{h}{h} = 1$
- Limite sinistro: $\displaystyle\lim_{h\to 0^-} \frac{|h|}{h} = \lim_{h\to 0^-} \frac{-h}{h} = -1$

I due limiti laterali sono diversi: il limite globale non esiste, quindi $f'(0)$ non esiste. Geometricamente, $|x|$ ha un "spigolo" in $x = 0$ — la tangente non è definita.

---

## 8. Tavola delle derivate fondamentali

Queste formule si ricavano tutte dalla definizione come limite. Impararle è essenziale.

| $f(x)$ | $f'(x)$ | Nota chiave |
|--------|---------|-------------|
| $c$ (costante) | $0$ | Una costante non varia mai |
| $x$ | $1$ | La retta di pendenza 1 ha derivata 1 |
| $x^n$ ($n \in \mathbb{R}$) | $n x^{n-1}$ | **Regola della potenza** — abbassa l'esponente e lo moltiplica |
| $e^x$ | $e^x$ | L'esponenziale è "immune" alla derivazione |
| $a^x$ ($a > 0$) | $a^x \ln a$ | Generalizza $e^x$ |
| $\ln x$ | $\dfrac{1}{x}$ | Solo per $x > 0$ |
| $\log_a x$ | $\dfrac{1}{x \ln a}$ | Caso generale |
| $\sin x$ | $\cos x$ | Il coseno "insegue" il seno |
| $\cos x$ | $-\sin x$ | Attenzione al segno negativo |
| $\tan x$ | $\dfrac{1}{\cos^2 x} = \sec^2 x$ | |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1-x^2}}$ | Valida per $\lvert x \rvert < 1$ |
| $\arctan x$ | $\dfrac{1}{1+x^2}$ | Definita su tutto $\mathbb{R}$ |

---

## 9. Regole di derivazione

Con la tavola e queste regole puoi derivare qualsiasi funzione elementare senza tornare alla definizione.

**Linearità** (somma e scalare):

$$\bigl[af(x) + bg(x)\bigr]' = af'(x) + bg'(x)$$

La derivata è lineare: si distribuisce sulla somma e le costanti escono fuori.

*Esempio:* $[3x^4 - 2\sin x + 7]' = 12x^3 - 2\cos x + 0 = 12x^3 - 2\cos x$

**Regola del prodotto (Leibniz):**

$$\bigl[f(x) \cdot g(x)\bigr]' = f'(x)\,g(x) + f(x)\,g'(x)$$

Mnemonica: "prima per seconda, più prima per seconda". Entrambe devono apparire.

*Esempio:* $[x^2 \sin x]' = 2x \sin x + x^2 \cos x$

**Regola del quoziente:**

$$\left[\frac{f(x)}{g(x)}\right]' = \frac{f'(x)\,g(x) - f(x)\,g'(x)}{[g(x)]^2}$$

*Esempio:* $[\tan x]' = \left[\frac{\sin x}{\cos x}\right]' = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x}$

**Regola della catena (chain rule):**

$$\bigl[f(g(x))\bigr]' = f'\!\bigl(g(x)\bigr) \cdot g'(x)$$

"La derivata della funzione esterna valutata nell'argomento interno, moltiplicata per la derivata dell'argomento interno."

*Esempio 1:* $[\sin(x^2)]' = \cos(x^2) \cdot 2x = 2x\cos(x^2)$

*Esempio 2:* $[e^{3x}]' = e^{3x} \cdot 3 = 3e^{3x}$

*Esempio 3:* $[\sqrt{1+x^2}]' = \frac{1}{2\sqrt{1+x^2}} \cdot 2x = \frac{x}{\sqrt{1+x^2}}$

**Un fatto bellissimo: $[\sin x]' = \cos x$**

Derivando il seno si ottiene il coseno. Derivando ancora si ottiene $-\sin x$, e così via in un ciclo di periodo 4. Nel grafico qui sotto osserva che il coseno raggiunge il suo massimo (+1) esattamente dove il seno ha la pendenza massima (in $x = 0$), e tocca zero dove il seno ha una pendenza zero (in $x = \pi/2$): questo è il significato geometrico di essere la derivata.

```plot
{
  "fn": "Math.sin(x)",
  "fn2": "Math.cos(x)",
  "domain": [-6.28, 6.28],
  "title": "sin(x) e la sua derivata cos(x)",
  "label1": "f(x) = sin(x)",
  "label2": "f'(x) = cos(x)"
}
```

---

## 10. Derivata seconda e concavità

La derivata di $f'$ si chiama **derivata seconda**:

$$f''(x) = \bigl(f'\bigr)'(x) = \frac{d^2f}{dx^2}$$

**Significato fisico:** se $s(t)$ è la posizione, allora $s'(t) = v(t)$ è la velocità e $s''(t) = a(t)$ è l'accelerazione. La derivata seconda misura "quanto velocemente cambia la velocità".

**Significato geometrico — concavità:**

- $f''(x) > 0$ su un intervallo: $f$ è **convessa** (concava verso l'alto, a forma di $\cup$). Il grafico accelera verso l'alto: la pendenza cresce.
- $f''(x) < 0$ su un intervallo: $f$ è **concava** (concava verso il basso, a forma di $\cap$). La pendenza decresce.
- Un punto dove $f'' = 0$ e il segno cambia è un **punto di flesso** (cambio di concavità).

**Criterio della derivata seconda per i massimi/minimi:** se $f'(a) = 0$ (punto critico), allora:
- $f''(a) > 0$: minimo locale
- $f''(a) < 0$: massimo locale
- $f''(a) = 0$: test inconcludente (serve analisi del segno di $f'$)

---

## 11. Errori comuni

**Errore 1 — Confondere derivata e rapporto incrementale.**
La derivata è il *limite* del rapporto incrementale, non il rapporto per un $h$ fissato. Il rapporto incrementale per $h = 0.001$ non è la derivata, solo una buona approssimazione.

**Errore 2 — Dimenticare la chain rule.**
$$[\sin(x^2)]' = \cos(x^2) \quad ✗$$
$$[\sin(x^2)]' = 2x\cos(x^2) \quad ✓$$
Ogni volta che la variabile è "nascosta" dentro una funzione, si applica la chain rule. L'argomento interno porta con sé la sua derivata.

**Errore 3 — Derivata del prodotto come prodotto delle derivate.**
$$[x^2 \cdot \sin x]' \neq 2x \cdot \cos x \quad ✗$$
$$[x^2 \cdot \sin x]' = 2x\sin x + x^2\cos x \quad ✓$$

**Errore 4 — Confondere la costante $e$ con la funzione $e^x$.**
$(e)' = 0$, perché $e \approx 2.718$ è un numero fisso (costante).
$(e^x)' = e^x$, perché ora $x$ è la variabile che cambia.

**Errore 5 — Supporre che continuità implichi derivabilità.**
$f(x) = |x|$ è continua ma non derivabile in $x = 0$. Anche $f(x) = x^{1/3}$ è continua in $0$ ma ha derivata "verticale" ($\to \infty$): non derivabile. La continuità è necessaria ma non sufficiente per la derivabilità.

---

## 12. Applicazioni reali

**Fisica — leggi del moto.** La seconda legge di Newton $F = ma = m\,s''(t)$ esprime la forza come derivata seconda della posizione. Tutte le equazioni della meccanica classica, dell'elettromagnetismo e della meccanica quantistica sono equazioni differenziali: relazioni tra una funzione e le sue derivate.

**Economia — analisi marginale.** Il *costo marginale* $MC(q) = C'(q)$ misura il costo di produrre un'unità aggiuntiva. Un'impresa massimizza il profitto dove $\pi'(q) = 0$, ossia dove il ricavo marginale eguaglia il costo marginale. Queste sono applicazioni dirette della condizione $f'(a) = 0$.

**Ingegneria — controllo e ottimizzazione.** La progettazione di antenne, ponti, circuiti elettronici richiede la minimizzazione (o massimizzazione) di funzioni soggette a vincoli — sempre derivate.

**Machine Learning — gradiente discendente.** Il cuore di ogni algoritmo di training di reti neurali è l'aggiornamento dei pesi $w \leftarrow w - \alpha \frac{\partial L}{\partial w}$: la perdita $L$ viene minimizzata seguendo il gradiente (derivate parziali). La backpropagation è una catena sistematica di chain rule.

---

## 13. Riepilogo

| Concetto | Formula chiave |
|----------|---------------|
| Rapporto incrementale | $R(h) = \dfrac{f(a+h)-f(a)}{h}$ |
| Derivata (definizione) | $f'(a) = \lim_{h\to 0} R(h)$ |
| Significato geometrico | pendenza della tangente in $(a, f(a))$ |
| Retta tangente | $y = f(a) + f'(a)(x-a)$ |
| Derivata seconda | $f''(x)$ — concavità e accelerazione |
| Derivabilità $\Rightarrow$ continuità | (viceversa falso) |

Le **regole operative** da memorizzare: linearità, prodotto, quoziente, **chain rule** (la più usata e quella che si dimentica più spesso).

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo dalla definizione</summary>

Calcola $f'(2)$ per $f(x) = x^2 - 4x + 3$ usando la definizione come limite.

**Soluzione.**

$$f'(2) = \lim_{h\to 0} \frac{f(2+h) - f(2)}{h}$$

Calcoliamo $f(2+h) = (2+h)^2 - 4(2+h) + 3 = 4 + 4h + h^2 - 8 - 4h + 3 = h^2 - 1$.

E $f(2) = 4 - 8 + 3 = -1$.

$$f'(2) = \lim_{h\to 0} \frac{(h^2 - 1) - (-1)}{h} = \lim_{h\to 0} \frac{h^2}{h} = \lim_{h\to 0} h = 0$$

Verifica con le regole: $f'(x) = 2x - 4$, quindi $f'(2) = 4 - 4 = 0$. ✓

Geometricamente $f'(2) = 0$ significa che $x=2$ è un punto critico: in effetti $f(x) = (x-2)^2 - 1$ ha minimo in $x=2$.

</details>

<details>
<summary>Esercizio 2 — Retta tangente</summary>

Trova l'equazione della retta tangente a $f(x) = \sqrt{x}$ nel punto $(4, 2)$.

**Soluzione.**

$f'(x) = \dfrac{1}{2\sqrt{x}}$, quindi $f'(4) = \dfrac{1}{2\sqrt{4}} = \dfrac{1}{4}$.

Equazione della tangente in $(4, 2)$ con pendenza $\frac{1}{4}$:

$$y - 2 = \frac{1}{4}(x - 4) \implies y = \frac{x}{4} + 1$$

Verifica: per $x=4$, $y = 1 + 1 = 2$ ✓. La tangente è crescente con pendenza dolce ($\frac{1}{4}$), coerente con il fatto che $\sqrt{x}$ cresce lentamente per $x$ grandi.

</details>

<details>
<summary>Esercizio 3 — Chain rule</summary>

Deriva: $f(x) = e^{-x^2/2}$ (la forma non normalizzata della gaussiana).

**Soluzione.**

La funzione è $f = e^u$ con $u(x) = -x^2/2$. Per la chain rule:

$$f'(x) = e^u \cdot u'(x) = e^{-x^2/2} \cdot \left(-x\right) = -x\,e^{-x^2/2}$$

Quindi $f'(x) = -xe^{-x^2/2}$.

Interpretazione: $f'(x) = 0$ in $x = 0$ (massimo della gaussiana), $f'(x) < 0$ per $x > 0$ (la funzione scende), $f'(x) > 0$ per $x < 0$ (la funzione sale). Tutto coerente con la forma a campana.

</details>

<details>
<summary>Esercizio 4 — Regola del prodotto</summary>

Deriva: $g(x) = x^3 \ln x$ per $x > 0$.

**Soluzione.**

$g = f_1 \cdot f_2$ con $f_1 = x^3$ e $f_2 = \ln x$.

$$g'(x) = f_1'(x) f_2(x) + f_1(x) f_2'(x) = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2 \ln x + x^2$$

$$= x^2(3\ln x + 1)$$

Ponendo $g'(x) = 0$: $x^2 = 0$ (impossibile per $x>0$) oppure $3\ln x + 1 = 0 \Rightarrow \ln x = -\frac{1}{3} \Rightarrow x = e^{-1/3}$.

</details>

<details>
<summary>Esercizio 5 — Punti critici e concavità</summary>

Studia i punti critici di $f(x) = x^3 - 3x$ e determina se sono massimi o minimi.

**Soluzione.**

$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$.

Punti critici: $f'(x) = 0 \Rightarrow x = \pm 1$.

$f''(x) = 6x$.

- In $x = 1$: $f''(1) = 6 > 0$ → **minimo locale**. $f(1) = 1 - 3 = -2$.
- In $x = -1$: $f''(-1) = -6 < 0$ → **massimo locale**. $f(-1) = -1 + 3 = 2$.

Quindi $f$ ha un massimo locale di $2$ in $x=-1$ e un minimo locale di $-2$ in $x=1$.

</details>

<details>
<summary>Esercizio 6 — Non derivabilità</summary>

Mostra che $f(x) = x^{2/3}$ è continua in $x = 0$ ma non derivabile.

**Soluzione.**

**Continuità:** $\lim_{x\to 0} x^{2/3} = 0 = f(0)$. ✓ Continua.

**Derivabilità:** calcoliamo il rapporto incrementale in $x=0$:

$$\frac{f(0+h)-f(0)}{h} = \frac{h^{2/3}}{h} = h^{-1/3} = \frac{1}{h^{1/3}}$$

Quando $h \to 0^+$: $h^{1/3} \to 0^+$, quindi $\frac{1}{h^{1/3}} \to +\infty$.

Il limite è $+\infty$: non è finito, quindi $f'(0)$ non esiste. La funzione ha una **tangente verticale** in $x = 0$ (geometricamente: il grafico si raddrizza verticalmente). Continua ma non derivabile. $\square$

</details>
