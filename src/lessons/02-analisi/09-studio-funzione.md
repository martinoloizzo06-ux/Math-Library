---
id: analisi-09-studio-funzione
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Studio di funzione completo
title_en: Complete function analysis
level: blue
order: 9
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 4 — Applicazioni della derivata"
---

## Schema dello studio di funzione

Per tracciare il grafico qualitativo di $f(x)$ si analizzano sistematicamente:

1. **Dominio**
2. **Simmetrie** (pari, dispari, periodica)
3. **Segno** di $f(x)$
4. **Limiti** agli estremi del dominio e agli asintoti
5. **Derivata prima** $f'(x)$: segno, zeri, crescenza/decrescenza, massimi/minimi
6. **Derivata seconda** $f''(x)$: segno, zeri, concavità, flessi

## Criteri con le derivate

**Massimi e minimi locali:**
- Se $f'(a)=0$ e $f''(a)>0$ → minimo locale in $a$.
- Se $f'(a)=0$ e $f''(a)<0$ → massimo locale in $a$.
- Se $f'(a)=0$ e $f''(a)=0$ → non conclusivo (usare cambio di segno di $f'$).

**Concavità:**
- $f''(x)>0$ su $(a,b)$ → $f$ convessa (concava verso l'alto) su $(a,b)$.
- $f''(x)<0$ su $(a,b)$ → $f$ concava (concava verso il basso) su $(a,b)$.

**Flessi:** punti in cui $f''$ cambia segno (la concavità si inverte).

## Esempio completo

Studiare $f(x)=\dfrac{x}{x^2-1}$.

**1. Dominio:** $x\neq\pm 1$. Definita su $(-\infty,-1)\cup(-1,1)\cup(1,+\infty)$.

**2. Simmetria:** $f(-x)=-f(x)$ → dispari.

**3. Asintoti:** verticali $x=\pm 1$; orizzontale $y=0$.

**4. Derivata prima:**

$$f'(x)=\frac{(x^2-1)-x\cdot 2x}{(x^2-1)^2}=\frac{-1-x^2}{(x^2-1)^2}$$

$f'(x)<0$ sempre → **strettamente decrescente** su ogni intervallo di definizione.

**5. Derivata seconda:**

$$f''(x)=\frac{2x(x^2+3)}{(x^2-1)^3}$$

$f''(x)=0$ in $x=0$. Cambio segno: $f$ convessa per $x>1$, concava per $0<x<1$, flesso in $(0,0)$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Studio di funzione razionale</summary>

Studiare e tracciare $f(x)=\dfrac{x^2}{x+1}$.

**Soluzione (punti chiave).**

- Dominio: $x\neq -1$.
- Asintoto verticale $x=-1$; asintoto obliquo $y=x-1$ (divisione: $x^2=(x+1)(x-1)+1$).
- $f'(x)=\dfrac{x(x+2)}{(x+1)^2}$; zeri in $x=0$ e $x=-2$.
  - Minimo locale in $x=0$: $f(0)=0$.
  - Massimo locale in $x=-2$: $f(-2)=-4$.
- $f''(x)=\dfrac{2}{(x+1)^3}$; nessun flesso ($f''\neq 0$ dove definita).

</details>

<details>
<summary>Esercizio 2 — Studio con esponenziale</summary>

Trovare i punti di massimo e minimo locali di $f(x)=xe^{-x}$.

**Soluzione.**

$f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)$.

$f'(x)=0 \implies x=1$. $f'$ positiva per $x<1$, negativa per $x>1$ → **massimo** in $x=1$, $f(1)=1/e$.

$f''(x)=e^{-x}(x-2)$; $f''(1)=-e^{-1}<0$ → conferma massimo. Flesso in $x=2$.

</details>

<details>
<summary>Esercizio 3 — Ottimizzazione</summary>

Trovare le dimensioni del rettangolo di area massima inscritto in una semicirconferenza di raggio 1.

**Soluzione.**

Il rettangolo ha base $2x$ e altezza $y=\sqrt{1-x^2}$ (punto sulla semicirconferenza).

$A(x)=2x\sqrt{1-x^2}$, $0<x<1$.

$A'(x)=2\sqrt{1-x^2}+2x\cdot\dfrac{-x}{\sqrt{1-x^2}}=\dfrac{2(1-2x^2)}{\sqrt{1-x^2}}=0 \implies x=\dfrac{1}{\sqrt{2}}$.

$y=\dfrac{1}{\sqrt{2}}$, quindi il rettangolo è $\sqrt{2}\times\dfrac{1}{\sqrt{2}}=\sqrt{2}\times\dfrac{\sqrt{2}}{2}$. Area $=1$.

</details>
