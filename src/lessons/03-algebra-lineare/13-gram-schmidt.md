---
id: algebra-13-gram-schmidt
subject: algebra-lineare
topic_it: Ortogonalità
topic_en: Orthogonality
title_it: Processo di Gram-Schmidt e fattorizzazione QR
title_en: Gram-Schmidt process and QR factorization
level: blue
order: 13
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 4 — Gram-Schmidt"
---

## Basi ortonormali

Una base $\{\mathbf{q}_1,\ldots,\mathbf{q}_n\}$ è:
- **Ortogonale** se $\langle\mathbf{q}_i,\mathbf{q}_j\rangle=0$ per $i\neq j$.
- **Ortonormale** se in più $\|\mathbf{q}_i\|=1$ per ogni $i$.

Con una base ortonormale $Q=[\mathbf{q}_1|\cdots|\mathbf{q}_n]$: $Q^TQ=I$.

Le coordinate di $\mathbf{v}$ sono semplicemente $c_i=\langle\mathbf{q}_i,\mathbf{v}\rangle$.

## Processo di Gram-Schmidt

Dato un insieme LI $\{\mathbf{a}_1,\ldots,\mathbf{a}_k\}$, costruisce una base ortonormale dello stesso span.

**Passo 1:** $\mathbf{q}_1 = \dfrac{\mathbf{a}_1}{\|\mathbf{a}_1\|}$

**Passo 2:** $\mathbf{e}_2 = \mathbf{a}_2 - \langle\mathbf{a}_2,\mathbf{q}_1\rangle\mathbf{q}_1$ (sottrai la componente lungo $\mathbf{q}_1$)

$\qquad\quad\;\mathbf{q}_2 = \dfrac{\mathbf{e}_2}{\|\mathbf{e}_2\|}$

**Passo $k$:** $\mathbf{e}_k = \mathbf{a}_k - \sum_{j=1}^{k-1}\langle\mathbf{a}_k,\mathbf{q}_j\rangle\mathbf{q}_j$

$\qquad\quad\;\mathbf{q}_k = \dfrac{\mathbf{e}_k}{\|\mathbf{e}_k\|}$

## Fattorizzazione QR

Il processo di Gram-Schmidt equivale a fattorizzare $A$ come:

$$A = QR$$

dove $Q$ ha colonne ortonormali e $R$ è triangolare superiore (con elementi diagonali positivi).

**Utilità:** risoluzione stabile di sistemi, minimi quadrati.

---

## Esercizi

<details>
<summary>Esercizio 1 — Gram-Schmidt in $\mathbb{R}^3$</summary>

Ortonormalizzare $\mathbf{a}_1=(1,1,0)$, $\mathbf{a}_2=(1,0,1)$, $\mathbf{a}_3=(0,1,1)$.

**Soluzione.**

$\mathbf{q}_1=\dfrac{(1,1,0)}{\sqrt{2}}=\left(\dfrac{1}{\sqrt{2}},\dfrac{1}{\sqrt{2}},0\right)$.

$\mathbf{e}_2=(1,0,1)-\langle(1,0,1),\mathbf{q}_1\rangle\mathbf{q}_1=(1,0,1)-\dfrac{1}{\sqrt{2}}\cdot\left(\dfrac{1}{\sqrt{2}},\dfrac{1}{\sqrt{2}},0\right)=(1,0,1)-(1/2,1/2,0)=(1/2,-1/2,1)$.

$\|\mathbf{e}_2\|=\sqrt{1/4+1/4+1}=\sqrt{3/2}$.

$\mathbf{q}_2=\dfrac{1}{\sqrt{3/2}}\left(\dfrac{1}{2},-\dfrac{1}{2},1\right)=\left(\dfrac{1}{\sqrt{6}},-\dfrac{1}{\sqrt{6}},\dfrac{2}{\sqrt{6}}\right)$.

Procedendo allo stesso modo: $\mathbf{q}_3=\left(\dfrac{1}{\sqrt{3}}, -\dfrac{1}{\sqrt{3}}, -\dfrac{1}{\sqrt{3}}\right)$ (normalizzando il residuo).

</details>

<details>
<summary>Esercizio 2 — Fattorizzazione QR</summary>

Verificare che $A=QR$ implica $R=Q^TA$.

**Soluzione.**

Se $A=QR$ con $Q^TQ=I$:

$Q^TA = Q^T(QR) = (Q^TQ)R = IR = R$.

Quindi $R=Q^TA$: la fattorizzazione QR permette di calcolare $R$ come proiezione. ✓

</details>

<details>
<summary>Esercizio 3 — Ortonormalizzazione in 2D</summary>

Applicare Gram-Schmidt a $\mathbf{a}_1=(3,4)$, $\mathbf{a}_2=(1,0)$.

**Soluzione.**

$\mathbf{q}_1=(3/5,4/5)$.

$\mathbf{e}_2=(1,0)-\langle(1,0),(3/5,4/5)\rangle(3/5,4/5)=(1,0)-(3/5)(3/5,4/5)=(1-9/25,-12/25)=(16/25,-12/25)$.

$\|\mathbf{e}_2\|=\sqrt{256+144}/25=20/25=4/5$.

$\mathbf{q}_2=(16/25,\,-12/25)\cdot(5/4)=(4/5,-3/5)$.

Base ortonormale: $\{(3/5,4/5),(4/5,-3/5)\}$.

</details>
