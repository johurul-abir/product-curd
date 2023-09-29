
//random id creation 
 export function getRandomId(length = 15) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  };

  // product slug function

  export const createSlug = (productName) => {
    let slug = productName.toLowerCase();

    slug = slug.replace(/[^\w\s-]/g, '');
  
    slug = slug.replace(/\s+/g, '-');
  
    return slug;
  }