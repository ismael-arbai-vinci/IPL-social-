/**
 * Valide une adresse email selon les critères suivants :
 * - Contient exactement un symbole @
 * - Contient au moins un point dans le nom de domaine
 * - Le point ne doit pas être le dernier caractère
 * - Ne contient aucun espace
 * - Possède du texte avant et après le @
 * 
 * @param email - La chaîne de caractères à valider
 * @returns true si l'email est valide, false sinon
 */
export function validateEmail(email: string): boolean {
  // Vérifier si l'email est vide ou null
  if (!email || email.length === 0) {
    return false;
  }

  // Vérifier qu'il n'y a pas d'espaces
  if (email.indexOf(' ') !== -1) {
    return false;
  }

  // Compter le nombre de @
  let atCount = 0;
  let atPosition = -1;
  
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      atCount++;
      atPosition = i;
    }
  }

  // Il doit y avoir exactement un @
  if (atCount !== 1) {
    return false;
  }

  // Extraire la partie avant le @ (local part)
  const localPart = email.substring(0, atPosition);
  
  // Extraire la partie après le @ (domain)
  const domain = email.substring(atPosition + 1);

  // Vérifier qu'il y a du texte avant et après le @
  if (localPart.length === 0 || domain.length === 0) {
    return false;
  }

  // Vérifier qu'il y a au moins un point dans le domaine
  let dotFound = false;
  let lastDotPosition = -1;
  
  for (let i = 0; i < domain.length; i++) {
    if (domain[i] === '.') {
      dotFound = true;
      lastDotPosition = i;
    }
  }

  if (!dotFound) {
    return false;
  }

  // Vérifier que le point n'est pas le dernier caractère du domaine
  if (lastDotPosition === domain.length - 1) {
    return false;
  }

  return true;
}