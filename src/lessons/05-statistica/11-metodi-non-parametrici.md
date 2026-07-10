---
id: statistica-11-non-parametrici
subject: statistica
topic_it: Metodi avanzati
topic_en: Advanced methods
title_it: Metodi non parametrici
title_en: Non-parametric methods
level: purple
order: 11
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 14 — Metodi non parametrici"
---

## 1. Intuizione

Immagina di voler confrontare i voti di due classi scolastiche per capire se una ha prestazioni migliori dell'altra. La strada classica sarebbe usare il test t di Student, ma quel test richiede che i voti seguano una distribuzione normale. E se avessi solo 8 studenti per classe? E se i voti fossero assegnati come lettere (A, B, C, D) piuttosto che numeri? In entrambi i casi il test t vacilla o crolla del tutto.

I **metodi non parametrici** (detti anche metodi liberi da distribuzioni, o *distribution-free*) sono strumenti statistici che non impongono alla forma dei dati nessuna distribuzione specifica. Invece di lavorare con i valori grezzi, operano quasi sempre sui **ranghi**: si mettono i dati in ordine crescente e si lavora con la loro posizione (1°, 2°, 3°, ...). Le posizioni contengono meno informazione dei valori numerici esatti, ma questa perdita è il prezzo che si paga per la robustezza.

Un'altra analogia utile: pensare ai metodi parametrici come a un orologio di precisione svizzero — straordinariamente accurato nelle condizioni giuste, ma fragile se lo metti in condizioni avverse. I metodi non parametrici sono come un robusto orologio da cantiere: meno precisi al secondo, ma funzionano ovunque.

Quando si usano i metodi non parametrici? Le situazioni tipiche sono: dati non normali con campione piccolo (dove il Teorema Centrale del Limite non aiuta ancora), dati su scala ordinale (es. giudizi da 1 a 5, posizioni in classifica), presenza di outlier gravi che distorcerebbero le medie, e distribuzione con code molto pesanti. Quando invece si è certi della normalità e si dispone di campioni grandi, i metodi parametrici restano preferibili perché hanno maggiore **potenza** (capacità di rilevare differenze reali).

## 2. Prerequisiti

- Ipotesi nulla $H_0$ e ipotesi alternativa $H_1$, p-value e significatività $\alpha$
- Test t di Student (test parametrico di riferimento)
- Concetto di mediana e quartili
- Ranghi: ordinamento e assegnazione di posizioni
- Distribuzione $\chi^2$ (per il test di Kruskal-Wallis)
- Correlazione di Pearson (per confronto con Spearman)

## 3. Teoria

### 3.1 Ranghi e ranghi medi

Dato un campione $x_1, x_2, \ldots, x_n$, il **rango** $R_i$ di $x_i$ è la sua posizione nell'ordinamento crescente di tutti i valori. Se due o più valori sono uguali (**pari**), si assegna a ciascuno il **rango medio**: la media delle posizioni che avrebbero occupato se fossero stati leggermente diversi.

**Esempio:** dati $\{3, 7, 3, 10, 5\}$. Ordinati: $3, 3, 5, 7, 10$ — le due osservazioni pari a 3 occuperebbero le posizioni 1 e 2, quindi ricevono rango medio $(1+2)/2 = 1.5$ ciascuna. L'osservazione $5$ riceve rango 3, e così via.

### 3.2 Test di Wilcoxon signed-rank (campione singolo o coppie)

**Scopo:** testare se la mediana di una popolazione è uguale a un valore $\mu_0$ (ipotesi $H_0: M = \mu_0$), oppure se la mediana delle differenze tra coppie è zero. È l'alternativa non parametrica al **test t a un campione**.

**Assunzione:** la distribuzione delle differenze $d_i = x_i - \mu_0$ è simmetrica attorno a 0 sotto $H_0$ (non è necessaria la normalità, solo la simmetria).

**Procedura:**
1. Calcola le differenze $d_i = x_i - \mu_0$ per ogni osservazione $i$.
2. Elimina i $d_i = 0$ (riducendo $n$ di conseguenza).
3. Calcola i valori assoluti $\lvert d_i \rvert$ e assegna loro i ranghi $R_i^+$ (con ranghi medi per i pari).
4. Definisci la statistica:
$$W^+ = \sum_{i:\, d_i > 0} R_i^+$$
che è la somma dei ranghi delle differenze positive.
5. Sotto $H_0$, $W^+$ ha una distribuzione tabulata (esatta per $n$ piccoli). Per $n \geq 25$, si usa l'approssimazione normale:
$$Z = \frac{W^+ - \mu_{W^+}}{\sigma_{W^+}}, \quad \mu_{W^+} = \frac{n(n+1)}{4}, \quad \sigma_{W^+} = \sqrt{\frac{n(n+1)(2n+1)}{24}}$$

**Regola di decisione (bilaterale):** rifiuta $H_0$ se $W^+$ è troppo grande o troppo piccolo rispetto alla distribuzione sotto $H_0$.

### 3.3 Test di Mann-Whitney U (due campioni indipendenti)

**Scopo:** confrontare le distribuzioni (o più precisamente le mediane) di due campioni indipendenti. Alternativa non parametrica al **test t a due campioni**.

**Assunzione:** le due distribuzioni hanno la stessa forma (differiscono solo nella posizione).

**Procedura:**
1. Unisci i due campioni ($n_1$ e $n_2$ osservazioni) e assegna i ranghi globali $1, 2, \ldots, n_1 + n_2$.
2. Calcola $W_1$ = somma dei ranghi del gruppo 1.
3. Calcola la statistica $U$:
$$U_1 = W_1 - \frac{n_1(n_1+1)}{2}, \qquad U_2 = n_1 n_2 - U_1$$
4. Usa $U = \min(U_1, U_2)$ come statistica del test.
5. Per $n_1, n_2$ piccoli: tabelle esatte. Per campioni grandi:
$$Z = \frac{U - \mu_U}{\sigma_U}, \quad \mu_U = \frac{n_1 n_2}{2}, \quad \sigma_U = \sqrt{\frac{n_1 n_2 (n_1+n_2+1)}{12}}$$

**Interpretazione:** $U_1$ conta il numero di volte che un'osservazione del gruppo 1 supera un'osservazione del gruppo 2. Se $U_1 \approx n_1 n_2 / 2$, i due gruppi si mescolano — nessuna differenza. Se $U_1$ è molto grande o molto piccolo, un gruppo tende a dominare l'altro.

### 3.4 Test di Kruskal-Wallis (tre o più campioni)

**Scopo:** estensione del Mann-Whitney a $k \geq 2$ gruppi. Alternativa non parametrica all'**ANOVA a una via**.

**Assunzione:** stessa forma distributiva nei $k$ gruppi, solo la posizione può differire.

**Procedura:**
1. Unisci tutti i campioni ($N = \sum_{i=1}^k n_i$ osservazioni totali) e assegna i ranghi globali.
2. Calcola $R_i$ = somma dei ranghi nel gruppo $i$.
3. La statistica di Kruskal-Wallis è:
$$H = \frac{12}{N(N+1)}\sum_{i=1}^k \frac{R_i^2}{n_i} - 3(N+1)$$

dove $N$ è il numero totale di osservazioni, $n_i$ è la numerosità del gruppo $i$, e $R_i$ è la somma dei ranghi del gruppo $i$.

4. Sotto $H_0$ (tutti i gruppi hanno la stessa distribuzione), $H \sim \chi^2(k-1)$ approssimativamente per campioni non troppo piccoli.

**Regola di decisione:** rifiuta $H_0$ se $H > \chi^2_{\alpha, k-1}$ (quantile critico della chi-quadro).

Se $H_0$ è rifiutata, si effettuano **confronti multipli a coppie** con correzione di Bonferroni o test di Dunn per identificare quali gruppi differiscono.

### 3.5 Test del segno

Il più semplice test non parametrico. Sotto $H_0: M = \mu_0$, circa metà delle osservazioni dovrebbe cadere al di sopra di $\mu_0$ e metà al di sotto. Definendo $S^+$ = numero di $x_i > \mu_0$, sotto $H_0$: $S^+ \sim \text{Binomiale}(n, 0.5)$.

È meno potente del test di Wilcoxon perché usa solo il segno delle differenze (non la loro grandezza), ma è applicabile anche quando le differenze non hanno una distribuzione simmetrica.

### 3.6 Correlazione di Spearman

Misura la forza dell'**associazione monotonica** tra due variabili (non necessariamente lineare). Si calcola come la correlazione di Pearson applicata ai **ranghi**.

$$r_s = 1 - \frac{6 \sum_{i=1}^n d_i^2}{n(n^2 - 1)}$$

dove $d_i = R(x_i) - R(y_i)$ è la differenza tra il rango di $x_i$ e il rango di $y_i$.

Questa formula è esatta quando non ci sono pari; in presenza di pari si deve usare la formula generale della correlazione di Pearson sui ranghi.

**Proprietà:**
- $r_s \in [-1, 1]$
- $r_s = 1$: relazione monotonica crescente perfetta
- $r_s = -1$: relazione monotonica decrescente perfetta
- $r_s = 0$: nessuna associazione monotonica
- Robusta agli outlier (lavora sui ranghi, non sui valori)
- Valida per variabili ordinali

**Test di significatività:** per $n \geq 10$, si usa l'approssimazione:
$$t = r_s \sqrt{\frac{n-2}{1-r_s^2}} \sim t(n-2) \text{ sotto } H_0: \rho_s = 0$$

## 4. Derivazioni

### Derivazione della statistica di Kruskal-Wallis

Partiamo dall'idea dell'ANOVA: confrontiamo la variabilità *tra* gruppi con la variabilità *totale*, applicata ai ranghi.

La varianza totale dei ranghi $1, 2, \ldots, N$ è $\sigma^2_R = N(N+1)/12$ (formula della varianza di una distribuzione uniforme discreta). Il numeratore della statistica $F$ dell'ANOVA, applicato ai ranghi, diventa la somma pesata degli scostamenti delle medie di gruppo $\bar{R}_i = R_i/n_i$ dalla media globale $\bar{R} = (N+1)/2$:

$$\text{SSB} = \sum_{i=1}^k n_i \left(\bar{R}_i - \bar{R}\right)^2$$

La statistica $H$ è essenzialmente $H = (k-1) \cdot F_{\text{ranghi}}$ riscritta in forma compatta dividendo per la varianza totale:

$$H = \frac{12}{N(N+1)}\sum_{i=1}^k \frac{R_i^2}{n_i} - 3(N+1)$$

Si può verificare algebricamente espandendo $\sum n_i (\bar{R}_i - \bar{R})^2 = \sum R_i^2/n_i - N\bar{R}^2$ e sostituendo $\bar{R} = (N+1)/2$.

### Derivazione della formula di Spearman

La correlazione di Pearson applicata ai ranghi $u_i = R(x_i)$ e $v_i = R(y_i)$ è:

$$r_s = \frac{\sum(u_i - \bar{u})(v_i - \bar{v})}{\sqrt{\sum(u_i-\bar{u})^2 \sum(v_i-\bar{v})^2}}$$

Quando non ci sono pari, $\sum u_i = \sum v_i = n(n+1)/2$ e $\sum u_i^2 = \sum v_i^2 = n(n+1)(2n+1)/6$. Usando $d_i = u_i - v_i$ e $\sum d_i^2 = \sum u_i^2 - 2\sum u_i v_i + \sum v_i^2$, con qualche algebra si ottiene:

$$r_s = 1 - \frac{6\sum d_i^2}{n(n^2-1)}$$

## 5. Esempi

**Esempio 1 — Test di Wilcoxon (semplice)**

Dieci pazienti misurano la pressione prima e dopo un farmaco. Le differenze (prima − dopo) sono: $+3, +1, -2, +5, +4, -1, +6, +2, -3, +4$. Testare $H_0$: il farmaco non ha effetto (mediana delle differenze = 0).

Valori assoluti: $3, 1, 2, 5, 4, 1, 6, 2, 3, 4$. Ordinati: $1, 1, 2, 2, 3, 3, 4, 4, 5, 6$ con ranghi $1.5, 1.5, 3.5, 3.5, 5.5, 5.5, 7.5, 7.5, 9, 10$.

Differenze positive: $+3(r=5.5), +1(r=1.5), +5(r=9), +4(r=7.5), +6(r=10), +2(r=3.5), +4(r=7.5)$.

$W^+ = 5.5 + 1.5 + 9 + 7.5 + 10 + 3.5 + 7.5 = 45$.

$\mu_{W^+} = 10 \cdot 11/4 = 27.5$, $\sigma_{W^+} = \sqrt{10 \cdot 11 \cdot 21/24} \approx 9.81$.

$Z = (45 - 27.5)/9.81 \approx 1.78$. Per $\alpha = 0.05$ bilaterale, $z_{0.025} = 1.96$. Poiché $1.78 < 1.96$, **non rifiutiamo $H_0$** al 5%, ma c'è un segnale moderato (p ≈ 0.075).

---

**Esempio 2 — Test di Wilcoxon (con pari)**

Differenze: $-2, 0, 3, 1, -4, 0, 5, -1$. Eliminiamo i due zeri: $n = 6$. Valori assoluti rimanenti: $2, 3, 1, 4, 5, 1$ → ranghi: $1.5, 4, 1.5, 5, 6, 1.5$... Attenzione: $|d|=1$ appare due volte → ranghi medi $(1+2)/2 = 1.5$. Poi $|d|=2$ → rango 3, $|d|=3$ → rango 4, $|d|=4$ → rango 5, $|d|=5$ → rango 6.

Differenze positive: $+3(r=4), +1(r=1.5), +5(r=6)$. $W^+ = 4 + 1.5 + 6 = 11.5$.

Per $n=6$, dalla tavola il valore critico bilaterale a $\alpha=0.05$ è $W_c = 2$. Poiché $11.5 > 2$ (nella regione di non rifiuto), **non rifiutiamo $H_0$**.

---

**Esempio 3 — Test di Mann-Whitney**

Gruppo A (5 osservazioni): $12, 15, 8, 20, 11$. Gruppo B (5 osservazioni): $18, 22, 25, 19, 16$.

Ranghi globali (10 valori combinati, ordinati): $8(1), 11(2), 12(3), 15(4), 16(5), 18(6), 19(7), 20(8), 22(9), 25(10)$.

$W_A = 1 + 2 + 3 + 4 + 8 = 18$. $U_A = 18 - 5\cdot6/2 = 18 - 15 = 3$. $U_B = 5\cdot5 - 3 = 22$.

$U = \min(3, 22) = 3$. $\mu_U = 25/2 = 12.5$, $\sigma_U = \sqrt{5 \cdot 5 \cdot 11/12} \approx 4.79$.

$Z = (3 - 12.5)/4.79 \approx -1.98$. Poiché $\lvert -1.98 \rvert > 1.96$, **rifiutiamo $H_0$** al 5%: il gruppo B tende ad avere valori più alti.

---

**Esempio 4 — Kruskal-Wallis**

Tre gruppi: A = $\{5, 7, 9\}$, B = $\{2, 4, 6\}$, C = $\{8, 10, 12\}$. $N = 9$.

Ranghi globali: $2(1), 4(2), 5(3), 6(4), 7(5), 8(6), 9(7), 10(8), 12(9)$.

$R_A = 3+5+7 = 15$, $R_B = 1+2+4 = 7$, $R_C = 6+8+9 = 23$.

$$H = \frac{12}{9 \cdot 10}\left(\frac{15^2}{3} + \frac{7^2}{3} + \frac{23^2}{3}\right) - 3 \cdot 10 = \frac{12}{90}(75 + 16.33 + 176.33) - 30 = \frac{12}{90} \cdot 267.67 - 30 \approx 35.69 - 30 = 5.69$$

$\chi^2_{0.05, 2} = 5.991$. Poiché $5.69 < 5.991$, **non rifiutiamo $H_0$** al 5% (ma è al limite, p ≈ 0.058).

---

**Esempio 5 — Correlazione di Spearman**

Voti di 6 studenti in matematica e fisica:

| Studente | Mat | Fis | Rango Mat | Rango Fis | $d_i$ | $d_i^2$ |
| --- | --- | --- | --- | --- | --- | --- |
| A | 85 | 80 | 5 | 4 | 1 | 1 |
| B | 70 | 75 | 2 | 3 | -1 | 1 |
| C | 90 | 95 | 6 | 6 | 0 | 0 |
| D | 60 | 55 | 1 | 1 | 0 | 0 |
| E | 80 | 85 | 4 | 5 | -1 | 1 |
| F | 75 | 65 | 3 | 2 | 1 | 1 |

$\sum d_i^2 = 4$. $r_s = 1 - 6 \cdot 4 / (6 \cdot 35) = 1 - 24/210 \approx 0.886$. Forte associazione monotonica positiva.

---

**Esempio 6 — Confronto Pearson vs Spearman con outlier**

Dati: $(1,2), (2,4), (3,6), (4,8), (100, 5)$. L'ultimo punto è un outlier estremo su $x$.

Pearson $r \approx 0.22$ (distorto dall'outlier). Spearman $r_s \approx 0.90$ (i ranghi smorzano l'effetto dell'outlier). Spearman è molto più robusto in presenza di valori anomali.

---

**Esempio 7 — Test del segno**

12 soggetti valutano un prodotto prima e dopo una campagna pubblicitaria (scala 1-10). Differenze (dopo − prima): $+2, -1, +3, +1, 0, +2, -1, +4, +1, +3, +2, +1$. Eliminiamo lo zero: $n=11$. $S^+ = 9$ differenze positive.

Sotto $H_0: p = 0.5$, $P(S^+ \geq 9) = \sum_{k=9}^{11} \binom{11}{k} 0.5^{11} \approx 0.033$. Bilaterale: $p \approx 0.065$. Non rifiutiamo $H_0$ al 5%, ma il test di Wilcoxon (che usa le grandezze) darebbe probabilmente un risultato più significativo.

## 6. Grafico

```plot
{"fn":"x","domain":[0,10],"yDomain":[0,10],"title":"Ranghi: trasformazione dei dati originali in posizioni","label1":"y = x (dati originali)","fn2":"Math.round(x)","label2":"Trasformazione rango (approssimata)","color":"steelblue","color2":"crimson"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-Math.pow(x-mu,2)/(2*sigma*sigma))/(sigma*Math.sqrt(2*Math.PI))","domain":[-5,5],"yDomain":[0,1.2],"params":[{"name":"mu","min":-3,"max":3,"step":0.1,"default":0},{"name":"sigma","min":0.3,"max":2,"step":0.1,"default":1}],"title":"Distribuzione sottostante ai test non parametrici — varia forma e posizione"}
```

I test non parametrici funzionano indipendentemente dalla forma di questa curva: testano la posizione (mediana) senza assumere normalità.

## 8. Errori comuni

**Errore 1 — Usare i metodi non parametrici sempre "per sicurezza".**
Falso: quando i dati sono normali e $n$ è grande, i test parametrici hanno maggiore potenza. Usare sempre test non parametrici aumenta il rischio di errori di tipo II (non rilevare differenze reali).

**Errore 2 — Dimenticare di gestire i pari.**
I ranghi medi devono essere assegnati correttamente ai valori identici. Ignorare i pari o trattarli arbitrariamente può distorcere la statistica e il p-value.

**Errore 3 — Credere che il test di Wilcoxon non richieda alcuna assunzione.**
Richiede la **simmetria** della distribuzione delle differenze sotto $H_0$. Se le differenze sono fortemente asimmetriche, il test del segno è preferibile (ma meno potente).

**Errore 4 — Confondere Mann-Whitney con un test sulle medie.**
Mann-Whitney testa se la distribuzione di un gruppo è sistematicamente spostata rispetto all'altra (stochastic dominance), non esattamente le medie. Dire "le medie dei due gruppi sono diverse" in base a Mann-Whitney è impreciso.

**Errore 5 — Applicare Kruskal-Wallis e fermarsi lì.**
Se $H_0$ è rifiutata, il test dice solo che *almeno un* gruppo differisce. Bisogna fare confronti post-hoc a coppie (es. test di Dunn con correzione di Bonferroni) per capire *quali* gruppi differiscono.

**Errore 6 — Interpretare $r_s$ come correlazione lineare.**
Spearman misura l'associazione *monotonica*, non lineare. $r_s = 1$ può coesistere con una relazione esponenziale, logaritmica o qualunque altra relazione strettamente crescente.

**Errore 7 — Usare la formula semplificata di Spearman in presenza di molti pari.**
La formula $1 - 6\sum d_i^2/[n(n^2-1)]$ è esatta solo senza pari. Con molti pari è necessaria la formula generale della correlazione di Pearson applicata ai ranghi medi.

## 9. Applicazioni reali

**Medicina e studi clinici:** i test di Wilcoxon e Mann-Whitney sono standard nei trial clinici con endpoint come scale del dolore (ordinali) o quando i campioni sono piccoli e la normalità non può essere assunta. Le linee guida FDA accettano Mann-Whitney come test primario in molti contesti.

**Scienze sociali e psicologia:** le scale Likert (es. "Da 1 a 5, quanto sei soddisfatto?") producono dati ordinali per definizione. Trattarli come numeri reali per un test t è tecnicamente scorretto; Wilcoxon o Mann-Whitney sono le scelte naturali.

**Ecologia:** confrontare la biodiversità in diversi ecosistemi, o misurare le dimensioni di animali in habitat diversi, spesso produce distribuzioni asimmetriche con outlier. Kruskal-Wallis è preferito all'ANOVA in questi contesti.

**Qualità e processi industriali:** la correlazione di Spearman è usata per valutare l'accordo tra giudici in ispezioni visive, dove i giudizi sono ranghi piuttosto che misure assolute.

## 10. Riepilogo

| Metodo | Alternativa parametrica | Tipo di dati | Statistica | Distribuzione sotto $H_0$ |
| --- | --- | --- | --- | --- |
| Test del segno | Test t (campione singolo) | Qualsiasi (anche ordinale) | $S^+$ | Binomiale$(n, 0.5)$ |
| Wilcoxon signed-rank | Test t (campione singolo o coppie) | Continuo, simmetrico | $W^+$ | Tabulata / Normale per $n$ grande |
| Mann-Whitney U | Test t a due campioni | Continuo, stessa forma | $U$ | Tabulata / Normale per $n$ grande |
| Kruskal-Wallis | ANOVA a una via | Continuo, stessa forma | $H$ | $\chi^2(k-1)$ |
| Correlazione Spearman | Correlazione Pearson | Ordinale o continuo | $r_s$ | $t(n-2)$ per il test |

## 11. Esercizi

<details>
<summary>Esercizio 1: Test di Wilcoxon su 8 differenze</summary>

Le differenze tra misurazioni pre e post-trattamento per 8 soggetti sono: $+4, -1, +7, +2, 0, -3, +5, +1$.

a) Escludi gli zeri e assegna i ranghi ai valori assoluti.
b) Calcola $W^+$.
c) Con $n=7$, il valore critico bilaterale a $\alpha=0.05$ dalla tavola è $W_c = 2$. Concludi.

**Soluzione:**

a) Escludiamo lo zero: $n=7$. Valori assoluti: $4, 1, 7, 2, 3, 5, 1$. Ordinati: $1, 1, 2, 3, 4, 5, 7$. I due valori $\lvert d \rvert = 1$ prendono rango medio $1.5$. Ranghi: $d=+4 \to 4$, $d=-1 \to 1.5$, $d=+7 \to 7$, $d=+2 \to 3$, $d=-3 \to 5$, $d=+5 \to 6$, $d=+1 \to 1.5$.

b) Differenze positive: $+4(r=4)$, $+7(r=7)$, $+2(r=3)$, $+5(r=6)$, $+1(r=1.5)$. $W^+ = 4+7+3+6+1.5 = 21.5$.

c) $\mu_{W^+} = 7 \cdot 8/4 = 14$. Il valore $21.5$ è maggiore della media ma la distribuzione tabulata indica valore critico 2. Poiché $21.5$ è nell'intervallo $[2, 26]$ di non rifiuto... *Nota: per tabelle a due code a $\alpha=0.05$, $n=7$: si rifiuta se $W^+ \leq 2$ o $W^+ \geq 26$*. Con $W^+ = 21.5$, **non rifiutiamo $H_0$**.

</details>

<details>
<summary>Esercizio 2: Mann-Whitney su due piccoli campioni</summary>

Gruppo 1: $\{6, 8, 2, 4\}$, Gruppo 2: $\{9, 11, 7, 13\}$. Testa $H_0$: le due distribuzioni sono uguali ($\alpha = 0.05$ bilaterale).

**Soluzione:**

Combinati e ordinati: $2(1), 4(2), 6(3), 7(4), 8(5), 9(6), 11(7), 13(8)$.

$W_1 = 1+2+3+5 = 11$. $U_1 = 11 - 4\cdot5/2 = 11 - 10 = 1$. $U_2 = 4 \cdot 4 - 1 = 15$.

$U = \min(1, 15) = 1$.

$\mu_U = 4 \cdot 4 / 2 = 8$. $\sigma_U = \sqrt{4 \cdot 4 \cdot 9 / 12} = \sqrt{12} \approx 3.46$.

$Z = (1 - 8)/3.46 \approx -2.02$. Poiché $\lvert -2.02 \rvert > 1.96$, **rifiutiamo $H_0$**: il gruppo 2 ha valori sistematicamente più alti.

</details>

<details>
<summary>Esercizio 3: Kruskal-Wallis con tre gruppi</summary>

Tre metodi di insegnamento sono testati su 4 studenti ciascuno. Punteggi:
- Metodo A: $70, 75, 80, 65$
- Metodo B: $85, 90, 88, 92$
- Metodo C: $72, 68, 78, 74$

Esegui il test di Kruskal-Wallis a $\alpha = 0.05$.

**Soluzione:**

$N = 12$. Ordinamento globale: $65(1), 68(2), 70(3), 72(4), 74(5), 75(6), 78(7), 80(8), 85(9), 88(10), 90(11), 92(12)$.

$R_A = 1+3+6+8 = 18$, $R_B = 9+10+11+12 = 42$, $R_C = 2+4+5+7 = 18$.

$$H = \frac{12}{12 \cdot 13}\left(\frac{18^2}{4}+\frac{42^2}{4}+\frac{18^2}{4}\right) - 3 \cdot 13 = \frac{12}{156}(81+441+81) - 39 = \frac{12 \cdot 603}{156} - 39 \approx 46.38 - 39 = 7.38$$

$\chi^2_{0.05, 2} = 5.991$. Poiché $7.38 > 5.991$, **rifiutiamo $H_0$**: almeno un metodo differisce dagli altri (il metodo B sembra superiore).

</details>

<details>
<summary>Esercizio 4: Correlazione di Spearman</summary>

Cinque candidati sono valutati da due commissari (ranghi già assegnati):

| Candidato | Commissario 1 | Commissario 2 |
| --- | --- | --- |
| A | 1 | 2 |
| B | 2 | 1 |
| C | 3 | 4 |
| D | 4 | 3 |
| E | 5 | 5 |

Calcola $r_s$ e testa se è significativamente diverso da zero a $\alpha = 0.05$.

**Soluzione:**

$d_i: -1, 1, -1, 1, 0$. $\sum d_i^2 = 1+1+1+1+0 = 4$.

$r_s = 1 - 6 \cdot 4/(5 \cdot 24) = 1 - 24/120 = 1 - 0.2 = 0.8$.

$t = 0.8\sqrt{3/(1-0.64)} = 0.8\sqrt{3/0.36} = 0.8\sqrt{8.33} \approx 0.8 \cdot 2.89 \approx 2.31$.

$t_{0.025, 3} = 3.182$. Poiché $2.31 < 3.182$, **non rifiutiamo $H_0$** (ma con solo 5 dati la potenza è bassa). La correlazione è sostanziale (0.8) ma non significativa al 5%.

</details>

<details>
<summary>Esercizio 5: Test del segno vs Wilcoxon</summary>

Differenze: $+1, +3, -0.5, +10, +0.2, +2, -0.1, +4$. Applica sia il test del segno che il test di Wilcoxon e confronta i risultati.

**Soluzione:**

**Test del segno:** $n = 8$, $S^+ = 6$ (sei differenze positive). $P(S^+ \geq 6) = \sum_{k=6}^{8}\binom{8}{k}0.5^8 = (28+8+1)/256 = 37/256 \approx 0.145$. Bilaterale: $p \approx 0.29$. Non significativo.

**Test di Wilcoxon:** valori assoluti ordinati: $0.1(1), 0.2(2), 0.5(3), 1(4), 2(5), 3(6), 4(7), 10(8)$.

$W^+$: somma ranghi dei positivi: $4+6+8+2+5+7 = 32$ (solo $-0.5 \to 3$ e $-0.1 \to 1$ sono negativi).

$\mu_{W^+} = 8 \cdot 9/4 = 18$. $\sigma_{W^+} = \sqrt{8 \cdot 9 \cdot 17/24} \approx 7.14$.

$Z = (32-18)/7.14 \approx 1.96$. Appena al limite: **rifiuta al 5%** (esattamente).

**Conclusione:** il test di Wilcoxon è più potente perché usa anche la grandezza delle differenze, non solo il segno. Il valore $+10$ (outlier positivo) pesa di più nel Wilcoxon.

</details>

<details>
<summary>Esercizio 6: Scegliere il test giusto</summary>

In ciascun caso, quale test non parametrico useresti e perché?

a) Confronto di 3 gruppi di pazienti su scala di dolore 0-10 (piccoli campioni, distribuzione asimmetrica).

b) Correlazione tra posizione in classifica e stipendio in una lista di 50 aziende.

c) Prima-dopo su 15 soggetti con scala Likert 1-5.

**Soluzione:**

a) **Kruskal-Wallis**: 3 gruppi, dati ordinali (scala 0-10), distribuzione asimmetrica. Se significativo, seguire con test di Dunn per confronti a coppie.

b) **Correlazione di Spearman**: una variabile è già un rango (posizione in classifica), l'altra (stipendio) può avere outlier. Spearman misura l'associazione monotonica.

c) **Test di Wilcoxon signed-rank**: disegno prima-dopo (coppie naturali), dati su scala Likert. Le differenze sono discrete e la distribuzione potrebbe essere simmetrica attorno a 0 sotto $H_0$. In alternativa, test del segno se si dubita della simmetria.

</details>

<details>
<summary>Esercizio 7: Potenza relativa</summary>

Un dataset di 30 osservazioni è perfettamente normale. Si applica sia il test t che il test di Wilcoxon. Quale ha più potenza e di quanto?

**Soluzione:**

Quando i dati sono perfettamente normali, il test t è uniformemente più potente del test di Wilcoxon signed-rank. L'**efficienza relativa asintotica** (ARE, Asymptotic Relative Efficiency) del test di Wilcoxon rispetto al test t sotto la normalità è $3/\pi \approx 0.955$.

Questo significa che per ottenere la stessa potenza, il test di Wilcoxon ha bisogno di circa il 4.5% di osservazioni in più. Con $n=30$, equivale a circa 1.4 osservazioni extra — una perdita trascurabile in pratica.

Per distribuzioni non normali con code pesanti, l'ARE del Wilcoxon può superare 1 (è addirittura infinito per la distribuzione di Laplace). Ecco perché il Wilcoxon è una scelta robusta anche quando si sospetta la normalità ma non si è certi.

</details>
