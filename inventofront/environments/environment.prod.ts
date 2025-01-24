export const environment={
    production: true,
    apiUrl: 'https://aliot-global-inventory-dev.azurewebsites.net/api',
    mslConfig: {
        clientId: "40dd6f87-4874-44bb-bb40-34cbe1a70f01",
        authority: "https://login.microsoftonline.com/ed5d5f47-52dd-48af-90ca-f7bd83624eb9",
        redirectUri: 'https://localhost:4200/' // change redirect url based on where u want to redirect after the authentication
      }
    
}