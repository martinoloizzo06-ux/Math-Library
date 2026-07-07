---
id: algebra-06-indipendenza-basi
subject: algebra-lineare
topic_it: Spazi vettoriali
topic_en: Vector spaces
title_it: Indipendenza lineare, basi e dimensione
title_en: Linear independence, bases, and dimension
level: blue
order: 6
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 3 — Basi e dimensione"
---

## Indipendenza lineare

I vettori $\mathbf{v}_1,\ldots,\mathbf{v}_k$ sono **linearmente indipendenti** se:

$$c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k=\mathbf{0} \implies c_1=\cdots=c_k=0$$

Altrimenti sono **linearmente dipendenti** — almeno uno è combinazione lineare degli altri.

**Criterio matriciale:** i vettori (come colonne di $A$) sono LI sse $\text{rk}(A)=k$ (nessuna colonna ridondante).

## Base

Una **base** di $V$ è un insieme di vettori $\{\mathbf{v}_1,\ldots,\mathbf{v}_n\}$ che sono:
1. Linearmente indipendenti.
2. Generatori di $V$: $V=\text{span}\{\mathbf{v}_1,\ldots,\mathbf{v}_n\}$.

**Teorema fondamentale:** tutte le basi di $V$ hanno lo stesso numero di elementi.

## Dimensione

La **dimensione** di $V$ è il numero di vettori in qualsiasi base:

$$\dim(V) = n$$

**Esempi:**
- $\dim(\mathbb{R}^n)=n$, base canonica $\mathbf{e}_1,\ldots,\mathbf{e}_n$.
- $\dim(P_n)=n+1$, base $\{1,x,x^2,\ldots,x^n\}$.
- $\dim(M_{m,n})=mn$.

## Coordinate

In una base $\mathcal{B}=\{\mathbf{v}_1,\ldots,\mathbf{v}_n\}$, ogni $\mathbf{w}\in V$ si scrive in modo **unico**:

$$\mathbf{w} = c_1\mathbf{v}_1+\cdots+c_n\mathbf{v}_n$$

I coefficienti $(c_1,\ldots,c_n)$ sono le **coordinate di $\mathbf{w}$ rispetto a $\mathcal{B}$**.

## Criterio pratico

In uno spazio di dimensione $n$:
- $n$ vettori LI formano una base.
- $n$ vettori che generano $V$ formano una base.
- Meno di $n$ vettori non possono generare $V$.
- Più di $n$ vettori non possono essere LI.

---

## Esercizi

<details>
<summary>Esercizio 1 — Verifica di indipendenza</summary>

Verificare se $(1,2,0)$, $(0,1,3)$, $(1,0,-6)$ sono LI in $\mathbb{R}^3$.

**Soluzione.**

Formiamo la matrice e portiamo a scalini:

$$\begin{pmatrix}1&2&0\\0&1&3\\1&0&-6\end{pmatrix} \xrightarrow{R_3-R_1} \begin{pmatrix}1&2&0\\0&1&3\\0&-2&-6\end{pmatrix} \xrightarrow{R_3+2R_2} \begin{pmatrix}1&2&0\\0&1&3\\0&0&0\end{pmatrix}$$

Solo 2 pivot: i vettori sono **linearmente dipendenti**. Il terzo è combinazione degli altri.

</details>

<details>
<summary>Esercizio 2 — Base di un nucleo</summary>

Trovare una base di $N(A)$ per $A=\begin{pmatrix}1&1&2\\2&2&4\end{pmatrix}$.

**Soluzione.**

La seconda riga è $2\times$ la prima. Unica equazione: $x_1+x_2+2x_3=0$.

Variabili libere: $x_2=s$, $x_3=t$. Allora $x_1=-s-2t$.

$$\mathbf{x}=s\begin{pmatrix}-1\\1\\0\end{pmatrix}+t\begin{pmatrix}-2\\0\\1\end{pmatrix}$$

Base di $N(A)$: $\left\{\begin{pmatrix}-1\\1\\0\end{pmatrix},\begin{pmatrix}-2\\0\\1\end{pmatrix}\right\}$. $\dim(N(A))=2=3-1$. ✓

</details>

<details>
<summary>Esercizio 3 — Coordinate</summary>

Trovare le coordinate di $\mathbf{w}=(5,1)$ nella base $\mathcal{B}=\{(2,1),(1,1)\}$.

**Soluzione.**

$5=2c_1+c_2$, $1=c_1+c_2$. Sottraendo: $4=c_1$. Quindi $c_2=1-4=-3$.

$(5,1) = 4(2,1)+(-3)(1,1)=(8-3,4-3)=(5,1)$. ✓

Coordinate: $(4,-3)_{\mathcal{B}}$.

</details>
