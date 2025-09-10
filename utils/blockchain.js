export async function manageConsent(consent) {
  try {
    console.log('Updating consent on blockchain:', consent);
    return true; // Replace with blockchain API call
  } catch (error) {
    console.error('Failed to update consent:', error);
    return false;
  }
}
