---
id: econometria-06-dummy
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Variabili dummy e interazioni
title_en: Dummy variables and interactions
level: purple
order: 6
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 7 — Variabili qualitative"
---

## Variabili dummy

Una **variabile dummy** (o indicatore) $D_i\in\{0,1\}$ codifica una caratteristica qualitativa:

$$y_i = \beta_0 + \beta_1 D_i + \beta_2 x_i + u_i$$

- $\beta_0$: intercetta per il gruppo di riferimento ($D=0$).
- $\beta_0+\beta_1$: intercetta per il gruppo $D=1$.
- $\beta_1$: **differenza media** di $y$ tra i due gruppi, controllando per $x$.

**Trappola delle dummy:** con $k$ categorie mutualmente esclusive, includere solo $k-1$ dummy (la categoria omessa è il gruppo di riferimento). Includere tutte $k$ → multicollinearità perfetta.

## Variabili dummy multiple

Per $k$ categorie ($k-1$ dummy):

$$y_i = \beta_0 + \sum_{j=1}^{k-1}\beta_j D_{ji} + \beta_k x_i + u_i$$

$\beta_j$: effetto della categoria $j$ rispetto alla categoria di riferimento.

## Interazioni

**Dummy × continua:** $D_i\cdot x_i$ — permette alla pendenza di variare tra i gruppi.

$$y_i = \beta_0+\beta_1 D_i+\beta_2 x_i+\beta_3(D_i\cdot x_i)+u_i$$

- Gruppo 0: $y=\beta_0+\beta_2 x$.
- Gruppo 1: $y=(\beta_0+\beta_1)+(\beta_2+\beta_3)x$.

$\beta_3$: differenza nelle pendenze tra i due gruppi.

**Test di Chow:** testa se i coefficienti sono uguali nei due gruppi ($H_0:\beta_1=\beta_3=0$).

---

## Esercizi

<details>
<summary>Esercizio 1 — Effetto dummy</summary>

Modello: $\text{salario}=\beta_0+\beta_1\text{maschio}+\beta_2\text{anni studio}+u$.

Stima: $\hat\beta_0=15$, $\hat\beta_1=5$, $\hat\beta_2=2$. Interpretare $\hat\beta_1$.

**Soluzione.**

Controllando per gli anni di studio, gli uomini guadagnano in media **5k€ in più** delle donne.

È il gender gap aggiustato per l'istruzione.

</details>

<details>
<summary>Esercizio 2 — Interazione</summary>

$\hat{y}=3+2\text{exp}+4\text{laurea}-1(\text{laurea}\times\text{exp})$. Interpretare il termine di interazione.

**Soluzione.**

Per i **non laureati** (laurea=0): ogni anno di esperienza aggiunge $2$ unità a $y$.

Per i **laureati** (laurea=1): ogni anno di esperienza aggiunge $2-1=1$ unità a $y$.

Il rendimento dell'esperienza è **maggiore per i non laureati** (forse i laureati partono già da posizioni più avanzate).

</details>

<details>
<summary>Esercizio 3 — Trappola delle dummy</summary>

Ho 3 regioni (Nord, Centro, Sud). Come codificarle correttamente?

**Soluzione.**

Includere **2 dummy** (es. Nord e Centro), con Sud come categoria di riferimento:

$D_{\text{Nord}}=1$ se Nord, 0 altrimenti; $D_{\text{Centro}}=1$ se Centro, 0 altrimenti.

$\hat\beta_{\text{Nord}}$: differenza media tra Nord e Sud (cet. par.). Includere tutte e 3 causerebbe $D_{\text{Nord}}+D_{\text{Centro}}+D_{\text{Sud}}=1$ sempre → collinearità perfetta con la costante.

</details>
