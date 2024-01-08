async function GetCertificateKey(type, provider, certID) {
    const keyIDs = await provider.keyStorage.keys()
    for (const keyID of keyIDs) {
      const parts = keyID.split("-");
  
      if (parts[0] === type && parts[2] === certID.split("-")[2]) {
        const key = await provider.keyStorage.getItem(keyID);
        if (key) {
          return key;
        }
      }
    }
    if (type === "public") {
      const cert = await provider.certStorage.getItem(certID);
      if (cert) {
        return cert.publicKey;
      }
    }
    return null;
}

const isValidUrl = (urlString) => {
  try { 
    return Boolean(new URL(urlString)); 
  }
  catch(e){ 
    return false; 
  }
}

const isBase64 = (str) => {
  if (str ==='' || str.trim() ===''){ return false; }
  try {
      return btoa(atob(str)) == str;
  } catch (err) {
      return false;
  }
}

export {isValidUrl, isBase64}