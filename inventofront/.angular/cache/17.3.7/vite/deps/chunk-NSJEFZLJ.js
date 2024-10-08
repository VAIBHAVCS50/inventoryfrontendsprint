import {
  AADServerParamKeys_exports,
  AccountEntity,
  ApiId,
  AuthError,
  AuthErrorCodes_exports,
  AuthToken_exports,
  AuthenticationScheme,
  Authority,
  AuthorityFactory_exports,
  AuthorityType,
  AuthorizationCodeClient,
  AzureCloudInstance,
  BrowserAuthError,
  BrowserCacheLocation,
  BrowserConstants,
  CacheError,
  CacheHelpers_exports,
  CacheLookupPolicy,
  CacheManager,
  CacheRecord,
  CcsCredentialType,
  ClientAuthErrorCodes_exports,
  ClientConfigurationErrorCodes_exports,
  Constants,
  CredentialType,
  CryptoOps,
  DEFAULT_CRYPTO_IMPLEMENTATION,
  DEFAULT_REQUEST,
  DEFAULT_SYSTEM_OPTIONS,
  EventHandler,
  EventType,
  HTTP_REQUEST_TYPE,
  InMemoryCacheKeys,
  InteractionRequiredAuthError,
  InteractionRequiredAuthErrorCodes_exports,
  InteractionType,
  LogLevel,
  Logger,
  MemoryStorage,
  NativeConstants,
  NativeExtensionMethod,
  OIDC_DEFAULT_SCOPES,
  PerformanceEvents,
  PersistentCacheKeys,
  PopTokenGenerator,
  PromptValue,
  ProtocolMode,
  ProtocolUtils,
  RefreshTokenClient,
  ScopeSet,
  ServerError,
  ServerResponseType,
  ServerTelemetryManager,
  SilentFlowClient,
  StaticCacheKeys,
  StringUtils,
  StubPerformanceClient,
  StubbedNetworkModule,
  TemporaryCacheKeys,
  ThrottlingUtils,
  TimeUtils_exports,
  UrlString,
  UrlUtils_exports,
  authCodeOrNativeAccountIdRequired,
  authCodeRequired,
  base64Decode,
  base64Encode,
  blockIframeReload,
  blockNestedPopups,
  buildAccountToCache,
  buildStaticAuthorityOptions,
  createAuthError,
  createBrowserAuthError,
  createClientAuthError,
  createClientConfigurationError,
  createInteractionRequiredAuthError,
  createNewGuid,
  cryptoKeyNotFound,
  emptyNavigateUri,
  emptyWindowError,
  failedToParseResponse,
  getRandomValues,
  getRequestFailed,
  hashDoesNotContainKnownProperties,
  hashEmptyError,
  hashString,
  iFrameRenewalPolicies,
  interactionInProgress,
  invoke,
  invokeAsync,
  monitorWindowTimeout,
  nativeConnectionNotEstablished,
  nativeExtensionNotInstalled,
  nativeHandshakeTimeout,
  nativePromptNotSupported,
  noAccountError,
  noCachedAuthorityError,
  noNetworkConnectivity,
  noStateInHash,
  noTokenRequestCacheError,
  nonBrowserEnvironment,
  pkceNotCreated,
  popupWindowError,
  postRequestFailed,
  redirectInIframe,
  sha256Digest,
  silentLogoutUnsupported,
  spaCodeAndNativeAccountIdPresent,
  stateInteractionTypeMismatch,
  unableToAcquireTokenFromNativePlatform,
  unableToLoadToken,
  unableToParseState,
  unableToParseTokenRequestCacheError,
  uninitializedPublicClientApplication,
  updateAccountTenantProfileData,
  urlEncodeArr,
  userCancelled
} from "./chunk-7GWHEDI2.js";
import {
  __async,
  __export,
  __objRest,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-NINA3NFV.js";

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs
var BrowserConfigurationAuthErrorCodes_exports = {};
__export(BrowserConfigurationAuthErrorCodes_exports, {
  inMemRedirectUnavailable: () => inMemRedirectUnavailable,
  storageNotSupported: () => storageNotSupported,
  stubbedPublicClientApplicationCalled: () => stubbedPublicClientApplicationCalled
});
var storageNotSupported = "storage_not_supported";
var stubbedPublicClientApplicationCalled = "stubbed_public_client_application_called";
var inMemRedirectUnavailable = "in_mem_redirect_unavailable";

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs
var BrowserConfigurationAuthErrorMessages = {
  [storageNotSupported]: "Given storage configuration option was not supported.",
  [stubbedPublicClientApplicationCalled]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
  [inMemRedirectUnavailable]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
};
var BrowserConfigurationAuthErrorMessage = {
  storageNotSupportedError: {
    code: storageNotSupported,
    desc: BrowserConfigurationAuthErrorMessages[storageNotSupported]
  },
  stubPcaInstanceCalled: {
    code: stubbedPublicClientApplicationCalled,
    desc: BrowserConfigurationAuthErrorMessages[stubbedPublicClientApplicationCalled]
  },
  inMemRedirectUnavailable: {
    code: inMemRedirectUnavailable,
    desc: BrowserConfigurationAuthErrorMessages[inMemRedirectUnavailable]
  }
};
var BrowserConfigurationAuthError = class _BrowserConfigurationAuthError extends AuthError {
  constructor(errorCode, errorMessage) {
    super(errorCode, errorMessage);
    this.name = "BrowserConfigurationAuthError";
    Object.setPrototypeOf(this, _BrowserConfigurationAuthError.prototype);
  }
};
function createBrowserConfigurationAuthError(errorCode) {
  return new BrowserConfigurationAuthError(errorCode, BrowserConfigurationAuthErrorMessages[errorCode]);
}

// node_modules/@azure/msal-browser/dist/cache/BrowserStorage.mjs
var BrowserStorage = class {
  constructor(cacheLocation) {
    this.validateWindowStorage(cacheLocation);
    this.windowStorage = window[cacheLocation];
  }
  validateWindowStorage(cacheLocation) {
    if (cacheLocation !== BrowserCacheLocation.LocalStorage && cacheLocation !== BrowserCacheLocation.SessionStorage || !window[cacheLocation]) {
      throw createBrowserConfigurationAuthError(storageNotSupported);
    }
  }
  getItem(key) {
    return this.windowStorage.getItem(key);
  }
  setItem(key, value) {
    this.windowStorage.setItem(key, value);
  }
  removeItem(key) {
    this.windowStorage.removeItem(key);
  }
  getKeys() {
    return Object.keys(this.windowStorage);
  }
  containsKey(key) {
    return this.windowStorage.hasOwnProperty(key);
  }
};

// node_modules/@azure/msal-browser/dist/utils/BrowserProtocolUtils.mjs
function extractBrowserRequestState(browserCrypto, state) {
  if (!state) {
    return null;
  }
  try {
    const requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state);
    return requestStateObj.libraryState.meta;
  } catch (e) {
    throw createClientAuthError(ClientAuthErrorCodes_exports.invalidState);
  }
}

// node_modules/@azure/msal-browser/dist/cache/BrowserCacheManager.mjs
var BrowserCacheManager = class _BrowserCacheManager extends CacheManager {
  constructor(clientId, cacheConfig, cryptoImpl, logger, staticAuthorityOptions, performanceClient) {
    super(clientId, cryptoImpl, logger, staticAuthorityOptions);
    this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3;
    this.cacheConfig = cacheConfig;
    this.logger = logger;
    this.internalStorage = new MemoryStorage();
    this.browserStorage = this.setupBrowserStorage(this.cacheConfig.cacheLocation);
    this.temporaryCacheStorage = this.setupTemporaryCacheStorage(this.cacheConfig.temporaryCacheLocation, this.cacheConfig.cacheLocation);
    if (cacheConfig.cacheMigrationEnabled) {
      this.migrateCacheEntries();
      this.createKeyMaps();
    }
    this.performanceClient = performanceClient;
  }
  /**
   * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured cacheLocation.
   * @param cacheLocation
   */
  setupBrowserStorage(cacheLocation) {
    switch (cacheLocation) {
      case BrowserCacheLocation.LocalStorage:
      case BrowserCacheLocation.SessionStorage:
        try {
          return new BrowserStorage(cacheLocation);
        } catch (e) {
          this.logger.verbose(e);
          break;
        }
    }
    this.cacheConfig.cacheLocation = BrowserCacheLocation.MemoryStorage;
    return new MemoryStorage();
  }
  /**
   * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured temporaryCacheLocation.
   * @param temporaryCacheLocation
   * @param cacheLocation
   */
  setupTemporaryCacheStorage(temporaryCacheLocation, cacheLocation) {
    switch (cacheLocation) {
      case BrowserCacheLocation.LocalStorage:
      case BrowserCacheLocation.SessionStorage:
        try {
          return new BrowserStorage(temporaryCacheLocation || BrowserCacheLocation.SessionStorage);
        } catch (e) {
          this.logger.verbose(e);
          return this.internalStorage;
        }
      case BrowserCacheLocation.MemoryStorage:
      default:
        return this.internalStorage;
    }
  }
  /**
   * Migrate all old cache entries to new schema. No rollback supported.
   * @param storeAuthStateInCookie
   */
  migrateCacheEntries() {
    const idTokenKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.ID_TOKEN}`;
    const clientInfoKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.CLIENT_INFO}`;
    const errorKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.ERROR}`;
    const errorDescKey = `${Constants.CACHE_PREFIX}.${PersistentCacheKeys.ERROR_DESC}`;
    const idTokenValue = this.browserStorage.getItem(idTokenKey);
    const clientInfoValue = this.browserStorage.getItem(clientInfoKey);
    const errorValue = this.browserStorage.getItem(errorKey);
    const errorDescValue = this.browserStorage.getItem(errorDescKey);
    const values = [
      idTokenValue,
      clientInfoValue,
      errorValue,
      errorDescValue
    ];
    const keysToMigrate = [
      PersistentCacheKeys.ID_TOKEN,
      PersistentCacheKeys.CLIENT_INFO,
      PersistentCacheKeys.ERROR,
      PersistentCacheKeys.ERROR_DESC
    ];
    keysToMigrate.forEach((cacheKey, index) => {
      const value = values[index];
      if (value) {
        this.setTemporaryCache(cacheKey, value, true);
      }
    });
  }
  /**
   * Searches all cache entries for MSAL accounts and creates the account key map
   * This is used to migrate users from older versions of MSAL which did not create the map.
   * @returns
   */
  createKeyMaps() {
    this.logger.trace("BrowserCacheManager - createKeyMaps called.");
    const accountKeys = this.getItem(StaticCacheKeys.ACCOUNT_KEYS);
    const tokenKeys = this.getItem(`${StaticCacheKeys.TOKEN_KEYS}.${this.clientId}`);
    if (accountKeys && tokenKeys) {
      this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
      return;
    }
    const allKeys = this.browserStorage.getKeys();
    allKeys.forEach((key) => {
      if (this.isCredentialKey(key)) {
        const value = this.getItem(key);
        if (value) {
          const credObj = this.validateAndParseJson(value);
          if (credObj && credObj.hasOwnProperty("credentialType")) {
            switch (credObj["credentialType"]) {
              case CredentialType.ID_TOKEN:
                if (CacheHelpers_exports.isIdTokenEntity(credObj)) {
                  this.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map");
                  this.logger.tracePii(`BrowserCacheManager:createKeyMaps - idToken with key: ${key} found, saving key to token key map`);
                  const idTokenEntity = credObj;
                  const newKey = this.updateCredentialCacheKey(key, idTokenEntity);
                  this.addTokenKey(newKey, CredentialType.ID_TOKEN);
                  return;
                } else {
                  this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping.");
                  this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed idToken validation on key: ${key}`);
                }
                break;
              case CredentialType.ACCESS_TOKEN:
              case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                if (CacheHelpers_exports.isAccessTokenEntity(credObj)) {
                  this.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map");
                  this.logger.tracePii(`BrowserCacheManager:createKeyMaps - accessToken with key: ${key} found, saving key to token key map`);
                  const accessTokenEntity = credObj;
                  const newKey = this.updateCredentialCacheKey(key, accessTokenEntity);
                  this.addTokenKey(newKey, CredentialType.ACCESS_TOKEN);
                  return;
                } else {
                  this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping.");
                  this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed accessToken validation on key: ${key}`);
                }
                break;
              case CredentialType.REFRESH_TOKEN:
                if (CacheHelpers_exports.isRefreshTokenEntity(credObj)) {
                  this.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map");
                  this.logger.tracePii(`BrowserCacheManager:createKeyMaps - refreshToken with key: ${key} found, saving key to token key map`);
                  const refreshTokenEntity = credObj;
                  const newKey = this.updateCredentialCacheKey(key, refreshTokenEntity);
                  this.addTokenKey(newKey, CredentialType.REFRESH_TOKEN);
                  return;
                } else {
                  this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping.");
                  this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: ${key}`);
                }
                break;
            }
          }
        }
      }
      if (this.isAccountKey(key)) {
        const value = this.getItem(key);
        if (value) {
          const accountObj = this.validateAndParseJson(value);
          if (accountObj && AccountEntity.isAccountEntity(accountObj)) {
            this.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map");
            this.logger.tracePii(`BrowserCacheManager:createKeyMaps - account with key: ${key} found, saving key to account key map`);
            this.addAccountKeyToMap(key);
          }
        }
      }
    });
  }
  /**
   * Parses passed value as JSON object, JSON.parse() will throw an error.
   * @param input
   */
  validateAndParseJson(jsonValue) {
    try {
      const parsedJson = JSON.parse(jsonValue);
      return parsedJson && typeof parsedJson === "object" ? parsedJson : null;
    } catch (error) {
      return null;
    }
  }
  /**
   * fetches the entry from the browser storage based off the key
   * @param key
   */
  getItem(key) {
    return this.browserStorage.getItem(key);
  }
  /**
   * sets the entry in the browser storage
   * @param key
   * @param value
   */
  setItem(key, value) {
    this.browserStorage.setItem(key, value);
  }
  /**
   * fetch the account entity from the platform cache
   * @param accountKey
   */
  getAccount(accountKey, logger) {
    this.logger.trace("BrowserCacheManager.getAccount called");
    const accountEntity = this.getCachedAccountEntity(accountKey);
    return this.updateOutdatedCachedAccount(accountKey, accountEntity, logger);
  }
  /**
   * Reads account from cache, deserializes it into an account entity and returns it.
   * If account is not found from the key, returns null and removes key from map.
   * @param accountKey
   * @returns
   */
  getCachedAccountEntity(accountKey) {
    const serializedAccount = this.getItem(accountKey);
    if (!serializedAccount) {
      this.removeAccountKeyFromMap(accountKey);
      return null;
    }
    const parsedAccount = this.validateAndParseJson(serializedAccount);
    if (!parsedAccount || !AccountEntity.isAccountEntity(parsedAccount)) {
      this.removeAccountKeyFromMap(accountKey);
      return null;
    }
    return CacheManager.toObject(new AccountEntity(), parsedAccount);
  }
  /**
   * set account entity in the platform cache
   * @param account
   */
  setAccount(account) {
    this.logger.trace("BrowserCacheManager.setAccount called");
    const key = account.generateAccountKey();
    this.setItem(key, JSON.stringify(account));
    this.addAccountKeyToMap(key);
  }
  /**
   * Returns the array of account keys currently cached
   * @returns
   */
  getAccountKeys() {
    this.logger.trace("BrowserCacheManager.getAccountKeys called");
    const accountKeys = this.getItem(StaticCacheKeys.ACCOUNT_KEYS);
    if (accountKeys) {
      return JSON.parse(accountKeys);
    }
    this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found");
    return [];
  }
  /**
   * Add a new account to the key map
   * @param key
   */
  addAccountKeyToMap(key) {
    this.logger.trace("BrowserCacheManager.addAccountKeyToMap called");
    this.logger.tracePii(`BrowserCacheManager.addAccountKeyToMap called with key: ${key}`);
    const accountKeys = this.getAccountKeys();
    if (accountKeys.indexOf(key) === -1) {
      accountKeys.push(key);
      this.setItem(StaticCacheKeys.ACCOUNT_KEYS, JSON.stringify(accountKeys));
      this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added");
    } else {
      this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }
  }
  /**
   * Remove an account from the key map
   * @param key
   */
  removeAccountKeyFromMap(key) {
    this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called");
    this.logger.tracePii(`BrowserCacheManager.removeAccountKeyFromMap called with key: ${key}`);
    const accountKeys = this.getAccountKeys();
    const removalIndex = accountKeys.indexOf(key);
    if (removalIndex > -1) {
      accountKeys.splice(removalIndex, 1);
      this.setItem(StaticCacheKeys.ACCOUNT_KEYS, JSON.stringify(accountKeys));
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed");
    } else {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }
  }
  /**
   * Extends inherited removeAccount function to include removal of the account key from the map
   * @param key
   */
  removeAccount(key) {
    return __async(this, null, function* () {
      void __superGet(_BrowserCacheManager.prototype, this, "removeAccount").call(this, key);
      this.removeAccountKeyFromMap(key);
    });
  }
  /**
   * Remove account entity from the platform cache if it's outdated
   * @param accountKey
   */
  removeOutdatedAccount(accountKey) {
    this.removeItem(accountKey);
    this.removeAccountKeyFromMap(accountKey);
  }
  /**
   * Removes given idToken from the cache and from the key map
   * @param key
   */
  removeIdToken(key) {
    super.removeIdToken(key);
    this.removeTokenKey(key, CredentialType.ID_TOKEN);
  }
  /**
   * Removes given accessToken from the cache and from the key map
   * @param key
   */
  removeAccessToken(key) {
    return __async(this, null, function* () {
      void __superGet(_BrowserCacheManager.prototype, this, "removeAccessToken").call(this, key);
      this.removeTokenKey(key, CredentialType.ACCESS_TOKEN);
    });
  }
  /**
   * Removes given refreshToken from the cache and from the key map
   * @param key
   */
  removeRefreshToken(key) {
    super.removeRefreshToken(key);
    this.removeTokenKey(key, CredentialType.REFRESH_TOKEN);
  }
  /**
   * Gets the keys for the cached tokens associated with this clientId
   * @returns
   */
  getTokenKeys() {
    this.logger.trace("BrowserCacheManager.getTokenKeys called");
    const item = this.getItem(`${StaticCacheKeys.TOKEN_KEYS}.${this.clientId}`);
    if (item) {
      const tokenKeys = this.validateAndParseJson(item);
      if (tokenKeys && tokenKeys.hasOwnProperty("idToken") && tokenKeys.hasOwnProperty("accessToken") && tokenKeys.hasOwnProperty("refreshToken")) {
        return tokenKeys;
      } else {
        this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.");
      }
    } else {
      this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
    }
    return {
      idToken: [],
      accessToken: [],
      refreshToken: []
    };
  }
  /**
   * Adds the given key to the token key map
   * @param key
   * @param type
   */
  addTokenKey(key, type) {
    this.logger.trace("BrowserCacheManager addTokenKey called");
    const tokenKeys = this.getTokenKeys();
    switch (type) {
      case CredentialType.ID_TOKEN:
        if (tokenKeys.idToken.indexOf(key) === -1) {
          this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map");
          tokenKeys.idToken.push(key);
        }
        break;
      case CredentialType.ACCESS_TOKEN:
        if (tokenKeys.accessToken.indexOf(key) === -1) {
          this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map");
          tokenKeys.accessToken.push(key);
        }
        break;
      case CredentialType.REFRESH_TOKEN:
        if (tokenKeys.refreshToken.indexOf(key) === -1) {
          this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map");
          tokenKeys.refreshToken.push(key);
        }
        break;
      default:
        this.logger.error(`BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: ${type}`);
        throw createClientAuthError(ClientAuthErrorCodes_exports.unexpectedCredentialType);
    }
    this.setItem(`${StaticCacheKeys.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(tokenKeys));
  }
  /**
   * Removes the given key from the token key map
   * @param key
   * @param type
   */
  removeTokenKey(key, type) {
    this.logger.trace("BrowserCacheManager removeTokenKey called");
    const tokenKeys = this.getTokenKeys();
    switch (type) {
      case CredentialType.ID_TOKEN:
        this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: ${key} from map`);
        const idRemoval = tokenKeys.idToken.indexOf(key);
        if (idRemoval > -1) {
          this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map");
          tokenKeys.idToken.splice(idRemoval, 1);
        } else {
          this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
        }
        break;
      case CredentialType.ACCESS_TOKEN:
        this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: ${key} from map`);
        const accessRemoval = tokenKeys.accessToken.indexOf(key);
        if (accessRemoval > -1) {
          this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map");
          tokenKeys.accessToken.splice(accessRemoval, 1);
        } else {
          this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
        }
        break;
      case CredentialType.REFRESH_TOKEN:
        this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: ${key} from map`);
        const refreshRemoval = tokenKeys.refreshToken.indexOf(key);
        if (refreshRemoval > -1) {
          this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map");
          tokenKeys.refreshToken.splice(refreshRemoval, 1);
        } else {
          this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
        }
        break;
      default:
        this.logger.error(`BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: ${type}`);
        throw createClientAuthError(ClientAuthErrorCodes_exports.unexpectedCredentialType);
    }
    this.setItem(`${StaticCacheKeys.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(tokenKeys));
  }
  /**
   * generates idToken entity from a string
   * @param idTokenKey
   */
  getIdTokenCredential(idTokenKey) {
    const value = this.getItem(idTokenKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
      this.removeTokenKey(idTokenKey, CredentialType.ID_TOKEN);
      return null;
    }
    const parsedIdToken = this.validateAndParseJson(value);
    if (!parsedIdToken || !CacheHelpers_exports.isIdTokenEntity(parsedIdToken)) {
      this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
      this.removeTokenKey(idTokenKey, CredentialType.ID_TOKEN);
      return null;
    }
    this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit");
    return parsedIdToken;
  }
  /**
   * set IdToken credential to the platform cache
   * @param idToken
   */
  setIdTokenCredential(idToken) {
    this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
    const idTokenKey = CacheHelpers_exports.generateCredentialKey(idToken);
    this.setItem(idTokenKey, JSON.stringify(idToken));
    this.addTokenKey(idTokenKey, CredentialType.ID_TOKEN);
  }
  /**
   * generates accessToken entity from a string
   * @param key
   */
  getAccessTokenCredential(accessTokenKey) {
    const value = this.getItem(accessTokenKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
      this.removeTokenKey(accessTokenKey, CredentialType.ACCESS_TOKEN);
      return null;
    }
    const parsedAccessToken = this.validateAndParseJson(value);
    if (!parsedAccessToken || !CacheHelpers_exports.isAccessTokenEntity(parsedAccessToken)) {
      this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
      this.removeTokenKey(accessTokenKey, CredentialType.ACCESS_TOKEN);
      return null;
    }
    this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit");
    return parsedAccessToken;
  }
  /**
   * set accessToken credential to the platform cache
   * @param accessToken
   */
  setAccessTokenCredential(accessToken) {
    this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
    const accessTokenKey = CacheHelpers_exports.generateCredentialKey(accessToken);
    this.setItem(accessTokenKey, JSON.stringify(accessToken));
    this.addTokenKey(accessTokenKey, CredentialType.ACCESS_TOKEN);
  }
  /**
   * generates refreshToken entity from a string
   * @param refreshTokenKey
   */
  getRefreshTokenCredential(refreshTokenKey) {
    const value = this.getItem(refreshTokenKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
      this.removeTokenKey(refreshTokenKey, CredentialType.REFRESH_TOKEN);
      return null;
    }
    const parsedRefreshToken = this.validateAndParseJson(value);
    if (!parsedRefreshToken || !CacheHelpers_exports.isRefreshTokenEntity(parsedRefreshToken)) {
      this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
      this.removeTokenKey(refreshTokenKey, CredentialType.REFRESH_TOKEN);
      return null;
    }
    this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit");
    return parsedRefreshToken;
  }
  /**
   * set refreshToken credential to the platform cache
   * @param refreshToken
   */
  setRefreshTokenCredential(refreshToken) {
    this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
    const refreshTokenKey = CacheHelpers_exports.generateCredentialKey(refreshToken);
    this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
    this.addTokenKey(refreshTokenKey, CredentialType.REFRESH_TOKEN);
  }
  /**
   * fetch appMetadata entity from the platform cache
   * @param appMetadataKey
   */
  getAppMetadata(appMetadataKey) {
    const value = this.getItem(appMetadataKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
      return null;
    }
    const parsedMetadata = this.validateAndParseJson(value);
    if (!parsedMetadata || !CacheHelpers_exports.isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
      this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit");
    return parsedMetadata;
  }
  /**
   * set appMetadata entity to the platform cache
   * @param appMetadata
   */
  setAppMetadata(appMetadata) {
    this.logger.trace("BrowserCacheManager.setAppMetadata called");
    const appMetadataKey = CacheHelpers_exports.generateAppMetadataKey(appMetadata);
    this.setItem(appMetadataKey, JSON.stringify(appMetadata));
  }
  /**
   * fetch server telemetry entity from the platform cache
   * @param serverTelemetryKey
   */
  getServerTelemetry(serverTelemetryKey) {
    const value = this.getItem(serverTelemetryKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
      return null;
    }
    const parsedEntity = this.validateAndParseJson(value);
    if (!parsedEntity || !CacheHelpers_exports.isServerTelemetryEntity(serverTelemetryKey, parsedEntity)) {
      this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit");
    return parsedEntity;
  }
  /**
   * set server telemetry entity to the platform cache
   * @param serverTelemetryKey
   * @param serverTelemetry
   */
  setServerTelemetry(serverTelemetryKey, serverTelemetry) {
    this.logger.trace("BrowserCacheManager.setServerTelemetry called");
    this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
  }
  /**
   *
   */
  getAuthorityMetadata(key) {
    const value = this.internalStorage.getItem(key);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit");
      return null;
    }
    const parsedMetadata = this.validateAndParseJson(value);
    if (parsedMetadata && CacheHelpers_exports.isAuthorityMetadataEntity(key, parsedMetadata)) {
      this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit");
      return parsedMetadata;
    }
    return null;
  }
  /**
   *
   */
  getAuthorityMetadataKeys() {
    const allKeys = this.internalStorage.getKeys();
    return allKeys.filter((key) => {
      return this.isAuthorityMetadata(key);
    });
  }
  /**
   * Sets wrapper metadata in memory
   * @param wrapperSKU
   * @param wrapperVersion
   */
  setWrapperMetadata(wrapperSKU, wrapperVersion) {
    this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_SKU, wrapperSKU);
    this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_VER, wrapperVersion);
  }
  /**
   * Returns wrapper metadata from in-memory storage
   */
  getWrapperMetadata() {
    const sku = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_SKU) || Constants.EMPTY_STRING;
    const version2 = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_VER) || Constants.EMPTY_STRING;
    return [sku, version2];
  }
  /**
   *
   * @param entity
   */
  setAuthorityMetadata(key, entity) {
    this.logger.trace("BrowserCacheManager.setAuthorityMetadata called");
    this.internalStorage.setItem(key, JSON.stringify(entity));
  }
  /**
   * Gets the active account
   */
  getActiveAccount() {
    const activeAccountKeyFilters = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
    const activeAccountValueFilters = this.getItem(activeAccountKeyFilters);
    if (!activeAccountValueFilters) {
      this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
      const activeAccountKeyLocal = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
      const activeAccountValueLocal = this.getItem(activeAccountKeyLocal);
      if (!activeAccountValueLocal) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
        return null;
      }
      const activeAccount = this.getAccountInfoFilteredBy({
        localAccountId: activeAccountValueLocal
      });
      if (activeAccount) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found");
        this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema");
        this.setActiveAccount(activeAccount);
        return activeAccount;
      }
      return null;
    }
    const activeAccountValueObj = this.validateAndParseJson(activeAccountValueFilters);
    if (activeAccountValueObj) {
      this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found");
      return this.getAccountInfoFilteredBy({
        homeAccountId: activeAccountValueObj.homeAccountId,
        localAccountId: activeAccountValueObj.localAccountId,
        tenantId: activeAccountValueObj.tenantId
      });
    }
    this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
    return null;
  }
  /**
   * Sets the active account's localAccountId in cache
   * @param account
   */
  setActiveAccount(account) {
    const activeAccountKey = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
    const activeAccountKeyLocal = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
    if (account) {
      this.logger.verbose("setActiveAccount: Active account set");
      const activeAccountValue = {
        homeAccountId: account.homeAccountId,
        localAccountId: account.localAccountId,
        tenantId: account.tenantId
      };
      this.browserStorage.setItem(activeAccountKey, JSON.stringify(activeAccountValue));
      this.browserStorage.setItem(activeAccountKeyLocal, account.localAccountId);
    } else {
      this.logger.verbose("setActiveAccount: No account passed, active account not set");
      this.browserStorage.removeItem(activeAccountKey);
      this.browserStorage.removeItem(activeAccountKeyLocal);
    }
  }
  /**
   * fetch throttling entity from the platform cache
   * @param throttlingCacheKey
   */
  getThrottlingCache(throttlingCacheKey) {
    const value = this.getItem(throttlingCacheKey);
    if (!value) {
      this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
      return null;
    }
    const parsedThrottlingCache = this.validateAndParseJson(value);
    if (!parsedThrottlingCache || !CacheHelpers_exports.isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
      this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit");
    return parsedThrottlingCache;
  }
  /**
   * set throttling entity to the platform cache
   * @param throttlingCacheKey
   * @param throttlingCache
   */
  setThrottlingCache(throttlingCacheKey, throttlingCache) {
    this.logger.trace("BrowserCacheManager.setThrottlingCache called");
    this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
  }
  /**
   * Gets cache item with given key.
   * Will retrieve from cookies if storeAuthStateInCookie is set to true.
   * @param key
   */
  getTemporaryCache(cacheKey, generateKey) {
    const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
    if (this.cacheConfig.storeAuthStateInCookie) {
      const itemCookie = this.getItemCookie(key);
      if (itemCookie) {
        this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
        return itemCookie;
      }
    }
    const value = this.temporaryCacheStorage.getItem(key);
    if (!value) {
      if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage) {
        const item = this.browserStorage.getItem(key);
        if (item) {
          this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage");
          return item;
        }
      }
      this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage");
      return null;
    }
    this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned");
    return value;
  }
  /**
   * Sets the cache item with the key and value given.
   * Stores in cookie if storeAuthStateInCookie is set to true.
   * This can cause cookie overflow if used incorrectly.
   * @param key
   * @param value
   */
  setTemporaryCache(cacheKey, value, generateKey) {
    const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
    this.temporaryCacheStorage.setItem(key, value);
    if (this.cacheConfig.storeAuthStateInCookie) {
      this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
      this.setItemCookie(key, value);
    }
  }
  /**
   * Removes the cache item with the given key.
   * @param key
   */
  removeItem(key) {
    this.browserStorage.removeItem(key);
  }
  /**
   * Removes the temporary cache item with the given key.
   * Will also clear the cookie item if storeAuthStateInCookie is set to true.
   * @param key
   */
  removeTemporaryItem(key) {
    this.temporaryCacheStorage.removeItem(key);
    if (this.cacheConfig.storeAuthStateInCookie) {
      this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
      this.clearItemCookie(key);
    }
  }
  /**
   * Gets all keys in window.
   */
  getKeys() {
    return this.browserStorage.getKeys();
  }
  /**
   * Clears all cache entries created by MSAL.
   */
  clear() {
    return __async(this, null, function* () {
      yield this.removeAllAccounts();
      this.removeAppMetadata();
      this.temporaryCacheStorage.getKeys().forEach((cacheKey) => {
        if (cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1) {
          this.removeTemporaryItem(cacheKey);
        }
      });
      this.browserStorage.getKeys().forEach((cacheKey) => {
        if (cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1) {
          this.browserStorage.removeItem(cacheKey);
        }
      });
      this.internalStorage.clear();
    });
  }
  /**
   * Clears all access tokes that have claims prior to saving the current one
   * @param performanceClient {IPerformanceClient}
   * @returns
   */
  clearTokensAndKeysWithClaims(performanceClient) {
    return __async(this, null, function* () {
      performanceClient.addQueueMeasurement(PerformanceEvents.ClearTokensAndKeysWithClaims);
      const tokenKeys = this.getTokenKeys();
      const removedAccessTokens = [];
      tokenKeys.accessToken.forEach((key) => {
        const credential = this.getAccessTokenCredential(key);
        if (credential?.requestedClaimsHash && key.includes(credential.requestedClaimsHash.toLowerCase())) {
          removedAccessTokens.push(this.removeAccessToken(key));
        }
      });
      yield Promise.all(removedAccessTokens);
      if (removedAccessTokens.length > 0) {
        this.logger.warning(`${removedAccessTokens.length} access tokens with claims in the cache keys have been removed from the cache.`);
      }
    });
  }
  /**
   * Add value to cookies
   * @param cookieName
   * @param cookieValue
   * @param expires
   * @deprecated
   */
  setItemCookie(cookieName, cookieValue, expires) {
    let cookieStr = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)};path=/;SameSite=Lax;`;
    if (expires) {
      const expireTime = this.getCookieExpirationTime(expires);
      cookieStr += `expires=${expireTime};`;
    }
    if (this.cacheConfig.secureCookies) {
      cookieStr += "Secure;";
    }
    document.cookie = cookieStr;
  }
  /**
   * Get one item by key from cookies
   * @param cookieName
   * @deprecated
   */
  getItemCookie(cookieName) {
    const name2 = `${encodeURIComponent(cookieName)}=`;
    const cookieList = document.cookie.split(";");
    for (let i = 0; i < cookieList.length; i++) {
      let cookie = cookieList[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name2) === 0) {
        return decodeURIComponent(cookie.substring(name2.length, cookie.length));
      }
    }
    return Constants.EMPTY_STRING;
  }
  /**
   * Clear all msal-related cookies currently set in the browser. Should only be used to clear temporary cache items.
   * @deprecated
   */
  clearMsalCookies() {
    const cookiePrefix = `${Constants.CACHE_PREFIX}.${this.clientId}`;
    const cookieList = document.cookie.split(";");
    cookieList.forEach((cookie) => {
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookiePrefix) === 0) {
        const cookieKey = cookie.split("=")[0];
        this.clearItemCookie(cookieKey);
      }
    });
  }
  /**
   * Clear an item in the cookies by key
   * @param cookieName
   * @deprecated
   */
  clearItemCookie(cookieName) {
    this.setItemCookie(cookieName, Constants.EMPTY_STRING, -1);
  }
  /**
   * Get cookie expiration time
   * @param cookieLifeDays
   * @deprecated
   */
  getCookieExpirationTime(cookieLifeDays) {
    const today = /* @__PURE__ */ new Date();
    const expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
    return expr.toUTCString();
  }
  /**
   * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
   * @param key
   * @param addInstanceId
   */
  generateCacheKey(key) {
    const generatedKey = this.validateAndParseJson(key);
    if (!generatedKey) {
      if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
        return key;
      }
      return `${Constants.CACHE_PREFIX}.${this.clientId}.${key}`;
    }
    return JSON.stringify(key);
  }
  /**
   * Create authorityKey to cache authority
   * @param state
   */
  generateAuthorityKey(stateString) {
    const { libraryState: { id: stateId } } = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString);
    return this.generateCacheKey(`${TemporaryCacheKeys.AUTHORITY}.${stateId}`);
  }
  /**
   * Create Nonce key to cache nonce
   * @param state
   */
  generateNonceKey(stateString) {
    const { libraryState: { id: stateId } } = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString);
    return this.generateCacheKey(`${TemporaryCacheKeys.NONCE_IDTOKEN}.${stateId}`);
  }
  /**
   * Creates full cache key for the request state
   * @param stateString State string for the request
   */
  generateStateKey(stateString) {
    const { libraryState: { id: stateId } } = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString);
    return this.generateCacheKey(`${TemporaryCacheKeys.REQUEST_STATE}.${stateId}`);
  }
  /**
   * Gets the cached authority based on the cached state. Returns empty if no cached state found.
   */
  getCachedAuthority(cachedState) {
    const stateCacheKey = this.generateStateKey(cachedState);
    const state = this.getTemporaryCache(stateCacheKey);
    if (!state) {
      return null;
    }
    const authorityCacheKey = this.generateAuthorityKey(state);
    return this.getTemporaryCache(authorityCacheKey);
  }
  /**
   * Updates account, authority, and state in cache
   * @param serverAuthenticationRequest
   * @param account
   */
  updateCacheEntries(state, nonce, authorityInstance, loginHint, account) {
    this.logger.trace("BrowserCacheManager.updateCacheEntries called");
    const stateCacheKey = this.generateStateKey(state);
    this.setTemporaryCache(stateCacheKey, state, false);
    const nonceCacheKey = this.generateNonceKey(state);
    this.setTemporaryCache(nonceCacheKey, nonce, false);
    const authorityCacheKey = this.generateAuthorityKey(state);
    this.setTemporaryCache(authorityCacheKey, authorityInstance, false);
    if (account) {
      const ccsCredential = {
        credential: account.homeAccountId,
        type: CcsCredentialType.HOME_ACCOUNT_ID
      };
      this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
    } else if (loginHint) {
      const ccsCredential = {
        credential: loginHint,
        type: CcsCredentialType.UPN
      };
      this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
    }
  }
  /**
   * Reset all temporary cache items
   * @param state
   */
  resetRequestCache(state) {
    this.logger.trace("BrowserCacheManager.resetRequestCache called");
    if (state) {
      this.temporaryCacheStorage.getKeys().forEach((key) => {
        if (key.indexOf(state) !== -1) {
          this.removeTemporaryItem(key);
        }
      });
      this.removeTemporaryItem(this.generateStateKey(state));
      this.removeTemporaryItem(this.generateNonceKey(state));
      this.removeTemporaryItem(this.generateAuthorityKey(state));
    }
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.CORRELATION_ID));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.CCS_CREDENTIAL));
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
    this.setInteractionInProgress(false);
  }
  /**
   * Removes temporary cache for the provided state
   * @param stateString
   */
  cleanRequestByState(stateString) {
    this.logger.trace("BrowserCacheManager.cleanRequestByState called");
    if (stateString) {
      const stateKey = this.generateStateKey(stateString);
      const cachedState = this.temporaryCacheStorage.getItem(stateKey);
      this.logger.infoPii(`BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: ${cachedState}`);
      this.resetRequestCache(cachedState || Constants.EMPTY_STRING);
    }
    this.clearMsalCookies();
  }
  /**
   * Looks in temporary cache for any state values with the provided interactionType and removes all temporary cache items for that state
   * Used in scenarios where temp cache needs to be cleaned but state is not known, such as clicking browser back button.
   * @param interactionType
   */
  cleanRequestByInteractionType(interactionType) {
    this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called");
    this.temporaryCacheStorage.getKeys().forEach((key) => {
      if (key.indexOf(TemporaryCacheKeys.REQUEST_STATE) === -1) {
        return;
      }
      const stateValue = this.temporaryCacheStorage.getItem(key);
      if (!stateValue) {
        return;
      }
      const parsedState = extractBrowserRequestState(this.cryptoImpl, stateValue);
      if (parsedState && parsedState.interactionType === interactionType) {
        this.logger.infoPii(`BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: ${stateValue}`);
        this.resetRequestCache(stateValue);
      }
    });
    this.clearMsalCookies();
    this.setInteractionInProgress(false);
  }
  cacheCodeRequest(authCodeRequest) {
    this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
    const encodedValue = base64Encode(JSON.stringify(authCodeRequest));
    this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
  }
  /**
   * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
   */
  getCachedRequest(state) {
    this.logger.trace("BrowserCacheManager.getCachedRequest called");
    const encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
    if (!encodedTokenRequest) {
      throw createBrowserAuthError(noTokenRequestCacheError);
    }
    let parsedRequest;
    try {
      parsedRequest = JSON.parse(base64Decode(encodedTokenRequest));
    } catch (e) {
      this.logger.errorPii(`Attempted to parse: ${encodedTokenRequest}`);
      this.logger.error(`Parsing cached token request threw with error: ${e}`);
      throw createBrowserAuthError(unableToParseTokenRequestCacheError);
    }
    this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
    if (!parsedRequest.authority) {
      const authorityCacheKey = this.generateAuthorityKey(state);
      const cachedAuthority = this.getTemporaryCache(authorityCacheKey);
      if (!cachedAuthority) {
        throw createBrowserAuthError(noCachedAuthorityError);
      }
      parsedRequest.authority = cachedAuthority;
    }
    return parsedRequest;
  }
  /**
   * Gets cached native request for redirect flows
   */
  getCachedNativeRequest() {
    this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
    const cachedRequest = this.getTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, true);
    if (!cachedRequest) {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found");
      return null;
    }
    const parsedRequest = this.validateAndParseJson(cachedRequest);
    if (!parsedRequest) {
      this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request");
      return null;
    }
    return parsedRequest;
  }
  isInteractionInProgress(matchClientId) {
    const clientId = this.getInteractionInProgress();
    if (matchClientId) {
      return clientId === this.clientId;
    } else {
      return !!clientId;
    }
  }
  getInteractionInProgress() {
    const key = `${Constants.CACHE_PREFIX}.${TemporaryCacheKeys.INTERACTION_STATUS_KEY}`;
    return this.getTemporaryCache(key, false);
  }
  setInteractionInProgress(inProgress) {
    const key = `${Constants.CACHE_PREFIX}.${TemporaryCacheKeys.INTERACTION_STATUS_KEY}`;
    if (inProgress) {
      if (this.getInteractionInProgress()) {
        throw createBrowserAuthError(interactionInProgress);
      } else {
        this.setTemporaryCache(key, this.clientId, false);
      }
    } else if (!inProgress && this.getInteractionInProgress() === this.clientId) {
      this.removeTemporaryItem(key);
    }
  }
  /**
   * Returns username retrieved from ADAL or MSAL v1 idToken
   * @deprecated
   */
  getLegacyLoginHint() {
    const adalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ADAL_ID_TOKEN);
    if (adalIdTokenString) {
      this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
      this.logger.verbose("Cached ADAL id token retrieved.");
    }
    const msalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ID_TOKEN, true);
    if (msalIdTokenString) {
      this.browserStorage.removeItem(this.generateCacheKey(PersistentCacheKeys.ID_TOKEN));
      this.logger.verbose("Cached MSAL.js v1 id token retrieved");
    }
    const cachedIdTokenString = msalIdTokenString || adalIdTokenString;
    if (cachedIdTokenString) {
      const idTokenClaims = AuthToken_exports.extractTokenClaims(cachedIdTokenString, base64Decode);
      if (idTokenClaims.preferred_username) {
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint");
        return idTokenClaims.preferred_username;
      } else if (idTokenClaims.upn) {
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint");
        return idTokenClaims.upn;
      } else {
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
      }
    }
    return null;
  }
  /**
   * Updates a credential's cache key if the current cache key is outdated
   */
  updateCredentialCacheKey(currentCacheKey, credential) {
    const updatedCacheKey = CacheHelpers_exports.generateCredentialKey(credential);
    if (currentCacheKey !== updatedCacheKey) {
      const cacheItem = this.getItem(currentCacheKey);
      if (cacheItem) {
        this.browserStorage.removeItem(currentCacheKey);
        this.setItem(updatedCacheKey, cacheItem);
        this.logger.verbose(`Updated an outdated ${credential.credentialType} cache key`);
        return updatedCacheKey;
      } else {
        this.logger.error(`Attempted to update an outdated ${credential.credentialType} cache key but no item matching the outdated key was found in storage`);
      }
    }
    return currentCacheKey;
  }
  /**
   * Builds credential entities from AuthenticationResult object and saves the resulting credentials to the cache
   * @param result
   * @param request
   */
  hydrateCache(result, request) {
    return __async(this, null, function* () {
      const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(result.account?.homeAccountId, result.account?.environment, result.idToken, this.clientId, result.tenantId);
      let claimsHash;
      if (request.claims) {
        claimsHash = yield this.cryptoImpl.hashString(request.claims);
      }
      const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(
        result.account?.homeAccountId,
        result.account.environment,
        result.accessToken,
        this.clientId,
        result.tenantId,
        result.scopes.join(" "),
        result.expiresOn?.getTime() || 0,
        result.extExpiresOn?.getTime() || 0,
        base64Decode,
        void 0,
        // refreshOn
        result.tokenType,
        void 0,
        // userAssertionHash
        request.sshKid,
        request.claims,
        claimsHash
      );
      const cacheRecord = new CacheRecord(void 0, idTokenEntity, accessTokenEntity);
      return this.saveCacheRecord(cacheRecord);
    });
  }
  /**
   * saves a cache record
   * @param cacheRecord {CacheRecord}
   * @param storeInCache {?StoreInCache}
   * @param correlationId {?string} correlation id
   */
  saveCacheRecord(cacheRecord, storeInCache, correlationId) {
    return __async(this, null, function* () {
      try {
        yield __superGet(_BrowserCacheManager.prototype, this, "saveCacheRecord").call(this, cacheRecord, storeInCache, correlationId);
      } catch (e) {
        if (e instanceof CacheError && this.performanceClient && correlationId) {
          try {
            const tokenKeys = this.getTokenKeys();
            this.performanceClient.addFields({
              cacheRtCount: tokenKeys.refreshToken.length,
              cacheIdCount: tokenKeys.idToken.length,
              cacheAtCount: tokenKeys.accessToken.length
            }, correlationId);
          } catch (e2) {
          }
        }
        throw e;
      }
    });
  }
};
var DEFAULT_BROWSER_CACHE_MANAGER = (clientId, logger) => {
  const cacheOptions = {
    cacheLocation: BrowserCacheLocation.MemoryStorage,
    temporaryCacheLocation: BrowserCacheLocation.MemoryStorage,
    storeAuthStateInCookie: false,
    secureCookies: false,
    cacheMigrationEnabled: false,
    claimsBasedCachingEnabled: false
  };
  return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger);
};

// node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs
var BrowserUtils_exports = {};
__export(BrowserUtils_exports, {
  blockAPICallsBeforeInitialize: () => blockAPICallsBeforeInitialize,
  blockAcquireTokenInPopups: () => blockAcquireTokenInPopups,
  blockNonBrowserEnvironment: () => blockNonBrowserEnvironment,
  blockRedirectInIframe: () => blockRedirectInIframe,
  blockReloadInHiddenIframes: () => blockReloadInHiddenIframes,
  clearHash: () => clearHash,
  createGuid: () => createGuid,
  getCurrentUri: () => getCurrentUri,
  getHomepage: () => getHomepage,
  invoke: () => invoke,
  invokeAsync: () => invokeAsync,
  isInIframe: () => isInIframe,
  isInPopup: () => isInPopup,
  preconnect: () => preconnect,
  preflightCheck: () => preflightCheck,
  redirectPreflightCheck: () => redirectPreflightCheck,
  replaceHash: () => replaceHash
});
function clearHash(contentWindow) {
  contentWindow.location.hash = "";
  if (typeof contentWindow.history.replaceState === "function") {
    contentWindow.history.replaceState(null, "", `${contentWindow.location.origin}${contentWindow.location.pathname}${contentWindow.location.search}`);
  }
}
function replaceHash(url) {
  const urlParts = url.split("#");
  urlParts.shift();
  window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
}
function isInIframe() {
  return window.parent !== window;
}
function isInPopup() {
  return typeof window !== "undefined" && !!window.opener && window.opener !== window && typeof window.name === "string" && window.name.indexOf(`${BrowserConstants.POPUP_NAME_PREFIX}.`) === 0;
}
function getCurrentUri() {
  return window.location.href.split("?")[0].split("#")[0];
}
function getHomepage() {
  const currentUrl = new UrlString(window.location.href);
  const urlComponents = currentUrl.getUrlComponents();
  return `${urlComponents.Protocol}//${urlComponents.HostNameAndPort}/`;
}
function blockReloadInHiddenIframes() {
  const isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
  if (isResponseHash && isInIframe()) {
    throw createBrowserAuthError(blockIframeReload);
  }
}
function blockRedirectInIframe(allowRedirectInIframe) {
  if (isInIframe() && !allowRedirectInIframe) {
    throw createBrowserAuthError(redirectInIframe);
  }
}
function blockAcquireTokenInPopups() {
  if (isInPopup()) {
    throw createBrowserAuthError(blockNestedPopups);
  }
}
function blockNonBrowserEnvironment() {
  if (typeof window === "undefined") {
    throw createBrowserAuthError(nonBrowserEnvironment);
  }
}
function blockAPICallsBeforeInitialize(initialized) {
  if (!initialized) {
    throw createBrowserAuthError(uninitializedPublicClientApplication);
  }
}
function preflightCheck(initialized) {
  blockNonBrowserEnvironment();
  blockReloadInHiddenIframes();
  blockAcquireTokenInPopups();
  blockAPICallsBeforeInitialize(initialized);
}
function redirectPreflightCheck(initialized, config) {
  preflightCheck(initialized);
  blockRedirectInIframe(config.system.allowRedirectInIframe);
  if (config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage && !config.cache.storeAuthStateInCookie) {
    throw createBrowserConfigurationAuthError(inMemRedirectUnavailable);
  }
}
function preconnect(authority) {
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = new URL(authority).origin;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  window.setTimeout(() => {
    try {
      document.head.removeChild(link);
    } catch {
    }
  }, 1e4);
}
function createGuid() {
  return createNewGuid();
}

// node_modules/@azure/msal-browser/dist/packageMetadata.mjs
var name = "@azure/msal-browser";
var version = "3.14.0";

// node_modules/@azure/msal-browser/dist/interaction_client/BaseInteractionClient.mjs
var BaseInteractionClient = class {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) {
    this.config = config;
    this.browserStorage = storageImpl;
    this.browserCrypto = browserCrypto;
    this.networkClient = this.config.system.networkClient;
    this.eventHandler = eventHandler;
    this.navigationClient = navigationClient;
    this.nativeMessageHandler = nativeMessageHandler;
    this.correlationId = correlationId || createNewGuid();
    this.logger = logger.clone(BrowserConstants.MSAL_SKU, version, this.correlationId);
    this.performanceClient = performanceClient;
  }
  clearCacheOnLogout(account) {
    return __async(this, null, function* () {
      if (account) {
        if (AccountEntity.accountInfoIsEqual(account, this.browserStorage.getActiveAccount(), false)) {
          this.logger.verbose("Setting active account to null");
          this.browserStorage.setActiveAccount(null);
        }
        try {
          yield this.browserStorage.removeAccount(AccountEntity.generateAccountCacheKey(account));
          this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.");
        } catch (error) {
          this.logger.error("Account provided in logout request was not found. Local cache unchanged.");
        }
      } else {
        try {
          this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId);
          yield this.browserStorage.clear();
          yield this.browserCrypto.clearKeystore();
        } catch (e) {
          this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.");
        }
      }
    });
  }
  /**
   *
   * Use to get the redirect uri configured in MSAL or null.
   * @param requestRedirectUri
   * @returns Redirect URL
   *
   */
  getRedirectUri(requestRedirectUri) {
    this.logger.verbose("getRedirectUri called");
    const redirectUri = requestRedirectUri || this.config.auth.redirectUri || getCurrentUri();
    return UrlString.getAbsoluteUrl(redirectUri, getCurrentUri());
  }
  /**
   *
   * @param apiId
   * @param correlationId
   * @param forceRefresh
   */
  initializeServerTelemetryManager(apiId, forceRefresh) {
    this.logger.verbose("initializeServerTelemetryManager called");
    const telemetryPayload = {
      clientId: this.config.auth.clientId,
      correlationId: this.correlationId,
      apiId,
      forceRefresh: forceRefresh || false,
      wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
      wrapperVer: this.browserStorage.getWrapperMetadata()[1]
    };
    return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
  }
  /**
   * Used to get a discovered version of the default authority.
   * @param requestAuthority
   * @param requestAzureCloudOptions
   * @param account
   */
  getDiscoveredAuthority(requestAuthority, requestAzureCloudOptions, account) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
      const authorityOptions = {
        protocolMode: this.config.auth.protocolMode,
        OIDCOptions: this.config.auth.OIDCOptions,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
      const userAuthority = requestAuthority ? requestAuthority : this.config.auth.authority;
      const builtAuthority = Authority.generateAuthority(userAuthority, requestAzureCloudOptions || this.config.auth.azureCloudOptions);
      const discoveredAuthority = yield invokeAsync(AuthorityFactory_exports.createDiscoveredInstance, PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance, this.logger, this.performanceClient, this.correlationId)(builtAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger, this.correlationId, this.performanceClient);
      if (account && !discoveredAuthority.isAlias(account.environment)) {
        throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.authorityMismatch);
      }
      return discoveredAuthority;
    });
  }
};

// node_modules/@azure/msal-browser/dist/crypto/PkceGenerator.mjs
var RANDOM_BYTE_ARR_LENGTH = 32;
function generatePkceCodes(performanceClient, logger, correlationId) {
  return __async(this, null, function* () {
    performanceClient.addQueueMeasurement(PerformanceEvents.GeneratePkceCodes, correlationId);
    const codeVerifier = invoke(generateCodeVerifier, PerformanceEvents.GenerateCodeVerifier, logger, performanceClient, correlationId)(performanceClient, logger, correlationId);
    const codeChallenge = yield invokeAsync(generateCodeChallengeFromVerifier, PerformanceEvents.GenerateCodeChallengeFromVerifier, logger, performanceClient, correlationId)(codeVerifier, performanceClient, logger, correlationId);
    return {
      verifier: codeVerifier,
      challenge: codeChallenge
    };
  });
}
function generateCodeVerifier(performanceClient, logger, correlationId) {
  try {
    const buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
    invoke(getRandomValues, PerformanceEvents.GetRandomValues, logger, performanceClient, correlationId)(buffer);
    const pkceCodeVerifierB64 = urlEncodeArr(buffer);
    return pkceCodeVerifierB64;
  } catch (e) {
    throw createBrowserAuthError(pkceNotCreated);
  }
}
function generateCodeChallengeFromVerifier(pkceCodeVerifier, performanceClient, logger, correlationId) {
  return __async(this, null, function* () {
    performanceClient.addQueueMeasurement(PerformanceEvents.GenerateCodeChallengeFromVerifier, correlationId);
    try {
      const pkceHashedCodeVerifier = yield invokeAsync(sha256Digest, PerformanceEvents.Sha256Digest, logger, performanceClient, correlationId)(pkceCodeVerifier, performanceClient, correlationId);
      return urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier));
    } catch (e) {
      throw createBrowserAuthError(pkceNotCreated);
    }
  });
}

// node_modules/@azure/msal-browser/dist/request/RequestHelpers.mjs
function initializeBaseRequest(request, config, performanceClient, logger) {
  return __async(this, null, function* () {
    performanceClient.addQueueMeasurement(PerformanceEvents.InitializeBaseRequest, request.correlationId);
    const authority = request.authority || config.auth.authority;
    const scopes = [...request && request.scopes || []];
    const validatedRequest = __spreadProps(__spreadValues({}, request), {
      correlationId: request.correlationId,
      authority,
      scopes
    });
    if (!validatedRequest.authenticationScheme) {
      validatedRequest.authenticationScheme = AuthenticationScheme.BEARER;
      logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
    } else {
      if (validatedRequest.authenticationScheme === AuthenticationScheme.SSH) {
        if (!request.sshJwk) {
          throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.missingSshJwk);
        }
        if (!request.sshKid) {
          throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.missingSshKid);
        }
      }
      logger.verbose(`Authentication Scheme set to "${validatedRequest.authenticationScheme}" as configured in Auth request`);
    }
    if (config.cache.claimsBasedCachingEnabled && request.claims && // Checks for empty stringified object "{}" which doesn't qualify as requested claims
    !StringUtils.isEmptyObj(request.claims)) {
      validatedRequest.requestedClaimsHash = yield hashString(request.claims);
    }
    return validatedRequest;
  });
}
function initializeSilentRequest(request, account, config, performanceClient, logger) {
  return __async(this, null, function* () {
    performanceClient.addQueueMeasurement(PerformanceEvents.InitializeSilentRequest, request.correlationId);
    const baseRequest = yield invokeAsync(initializeBaseRequest, PerformanceEvents.InitializeBaseRequest, logger, performanceClient, request.correlationId)(request, config, performanceClient, logger);
    return __spreadProps(__spreadValues(__spreadValues({}, request), baseRequest), {
      account,
      forceRefresh: request.forceRefresh || false
    });
  });
}

// node_modules/@azure/msal-browser/dist/interaction_client/StandardInteractionClient.mjs
var StandardInteractionClient = class extends BaseInteractionClient {
  /**
   * Generates an auth code request tied to the url request.
   * @param request
   */
  initializeAuthorizationCodeRequest(request) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, this.correlationId);
      const generatedPkceParams = yield invokeAsync(generatePkceCodes, PerformanceEvents.GeneratePkceCodes, this.logger, this.performanceClient, this.correlationId)(this.performanceClient, this.logger, this.correlationId);
      const authCodeRequest = __spreadProps(__spreadValues({}, request), {
        redirectUri: request.redirectUri,
        code: Constants.EMPTY_STRING,
        codeVerifier: generatedPkceParams.verifier
      });
      request.codeChallenge = generatedPkceParams.challenge;
      request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
      return authCodeRequest;
    });
  }
  /**
   * Initializer for the logout request.
   * @param logoutRequest
   */
  initializeLogoutRequest(logoutRequest) {
    this.logger.verbose("initializeLogoutRequest called", logoutRequest?.correlationId);
    const validLogoutRequest = __spreadValues({
      correlationId: this.correlationId || createNewGuid()
    }, logoutRequest);
    if (logoutRequest) {
      if (!logoutRequest.logoutHint) {
        if (logoutRequest.account) {
          const logoutHint = this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
          if (logoutHint) {
            this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided");
            validLogoutRequest.logoutHint = logoutHint;
          }
        } else {
          this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
        }
      } else {
        this.logger.verbose("logoutHint has already been set in logoutRequest");
      }
    } else {
      this.logger.verbose("logoutHint will not be set since no logout request was configured");
    }
    if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
      if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
        this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, getCurrentUri());
      } else if (this.config.auth.postLogoutRedirectUri === null) {
        this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", validLogoutRequest.correlationId);
      } else if (this.config.auth.postLogoutRedirectUri) {
        this.logger.verbose("Setting postLogoutRedirectUri to configured uri", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, getCurrentUri());
      } else {
        this.logger.verbose("Setting postLogoutRedirectUri to current page", validLogoutRequest.correlationId);
        validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(getCurrentUri(), getCurrentUri());
      }
    } else {
      this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", validLogoutRequest.correlationId);
    }
    return validLogoutRequest;
  }
  /**
   * Parses login_hint ID Token Claim out of AccountInfo object to be used as
   * logout_hint in end session request.
   * @param account
   */
  getLogoutHintFromIdTokenClaims(account) {
    const idTokenClaims = account.idTokenClaims;
    if (idTokenClaims) {
      if (idTokenClaims.login_hint) {
        return idTokenClaims.login_hint;
      } else {
        this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
      }
    } else {
      this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
    }
    return null;
  }
  /**
   * Creates an Authorization Code Client with the given authority, or the default authority.
   * @param serverTelemetryManager
   * @param authorityUrl
   */
  createAuthCodeClient(serverTelemetryManager, authorityUrl, requestAzureCloudOptions, account) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.correlationId);
      const clientConfig = yield invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, authorityUrl, requestAzureCloudOptions, account);
      return new AuthorizationCodeClient(clientConfig, this.performanceClient);
    });
  }
  /**
   * Creates a Client Configuration object with the given request authority, or the default authority.
   * @param serverTelemetryManager
   * @param requestAuthority
   * @param requestCorrelationId
   */
  getClientConfiguration(serverTelemetryManager, requestAuthority, requestAzureCloudOptions, account) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.correlationId);
      const discoveredAuthority = yield invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, this.correlationId)(requestAuthority, requestAzureCloudOptions, account);
      const logger = this.config.system.loggerOptions;
      return {
        authOptions: {
          clientId: this.config.auth.clientId,
          authority: discoveredAuthority,
          clientCapabilities: this.config.auth.clientCapabilities
        },
        systemOptions: {
          tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
          preventCorsPreflight: true
        },
        loggerOptions: {
          loggerCallback: logger.loggerCallback,
          piiLoggingEnabled: logger.piiLoggingEnabled,
          logLevel: logger.logLevel,
          correlationId: this.correlationId
        },
        cacheOptions: {
          claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
        },
        cryptoInterface: this.browserCrypto,
        networkInterface: this.networkClient,
        storageInterface: this.browserStorage,
        serverTelemetryManager,
        libraryInfo: {
          sku: BrowserConstants.MSAL_SKU,
          version,
          cpu: Constants.EMPTY_STRING,
          os: Constants.EMPTY_STRING
        },
        telemetry: this.config.telemetry
      };
    });
  }
  /**
   * Helper to initialize required request parameters for interactive APIs and ssoSilent()
   * @param request
   * @param interactionType
   */
  initializeAuthorizationRequest(request, interactionType) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId);
      const redirectUri = this.getRedirectUri(request.redirectUri);
      const browserState = {
        interactionType
      };
      const state = ProtocolUtils.setRequestState(this.browserCrypto, request && request.state || Constants.EMPTY_STRING, browserState);
      const baseRequest = yield invokeAsync(initializeBaseRequest, PerformanceEvents.InitializeBaseRequest, this.logger, this.performanceClient, this.correlationId)(__spreadProps(__spreadValues({}, request), { correlationId: this.correlationId }), this.config, this.performanceClient, this.logger);
      const validatedRequest = __spreadProps(__spreadValues({}, baseRequest), {
        redirectUri,
        state,
        nonce: request.nonce || createNewGuid(),
        responseMode: this.config.auth.OIDCOptions.serverResponseType
      });
      const account = request.account || this.browserStorage.getActiveAccount();
      if (account) {
        this.logger.verbose("Setting validated request account", this.correlationId);
        this.logger.verbosePii(`Setting validated request account: ${account.homeAccountId}`, this.correlationId);
        validatedRequest.account = account;
      }
      if (!validatedRequest.loginHint && !account) {
        const legacyLoginHint = this.browserStorage.getLegacyLoginHint();
        if (legacyLoginHint) {
          validatedRequest.loginHint = legacyLoginHint;
        }
      }
      return validatedRequest;
    });
  }
};

// node_modules/@azure/msal-browser/dist/error/NativeAuthErrorCodes.mjs
var contentError = "ContentError";
var userSwitch = "user_switch";

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/NativeStatusCodes.mjs
var USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED";
var USER_CANCEL = "USER_CANCEL";
var NO_NETWORK = "NO_NETWORK";
var PERSISTENT_ERROR = "PERSISTENT_ERROR";
var DISABLED = "DISABLED";
var ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";

// node_modules/@azure/msal-browser/dist/error/NativeAuthError.mjs
var INVALID_METHOD_ERROR = -2147186943;
var NativeAuthErrorMessages = {
  [userSwitch]: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
};
var NativeAuthError = class _NativeAuthError extends AuthError {
  constructor(errorCode, description, ext) {
    super(errorCode, description);
    Object.setPrototypeOf(this, _NativeAuthError.prototype);
    this.name = "NativeAuthError";
    this.ext = ext;
  }
};
function isFatalNativeAuthError(error) {
  if (error.ext && error.ext.status && (error.ext.status === PERSISTENT_ERROR || error.ext.status === DISABLED)) {
    return true;
  }
  if (error.ext && error.ext.error && error.ext.error === INVALID_METHOD_ERROR) {
    return true;
  }
  switch (error.errorCode) {
    case contentError:
      return true;
    default:
      return false;
  }
}
function createNativeAuthError(code, description, ext) {
  if (ext && ext.status) {
    switch (ext.status) {
      case ACCOUNT_UNAVAILABLE:
        return createInteractionRequiredAuthError(InteractionRequiredAuthErrorCodes_exports.nativeAccountUnavailable);
      case USER_INTERACTION_REQUIRED:
        return new InteractionRequiredAuthError(code, description);
      case USER_CANCEL:
        return createBrowserAuthError(userCancelled);
      case NO_NETWORK:
        return createBrowserAuthError(noNetworkConnectivity);
    }
  }
  return new NativeAuthError(code, NativeAuthErrorMessages[code] || description, ext);
}

// node_modules/@azure/msal-browser/dist/interaction_client/SilentCacheClient.mjs
var SilentCacheClient = class extends StandardInteractionClient {
  /**
   * Returns unexpired tokens from the cache, if available
   * @param silentRequest
   */
  acquireToken(silentRequest) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentCacheClientAcquireToken, silentRequest.correlationId);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
      const clientConfig = yield invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
      const silentAuthClient = new SilentFlowClient(clientConfig, this.performanceClient);
      this.logger.verbose("Silent auth client created");
      try {
        const response = yield invokeAsync(silentAuthClient.acquireCachedToken.bind(silentAuthClient), PerformanceEvents.SilentFlowClientAcquireCachedToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
        const authResponse = response[0];
        this.performanceClient.addFields({
          fromCache: true
        }, silentRequest.correlationId);
        return authResponse;
      } catch (error) {
        if (error instanceof BrowserAuthError && error.errorCode === cryptoKeyNotFound) {
          this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.");
        }
        throw error;
      }
    });
  }
  /**
   * API to silenty clear the browser cache.
   * @param logoutRequest
   */
  logout(logoutRequest) {
    this.logger.verbose("logoutRedirect called");
    const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
    return this.clearCacheOnLogout(validLogoutRequest?.account);
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/NativeInteractionClient.mjs
var BrokerServerParamKeys = {
  BROKER_CLIENT_ID: "brk_client_id",
  BROKER_REDIRECT_URI: "brk_redirect_uri"
};
var NativeInteractionClient = class extends BaseInteractionClient {
  constructor(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, nativeStorageImpl, correlationId) {
    super(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
    this.apiId = apiId;
    this.accountId = accountId;
    this.nativeMessageHandler = provider;
    this.nativeStorageManager = nativeStorageImpl;
    this.silentCacheClient = new SilentCacheClient(config, this.nativeStorageManager, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
  }
  /**
   * Acquire token from native platform via browser extension
   * @param request
   */
  acquireToken(request) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, request.correlationId);
      this.logger.trace("NativeInteractionClient - acquireToken called.");
      const nativeATMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, request.correlationId);
      const reqTimestamp = TimeUtils_exports.nowSeconds();
      const nativeRequest = yield this.initializeNativeRequest(request);
      try {
        const result = yield this.acquireTokensFromCache(this.accountId, nativeRequest);
        nativeATMeasurement.end({
          success: true,
          isNativeBroker: false,
          fromCache: true
        });
        return result;
      } catch (e) {
        this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call");
      }
      const messageBody = {
        method: NativeExtensionMethod.GetToken,
        request: nativeRequest
      };
      const response = yield this.nativeMessageHandler.sendMessage(messageBody);
      const validatedResponse = this.validateNativeResponse(response);
      return this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp).then((result) => {
        nativeATMeasurement.end({
          success: true,
          isNativeBroker: true,
          requestId: result.requestId
        });
        return result;
      }).catch((error) => {
        nativeATMeasurement.end({
          success: false,
          errorCode: error.errorCode,
          subErrorCode: error.subError,
          isNativeBroker: true
        });
        throw error;
      });
    });
  }
  /**
   * Creates silent flow request
   * @param request
   * @param cachedAccount
   * @returns CommonSilentFlowRequest
   */
  createSilentCacheRequest(request, cachedAccount) {
    return {
      authority: request.authority,
      correlationId: this.correlationId,
      scopes: ScopeSet.fromString(request.scope).asArray(),
      account: cachedAccount,
      forceRefresh: false
    };
  }
  /**
   * Fetches the tokens from the cache if un-expired
   * @param nativeAccountId
   * @param request
   * @returns authenticationResult
   */
  acquireTokensFromCache(nativeAccountId, request) {
    return __async(this, null, function* () {
      if (!nativeAccountId) {
        this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided");
        throw createClientAuthError(ClientAuthErrorCodes_exports.noAccountFound);
      }
      const account = this.browserStorage.getBaseAccountInfo({
        nativeAccountId
      });
      if (!account) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.noAccountFound);
      }
      try {
        const silentRequest = this.createSilentCacheRequest(request, account);
        const result = yield this.silentCacheClient.acquireToken(silentRequest);
        const fullAccount = __spreadProps(__spreadValues({}, account), {
          idTokenClaims: result?.idTokenClaims,
          idToken: result?.idToken
        });
        return __spreadProps(__spreadValues({}, result), {
          account: fullAccount
        });
      } catch (e) {
        throw e;
      }
    });
  }
  /**
   * Acquires a token from native platform then redirects to the redirectUri instead of returning the response
   * @param request
   */
  acquireTokenRedirect(request) {
    return __async(this, null, function* () {
      this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
      const nativeRequest = yield this.initializeNativeRequest(request);
      const messageBody = {
        method: NativeExtensionMethod.GetToken,
        request: nativeRequest
      };
      try {
        const response = yield this.nativeMessageHandler.sendMessage(messageBody);
        this.validateNativeResponse(response);
      } catch (e) {
        if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
          throw e;
        }
      }
      this.browserStorage.setTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, JSON.stringify(nativeRequest), true);
      const navigationOptions = {
        apiId: ApiId.acquireTokenRedirect,
        timeout: this.config.system.redirectNavigationTimeout,
        noHistory: false
      };
      const redirectUri = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(request.redirectUri);
      yield this.navigationClient.navigateExternal(redirectUri, navigationOptions);
    });
  }
  /**
   * If the previous page called native platform for a token using redirect APIs, send the same request again and return the response
   * @param performanceClient {IPerformanceClient?}
   * @param correlationId {string?} correlation identifier
   */
  handleRedirectPromise(performanceClient, correlationId) {
    return __async(this, null, function* () {
      this.logger.trace("NativeInteractionClient - handleRedirectPromise called.");
      if (!this.browserStorage.isInteractionInProgress(true)) {
        this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
        return null;
      }
      const cachedRequest = this.browserStorage.getCachedNativeRequest();
      if (!cachedRequest) {
        this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.");
        if (performanceClient && correlationId) {
          performanceClient?.addFields({ errorCode: "no_cached_request" }, correlationId);
        }
        return null;
      }
      const _a = cachedRequest, { prompt } = _a, request = __objRest(_a, ["prompt"]);
      if (prompt) {
        this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window.");
      }
      this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
      const messageBody = {
        method: NativeExtensionMethod.GetToken,
        request
      };
      const reqTimestamp = TimeUtils_exports.nowSeconds();
      try {
        this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
        const response = yield this.nativeMessageHandler.sendMessage(messageBody);
        this.validateNativeResponse(response);
        const result = this.handleNativeResponse(response, request, reqTimestamp);
        this.browserStorage.setInteractionInProgress(false);
        return yield result;
      } catch (e) {
        this.browserStorage.setInteractionInProgress(false);
        throw e;
      }
    });
  }
  /**
   * Logout from native platform via browser extension
   * @param request
   */
  logout() {
    this.logger.trace("NativeInteractionClient - logout called.");
    return Promise.reject("Logout not implemented yet");
  }
  /**
   * Transform response from native platform into AuthenticationResult object which will be returned to the end user
   * @param response
   * @param request
   * @param reqTimestamp
   */
  handleNativeResponse(response, request, reqTimestamp) {
    return __async(this, null, function* () {
      this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
      const idTokenClaims = AuthToken_exports.extractTokenClaims(response.id_token, base64Decode);
      const homeAccountIdentifier = this.createHomeAccountIdentifier(response, idTokenClaims);
      const cachedhomeAccountId = this.browserStorage.getAccountInfoFilteredBy({
        nativeAccountId: request.accountId
      })?.homeAccountId;
      if (homeAccountIdentifier !== cachedhomeAccountId && response.account.id !== request.accountId) {
        throw createNativeAuthError(userSwitch);
      }
      const authority = yield this.getDiscoveredAuthority(request.authority);
      const baseAccount = buildAccountToCache(
        this.browserStorage,
        authority,
        homeAccountIdentifier,
        idTokenClaims,
        base64Decode,
        response.client_info,
        void 0,
        // environment
        idTokenClaims.tid,
        void 0,
        // auth code payload
        response.account.id,
        this.logger
      );
      const result = yield this.generateAuthenticationResult(response, request, idTokenClaims, baseAccount, authority.canonicalAuthority, reqTimestamp);
      this.cacheAccount(baseAccount);
      this.cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, result.accessToken, result.tenantId, reqTimestamp);
      return result;
    });
  }
  /**
   * creates an homeAccountIdentifier for the account
   * @param response
   * @param idTokenObj
   * @returns
   */
  createHomeAccountIdentifier(response, idTokenClaims) {
    const homeAccountIdentifier = AccountEntity.generateHomeAccountId(response.client_info || Constants.EMPTY_STRING, AuthorityType.Default, this.logger, this.browserCrypto, idTokenClaims);
    return homeAccountIdentifier;
  }
  /**
   * Helper to generate scopes
   * @param response
   * @param request
   * @returns
   */
  generateScopes(response, request) {
    return response.scope ? ScopeSet.fromString(response.scope) : ScopeSet.fromString(request.scope);
  }
  /**
   * If PoP token is requesred, records the PoP token if returned from the WAM, else generates one in the browser
   * @param request
   * @param response
   */
  generatePopAccessToken(response, request) {
    return __async(this, null, function* () {
      if (request.tokenType === AuthenticationScheme.POP) {
        if (response.shr) {
          this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer");
          return response.shr;
        }
        const popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
        const shrParameters = {
          resourceRequestMethod: request.resourceRequestMethod,
          resourceRequestUri: request.resourceRequestUri,
          shrClaims: request.shrClaims,
          shrNonce: request.shrNonce
        };
        if (!request.keyId) {
          throw createClientAuthError(ClientAuthErrorCodes_exports.keyIdMissing);
        }
        return popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters);
      } else {
        return response.access_token;
      }
    });
  }
  /**
   * Generates authentication result
   * @param response
   * @param request
   * @param idTokenObj
   * @param accountEntity
   * @param authority
   * @param reqTimestamp
   * @returns
   */
  generateAuthenticationResult(response, request, idTokenClaims, accountEntity, authority, reqTimestamp) {
    return __async(this, null, function* () {
      const mats = this.addTelemetryFromNativeResponse(response);
      const responseScopes = response.scope ? ScopeSet.fromString(response.scope) : ScopeSet.fromString(request.scope);
      const accountProperties = response.account.properties || {};
      const uid = accountProperties["UID"] || idTokenClaims.oid || idTokenClaims.sub || Constants.EMPTY_STRING;
      const tid = accountProperties["TenantId"] || idTokenClaims.tid || Constants.EMPTY_STRING;
      const accountInfo = updateAccountTenantProfileData(
        accountEntity.getAccountInfo(),
        void 0,
        // tenantProfile optional
        idTokenClaims,
        response.id_token
      );
      if (accountInfo.nativeAccountId !== response.account.id) {
        accountInfo.nativeAccountId = response.account.id;
      }
      const responseAccessToken = yield this.generatePopAccessToken(response, request);
      const tokenType = request.tokenType === AuthenticationScheme.POP ? AuthenticationScheme.POP : AuthenticationScheme.BEARER;
      const result = {
        authority,
        uniqueId: uid,
        tenantId: tid,
        scopes: responseScopes.asArray(),
        account: accountInfo,
        idToken: response.id_token,
        idTokenClaims,
        accessToken: responseAccessToken,
        fromCache: mats ? this.isResponseFromCache(mats) : false,
        expiresOn: new Date(Number(reqTimestamp + response.expires_in) * 1e3),
        tokenType,
        correlationId: this.correlationId,
        state: response.state,
        fromNativeBroker: true
      };
      return result;
    });
  }
  /**
   * cache the account entity in browser storage
   * @param accountEntity
   */
  cacheAccount(accountEntity) {
    this.browserStorage.setAccount(accountEntity);
    this.browserStorage.removeAccountContext(accountEntity).catch((e) => {
      this.logger.error(`Error occurred while removing account context from browser storage. ${e}`);
    });
  }
  /**
   * Stores the access_token and id_token in inmemory storage
   * @param response
   * @param request
   * @param homeAccountIdentifier
   * @param idTokenObj
   * @param responseAccessToken
   * @param tenantId
   * @param reqTimestamp
   */
  cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, responseAccessToken, tenantId, reqTimestamp) {
    const cachedIdToken = CacheHelpers_exports.createIdTokenEntity(homeAccountIdentifier, request.authority, response.id_token || "", request.clientId, idTokenClaims.tid || "");
    const expiresIn = request.tokenType === AuthenticationScheme.POP ? Constants.SHR_NONCE_VALIDITY : (typeof response.expires_in === "string" ? parseInt(response.expires_in, 10) : response.expires_in) || 0;
    const tokenExpirationSeconds = reqTimestamp + expiresIn;
    const responseScopes = this.generateScopes(response, request);
    const cachedAccessToken = CacheHelpers_exports.createAccessTokenEntity(homeAccountIdentifier, request.authority, responseAccessToken, request.clientId, idTokenClaims.tid || tenantId, responseScopes.printScopes(), tokenExpirationSeconds, 0, base64Decode);
    const nativeCacheRecord = new CacheRecord(void 0, cachedIdToken, cachedAccessToken);
    void this.nativeStorageManager.saveCacheRecord(nativeCacheRecord, request.storeInCache);
  }
  addTelemetryFromNativeResponse(response) {
    const mats = this.getMATSFromResponse(response);
    if (!mats) {
      return null;
    }
    this.performanceClient.addFields({
      extensionId: this.nativeMessageHandler.getExtensionId(),
      extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
      matsBrokerVersion: mats.broker_version,
      matsAccountJoinOnStart: mats.account_join_on_start,
      matsAccountJoinOnEnd: mats.account_join_on_end,
      matsDeviceJoin: mats.device_join,
      matsPromptBehavior: mats.prompt_behavior,
      matsApiErrorCode: mats.api_error_code,
      matsUiVisible: mats.ui_visible,
      matsSilentCode: mats.silent_code,
      matsSilentBiSubCode: mats.silent_bi_sub_code,
      matsSilentMessage: mats.silent_message,
      matsSilentStatus: mats.silent_status,
      matsHttpStatus: mats.http_status,
      matsHttpEventCount: mats.http_event_count
    }, this.correlationId);
    return mats;
  }
  /**
   * Validates native platform response before processing
   * @param response
   */
  validateNativeResponse(response) {
    if (response.hasOwnProperty("access_token") && response.hasOwnProperty("id_token") && response.hasOwnProperty("client_info") && response.hasOwnProperty("account") && response.hasOwnProperty("scope") && response.hasOwnProperty("expires_in")) {
      return response;
    } else {
      throw createAuthError(AuthErrorCodes_exports.unexpectedError, "Response missing expected properties.");
    }
  }
  /**
   * Gets MATS telemetry from native response
   * @param response
   * @returns
   */
  getMATSFromResponse(response) {
    if (response.properties.MATS) {
      try {
        return JSON.parse(response.properties.MATS);
      } catch (e) {
        this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
      }
    }
    return null;
  }
  /**
   * Returns whether or not response came from native cache
   * @param response
   * @returns
   */
  isResponseFromCache(mats) {
    if (typeof mats.is_cached === "undefined") {
      this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.");
      return false;
    }
    return !!mats.is_cached;
  }
  /**
   * Translates developer provided request object into NativeRequest object
   * @param request
   */
  initializeNativeRequest(request) {
    return __async(this, null, function* () {
      this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
      const authority = request.authority || this.config.auth.authority;
      if (request.account) {
        yield this.getDiscoveredAuthority(authority, request.azureCloudOptions, request.account);
      }
      const canonicalAuthority = new UrlString(authority);
      canonicalAuthority.validateAsUri();
      const _a = request, { scopes } = _a, remainingProperties = __objRest(_a, ["scopes"]);
      const scopeSet = new ScopeSet(scopes || []);
      scopeSet.appendScopes(OIDC_DEFAULT_SCOPES);
      const getPrompt = () => {
        switch (this.apiId) {
          case ApiId.ssoSilent:
          case ApiId.acquireTokenSilent_silentFlow:
            this.logger.trace("initializeNativeRequest: silent request sets prompt to none");
            return PromptValue.NONE;
        }
        if (!request.prompt) {
          this.logger.trace("initializeNativeRequest: prompt was not provided");
          return void 0;
        }
        switch (request.prompt) {
          case PromptValue.NONE:
          case PromptValue.CONSENT:
          case PromptValue.LOGIN:
            this.logger.trace("initializeNativeRequest: prompt is compatible with native flow");
            return request.prompt;
          default:
            this.logger.trace(`initializeNativeRequest: prompt = ${request.prompt} is not compatible with native flow`);
            throw createBrowserAuthError(nativePromptNotSupported);
        }
      };
      const validatedRequest = __spreadProps(__spreadValues({}, remainingProperties), {
        accountId: this.accountId,
        clientId: this.config.auth.clientId,
        authority: canonicalAuthority.urlString,
        scope: scopeSet.printScopes(),
        redirectUri: this.getRedirectUri(request.redirectUri),
        prompt: getPrompt(),
        correlationId: this.correlationId,
        tokenType: request.authenticationScheme,
        windowTitleSubstring: document.title,
        extraParameters: __spreadValues(__spreadValues({}, request.extraQueryParameters), request.tokenQueryParameters),
        extendedExpiryToken: false
        // Make this configurable?
      });
      this.handleExtraBrokerParams(validatedRequest);
      validatedRequest.extraParameters = validatedRequest.extraParameters || {};
      validatedRequest.extraParameters.telemetry = NativeConstants.MATS_TELEMETRY;
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const shrParameters = {
          resourceRequestUri: request.resourceRequestUri,
          resourceRequestMethod: request.resourceRequestMethod,
          shrClaims: request.shrClaims,
          shrNonce: request.shrNonce
        };
        const popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
        const reqCnfData = yield invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, this.correlationId)(shrParameters, this.logger);
        validatedRequest.reqCnf = reqCnfData.reqCnfHash;
        validatedRequest.keyId = reqCnfData.kid;
      }
      return validatedRequest;
    });
  }
  /**
   * Handles extra broker request parameters
   * @param request {NativeTokenRequest}
   * @private
   */
  handleExtraBrokerParams(request) {
    if (!request.extraParameters) {
      return;
    }
    if (request.extraParameters.hasOwnProperty(BrokerServerParamKeys.BROKER_CLIENT_ID) && request.extraParameters.hasOwnProperty(BrokerServerParamKeys.BROKER_REDIRECT_URI) && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.CLIENT_ID)) {
      const child_client_id = request.extraParameters[AADServerParamKeys_exports.CLIENT_ID];
      const child_redirect_uri = request.redirectUri;
      const brk_redirect_uri = request.extraParameters[BrokerServerParamKeys.BROKER_REDIRECT_URI];
      request.extraParameters = {
        child_client_id,
        child_redirect_uri
      };
      request.redirectUri = brk_redirect_uri;
    }
  }
};

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/NativeMessageHandler.mjs
var NativeMessageHandler = class _NativeMessageHandler {
  constructor(logger, handshakeTimeoutMs, performanceClient, extensionId) {
    this.logger = logger;
    this.handshakeTimeoutMs = handshakeTimeoutMs;
    this.extensionId = extensionId;
    this.resolvers = /* @__PURE__ */ new Map();
    this.handshakeResolvers = /* @__PURE__ */ new Map();
    this.messageChannel = new MessageChannel();
    this.windowListener = this.onWindowMessage.bind(this);
    this.performanceClient = performanceClient;
    this.handshakeEvent = performanceClient.startMeasurement(PerformanceEvents.NativeMessageHandlerHandshake);
  }
  /**
   * Sends a given message to the extension and resolves with the extension response
   * @param body
   */
  sendMessage(body) {
    return __async(this, null, function* () {
      this.logger.trace("NativeMessageHandler - sendMessage called.");
      const req = {
        channel: NativeConstants.CHANNEL_ID,
        extensionId: this.extensionId,
        responseId: createNewGuid(),
        body
      };
      this.logger.trace("NativeMessageHandler - Sending request to browser extension");
      this.logger.tracePii(`NativeMessageHandler - Sending request to browser extension: ${JSON.stringify(req)}`);
      this.messageChannel.port1.postMessage(req);
      return new Promise((resolve, reject) => {
        this.resolvers.set(req.responseId, { resolve, reject });
      });
    });
  }
  /**
   * Returns an instance of the MessageHandler that has successfully established a connection with an extension
   * @param {Logger} logger
   * @param {number} handshakeTimeoutMs
   * @param {IPerformanceClient} performanceClient
   * @param {ICrypto} crypto
   */
  static createProvider(logger, handshakeTimeoutMs, performanceClient) {
    return __async(this, null, function* () {
      logger.trace("NativeMessageHandler - createProvider called.");
      try {
        const preferredProvider = new _NativeMessageHandler(logger, handshakeTimeoutMs, performanceClient, NativeConstants.PREFERRED_EXTENSION_ID);
        yield preferredProvider.sendHandshakeRequest();
        return preferredProvider;
      } catch (e) {
        const backupProvider = new _NativeMessageHandler(logger, handshakeTimeoutMs, performanceClient);
        yield backupProvider.sendHandshakeRequest();
        return backupProvider;
      }
    });
  }
  /**
   * Send handshake request helper.
   */
  sendHandshakeRequest() {
    return __async(this, null, function* () {
      this.logger.trace("NativeMessageHandler - sendHandshakeRequest called.");
      window.addEventListener("message", this.windowListener, false);
      const req = {
        channel: NativeConstants.CHANNEL_ID,
        extensionId: this.extensionId,
        responseId: createNewGuid(),
        body: {
          method: NativeExtensionMethod.HandshakeRequest
        }
      };
      this.handshakeEvent.add({
        extensionId: this.extensionId,
        extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
      });
      this.messageChannel.port1.onmessage = (event) => {
        this.onChannelMessage(event);
      };
      window.postMessage(req, window.origin, [this.messageChannel.port2]);
      return new Promise((resolve, reject) => {
        this.handshakeResolvers.set(req.responseId, { resolve, reject });
        this.timeoutId = window.setTimeout(() => {
          window.removeEventListener("message", this.windowListener, false);
          this.messageChannel.port1.close();
          this.messageChannel.port2.close();
          this.handshakeEvent.end({
            extensionHandshakeTimedOut: true,
            success: false
          });
          reject(createBrowserAuthError(nativeHandshakeTimeout));
          this.handshakeResolvers.delete(req.responseId);
        }, this.handshakeTimeoutMs);
      });
    });
  }
  /**
   * Invoked when a message is posted to the window. If a handshake request is received it means the extension is not installed.
   * @param event
   */
  onWindowMessage(event) {
    this.logger.trace("NativeMessageHandler - onWindowMessage called");
    if (event.source !== window) {
      return;
    }
    const request = event.data;
    if (!request.channel || request.channel !== NativeConstants.CHANNEL_ID) {
      return;
    }
    if (request.extensionId && request.extensionId !== this.extensionId) {
      return;
    }
    if (request.body.method === NativeExtensionMethod.HandshakeRequest) {
      const handshakeResolver = this.handshakeResolvers.get(request.responseId);
      if (!handshakeResolver) {
        this.logger.trace(`NativeMessageHandler.onWindowMessage - resolver can't be found for request ${request.responseId}`);
        return;
      }
      this.logger.verbose(request.extensionId ? `Extension with id: ${request.extensionId} not installed` : "No extension installed");
      clearTimeout(this.timeoutId);
      this.messageChannel.port1.close();
      this.messageChannel.port2.close();
      window.removeEventListener("message", this.windowListener, false);
      this.handshakeEvent.end({
        success: false,
        extensionInstalled: false
      });
      handshakeResolver.reject(createBrowserAuthError(nativeExtensionNotInstalled));
    }
  }
  /**
   * Invoked when a message is received from the extension on the MessageChannel port
   * @param event
   */
  onChannelMessage(event) {
    this.logger.trace("NativeMessageHandler - onChannelMessage called.");
    const request = event.data;
    const resolver = this.resolvers.get(request.responseId);
    const handshakeResolver = this.handshakeResolvers.get(request.responseId);
    try {
      const method = request.body.method;
      if (method === NativeExtensionMethod.Response) {
        if (!resolver) {
          return;
        }
        const response = request.body.response;
        this.logger.trace("NativeMessageHandler - Received response from browser extension");
        this.logger.tracePii(`NativeMessageHandler - Received response from browser extension: ${JSON.stringify(response)}`);
        if (response.status !== "Success") {
          resolver.reject(createNativeAuthError(response.code, response.description, response.ext));
        } else if (response.result) {
          if (response.result["code"] && response.result["description"]) {
            resolver.reject(createNativeAuthError(response.result["code"], response.result["description"], response.result["ext"]));
          } else {
            resolver.resolve(response.result);
          }
        } else {
          throw createAuthError(AuthErrorCodes_exports.unexpectedError, "Event does not contain result.");
        }
        this.resolvers.delete(request.responseId);
      } else if (method === NativeExtensionMethod.HandshakeResponse) {
        if (!handshakeResolver) {
          this.logger.trace(`NativeMessageHandler.onChannelMessage - resolver can't be found for request ${request.responseId}`);
          return;
        }
        clearTimeout(this.timeoutId);
        window.removeEventListener("message", this.windowListener, false);
        this.extensionId = request.extensionId;
        this.extensionVersion = request.body.version;
        this.logger.verbose(`NativeMessageHandler - Received HandshakeResponse from extension: ${this.extensionId}`);
        this.handshakeEvent.end({
          extensionInstalled: true,
          success: true
        });
        handshakeResolver.resolve();
        this.handshakeResolvers.delete(request.responseId);
      }
    } catch (err) {
      this.logger.error("Error parsing response from WAM Extension");
      this.logger.errorPii(`Error parsing response from WAM Extension: ${err}`);
      this.logger.errorPii(`Unable to parse ${event}`);
      if (resolver) {
        resolver.reject(err);
      } else if (handshakeResolver) {
        handshakeResolver.reject(err);
      }
    }
  }
  /**
   * Returns the Id for the browser extension this handler is communicating with
   * @returns
   */
  getExtensionId() {
    return this.extensionId;
  }
  /**
   * Returns the version for the browser extension this handler is communicating with
   * @returns
   */
  getExtensionVersion() {
    return this.extensionVersion;
  }
  /**
   * Returns boolean indicating whether or not the request should attempt to use native broker
   * @param logger
   * @param config
   * @param nativeExtensionProvider
   * @param authenticationScheme
   */
  static isNativeAvailable(config, logger, nativeExtensionProvider, authenticationScheme) {
    logger.trace("isNativeAvailable called");
    if (!config.system.allowNativeBroker) {
      logger.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false");
      return false;
    }
    if (!nativeExtensionProvider) {
      logger.trace("isNativeAvailable: WAM extension provider is not initialized, returning false");
      return false;
    }
    if (authenticationScheme) {
      switch (authenticationScheme) {
        case AuthenticationScheme.BEARER:
        case AuthenticationScheme.POP:
          logger.trace("isNativeAvailable: authenticationScheme is supported, returning true");
          return true;
        default:
          logger.trace("isNativeAvailable: authenticationScheme is not supported, returning false");
          return false;
      }
    }
    return true;
  }
};

// node_modules/@azure/msal-browser/dist/interaction_handler/InteractionHandler.mjs
var InteractionHandler = class {
  constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) {
    this.authModule = authCodeModule;
    this.browserStorage = storageImpl;
    this.authCodeRequest = authCodeRequest;
    this.logger = logger;
    this.performanceClient = performanceClient;
  }
  /**
   * Function to handle response parameters from hash.
   * @param locationHash
   */
  handleCodeResponse(response, request) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.HandleCodeResponse, request.correlationId);
      let authCodeResponse;
      try {
        authCodeResponse = this.authModule.handleFragmentResponse(response, request.state);
      } catch (e) {
        if (e instanceof ServerError && e.subError === userCancelled) {
          throw createBrowserAuthError(userCancelled);
        } else {
          throw e;
        }
      }
      return invokeAsync(this.handleCodeResponseFromServer.bind(this), PerformanceEvents.HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)(authCodeResponse, request);
    });
  }
  /**
   * Process auth code response from AAD
   * @param authCodeResponse
   * @param state
   * @param authority
   * @param networkModule
   * @returns
   */
  handleCodeResponseFromServer(authCodeResponse, request, validateNonce = true) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.HandleCodeResponseFromServer, request.correlationId);
      this.logger.trace("InteractionHandler.handleCodeResponseFromServer called");
      this.authCodeRequest.code = authCodeResponse.code;
      if (authCodeResponse.cloud_instance_host_name) {
        yield invokeAsync(this.authModule.updateAuthority.bind(this.authModule), PerformanceEvents.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, request.correlationId)(authCodeResponse.cloud_instance_host_name, request.correlationId);
      }
      if (validateNonce) {
        authCodeResponse.nonce = request.nonce || void 0;
      }
      authCodeResponse.state = request.state;
      if (authCodeResponse.client_info) {
        this.authCodeRequest.clientInfo = authCodeResponse.client_info;
      } else {
        const ccsCred = this.createCcsCredentials(request);
        if (ccsCred) {
          this.authCodeRequest.ccsCredential = ccsCred;
        }
      }
      const tokenResponse = yield invokeAsync(this.authModule.acquireToken.bind(this.authModule), PerformanceEvents.AuthClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(this.authCodeRequest, authCodeResponse);
      return tokenResponse;
    });
  }
  /**
   * Build ccs creds if available
   */
  createCcsCredentials(request) {
    if (request.account) {
      return {
        credential: request.account.homeAccountId,
        type: CcsCredentialType.HOME_ACCOUNT_ID
      };
    } else if (request.loginHint) {
      return {
        credential: request.loginHint,
        type: CcsCredentialType.UPN
      };
    }
    return null;
  }
};

// node_modules/@azure/msal-browser/dist/response/ResponseHandler.mjs
function deserializeResponse(responseString, responseLocation, logger) {
  const serverParams = UrlUtils_exports.getDeserializedResponse(responseString);
  if (!serverParams) {
    if (!UrlUtils_exports.stripLeadingHashOrQuery(responseString)) {
      logger.error(`The request has returned to the redirectUri but a ${responseLocation} is not present. It's likely that the ${responseLocation} has been removed or the page has been redirected by code running on the redirectUri page.`);
      throw createBrowserAuthError(hashEmptyError);
    } else {
      logger.error(`A ${responseLocation} is present in the iframe but it does not contain known properties. It's likely that the ${responseLocation} has been replaced by code running on the redirectUri page.`);
      logger.errorPii(`The ${responseLocation} detected is: ${responseString}`);
      throw createBrowserAuthError(hashDoesNotContainKnownProperties);
    }
  }
  return serverParams;
}
function validateInteractionType(response, browserCrypto, interactionType) {
  if (!response.state) {
    throw createBrowserAuthError(noStateInHash);
  }
  const platformStateObj = extractBrowserRequestState(browserCrypto, response.state);
  if (!platformStateObj) {
    throw createBrowserAuthError(unableToParseState);
  }
  if (platformStateObj.interactionType !== interactionType) {
    throw createBrowserAuthError(stateInteractionTypeMismatch);
  }
}

// node_modules/@azure/msal-browser/dist/interaction_client/PopupClient.mjs
var PopupClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
    this.unloadWindow = this.unloadWindow.bind(this);
    this.nativeStorage = nativeStorageImpl;
  }
  /**
   * Acquires tokens by opening a popup window to the /authorize endpoint of the authority
   * @param request
   */
  acquireToken(request) {
    try {
      const popupName = this.generatePopupName(request.scopes || OIDC_DEFAULT_SCOPES, request.authority || this.config.auth.authority);
      const popupWindowAttributes = request.popupWindowAttributes || {};
      if (this.config.system.asyncPopups) {
        this.logger.verbose("asyncPopups set to true, acquiring token");
        return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes);
      } else {
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        const popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
        return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logout(logoutRequest) {
    try {
      this.logger.verbose("logoutPopup called");
      const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
      const popupName = this.generateLogoutPopupName(validLogoutRequest);
      const authority = logoutRequest && logoutRequest.authority;
      const mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
      const popupWindowAttributes = logoutRequest?.popupWindowAttributes || {};
      if (this.config.system.asyncPopups) {
        this.logger.verbose("asyncPopups set to true");
        return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, void 0, mainWindowRedirectUri);
      } else {
        this.logger.verbose("asyncPopup set to false, opening popup");
        const popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
        return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, popup, mainWindowRedirectUri);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Helper which obtains an access_token for your API via opening a popup window in the user's browser
   * @param validRequest
   * @param popupName
   * @param popup
   * @param popupWindowAttributes
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup) {
    return __async(this, null, function* () {
      this.logger.verbose("acquireTokenPopupAsync called");
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenPopup);
      const validRequest = yield invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, InteractionType.Popup);
      preconnect(validRequest.authority);
      try {
        const authCodeRequest = yield invokeAsync(this.initializeAuthorizationCodeRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(validRequest);
        const authClient = yield invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions, validRequest.account);
        const isNativeBroker = NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme);
        let fetchNativeAccountIdMeasurement;
        if (isNativeBroker) {
          fetchNativeAccountIdMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.FetchAccountIdWithNativeBroker, request.correlationId);
        }
        const navigateUrl = yield authClient.getAuthCodeUrl(__spreadProps(__spreadValues({}, validRequest), {
          nativeBroker: isNativeBroker
        }));
        const interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
        const popupParameters = {
          popup,
          popupName,
          popupWindowAttributes
        };
        const popupWindow = this.initiateAuthRequest(navigateUrl, popupParameters);
        this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow }, null);
        const responseString = yield this.monitorPopupForHash(popupWindow);
        const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.serverResponseType, this.logger);
        ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest);
        if (serverParams.accountId) {
          this.logger.verbose("Account id found in hash, calling WAM for token");
          if (fetchNativeAccountIdMeasurement) {
            fetchNativeAccountIdMeasurement.end({
              success: true,
              isNativeBroker: true
            });
          }
          if (!this.nativeMessageHandler) {
            throw createBrowserAuthError(nativeConnectionNotEstablished);
          }
          const nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, validRequest.correlationId);
          const { userRequestState } = ProtocolUtils.parseRequestState(this.browserCrypto, validRequest.state);
          return yield nativeInteractionClient.acquireToken(__spreadProps(__spreadValues({}, validRequest), {
            state: userRequestState,
            prompt: void 0
            // Server should handle the prompt, ideally native broker can do this part silently
          }));
        }
        const result = yield interactionHandler.handleCodeResponse(serverParams, validRequest);
        return result;
      } catch (e) {
        if (popup) {
          popup.close();
        }
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    });
  }
  /**
   *
   * @param validRequest
   * @param popupName
   * @param requestAuthority
   * @param popup
   * @param mainWindowRedirectUri
   * @param popupWindowAttributes
   */
  logoutPopupAsync(validRequest, popupName, popupWindowAttributes, requestAuthority, popup, mainWindowRedirectUri) {
    return __async(this, null, function* () {
      this.logger.verbose("logoutPopupAsync called");
      this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Popup, validRequest);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logoutPopup);
      try {
        yield this.clearCacheOnLogout(validRequest.account);
        const authClient = yield invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(
          serverTelemetryManager,
          requestAuthority,
          void 0,
          // AzureCloudOptions
          validRequest.account || void 0
        );
        try {
          authClient.authority.endSessionEndpoint;
        } catch {
          if (validRequest.account?.homeAccountId && validRequest.postLogoutRedirectUri && authClient.authority.protocolMode === ProtocolMode.OIDC) {
            void this.browserStorage.removeAccount(validRequest.account?.homeAccountId);
            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
            if (mainWindowRedirectUri) {
              const navigationOptions = {
                apiId: ApiId.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: false
              };
              const absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, getCurrentUri());
              yield this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
            }
            if (popup) {
              popup.close();
            }
            return;
          }
        }
        const logoutUri = authClient.getLogoutUri(validRequest);
        this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
        const popupWindow = this.openPopup(logoutUri, {
          popupName,
          popupWindowAttributes,
          popup
        });
        this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow }, null);
        yield this.monitorPopupForHash(popupWindow).catch(() => {
        });
        if (mainWindowRedirectUri) {
          const navigationOptions = {
            apiId: ApiId.logoutPopup,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: false
          };
          const absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, getCurrentUri());
          this.logger.verbose("Redirecting main window to url specified in the request");
          this.logger.verbosePii(`Redirecting main window to: ${absoluteUrl}`);
          yield this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
        } else {
          this.logger.verbose("No main window navigation requested");
        }
      } catch (e) {
        if (popup) {
          popup.close();
        }
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        this.browserStorage.setInteractionInProgress(false);
        this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Popup, null, e);
        this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
        throw e;
      }
      this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
    });
  }
  /**
   * Opens a popup window with given request Url.
   * @param requestUrl
   */
  initiateAuthRequest(requestUrl, params) {
    if (requestUrl) {
      this.logger.infoPii(`Navigate to: ${requestUrl}`);
      return this.openPopup(requestUrl, params);
    } else {
      this.logger.error("Navigate url is empty");
      throw createBrowserAuthError(emptyNavigateUri);
    }
  }
  /**
   * Monitors a window until it loads a url with the same origin.
   * @param popupWindow - window that is being monitored
   * @param timeout - timeout for processing hash once popup is redirected back to application
   */
  monitorPopupForHash(popupWindow) {
    return new Promise((resolve, reject) => {
      this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
      const intervalId = setInterval(() => {
        if (popupWindow.closed) {
          this.logger.error("PopupHandler.monitorPopupForHash - window closed");
          clearInterval(intervalId);
          reject(createBrowserAuthError(userCancelled));
          return;
        }
        let href = "";
        try {
          href = popupWindow.location.href;
        } catch (e) {
        }
        if (!href || href === "about:blank") {
          return;
        }
        clearInterval(intervalId);
        let responseString = "";
        const responseType = this.config.auth.OIDCOptions.serverResponseType;
        if (popupWindow) {
          if (responseType === ServerResponseType.QUERY) {
            responseString = popupWindow.location.search;
          } else {
            responseString = popupWindow.location.hash;
          }
        }
        this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller");
        resolve(responseString);
      }, this.config.system.pollIntervalMilliseconds);
    }).finally(() => {
      this.cleanPopup(popupWindow);
    });
  }
  /**
   * @hidden
   *
   * Configures popup window for login.
   *
   * @param urlNavigate
   * @param title
   * @param popUpWidth
   * @param popUpHeight
   * @param popupWindowAttributes
   * @ignore
   * @hidden
   */
  openPopup(urlNavigate, popupParams) {
    try {
      let popupWindow;
      if (popupParams.popup) {
        popupWindow = popupParams.popup;
        this.logger.verbosePii(`Navigating popup window to: ${urlNavigate}`);
        popupWindow.location.assign(urlNavigate);
      } else if (typeof popupParams.popup === "undefined") {
        this.logger.verbosePii(`Opening popup window to: ${urlNavigate}`);
        popupWindow = this.openSizedPopup(urlNavigate, popupParams.popupName, popupParams.popupWindowAttributes);
      }
      if (!popupWindow) {
        throw createBrowserAuthError(emptyWindowError);
      }
      if (popupWindow.focus) {
        popupWindow.focus();
      }
      this.currentWindow = popupWindow;
      window.addEventListener("beforeunload", this.unloadWindow);
      return popupWindow;
    } catch (e) {
      this.logger.error("error opening popup " + e.message);
      this.browserStorage.setInteractionInProgress(false);
      throw createBrowserAuthError(popupWindowError);
    }
  }
  /**
   * Helper function to set popup window dimensions and position
   * @param urlNavigate
   * @param popupName
   * @param popupWindowAttributes
   * @returns
   */
  openSizedPopup(urlNavigate, popupName, popupWindowAttributes) {
    const winLeft = window.screenLeft ? window.screenLeft : window.screenX;
    const winTop = window.screenTop ? window.screenTop : window.screenY;
    const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let width = popupWindowAttributes.popupSize?.width;
    let height = popupWindowAttributes.popupSize?.height;
    let top = popupWindowAttributes.popupPosition?.top;
    let left = popupWindowAttributes.popupPosition?.left;
    if (!width || width < 0 || width > winWidth) {
      this.logger.verbose("Default popup window width used. Window width not configured or invalid.");
      width = BrowserConstants.POPUP_WIDTH;
    }
    if (!height || height < 0 || height > winHeight) {
      this.logger.verbose("Default popup window height used. Window height not configured or invalid.");
      height = BrowserConstants.POPUP_HEIGHT;
    }
    if (!top || top < 0 || top > winHeight) {
      this.logger.verbose("Default popup window top position used. Window top not configured or invalid.");
      top = Math.max(0, winHeight / 2 - BrowserConstants.POPUP_HEIGHT / 2 + winTop);
    }
    if (!left || left < 0 || left > winWidth) {
      this.logger.verbose("Default popup window left position used. Window left not configured or invalid.");
      left = Math.max(0, winWidth / 2 - BrowserConstants.POPUP_WIDTH / 2 + winLeft);
    }
    return window.open(urlNavigate, popupName, `width=${width}, height=${height}, top=${top}, left=${left}, scrollbars=yes`);
  }
  /**
   * Event callback to unload main window.
   */
  unloadWindow(e) {
    this.browserStorage.cleanRequestByInteractionType(InteractionType.Popup);
    if (this.currentWindow) {
      this.currentWindow.close();
    }
    e.preventDefault();
  }
  /**
   * Closes popup, removes any state vars created during popup calls.
   * @param popupWindow
   */
  cleanPopup(popupWindow) {
    if (popupWindow) {
      popupWindow.close();
    }
    window.removeEventListener("beforeunload", this.unloadWindow);
    this.browserStorage.setInteractionInProgress(false);
  }
  /**
   * Generates the name for the popup based on the client id and request
   * @param clientId
   * @param request
   */
  generatePopupName(scopes, authority) {
    return `${BrowserConstants.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${scopes.join("-")}.${authority}.${this.correlationId}`;
  }
  /**
   * Generates the name for the popup based on the client id and request for logouts
   * @param clientId
   * @param request
   */
  generateLogoutPopupName(request) {
    const homeAccountId = request.account && request.account.homeAccountId;
    return `${BrowserConstants.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${homeAccountId}.${this.correlationId}`;
  }
};

// node_modules/@azure/msal-browser/dist/interaction_handler/RedirectHandler.mjs
var RedirectHandler = class {
  constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) {
    this.authModule = authCodeModule;
    this.browserStorage = storageImpl;
    this.authCodeRequest = authCodeRequest;
    this.logger = logger;
    this.performanceClient = performanceClient;
  }
  /**
   * Redirects window to given URL.
   * @param urlNavigate
   */
  initiateAuthRequest(requestUrl, params) {
    return __async(this, null, function* () {
      this.logger.verbose("RedirectHandler.initiateAuthRequest called");
      if (requestUrl) {
        if (params.redirectStartPage) {
          this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page");
          this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
        }
        this.browserStorage.setTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, this.authCodeRequest.correlationId, true);
        this.browserStorage.cacheCodeRequest(this.authCodeRequest);
        this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${requestUrl}`);
        const navigationOptions = {
          apiId: ApiId.acquireTokenRedirect,
          timeout: params.redirectTimeout,
          noHistory: false
        };
        if (typeof params.onRedirectNavigate === "function") {
          this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
          const navigate = params.onRedirectNavigate(requestUrl);
          if (navigate !== false) {
            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
            yield params.navigationClient.navigateExternal(requestUrl, navigationOptions);
            return;
          } else {
            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
            return;
          }
        } else {
          this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
          yield params.navigationClient.navigateExternal(requestUrl, navigationOptions);
          return;
        }
      } else {
        this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
        throw createBrowserAuthError(emptyNavigateUri);
      }
    });
  }
  /**
   * Handle authorization code response in the window.
   * @param hash
   */
  handleCodeResponse(response, state) {
    return __async(this, null, function* () {
      this.logger.verbose("RedirectHandler.handleCodeResponse called");
      this.browserStorage.setInteractionInProgress(false);
      const stateKey = this.browserStorage.generateStateKey(state);
      const requestState = this.browserStorage.getTemporaryCache(stateKey);
      if (!requestState) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.stateNotFound, "Cached State");
      }
      let authCodeResponse;
      try {
        authCodeResponse = this.authModule.handleFragmentResponse(response, requestState);
      } catch (e) {
        if (e instanceof ServerError && e.subError === userCancelled) {
          throw createBrowserAuthError(userCancelled);
        } else {
          throw e;
        }
      }
      const nonceKey = this.browserStorage.generateNonceKey(requestState);
      const cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
      this.authCodeRequest.code = authCodeResponse.code;
      if (authCodeResponse.cloud_instance_host_name) {
        yield invokeAsync(this.authModule.updateAuthority.bind(this.authModule), PerformanceEvents.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, this.authCodeRequest.correlationId)(authCodeResponse.cloud_instance_host_name, this.authCodeRequest.correlationId);
      }
      authCodeResponse.nonce = cachedNonce || void 0;
      authCodeResponse.state = requestState;
      if (authCodeResponse.client_info) {
        this.authCodeRequest.clientInfo = authCodeResponse.client_info;
      } else {
        const cachedCcsCred = this.checkCcsCredentials();
        if (cachedCcsCred) {
          this.authCodeRequest.ccsCredential = cachedCcsCred;
        }
      }
      const tokenResponse = yield this.authModule.acquireToken(this.authCodeRequest, authCodeResponse);
      this.browserStorage.cleanRequestByState(state);
      return tokenResponse;
    });
  }
  /**
   * Looks up ccs creds in the cache
   */
  checkCcsCredentials() {
    const cachedCcsCred = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, true);
    if (cachedCcsCred) {
      try {
        return JSON.parse(cachedCcsCred);
      } catch (e) {
        this.authModule.logger.error("Cache credential could not be parsed");
        this.authModule.logger.errorPii(`Cache credential could not be parsed: ${cachedCcsCred}`);
      }
    }
    return null;
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/RedirectClient.mjs
var RedirectClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
    this.nativeStorage = nativeStorageImpl;
  }
  /**
   * Redirects the page to the /authorize endpoint of the IDP
   * @param request
   */
  acquireToken(request) {
    return __async(this, null, function* () {
      const validRequest = yield invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, InteractionType.Redirect);
      this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || "", validRequest.account || null);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenRedirect);
      const handleBackButton = (event) => {
        if (event.persisted) {
          this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache.");
          this.browserStorage.cleanRequestByState(validRequest.state);
          this.eventHandler.emitEvent(EventType.RESTORE_FROM_BFCACHE, InteractionType.Redirect);
        }
      };
      try {
        const authCodeRequest = yield invokeAsync(this.initializeAuthorizationCodeRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(validRequest);
        const authClient = yield invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions, validRequest.account);
        const interactionHandler = new RedirectHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
        const navigateUrl = yield authClient.getAuthCodeUrl(__spreadProps(__spreadValues({}, validRequest), {
          nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme)
        }));
        const redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
        this.logger.verbosePii(`Redirect start page: ${redirectStartPage}`);
        window.addEventListener("pageshow", handleBackButton);
        return yield interactionHandler.initiateAuthRequest(navigateUrl, {
          navigationClient: this.navigationClient,
          redirectTimeout: this.config.system.redirectNavigationTimeout,
          redirectStartPage,
          onRedirectNavigate: request.onRedirectNavigate
        });
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        window.removeEventListener("pageshow", handleBackButton);
        this.browserStorage.cleanRequestByState(validRequest.state);
        throw e;
      }
    });
  }
  /**
   * Checks if navigateToLoginRequestUrl is set, and:
   * - if true, performs logic to cache and navigate
   * - if false, handles hash string and parses response
   * @param hash {string} url hash
   * @param parentMeasurement {InProgressPerformanceEvent} parent measurement
   */
  handleRedirectPromise(hash = "", parentMeasurement) {
    return __async(this, null, function* () {
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.handleRedirectPromise);
      try {
        if (!this.browserStorage.isInteractionInProgress(true)) {
          this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
          return null;
        }
        const [serverParams, responseString] = this.getRedirectResponse(hash || "");
        if (!serverParams) {
          this.logger.info("handleRedirectPromise did not detect a response as a result of a redirect. Cleaning temporary cache.");
          this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
          parentMeasurement.event.errorCode = "no_server_response";
          return null;
        }
        const loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true) || Constants.EMPTY_STRING;
        const loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl);
        const currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
        if (loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl) {
          this.logger.verbose("Current page is loginRequestUrl, handling response");
          if (loginRequestUrl.indexOf("#") > -1) {
            replaceHash(loginRequestUrl);
          }
          const handleHashResult = yield this.handleResponse(serverParams, serverTelemetryManager);
          return handleHashResult;
        } else if (!this.config.auth.navigateToLoginRequestUrl) {
          this.logger.verbose("NavigateToLoginRequestUrl set to false, handling response");
          return yield this.handleResponse(serverParams, serverTelemetryManager);
        } else if (!isInIframe() || this.config.system.allowRedirectInIframe) {
          this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseString, true);
          const navigationOptions = {
            apiId: ApiId.handleRedirectPromise,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: true
          };
          let processHashOnRedirect = true;
          if (!loginRequestUrl || loginRequestUrl === "null") {
            const homepage = getHomepage();
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
            this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
            processHashOnRedirect = yield this.navigationClient.navigateInternal(homepage, navigationOptions);
          } else {
            this.logger.verbose(`Navigating to loginRequestUrl: ${loginRequestUrl}`);
            processHashOnRedirect = yield this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions);
          }
          if (!processHashOnRedirect) {
            return yield this.handleResponse(serverParams, serverTelemetryManager);
          }
        }
        return null;
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
        throw e;
      }
    });
  }
  /**
   * Gets the response hash for a redirect request
   * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
   * @param hash
   */
  getRedirectResponse(userProvidedResponse) {
    this.logger.verbose("getRedirectResponseHash called");
    let responseString = userProvidedResponse;
    if (!responseString) {
      if (this.config.auth.OIDCOptions.serverResponseType === ServerResponseType.QUERY) {
        responseString = window.location.search;
      } else {
        responseString = window.location.hash;
      }
    }
    let response = UrlUtils_exports.getDeserializedResponse(responseString);
    if (response) {
      try {
        validateInteractionType(response, this.browserCrypto, InteractionType.Redirect);
      } catch (e) {
        if (e instanceof AuthError) {
          this.logger.error(`Interaction type validation failed due to ${e.errorCode}: ${e.errorMessage}`);
        }
        return [null, ""];
      }
      clearHash(window);
      this.logger.verbose("Hash contains known properties, returning response hash");
      return [response, responseString];
    }
    const cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
    this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
    if (cachedHash) {
      response = UrlUtils_exports.getDeserializedResponse(cachedHash);
      if (response) {
        this.logger.verbose("Hash does not contain known properties, returning cached hash");
        return [response, cachedHash];
      }
    }
    return [null, ""];
  }
  /**
   * Checks if hash exists and handles in window.
   * @param hash
   * @param state
   */
  handleResponse(serverParams, serverTelemetryManager) {
    return __async(this, null, function* () {
      const state = serverParams.state;
      if (!state) {
        throw createBrowserAuthError(noStateInHash);
      }
      const cachedRequest = this.browserStorage.getCachedRequest(state);
      this.logger.verbose("handleResponse called, retrieved cached request");
      if (serverParams.accountId) {
        this.logger.verbose("Account id found in hash, calling WAM for token");
        if (!this.nativeMessageHandler) {
          throw createBrowserAuthError(nativeConnectionNotEstablished);
        }
        const nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, cachedRequest.correlationId);
        const { userRequestState } = ProtocolUtils.parseRequestState(this.browserCrypto, state);
        return nativeInteractionClient.acquireToken(__spreadProps(__spreadValues({}, cachedRequest), {
          state: userRequestState,
          prompt: void 0
          // Server should handle the prompt, ideally native broker can do this part silently
        })).finally(() => {
          this.browserStorage.cleanRequestByState(state);
        });
      }
      const currentAuthority = this.browserStorage.getCachedAuthority(state);
      if (!currentAuthority) {
        throw createBrowserAuthError(noCachedAuthorityError);
      }
      const authClient = yield invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, currentAuthority);
      ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, cachedRequest);
      const interactionHandler = new RedirectHandler(authClient, this.browserStorage, cachedRequest, this.logger, this.performanceClient);
      return interactionHandler.handleCodeResponse(serverParams, state);
    });
  }
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  logout(logoutRequest) {
    return __async(this, null, function* () {
      this.logger.verbose("logoutRedirect called");
      const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logout);
      try {
        this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Redirect, logoutRequest);
        yield this.clearCacheOnLogout(validLogoutRequest.account);
        const navigationOptions = {
          apiId: ApiId.logout,
          timeout: this.config.system.redirectNavigationTimeout,
          noHistory: false
        };
        const authClient = yield invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(
          serverTelemetryManager,
          logoutRequest && logoutRequest.authority,
          void 0,
          // AzureCloudOptions
          logoutRequest && logoutRequest.account || void 0
        );
        if (authClient.authority.protocolMode === ProtocolMode.OIDC) {
          try {
            authClient.authority.endSessionEndpoint;
          } catch {
            if (validLogoutRequest.account?.homeAccountId) {
              void this.browserStorage.removeAccount(validLogoutRequest.account?.homeAccountId);
              this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
              return;
            }
          }
        }
        const logoutUri = authClient.getLogoutUri(validLogoutRequest);
        this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
        if (logoutRequest && typeof logoutRequest.onRedirectNavigate === "function") {
          const navigate = logoutRequest.onRedirectNavigate(logoutUri);
          if (navigate !== false) {
            this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
            if (!this.browserStorage.getInteractionInProgress()) {
              this.browserStorage.setInteractionInProgress(true);
            }
            yield this.navigationClient.navigateExternal(logoutUri, navigationOptions);
            return;
          } else {
            this.browserStorage.setInteractionInProgress(false);
            this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
          }
        } else {
          if (!this.browserStorage.getInteractionInProgress()) {
            this.browserStorage.setInteractionInProgress(true);
          }
          yield this.navigationClient.navigateExternal(logoutUri, navigationOptions);
          return;
        }
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Redirect, null, e);
        this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
        throw e;
      }
      this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
    });
  }
  /**
   * Use to get the redirectStartPage either from request or use current window
   * @param requestStartPage
   */
  getRedirectStartPage(requestStartPage) {
    const redirectStartPage = requestStartPage || window.location.href;
    return UrlString.getAbsoluteUrl(redirectStartPage, getCurrentUri());
  }
};

// node_modules/@azure/msal-browser/dist/navigation/NavigationClient.mjs
var NavigationClient = class _NavigationClient {
  /**
   * Navigates to other pages within the same web application
   * @param url
   * @param options
   */
  navigateInternal(url, options) {
    return _NavigationClient.defaultNavigateWindow(url, options);
  }
  /**
   * Navigates to other pages outside the web application i.e. the Identity Provider
   * @param url
   * @param options
   */
  navigateExternal(url, options) {
    return _NavigationClient.defaultNavigateWindow(url, options);
  }
  /**
   * Default navigation implementation invoked by the internal and external functions
   * @param url
   * @param options
   */
  static defaultNavigateWindow(url, options) {
    if (options.noHistory) {
      window.location.replace(url);
    } else {
      window.location.assign(url);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, options.timeout);
    });
  }
};

// node_modules/@azure/msal-browser/dist/network/FetchClient.mjs
var FetchClient = class {
  /**
   * Fetch Client for REST endpoints - Get request
   * @param url
   * @param headers
   * @param body
   */
  sendGetRequestAsync(url, options) {
    return __async(this, null, function* () {
      let response;
      try {
        response = yield fetch(url, {
          method: HTTP_REQUEST_TYPE.GET,
          headers: this.getFetchHeaders(options)
        });
      } catch (e) {
        if (window.navigator.onLine) {
          throw createBrowserAuthError(getRequestFailed);
        } else {
          throw createBrowserAuthError(noNetworkConnectivity);
        }
      }
      try {
        return {
          headers: this.getHeaderDict(response.headers),
          body: yield response.json(),
          status: response.status
        };
      } catch (e) {
        throw createBrowserAuthError(failedToParseResponse);
      }
    });
  }
  /**
   * Fetch Client for REST endpoints - Post request
   * @param url
   * @param headers
   * @param body
   */
  sendPostRequestAsync(url, options) {
    return __async(this, null, function* () {
      const reqBody = options && options.body || Constants.EMPTY_STRING;
      let response;
      try {
        response = yield fetch(url, {
          method: HTTP_REQUEST_TYPE.POST,
          headers: this.getFetchHeaders(options),
          body: reqBody
        });
      } catch (e) {
        if (window.navigator.onLine) {
          throw createBrowserAuthError(postRequestFailed);
        } else {
          throw createBrowserAuthError(noNetworkConnectivity);
        }
      }
      try {
        return {
          headers: this.getHeaderDict(response.headers),
          body: yield response.json(),
          status: response.status
        };
      } catch (e) {
        throw createBrowserAuthError(failedToParseResponse);
      }
    });
  }
  /**
   * Get Fetch API Headers object from string map
   * @param inputHeaders
   */
  getFetchHeaders(options) {
    const headers = new Headers();
    if (!(options && options.headers)) {
      return headers;
    }
    const optionsHeaders = options.headers;
    Object.keys(optionsHeaders).forEach((key) => {
      headers.append(key, optionsHeaders[key]);
    });
    return headers;
  }
  getHeaderDict(headers) {
    const headerDict = {};
    headers.forEach((value, key) => {
      headerDict[key] = value;
    });
    return headerDict;
  }
};

// node_modules/@azure/msal-browser/dist/config/Configuration.mjs
var DEFAULT_POPUP_TIMEOUT_MS = 6e4;
var DEFAULT_IFRAME_TIMEOUT_MS = 1e4;
var DEFAULT_REDIRECT_TIMEOUT_MS = 3e4;
var DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2e3;
function buildConfiguration({ auth: userInputAuth, cache: userInputCache, system: userInputSystem, telemetry: userInputTelemetry }, isBrowserEnvironment) {
  const DEFAULT_AUTH_OPTIONS = {
    clientId: Constants.EMPTY_STRING,
    authority: `${Constants.DEFAULT_AUTHORITY}`,
    knownAuthorities: [],
    cloudDiscoveryMetadata: Constants.EMPTY_STRING,
    authorityMetadata: Constants.EMPTY_STRING,
    redirectUri: Constants.EMPTY_STRING,
    postLogoutRedirectUri: Constants.EMPTY_STRING,
    navigateToLoginRequestUrl: true,
    clientCapabilities: [],
    protocolMode: ProtocolMode.AAD,
    OIDCOptions: {
      serverResponseType: ServerResponseType.FRAGMENT,
      defaultScopes: [
        Constants.OPENID_SCOPE,
        Constants.PROFILE_SCOPE,
        Constants.OFFLINE_ACCESS_SCOPE
      ]
    },
    azureCloudOptions: {
      azureCloudInstance: AzureCloudInstance.None,
      tenant: Constants.EMPTY_STRING
    },
    skipAuthorityMetadataCache: false,
    supportsNestedAppAuth: false
  };
  const DEFAULT_CACHE_OPTIONS = {
    cacheLocation: BrowserCacheLocation.SessionStorage,
    temporaryCacheLocation: BrowserCacheLocation.SessionStorage,
    storeAuthStateInCookie: false,
    secureCookies: false,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: userInputCache && userInputCache.cacheLocation === BrowserCacheLocation.LocalStorage ? true : false,
    claimsBasedCachingEnabled: false
  };
  const DEFAULT_LOGGER_OPTIONS = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: () => {
    },
    logLevel: LogLevel.Info,
    piiLoggingEnabled: false
  };
  const DEFAULT_BROWSER_SYSTEM_OPTIONS = __spreadProps(__spreadValues({}, DEFAULT_SYSTEM_OPTIONS), {
    loggerOptions: DEFAULT_LOGGER_OPTIONS,
    networkClient: isBrowserEnvironment ? new FetchClient() : StubbedNetworkModule,
    navigationClient: new NavigationClient(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: userInputSystem?.loadFrameTimeout || DEFAULT_POPUP_TIMEOUT_MS,
    iframeHashTimeout: userInputSystem?.loadFrameTimeout || DEFAULT_IFRAME_TIMEOUT_MS,
    navigateFrameWait: 0,
    redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS,
    asyncPopups: false,
    allowRedirectInIframe: false,
    allowNativeBroker: false,
    nativeBrokerHandshakeTimeout: userInputSystem?.nativeBrokerHandshakeTimeout || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS,
    pollIntervalMilliseconds: BrowserConstants.DEFAULT_POLL_INTERVAL_MS
  });
  const providedSystemOptions = __spreadProps(__spreadValues(__spreadValues({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem), {
    loggerOptions: userInputSystem?.loggerOptions || DEFAULT_LOGGER_OPTIONS
  });
  const DEFAULT_TELEMETRY_OPTIONS = {
    application: {
      appName: Constants.EMPTY_STRING,
      appVersion: Constants.EMPTY_STRING
    },
    client: new StubPerformanceClient()
  };
  if (userInputAuth?.protocolMode !== ProtocolMode.OIDC && userInputAuth?.OIDCOptions) {
    const logger = new Logger(providedSystemOptions.loggerOptions);
    logger.warning(JSON.stringify(createClientConfigurationError(ClientConfigurationErrorCodes_exports.cannotSetOIDCOptions)));
  }
  if (userInputAuth?.protocolMode && userInputAuth.protocolMode !== ProtocolMode.AAD && providedSystemOptions?.allowNativeBroker) {
    throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.cannotAllowNativeBroker);
  }
  const overlayedConfig = {
    auth: __spreadProps(__spreadValues(__spreadValues({}, DEFAULT_AUTH_OPTIONS), userInputAuth), {
      OIDCOptions: __spreadValues(__spreadValues({}, DEFAULT_AUTH_OPTIONS.OIDCOptions), userInputAuth?.OIDCOptions)
    }),
    cache: __spreadValues(__spreadValues({}, DEFAULT_CACHE_OPTIONS), userInputCache),
    system: providedSystemOptions,
    telemetry: __spreadValues(__spreadValues({}, DEFAULT_TELEMETRY_OPTIONS), userInputTelemetry)
  };
  return overlayedConfig;
}

// node_modules/@azure/msal-browser/dist/interaction_handler/SilentHandler.mjs
function initiateAuthRequest(requestUrl, performanceClient, logger, correlationId, navigateFrameWait) {
  return __async(this, null, function* () {
    performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerInitiateAuthRequest, correlationId);
    if (!requestUrl) {
      logger.info("Navigate url is empty");
      throw createBrowserAuthError(emptyNavigateUri);
    }
    if (navigateFrameWait) {
      return invokeAsync(loadFrame, PerformanceEvents.SilentHandlerLoadFrame, logger, performanceClient, correlationId)(requestUrl, navigateFrameWait, performanceClient, correlationId);
    }
    return invoke(loadFrameSync, PerformanceEvents.SilentHandlerLoadFrameSync, logger, performanceClient, correlationId)(requestUrl);
  });
}
function monitorIframeForHash(iframe, timeout, pollIntervalMilliseconds, performanceClient, logger, correlationId, responseType) {
  return __async(this, null, function* () {
    performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerMonitorIframeForHash, correlationId);
    return new Promise((resolve, reject) => {
      if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
        logger.warning(`system.loadFrameTimeout or system.iframeHashTimeout set to lower (${timeout}ms) than the default (${DEFAULT_IFRAME_TIMEOUT_MS}ms). This may result in timeouts.`);
      }
      const timeoutId = window.setTimeout(() => {
        window.clearInterval(intervalId);
        reject(createBrowserAuthError(monitorWindowTimeout));
      }, timeout);
      const intervalId = window.setInterval(() => {
        let href = "";
        const contentWindow = iframe.contentWindow;
        try {
          href = contentWindow ? contentWindow.location.href : "";
        } catch (e) {
        }
        if (!href || href === "about:blank") {
          return;
        }
        let responseString = "";
        if (contentWindow) {
          if (responseType === ServerResponseType.QUERY) {
            responseString = contentWindow.location.search;
          } else {
            responseString = contentWindow.location.hash;
          }
        }
        window.clearTimeout(timeoutId);
        window.clearInterval(intervalId);
        resolve(responseString);
      }, pollIntervalMilliseconds);
    }).finally(() => {
      invoke(removeHiddenIframe, PerformanceEvents.RemoveHiddenIframe, logger, performanceClient, correlationId)(iframe);
    });
  });
}
function loadFrame(urlNavigate, navigateFrameWait, performanceClient, correlationId) {
  performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerLoadFrame, correlationId);
  return new Promise((resolve, reject) => {
    const frameHandle = createHiddenIframe();
    window.setTimeout(() => {
      if (!frameHandle) {
        reject("Unable to load iframe");
        return;
      }
      frameHandle.src = urlNavigate;
      resolve(frameHandle);
    }, navigateFrameWait);
  });
}
function loadFrameSync(urlNavigate) {
  const frameHandle = createHiddenIframe();
  frameHandle.src = urlNavigate;
  return frameHandle;
}
function createHiddenIframe() {
  const authFrame = document.createElement("iframe");
  authFrame.className = "msalSilentIframe";
  authFrame.style.visibility = "hidden";
  authFrame.style.position = "absolute";
  authFrame.style.width = authFrame.style.height = "0";
  authFrame.style.border = "0";
  authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
  document.body.appendChild(authFrame);
  return authFrame;
}
function removeHiddenIframe(iframe) {
  if (document.body === iframe.parentNode) {
    document.body.removeChild(iframe);
  }
}

// node_modules/@azure/msal-browser/dist/interaction_client/SilentIframeClient.mjs
var SilentIframeClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
    this.apiId = apiId;
    this.nativeStorage = nativeStorageImpl;
  }
  /**
   * Acquires a token silently by opening a hidden iframe to the /authorize endpoint with prompt=none or prompt=no_session
   * @param request
   */
  acquireToken(request) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
      if (!request.loginHint && !request.sid && (!request.account || !request.account.username)) {
        this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
      }
      const inputRequest = __spreadValues({}, request);
      if (inputRequest.prompt) {
        if (inputRequest.prompt !== PromptValue.NONE && inputRequest.prompt !== PromptValue.NO_SESSION) {
          this.logger.warning(`SilentIframeClient. Replacing invalid prompt ${inputRequest.prompt} with ${PromptValue.NONE}`);
          inputRequest.prompt = PromptValue.NONE;
        }
      } else {
        inputRequest.prompt = PromptValue.NONE;
      }
      const silentRequest = yield invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, request.correlationId)(inputRequest, InteractionType.Silent);
      preconnect(silentRequest.authority);
      const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
      try {
        const authClient = yield invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, request.correlationId)(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
        return yield invokeAsync(this.silentTokenHelper.bind(this), PerformanceEvents.SilentIframeClientTokenHelper, this.logger, this.performanceClient, request.correlationId)(authClient, silentRequest);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    });
  }
  /**
   * Currently Unsupported
   */
  logout() {
    return Promise.reject(createBrowserAuthError(silentLogoutUnsupported));
  }
  /**
   * Helper which acquires an authorization code silently using a hidden iframe from given url
   * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
   * @param navigateUrl
   * @param userRequestScopes
   */
  silentTokenHelper(authClient, silentRequest) {
    return __async(this, null, function* () {
      const correlationId = silentRequest.correlationId;
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentIframeClientTokenHelper, correlationId);
      const authCodeRequest = yield invokeAsync(this.initializeAuthorizationCodeRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, correlationId)(silentRequest);
      const navigateUrl = yield invokeAsync(authClient.getAuthCodeUrl.bind(authClient), PerformanceEvents.GetAuthCodeUrl, this.logger, this.performanceClient, correlationId)(__spreadProps(__spreadValues({}, silentRequest), {
        nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, silentRequest.authenticationScheme)
      }));
      const interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
      const msalFrame = yield invokeAsync(initiateAuthRequest, PerformanceEvents.SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(navigateUrl, this.performanceClient, this.logger, correlationId, this.config.system.navigateFrameWait);
      const responseType = this.config.auth.OIDCOptions.serverResponseType;
      const responseString = yield invokeAsync(monitorIframeForHash, PerformanceEvents.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(msalFrame, this.config.system.iframeHashTimeout, this.config.system.pollIntervalMilliseconds, this.performanceClient, this.logger, correlationId, responseType);
      const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, responseType, this.logger);
      if (serverParams.accountId) {
        this.logger.verbose("Account id found in hash, calling WAM for token");
        if (!this.nativeMessageHandler) {
          throw createBrowserAuthError(nativeConnectionNotEstablished);
        }
        const nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.browserStorage, correlationId);
        const { userRequestState } = ProtocolUtils.parseRequestState(this.browserCrypto, silentRequest.state);
        return invokeAsync(nativeInteractionClient.acquireToken.bind(nativeInteractionClient), PerformanceEvents.NativeInteractionClientAcquireToken, this.logger, this.performanceClient, correlationId)(__spreadProps(__spreadValues({}, silentRequest), {
          state: userRequestState,
          prompt: silentRequest.prompt || PromptValue.NONE
        }));
      }
      return invokeAsync(interactionHandler.handleCodeResponse.bind(interactionHandler), PerformanceEvents.HandleCodeResponse, this.logger, this.performanceClient, correlationId)(serverParams, silentRequest);
    });
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/SilentRefreshClient.mjs
var SilentRefreshClient = class extends StandardInteractionClient {
  /**
   * Exchanges the refresh token for new tokens
   * @param request
   */
  acquireToken(request) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentRefreshClientAcquireToken, request.correlationId);
      const baseRequest = yield invokeAsync(initializeBaseRequest, PerformanceEvents.InitializeBaseRequest, this.logger, this.performanceClient, request.correlationId)(request, this.config, this.performanceClient, this.logger);
      const silentRequest = __spreadValues(__spreadValues({}, request), baseRequest);
      if (request.redirectUri) {
        silentRequest.redirectUri = this.getRedirectUri(request.redirectUri);
      }
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
      const refreshTokenClient = yield this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
      return invokeAsync(refreshTokenClient.acquireTokenByRefreshToken.bind(refreshTokenClient), PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken, this.logger, this.performanceClient, request.correlationId)(silentRequest).catch((e) => {
        e.setCorrelationId(this.correlationId);
        serverTelemetryManager.cacheFailedRequest(e);
        throw e;
      });
    });
  }
  /**
   * Currently Unsupported
   */
  logout() {
    return Promise.reject(createBrowserAuthError(silentLogoutUnsupported));
  }
  /**
   * Creates a Refresh Client with the given authority, or the default authority.
   * @param serverTelemetryManager
   * @param authorityUrl
   */
  createRefreshTokenClient(serverTelemetryManager, authorityUrl, azureCloudOptions, account) {
    return __async(this, null, function* () {
      const clientConfig = yield invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, authorityUrl, azureCloudOptions, account);
      return new RefreshTokenClient(clientConfig, this.performanceClient);
    });
  }
};

// node_modules/@azure/msal-browser/dist/cache/TokenCache.mjs
var TokenCache = class {
  constructor(configuration, storage, logger, cryptoObj) {
    this.isBrowserEnvironment = typeof window !== "undefined";
    this.config = configuration;
    this.storage = storage;
    this.logger = logger;
    this.cryptoObj = cryptoObj;
  }
  // Move getAllAccounts here and cache utility APIs
  /**
   * API to load tokens to msal-browser cache.
   * @param request
   * @param response
   * @param options
   * @returns `AuthenticationResult` for the response that was loaded.
   */
  loadExternalTokens(request, response, options) {
    this.logger.info("TokenCache - loadExternalTokens called");
    if (!response.id_token) {
      throw createBrowserAuthError(unableToLoadToken);
    }
    const idTokenClaims = AuthToken_exports.extractTokenClaims(response.id_token, base64Decode);
    let cacheRecord;
    let authority;
    let cacheRecordAccount;
    if (request.account) {
      cacheRecordAccount = AccountEntity.createFromAccountInfo(request.account);
      cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(response.id_token, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment));
    } else if (request.authority) {
      const authorityUrl = Authority.generateAuthority(request.authority, request.azureCloudOptions);
      const authorityOptions = {
        protocolMode: this.config.auth.protocolMode,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
      authority = new Authority(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions, this.logger, request.correlationId || createNewGuid());
      if (options.clientInfo) {
        this.logger.trace("TokenCache - homeAccountId from options");
        cacheRecordAccount = this.loadAccount(idTokenClaims, authority, options.clientInfo);
        cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(response.id_token, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
      } else if (response.client_info) {
        this.logger.trace("TokenCache - homeAccountId from response");
        cacheRecordAccount = this.loadAccount(idTokenClaims, authority, response.client_info);
        cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(response.id_token, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
      } else {
        throw createBrowserAuthError(unableToLoadToken);
      }
    } else {
      throw createBrowserAuthError(unableToLoadToken);
    }
    return this.generateAuthenticationResult(request, idTokenClaims, cacheRecord, cacheRecordAccount, authority);
  }
  /**
   * Helper function to load account to msal-browser cache
   * @param idToken
   * @param environment
   * @param clientInfo
   * @param authorityType
   * @param requestHomeAccountId
   * @returns `AccountEntity`
   */
  loadAccount(idTokenClaims, authority, clientInfo, requestHomeAccountId) {
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading account");
      let homeAccountId;
      if (requestHomeAccountId) {
        homeAccountId = requestHomeAccountId;
      } else if (authority.authorityType !== void 0 && clientInfo) {
        homeAccountId = AccountEntity.generateHomeAccountId(clientInfo, authority.authorityType, this.logger, this.cryptoObj, idTokenClaims);
      }
      if (!homeAccountId) {
        throw createBrowserAuthError(unableToLoadToken);
      }
      const claimsTenantId = idTokenClaims.tid;
      const cachedAccount = buildAccountToCache(
        this.storage,
        authority,
        homeAccountId,
        idTokenClaims,
        base64Decode,
        clientInfo,
        authority.hostnameAndPort,
        claimsTenantId,
        void 0,
        // authCodePayload
        void 0,
        // nativeAccountId
        this.logger
      );
      this.storage.setAccount(cachedAccount);
      return cachedAccount;
    } else {
      throw createBrowserAuthError(unableToLoadToken);
    }
  }
  /**
   * Helper function to load id tokens to msal-browser cache
   * @param idToken
   * @param homeAccountId
   * @param environment
   * @param tenantId
   * @returns `IdTokenEntity`
   */
  loadIdToken(idToken, homeAccountId, environment, tenantId) {
    const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(homeAccountId, environment, idToken, this.config.auth.clientId, tenantId);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading id token");
      this.storage.setIdTokenCredential(idTokenEntity);
      return idTokenEntity;
    } else {
      throw createBrowserAuthError(unableToLoadToken);
    }
  }
  /**
   * Helper function to load access tokens to msal-browser cache
   * @param request
   * @param response
   * @param homeAccountId
   * @param environment
   * @param tenantId
   * @returns `AccessTokenEntity`
   */
  loadAccessToken(request, response, homeAccountId, environment, tenantId, options) {
    if (!response.access_token) {
      this.logger.verbose("TokenCache - No access token provided for caching");
      return null;
    }
    if (!response.expires_in) {
      throw createBrowserAuthError(unableToLoadToken);
    }
    if (!options.extendedExpiresOn) {
      throw createBrowserAuthError(unableToLoadToken);
    }
    const scopes = new ScopeSet(request.scopes).printScopes();
    const expiresOn = options.expiresOn || response.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3;
    const extendedExpiresOn = options.extendedExpiresOn;
    const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(homeAccountId, environment, response.access_token, this.config.auth.clientId, tenantId, scopes, expiresOn, extendedExpiresOn, base64Decode);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading access token");
      this.storage.setAccessTokenCredential(accessTokenEntity);
      return accessTokenEntity;
    } else {
      throw createBrowserAuthError(unableToLoadToken);
    }
  }
  /**
   * Helper function to load refresh tokens to msal-browser cache
   * @param request
   * @param response
   * @param homeAccountId
   * @param environment
   * @returns `RefreshTokenEntity`
   */
  loadRefreshToken(request, response, homeAccountId, environment) {
    if (!response.refresh_token) {
      this.logger.verbose("TokenCache - No refresh token provided for caching");
      return null;
    }
    const refreshTokenEntity = CacheHelpers_exports.createRefreshTokenEntity(homeAccountId, environment, response.refresh_token, this.config.auth.clientId);
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading refresh token");
      this.storage.setRefreshTokenCredential(refreshTokenEntity);
      return refreshTokenEntity;
    } else {
      throw createBrowserAuthError(unableToLoadToken);
    }
  }
  /**
   * Helper function to generate an `AuthenticationResult` for the result.
   * @param request
   * @param idTokenObj
   * @param cacheRecord
   * @param authority
   * @returns `AuthenticationResult`
   */
  generateAuthenticationResult(request, idTokenClaims, cacheRecord, accountEntity, authority) {
    let accessToken = Constants.EMPTY_STRING;
    let responseScopes = [];
    let expiresOn = null;
    let extExpiresOn;
    if (cacheRecord?.accessToken) {
      accessToken = cacheRecord.accessToken.secret;
      responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
      expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1e3);
      extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1e3);
    }
    const uid = idTokenClaims.oid || idTokenClaims.sub || Constants.EMPTY_STRING;
    const tid = idTokenClaims.tid || Constants.EMPTY_STRING;
    return {
      authority: authority ? authority.canonicalAuthority : Constants.EMPTY_STRING,
      uniqueId: uid,
      tenantId: tid,
      scopes: responseScopes,
      account: accountEntity.getAccountInfo(),
      idToken: cacheRecord.idToken?.secret || "",
      idTokenClaims: idTokenClaims || {},
      accessToken,
      fromCache: true,
      expiresOn,
      correlationId: request.correlationId || Constants.EMPTY_STRING,
      requestId: Constants.EMPTY_STRING,
      extExpiresOn,
      familyId: Constants.EMPTY_STRING,
      tokenType: cacheRecord?.accessToken?.tokenType || Constants.EMPTY_STRING,
      state: Constants.EMPTY_STRING,
      cloudGraphHostName: accountEntity.cloudGraphHostName || Constants.EMPTY_STRING,
      msGraphHost: accountEntity.msGraphHost || Constants.EMPTY_STRING,
      code: void 0,
      fromNativeBroker: false
    };
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.mjs
var HybridSpaAuthorizationCodeClient = class extends AuthorizationCodeClient {
  constructor(config) {
    super(config);
    this.includeRedirectUri = false;
  }
};

// node_modules/@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.mjs
var SilentAuthCodeClient = class extends StandardInteractionClient {
  constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeMessageHandler, correlationId) {
    super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
    this.apiId = apiId;
  }
  /**
   * Acquires a token silently by redeeming an authorization code against the /token endpoint
   * @param request
   */
  acquireToken(request) {
    return __async(this, null, function* () {
      if (!request.code) {
        throw createBrowserAuthError(authCodeRequired);
      }
      const silentRequest = yield invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, request.correlationId)(request, InteractionType.Silent);
      const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
      try {
        const authCodeRequest = __spreadProps(__spreadValues({}, silentRequest), {
          code: request.code
        });
        const clientConfig = yield invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, request.correlationId)(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
        const authClient = new HybridSpaAuthorizationCodeClient(clientConfig);
        this.logger.verbose("Auth code client created");
        const interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
        return yield invokeAsync(interactionHandler.handleCodeResponseFromServer.bind(interactionHandler), PerformanceEvents.HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)({
          code: request.code,
          msgraph_host: request.msGraphHost,
          cloud_graph_host_name: request.cloudGraphHostName,
          cloud_instance_host_name: request.cloudInstanceHostName
        }, silentRequest, false);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    });
  }
  /**
   * Currently Unsupported
   */
  logout() {
    return Promise.reject(createBrowserAuthError(silentLogoutUnsupported));
  }
};

// node_modules/@azure/msal-browser/dist/controllers/StandardController.mjs
function getAccountType(account) {
  const idTokenClaims = account?.idTokenClaims;
  if (idTokenClaims?.tfp || idTokenClaims?.acr) {
    return "B2C";
  }
  if (!idTokenClaims?.tid) {
    return void 0;
  } else if (idTokenClaims?.tid === "9188040d-6c67-4c5b-b112-36a304b66dad") {
    return "MSA";
  }
  return "AAD";
}
var StandardController = class _StandardController {
  /**
   * @constructor
   * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
   *
   * Important attributes in the Configuration object for auth are:
   * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
   * - authority: the authority URL for your application.
   * - redirect_uri: the uri of your application registered in the portal.
   *
   * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
   * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
   * Full B2C functionality will be available in this library in future versions.
   *
   * @param configuration Object for the MSAL PublicClientApplication instance
   */
  constructor(operatingContext) {
    this.operatingContext = operatingContext;
    this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment();
    this.config = operatingContext.getConfig();
    this.initialized = false;
    this.logger = this.operatingContext.getLogger();
    this.networkClient = this.config.system.networkClient;
    this.navigationClient = this.config.system.navigationClient;
    this.redirectResponse = /* @__PURE__ */ new Map();
    this.hybridAuthCodeResponses = /* @__PURE__ */ new Map();
    this.performanceClient = this.config.telemetry.client;
    this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient) : DEFAULT_CRYPTO_IMPLEMENTATION;
    this.eventHandler = new EventHandler(this.logger, this.browserCrypto);
    this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, buildStaticAuthorityOptions(this.config.auth), this.performanceClient) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger);
    const nativeCacheOptions = {
      cacheLocation: BrowserCacheLocation.MemoryStorage,
      temporaryCacheLocation: BrowserCacheLocation.MemoryStorage,
      storeAuthStateInCookie: false,
      secureCookies: false,
      cacheMigrationEnabled: false,
      claimsBasedCachingEnabled: false
    };
    this.nativeInternalStorage = new BrowserCacheManager(this.config.auth.clientId, nativeCacheOptions, this.browserCrypto, this.logger, void 0, this.performanceClient);
    this.tokenCache = new TokenCache(this.config, this.browserStorage, this.logger, this.browserCrypto);
    this.activeSilentTokenRequests = /* @__PURE__ */ new Map();
    this.trackPageVisibility = this.trackPageVisibility.bind(this);
    this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
  }
  static createController(operatingContext) {
    return __async(this, null, function* () {
      const controller = new _StandardController(operatingContext);
      yield controller.initialize();
      return controller;
    });
  }
  trackPageVisibility(correlationId) {
    if (!correlationId) {
      return;
    }
    this.logger.info("Perf: Visibility change detected");
    this.performanceClient.incrementFields({ visibilityChangeCount: 1 }, correlationId);
  }
  /**
   * Initializer function to perform async startup tasks such as connecting to WAM extension
   */
  initialize() {
    return __async(this, null, function* () {
      this.logger.trace("initialize called");
      if (this.initialized) {
        this.logger.info("initialize has already been called, exiting early.");
        return;
      }
      const allowNativeBroker = this.config.system.allowNativeBroker;
      const initMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.InitializeClientApplication);
      this.eventHandler.emitEvent(EventType.INITIALIZE_START);
      if (allowNativeBroker) {
        try {
          this.nativeExtensionProvider = yield NativeMessageHandler.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient);
        } catch (e) {
          this.logger.verbose(e);
        }
      }
      if (!this.config.cache.claimsBasedCachingEnabled) {
        this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims");
        yield invokeAsync(this.browserStorage.clearTokensAndKeysWithClaims.bind(this.browserStorage), PerformanceEvents.ClearTokensAndKeysWithClaims, this.logger, this.performanceClient)(this.performanceClient);
      }
      this.initialized = true;
      this.eventHandler.emitEvent(EventType.INITIALIZE_END);
      initMeasurement.end({ allowNativeBroker, success: true });
    });
  }
  // #region Redirect Flow
  /**
   * Event handler function which allows users to fire events after the PublicClientApplication object
   * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
   * auth flows.
   * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
   * @returns Token response or null. If the return value is null, then no auth redirect was detected.
   */
  handleRedirectPromise(hash) {
    return __async(this, null, function* () {
      this.logger.verbose("handleRedirectPromise called");
      blockAPICallsBeforeInitialize(this.initialized);
      if (this.isBrowserEnvironment) {
        const redirectResponseKey = hash || "";
        let response = this.redirectResponse.get(redirectResponseKey);
        if (typeof response === "undefined") {
          response = this.handleRedirectPromiseInternal(hash);
          this.redirectResponse.set(redirectResponseKey, response);
          this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
        } else {
          this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
        }
        return response;
      }
      this.logger.verbose("handleRedirectPromise returns null, not browser environment");
      return null;
    });
  }
  /**
   * The internal details of handleRedirectPromise. This is separated out to a helper to allow handleRedirectPromise to memoize requests
   * @param hash
   * @returns
   */
  handleRedirectPromiseInternal(hash) {
    return __async(this, null, function* () {
      const loggedInAccounts = this.getAllAccounts();
      const request = this.browserStorage.getCachedNativeRequest();
      const useNative = request && NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !hash;
      const correlationId = useNative ? request?.correlationId : this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, true) || "";
      const rootMeasurement = this.performanceClient.startMeasurement("acquireTokenRedirect", correlationId);
      this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, InteractionType.Redirect);
      let redirectResponse;
      if (useNative && this.nativeExtensionProvider) {
        this.logger.trace("handleRedirectPromise - acquiring token from native platform");
        const nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, request.accountId, this.nativeInternalStorage, request.correlationId);
        redirectResponse = invokeAsync(nativeClient.handleRedirectPromise.bind(nativeClient), PerformanceEvents.HandleNativeRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(this.performanceClient, rootMeasurement.event.correlationId);
      } else {
        this.logger.trace("handleRedirectPromise - acquiring token from web flow");
        const redirectClient = this.createRedirectClient(correlationId);
        redirectResponse = invokeAsync(redirectClient.handleRedirectPromise.bind(redirectClient), PerformanceEvents.HandleRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(hash, rootMeasurement);
      }
      return redirectResponse.then((result) => {
        if (result) {
          const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
          if (isLoggingIn) {
            this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Redirect, result);
            this.logger.verbose("handleRedirectResponse returned result, login success");
          } else {
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Redirect, result);
            this.logger.verbose("handleRedirectResponse returned result, acquire token success");
          }
          rootMeasurement.end({
            success: true,
            accountType: getAccountType(result.account)
          });
        } else {
          if (rootMeasurement.event.errorCode) {
            rootMeasurement.end({ success: false });
          } else {
            rootMeasurement.discard();
          }
        }
        this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
        return result;
      }).catch((e) => {
        const eventError = e;
        if (loggedInAccounts.length > 0) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, eventError);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, eventError);
        }
        this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
        rootMeasurement.end({
          success: false
        }, eventError);
        throw e;
      });
    });
  }
  /**
   * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
   * the page, so any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  acquireTokenRedirect(request) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.verbose("acquireTokenRedirect called", correlationId);
      redirectPreflightCheck(this.initialized, this.config);
      this.browserStorage.setInteractionInProgress(true);
      const isLoggedIn = this.getAllAccounts().length > 0;
      if (isLoggedIn) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Redirect, request);
      } else {
        this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Redirect, request);
      }
      let result;
      if (this.nativeExtensionProvider && this.canUseNative(request)) {
        const nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(request), this.nativeInternalStorage, correlationId);
        result = nativeClient.acquireTokenRedirect(request).catch((e) => {
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.nativeExtensionProvider = void 0;
            const redirectClient = this.createRedirectClient(correlationId);
            return redirectClient.acquireToken(request);
          } else if (e instanceof InteractionRequiredAuthError) {
            this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
            const redirectClient = this.createRedirectClient(correlationId);
            return redirectClient.acquireToken(request);
          }
          this.browserStorage.setInteractionInProgress(false);
          throw e;
        });
      } else {
        const redirectClient = this.createRedirectClient(correlationId);
        result = redirectClient.acquireToken(request);
      }
      return result.catch((e) => {
        if (isLoggedIn) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
        }
        throw e;
      });
    });
  }
  // #endregion
  // #region Popup Flow
  /**
   * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenPopup(request) {
    const correlationId = this.getRequestCorrelationId(request);
    const atPopupMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPopup, correlationId);
    atPopupMeasurement.add({
      scenarioId: request.scenarioId,
      accountType: getAccountType(request.account)
    });
    try {
      this.logger.verbose("acquireTokenPopup called", correlationId);
      preflightCheck(this.initialized);
      this.browserStorage.setInteractionInProgress(true);
    } catch (e) {
      return Promise.reject(e);
    }
    const loggedInAccounts = this.getAllAccounts();
    if (loggedInAccounts.length > 0) {
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, request);
    } else {
      this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Popup, request);
    }
    let result;
    if (this.canUseNative(request)) {
      result = this.acquireTokenNative(__spreadProps(__spreadValues({}, request), {
        correlationId
      }), ApiId.acquireTokenPopup).then((response) => {
        this.browserStorage.setInteractionInProgress(false);
        atPopupMeasurement.end({
          success: true,
          isNativeBroker: true,
          requestId: response.requestId,
          accountType: getAccountType(response.account)
        });
        return response;
      }).catch((e) => {
        if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
          this.nativeExtensionProvider = void 0;
          const popupClient = this.createPopupClient(correlationId);
          return popupClient.acquireToken(request);
        } else if (e instanceof InteractionRequiredAuthError) {
          this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
          const popupClient = this.createPopupClient(correlationId);
          return popupClient.acquireToken(request);
        }
        this.browserStorage.setInteractionInProgress(false);
        throw e;
      });
    } else {
      const popupClient = this.createPopupClient(correlationId);
      result = popupClient.acquireToken(request);
    }
    return result.then((result2) => {
      const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
      if (isLoggingIn) {
        this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Popup, result2);
      } else {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result2);
      }
      atPopupMeasurement.end({
        success: true,
        requestId: result2.requestId,
        accessTokenSize: result2.accessToken.length,
        idTokenSize: result2.idToken.length,
        accountType: getAccountType(result2.account)
      });
      return result2;
    }).catch((e) => {
      if (loggedInAccounts.length > 0) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e);
      } else {
        this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Popup, null, e);
      }
      atPopupMeasurement.end({
        success: false
      }, e);
      return Promise.reject(e);
    });
  }
  trackPageVisibilityWithMeasurement() {
    const measurement = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
    if (!measurement) {
      return;
    }
    this.logger.info("Perf: Visibility change detected in ", measurement.event.name);
    measurement.increment({
      visibilityChangeCount: 1
    });
  }
  // #endregion
  // #region Silent Flow
  /**
   * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
   * - Any browser using a form of Intelligent Tracking Prevention
   * - If there is not an established session with the service
   *
   * In these cases, the request must be done inside a popup or full frame redirect.
   *
   * For the cases where interaction is required, you cannot send a request with prompt=none.
   *
   * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
   * you session on the server still exists.
   * @param request {@link SsoSilentRequest}
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  ssoSilent(request) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(request);
      const validRequest = __spreadProps(__spreadValues({}, request), {
        // will be PromptValue.NONE or PromptValue.NO_SESSION
        prompt: request.prompt,
        correlationId
      });
      preflightCheck(this.initialized);
      this.ssoSilentMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SsoSilent, correlationId);
      this.ssoSilentMeasurement?.increment({
        visibilityChangeCount: 0
      });
      this.ssoSilentMeasurement?.add({
        scenarioId: request.scenarioId,
        accountType: getAccountType(request.account)
      });
      document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      this.logger.verbose("ssoSilent called", correlationId);
      this.eventHandler.emitEvent(EventType.SSO_SILENT_START, InteractionType.Silent, validRequest);
      let result;
      if (this.canUseNative(validRequest)) {
        result = this.acquireTokenNative(validRequest, ApiId.ssoSilent).catch((e) => {
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.nativeExtensionProvider = void 0;
            const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
            return silentIframeClient.acquireToken(validRequest);
          }
          throw e;
        });
      } else {
        const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
        result = silentIframeClient.acquireToken(validRequest);
      }
      return result.then((response) => {
        this.eventHandler.emitEvent(EventType.SSO_SILENT_SUCCESS, InteractionType.Silent, response);
        this.ssoSilentMeasurement?.end({
          success: true,
          isNativeBroker: response.fromNativeBroker,
          requestId: response.requestId,
          accessTokenSize: response.accessToken.length,
          idTokenSize: response.idToken.length,
          accountType: getAccountType(response.account)
        });
        return response;
      }).catch((e) => {
        this.eventHandler.emitEvent(EventType.SSO_SILENT_FAILURE, InteractionType.Silent, null, e);
        this.ssoSilentMeasurement?.end({
          success: false
        }, e);
        throw e;
      }).finally(() => {
        document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      });
    });
  }
  /**
   * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
   * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
   * This API is not indended for normal authorization code acquisition and redemption.
   *
   * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
   *
   * @param request {@link AuthorizationCodeRequest}
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenByCode(request) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.trace("acquireTokenByCode called", correlationId);
      preflightCheck(this.initialized);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_START, InteractionType.Silent, request);
      const atbcMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCode, correlationId);
      atbcMeasurement.add({ scenarioId: request.scenarioId });
      try {
        if (request.code && request.nativeAccountId) {
          throw createBrowserAuthError(spaCodeAndNativeAccountIdPresent);
        } else if (request.code) {
          const hybridAuthCode = request.code;
          let response = this.hybridAuthCodeResponses.get(hybridAuthCode);
          if (!response) {
            this.logger.verbose("Initiating new acquireTokenByCode request", correlationId);
            response = this.acquireTokenByCodeAsync(__spreadProps(__spreadValues({}, request), {
              correlationId
            })).then((result) => {
              this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_SUCCESS, InteractionType.Silent, result);
              this.hybridAuthCodeResponses.delete(hybridAuthCode);
              atbcMeasurement.end({
                success: true,
                isNativeBroker: result.fromNativeBroker,
                requestId: result.requestId,
                accessTokenSize: result.accessToken.length,
                idTokenSize: result.idToken.length,
                accountType: getAccountType(result.account)
              });
              return result;
            }).catch((error) => {
              this.hybridAuthCodeResponses.delete(hybridAuthCode);
              this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, error);
              atbcMeasurement.end({
                success: false
              }, error);
              throw error;
            });
            this.hybridAuthCodeResponses.set(hybridAuthCode, response);
          } else {
            this.logger.verbose("Existing acquireTokenByCode request found", correlationId);
            atbcMeasurement.discard();
          }
          return yield response;
        } else if (request.nativeAccountId) {
          if (this.canUseNative(request, request.nativeAccountId)) {
            const result = yield this.acquireTokenNative(__spreadProps(__spreadValues({}, request), {
              correlationId
            }), ApiId.acquireTokenByCode, request.nativeAccountId).catch((e) => {
              if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
                this.nativeExtensionProvider = void 0;
              }
              throw e;
            });
            atbcMeasurement.end({
              accountType: getAccountType(result.account),
              success: true
            });
            return result;
          } else {
            throw createBrowserAuthError(unableToAcquireTokenFromNativePlatform);
          }
        } else {
          throw createBrowserAuthError(authCodeOrNativeAccountIdRequired);
        }
      } catch (e) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, e);
        atbcMeasurement.end({
          success: false
        }, e);
        throw e;
      }
    });
  }
  /**
   * Creates a SilentAuthCodeClient to redeem an authorization code.
   * @param request
   * @returns Result of the operation to redeem the authorization code
   */
  acquireTokenByCodeAsync(request) {
    return __async(this, null, function* () {
      this.logger.trace("acquireTokenByCodeAsync called", request.correlationId);
      this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCodeAsync, request.correlationId);
      this.acquireTokenByCodeAsyncMeasurement?.increment({
        visibilityChangeCount: 0
      });
      document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      const silentAuthCodeClient = this.createSilentAuthCodeClient(request.correlationId);
      const silentTokenResult = yield silentAuthCodeClient.acquireToken(request).then((response) => {
        this.acquireTokenByCodeAsyncMeasurement?.end({
          success: true,
          fromCache: response.fromCache,
          isNativeBroker: response.fromNativeBroker,
          requestId: response.requestId
        });
        return response;
      }).catch((tokenRenewalError) => {
        this.acquireTokenByCodeAsyncMeasurement?.end({
          success: false
        }, tokenRenewalError);
        throw tokenRenewalError;
      }).finally(() => {
        document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      });
      return silentTokenResult;
    });
  }
  /**
   * Attempt to acquire an access token from the cache
   * @param silentCacheClient SilentCacheClient
   * @param commonRequest CommonSilentFlowRequest
   * @param silentRequest SilentRequest
   * @returns A promise that, when resolved, returns the access token
   */
  acquireTokenFromCache(commonRequest, cacheLookupPolicy) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenFromCache, commonRequest.correlationId);
      switch (cacheLookupPolicy) {
        case CacheLookupPolicy.Default:
        case CacheLookupPolicy.AccessToken:
        case CacheLookupPolicy.AccessTokenAndRefreshToken:
          const silentCacheClient = this.createSilentCacheClient(commonRequest.correlationId);
          return invokeAsync(silentCacheClient.acquireToken.bind(silentCacheClient), PerformanceEvents.SilentCacheClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
        default:
          throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired);
      }
    });
  }
  /**
   * Attempt to acquire an access token via a refresh token
   * @param commonRequest CommonSilentFlowRequest
   * @param cacheLookupPolicy CacheLookupPolicy
   * @returns A promise that, when resolved, returns the access token
   */
  acquireTokenByRefreshToken(commonRequest, cacheLookupPolicy) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenByRefreshToken, commonRequest.correlationId);
      switch (cacheLookupPolicy) {
        case CacheLookupPolicy.Default:
        case CacheLookupPolicy.AccessTokenAndRefreshToken:
        case CacheLookupPolicy.RefreshToken:
        case CacheLookupPolicy.RefreshTokenAndNetwork:
          const silentRefreshClient = this.createSilentRefreshClient(commonRequest.correlationId);
          return invokeAsync(silentRefreshClient.acquireToken.bind(silentRefreshClient), PerformanceEvents.SilentRefreshClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
        default:
          throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired);
      }
    });
  }
  /**
   * Attempt to acquire an access token via an iframe
   * @param request CommonSilentFlowRequest
   * @returns A promise that, when resolved, returns the access token
   */
  acquireTokenBySilentIframe(request) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenBySilentIframe, request.correlationId);
      const silentIframeClient = this.createSilentIframeClient(request.correlationId);
      return invokeAsync(silentIframeClient.acquireToken.bind(silentIframeClient), PerformanceEvents.SilentIframeClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(request);
    });
  }
  // #endregion
  // #region Logout
  /**
   * Deprecated logout function. Use logoutRedirect or logoutPopup instead
   * @param logoutRequest
   * @deprecated
   */
  logout(logoutRequest) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", correlationId);
      return this.logoutRedirect(__spreadValues({
        correlationId
      }, logoutRequest));
    });
  }
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  logoutRedirect(logoutRequest) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      redirectPreflightCheck(this.initialized, this.config);
      this.browserStorage.setInteractionInProgress(true);
      const redirectClient = this.createRedirectClient(correlationId);
      return redirectClient.logout(logoutRequest);
    });
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logoutPopup(logoutRequest) {
    try {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      preflightCheck(this.initialized);
      this.browserStorage.setInteractionInProgress(true);
      const popupClient = this.createPopupClient(correlationId);
      return popupClient.logout(logoutRequest);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Creates a cache interaction client to clear broswer cache.
   * @param logoutRequest
   */
  clearCache(logoutRequest) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      const cacheClient = this.createSilentCacheClient(correlationId);
      return cacheClient.logout(logoutRequest);
    });
  }
  // #endregion
  // #region Account APIs
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    this.logger.verbose("getAllAccounts called");
    return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts(accountFilter) : [];
  }
  /**
   * Returns the first account found in the cache that matches the account filter passed in.
   * @param accountFilter
   * @returns The first account found in the cache matching the provided filter or null if no account could be found.
   */
  getAccount(accountFilter) {
    this.logger.trace("getAccount called");
    if (Object.keys(accountFilter).length === 0) {
      this.logger.warning("getAccount: No accountFilter provided");
      return null;
    }
    const account = this.browserStorage.getAccountInfoFilteredBy(accountFilter);
    if (account) {
      this.logger.verbose("getAccount: Account matching provided filter found, returning");
      return account;
    } else {
      this.logger.verbose("getAccount: No matching account found, returning null");
      return null;
    }
  }
  /**
   * Returns the signed in account matching username.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found.
   * This API is provided for convenience but getAccountById should be used for best reliability
   * @param username
   * @returns The account object stored in MSAL
   */
  getAccountByUsername(username) {
    this.logger.trace("getAccountByUsername called");
    if (!username) {
      this.logger.warning("getAccountByUsername: No username provided");
      return null;
    }
    const account = this.browserStorage.getAccountInfoFilteredBy({
      username
    });
    if (account) {
      this.logger.verbose("getAccountByUsername: Account matching username found, returning");
      this.logger.verbosePii(`getAccountByUsername: Returning signed-in accounts matching username: ${username}`);
      return account;
    } else {
      this.logger.verbose("getAccountByUsername: No matching account found, returning null");
      return null;
    }
  }
  /**
   * Returns the signed in account matching homeAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param homeAccountId
   * @returns The account object stored in MSAL
   */
  getAccountByHomeId(homeAccountId) {
    this.logger.trace("getAccountByHomeId called");
    if (!homeAccountId) {
      this.logger.warning("getAccountByHomeId: No homeAccountId provided");
      return null;
    }
    const account = this.browserStorage.getAccountInfoFilteredBy({
      homeAccountId
    });
    if (account) {
      this.logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning");
      this.logger.verbosePii(`getAccountByHomeId: Returning signed-in accounts matching homeAccountId: ${homeAccountId}`);
      return account;
    } else {
      this.logger.verbose("getAccountByHomeId: No matching account found, returning null");
      return null;
    }
  }
  /**
   * Returns the signed in account matching localAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param localAccountId
   * @returns The account object stored in MSAL
   */
  getAccountByLocalId(localAccountId) {
    this.logger.trace("getAccountByLocalId called");
    if (!localAccountId) {
      this.logger.warning("getAccountByLocalId: No localAccountId provided");
      return null;
    }
    const account = this.browserStorage.getAccountInfoFilteredBy({
      localAccountId
    });
    if (account) {
      this.logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning");
      this.logger.verbosePii(`getAccountByLocalId: Returning signed-in accounts matching localAccountId: ${localAccountId}`);
      return account;
    } else {
      this.logger.verbose("getAccountByLocalId: No matching account found, returning null");
      return null;
    }
  }
  /**
   * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
   * @param account
   */
  setActiveAccount(account) {
    this.browserStorage.setActiveAccount(account);
  }
  /**
   * Gets the currently active account
   */
  getActiveAccount() {
    return this.browserStorage.getActiveAccount();
  }
  // #endregion
  /**
   * Hydrates the cache with the tokens from an AuthenticationResult
   * @param result
   * @param request
   * @returns
   */
  hydrateCache(result, request) {
    return __async(this, null, function* () {
      this.logger.verbose("hydrateCache called");
      const accountEntity = AccountEntity.createFromAccountInfo(result.account, result.cloudGraphHostName, result.msGraphHost);
      this.browserStorage.setAccount(accountEntity);
      if (result.fromNativeBroker) {
        this.logger.verbose("Response was from native broker, storing in-memory");
        return this.nativeInternalStorage.hydrateCache(result, request);
      } else {
        return this.browserStorage.hydrateCache(result, request);
      }
    });
  }
  // #region Helpers
  /**
   * Acquire a token from native device (e.g. WAM)
   * @param request
   */
  acquireTokenNative(request, apiId, accountId) {
    return __async(this, null, function* () {
      this.logger.trace("acquireTokenNative called");
      if (!this.nativeExtensionProvider) {
        throw createBrowserAuthError(nativeConnectionNotEstablished);
      }
      const nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.nativeExtensionProvider, accountId || this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
      return nativeClient.acquireToken(request);
    });
  }
  /**
   * Returns boolean indicating if this request can use the native broker
   * @param request
   */
  canUseNative(request, accountId) {
    this.logger.trace("canUseNative called");
    if (!NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme)) {
      this.logger.trace("canUseNative: isNativeAvailable returned false, returning false");
      return false;
    }
    if (request.prompt) {
      switch (request.prompt) {
        case PromptValue.NONE:
        case PromptValue.CONSENT:
        case PromptValue.LOGIN:
          this.logger.trace("canUseNative: prompt is compatible with native flow");
          break;
        default:
          this.logger.trace(`canUseNative: prompt = ${request.prompt} is not compatible with native flow, returning false`);
          return false;
      }
    }
    if (!accountId && !this.getNativeAccountId(request)) {
      this.logger.trace("canUseNative: nativeAccountId is not available, returning false");
      return false;
    }
    return true;
  }
  /**
   * Get the native accountId from the account
   * @param request
   * @returns
   */
  getNativeAccountId(request) {
    const account = request.account || this.getAccount({
      loginHint: request.loginHint,
      sid: request.sid
    }) || this.getActiveAccount();
    return account && account.nativeAccountId || "";
  }
  /**
   * Returns new instance of the Popup Interaction Client
   * @param correlationId
   */
  createPopupClient(correlationId) {
    return new PopupClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
  }
  /**
   * Returns new instance of the Redirect Interaction Client
   * @param correlationId
   */
  createRedirectClient(correlationId) {
    return new RedirectClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
  }
  /**
   * Returns new instance of the Silent Iframe Interaction Client
   * @param correlationId
   */
  createSilentIframeClient(correlationId) {
    return new SilentIframeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
  }
  /**
   * Returns new instance of the Silent Cache Interaction Client
   */
  createSilentCacheClient(correlationId) {
    return new SilentCacheClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
  }
  /**
   * Returns new instance of the Silent Refresh Interaction Client
   */
  createSilentRefreshClient(correlationId) {
    return new SilentRefreshClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
  }
  /**
   * Returns new instance of the Silent AuthCode Interaction Client
   */
  createSilentAuthCodeClient(correlationId) {
    return new SilentAuthCodeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, correlationId);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   */
  addEventCallback(callback) {
    return this.eventHandler.addEventCallback(callback);
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    this.eventHandler.removeEventCallback(callbackId);
  }
  /**
   * Registers a callback to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    return this.performanceClient.addPerformanceCallback(callback);
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    return this.performanceClient.removePerformanceCallback(callbackId);
  }
  /**
   * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  enableAccountStorageEvents() {
    this.eventHandler.enableAccountStorageEvents();
  }
  /**
   * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  disableAccountStorageEvents() {
    this.eventHandler.disableAccountStorageEvents();
  }
  /**
   * Gets the token cache for the application.
   */
  getTokenCache() {
    return this.tokenCache;
  }
  /**
   * Returns the logger instance
   */
  getLogger() {
    return this.logger;
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger Logger instance
   */
  setLogger(logger) {
    this.logger = logger;
  }
  /**
   * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
   * @param sku
   * @param version
   */
  initializeWrapperLibrary(sku, version2) {
    this.browserStorage.setWrapperMetadata(sku, version2);
  }
  /**
   * Sets navigation client
   * @param navigationClient
   */
  setNavigationClient(navigationClient) {
    this.navigationClient = navigationClient;
  }
  /**
   * Returns the configuration object
   */
  getConfiguration() {
    return this.config;
  }
  /**
   * Returns the performance client
   */
  getPerformanceClient() {
    return this.performanceClient;
  }
  /**
   * Returns the browser env indicator
   */
  isBrowserEnv() {
    return this.isBrowserEnvironment;
  }
  /**
   * Returns the event handler
   */
  getEventHandler() {
    return this.eventHandler;
  }
  /**
   * Generates a correlation id for a request if none is provided.
   *
   * @protected
   * @param {?Partial<BaseAuthRequest>} [request]
   * @returns {string}
   */
  getRequestCorrelationId(request) {
    if (request?.correlationId) {
      return request.correlationId;
    }
    if (this.isBrowserEnvironment) {
      return createNewGuid();
    }
    return Constants.EMPTY_STRING;
  }
  // #endregion
  /**
   * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
   * any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  loginRedirect(request) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.verbose("loginRedirect called", correlationId);
      return this.acquireTokenRedirect(__spreadValues({
        correlationId
      }, request || DEFAULT_REQUEST));
    });
  }
  /**
   * Use when initiating the login process via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  loginPopup(request) {
    const correlationId = this.getRequestCorrelationId(request);
    this.logger.verbose("loginPopup called", correlationId);
    return this.acquireTokenPopup(__spreadValues({
      correlationId
    }, request || DEFAULT_REQUEST));
  }
  /**
   * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
   *
   * @param {@link (SilentRequest:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
   */
  acquireTokenSilent(request) {
    return __async(this, null, function* () {
      const correlationId = this.getRequestCorrelationId(request);
      const atsMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilent, correlationId);
      atsMeasurement.add({
        cacheLookupPolicy: request.cacheLookupPolicy,
        scenarioId: request.scenarioId
      });
      preflightCheck(this.initialized);
      this.logger.verbose("acquireTokenSilent called", correlationId);
      const account = request.account || this.getActiveAccount();
      if (!account) {
        throw createBrowserAuthError(noAccountError);
      }
      atsMeasurement.add({ accountType: getAccountType(account) });
      const thumbprint = {
        clientId: this.config.auth.clientId,
        authority: request.authority || Constants.EMPTY_STRING,
        scopes: request.scopes,
        homeAccountIdentifier: account.homeAccountId,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid,
        shrOptions: request.shrOptions
      };
      const silentRequestKey = JSON.stringify(thumbprint);
      const cachedResponse = this.activeSilentTokenRequests.get(silentRequestKey);
      if (typeof cachedResponse === "undefined") {
        this.logger.verbose("acquireTokenSilent called for the first time, storing active request", correlationId);
        const response = invokeAsync(this.acquireTokenSilentAsync.bind(this), PerformanceEvents.AcquireTokenSilentAsync, this.logger, this.performanceClient, correlationId)(__spreadProps(__spreadValues({}, request), {
          correlationId
        }), account).then((result) => {
          this.activeSilentTokenRequests.delete(silentRequestKey);
          atsMeasurement.end({
            success: true,
            fromCache: result.fromCache,
            isNativeBroker: result.fromNativeBroker,
            cacheLookupPolicy: request.cacheLookupPolicy,
            requestId: result.requestId,
            accessTokenSize: result.accessToken.length,
            idTokenSize: result.idToken.length
          });
          return result;
        }).catch((error) => {
          this.activeSilentTokenRequests.delete(silentRequestKey);
          atsMeasurement.end({
            success: false
          }, error);
          throw error;
        });
        this.activeSilentTokenRequests.set(silentRequestKey, response);
        return __spreadProps(__spreadValues({}, yield response), {
          state: request.state
        });
      } else {
        this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", correlationId);
        atsMeasurement.discard();
        return __spreadProps(__spreadValues({}, yield cachedResponse), {
          state: request.state
        });
      }
    });
  }
  /**
   * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
   * @param {@link (SilentRequest:type)}
   * @param {@link (AccountInfo:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse}
   */
  acquireTokenSilentAsync(request, account) {
    return __async(this, null, function* () {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenSilentAsync, request.correlationId);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, request);
      if (request.correlationId) {
        this.performanceClient.incrementFields({ visibilityChangeCount: 0 }, request.correlationId);
      }
      document.addEventListener("visibilitychange", () => this.trackPageVisibility(request.correlationId));
      const silentRequest = yield invokeAsync(initializeSilentRequest, PerformanceEvents.InitializeSilentRequest, this.logger, this.performanceClient, request.correlationId)(request, account, this.config, this.performanceClient, this.logger);
      const cacheLookupPolicy = request.cacheLookupPolicy || CacheLookupPolicy.Default;
      const result = this.acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy).catch((refreshTokenError) => __async(this, null, function* () {
        const shouldTryToResolveSilently = checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, cacheLookupPolicy);
        if (shouldTryToResolveSilently) {
          if (!this.activeIframeRequest) {
            let _resolve;
            this.activeIframeRequest = [
              new Promise((resolve) => {
                _resolve = resolve;
              }),
              silentRequest.correlationId
            ];
            this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", silentRequest.correlationId);
            return invokeAsync(this.acquireTokenBySilentIframe.bind(this), PerformanceEvents.AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest).then((iframeResult) => {
              _resolve(true);
              return iframeResult;
            }).catch((e) => {
              _resolve(false);
              throw e;
            }).finally(() => {
              this.activeIframeRequest = void 0;
            });
          } else if (cacheLookupPolicy !== CacheLookupPolicy.Skip) {
            const [activePromise, activeCorrelationId] = this.activeIframeRequest;
            this.logger.verbose(`Iframe request is already in progress, awaiting resolution for request with correlationId: ${activeCorrelationId}`, silentRequest.correlationId);
            const awaitConcurrentIframeMeasure = this.performanceClient.startMeasurement(PerformanceEvents.AwaitConcurrentIframe, silentRequest.correlationId);
            awaitConcurrentIframeMeasure.add({
              awaitIframeCorrelationId: activeCorrelationId
            });
            const activePromiseResult = yield activePromise;
            awaitConcurrentIframeMeasure.end({
              success: activePromiseResult
            });
            if (activePromiseResult) {
              this.logger.verbose(`Parallel iframe request with correlationId: ${activeCorrelationId} succeeded. Retrying cache and/or RT redemption`, silentRequest.correlationId);
              return this.acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy);
            } else {
              this.logger.info(`Iframe request with correlationId: ${activeCorrelationId} failed. Interaction is required.`);
              throw refreshTokenError;
            }
          } else {
            this.logger.warning("Another iframe request is currently in progress and CacheLookupPolicy is set to Skip. This may result in degraded performance and/or reliability for both calls. Please consider changing the CacheLookupPolicy to take advantage of request queuing and token cache.", silentRequest.correlationId);
            return invokeAsync(this.acquireTokenBySilentIframe.bind(this), PerformanceEvents.AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
          }
        } else {
          throw refreshTokenError;
        }
      }));
      return result.then((response) => {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, response);
        if (request.correlationId) {
          this.performanceClient.addFields({
            fromCache: response.fromCache,
            isNativeBroker: response.fromNativeBroker,
            requestId: response.requestId
          }, request.correlationId);
        }
        return response;
      }).catch((tokenRenewalError) => {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, tokenRenewalError);
        throw tokenRenewalError;
      }).finally(() => {
        document.removeEventListener("visibilitychange", () => this.trackPageVisibility(request.correlationId));
      });
    });
  }
  /**
   * AcquireTokenSilent without the iframe fallback. This is used to enable the correct fallbacks in cases where there's a potential for multiple silent requests to be made in parallel and prevent those requests from making concurrent iframe requests.
   * @param silentRequest
   * @param cacheLookupPolicy
   * @returns
   */
  acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy) {
    return __async(this, null, function* () {
      if (NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, silentRequest.authenticationScheme) && silentRequest.account.nativeAccountId) {
        this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform");
        return this.acquireTokenNative(silentRequest, ApiId.acquireTokenSilent_silentFlow).catch((e) => __async(this, null, function* () {
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow");
            this.nativeExtensionProvider = void 0;
            throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired);
          }
          throw e;
        }));
      } else {
        this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow");
        return invokeAsync(this.acquireTokenFromCache.bind(this), PerformanceEvents.AcquireTokenFromCache, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy).catch((cacheError) => {
          if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
            throw cacheError;
          }
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, InteractionType.Silent, silentRequest);
          return invokeAsync(this.acquireTokenByRefreshToken.bind(this), PerformanceEvents.AcquireTokenByRefreshToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy);
        });
      }
    });
  }
};
function checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, cacheLookupPolicy) {
  const noInteractionRequired = !(refreshTokenError instanceof InteractionRequiredAuthError && // For refresh token errors, bad_token does not always require interaction (silently resolvable)
  refreshTokenError.subError !== InteractionRequiredAuthErrorCodes_exports.badToken);
  const refreshTokenRefreshRequired = refreshTokenError.errorCode === BrowserConstants.INVALID_GRANT_ERROR || refreshTokenError.errorCode === ClientAuthErrorCodes_exports.tokenRefreshRequired;
  const isSilentlyResolvable = noInteractionRequired && refreshTokenRefreshRequired || refreshTokenError.errorCode === InteractionRequiredAuthErrorCodes_exports.noTokensFound || refreshTokenError.errorCode === InteractionRequiredAuthErrorCodes_exports.refreshTokenExpired;
  const tryIframeRenewal = iFrameRenewalPolicies.includes(cacheLookupPolicy);
  return isSilentlyResolvable && tryIframeRenewal;
}

export {
  stubbedPublicClientApplicationCalled,
  BrowserConfigurationAuthErrorCodes_exports,
  BrowserConfigurationAuthErrorMessage,
  BrowserConfigurationAuthError,
  createBrowserConfigurationAuthError,
  blockNonBrowserEnvironment,
  blockAPICallsBeforeInitialize,
  BrowserUtils_exports,
  NavigationClient,
  DEFAULT_IFRAME_TIMEOUT_MS,
  buildConfiguration,
  name,
  version,
  BrowserStorage,
  BrowserCacheManager,
  DEFAULT_BROWSER_CACHE_MANAGER,
  StandardController
};
/*! Bundled license information:

@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/cache/BrowserStorage.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/utils/BrowserProtocolUtils.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/cache/BrowserCacheManager.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/utils/BrowserUtils.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/packageMetadata.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/BaseInteractionClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/crypto/PkceGenerator.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/request/RequestHelpers.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/StandardInteractionClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/error/NativeAuthErrorCodes.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/broker/nativeBroker/NativeStatusCodes.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/error/NativeAuthError.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/SilentCacheClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/NativeInteractionClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/broker/nativeBroker/NativeMessageHandler.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_handler/InteractionHandler.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/response/ResponseHandler.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/PopupClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_handler/RedirectHandler.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/RedirectClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/navigation/NavigationClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/network/FetchClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/config/Configuration.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_handler/SilentHandler.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/SilentIframeClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/SilentRefreshClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/cache/TokenCache.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)

@azure/msal-browser/dist/controllers/StandardController.mjs:
  (*! @azure/msal-browser v3.14.0 2024-05-07 *)
*/
//# sourceMappingURL=chunk-NSJEFZLJ.js.map
