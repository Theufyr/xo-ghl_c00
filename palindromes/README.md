https://github.com/adatechschool/Exercices_individuels_Module_1/blob/main/06_jouons_avec_les_palindromes.md
# 1. Enoncé

Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”.
Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

*Contraintes:* 

- L’exercice se fera en JS

## Étape 1

Créer une fonction `isValidDate` qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

```jsx
isValidDate("03/04/2001") // true
isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
```

Vous aurez probablement besoin de créer une autre fonction `maxDaysInMonth` pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

## Étape 2

Créer une fonction `isPalindrome` qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.

Exemple de date palindrome: `11/02/2011`. Les caractères `/` ne sont pas pris en compte.

```jsx
isPalindrome("11/02/2011") // true
isPalindrome("03/04/2001") // false
```

## Étape 3

Créer une fonction `getNextPalindromes` qui donne les `x` prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le `x` en paramètre.

```jsx
getNextPalindromes(8)
22/02/2022
03/02/2030
13/02/2031
23/02/2032
04/02/2040
14/02/2041
24/02/2042
05/02/2050
```

## Étape 4

Refactorer la fonction `isPalindrome` pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. Créer ensuite une nouvelle fonction `isDatePalindrome` qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera `isPalindrome`.
