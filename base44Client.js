// --- BASE44 SDK REMOVED FOR STATIC HOSTING ---
// We replaced the real SDK with this "Mock" object.
// This prevents the redirect loop and allows the site to load on Vercel.

console.log("Base44 SDK bypassed: Running in static mode");

export const base44 = {
  // If the app tries to fetch data (like sermons/events), 
  // we return empty lists instead of crashing.
  collection: (collectionName) => ({
    list: async () => [],
    get: async () => ({}),
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
  }),
  
  // If the app tries to get an image URL
  storage: {
    getUrl: () => ""
  },

  // If the app checks for a logged-in user
  auth: {
    getUser: async () => null,
    signIn: async () => {},
    signOut: async () => {}
  }
};
