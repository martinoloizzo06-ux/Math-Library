---
id: analisi-11-integrale-indefinito
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Integrale indefinito e primitive
title_en: Indefinite integral and antiderivatives
level: blue
order: 11
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 5 — Integrali"
---

## 1. Intuizione — Ricostruire da una traccia

Immagina di ricevere la velocità di un'auto in ogni istante: $v(t)$ ti dice quanto veloce va in quel preciso momento. Puoi ricavare la **posizione** $s(t)$? Sì — ma con un'ambiguità: non sai dove si trovava l'auto all'inizio. Se $s'(t) = v(t)$, allora anche $s(t) + 5$ km (o $+100$ km, o $-3$ km) soddisfa la stessa relazione.

L'integrale indefinito è esattamente questo processo: **dato il "tasso di variazione" $f(x)$, trovare la funzione $F(x)$ che lo genera** — sapendo che la risposta non è unica, ma definita a meno di una costante.

Un'altra analogia: la derivata è come "scendere una scala" (da $F$ a $f$). L'integrale indefinito è **risalire quella scala** — e la costante $C$ riflette il fatto che non sai da che gradino sei partito.

---

## 2. Prerequisiti

- Derivate delle funzioni elementari: $\frac{d}{dx}x^n = nx^{n-1}$, $\frac{d}{dx}\sin x = \cos x$, ecc.
- Regola della catena: $\frac{d}{dx}f(g(x)) = f'(g(x))\cdot g'(x)$
- Regola del prodotto: $\frac{d}{dx}[u\cdot v] = u'v + uv'$
- Nozione di funzione continua su un intervallo
- Proprietà di $\ln x$, $e^x$, $\sin x$, $\cos x$

---

## 3. Teoria

### Definizione di primitiva

Una funzione $F(x)$ è una **primitiva** (o antiderivata) di $f(x)$ sull'intervallo $I$ se:

$$F'(x) = f(x) \quad \text{per ogni } x \in I$$

**Teorema di unicità a meno di costante:** se $F$ e $G$ sono entrambe primitive di $f$ su $I$, allora esiste una costante $C \in \mathbb{R}$ tale che $G(x) = F(x) + C$ per ogni $x \in I$.

*Dimostrazione rapida:* $(G - F)' = G' - F' = f - f = 0$. Una funzione con derivata identicamente nulla su un intervallo è costante.

### Integrale indefinito

L'**integrale indefinito** di $f$ è la famiglia di tutte le primitive:

$$\int f(x)\,dx = F(x) + C$$

dove:
- $\int$ è il **simbolo di integrale** (S allungata, da "Summa")
- $f(x)$ è l'**integranda**
- $dx$ indica la **variabile di integrazione**
- $F(x)$ è **una** primitiva qualunque
- $C \in \mathbb{R}$ è la **costante di integrazione** (non va mai dimenticata)

### Linearità dell'integrale

$$\int [\alpha f(x) + \beta g(x)]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx$$

### Tavola degli integrali fondamentali

| $f(x)$ | $\int f(x)\,dx$ | Verifica: $(F)'$ |
| --- | --- | --- |
| $x^n$, $n \neq -1$ | $\dfrac{x^{n+1}}{n+1} + C$ | $\frac{n+1}{n+1}x^n = x^n$ ✓ |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert + C$ | $\frac{1}{x}$ ✓ |
| $e^x$ | $e^x + C$ | $e^x$ ✓ |
| $a^x$ | $\dfrac{a^x}{\ln a} + C$ | $\frac{\ln a \cdot a^x}{\ln a} = a^x$ ✓ |
| $\sin x$ | $-\cos x + C$ | $\sin x$ ✓ |
| $\cos x$ | $\sin x + C$ | $\cos x$ ✓ |
| $\dfrac{1}{\cos^2 x}$ | $\tan x + C$ | $\sec^2 x$ ✓ |
| $\dfrac{1}{\sin^2 x}$ | $-\cot x + C$ | $\csc^2 x$ ✓ |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$ | $\frac{1}{\sqrt{1-x^2}}$ ✓ |
| $\dfrac{1}{1+x^2}$ | $\arctan x + C$ | $\frac{1}{1+x^2}$ ✓ |

---

## 4. Derivazione — Integrazione per parti

La formula per parti deriva direttamente dalla regola del prodotto. Siano $u(x)$ e $v(x)$ due funzioni derivabili. Allora:

$$\frac{d}{dx}[u(x)\cdot v(x)] = u'(x)v(x) + u(x)v'(x)$$

Integrando entrambi i membri:

$$u(x)v(x) = \int u'(x)v(x)\,dx + \int u(x)v'(x)\,dx$$

Riorganizzando (con la notazione $dv = v'(x)\,dx$ e $du = u'(x)\,dx$):

$$\boxed{\int u\,dv = uv - \int v\,du}$$

**Come scegliere $u$ e $dv$? Regola LIATE** (in ordine di preferenza per $u$):

| Lettera | Tipo di funzione | Esempio |
| --- | --- | --- |
| **L** | Logaritmica | $\ln x$, $\log_a x$ |
| **I** | Inversa trigonometrica | $\arcsin x$, $\arctan x$ |
| **A** | Algebrica (polinomi) | $x^2$, $x^3 + 1$ |
| **T** | Trigonometrica | $\sin x$, $\cos x$ |
| **E** | Esponenziale | $e^x$, $2^x$ |

La funzione di tipo più alto nella lista diventa $u$; il resto diventa $dv$.

**Esempio guidato:** $\displaystyle\int x e^x\,dx$

- $u = x$ (A), $dv = e^x\,dx$ (E)
- $du = dx$, $v = e^x$

$$\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = e^x(x-1) + C$$

**Verifica:** $\frac{d}{dx}[e^x(x-1)] = e^x(x-1) + e^x = e^x \cdot x$ ✓

---

## 5. Esempi

**Esempio 1 — Polinomio (integrazione immediata)**

$$\int (3x^2 - 5x + 2)\,dx = x^3 - \frac{5x^2}{2} + 2x + C$$

Ogni termine si integra separatamente con la regola $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$.

---

**Esempio 2 — Sostituzione semplice**

$$\int 2x\cos(x^2)\,dx$$

Poniamo $u = x^2$, quindi $du = 2x\,dx$. L'integrale diventa:

$$\int \cos(u)\,du = \sin u + C = \sin(x^2) + C$$

*Regola pratica:* se vedo $f(g(x)) \cdot g'(x)$, sostituisco $u = g(x)$.

---

**Esempio 3 — Sostituzione con aggiustamento**

$$\int x\sqrt{1 + x^2}\,dx$$

Poniamo $u = 1 + x^2$, $du = 2x\,dx$, quindi $x\,dx = \frac{du}{2}$:

$$\int \sqrt{u}\,\frac{du}{2} = \frac{1}{2}\cdot\frac{2}{3}u^{3/2} + C = \frac{1}{3}(1+x^2)^{3/2} + C$$

---

**Esempio 4 — Integrazione per parti: $\int x\ln x\,dx$**

Qui $u = \ln x$ (L), $dv = x\,dx$, quindi $du = \frac{1}{x}dx$, $v = \frac{x^2}{2}$:

$$\frac{x^2}{2}\ln x - \int\frac{x^2}{2}\cdot\frac{1}{x}\,dx = \frac{x^2}{2}\ln x - \frac{1}{2}\int x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

---

**Esempio 5 — Per parti due volte: $\int x^2 e^x\,dx$**

Prima passata: $u = x^2$, $dv = e^x\,dx$:

$$x^2 e^x - 2\int x e^x\,dx$$

Seconda passata (vedi Esempio guidato sopra): $\int x e^x\,dx = e^x(x-1) + C$

$$\int x^2 e^x\,dx = x^2 e^x - 2e^x(x-1) + C = e^x(x^2 - 2x + 2) + C$$

---

**Esempio 6 — Integrale ciclico: $\int e^x\sin x\,dx$**

$u = \sin x$, $dv = e^x\,dx$ → $du = \cos x\,dx$, $v = e^x$:

$$I = e^x\sin x - \int e^x\cos x\,dx$$

Seconda integrazione: $u = \cos x$, $dv = e^x\,dx$:

$$\int e^x\cos x\,dx = e^x\cos x + \int e^x\sin x\,dx = e^x\cos x + I$$

Sostituendo: $I = e^x\sin x - e^x\cos x - I$, quindi $2I = e^x(\sin x - \cos x)$:

$$\int e^x\sin x\,dx = \frac{e^x(\sin x - \cos x)}{2} + C$$

---

**Esempio 7 — Sostituzione con radice: $\int \frac{x}{\sqrt{x+1}}\,dx$**

Poniamo $u = x + 1$ (quindi $x = u - 1$), $du = dx$:

$$\int \frac{u-1}{\sqrt{u}}\,du = \int (u^{1/2} - u^{-1/2})\,du = \frac{2}{3}u^{3/2} - 2u^{1/2} + C = \frac{2}{3}(x+1)^{3/2} - 2\sqrt{x+1} + C$$

---

## 6. Grafico

Confronto tra una funzione $f(x) = 2x$ e una sua primitiva $F(x) = x^2$: dove $f > 0$, la primitiva cresce; dove $f < 0$, decresce.

```plot
{"title":"f(x)=2x e la sua primitiva F(x)=x²","fn":"x*x","fn2":"2*x","domain":[-3,3],"yDomain":[-1,10],"label1":"F(x)=x²","label2":"f(x)=2x"}
```

Osserva che il minimo di $F$ (in $x=0$) corrisponde esattamente allo zero di $f$ — la derivata di $F$ è $f$.

---

## 7. Slider — Effetto della costante di integrazione

La famiglia di primitive $F(x) = x^2 + C$ al variare di $C$: tutte hanno la stessa forma, traslate verticalmente.

```slider
{"title":"Famiglia di primitive: F(x) = x² + C","fn":"x*x + a","domain":[-3,3],"yDomain":[-5,15],"pname":"a","pmin":-4,"pmax":4,"pdefault":0,"pstep":0.5,"plabel":"C","label1":"x² + C"}
```

Ogni valore di $C$ corrisponde a una scelta diversa di condizione iniziale (es. "dove si trova l'auto al tempo zero").

---

## 8. Errori comuni

**Errore 1 — Dimenticare la costante $C$**

- Sbagliato: $\int 2x\,dx = x^2$
- Corretto: $\int 2x\,dx = x^2 + C$

La costante è obbligatoria: l'integrale indefinito rappresenta una **famiglia** di funzioni.

---

**Errore 2 — Integrare $1/x$ come potenza**

- Sbagliato: $\int \frac{1}{x}\,dx = \frac{x^0}{0} + C$ (divisione per zero!)
- Corretto: $\int \frac{1}{x}\,dx = \ln\lvert x\rvert + C$

La formula $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ vale solo per $n \neq -1$.

---

**Errore 3 — Scambiare $u$ e $dv$ nell'integrazione per parti**

- Sbagliato (rende più difficile): per $\int x\ln x\,dx$, scegliere $u=x$, $dv = \ln x\,dx$
- Corretto: scegliere $u = \ln x$ (L viene prima di A nella regola LIATE)

Scegliere male rende l'integrale $\int v\,du$ ancora più complesso.

---

**Errore 4 — Sostituzione senza cambiare $dx$**

- Sbagliato: $\int \cos(x^2)\,dx \overset{u=x^2}{=} \int \cos u\,du$
- Corretto: $du = 2x\,dx$, quindi $dx = \frac{du}{2x}$; ma qui manca il fattore $2x$ nell'integranda, quindi la sostituzione non funziona direttamente

La sostituzione richiede che **tutti i fattori in $x$ si cancellino** dopo aver espresso $dx$ in termini di $du$.

---

**Errore 5 — Integrale di un prodotto come prodotto di integrali**

- Sbagliato: $\int f(x)g(x)\,dx = \left(\int f\,dx\right)\cdot\left(\int g\,dx\right)$
- Corretto: non esiste tale formula. Usare per parti o sostituzione.

---

**Errore 6 — Perdere il valore assoluto in $\ln$**

- Sbagliato: $\int \frac{1}{x}\,dx = \ln x + C$
- Corretto: $\int \frac{1}{x}\,dx = \ln\lvert x\rvert + C$

Il logaritmo è definito solo per argomenti positivi, ma $\frac{1}{x}$ è integrabile anche per $x < 0$.

---

## 9. Applicazioni reali

**Fisica — Cinematica.** Se conosci l'accelerazione $a(t)$ di un oggetto, integrare ti dà la velocità $v(t) = \int a(t)\,dt$; integrare ancora dà la posizione $s(t) = \int v(t)\,dt$. La costante di integrazione rappresenta la velocità iniziale (o la posizione iniziale). In meccanica, quasi ogni equazione del moto richiede primitive.

**Economia — Costo totale.** Il costo marginale $C'(q)$ è la derivata del costo totale rispetto alla quantità prodotta. Per trovare il costo totale: $C(q) = \int C'(q)\,dq + C_0$, dove $C_0$ è il costo fisso (la costante di integrazione ha significato economico preciso).

**Biomedica — Farmacocinetica.** La concentrazione di un farmaco nel sangue cambia nel tempo con velocità $c'(t)$. Integrare questo tasso fornisce la concentrazione $c(t)$, usata per calcolare AUC (Area Under Curve), misura chiave dell'esposizione del paziente al farmaco.

---

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Primitiva | $F'(x) = f(x)$ | unica a meno di costante |
| Integrale indefinito | $\int f(x)\,dx = F(x) + C$ | $C$ sempre presente |
| Linearità | $\int (\alpha f + \beta g)\,dx = \alpha\int f\,dx + \beta\int g\,dx$ | — |
| Sostituzione | $\int f(g(x))g'(x)\,dx = \int f(u)\,du$ | $u = g(x)$ |
| Per parti | $\int u\,dv = uv - \int v\,du$ | regola LIATE per scegliere $u$ |
| Potenza | $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ | solo $n \neq -1$ |
| Logaritmo | $\int \frac{1}{x}\,dx = \ln\lvert x\rvert + C$ | caso $n = -1$ |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Integrali immediati</summary>

Calcolare:
(a) $\displaystyle\int (4x^3 - 6x + 1)\,dx$
(b) $\displaystyle\int \left(\frac{2}{\sqrt{x}} + 3e^x\right)dx$
(c) $\displaystyle\int \frac{3}{1+x^2}\,dx$

**Soluzione:**

(a) $\displaystyle\int (4x^3 - 6x + 1)\,dx = x^4 - 3x^2 + x + C$

(b) $\dfrac{2}{\sqrt{x}} = 2x^{-1/2}$, quindi $\displaystyle\int 2x^{-1/2}\,dx = 4\sqrt{x}$. Risultato: $4\sqrt{x} + 3e^x + C$

(c) $3\arctan x + C$

</details>

<details>
<summary>Esercizio 2 — Sostituzione semplice</summary>

Calcolare:
(a) $\displaystyle\int \frac{x}{1+x^2}\,dx$
(b) $\displaystyle\int e^{\sin x}\cos x\,dx$
(c) $\displaystyle\int \frac{(\ln x)^2}{x}\,dx$

**Soluzione:**

(a) $u = 1+x^2$, $du = 2x\,dx$: $\displaystyle\int \frac{du}{2u} = \frac{1}{2}\ln\lvert u\rvert + C = \frac{1}{2}\ln(1+x^2) + C$

(b) $u = \sin x$, $du = \cos x\,dx$: $\displaystyle\int e^u\,du = e^u + C = e^{\sin x} + C$

(c) $u = \ln x$, $du = \frac{dx}{x}$: $\displaystyle\int u^2\,du = \frac{u^3}{3} + C = \frac{(\ln x)^3}{3} + C$

</details>

<details>
<summary>Esercizio 3 — Integrazione per parti</summary>

Calcolare:
(a) $\displaystyle\int x^2\ln x\,dx$
(b) $\displaystyle\int \arctan x\,dx$

**Soluzione:**

(a) $u = \ln x$ (L), $dv = x^2\,dx$ → $du = \frac{dx}{x}$, $v = \frac{x^3}{3}$:
$$\frac{x^3}{3}\ln x - \int\frac{x^3}{3}\cdot\frac{1}{x}\,dx = \frac{x^3}{3}\ln x - \frac{x^3}{9} + C = \frac{x^3}{9}(3\ln x - 1) + C$$

(b) $u = \arctan x$ (I), $dv = dx$ → $du = \frac{dx}{1+x^2}$, $v = x$:
$$x\arctan x - \int\frac{x}{1+x^2}\,dx = x\arctan x - \frac{1}{2}\ln(1+x^2) + C$$

</details>

<details>
<summary>Esercizio 4 — Sostituzione con aggiustamento</summary>

Calcolare $\displaystyle\int \sin^3 x\,dx$.

**Soluzione:**

Scriviamo $\sin^3 x = \sin^2 x \cdot \sin x = (1 - \cos^2 x)\sin x$.

Poniamo $u = \cos x$, $du = -\sin x\,dx$:

$$\int (1-u^2)(-du) = -\int(1-u^2)\,du = -(u - \frac{u^3}{3}) + C = -\cos x + \frac{\cos^3 x}{3} + C$$

</details>

<details>
<summary>Esercizio 5 — Integrale con radice quadrata</summary>

Calcolare $\displaystyle\int \frac{1}{\sqrt{x}(1+\sqrt{x})}\,dx$.

**Soluzione:**

Poniamo $u = \sqrt{x}$, quindi $x = u^2$ e $dx = 2u\,du$:

$$\int \frac{2u\,du}{u(1+u)} = 2\int\frac{du}{1+u} = 2\ln\lvert 1+u\rvert + C = 2\ln(1+\sqrt{x}) + C$$

</details>

<details>
<summary>Esercizio 6 — Per parti ripetuta</summary>

Calcolare $\displaystyle\int x^2\sin x\,dx$.

**Soluzione:**

Prima passata: $u = x^2$, $dv = \sin x\,dx$ → $v = -\cos x$:
$$-x^2\cos x + 2\int x\cos x\,dx$$

Seconda passata: $u = x$, $dv = \cos x\,dx$ → $v = \sin x$:
$$\int x\cos x\,dx = x\sin x - \int\sin x\,dx = x\sin x + \cos x + C$$

Risultato finale:
$$\int x^2\sin x\,dx = -x^2\cos x + 2x\sin x + 2\cos x + C$$

</details>

<details>
<summary>Esercizio 7 — Integrale razionale semplice</summary>

Calcolare $\displaystyle\int \frac{x+3}{x^2+6x+5}\,dx$.

**Soluzione:**

Osserva che la derivata del denominatore è $2x + 6 = 2(x+3)$. Quindi il numeratore è $\frac{1}{2}$ della derivata del denominatore.

Poniamo $u = x^2 + 6x + 5$, $du = (2x+6)\,dx$, quindi $(x+3)\,dx = \frac{du}{2}$:

$$\int \frac{du}{2u} = \frac{1}{2}\ln\lvert u\rvert + C = \frac{1}{2}\ln\lvert x^2+6x+5\rvert + C$$

</details>

<details>
<summary>Esercizio 8 — Verifica tramite derivazione</summary>

Verificare che $F(x) = x\sin x + \cos x$ sia una primitiva di $f(x) = x\cos x$.

**Soluzione:**

Calcoliamo $F'(x)$ usando la regola del prodotto su $x\sin x$:

$$F'(x) = \sin x + x\cos x - \sin x = x\cos x$$

Poiché $F'(x) = f(x)$, la verifica è corretta. Dunque $\displaystyle\int x\cos x\,dx = x\sin x + \cos x + C$.

</details>
