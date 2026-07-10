---
id: probabilita-13-poisson-process
subject: probabilita
topic_it: Processi stocastici
topic_en: Stochastic processes
title_it: Processi di Poisson
title_en: Poisson processes
level: blue
order: 13
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 12 — Processi di Poisson"
---

## 1. Intuizione

Immagina di stare seduto fuori da un caffè, contando quante auto passano. Gli arrivi sembrano "casuali" ma con una certa regolarità: in media arrivano $\lambda$ auto al minuto. Non sai quando arriverà la prossima, ma sai che in 10 minuti ne arriveranno circa $10\lambda$. Questo è un processo di Poisson.

La bellezza del processo di Poisson sta nella sua **semplicità assiomatica**: tre proprietà naturali (partire da zero, incrementi indipendenti, incrementi stazionari) determinano completamente la distribuzione. Non si assume nulla sulla distribuzione degli arrivi — emerge automaticamente che il numero di arrivi in un intervallo ha distribuzione di Poisson, e i tempi tra gli arrivi hanno distribuzione esponenziale.

Il processo di Poisson è il modello fondamentale per eventi rari che accadono a un tasso costante: chiamate a un call center, decadimenti radioattivi, errori in un codice sorgente, clienti in un supermercato, terremoti (su scale di tempo gelogico), mutazioni genetiche. Ovunque ci sia un flusso di eventi discreti nel tempo, il processo di Poisson è il punto di partenza naturale.

La proprietà più sorprendente è la **mancanza di memoria** dei tempi di interarrivo (distribuzione esponenziale): il fatto che l'ultimo cliente sia arrivato 5 minuti fa non dice nulla su quando arriverà il prossimo. Il processo non "ricorda" niente — ogni istante ricomincia da capo.

## 2. Prerequisiti

- Distribuzione di Poisson discreta: $P(N=k) = e^{-\mu}\mu^k/k!$
- Distribuzione esponenziale: densità $f(t) = \lambda e^{-\lambda t}$, proprietà senza memoria
- Variabili aleatorie continue e funzioni di densità
- Distribuzione Gamma: somma di esponenziali indipendenti
- Concetto di processo stocastico a tempo continuo

## 3. Teoria

### Processo di conteggio

Un **processo di conteggio** $\{N(t), t \geq 0\}$ è una famiglia di variabili aleatorie a valori interi non negativi tale che:
- $N(0) = 0$
- $N(t)$ è non decrescente (gli eventi si accumulano)
- $N(t) - N(s)$ è il numero di eventi nell'intervallo $(s, t]$ per $s < t$

### Definizione del processo di Poisson

**Definizione (assiomatica).** Un processo di conteggio $\{N(t), t \geq 0\}$ è un **processo di Poisson** di tasso $\lambda > 0$ se:

**Assioma 1** — Condizione iniziale: $N(0) = 0$.

**Assioma 2** — Incrementi indipendenti: per $0 \leq t_1 < t_2 \leq t_3 < t_4$, gli incrementi $N(t_2)-N(t_1)$ e $N(t_4)-N(t_3)$ sono indipendenti. Il numero di eventi in intervalli non sovrapposti sono variabili aleatorie indipendenti.

**Assioma 3** — Incrementi stazionari: per ogni $s, t > 0$, $N(t+s) - N(t) \sim \text{Pois}(\lambda s)$. Il numero di eventi in un intervallo di lunghezza $s$ dipende solo da $s$, non da quando inizia l'intervallo.

Da questi tre assiomi segue tutto.

**Distribuzione marginale:** $N(t) \sim \text{Pois}(\lambda t)$, quindi:
$$P(N(t) = k) = e^{-\lambda t} \frac{(\lambda t)^k}{k!}, \quad k = 0, 1, 2, \ldots$$

**Media e varianza:**
$$E[N(t)] = \lambda t, \qquad \text{Var}(N(t)) = \lambda t$$

La media cresce linearmente con il tempo; il tasso $\lambda$ è il numero atteso di eventi per unità di tempo.

### Tempi di interarrivo

I **tempi di interarrivo** $T_1, T_2, \ldots$ sono definiti da: $T_1 = $ tempo al primo evento, $T_n = $ tempo tra il $(n-1)$-esimo e $n$-esimo evento.

**Teorema.** $T_1, T_2, \ldots$ sono variabili aleatorie indipendenti e identicamente distribuite con distribuzione esponenziale di tasso $\lambda$: $T_n \sim \text{Exp}(\lambda)$.

*Dimostrazione per $T_1$:* $P(T_1 > t) = P(N(t) = 0) = e^{-\lambda t}$. Quindi $F_{T_1}(t) = 1 - e^{-\lambda t}$, che è la distribuzione esponenziale. $\square$

**Proprietà senza memoria dell'esponenziale:**
$$P(T_1 > s+t \mid T_1 > s) = P(T_1 > t) = e^{-\lambda t}$$

Sapere che il primo evento non è ancora arrivato dopo $s$ unità di tempo non cambia la distribuzione del tempo di attesa residuo. Il processo "ricomincia da capo" ad ogni istante.

### Tempo all'$n$-esimo evento

Il **tempo di attesa all'$n$-esimo evento** è $S_n = T_1 + T_2 + \cdots + T_n$.

Poiché è somma di $n$ variabili esponenziali i.i.d. con tasso $\lambda$:
$$S_n \sim \text{Gamma}(n, \lambda)$$

con densità:
$$f_{S_n}(t) = \frac{\lambda^n t^{n-1} e^{-\lambda t}}{(n-1)!}, \qquad t > 0$$

**Media e varianza:**
$$E[S_n] = n/\lambda, \qquad \text{Var}(S_n) = n/\lambda^2$$

**Collegamento biunivoco:** $N(t) \geq n \iff S_n \leq t$ (il $n$-esimo evento è arrivato entro $t$ se e solo se ci sono almeno $n$ eventi entro $t$).

### Sovrapposizione e assottigliamento

**Teorema (Sovrapposizione).** Se $N_1(t)$ è un processo di Poisson di tasso $\lambda_1$ e $N_2(t)$ è un processo di Poisson di tasso $\lambda_2$, indipendenti, allora:
$$N(t) = N_1(t) + N_2(t) \sim \text{processo di Poisson di tasso } \lambda_1 + \lambda_2$$

**Teorema (Assottigliamento).** Se $N(t) \sim \text{Pois}(\lambda t)$ e ogni evento è classificato come "tipo A" con probabilità $p$ (indipendentemente), allora il processo degli eventi di tipo A è $\text{Pois}(p\lambda t)$ e il processo degli eventi di tipo B è $\text{Pois}((1-p)\lambda t)$, e i due processi sono **indipendenti**.

**Teorema (Condizionamento).** Dato $N(t) = n$, i tempi di $n$ eventi in $[0,t]$ hanno la stessa distribuzione di $n$ punti scelti uniformemente e indipendentemente in $[0,t]$.

### Processo di Poisson non omogeneo

Generalizzazione: il tasso $\lambda(t)$ varia nel tempo. Gli incrementi non sono più stazionari, ma:
$$N(t) \sim \text{Pois}\!\left(\int_0^t \lambda(s)\, ds\right)$$

## 4. Derivazioni

### Derivazione della distribuzione di $N(t)$ dalla definizione alternativa

Si può definire il processo di Poisson tramite la **definizione infinitesimale**: in un intervallo $[t, t+h]$ per $h \to 0$:
- $P(N(h)=1) = \lambda h + o(h)$
- $P(N(h)=0) = 1 - \lambda h + o(h)$
- $P(N(h)\geq 2) = o(h)$ (eventi multipli istantanei sono trascurabili)

Definendo $p_k(t) = P(N(t)=k)$, si ottiene il sistema di equazioni differenziali:

$$p_0'(t) = -\lambda p_0(t), \quad p_k'(t) = \lambda p_{k-1}(t) - \lambda p_k(t), \quad k \geq 1$$

Con condizioni iniziali $p_0(0)=1$, $p_k(0)=0$ per $k \geq 1$. La soluzione è $p_k(t) = e^{-\lambda t}(\lambda t)^k/k!$ — la distribuzione di Poisson. $\square$

### Perché i tempi di interarrivo sono indipendenti

$P(T_2 > t \mid T_1 = s) = P(\text{nessun evento in }(s, s+t] \mid N(s)=1) = P(N(s+t)-N(s)=0) = e^{-\lambda t}$.

Questo non dipende da $s$: $T_2$ ha distribuzione $\text{Exp}(\lambda)$ indipendentemente da $T_1$. Si generalizza per induzione.

## 5. Esempi

**Esempio 1 (Base) — Clienti in un negozio.**
Clienti arrivano con processo di Poisson di tasso $\lambda = 3$/ora. Qual è la probabilità di avere esattamente 5 clienti in 2 ore?

$N(2) \sim \text{Pois}(6)$. $P(N(2)=5) = e^{-6}\dfrac{6^5}{5!} = e^{-6}\dfrac{7776}{120} \approx 0.00248 \times 64.8 \approx \mathbf{16.1\%}$.

---

**Esempio 2 (Base) — Tempo di attesa.**
Con il processo dell'esempio 1, qual è la probabilità che il primo cliente arrivi entro 20 minuti?

$T_1 \sim \text{Exp}(3)$ (tasso 3/ora). $20$ min $= 1/3$ ora.

$P(T_1 \leq 1/3) = 1 - e^{-3 \cdot 1/3} = 1 - e^{-1} \approx \mathbf{63.2\%}$.

---

**Esempio 3 (Medio) — Probabilità di zero eventi.**
Mutazioni genetiche accadono secondo un processo di Poisson di tasso $\lambda = 0.5$/generazione. Qual è la probabilità che in 3 generazioni non ci sia nessuna mutazione?

$P(N(3)=0) = e^{-0.5 \times 3} = e^{-1.5} \approx \mathbf{22.3\%}$.

---

**Esempio 4 (Medio) — Sovrapposizione.**
Email da due mittenti: mittente A con processo $\text{Pois}(2/h)$, mittente B con $\text{Pois}(3/h)$. Distribuzione totale in 1 ora e probabilità di nessuna email?

Sovrapposizione: $N_{\text{tot}}(1) \sim \text{Pois}(5)$. $P(N_{\text{tot}}=0) = e^{-5} \approx \mathbf{0.67\%}$.

---

**Esempio 5 (Medio) — Assottigliamento.**
Telefonate in arrivo: $\text{Pois}(10/h)$. Ogni telefonata è un cliente potenziale con prob. 0.3, altrimenti sbaglia numero. Distribuzione dei clienti potenziali?

Assottigliamento: $\text{Pois}(10 \times 0.3) = \text{Pois}(3/h)$. I due processi (clienti e sbagli) sono **indipendenti**.

---

**Esempio 6 (Alto) — Tempo al terzo evento.**
Con $\lambda = 2$/min, qual è il valore atteso e la varianza del tempo al terzo cliente?

$S_3 \sim \text{Gamma}(3, 2)$. $E[S_3] = 3/2 = 1.5$ min, $\text{Var}(S_3) = 3/4 = 0.75$ min$^2$.

$P(S_3 \leq 2) = 1 - e^{-4}(1 + 4 + 8) = 1 - 13e^{-4} \approx 1 - 0.238 \approx \mathbf{76.2\%}$.

---

**Esempio 7 (Alto) — Condizionamento.**
Dato che in un'ora arrivano $N(1) = 3$ clienti ($\lambda = 3$/h), qual è la distribuzione del tempo del primo arrivo?

Dato $N(1)=3$, i tre tempi sono distribuiti come $U[0,1]$ ordinati. Il primo arrivo $T_1 \mid N(1)=3$ ha distribuzione del minimo di 3 uniformi: $P(T_1 > t \mid N(1)=3) = (1-t)^3$ per $t \in [0,1]$.

## 6. Grafico

```plot
{"fn":"Math.exp(-3*x) * Math.pow(3*x, 4) / 6","fn2":"3 * Math.exp(-3*x)","domain":[0,3],"yDomain":[0,1],"title":"Densità Gamma(4,3): tempo al 4° evento con λ=3","label1":"f(t) = Gamma(4,3)","label2":"f(t) = Exp(3) per confronto"}
```

## 7. Interattivo

```slider
{"fn":"Math.exp(-lambda * x) * Math.pow(lambda * x, 3) / 6","domain":[0,10],"yDomain":[0,0.5],"params":[{"name":"lambda","min":0.5,"max":5,"step":0.5,"default":2}],"title":"Distribuzione di Poisson: densità Gamma(4,λ) — tempo al 4° evento"}
```

## 8. Errori comuni

**Errore 1 — Confondere $\lambda$ con $1/\lambda$.**
Se $T \sim \text{Exp}(\lambda)$, allora $E[T] = 1/\lambda$ (non $\lambda$). Con $\lambda = 3$ arrivi/min, il tempo medio tra arrivi è $1/3$ min. Attenzione: alcune fonti usano $\lambda$ per il parametro di scala (media) invece del tasso.

**Errore 2 — Non verificare le assunzioni.**
Il processo di Poisson richiede incrementi indipendenti e stazionari. Gli arrivi di clienti in un negozio violano la stazionarietà se ci sono ore di punta. È necessario verificare che il tasso $\lambda$ sia davvero costante nel tempo di interesse.

**Errore 3 — Credere che la distribuzione di $N(t)$ sia binomiale.**
$N(t) \sim \text{Pois}(\lambda t)$, non binomiale. La distribuzione di Poisson emerge naturalmente come limite di binomiale con $n \to \infty$, $p \to 0$, $np = \lambda t$, ma non è binomiale con $n$ finito.

**Errore 4 — Sommare $\lambda$ e $t$ invece di moltiplicarli.**
$N(t) \sim \text{Pois}(\lambda t)$: il parametro è il prodotto $\lambda t$, non la somma. Se $\lambda = 2$/ora e $t = 3$ ore, il parametro è 6, non 5.

**Errore 5 — Ignorare l'indipendenza nell'assottigliamento.**
Un risultato sorprendente: dopo l'assottigliamento, i processi dei due tipi sono **indipendenti**, anche se vengono dallo stesso processo madre. Non si può dedurre il numero di eventi di tipo A dal numero di tipo B.

**Errore 6 — Confondere $S_n$ e $T_n$.**
$T_n$ è il tempo tra il $(n-1)$-esimo e $n$-esimo evento (interarrivo). $S_n = T_1 + \cdots + T_n$ è il tempo totale dall'inizio all'$n$-esimo evento. Sono variabili diverse: $T_n \sim \text{Exp}(\lambda)$, $S_n \sim \text{Gamma}(n,\lambda)$.

**Errore 7 — Applicare la proprietà senza memoria ai tempi di attesa condizionati.**
La proprietà senza memoria dice $P(T_1 > s+t \mid T_1 > s) = P(T_1 > t)$. Ma questo vale per $T_1 \sim \text{Exp}(\lambda)$, non per somme di esponenziali ($S_n \sim \text{Gamma}$ per $n>1$) che non sono senza memoria.

## 9. Applicazioni reali

**Telecomunicazioni e reti.** Il traffico di pacchetti su Internet, le chiamate telefoniche in una centrale, le richieste HTTP a un server web sono modellati come processi di Poisson. Il parametro $\lambda$ (tasso di arrivo) è fondamentale per il dimensionamento delle reti e la teoria delle code (queueing theory).

**Fisica nucleare e dosimetria.** Il decadimento radioattivo è un processo di Poisson: ogni atomo ha una piccola probabilità di decadere per unità di tempo, e gli atomi sono indipendenti. Il tasso $\lambda = N \cdot \lambda_0$ (numero di atomi $\times$ tasso per atomo) determina l'attività della sorgente. I contatori Geiger misurano il processo di Poisson degli impulsi.

**Epidemiologia.** L'incidenza di malattie rare in una popolazione è modellata con processi di Poisson: numero di casi di leucemia in un quartiere, numero di infezioni da un agente raro. Deviazioni dal modello di Poisson indicano clustering spaziale o temporale (cluster epidemici).

**Affidabilità e manutenzione.** I guasti di un sistema (componenti elettronici, macchinari industriali) sono spesso modellati come processo di Poisson di tasso $\lambda$. Il tempo al primo guasto $T_1 \sim \text{Exp}(\lambda)$ ha vita media $1/\lambda$. Questo permette di pianificare la manutenzione preventiva e le scorte di ricambi.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Distribuzione di $N(t)$ | $\text{Pois}(\lambda t)$ | Numero di eventi in $[0,t]$ |
| Media e varianza | $E[N(t)] = \text{Var}(N(t)) = \lambda t$ | Caratteristica della Poisson |
| Tempi di interarrivo | $T_n \sim \text{Exp}(\lambda)$ i.i.d. | Senza memoria |
| Tempo all'$n$-esimo evento | $S_n \sim \text{Gamma}(n, \lambda)$ | $E[S_n]=n/\lambda$, $\text{Var}=n/\lambda^2$ |
| Sovrapposizione | $\text{Pois}(\lambda_1) + \text{Pois}(\lambda_2) = \text{Pois}(\lambda_1+\lambda_2)$ | Processi indipendenti |
| Assottigliamento | $\text{Pois}(\lambda) \xrightarrow{p} \text{Pois}(p\lambda)$ | Processi risultanti indipendenti |
| Proprietà senza memoria | $P(T_1>s+t\mid T_1>s) = e^{-\lambda t}$ | Solo per distribuzione esponenziale |
| Condizionamento | Dato $N(t)=n$: $n$ punti i.i.d. $U[0,t]$ | Distribuzione uniforme |

## 11. Esercizi

<details>
<summary>Esercizio 1: Probabilità di esattamente k eventi</summary>

Errori in un codice sorgente appaiono con processo di Poisson di tasso $\lambda = 2$ per 100 righe. Qual è la probabilità di trovare esattamente 3 errori in 150 righe?

**Soluzione.**

$\lambda t = 2 \times 1.5 = 3$ (poiché 150 righe = 1.5 unità di 100 righe).

$P(N(150)=3) = e^{-3}\dfrac{3^3}{3!} = e^{-3}\dfrac{27}{6} = \dfrac{9}{2}e^{-3} \approx 0.4482 \times 0.0498 \approx \mathbf{22.4\%}$.

</details>

<details>
<summary>Esercizio 2: Tempo di attesa medio e deviazione standard</summary>

Ambulanze arrivano all'ospedale con processo di Poisson di tasso $\lambda = 4$/ora. Qual è il tempo medio di attesa alla terza ambulanza e la sua deviazione standard?

**Soluzione.**

$S_3 \sim \text{Gamma}(3, 4)$.

$E[S_3] = 3/4 = \mathbf{0.75}$ ore $= 45$ minuti.

$\text{Var}(S_3) = 3/16$, $\text{SD}(S_3) = \sqrt{3}/4 \approx \mathbf{0.433}$ ore $\approx 26$ minuti.

</details>

<details>
<summary>Esercizio 3: Proprietà senza memoria</summary>

Aspetti un autobus che arriva con processo di Poisson di tasso $\lambda = 6$/ora. Hai già aspettato 5 minuti. Qual è la probabilità che tu debba aspettare ancora almeno 10 minuti?

**Soluzione.**

Per la proprietà senza memoria: $P(T_1 > 15 \text{ min} \mid T_1 > 5 \text{ min}) = P(T_1 > 10 \text{ min})$.

$10$ min $= 1/6$ ora. $P(T_1 > 1/6) = e^{-6 \cdot 1/6} = e^{-1} \approx \mathbf{36.8\%}$.

I 5 minuti già aspettati non contano — è come ricominciare da zero.

</details>

<details>
<summary>Esercizio 4: Sovrapposizione</summary>

Due call center ricevono chiamate: centro A con $\text{Pois}(5/h)$, centro B con $\text{Pois}(7/h)$, indipendenti. Qual è la distribuzione del totale di chiamate in 2 ore, e qual è la probabilità di ricevere meno di 20 chiamate totali?

**Soluzione.**

Sovrapposizione: tasso totale $= 5+7 = 12$/h. In 2 ore: $N_{\text{tot}}(2) \sim \text{Pois}(24)$.

$P(N < 20) = \sum_{k=0}^{19} e^{-24}\dfrac{24^k}{k!}$.

Per grandi $\lambda$, $\text{Pois}(24) \approx N(24, 24)$. $P(N<20) \approx P(Z < (19.5-24)/\sqrt{24}) = P(Z < -0.918) \approx \mathbf{17.9\%}$.

</details>

<details>
<summary>Esercizio 5: Assottigliamento</summary>

Pacchetti dati arrivano con $\text{Pois}(100/\text{sec})$. Il 2% sono corrotti. Qual è la distribuzione di pacchetti corrotti e integri in un secondo? Sono indipendenti?

**Soluzione.**

Corrotti: $\text{Pois}(100 \times 0.02) = \text{Pois}(2)$/sec.

Integri: $\text{Pois}(100 \times 0.98) = \text{Pois}(98)$/sec.

Per il teorema di assottigliamento, i due processi sono **indipendenti** (sorprendente ma vero).

</details>

<details>
<summary>Esercizio 6: Collegamento tra N(t) e S_n</summary>

Con $\lambda = 2$/min, calcola $P(S_4 \leq 3)$ usando il collegamento con $N(t)$.

**Soluzione.**

$P(S_4 \leq 3) = P(N(3) \geq 4)$ (il 4° evento arriva entro 3 minuti iff ci sono almeno 4 eventi entro 3 minuti).

$N(3) \sim \text{Pois}(6)$.

$P(N(3) \geq 4) = 1 - P(N(3) \leq 3) = 1 - e^{-6}(1 + 6 + 18 + 36) = 1 - 61e^{-6} \approx 1 - 0.1512 \approx \mathbf{84.9\%}$.

</details>

<details>
<summary>Esercizio 7: Processo non omogeneo</summary>

Un negozio ha un tasso di arrivo $\lambda(t) = 10 + 5\sin(\pi t/6)$ clienti/ora (con $t$ in ore dalla mezzanotte, picco a mezzogiorno). Quanti clienti arrivano in media tra le 9:00 e le 12:00?

**Soluzione.**

$E[N(9,12)] = \int_9^{12} \lambda(t)\, dt = \int_9^{12} (10 + 5\sin(\pi t/6))\, dt$

$= [10t - \dfrac{30}{\pi}\cos(\pi t/6)]_9^{12}$

$= (120 - \dfrac{30}{\pi}\cos(2\pi)) - (90 - \dfrac{30}{\pi}\cos(3\pi/2))$

$= (120 - \dfrac{30}{\pi}) - (90 - 0) = 30 - \dfrac{30}{\pi} \approx 30 - 9.55 \approx \mathbf{20.45}$ clienti.

</details>
