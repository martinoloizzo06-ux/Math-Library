---
id: analisi-15-integrali-impropri
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Integrali impropri
title_en: Improper integrals
level: blue
order: 15
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 7 — Integrali impropri"
stato: da-rielaborare
---

## 1. Intuizione — Infinito controllabile?

L'integrale definito $\int_a^b f(x)\,dx$ è stato costruito su intervalli **finiti** e per funzioni **limitate**. Ma molte situazioni importanti richiedono di andare oltre:

- **Probabilità:** la curva normale si estende da $-\infty$ a $+\infty$ — eppure l'area totale deve essere 1.
- **Fisica:** l'energia necessaria per portare un oggetto all'infinito contro la gravità è un integrale su $[R, +\infty)$.
- **Segnali:** la trasformata di Laplace integra da 0 a $+\infty$.

La domanda è: può l'area sotto una curva che si estende all'infinito essere **finita**? La risposta è sì — ma non sempre. Un integrale improprio "converge" se il limite esiste ed è finito; altrimenti "diverge".

Un'analogia: la serie $1 + \frac{1}{4} + \frac{1}{9} + \cdots = \frac{\pi^2}{6}$ converge nonostante abbia infiniti termini. Lo stesso accade con certi integrali su $[1, +\infty)$.

---

## 2. Prerequisiti

- Integrale definito e TFC: $\int_a^b f(x)\,dx = F(b) - F(a)$
- Limiti all'infinito: $\lim_{t\to+\infty}$, $\lim_{t\to a^+}$
- Comportamento asintotico: $\lim_{x\to+\infty}\frac{f(x)}{g(x)}$
- Primitive di $x^p$, $e^{-x}$, $\frac{1}{x}$
- Confronto tra funzioni asintoticamente equivalenti

---

## 3. Teoria

### Tipo I — Intervallo illimitato

**Estremo superiore infinito:**

$$\int_a^{+\infty} f(x)\,dx = \lim_{t\to+\infty}\int_a^t f(x)\,dx$$

**Estremo inferiore infinito:**

$$\int_{-\infty}^b f(x)\,dx = \lim_{t\to-\infty}\int_t^b f(x)\,dx$$

**Entrambi gli estremi infiniti** (per funzioni su $\mathbb{R}$, si spezza in un punto $c$ qualsiasi):

$$\int_{-\infty}^{+\infty} f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^{+\infty} f(x)\,dx$$

L'integrale converge se e solo se **entrambi** i pezzi convergono.

### Tipo II — Singolarità nell'intervallo

Se $f$ ha una singolarità in $x = b$ (ovvero $\lim_{x\to b^-} f(x) = \pm\infty$):

$$\int_a^b f(x)\,dx = \lim_{t\to b^-}\int_a^t f(x)\,dx$$

Se la singolarità è in $x = a$:

$$\int_a^b f(x)\,dx = \lim_{t\to a^+}\int_t^b f(x)\,dx$$

Se la singolarità è in un punto interno $c \in (a, b)$, si spezza:

$$\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$$

e l'integrale converge solo se **entrambe** le parti convergono.

### L'integrale fondamentale $\int_1^{+\infty} \frac{dx}{x^p}$

Questo integrale è il "caso di riferimento" per tutti i confronti:

$$\int_1^{+\infty}\frac{dx}{x^p} = \begin{cases} \dfrac{1}{p-1} & \text{se } p > 1 \quad \text{(converge)} \\[6pt] +\infty & \text{se } p \leq 1 \quad \text{(diverge)} \end{cases}$$

**Dimostrazione:** per $p \neq 1$:
$$\int_1^t x^{-p}\,dx = \left[\frac{x^{1-p}}{1-p}\right]_1^t = \frac{t^{1-p}-1}{1-p}$$
Per $p > 1$: $1-p < 0$, quindi $t^{1-p} \to 0$ e l'integrale converge a $\frac{1}{p-1}$.
Per $p < 1$: $1-p > 0$, quindi $t^{1-p} \to +\infty$ e diverge.
Per $p = 1$: $\int_1^t \frac{dx}{x} = \ln t \to +\infty$ (diverge).

**Analogamente** per la singolarità in 0: $\int_0^1 \frac{dx}{x^p}$ converge se $p < 1$, diverge se $p \geq 1$.

### Criteri di convergenza

**Criterio del confronto diretto:** se $0 \leq f(x) \leq g(x)$ per $x \geq a$:
- Se $\int_a^{+\infty} g(x)\,dx$ converge, allora $\int_a^{+\infty} f(x)\,dx$ converge.
- Se $\int_a^{+\infty} f(x)\,dx$ diverge, allora $\int_a^{+\infty} g(x)\,dx$ diverge.

**Criterio del confronto asintotico:** se $f(x), g(x) \geq 0$ e

$$\lim_{x\to+\infty}\frac{f(x)}{g(x)} = L \in (0, +\infty)$$

allora $\int_a^{+\infty} f$ e $\int_a^{+\infty} g$ hanno lo **stesso carattere** (entrambe convergono o entrambe divergono).

**Criterio di convergenza assoluta:** se $\int_a^{+\infty} \lvert f(x)\rvert\,dx$ converge, allora $\int_a^{+\infty} f(x)\,dx$ converge (si dice che converge assolutamente).

---

## 4. Derivazione — Integrale gaussiano

Un risultato celebre: $\displaystyle\int_{-\infty}^{+\infty} e^{-x^2}\,dx = \sqrt{\pi}$.

Questo integrale non si calcola con primitive elementari, ma la sua convergenza si dimostra con il confronto.

**Convergenza:** per $x > 1$, si ha $x^2 > x$, quindi $e^{-x^2} < e^{-x}$. Poiché:

$$\int_1^{+\infty} e^{-x}\,dx = \left[-e^{-x}\right]_1^{+\infty} = e^{-1}$$

converge, per il criterio del confronto anche $\int_1^{+\infty} e^{-x^2}\,dx$ converge.

Per $x \in [0, 1]$ la funzione è continua e limitata, quindi $\int_0^1 e^{-x^2}\,dx$ è un integrale ordinario. Per simmetria ($e^{-x^2}$ è pari):

$$\int_{-\infty}^{+\infty} e^{-x^2}\,dx = 2\int_0^{+\infty} e^{-x^2}\,dx$$

Il calcolo del valore esatto ($\sqrt{\pi}$) richiede integrali doppi — ma la **convergenza** segue dal confronto. Questo dimostra come i criteri siano strumenti potenti anche quando non si può calcolare il valore esatto.

---

## 5. Esempi

**Esempio 1 — Tipo I convergente**

$$\int_0^{+\infty} e^{-2x}\,dx = \lim_{t\to+\infty}\int_0^t e^{-2x}\,dx = \lim_{t\to+\infty}\left[-\frac{e^{-2x}}{2}\right]_0^t = \lim_{t\to+\infty}\left(-\frac{e^{-2t}}{2}+\frac{1}{2}\right) = \frac{1}{2}$$

---

**Esempio 2 — Tipo I divergente**

$$\int_1^{+\infty}\frac{dx}{x} = \lim_{t\to+\infty}\Big[\ln x\Big]_1^t = \lim_{t\to+\infty}\ln t = +\infty \quad \text{(diverge)}$$

Attenzione: $\frac{1}{x} \to 0$, ma la convergenza a 0 non basta per la convergenza dell'integrale.

---

**Esempio 3 — Tipo II: singolarità all'estremo**

$$\int_0^1 \frac{dx}{\sqrt{x}} = \lim_{t\to 0^+}\int_t^1 x^{-1/2}\,dx = \lim_{t\to 0^+}\Big[2\sqrt{x}\Big]_t^1 = \lim_{t\to 0^+}(2-2\sqrt{t}) = 2$$

La funzione esplode in $x=0$, ma l'integrale è finito.

---

**Esempio 4 — Tipo II: singolarità interna**

$$\int_0^2\frac{dx}{(x-1)^{2/3}}$$

Singolarità in $x=1$ (interno). Spezziamo:

$\displaystyle\int_0^1(x-1)^{-2/3}dx = \left[3(x-1)^{1/3}\right]_0^1 = 0 - 3(-1)^{1/3} = 0-3\cdot(-1) = 3$

$\displaystyle\int_1^2(x-1)^{-2/3}dx = \left[3(x-1)^{1/3}\right]_1^2 = 3\cdot 1 - 0 = 3$

Totale: $3 + 3 = 6$.

---

**Esempio 5 — Confronto per convergenza**

Stabilire se $\displaystyle\int_1^{+\infty}\frac{dx}{x^2+\sqrt{x}}$ converge.

Per $x \geq 1$: $x^2 + \sqrt{x} \geq x^2$, quindi $\dfrac{1}{x^2+\sqrt{x}} \leq \dfrac{1}{x^2}$.

Poiché $\int_1^{+\infty}\frac{dx}{x^2} = 1$ converge ($p=2>1$), per il confronto diretto anche l'integrale dato **converge**.

---

**Esempio 6 — Confronto asintotico**

Stabilire se $\displaystyle\int_1^{+\infty}\frac{x+1}{x^3-2}\,dx$ converge.

Per $x \to +\infty$: $\dfrac{x+1}{x^3-2} \sim \dfrac{x}{x^3} = \dfrac{1}{x^2}$.

Il limite del rapporto: $\displaystyle\lim_{x\to+\infty}\frac{(x+1)/(x^3-2)}{1/x^2} = \lim_{x\to+\infty}\frac{x^2(x+1)}{x^3-2} = 1 \in (0,+\infty)$.

Poiché $\int_1^{+\infty}\frac{dx}{x^2}$ converge, per il criterio asintotico anche l'integrale dato **converge**.

---

**Esempio 7 — Integrale con oscillazioni**

$$\int_1^{+\infty}\frac{\sin x}{x^2}\,dx$$

$\left\lvert\dfrac{\sin x}{x^2}\right\rvert \leq \dfrac{1}{x^2}$ per ogni $x$. Poiché $\int_1^{+\infty}\frac{dx}{x^2}=1$ converge, l'integrale **converge assolutamente**, quindi converge.

---

**Esempio 8 — Divergenza sottile: $1/x$ vs $1/x^{1.001}$**

$$\int_1^{+\infty}\frac{dx}{x^{1.001}} = \frac{1}{0.001} = 1000 \quad \text{(converge!)}$$

$$\int_1^{+\infty}\frac{dx}{x} = +\infty \quad \text{(diverge)}$$

La soglia $p = 1$ è esatta: qualsiasi esponente superiore (anche di pochissimo) porta alla convergenza.

---

## 6. Grafico

Confronto tra $f(x) = 1/x$ (diverge su $[1,+\infty)$) e $g(x) = 1/x^2$ (converge su $[1,+\infty)$). Le due funzioni sembrano simili, ma le aree sotto di esse sono completamente diverse.

```plot
{"title":"1/x (diverge) vs 1/x² (converge) su [1,∞)","fn":"1/x","fn2":"1/(x*x)","domain":[0.5,6],"yDomain":[-0.1,2],"label1":"1/x","label2":"1/x²"}
```

L'area sotto $1/x$ cresce senza limite; quella sotto $1/x^2$ rimane finita (vale 1 su $[1,+\infty)$).

---

## 7. Slider — L'integrale $\int_1^{+\infty} 1/x^p\,dx$ al variare di $p$

```slider
{"title":"Convergenza di ∫₁^∞ 1/xᵖ dx al variare di p","fn":"1/Math.pow(x, a)","domain":[0.5,8],"yDomain":[-0.1,2],"pname":"a","pmin":0.5,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"p","label1":"1/xᵖ"}
```

Con $p \leq 1$ la curva decade troppo lentamente e l'area è infinita. Con $p > 1$ la curva cala abbastanza in fretta e l'area è finita. La transizione avviene esattamente in $p = 1$.

---

## 8. Errori comuni

**Errore 1 — Applicare il TFC direttamente su un intervallo con singolarità**

- Sbagliato: $\int_{-1}^1 \frac{dx}{x^2} = \left[-\frac{1}{x}\right]_{-1}^1 = -1-1 = -2$ (risposta negativa per una funzione positiva!)
- Corretto: $1/x^2$ ha singolarità in $x=0$. L'integrale va spezzato: $\int_{-1}^0 \frac{dx}{x^2} + \int_0^1 \frac{dx}{x^2}$. Entrambi divergono: l'integrale **diverge**.

---

**Errore 2 — Credere che $f(x)\to 0$ implichi convergenza**

- Sbagliato: "$1/x \to 0$, quindi $\int_1^{+\infty}\frac{dx}{x}$ converge"
- Corretto: converge a zero non basta. Bisogna che la coda decada abbastanza in fretta. $\int_1^{+\infty}\frac{dx}{x} = +\infty$.

---

**Errore 3 — Non spezzare l'integrale in presenza di singolarità interna**

- Sbagliato: $\int_{-1}^1 \frac{dx}{x} = [\ln\lvert x\rvert]_{-1}^1 = 0$
- Corretto: $\lim_{t\to 0^-}\int_{-1}^t \frac{dx}{x} = -\infty$ (diverge). L'integrale non esiste nel senso ordinario.

(Nota: esiste come "valore principale di Cauchy" $= 0$, ma questo è un concetto diverso.)

---

**Errore 4 — Confronto in direzione sbagliata**

Per mostrare convergenza, bisogna trovare una funzione **maggiore** che converge; per mostrare divergenza, una funzione **minore** che diverge.

- Sbagliato: "siccome $\frac{1}{x+1} \leq \frac{1}{x}$ e $\int_1^\infty \frac{dx}{x}$ diverge, allora $\int_1^\infty\frac{dx}{x+1}$ converge"
- Corretto: si ha $f \leq g$ e $g$ diverge, ma questo non dice niente su $f$. Bisogna trovare una funzione minore che diverge. Qui $\frac{1}{x+1} \sim \frac{1}{x}$ quindi il confronto asintotico dà divergenza.

---

**Errore 5 — Dimenticare di verificare il carattere di entrambe le parti**

Quando l'integrale va spezzato per una singolarità interna, entrambe le parti devono convergere. Se una diverge, l'intero integrale diverge — non ci sono compensazioni.

---

**Errore 6 — Confondere convergenza e valore**

- Sbagliato: "$\int_1^{+\infty} e^{-x}\,dx$ converge quindi vale 0"
- Corretto: $\int_1^{+\infty} e^{-x}\,dx = e^{-1} \approx 0.368 \neq 0$

"Convergere" significa che il valore è finito, non che è zero.

---

## 9. Applicazioni reali

**Probabilità — Densità di probabilità.** Le distribuzioni di probabilità continue (normale, esponenziale, gamma) sono definite su intervalli illimitati, con la proprietà $\int_{-\infty}^{+\infty}f(x)\,dx = 1$. La convergenza di questi integrali è fondamentale: garantisce che la probabilità totale sia ben definita. Per l'esponenziale $f(x) = \lambda e^{-\lambda x}$ su $[0,+\infty)$: l'integrale vale 1 per ogni $\lambda > 0$.

**Trasformata di Laplace.** La trasformata $\mathcal{L}\{f\}(s) = \int_0^{+\infty}e^{-st}f(t)\,dt$ è lo strumento principe per risolvere equazioni differenziali in ingegneria e fisica. Converge quando $s$ è abbastanza grande (regione di convergenza). Per $f(t) = e^{at}$: la trasformata è $\frac{1}{s-a}$ e converge per $s > a$. La soluzione di un circuito elettrico, un sistema meccanico smorzato, o un controllo di retroazione si trova con questa tecnica.

**Fisica — Forza gravitazionale e potenziale.** Il lavoro necessario per portare una massa da $R$ (raggio della Terra) all'infinito contro la gravità è $W = \int_R^{+\infty}\frac{GmM}{r^2}\,dr = \frac{GmM}{R}$ — un integrale improprio convergente! Questo è l'**energia di escape**: la velocità minima per lasciare un pianeta si ricava da questo calcolo. Per la Luna (bassa gravità) è circa 2.4 km/s; per la Terra, 11.2 km/s.

---

## 10. Riepilogo

| Tipo | Definizione | Converge se |
| --- | --- | --- |
| Tipo I ($+\infty$) | $\lim_{t\to+\infty}\int_a^t f\,dx$ | il limite esiste ed è finito |
| Tipo I ($-\infty$) | $\lim_{t\to-\infty}\int_t^b f\,dx$ | il limite esiste ed è finito |
| Tipo II (sing. in $b$) | $\lim_{t\to b^-}\int_a^t f\,dx$ | il limite esiste ed è finito |
| Tipo II (sing. in $a$) | $\lim_{t\to a^+}\int_t^b f\,dx$ | il limite esiste ed è finito |
| $\int_1^{+\infty}x^{-p}$ | — | $p > 1$ |
| $\int_0^1 x^{-p}$ | — | $p < 1$ |
| Confronto diretto | $0 \leq f \leq g$ | $g$ converge $\Rightarrow$ $f$ converge |
| Confronto asintotico | $f/g \to L \in (0,\infty)$ | stesso carattere di $g$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Tipo I: calcolo diretto</summary>

Calcolare $\displaystyle\int_1^{+\infty}\frac{dx}{x^3}$.

**Soluzione:**

$\displaystyle\int_1^t x^{-3}\,dx = \left[-\frac{1}{2x^2}\right]_1^t = -\frac{1}{2t^2}+\frac{1}{2}$

Per $t\to+\infty$: $-\frac{1}{2t^2}\to 0$. L'integrale **converge** e vale $\dfrac{1}{2}$.

(Coerente con la formula generale: $\frac{1}{p-1} = \frac{1}{3-1} = \frac{1}{2}$.)

</details>

<details>
<summary>Esercizio 2 — Tipo I con esponenziale</summary>

Calcolare $\displaystyle\int_0^{+\infty}xe^{-x}\,dx$.

**Soluzione:**

Integriamo per parti: $u=x$, $dv=e^{-x}\,dx$ → $du=dx$, $v=-e^{-x}$:

$$\int_0^t xe^{-x}\,dx = \left[-xe^{-x}\right]_0^t + \int_0^t e^{-x}\,dx = -te^{-t} + \left[-e^{-x}\right]_0^t = -te^{-t} - e^{-t} + 1$$

Per $t\to+\infty$: $te^{-t}\to 0$ e $e^{-t}\to 0$. L'integrale **converge** e vale $\mathbf{1}$.

(Questo è il valore di $\Gamma(2) = 1! = 1$.)

</details>

<details>
<summary>Esercizio 3 — Tipo II: singolarità all'estremo</summary>

Studiare $\displaystyle\int_0^1\frac{\ln x}{\sqrt{x}}\,dx$.

**Soluzione:**

Singolarità in $x=0$ (sia $\ln x \to -\infty$ che $1/\sqrt{x}\to+\infty$). Integriamo per parti su $[t,1]$: $u=\ln x$, $dv=x^{-1/2}dx$ → $du=\frac{dx}{x}$, $v=2\sqrt{x}$:

$$\int_t^1\frac{\ln x}{\sqrt{x}}dx = \Big[2\sqrt{x}\ln x\Big]_t^1 - \int_t^1\frac{2\sqrt{x}}{x}dx = -2\sqrt{t}\ln t - 2\Big[2\sqrt{x}\Big]_t^1 = -2\sqrt{t}\ln t - 4 + 4\sqrt{t}$$

Per $t\to 0^+$: $\sqrt{t}\ln t \to 0$ (si verifica con L'Hôpital) e $4\sqrt{t}\to 0$.

L'integrale **converge** e vale $-4$.

</details>

<details>
<summary>Esercizio 4 — Confronto diretto</summary>

Stabilire se $\displaystyle\int_1^{+\infty}\frac{\sin^2 x}{x^2}\,dx$ converge.

**Soluzione:**

$0 \leq \sin^2 x \leq 1$, quindi $0 \leq \dfrac{\sin^2 x}{x^2} \leq \dfrac{1}{x^2}$ per ogni $x \geq 1$.

Poiché $\displaystyle\int_1^{+\infty}\frac{dx}{x^2} = 1$ converge ($p=2>1$), per il confronto diretto anche $\displaystyle\int_1^{+\infty}\frac{\sin^2 x}{x^2}\,dx$ **converge**.

</details>

<details>
<summary>Esercizio 5 — Confronto asintotico</summary>

Studiare il carattere di $\displaystyle\int_2^{+\infty}\frac{x^2+3}{x^4-1}\,dx$.

**Soluzione:**

Per $x\to+\infty$: $\dfrac{x^2+3}{x^4-1} \sim \dfrac{x^2}{x^4} = \dfrac{1}{x^2}$.

Verifica del limite: $\displaystyle\lim_{x\to+\infty}\frac{(x^2+3)/(x^4-1)}{1/x^2} = \lim_{x\to+\infty}\frac{x^2(x^2+3)}{x^4-1} = 1 \in (0,+\infty)$.

Poiché $\int_2^{+\infty}\frac{dx}{x^2}$ converge, per il confronto asintotico anche l'integrale dato **converge**.

</details>

<details>
<summary>Esercizio 6 — Divergenza</summary>

Dimostrare che $\displaystyle\int_1^{+\infty}\frac{dx}{\sqrt{x+1}}$ diverge.

**Soluzione:**

Per $x \geq 1$: $\sqrt{x+1} \leq \sqrt{2x} = \sqrt{2}\,\sqrt{x}$, quindi $\dfrac{1}{\sqrt{x+1}} \geq \dfrac{1}{\sqrt{2}\,\sqrt{x}} = \dfrac{1}{\sqrt{2}}\,x^{-1/2}$.

Poiché $\int_1^{+\infty}x^{-1/2}\,dx$ diverge ($p=1/2 < 1$), per il confronto diretto anche $\int_1^{+\infty}\frac{dx}{\sqrt{x+1}}$ **diverge**.

</details>

<details>
<summary>Esercizio 7 — Tipo con entrambi gli estremi</summary>

Calcolare $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{1+x^2}$.

**Soluzione:**

Spezziamo in $c=0$:

$\displaystyle\int_0^{+\infty}\frac{dx}{1+x^2} = \lim_{t\to+\infty}\Big[\arctan x\Big]_0^t = \frac{\pi}{2}$

$\displaystyle\int_{-\infty}^0\frac{dx}{1+x^2} = \lim_{t\to-\infty}\Big[\arctan x\Big]_t^0 = 0-(-\frac{\pi}{2}) = \frac{\pi}{2}$

Totale: $\dfrac{\pi}{2}+\dfrac{\pi}{2} = \pi$.

Questo è il risultato chiave della distribuzione di Cauchy: l'area totale sotto la densità è $\pi$ (si normalizza dividendo per $\pi$).

</details>

<details>
<summary>Esercizio 8 — Singolarità sottile: determinare i valori di p</summary>

Per quali valori di $p > 0$ converge $\displaystyle\int_0^2 \frac{dx}{x^p(2-x)^p}$?

**Soluzione:**

L'integranda ha singolarità in $x=0$ e in $x=2$. Spezziamo in $c=1$:

**Vicino a $x=0$:** $\dfrac{1}{x^p(2-x)^p} \sim \dfrac{1}{x^p \cdot 2^p} = \dfrac{1}{2^p}\,x^{-p}$.

Per il confronto asintotico, $\int_0^1 x^{-p}\,dx$ converge sse $p < 1$.

**Vicino a $x=2$:** con $u = 2-x$, $\dfrac{1}{x^p(2-x)^p} \sim \dfrac{1}{2^p\,u^p}$.

Analogamente converge sse $p < 1$.

Conclusione: l'integrale **converge** se e solo se $0 < p < 1$.

</details>
